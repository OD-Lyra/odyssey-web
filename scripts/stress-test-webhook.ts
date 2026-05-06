/**
 * Stress test webhook Stripe (concurrence lock UUID).
 *
 * Envoie le MEME payload product.created (meme event_id) 5 fois en parallele
 * vers le webhook local pour verifier le comportement d'idempotence/locking.
 */
import Stripe from "stripe";

const WEBHOOK_URL = "http://localhost:3000/api/stripe/webhook";
const PARALLEL_REQUESTS = 5;

function makeQaIds() {
  const random = Math.random().toString(36).slice(2, 10);
  const eventId = `qa_evt_${random}`;
  const odysseyCode = `qa_product_${random}`;
  return { eventId, odysseyCode };
}

async function main() {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secretKey || !webhookSecret) {
    throw new Error("Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET in environment.");
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-04-22.dahlia",
  });

  const { eventId, odysseyCode } = makeQaIds();
  const now = Math.floor(Date.now() / 1000);

  const payload = {
    id: eventId,
    object: "event",
    api_version: "2025-06-30.basil",
    created: now,
    type: "product.created",
    livemode: false,
    pending_webhooks: 1,
    request: {
      id: null,
      idempotency_key: null,
    },
    data: {
      object: {
        id: `prod_${Math.random().toString(36).slice(2, 12)}`,
        object: "product",
        active: true,
        created: now,
        default_price: null,
        description: "QA stress test product",
        images: [],
        livemode: false,
        marketing_features: [],
        metadata: {
          odyssey_code: odysseyCode,
          item_type: "upsell",
        },
        name: "QA Stress Product",
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        tax_code: null,
        type: "service",
        unit_label: null,
        updated: now,
        url: null,
      },
    },
  };

  const body = JSON.stringify(payload);
  const signature = stripe.webhooks.generateTestHeaderString({
    payload: body,
    secret: webhookSecret,
  });

  const headers = {
    "content-type": "application/json",
    "stripe-signature": signature,
  };

  const requests = Array.from({ length: PARALLEL_REQUESTS }, async (_, index) => {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers,
      body,
    });
    const text = await res.text();
    return {
      request: index + 1,
      status: res.status,
      body: text,
    };
  });

  const results = await Promise.all(requests);

  console.log("=== Stress Test Webhook Results ===");
  console.log("event_id:", eventId);
  console.log("odyssey_code:", odysseyCode);
  console.log("total_requests:", PARALLEL_REQUESTS);
  console.log(
    "statuses:",
    results.map((r) => r.status),
  );
  console.log("details:", results);
}

main().catch((error) => {
  console.error("Stress test failed:", error);
  process.exit(1);
});

