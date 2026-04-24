import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "../ConnectWallet";
import logo from "@/assets/logo.png";

type Props = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

function AppHeader({ theme, setTheme }: Props) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const useLightHeader = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        useLightHeader
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
          : "border-b border-white/10 bg-slate-950/18 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-2xl shadow-sm">
  <img
    src={logo}
    alt="CertChain logo"
    className="h-full w-full object-cover"
  />
</div>

          <NavLink
            to="/"
            className={cn(
              "text-2xl font-black tracking-tight transition-colors",
              useLightHeader
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-emerald-300"
            )}
          >
            CertChain
          </NavLink>
        </div>

        {/* RIGHT CLUSTER: nav sát bên trái wallet */}
        <div className="flex items-center gap-4 lg:gap-5">
          <nav className="hidden items-center gap-2 md:flex">
            {[
              { label: "TRANG CHỦ", path: "/" },
              { label: "TẠO CHỨNG NHẬN", path: "/create" },
              { label: "XÁC THỰC", path: "/verify" },
              { label: "CẬP NHẬT", path: "/update" },
              { label: "HOẠT ĐỘNG", path: "/activity" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200",
                    useLightHeader
                      ? isActive
                        ? "bg-primary/10 text-primary ring-1 ring-primary/20 shadow-sm"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      : isActive
                        ? "bg-white/12 text-emerald-300 ring-1 ring-white/15 backdrop-blur-sm"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CONNECT WALLET trước */}
          <div
            className={cn(
              !useLightHeader &&
                "[&_button]:border-white/15 [&_button]:bg-white/10 [&_button]:text-white [&_button]:ring-white/10 [&_button]:backdrop-blur-md [&_button:hover]:bg-white/15 [&_button:hover]:ring-white/20"
            )}
          >
            <ConnectWalletButton />
          </div>

          {/* LIGHT / DARK sau */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              "group relative h-10 w-20 overflow-hidden rounded-full p-0.5 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              useLightHeader
                ? "border border-border bg-muted hover:shadow-md hover:shadow-primary/10"
                : "border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15"
            )}
          >
            <span
              className={cn(
                "absolute inset-y-0 left-0 flex size-9 items-center justify-center rounded-full shadow-sm transition-all duration-300",
                useLightHeader ? "bg-background" : "bg-white/90",
                theme === "light" ? "translate-x-0" : "translate-x-10"
              )}
            >
              {theme === "light" ? (
                <span className="text-lg text-amber-500/90">☀️</span>
              ) : (
                <span className="text-lg text-slate-500">🌙</span>
              )}
            </span>
            <span className="sr-only">Toggle {theme} mode</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;