import Stripe from "stripe";

async function main() {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY in environment.");
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-04-22.dahlia",
  });

  try {
    await stripe.balance.retrieve();
    console.log("✅ Authentification Stripe Réussie !");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Stripe error";
    console.error("❌ Erreur d'Authentification:", message);
    process.exitCode = 1;
  }
}

void main();
