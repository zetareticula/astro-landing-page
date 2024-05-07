/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-zetareticula",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  overrides: [
    {
      files: "*.zetareticula",
      options: {
        parser: "zetareticula",
      },
    },
  ],
};

export default config;
