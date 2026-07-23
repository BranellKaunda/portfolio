<script setup lang="ts">
useHead({
  title: "Branell Kaunda - Portfolio",
  meta: [{ name: "description", content: "Branell Kaunda's Portfolio" }],
  link: [{ rel: "icon", href: "/portfolio-logo.png" }],
});
</script>

<template>
  <div class="min-h-screen bg-canvas text-gray-300 antialiased">
    <NavBar />
    <NuxtPage />
  </div>
</template>
