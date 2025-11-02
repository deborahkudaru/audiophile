import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { name, email, orderId } = await req.json();

    const html = `
      <div style="font-family: system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial; padding: 24px;">
        <h2>Thanks, ${name} — your order is confirmed!</h2>
        <p>Your order ID: <strong>${orderId}</strong></p>
        <p>You can view your order here: <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/order-confirmation?orderId=${orderId}">View your order</a></p>
        <hr/>
        <p>If you have any issues, reply to this email or contact deborahkudaru@ygmail.com</p>
      </div>
    `;

    await resend.emails.send({
      from: "Audiophile <orders@yourdomain.com>",
      to: email,
      subject: "Your Audiophile order confirmation",
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Send email error", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
}
