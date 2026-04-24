import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import certIcon from "@/assets/certificate.png";
import verifyIcon from "@/assets/verify.png";
import pendingIcon from "@/assets/pending.png";
import updateIcon from "@/assets/update.png";

type StatItem = {
  label: string;
  value: string;
  note: string;
  icon: string;
};

const stats: StatItem[] = [
  {
    label: "Tổng chứng nhận",
    value: "2,543",
    note: "Đã phát hành trên hệ thống",
    icon: certIcon,
  },
  {
    label: "Xác thực hôm nay",
    value: "324",
    note: "Lượt kiểm tra trong ngày",
    icon: verifyIcon,
  },
  {
    label: "Chờ xử lý",
    value: "12",
    note: "Cập nhật chờ xác nhận",
    icon: pendingIcon,
  },
  {
    label: "Cập nhật gần đây",
    value: "87",
    note: "Thay đổi trong 24h qua",
    icon: updateIcon,
  },
];

const recentActivities = [
  {
    name: "Nguyễn Văn A",
    course: "Nguyên lý Blockchain",
    status: "Đã phát hành",
    time: "2 phút trước",
  },
  {
    name: "Trần Thị B",
    course: "Web3 Security",
    status: "Đã xác thực",
    time: "15 phút trước",
  },
  {
    name: "Lê Minh C",
    course: "DeFi Fundamentals",
    status: "Đã thu hồi",
    time: "1 giờ trước",
  },
  {
    name: "Phạm Thu D",
    course: "Solidity Basics",
    status: "Đã tạo",
    time: "3 giờ trước",
  },
  {
    name: "Hoàng Minh E",
    course: "Blockchain for Business",
    status: "Đã xác thực",
    time: "Hôm nay, 09:12",
  },
  {
    name: "Vũ Thanh F",
    course: "Ethereum Development",
    status: "Đã phát hành",
    time: "Hôm nay, 08:26",
  },
];

