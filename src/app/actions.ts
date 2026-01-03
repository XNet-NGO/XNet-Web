'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(
  data: z.infer<typeof contactSchema>
): Promise<{ success: boolean; message: string; errors?: any }> {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields, please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // SMTP Configuration
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === 'true'; // true for 465, false for other ports

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('SMTP configuration is missing.');
    return {
      success: false,
      message: 'Server configuration error: SMTP settings are missing. Please contact the administrator.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"XNet Contact Form" <${smtpUser}>`, // sender address
      to: "joshuadoucette@xnet.ngo", // list of receivers
      replyTo: email,
      subject: `New contact form submission from ${name}`, // Subject line
      html: `You have a new message from <strong>${name}</strong> (${email}):<br><br>${message.replace(/\n/g, '<br>')}`, // html body
    });

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };

  } catch (error: any) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      message: `There was an error sending your message: ${error.message || 'Please try again later.'}`,
    };
  }
}
