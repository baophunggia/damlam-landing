import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // 1. Kiểm tra dữ liệu đầu vào
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email không hợp lệ.' },
        { status: 400 }
      )
    }

    // 2. Khởi tạo kết nối Neon từ biến môi trường
    const sql = neon(process.env.DATABASE_URL!)

    // 3. Thực thi câu lệnh SQL Insert (Sử dụng backtick)
    await sql`INSERT INTO waitlist (email) VALUES (${email})`

    console.log(`[Thành công] Đã lưu email: ${email}`)

    return NextResponse.json(
      { message: 'Đăng ký thành công! Chào mừng bạn lên tàu.' },
      { status: 200 }
    )
  } catch (error: any) {
    // Xử lý lỗi PostgreSQL: 23505 là mã lỗi khi vi phạm UNIQUE (trùng email)
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'Email này đã đăng ký rồi, cứ bình tĩnh đợi nhé!' },
        { status: 400 }
      )
    }

    console.error('Lỗi Database:', error)
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}