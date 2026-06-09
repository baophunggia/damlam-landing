'use client'

import { useState, FormEvent } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Có lỗi xảy ra.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Không thể kết nối đến máy chủ.')
    }
  }

  return (
    <main className={`min-h-screen bg-white text-black flex flex-col justify-center items-center p-6 ${inter.className}`}>

      {/* Header / Logo */}
      <div className="absolute top-8 left-8">
        <h1 className="text-xl font-bold tracking-tighter">Dám làm</h1>
      </div>

      {/* Hero Section */}
      <div className="max-w-3xl w-full text-center space-y-8 mt-20">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Làm sản phẩm đã khó. <br className="hidden md:block" />
          <span className="text-gray-400">Không ai biết tới còn đau hơn.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Build in Public dành cho những người thợ xây (makers) đích thực.<br />
          Đừng để dự án tâm huyết nằm đóng bụi trong ổ cứng.
        </p>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
          <input
            type="email"
            placeholder="Để lại email của bạn..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="w-full sm:w-96 px-6 py-4 border border-black rounded-none focus:outline-none focus:ring-2 focus:ring-black text-lg disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-colors rounded-none disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Đang xử lý...' : 'Lên tàu ngay'}
          </button>
        </form>

        {/* Thông báo phản hồi */}
        {message && (
          <p className={`text-sm font-medium pt-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <p className="text-sm text-gray-500 pt-2">
          Nhận thông báo khi Dám Làm chính thức mở luồng Launch sản phẩm.
        </p>
      </div>

      {/* Proof Section - Minimalist Card */}
      <div className="max-w-3xl w-full mt-32 border-t border-black pt-12">
        <h3 className="text-2xl font-bold mb-6">Đang xây dựng trên Dám Làm:</h3>
        <Link href="/projects/sanday" className="border border-black p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-50 transition-colors group cursor-pointer block">
          <div>
            <h4 className="text-xl font-bold group-hover:underline">Sanday.vn</h4>
            <p className="text-gray-600 mt-1">Nền tảng kết nối & xếp hạng thể thao</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <div className="text-sm font-mono bg-green-100 text-green-800 px-3 py-1 border border-black">
              Status: Live MVP
            </div>
            <span className="text-xl font-bold">→</span>
          </div>
        </Link>
      </div>

    </main>
  )
}