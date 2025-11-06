export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface EmailRequestBody {
  customer: {
    name: string;
    email: string;
  };
  items: OrderItem[];
  totals: {
    subtotal: number;
    shipping: number;
    tax: number;
    grandTotal: number;
  };
  orderId: string;
}

export async function POST(req: Request) {
  try {
    const body: EmailRequestBody = await req.json();
    const { customer, items, totals, orderId } = body;

    // ✅ Configure the transporter (use your Gmail or custom SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "yahoo", etc.
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password (not your normal password!)
      },
    });

    // ✅ Create the HTML content
    const emailHtml = `
      <div style="font-family:sans-serif;line-height:1.6;color:#333;">
        <h2>Hey ${customer.name}, thanks for your order! 🎉</h2>
        <p>Order ID: <strong>${orderId}</strong></p>
        <h3>Items:</h3>
        <ul>
          ${items
            .map(
              (item) =>
                `<li>${item.name} — ${item.quantity} × $${item.price.toFixed(2)}</li>`
            )
            .join("")}
        </ul>
        <p><strong>Grand Total:</strong> $${totals.grandTotal.toFixed(2)}</p>
        <p>We’ll ship your order to:</p>
        <p>${customer.name}<br>${customer.email}</p>
        <p>Thanks again,<br/>The Audiophile Team 🎧</p>
      </div>
    `;

    // ✅ Send the email
    await transporter.sendMail({
      from: `"Audiophile" <${process.env.EMAIL_USER}>`,
      to: customer.email,
      subject: "Order Confirmation",
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
