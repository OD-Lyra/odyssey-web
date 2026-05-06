import Stripe from "stripe";

async function main() {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY in environment.");
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-04-22.dahlia",
  });

  const product = await stripe.products.create({
    name: "Test Chirurgical Odyssey",
    metadata: {
      odyssey_code: "chirurgie_001",
      item_type: "upsell",
    },
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 4200, // 42.00 CAD en cents
    currency: "cad",
  });

  console.log("Product created:", product.id);
  console.log("Price created:", price.id);
}

main().catch((error) => {
  console.error("Failed to create test Stripe product:", error);
  process.exit(1);
});
