import { Resend } from "resend";

export async function sendEmail(content: string) {
  ("use server");
  console.log("conte", content);
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "eadafonso@gmail.com",
    subject: "Assunto: Next Js + Resend",
    html: `<p>${content}</p>`,
    // react: NikeReceiptEmail(),
  });

  console.log("Data", data);
}
