import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.gymName || !data.phone || !data.monthlyRevenue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If GoHighLevel webhook URL is configured, send the data there
    const ghlWebhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;
    
    if (ghlWebhookUrl) {
      try {
        const ghlResponse = await fetch(ghlWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            source: 'gym-growth-website',
            timestamp: new Date().toISOString(),
          }),
        });

        if (!ghlResponse.ok) {
          console.error('GoHighLevel webhook failed:', await ghlResponse.text());
        }
      } catch (error) {
        console.error('Error sending to GoHighLevel:', error);
      }
    }

    // Log the submission (in production, you might want to save to a database)
    console.log('Form submission received:', {
      name: data.name,
      email: data.email,
      gymName: data.gymName,
      phone: data.phone,
      monthlyRevenue: data.monthlyRevenue,
      timestamp: new Date().toISOString(),
    });

    // Send success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}