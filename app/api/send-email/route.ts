import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customer, items, totals, orderId, shipping } = body;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 8px rgba(0,0,0,0.05);">
          <div style="background-color:#000; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0;">Audiophile</h1>
          </div>

          <div style="padding:25px;">
            <h2 style="color:#333;">Hi ${customer.name},</h2>
            <p>Thank you for your purchase! 🎉 Your order has been successfully placed.</p>
            
            <p><strong>Order ID:</strong> ${orderId}</p>
            
            <h3 style="margin-top:20px;">Order Summary:</h3>
            <table style="width:100%; border-collapse:collapse; margin-top:10px;">
              <thead>
                <tr>
                  <th align="left" style="padding:8px; border-bottom:1px solid #ddd;">Item</th>
                  <th align="center" style="padding:8px; border-bottom:1px solid #ddd;">Qty</th>
                  <th align="right" style="padding:8px; border-bottom:1px solid #ddd;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${items
        .map(
          (i: { name: string; quantity: number; price: number }) => `
                      <tr>
                        <td style="padding:8px; border-bottom:1px solid #eee;">${i.name}</td>
                        <td style="padding:8px; text-align:center; border-bottom:1px solid #eee;">${i.quantity}</td>
                        <td style="padding:8px; text-align:right; border-bottom:1px solid #eee;">$${i.price.toFixed(2)}</td>
                      </tr>
                    `
        )
        .join("")}
              </tbody>
            </table>

            <p style="margin-top:15px;"><strong>Subtotal:</strong> $${totals.subtotal.toFixed(2)}</p>
            <p><strong>Shipping:</strong> $${totals.shipping.toFixed(2)}</p>
            <p><strong>Tax:</strong> $${totals.tax.toFixed(2)}</p>
            <p><strong>Total:</strong> $${totals.grandTotal.toFixed(2)}</p>

            <h3 style="margin-top:25px;">Shipping Details:</h3>
            <p>
              ${shipping.address}<br />
              ${shipping.city}, ${shipping.country}<br />
              ZIP: ${shipping.zip}
            </p>

            <div style="margin-top:30px; text-align:center;">
              <a href="https://your-frontend-url.com/orders/${orderId}" 
                 style="display:inline-block; background:#000; color:#fff; padding:12px 24px; border-radius:4px; text-decoration:none; font-weight:bold;">
                 View Your Order
              </a>
            </div>

            <div style="margin-top:40px; font-size:13px; color:#777; text-align:center; border-top:1px solid #eee; padding-top:15px;">
              <p>If you have any questions, contact our support team:</p>
              <p><a href="mailto:support@audiophile.com" style="color:#000; text-decoration:none;">support@audiophile.com</a></p>
              <p>Thank you for shopping with Audiophile 🎧</p>
            </div>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: customer.email,
      subject: "Your Audiophile Order Confirmation",
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
