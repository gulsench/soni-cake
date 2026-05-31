/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Soni Cake palette — bright, soft, premium (matches the Instagram aesthetic)
        cream: {
          DEFAULT: "#FFFDFB", // brightest base / page background
          50: "#FFFDFB",
          100: "#FAF4EE", // soft cream — alternating section background
          200: "#F3E9DF", // slightly deeper cream for cards/borders
        },
        cocoa: {
          DEFAULT: "#4A3528", // warm cocoa-brown — primary text
          light: "#6B5444",
          muted: "#8A7565",
        },
        rose: {
          DEFAULT: "#E89AAA", // soft rose-pink — primary accent
          deep: "#DE7E92", // hover/active state
          soft: "#F6D9DF", // tints / chips
        },
        sage: {
          DEFAULT: "#A9B8A0", // muted sage — quiet secondary
          soft: "#E7ECE2",
        },
      },
      fontFamily: {
        // Satoshi — a modern geometric sans used across the whole site.
        // `serif` is kept as an alias (used by headings/wordmark) so it also maps to Satoshi.
        sans: ['Satoshi', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Satoshi', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(74, 53, 40, 0.14)',
        card: '0 18px 50px -18px rgba(74, 53, 40, 0.20)',
        glow: '0 10px 30px -8px rgba(232, 154, 170, 0.45)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
