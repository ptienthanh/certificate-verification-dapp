import { Link } from "react-router-dom";
import formIcon from "@/assets/form.png";
import chainIcon2 from "@/assets/blockchain2.png";
import shareIcon from "@/assets/share.png";

const highlights = [
  {
    icon: formIcon,
    title: "Nhập thông tin cơ bản",
    desc: "Điền dữ liệu người học, khóa học và thông tin cần thiết trước khi phát hành.",
  },
  {
    icon: chainIcon2,
    title: "Ghi nhận blockchain",
    desc: "Dữ liệu được lưu vĩnh viễn minh bạch, dễ dàng tra cứu về sau.",
  },
  {
    icon: shareIcon,
    title: "Chia sẻ dễ dàng",
    desc: "Chứng nhận có mã xác thực để kiểm tra nhanh từ bất kỳ đâu.",
  },
];

const formFields = [
  {
    label: "Mã chứng nhận",
    placeholder: "VD: CERT-2024-001",
    type: "text" as const,
  },
  {
    label: "Họ tên người học",
    placeholder: "VD: Nguyễn Văn A",
    type: "text" as const,
  },
  {
    label: "Tên khóa học",
    placeholder: "VD: Nguyên lý Blockchain",
    type: "text" as const,
  },
  {
    label: "Ngày cấp",
    placeholder: "VD: 2026-04-20",
    type: "date" as const,
  },
];

function CreateCertificatePage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-8">
        {/* HERO */}
        <section className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
            TẠO CHỨNG NHẬN MỚI
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Tạo chứng nhận học tập
            <br className="hidden md:block" />
            <span className="text-primary"> minh bạch trên blockchain</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-3xl">
            Nhập thông tin cơ bản và phát hành chứng nhận. Dữ liệu sẽ được ghi nhận an toàn trên Ethereum Sepolia.
          </p>
        </section>

        {/* FORM */}
        <section className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-[28px] border border-border/50 bg-card/85 p-8 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.18)] ring-1 ring-border/10 backdrop-blur-sm md:p-10 lg:p-12">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
                NHẬP THÔNG TIN
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground">
                Dữ liệu chứng nhận mới
              </h2>

              <p className="mx-auto mt-3 max-w-0xl text-base leading-7 text-muted-foreground">
                Hoàn thiện các trường thông tin cơ bản trước khi thực hiện bước phát hành
                chứng nhận trên blockchain.
              </p>
            </div>

            <div className="grid gap-7">
              {formFields.map((field) => (
                <div key={field.label} className="space-y-3">
                  <label className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-15 w-full rounded-2xl border border-border/60 bg-background px-5 py-4 text-base text-foreground shadow-sm transition-all duration-200 placeholder:text-muted-foreground/80 focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 md:flex-row">
              <button className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_44px_-18px_rgba(16,185,129,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-18px_rgba(16,185,129,0.52)] focus:outline-none focus:ring-4 focus:ring-emerald-500/20">
                Tạo & Phát hành
              </button>

              <button className="flex-1 rounded-2xl border border-border bg-background px-8 py-4 text-lg font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10">
                Xem mẫu PDF
              </button>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mx-auto w-full max-w-6xl">
          <div className="rounded-[32px] border border-border/50 bg-card/55 px-6 py-10 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.14)] ring-1 ring-border/10 backdrop-blur-sm md:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                QUY TRÌNH PHÁT HÀNH
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-foreground md:text-4xl">
                Tạo chứng nhận nhanh, rõ ràng và dễ kiểm tra
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Giao diện được thiết kế để hỗ trợ thao tác nhập liệu, phát hành và chia sẻ
                chứng nhận theo quy trình đơn giản, phù hợp cho bản demo PoC.
              </p>
            </div>

            <div className="mt-12 grid items-start gap-8 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex h-full flex-col items-center rounded-[28px] px-5 py-6 text-center transition-all duration-300 hover:bg-background/80 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-[1.04] dark:bg-slate-800 dark:ring-slate-700/60">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <h3 className="flex min-h-[72px] items-center justify-center text-center text-2xl font-bold tracking-[-0.02em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[320px] text-balance text-lg leading-8 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/verify"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
              >
                Chuyển sang trang xác thực
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateCertificatePage;