import { NextResponse } from 'next/server'

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

    // Convert image to base64
    const bytes = await file.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString('base64')

    // Make prediction request to Python backend
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: base64Image
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Prediction API error: ${response.status} - ${errorText}`)
    }

    const prediction = await response.json()
    
    // Return in the format expected by the frontend
    return NextResponse.json({
      success: true,
      predictions: prediction  // This should contain kartType and confidence
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