function ActivityPage() {
  const [showActivities, setShowActivities] = useState(false);
  const [showSystemStatus, setShowSystemStatus] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
  <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[36px] border border-slate-100 bg-white/72 px-6 py-7 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 md:px-8 md:py-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-900/20" />
          <div className="absolute right-10 top-6 h-32 w-32 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />
          <div className="absolute bottom-0 right-1/3 h-28 w-28 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_left,rgba(16,185,129,0.08),transparent_24%)]" />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm dark:bg-blue-950/40 dark:text-blue-300">
              HOẠT ĐỘNG HỆ THỐNG
            </p>

           <h1 className="mt-5 max-w-[720px] text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-5xl xl:text-[64px]">
  <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-blue-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-cyan-300 dark:to-blue-300">
    Theo dõi toàn bộ
  </span>
  <br />
  <span className="bg-gradient-to-r from-emerald-900 via-sky-700 to-blue-500 bg-clip-text text-transparent dark:from-emerald-200 dark:via-cyan-200 dark:to-blue-300">
    hoạt động hệ thống
  </span>
</h1>

            <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600 dark:text-slate-400 md:text-lg lg:max-w-[720px]">
  Tổng hợp các chỉ số vận hành, hoạt động gần đây và trạng thái hệ thống để người
  <br className="hidden md:block" />
  <span className="block md:inline">
    dùng có cái nhìn rõ hơn về quá trình tạo, cập nhật và xác thực chứng nhận học tập.
  </span>
</p>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[360px] lg:block">
            <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl dark:bg-blue-900/30" />
            <div className="absolute right-8 top-10 h-20 w-20 rounded-full bg-emerald-200/50 blur-2xl dark:bg-emerald-900/30" />
            <div className="absolute bottom-10 left-16 h-16 w-16 rounded-full bg-cyan-200/50 blur-2xl dark:bg-cyan-900/30" />

            <div className="relative rounded-[30px] border border-slate-200/80 bg-white/85 p-5 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/80">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    Network live
                  </p>
                  <p className="mt-2 text-[34px] font-black tracking-[-0.03em] text-slate-900 dark:text-slate-100">
                    Sepolia
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                  ● Online
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>Xử lý hoạt động</span>
                  <span>87%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">
  <MiniMetric label="Verified" value="324" tone="blue" />
  <MiniMetric label="Issued" value="2,543" tone="emerald" />
  <MiniMetric label="Pending" value="12" tone="amber" />
</div>

              <div className="mt-4 rounded-[20px] border border-slate-200 bg-slate-50/80 px-4 py-3 text-center dark:border-slate-800 dark:bg-slate-950/60">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Cập nhật hệ thống gần nhất
                </p>
                <p className="mt-1 text-xl font-black text-slate-900 dark:text-slate-100">
                  2 phút trước
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </section>
 </div>
      {/* STATS */}
      <section className="mt-8">
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {stats.map((item) => (
      <StatCard key={item.label} item={item} />
    ))}
  </div>
</section>

      {/* RECENT ACTIVITY */}
<section className="mt-12">
  <div className="rounded-[32px] border border-slate-100 bg-white/75 p-6 shadow-[0_22px_60px_-32px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 lg:p-8">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
        HOẠT ĐỘNG GẦN ĐÂY
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-900 dark:text-slate-100 md:text-4xl">
        Lịch sử thay đổi và xác thực
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
        Theo dõi các chứng nhận vừa được tạo, xác thực hoặc cập nhật trạng thái trong hệ thống,
        đồng thời kiểm tra nhanh tình trạng kết nối blockchain đang vận hành.
      </p>
    </div>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        type="button"
        onClick={() => setShowActivities((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-[24px] bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_44px_-18px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
      >
        {showActivities ? "Ẩn danh sách hoạt động" : "Xem danh sách hoạt động"}
      </button>

      <button
        type="button"
        onClick={() => setShowSystemStatus(true)}
        className="inline-flex items-center justify-center rounded-[24px] border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:hover:border-emerald-900/40 dark:hover:bg-slate-800"
      >
        Xem trạng thái hệ thống
      </button>
    </div>

    {showActivities && (
      <div className="mt-8 space-y-4">
        {recentActivities.map((item, index) => (
          <div
            key={`${item.name}-${item.time}`}
            className="rounded-[26px] border border-slate-100 bg-white px-5 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/60"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex min-w-0 flex-1 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0">
                  <p className="text-xl font-black text-slate-900 dark:text-slate-100">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
                    {item.course}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:ml-10 lg:w-[360px] lg:flex-nowrap lg:justify-between">
                <div className="lg:w-[160px] lg:shrink-0 lg:text-center">
                  <StatusBadge status={item.status} />
                </div>

                <div className="lg:w-[140px] lg:shrink-0 lg:text-left">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

{showSystemStatus && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* overlay */}
    <button
      type="button"
      aria-label="Đóng popup"
      onClick={() => setShowSystemStatus(false)}
      className="absolute inset-0 bg-slate-950/55 backdrop-blur-[3px]"
    />

    {/* modal */}
    <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_120px_-32px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" />
      <div className="pointer-events-none absolute -right-12 top-8 h-36 w-36 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />
      <div className="pointer-events-none absolute left-10 top-10 h-28 w-28 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />

      <div className="relative p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              TRẠNG THÁI HỆ THỐNG
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900 dark:text-slate-100">
              Kết nối blockchain và vận hành
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              Theo dõi nhanh tình trạng network, smart contract và gas fee để đảm bảo luồng xác thực
              và cập nhật chứng nhận đang hoạt động ổn định.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSystemStatus(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-slate-500 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            ×
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <StatusRow
            label="Network đang kết nối"
            value="Sepolia Testnet"
            valueClass="text-emerald-600 dark:text-emerald-400"
          />
          <StatusRow label="Smart contract" value="0x4F9...A123" />
          <StatusRow label="Gas price" value="12 Gwei" />
        </div>

        <div className="mt-5 rounded-[24px] border border-emerald-200 bg-emerald-50 px-5 py-5 dark:border-emerald-900/50 dark:bg-emerald-950/30">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
            HỆ THỐNG ỔN ĐỊNH
          </p>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
            Smart contract đang phản hồi bình thường, dữ liệu có thể được tra cứu và cập nhật theo
            luồng giao diện hiện tại.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setShowSystemStatus(false)}
            className="inline-flex items-center justify-center rounded-[20px] bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-[0_18px_44px_-18px_rgba(37,99,235,0.42)] transition-all duration-300 hover:bg-blue-700"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 opacity-90" />

      <div className="flex h-[190px] flex-col items-center justify-center">
        {/* title */}
        <p className="rounded-full bg-slate-50 px-4 py-1.5 text-center text-[14px] font-bold uppercase tracking-[0.16em] text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:ring-slate-700">
          {item.label}
        </p>

        {/* number */}
        <div className="mt-6 flex items-center justify-center">
          <p className="text-center text-[60px] font-black leading-none tracking-[-0.055em] text-slate-900 dark:text-white">
            <CountUpNumber value={item.value} />
          </p>
        </div>

        {/* desc */}
        <p className="mt-4 text-center text-[16px] text-slate-500 dark:text-slate-400">
          {item.note}
        </p>
      </div>
    </div>
  );
}
function StatusBadge({ status }: { status: string }) {
  const statusMap: Record<string, string> = {
    "Đã phát hành": "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",
    "Đã xác thực": "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-300",
    "Đã thu hồi": "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-300",
    "Đã tạo": "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300",
  };

  return (
    <span
      className={`inline-flex w-full justify-center rounded-full border px-3 py-1 text-sm font-bold ${
        statusMap[status] || "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}

function StatusRow({
  label,
  value,
  valueClass = "text-slate-900 dark:text-slate-100",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white px-5 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className={`mt-3 text-2xl font-black ${valueClass}`}>{value}</p>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "emerald" | "amber";
}) {
  const toneMap = {
    blue:
      "border-blue-100/80 bg-gradient-to-br from-blue-50 to-cyan-50 dark:border-blue-900/40 dark:from-blue-950/40 dark:to-cyan-950/30",
    emerald:
      "border-emerald-100/80 bg-gradient-to-br from-emerald-50 to-teal-50 dark:border-emerald-900/40 dark:from-emerald-950/40 dark:to-teal-950/30",
    amber:
      "border-amber-100/80 bg-gradient-to-br from-amber-50 to-orange-50 dark:border-amber-900/40 dark:from-amber-950/40 dark:to-orange-950/30",
  };

  const textMap = {
    blue: {
      label: "text-blue-600 dark:text-blue-300",
      value: "text-blue-700 dark:text-blue-200",
    },
    emerald: {
      label: "text-emerald-700 dark:text-emerald-300",
      value: "text-emerald-700 dark:text-emerald-200",
    },
    amber: {
      label: "text-amber-700 dark:text-amber-300",
      value: "text-amber-700 dark:text-amber-200",
    },
  };

  const valueSize =
    value.length >= 5
      ? "text-[26px] md:text-[28px]"
      : "text-[30px] md:text-[32px]";

  return (
    <div
      className={`flex h-[128px] min-w-0 flex-col rounded-[22px] border px-3 py-4 ${toneMap[tone]}`}
    >
      <p
        className={`text-center text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px] ${textMap[tone].label}`}
      >
        {label}
      </p>

      <div className="flex flex-1 items-center justify-center">
        <p
          className={`text-center font-black leading-none tracking-[-0.04em] ${valueSize} ${textMap[tone].value}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
export default ActivityPage;

function CountUpNumber({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const numericValue = useMemo(() => {
    return Number(value.replace(/,/g, ""));
  }, [value]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrame = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const updateValue = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const nextValue = Math.round(numericValue * easedProgress);

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [numericValue, duration]);

  return <>{displayValue.toLocaleString("en-US")}</>;
}