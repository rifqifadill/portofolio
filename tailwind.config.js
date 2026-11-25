/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        canvas: {
          DEFAULT: "#090a0c",
          subtle: "#0e1013",
          surface: "#131519",
          elevated: "#181a20",
          border: "#20232a",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          bright: "#38bdf8",
          steel: "#7dd3fc",
        }
      }
    },
  },
  plugins: [],
}
