<script setup lang="ts">
useHead({
  title: "Branell Kaunda - Portfolio",
  meta: [{ name: "description", content: "Branell Kaunda's Portfolio" }],
  link: [
    { rel: "icon", href: "/portfolio-logo.png" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-canvas text-gray-300 antialiased">
    <NavBar />
    <NuxtPage />
  </div>
</template>
