import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // 1. Kiểm tra dữ liệu đầu vào cơ bản
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email không hợp lệ.' },
        { status: 400 }
      )
    }

    // 2. Tích hợp Lưu trữ / Đẩy dữ liệu
    // VÍ DỤ: Gửi dữ liệu sang một Webhook hoặc lưu vào Database
    // const res = await fetch('YOUR_DATABASE_OR_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, signup_at: new Date() }),
    // })

    // Giả lập xử lý thành công
    console.log(`Đã nhận email đăng ký waitlist: ${email}`)

    return NextResponse.json(
      { message: 'Đăng ký thành công! Chào mừng bạn lên tàu.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi hệ thống.' },
      { status: 500 }
    )
  }
}