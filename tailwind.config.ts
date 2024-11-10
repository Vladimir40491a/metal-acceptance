import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        bgBase: "var(--bg-base)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: 'var(--bg-secondary)',
        bgSecondary25: 'var(--bg-secondary-25)',
        bgTertiary: 'var(--bg-tertiary)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textTertiary: 'var(--text-tertiary)',
      },
      fontFamily: {
        base: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
} satisfies Config;
