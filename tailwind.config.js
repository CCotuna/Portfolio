/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        45: "45deg",
        360: "360deg",
      },
      colors: {
        brand: {
          new_color: "#FF6347",
        },
      },
    },
  },
  plugins: [],
};
