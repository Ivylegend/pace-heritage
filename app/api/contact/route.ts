import { createEmailShell, MailConfigurationError, sendResendMail } from "@/lib/resend-mail";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = clean(payload.name);
    const company = clean(payload.company);
    const email = clean(payload.email);
    const phone = clean(payload.phone);
    const inquiryType = clean(payload.inquiryType);
    const message = clean(payload.message);

    if (!name || !company || !email || !inquiryType || !message) {
      return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!isEmail(email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const rows: Array<[string, string]> = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone || "Not provided"],
      ["Inquiry Type", inquiryType],
      ["Message", message],
    ];

    await sendResendMail({
      subject: `Website inquiry: ${inquiryType} - ${name}`,
      html: createEmailShell("New Contact Form Submission", rows),
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      replyTo: email,
      tags: [{ name: "source", value: "contact_form" }],
    });

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof MailConfigurationError) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.error("Contact form email failed", error);
    return Response.json({ error: "Unable to send message right now." }, { status: 500 });
  }
}

