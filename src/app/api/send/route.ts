import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';
const toEmail = process.env.TO_EMAIL  || '';
const fromName = process.env.FROM_NAME;

export async function POST(req:any, res: any) {
  const { firstName, lastName, email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: firstName + " " + lastName + " <" + fromEmail + ">",
      to: [toEmail],
      subject: subject + "- Cherrybrook Networks Contact Form",
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
