/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aurora: {
          navy: "#07131d",
          blue: "#10272d",
          ink: "#0b0f10",
          panel: "#111c20",
          line: "#2b3d3f",
          gold: "#d6a642",
          paleGold: "#f1d28a",
          green: "#86dfbd",
          teal: "#2d7775",
          mist: "#dde5de",
        },
      },
      boxShadow: {
        gold: "0 22px 70px rgba(214, 166, 66, 0.14)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 18% 12%, rgba(214, 166, 66, 0.22), transparent 24%), radial-gradient(circle at 72% 8%, rgba(134, 223, 189, 0.16), transparent 28%), radial-gradient(circle at 50% 52%, rgba(241, 210, 138, 0.08), transparent 36%), linear-gradient(135deg, #0b0f10 0%, #10272d 48%, #07131d 100%)",
      },
    },
  },
  plugins: [],
};
