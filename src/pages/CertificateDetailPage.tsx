import { Link, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

function CertificateDetailPage() {
  const { id } = useParams<{ id: string }>();

  const certificate = {
    id: id || "CERT001",
    student: "Nguyễn Văn A",
    course: "Nguyên lý Blockchain",
    issuer: "Đại học ABC - Khoa CNTT",
    issuedAt: "15 Tháng 4, 2024",
    status: "Hợp lệ" as const,
    wallet: "0x1234...5678",
    txHash: "0x8f2ca4b4f462eab6d2d9d6d0f0f7d5f0a7dd3b5b9...",
    network: "Ethereum Sepolia",
  };

  return (
    <div className="relative overflow-hidden py-10 md:py-14 lg:py-16">
      {/* Background glow for dark mode */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute right-10 top-44 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
      </div>

      {/* HEADER CENTER */}
      <header className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
          Chứng nhận hợp lệ
        </div>

        <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[1.15] tracking-[-0.025em] text-slate-950 dark:text-white md:text-5xl lg:text-6xl">
          Chi tiết chứng nhận{" "}
          <span className="inline-block bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent dark:from-emerald-300 dark:via-cyan-300 dark:to-blue-300">
            #{certificate.id}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Thông tin đầy đủ và minh bạch về chứng nhận đã được xác thực trên
          blockchain Ethereum Sepolia.
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-5xl space-y-10">
        {/* MAIN INFO */}
        <section className="rounded-[32px] border border-slate-100 bg-white/85 p-6 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)] md:p-10">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            Thông tin chính
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <DetailCard label="Mã chứng nhận" value={certificate.id} />
            <DetailCard label="Người nhận" value={certificate.student} />
            <DetailCard label="Khóa học" value={certificate.course} />
            <DetailCard label="Đơn vị cấp" value={certificate.issuer} />
            <DetailCard label="Ngày cấp" value={certificate.issuedAt} />
            <DetailCard label="Mạng blockchain" value={certificate.network} />
          </div>
        </section>

        {/* BLOCKCHAIN DATA */}
        <section className="rounded-[32px] border border-slate-100 bg-slate-50/85 p-6 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)] md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Dữ liệu blockchain
            </h2>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)] dark:bg-emerald-300 dark:shadow-[0_0_0_5px_rgba(110,231,183,0.12)]" />
              Đã xác thực
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <DetailCard label="Trạng thái" value={certificate.status} variant="status" />
            <DetailCard label="Địa chỉ ví" value={certificate.wallet} mono />
            <DetailCard label="Tx Hash" value={certificate.txHash} mono />
          </div>
        </section>
      </div>

      {/* ACTIONS CENTER */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/verify"
          className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/10"
        >
          ← Tiếp tục xác thực
        </Link>

        <Link
          to="/activity"
          className="inline-flex min-w-[240px] items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_44px_-18px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Xem hoạt động hệ thống
        </Link>
      </div>
    </div>
  );
}

function DetailCard({
  label,
  value,
  mono = false,
  variant,
}: {
  label: string;
  value: string;
  mono?: boolean;
  variant?: "status";
}) {
  return (
    <div className="rounded-[22px] border border-slate-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-950/55 dark:hover:border-emerald-400/20">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p
        className={cn(
          "font-black leading-7 text-slate-950 dark:text-slate-100",
          mono && "break-all font-mono text-sm text-slate-800 dark:text-slate-200",
          variant === "status" && "text-xl text-emerald-700 dark:text-emerald-300"
        )}
      >
        {value}
      </p>
    </div>
  );
}

export default CertificateDetailPage;