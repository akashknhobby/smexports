import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const content = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Message: ${message}
    `;

    const msg = {
      to: process.env.SENDGRID_FROM_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: "New Trade Inquiry",
      text: content,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
  } catch (error: any) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
