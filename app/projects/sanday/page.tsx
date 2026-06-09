import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function SandayShowcase() {
    return (
        <main className={`min-h-screen bg-white text-black p-6 md:p-12 ${inter.className}`}>

            {/* Nút Back */}
            <div className="max-w-3xl mx-auto mb-12">
                <Link href="/" className="text-gray-500 hover:text-black transition-colors font-medium">
                    ← Quay lại damlam.vn
                </Link>
            </div>

            <article className="max-w-3xl mx-auto space-y-12">

                {/* Header Dự án */}
                <header className="space-y-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sanday.vn</h1>
                        <span className="px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider">
                            Bản MVP
                        </span>
                    </div>
                    <p className="text-xl text-gray-600">
                        Nền tảng kết nối, cáp kèo và xếp hạng người chơi thể thao.
                    </p>
                </header>

                {/* Nội dung thực chiến */}
                <section className="space-y-6 text-lg leading-relaxed text-gray-800">

                    <div>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2 inline-block">1. Nỗi đau (Bài toán)</h2>
                        <p>
                            Việc tìm đối thủ cùng trình độ để "cáp kèo" thể thao (cầu lông, tennis, bóng đá...) qua các group Facebook quá mất thời gian, nhiều khi ra sân bị lệch trình độ dẫn đến chán nản. Không có một hệ thống nào lưu trữ lịch sử và đánh giá trình độ thực tế của người chơi.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2 inline-block">2. Giải pháp từ Sanday</h2>
                        <p>
                            Sanday.vn ra đời để số hóa việc này. Hệ thống cho phép:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Tạo hồ sơ người chơi với các chỉ số thống kê rõ ràng.</li>
                            <li>Hệ thống xếp hạng (Ranking System) tự động tính toán điểm số sau mỗi trận đấu.</li>
                            <li>Thuật toán ghép cặp (Matchmaking) đề xuất đối thủ ngang tầm.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2 inline-block">3. Góc Kỹ Thuật (Phía sau hậu trường)</h2>
                        <p>
                            Thử thách lớn nhất khi build Sanday là làm sao tính điểm công bằng. Team đã áp dụng logic tinh chỉnh từ hệ thống Elo (thường dùng trong cờ vua) và tối ưu hóa truy vấn Database để việc cập nhật rank diễn ra realtime mà không gây nghẽn server. (Tech stack: <i>Điền công nghệ bạn dùng vào đây, vd: Next.js, Postgres...</i>).
                        </p>
                    </div>

                </section>

                {/* Call to Action - Xin gạch đá */}
                <section className="bg-gray-50 border border-black p-8 text-center space-y-6">
                    <h3 className="text-2xl font-bold">Sản phẩm đã lên sóng. Cần lắm những "viên gạch" đầu tiên!</h3>
                    <p className="text-gray-600">
                        Anh em dev/founder có thể vào trải nghiệm luồng tạo tài khoản và tính điểm. Nếu thấy UI/UX có chỗ nào "cấn" hoặc tìm thấy Bug, hãy ném thẳng gạch đá vào mặt founder nhé!
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://sanday.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-colors"
                        >
                            Trải nghiệm Sanday.vn ↗
                        </a>
                    </div>
                </section>

            </article>
        </main>
    )
}