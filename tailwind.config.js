/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aurora: {
          navy: "#06203a",
          blue: "#123f55",
          ink: "#0a1825",
          panel: "#102a3d",
          line: "#31516a",
          gold: "#c99a3b",
          paleGold: "#e8c46f",
          green: "#86dfbd",
          teal: "#2d7775",
          mist: "#eef2ed",
          stone: "#f6f2e8",
          smoke: "#e7ddc8",
          slate: "#415463",
        },
      },
      boxShadow: {
        gold: "0 22px 70px rgba(214, 166, 66, 0.14)",
        panel: "0 24px 80px rgba(6, 32, 58, 0.16)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 18% 12%, rgba(201, 154, 59, 0.2), transparent 24%), radial-gradient(circle at 72% 8%, rgba(45, 119, 117, 0.14), transparent 28%), radial-gradient(circle at 52% 52%, rgba(255, 255, 255, 0.64), transparent 36%), linear-gradient(135deg, #f6f2e8 0%, #e7ddc8 48%, #e4ece7 100%)",
      },
    },
  },
  plugins: [],
};
