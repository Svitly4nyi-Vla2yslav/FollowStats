import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6b3cff",
        black: "#171624",
        "dark-gray": "#5f5d7e",
        "light-gray": "#ecefff",
        "app-white": "#fff",
        "app-blue": "#315df4",
        "app-red": "#ef4f4f",
        "app-black": "#2b2942",
        "app-gray": "#54585c",
        "app-gray-light": "#686d72",
        "app-card": "#f8f1ff",
        "app-secondary-button": "#f0deff",
        "gray-dark": "#5f5d7e",
        "gray-middle": "#b0aecc",
        pink: "#ea2a86",
        bg: "#f8f9ff",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        sfpro: ["SF Pro Display", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
