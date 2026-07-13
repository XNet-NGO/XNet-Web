'use server';

import { z } from 'zod';

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

  // Inboxed-web Configuration
  const inboxedUrl = process.env.INBOXED_URL;
  const inboxedPin = process.env.INBOXED_PIN;

  if (!inboxedUrl || !inboxedPin) {
    console.error('Inboxed-web configuration is missing.');
    return {
      success: false,
      message: 'Server configuration error: Inboxed service is not configured. Please contact the administrator.',
    };
  }

  try {
    const response = await fetch(`${inboxedUrl}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Inboxed API returned ${response.status}`);
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };

  } catch (error: any) {
    console.error('Error submitting contact form to inboxed-web:', error);
    return {
      success: false,
      message: `There was an error sending your message: ${error.message || 'Please try again later.'}`,
    };
  }
}
