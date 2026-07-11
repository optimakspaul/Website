import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const payload = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nUrl) {
      // Downstream actions (notify, log, receipt) all live in n8n
      await fetch(n8nUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: session.metadata?.plan ?? 'unknown',
          amount: session.amount_total != null ? (session.amount_total / 100).toFixed(2) : '',
          currency: session.currency ?? '',
          customer_email: session.customer_details?.email ?? '',
          customer_name: session.customer_details?.name ?? '',
          session_id: session.id
        })
      }).catch(() => {
        // n8n being down must not make Stripe retry storms; log-and-continue
        console.error('Failed to forward payment event to n8n', session.id);
      });
    }
  }

  return NextResponse.json({ received: true });
}
