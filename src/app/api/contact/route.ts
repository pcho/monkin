import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "p@monkin.co";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <hello@monkin.co>",
      replyTo: email,
      to: [RECIPIENT_EMAIL],
      subject: "MONKIN: New Submission",
      text: message,
      html: `
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
