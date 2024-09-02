import { unkey } from "@/lib/unkey";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "p@monkin.co";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { result, error } = await unkey.ratelimits.limit({
      namespace: "contact_form",
      identifier: ip,
      limit: 5,
      duration: 3600000,
    });

    if (error) {
      return NextResponse.json(
        { error: "Rate limit check failed" },
        { status: 500 },
      );
    }

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again later.",
          rateLimit: {
            limit: result.limit,
            remaining: result.remaining,
            reset: result.reset,
          },
        },
        { status: 429 },
      );
    }

    const { email, message } = await request.json();

    const { data, error: resendError } = await resend.emails.send({
      from: "Contact Form <hello@monkin.co>",
      replyTo: email,
      to: [RECIPIENT_EMAIL],
      subject: "MONKIN: New Submission",
      text: message,
      html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    if (resendError) {
      return NextResponse.json({ error: resendError.message }, { status: 400 });
    }

    return NextResponse.json({
      message: "Email sent successfully",
      data,
      rateLimit: {
        limit: result.limit,
        reset: result.reset,
        remaining: result.remaining,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
