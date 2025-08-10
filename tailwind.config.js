@type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // চাইলে এখানে কাস্টম থিমও দিতে পারো
    darkTheme: "dark", // ডার্ক থিমের নাম
  },
}
