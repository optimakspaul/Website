import { NextResponse } from 'next/server';
import { getStripe, PLAN_PRICE_ENV } from '@/lib/stripe';

const SUPPORTED_LOCALES = ['zh-TW', 'zh-CN', 'en'];

export async function POST(request: Request) {
  let body: { plan?: string; locale?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const plan = body.plan ?? '';
  const price = PLAN_PRICE_ENV[plan];
  if (!price) {
    return NextResponse.json({ error: 'Unknown plan' }, { status: 400 });
  }

  const locale = SUPPORTED_LOCALES.includes(body.locale ?? '') ? body.locale! : 'zh-TW';
  const origin = request.headers.get('origin') ?? new URL(request.url).origin;

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    // Stripe Checkout supports zh-TW / zh / en
    locale: locale === 'zh-TW' ? 'zh-TW' : locale === 'zh-CN' ? 'zh' : 'en',
    metadata: { plan },
    success_url: `${origin}/${locale}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${locale}#pricing`
  });

  return NextResponse.json({ url: session.url });
}
