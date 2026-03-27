import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    // TODO: Integrate with Resend or another email service
    // For now, log the data and return success
    console.log("Contact form submission:", data);

    // When Resend is configured:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@naturaltrade.com.ar',
    //   to: process.env.CONTACT_EMAIL_TO!,
    //   subject: `New inquiry from ${data.name} - ${data.company}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Company:</strong> ${data.company}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    //     <p><strong>Product:</strong> ${data.product}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 },
    );
  }
}
