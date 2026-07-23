import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  nitro: {
    externals: {
      inline: ["vue-bundle-renderer"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@vercel/analytics"],
});
