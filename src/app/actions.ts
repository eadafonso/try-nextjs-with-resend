"use server";

import { Resend } from "resend";

export async function sendEmail(sms: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "eadafonso@gmail.com",
    subject: "Assunto: Next Js + Resend",

    html: `<p>${sms}</p>`,
  });
}
