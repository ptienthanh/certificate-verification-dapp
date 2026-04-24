import { Link } from "react-router-dom";
import searchIcon from "@/assets/search.png";
import chainIcon from "@/assets/blockchain.png";
import checkIcon from "@/assets/check.png";
import eduIcon from "@/assets/education.png";
import shieldIcon from "@/assets/shield.png";
import fastIcon from "@/assets/fast.png";

const steps = [
  {
    icon: searchIcon,
    title: "Nhập mã chứng nhận",
    desc: "Người dùng nhập mã hoặc thông tin chứng nhận cần kiểm tra trực tiếp trên giao diện.",
  },
  {
    icon: chainIcon,
    title: "Đối chiếu blockchain",
    desc: "Hệ thống so khớp dữ liệu với thông tin đã được ghi nhận trên Ethereum Sepolia.",
  },
  {
    icon: checkIcon,
    title: "Nhận kết quả xác thực",
    desc: "Kết quả trả về rõ ràng để người dùng biết chứng nhận hợp lệ, đã cập nhật hay bị thu hồi.",
  },
];

const highlights = [
  {
    icon: eduIcon,
    title: "Phù hợp cho môi trường giáo dục",
    desc: "Thiết kế theo ngữ cảnh chứng nhận học tập, dễ mở rộng sang quy trình cấp phát thực tế.",
  },
  {
    icon: shieldIcon,
    title: "Tăng độ tin cậy khi đối chiếu",
    desc: "Giảm nguy cơ giả mạo hoặc chỉnh sửa trái phép nhờ dữ liệu được theo dõi minh bạch hơn.",
  },
  {
    icon: fastIcon,
    title: "Tra cứu nhanh và trực quan",
    desc: "Người dùng có thể kiểm tra chứng nhận trong vài thao tác mà không cần quy trình phức tạp.",
  },
];

function HomePage() {
  return (
    <div className="pb-8">
      {/* HERO */}
      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden">
        <div className="relative min-h-[100vh]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=80"
              alt="Môi trường học tập và quản lý chứng nhận"
              className="h-full w-full scale-110 object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/58 to-emerald-950/28" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 pb-20 pt-28 md:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-sm">
                XÁC THỰC CHỨNG NHẬN HỌC TẬP
              </p>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                Nền tảng quản lý{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  chứng nhận học tập
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 lg:text-[20px]">
                CertChain giúp đơn vị đào tạo tạo, quản lý và xác thực chứng nhận học tập
                trên Ethereum Sepolia. Hệ thống được xây dựng để tăng tính minh bạch,
                giảm nguy cơ giả mạo và giúp việc kiểm tra chứng nhận trở nên nhanh,
                rõ ràng và đáng tin cậy hơn.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/verify"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_44px_-18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Bắt đầu xác thực
                </Link>

                <Link
                  to="/create"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Tạo chứng nhận
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Ethereum Sepolia
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Academic Certificate dApp
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Xác thực minh bạch
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            HƯỚNG DẪN SỬ DỤNG
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 dark:text-slate-100 md:text-4xl">
            Xác thực chứng nhận chỉ với 3 bước
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Quy trình được thiết kế đơn giản để người dùng có thể nhanh chóng tra cứu,
            đối chiếu và kiểm tra tính hợp lệ của chứng nhận học tập.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group flex h-full flex-col items-center rounded-[28px] px-5 py-6 text-center transition-all duration-300 hover:bg-white/70 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] dark:hover:bg-slate-900/60"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-[1.04] dark:bg-slate-800 dark:ring-slate-700/60">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="flex min-h-[72px] items-center justify-center text-center text-2xl font-bold tracking-[-0.02em] text-slate-900 dark:text-slate-100">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[340px] text-balance text-lg leading-8 text-slate-600 dark:text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="w-full px-0 pt-10 pb-12">
        <div className="w-full border-y border-slate-100 bg-white/80 px-6 py-12 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 md:px-10 lg:px-16 lg:py-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-6xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                MỤC TIÊU DỰ ÁN
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 dark:text-slate-100 md:text-4xl">
                Quản lý và xác thực minh bạch hơn cho giáo dục số
              </h2>

              <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                CertChain mô phỏng một nền tảng chứng nhận blockchain giúp đơn vị đào tạo,
                người học và bên xác minh có thể làm việc với cùng một nguồn dữ liệu rõ ràng,
                dễ kiểm tra và dễ mở rộng cho các bước tích hợp tiếp theo.
              </p>
            </div>

            <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex h-full flex-col items-center rounded-[28px] px-5 py-6 text-center transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.16)] dark:hover:bg-slate-950/50"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-[1.04] dark:bg-slate-800 dark:ring-slate-700/60">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <h3 className="flex min-h-[72px] items-center justify-center text-center text-2xl font-bold tracking-[-0.02em] text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[340px] text-balance text-lg leading-8 text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/activity"
                className="inline-flex min-w-[260px] items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_44px_-18px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Xem hoạt động hệ thống
              </Link>

              <Link
                to="/update"
                className="inline-flex min-w-[260px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Cập nhật trạng thái
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;