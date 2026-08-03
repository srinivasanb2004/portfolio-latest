import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
      contact,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}