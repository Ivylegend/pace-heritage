import { createEmailShell, MailConfigurationError, sendResendMail } from "@/lib/resend-mail";

export const runtime = "nodejs";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { email?: string };
    const email = typeof payload.email === "string" ? payload.email.trim() : "";

    if (!email || !isEmail(email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const rows: Array<[string, string]> = [["Subscriber Email", email]];

    await sendResendMail({
      subject: `Newsletter signup: ${email}`,
      html: createEmailShell("New Newsletter Signup", rows),
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      replyTo: email,
      tags: [{ name: "source", value: "newsletter" }],
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof MailConfigurationError) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.error("Newsletter email failed", error);
    return Response.json({ error: "Unable to subscribe right now." }, { status: 500 });
  }
}

