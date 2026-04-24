import { useMemo, useState } from "react";
import { ConnectWalletButton } from "@/components/ConnectWallet";
import { NetworkSwitcher } from "@/components/SwitchNetworks";

type CertificateStatus = "Created" | "Issued" | "Revoked";

type CertificateResult = {
  id: string;
  student: string;
  course: string;
  status: CertificateStatus;
  issuer: string;
  issuedAt: string;
} | null;

function Main() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState<CertificateResult>(null);

  const handleSearch = () => {
    setResult({
      id: certificateId || "CERT-001",
      student: "Nguyen Van A",
      course: "Blockchain Fundamentals",
      status: "Issued",
      issuer: "0x123...abc",
      issuedAt: "14 Apr 2026",
    });
  };

  const statusStyle = useMemo(() => {
    if (!result) return "";
    switch (result.status) {
      case "Created":
        return "bg-amber-100 text-amber-700 border border-amber-200";
      case "Issued":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";
      case "Revoked":
        return "bg-rose-100 text-rose-700 border border-rose-200";
      default:
        return "";
    }
  }, [result]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_24%),linear-gradient(to_bottom,_#020617,_#0f172a_42%,_#111827)]" />
      <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-[-80px] top-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Top bar */}
        <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-black/30 border-white/20 md:flex-row md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Ethereum Sepolia · Academic Credential dApp
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg md:text-6xl">
              Certificate Verification Platform
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-200">
              Verify academic certificates on-chain with full transparency.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <NetworkSwitcher />
            <ConnectWalletButton />
          </div>
        </div>

        {/* Quick stats */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="group rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/40 hover:bg-white/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">App Status</p>
                <p className="text-3xl font-black text-white mt-1 drop-shadow-lg">Ready</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">UI prepared for smart contract integration.</p>
          </div>

          <div className="group rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/40 hover:bg-white/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-purple-300">Core Actions</p>
                <p className="text-3xl font-black text-white mt-1 drop-shadow-lg">3 Actions</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">Create · Update · Verify certificates.</p>
          </div>

          <div className="group rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/40 hover:bg-white/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Demo Mode</p>
                <p className="text-3xl font-black text-white mt-1 drop-shadow-lg">Mock Data</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">Ready for blockchain integration.</p>
          </div>
        </div>

        {/* Main cards */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Create */}
          <div className="group rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-white/5 p-10 backdrop-blur-2xl shadow-2xl shadow-black/30 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-3xl hover:shadow-blue-500/30 hover:border-blue-400/50 hover:bg-gradient-to-br from-blue-500/5 hover:ring-4 ring-blue-400/30">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-lg font-bold text-blue-300 mb-2">01 Create</p>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl mb-3">
                  Issue New Certificate
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Issue a new academic certificate with a unique certificate ID.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300 transition duration-300 group-hover:scale-105">
                🎓
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase">Certificate ID</label>
                  <input
                    className="w-full rounded-3xl border border-white/20 bg-slate-900/70 px-6 py-4 text-lg text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/30 shadow-lg hover:shadow-xl"
                    placeholder="CERT-2024-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase">Student Name</label>
                  <input
                    className="w-full rounded-3xl border border-white/20 bg-slate-900/70 px-6 py-4 text-lg text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/30 shadow-lg hover:shadow-xl"
                    placeholder="Nguyen Van A"
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase">Course</label>
                  <input
                    className="w-full rounded-3xl border border-white/20 bg-slate-900/70 px-6 py-4 text-lg text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/30 shadow-lg hover:shadow-xl"
                    placeholder="Blockchain Fundamentals"
                  />
                </div>
                <button className="mt-4 w-full rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-5 text-xl font-bold text-white shadow-2xl hover:scale-[1.05] hover:shadow-3xl hover:shadow-blue-500/50 hover:from-blue-700 hover:to-cyan-600 transition-all duration-500 ring-2 ring-blue-400/30 hover:ring-blue-400/50">
                  Issue Certificate
                </button>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </div>

          {/* Update */}
          <div className="group rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-purple/5 p-10 backdrop-blur-2xl shadow-2xl shadow-black/30 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-3xl hover:shadow-purple-500/30 hover:border-purple-400/50 hover:bg-gradient-to-br from-purple-500/5 hover:ring-4 ring-purple-400/30">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-lg font-bold text-purple-300 mb-2">02 Update</p>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-2xl mb-3">
                  Update Status
                </h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Modify certificate status securely on-chain.
                </p>
              </div>
              <div className="h-20 w-20 rounded-3xl bg-purple-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-all duration-500">
                🔄
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase">Certificate ID</label>
                <input
                  className="w-full rounded-3xl border border-white/20 bg-slate-900/70 px-6 py-4 text-lg text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-400/30 shadow-lg hover:shadow-xl"
                  placeholder="CERT-2024-001"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase">New Status</label>
                  <select className="w-full rounded-3xl border border-white/20 bg-slate-900/70 px-6 py-4 text-lg text-white outline-none transition-all duration-300 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-400/30 shadow-lg hover:shadow-xl">
                    <option>Created</option>
                    <option>Issued</option>
                    <option>Revoked</option>
                  </select>
                </div>
              </div>
              <button className="w-full rounded-3xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 px-8 py-5 text-xl font-bold text-white shadow-2xl hover:scale-[1.05] hover:shadow-3xl hover:shadow-purple-500/50 hover:from-purple-700 hover:to-pink-600 transition-all duration-500 ring-2 ring-purple-400/30 hover:ring-purple-400/50">
                Update Status
              </button>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </div>

          {/* Verify */}
          <div className="group rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-emerald/5 p-10 backdrop-blur-2xl shadow-2xl shadow-black/30 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-3xl hover:shadow-emerald-500/30 hover:border-emerald-400/50 hover:bg-gradient-to-br from-emerald-500/5 hover:ring-4 ring-emerald-400/30">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-lg font-bold text-emerald-300 mb-2">03 Verify</p>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl mb-3">
                  Verify On-Chain
                </h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Search any certificate and view live blockchain status.
                </p>
              </div>
              <div className="h-20 w-20 rounded-3xl bg-emerald-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-all duration-500">
                ✅
              </div>
            </div>
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide uppercase text-center">Certificate ID</label>
                <input
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="w-full rounded-3xl border-4 border-dashed border-white/30 bg-gradient-to-r from-slate-900/50 to-slate-800/70 px-8 py-6 text-xl font-bold text-white placeholder:text-gray-400 text-center outline-none transition-all duration-500 focus:border-emerald-400/80 focus:ring-8 focus:ring-emerald-400/40 shadow-2xl hover:shadow-3xl hover:border-white/50"
                  placeholder="Enter CERT ID to verify..."
                />
              </div>
              <button
                onClick={handleSearch}
                className="w-full rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-8 py-6 text-xl font-black text-white shadow-2xl hover:scale-[1.08] hover:shadow-4xl hover:shadow-emerald-500/60 hover:from-emerald-700 hover:to-teal-600 transition-all duration-500 ring-4 ring-emerald-400/40 hover:ring-emerald-400/60 group/search"
              >
                🔍 Search & Verify Certificate
              </button>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500/20 backdrop-blur-xl rounded-full p-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
              <p className="text-sm font-bold text-emerald-200 text-center">Publicly Verifiable</p>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-12 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl p-10 shadow-3xl shadow-black/40 ring-2 ring-white/10 animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <p className="text-lg uppercase tracking-widest text-blue-300 mb-2 font-bold">✓ Verified On-Chain</p>
                <h2 className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Certificate Details
                </h2>
              </div>
              <div className={`px-6 py-3 rounded-2xl text-lg font-bold shadow-lg transform rotate-3 ${statusStyle === 'bg-emerald-100 text-emerald-700 border border-emerald-200' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-400/50 shadow-emerald-500/30' : statusStyle === 'bg-amber-100 text-amber-700 border border-amber-200' ? 'bg-amber-500/20 text-amber-100 border-amber-400/50 shadow-amber-500/30' : 'bg-rose-500/20 text-rose-100 border-rose-400/50 shadow-rose-500/30'}`}>
                {result.status} 
                <span className="ml-2 text-2xl">✓</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">

              <div className="group rounded-3xl border border-white/20 bg-slate-900/70 p-8 backdrop-blur-xl hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-500">
                <p className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">ID</p>
                <p className="text-2xl font-black text-white">{result.id}</p>
              </div>

              <div className="group rounded-3xl border border-white/20 bg-slate-900/70 p-8 backdrop-blur-xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-500">
                <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">Student</p>
                <p className="text-xl font-black text-white">{result.student}</p>
              </div>

              <div className="group rounded-3xl border border-white/20 bg-slate-900/70 p-8 backdrop-blur-xl hover:shadow-xl hover:shadow-green-400/30 transition-all duration-500">
                <p className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3">Course</p>
                <p className="text-xl font-black text-white">{result.course}</p>
              </div>

              <div className="group rounded-3xl border border-white/20 bg-slate-900/70 p-8 backdrop-blur-xl hover:shadow-xl hover:shadow-purple-400/30 transition-all duration-500">
                <p className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">Issued</p>
                <p className="text-xl font-black text-white">{result.issuedAt}</p>
              </div>

              <div className="group md:col-span-2 lg:col-span-4 rounded-3xl border border-white/20 bg-slate-900/70 p-8 backdrop-blur-xl hover:shadow-xl hover:shadow-orange-400/30 transition-all duration-500">
                <p className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-3">Issuer</p>
                <p className="text-lg font-mono font-black text-white break-all">{result.issuer}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
