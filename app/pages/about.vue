<script setup lang="ts">
useHead({
  title: "About - Branell Kaunda",
  meta: [
    {
      name: "description",
      content: "A bit about me",
    },
  ],
});
</script>

<template>
  <main
    class="mx-auto max-w-3xl border-x border-purple-500/10 px-8 py-20 lg:px-16 lg:py-32"
  >
    <NuxtLink
      to="/"
      class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 12H5m7-7-7 7 7 7" />
      </svg>
      Back to home
    </NuxtLink>

    <section>
      <p
        class="text-sm font-semibold uppercase tracking-widest text-purple-400"
      >
        About
      </p>
      <h1 class="mt-2 text-4xl font-bold text-white lg:text-5xl">
        The story so far
      </h1>
      <div class="mt-8 space-y-5 text-base leading-relaxed text-gray-400">
        <p>
          I'm a self-taught front-end developer from Alcoy, Spain with 2 years
          of experience. My goal is to learn something new every day, and to
          build things that are useful to people.
        </p>
        <p>
          I learn by doing. Every project teaches me something and that for me
          is the most important part of being a developer - you are always
          learning.
        </p>
        <p>
          When I'm not coding, I'm learning piano, playing football or at the
          gym. All of these taught me the same lesson, show up every day, even
          when it feels like nothing's happening. Each session compounds.
          Results take time, but they come.
        </p>
        <p>
          It's the same with coding. You don't learn a framework in a week. You
          write bad code, then slightly less bad code, and one day you look back
          and realise how far you've come.
        </p>
        <p class="pt-4 text-gray-500">
          That's the gist of it. Feel free to reach out.
        </p>
      </div>
    </section>
  </main>
  <div class="border-t border-purple-500/10">
    <ContactSection />
  </div>
</template>
