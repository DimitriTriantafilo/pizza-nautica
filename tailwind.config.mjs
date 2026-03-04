/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        "nautica-red": "#bd3026",
        "nautica-red-dark": "#9b241f",
        "nautica-yellow": "#e0d583",
        "nautica-dark": "#1a1a1a",
        "cream-1": "#f7f3e0",
        "warm-ivory": "#efe7c1",
        charcoal: "#171717",
        slate: "#2f2f2f",
        terracotta: "#b84a39",
        "muted-green": "#19a974",
      },
      boxShadow: {
        nautica: "0 10px 30px rgba(0,0,0,0.15)",
        "nautica-lg": "0 20px 50px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        nautica: "12px",
        "nautica-lg": "16px",
      },
    },
  },
};
