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
          gold: "#d6a642",
          paleGold: "#f0ca72",
          green: "#86dfbd",
          teal: "#2d7775",
          mist: "#eef2ed",
          stone: "#f4efe2",
          smoke: "#e7dcc5",
          slate: "#415463",
        },
      },
      boxShadow: {
        gold: "0 22px 70px rgba(214, 166, 66, 0.14)",
        panel: "0 24px 80px rgba(6, 32, 58, 0.16)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 18% 12%, rgba(214, 166, 66, 0.26), transparent 24%), radial-gradient(circle at 72% 8%, rgba(134, 223, 189, 0.2), transparent 28%), radial-gradient(circle at 52% 52%, rgba(255, 255, 255, 0.6), transparent 36%), linear-gradient(135deg, #f4efe2 0%, #e7dcc5 46%, #d8e5df 100%)",
      },
    },
  },
  plugins: [],
};
