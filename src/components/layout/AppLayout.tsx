import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import { cn } from "@/lib/utils";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("certchain-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme ?? "light";

    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("certchain-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased transition-colors duration-500">
      {!isHome && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 opacity-90 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 dark:opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-grid-slate-100/[0.2] dark:bg-grid-slate-900/[0.1]" />
        </>
      )}

      <div className="relative">
        <AppHeader theme={theme} setTheme={setTheme} />

        <main
          className={cn(
            "mx-auto max-w-7xl px-4 pb-8 lg:px-10",
            isHome ? "pt-0" : "pt-24"
          )}
        >
          <Outlet />
        </main>

        <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm ring-1 ring-border/10">
          <div className="mx-auto max-w-7xl px-6 py-7 md:px-8 lg:flex lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="text-lg font-semibold text-foreground">CertChain</p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Nền tảng chứng nhận học thuật trên blockchain
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground/70">
                Project Nhóm D | Lớp CY:0001
              </p>
            </div>

            <div className="mt-5 flex flex-col items-end gap-1 text-sm text-muted-foreground md:mt-0 lg:text-right">
              <p>Ethereum Sepolia Testnet</p>
              <p className="text-xs">© 2026 Đồ án Blockchain</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;