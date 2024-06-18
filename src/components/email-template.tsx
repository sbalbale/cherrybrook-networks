import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  subject,
  message,
}) => (
  <>
    {/* <p>Hello {firstName} {lastName}, </p>
            <p>Thank you for contacting me regarding {subject}</p>
             <p>New message submitted:</p>
             <p>{message}</p>
             <p>I will email you back at {email}.</p> */}
    <p>
      From: {firstName} {lastName}
    </p>
    <p>Email: {email}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </>
);
