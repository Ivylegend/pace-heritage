const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_EMAIL = "Pace Heritage Website <website@contact.paceheritage.com>";
const RECIPIENTS = ["info@paceheritage.com", "uchuchinedu@gmail.com"];

type SendMailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  tags?: Array<{ name: string; value: string }>;
};

export class MailConfigurationError extends Error {
  constructor() {
    super("RESEND_API_KEY is not configured.");
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function formatRows(rows: Array<[string, string]>) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e7ecf3;color:#637083;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e7ecf3;color:#07182f;font-size:15px;line-height:1.6;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
        </tr>
      `,
    )
    .join("");
}

export function createEmailShell(title: string, rows: Array<[string, string]>) {
  return `
    <div style="margin:0;padding:28px;background:#f4f7fb;font-family:Inter,Arial,sans-serif;color:#07182f;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e7ecf3;">
        <tr>
          <td style="padding:28px 30px;background:#071a34;color:#ffffff;">
            <p style="margin:0 0 8px;color:#f3b23f;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;">Pace Heritage Website</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.18;">${escapeHtml(title)}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 16px 8px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              ${formatRows(rows)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 30px 30px;color:#637083;font-size:13px;line-height:1.6;">
            This message was submitted from the Pace Heritage website.
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function sendResendMail({
  subject,
  html,
  text,
  replyTo,
  tags,
}: SendMailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new MailConfigurationError();
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: RECIPIENTS,
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
      ...(tags ? { tags } : {}),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend request failed with ${response.status}: ${body}`);
  }

  return response.json() as Promise<{ id: string }>;
}
