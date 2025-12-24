import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email.toLowerCase().trim(), source })

    if (error) {
      if (error.code === '23505') {
        // Unique violation - already signed up
        return NextResponse.json(
          { message: 'You\'re already on the list! 🎉' },
          { status: 200 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Welcome to the quest! 🔮' },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
