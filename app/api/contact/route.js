export async function POST(request) {
  const body = await request.json();

  console.log('Contact form:', body);

  return Response.json({
    success: true,
    message: 'Message sent successfully!',
  });
}