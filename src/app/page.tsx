"use client";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Aurora Headphones",
    price: "$199",
    badge: "Best Seller",
    description: "Âm thanh Hi‑Fi, chống ồn chủ động, 32h pin.",
  },
  {
    id: 2,
    name: "Nebula Speaker",
    price: "$149",
    badge: "New",
    description: "Loa 360°, bass sâu, kết nối đa thiết bị.",
  },
  {
    id: 3,
    name: "Lumen Earbuds",
    price: "$129",
    badge: "Hot",
    description: "True wireless, sạc nhanh, kháng nước IPX4.",
  },
  {
    id: 4,
    name: "Halo Soundbar",
    price: "$299",
    badge: "Premium",
    description: "Dolby Atmos, dành cho setup phòng khách cao cấp.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 md:px-8 lg:px-12">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50/10 ring-1 ring-slate-50/10">
              <span className="text-lg font-semibold tracking-tight">E.</span>
            </div>
            <span className="text-sm font-medium tracking-tight text-slate-200">
              EchoStudio
            </span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="hidden items-center gap-6 text-sm text-slate-300 md:flex"
          >
            <button className="transition-colors hover:text-white">
              Sản phẩm
            </button>
            <button className="transition-colors hover:text-white">
              Bộ sưu tập
            </button>
            <button className="transition-colors hover:text-white">
              Về chúng tôi
            </button>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/40 transition hover:bg-white"
          >
            Đăng nhập
          </motion.button>
        </header>

        {/* Hero + product highlight */}
        <main className="mt-8 grid flex-1 gap-10 md:mt-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
          {/* Hero copy */}
          <section className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 shadow-sm shadow-slate-950/60 backdrop-blur"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Sản phẩm audio thế hệ mới vừa ra mắt</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Âm thanh sống động,
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                {" "}
                chạm mọi giác quan.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              Khám phá bộ sưu tập loa, tai nghe và soundbar được tinh chỉnh bởi
              các chuyên gia audio, tối ưu cho mọi không gian từ góc làm việc
              đến phòng khách của bạn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.35)] transition hover:bg-emerald-300">
                Mua ngay
                <span className="text-base transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/70">
                Xem bộ sưu tập
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm"
            >
              <div>
                <div className="font-semibold text-slate-100">Miễn phí giao hàng</div>
                <div className="text-slate-400">Áp dụng cho đơn từ 1.000.000đ</div>
              </div>
              <div>
                <div className="font-semibold text-slate-100">Đổi trả 30 ngày</div>
                <div className="text-slate-400">
                  Hỗ trợ đổi trả nhanh, không cần lý do
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-100">Bảo hành 2 năm</div>
                <div className="text-slate-400">
                  Hỗ trợ kỹ thuật trực tuyến 24/7
                </div>
              </div>
            </motion.div>
          </section>

          {/* Animated product card */}
          <section className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 110, damping: 18 }}
              className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950/90 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.9)] sm:p-6 lg:p-7"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.5),transparent_55%)] opacity-80" />
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="space-y-3 sm:flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/40">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Trải nghiệm mới
                  </div>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                    Aurora Studio Set
                  </h2>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-200/90">
                    Combo loa & tai nghe tối ưu cho làm việc, giải trí và sáng
                    tạo nội dung.
                  </p>

                  <div className="flex items-end gap-3">
                    <div className="text-2xl font-semibold text-emerald-200">
                      $449
                    </div>
                    <div className="text-xs text-slate-300/80">
                      hoặc từ{" "}
                      <span className="font-semibold text-slate-100">
                        $38/tháng
                      </span>
                    </div>
                  </div>

                  <button className="inline-flex items-center justify-center rounded-full bg-slate-50/95 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-slate-900/60 transition hover:bg-white">
                    Thêm vào giỏ
                  </button>
                </div>

                <motion.div
                  initial={{ rotate: -8, y: 12 }}
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18, type: "spring", stiffness: 90, damping: 14 }}
                  className="relative mt-4 flex h-52 flex-1 items-center justify-center sm:mt-0 lg:h-56"
                >
                  {/* Abstract product shape */}
                  <div className="relative h-full w-full max-w-xs">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500" />
                    <div className="absolute inset-3 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900" />

                    <motion.div
                      initial={{ scale: 0.9, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.25, type: "spring" }}
                      className="absolute inset-6 rounded-[2rem] bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.95)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.45),transparent_55%)]" />
                      {/* Rings */}
                      <div className="absolute inset-6 flex items-center justify-center">
                        <div className="h-28 w-28 rounded-full border border-slate-400/40" />
                        <div className="absolute h-40 w-40 rounded-full border border-slate-500/40" />
                      </div>
                      {/* Floating badges */}
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-slate-100 ring-1 ring-white/10"
                      >
                        Spatial audio
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-4 right-4 rounded-full bg-emerald-400/90 px-3 py-1 text-[10px] font-semibold text-emerald-950 shadow-[0_14px_40px_rgba(16,185,129,0.7)]"
                      >
                        -20% hôm nay
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </main>

        {/* Product grid */}
        <section className="mt-14 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
          >
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                Gợi ý cho bạn
              </h2>
              <p className="text-sm text-slate-400">
                Chọn nhanh những sản phẩm được yêu thích nhất.
              </p>
            </div>
            <button className="self-start rounded-full border border-slate-700/70 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/70">
              Xem tất cả
            </button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.9)] transition hover:-translate-y-1.5 hover:border-slate-500/80"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.25),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative mb-4 flex items-start justify-between gap-2">
                  <div className="max-w-[70%] space-y-1.5">
                    <div className="inline-flex rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-medium text-slate-200 ring-1 ring-slate-700/70">
                      {product.badge}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {product.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/90 px-3 py-1 text-[11px] font-semibold text-emerald-950 shadow-[0_12px_30px_rgba(16,185,129,0.7)]">
                    {product.price}
                  </div>
                </div>

                <p className="relative mb-4 line-clamp-3 text-xs leading-relaxed text-slate-300">
                  {product.description}
                </p>

                <div className="relative flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Còn hàng
                  </span>
                  <button className="rounded-full bg-slate-50/95 px-3 py-1 text-[11px] font-semibold text-slate-950 transition group-hover:bg-white">
                    Chọn mua
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
