export default {
  mode: "jit", // Active le mode Just-In-Time
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00bb76",
      },
    },
  },
  plugins: [],
};
