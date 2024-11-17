import { NextResponse } from 'next/server'
import { GoogleAuth } from 'google-auth-library'

const auth = new GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
})

export async function POST(request: Request) {
  try {
    console.log('API route started')
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      console.log('No file provided')
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    console.log('Processing file:', file.name)

    // Convert image to base64
    const bytes = await file.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString('base64')
    console.log('Image converted to base64')

    // Get access token
    const client = await auth.getClient()
    const accessToken = await client.getAccessToken()
    console.log('Got access token')

    // Make prediction request
    console.log('Making prediction request...')
    const response = await fetch(
      `https://us-central1-aiplatform.googleapis.com/v1/projects/${process.env.GOOGLE_PROJECT_ID}/locations/${process.env.GOOGLE_LOCATION}/endpoints/${process.env.GOOGLE_ENDPOINT_ID}:predict`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instances: [{
            content: base64Image
          }],
          parameters: {
            confidenceThreshold: 0.5,
            maxPredictions: 5
          }
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Prediction API error:', {
        status: response.status,
        text: errorText
      })
      throw new Error(`Prediction API error: ${response.status} - ${errorText}`)
    }

    const predictions = await response.json()
    console.log('Got predictions:', predictions)

    return NextResponse.json({
      success: true,
      predictions: predictions
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        error: 'Error processing image',
        details: error.message
      },
      { status: 500 }
    )
  }
}