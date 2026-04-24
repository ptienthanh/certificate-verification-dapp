import { Link } from "react-router-dom";

function PlaceholderPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-card p-12 md:p-16 shadow-sm ring-1 ring-border/10 text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-muted text-4xl shadow-md">
            🚧
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Trang đang phát triển
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-xl leading-relaxed text-muted-foreground">
            Tính năng này sẽ sớm được hoàn thiện. Cảm ơn bạn đã kiên nhẫn.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/verify"
              className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/20 focus-visible:ring-2 focus-visible:ring-primary transition-all"
            >
              Thử xác thực chứng nhận
            </Link>
            <Link
              to="/"
              className="rounded-xl border border-border bg-card px-8 py-4 text-lg font-semibold hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary transition-all"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;

