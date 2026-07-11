import Stripe from 'stripe';

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(key);
}

export const PLAN_PRICE_ENV: Record<string, string | undefined> = {
  audit: process.env.STRIPE_PRICE_AUDIT,
  setup: process.env.STRIPE_PRICE_SETUP
};
