/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      opacity: {
        1: "0.01",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e39",
          950: "#022c22",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        base: {
          DEFAULT: "#fafafa",
          light: "#fafafa",
          dark: "#141414",
          1: "#ffffff",
          2: "#fafafa",
          3: "#f5f5f5",
          4: "#f0f0f0",
          5: "#d9d9d9",
          6: "#bfbfbf",
          7: "#8c8c8c",
          8: "#595959",
          9: "#434343",
          10: "#262626",
          11: "#1f1f1f",
          12: "#141414",
          13: "#000000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gentleFloat: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
          },
          "50%": {
            transform: "translate3d(18px, -16px, 0) scale(1.05)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 hsl(var(--primary)/0)",
          },
          "50%": {
            boxShadow: "0 0 20px hsl(var(--primary)/0.3)",
          },
        },
        hoverLift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-float": "gentleFloat 16s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "hover-lift": "hoverLift 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
      },

      backdropBlur: {
        xs: "4px",
        "2xl": "40px",
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--primary)/0.35)",
        "glow-xl": "0 0 40px hsl(var(--primary)/0.25)",
        "glow-emerald": "0 0 40px hsl(158 75% 45%/0.25)",
        subtle: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        card: "0 10px 30px -10px rgb(0 0 0 / 0.2)",
        "card-hover": "0 20px 40px -15px rgb(0 0 0 / 0.15)",
        elevated: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
};