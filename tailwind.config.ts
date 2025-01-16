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
        primary: "#262626",
        secondary: "#FFCD42",
        tertiary: "#848484",
        quaternary: "#C6A445",
        clr5: "#7E7E7E",
      },
    },
  },
  plugins: [],
} satisfies Config;
