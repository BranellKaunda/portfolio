<script setup lang="ts">
const socials = [
  {
    label: "GitHub",
    url: "https://github.com/Branellkaunda",
    icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/braneldo",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Email",
    url: "mailto:branellk@gmail.com",
    icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
];

const technologies = [
  /* { name: "React", img: "https://svgl.app/library/react.svg" },
  { name: "Next.js", img: "https://svgl.app/library/nextjs.svg" }, */
  { name: "Vue", img: "https://svgl.app/library/vue.svg" },
  { name: "Nuxt", img: "https://svgl.app/library/nuxt.svg" },
  { name: "TypeScript", img: "https://svgl.app/library/typescript.svg" },
  { name: "Tailwind CSS", img: "https://svgl.app/library/tailwindcss.svg" },
  { name: "PostgreSQL", img: "https://svgl.app/library/postgresql.svg" },
  /* { name: "Git", img: "https://svgl.app/library/git.svg" }, */
];

const experience = [
  {
    period: "2025 - 2026",
    role: "Front-End Developer",
    company: "Freelance",
    desc: "Developing and maintaining responsive web applications across multiple platforms.",
  },
];

const projects = [
  {
    title: "Outfit Generator",
    desc: "Plan your next outfit with ease. Upload your clothes and see how they look in real time. Built with Next.js, TypeScript, Neon DB, and Nano Banano for image processing.",
    tags: ["Next.js", "React", "TypeScript", "Neon DB"],
    links: [
      { label: "View app", url: "https://outfit-generator-ten.vercel.app/" },
      {
        label: "Source code",
        url: "https://github.com/BranellKaunda/outfit-generator",
      },
    ],
  },
  {
    title: "Data & Management Platform",
    working: true,
    desc: "A full-stack digital platform to modernize football management in grassroots areas. Register players, record match data, track youth development, and keep clean historical records.",
    tags: ["Nuxt", "Vue", "TypeScript", "PostgreSQL"],
    links: [
      {
        label: "View app",
        url: "https://football-data-management-app.vercel.app/",
      },
      {
        label: "Source code",
        url: "https://github.com/BranellKaunda/football-data-management-app",
      },
    ],
  },
  {
    title: "What to Wear?",
    desc: "A weather app that provides clothing recommendations based on current weather conditions. Built with React and the OpenWeatherMap API.",
    tags: ["React", "API"],
    links: [
      {
        label: "View app",
        url: "https://weather-app-five-coral-61.vercel.app/",
      },
      {
        label: "Source code",
        url: "https://github.com/BranellKaunda/weather-app",
      },
    ],
  },
  {
    title: "Memory Game",
    desc: "An interactive memory card game built with React showcasing dynamic state management and smooth UI transitions.",
    tags: ["React"],
    links: [
      { label: "View app", url: "https://matching-images.vercel.app/" },
      {
        label: "Source code",
        url: "https://plum-dotterel-668941.hostingersite.com/",
      },
    ],
  },
];
</script>

<template>
  <main
    class="mx-auto grid max-w-6xl grid-cols-1 border-x border-purple-500/10 lg:grid-cols-2"
  >
    <!-- Row 1: Hero (col-span-2) -->
    <section
      id="hero"
      class="flex flex-col items-center gap-12 border-b border-purple-500/10 px-8 py-20 lg:col-span-2 lg:flex-row lg:gap-16 lg:px-16 lg:py-32"
    >
      <div class="flex-1 text-center lg:text-left">
        <p
          class="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400"
        >
          Front-End Developer
        </p>
        <h1 class="text-4xl font-bold leading-tight text-white lg:text-6xl">
          Hello, I'm<br />
          <span
            class="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Branell Kaunda
          </span>
        </h1>
        <!-- <div class="mt-6 space-y-2 text-left font-mono text-sm text-gray-400">
          <p>
            > <span class="text-purple-400">Branell</span>.location
            <span class="text-gray-500">=</span>
            <span class="text-gray-400">'Alcoy, Spain'</span>
          </p>
          <p>
            > <span class="text-purple-400">Branell</span>.contact
            <span class="text-gray-500">=</span> ['<a
              href="mailto:branellk@gmail.com"
              class="text-purple-300 underline decoration-purple-500/30 underline-offset-2 transition-colors hover:text-purple-200"
              >branellk@gmail.com</a
            >' , '<a
              href="https://github.com/Branellkaunda"
              target="_blank"
              class="text-purple-300 underline decoration-purple-500/30 underline-offset-2 transition-colors hover:text-purple-200"
              >GitHub</a
            >' , '<a
              href="https://instagram.com/braneldo"
              target="_blank"
              class="text-purple-300 underline decoration-purple-500/30 underline-offset-2 transition-colors hover:text-purple-200"
              >Instagram</a
            >']
          </p>
          <p>
            > <span class="text-purple-400">Branell</span>.interests
            <span class="text-gray-500">=</span> ['football', 'piano', 'working
            out', 'video games']
          </p>
        </div> -->
        <p class="mt-6 max-w-lg text-base leading-relaxed text-gray-400">
          I am a junior front-end developer exploring the possibilities of web
          applications. Building, Failing and Learning.
        </p>
        <div
          class="mt-8 flex items-center justify-center gap-5 lg:justify-start"
        >
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-surface p-3 text-gray-400 transition-colors hover:bg-purple-600 hover:text-white"
            :title="s.label"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="s.icon" />
            </svg>
          </a>
        </div>
      </div>
      <div class="shrink-0">
        <div class="relative">
          <div
            class="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 opacity-25 blur-lg"
          />
          <img
            src="/branell.jpg"
            alt="Branell Kaunda"
            class="relative h-72 w-72 rounded-md object-cover shadow-2xl lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>

    <!-- Row 2, Col 1: MadVue photo -->
    <div
      class="flex items-stretch border-b border-purple-500/10 max-lg:border-r-0 lg:border-r"
    >
      <img src="/MadVue.jpg" alt="MadVue" class="h-full w-full object-cover" />
    </div>

    <!-- Row 2, Col 2: Career -->
    <section
      id="experience"
      class="border-b border-purple-500/10 px-8 py-16 lg:px-16"
    >
      <div class="mb-6">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-purple-400"
        >
          Career
        </p>
        <h2 class="mt-2 text-3xl font-bold text-white lg:text-4xl">
          Experience
        </h2>
      </div>
      <div class="relative">
        <div class="absolute left-4 top-0 h-full w-px bg-purple-500/20" />
        <div
          v-for="(exp, i) in experience"
          :key="i"
          class="relative ml-12 pb-12 last:pb-0"
        >
          <div
            class="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full border-2 border-purple-500 bg-canvas"
          />
          <span class="text-sm font-medium text-purple-400">{{
            exp.period
          }}</span>
          <h3 class="mt-1 text-xl font-semibold text-white">
            {{ exp.role }}
            <span class="text-gray-400"> - {{ exp.company }}</span>
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-400">
            {{ exp.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- Row 3: Technologies (col-span-2) -->
    <section
      id="technologies"
      class="border-b border-purple-500/10 px-8 py-16 lg:col-span-2 lg:px-16"
    >
      <div class="mb-10 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-purple-400"
        >
          Skills
        </p>
        <h2 class="mt-2 text-3xl font-bold text-white lg:text-4xl">
          Technologies
        </h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group flex flex-col items-center rounded-md border border-purple-500/10 bg-surface p-8 text-center transition-colors hover:border-purple-500/30"
        >
          <img :src="tech.img" :alt="tech.name" class="h-14 w-14" />
          <h3 class="mt-4 text-lg font-semibold text-white">
            {{ tech.name }}
          </h3>
        </div>
      </div>
    </section>

    <!-- Row 4: Projects (col-span-2) -->
    <section
      id="projects"
      class="border-b border-purple-500/10 px-8 py-16 lg:col-span-2 lg:px-16"
    >
      <div class="mb-10 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-purple-400"
        >
          Work
        </p>
        <h2 class="mt-2 text-3xl font-bold text-white lg:text-4xl">
          Personal Projects
        </h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group relative rounded-md border border-purple-500/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5"
        >
          <div
            v-if="project.working"
            class="absolute -top-3 left-4 flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium text-purple-300 backdrop-blur-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
              />
              <span
                class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
              />
            </span>
            currently working on
          </div>
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-purple-500/10 text-purple-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-400">
            {{ project.desc }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
            >
              {{ tag }}
            </span>
          </div>
          <div class="mt-4 flex gap-4 text-sm">
            <a
              v-for="link in project.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              {{ link.label }} →
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Row 5: Blog (col-span-2) -->
    <section
      id="blog"
      class="border-b border-purple-500/10 px-8 py-16 lg:col-span-2 lg:px-16"
    >
      <div class="mb-10 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-purple-400"
        >
          Writing
        </p>
        <h2 class="mt-2 text-3xl font-bold text-white lg:text-4xl">Blog</h2>
      </div>
      <div class="mx-auto max-w-4xl">
        <article
          class="flex flex-col overflow-hidden rounded-md border border-purple-500/10 bg-surface lg:flex-row"
        >
          <div class="lg:w-1/3">
            <img
              src="/MadvueStaff.jpg"
              alt="MadVue Staff"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-center p-6 lg:w-2/3 lg:p-8">
            <div class="mb-3 flex items-center gap-3 text-xs text-gray-500">
              <span class="text-purple-400">Vue</span>
              <span>·</span>
              <time>June 30, 2026</time>
            </div>
            <h3 class="text-xl font-semibold text-white">MadVue 2026</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-400">
              This year i attended my first vue conference in Madrid - an
              experience i want to relive over and over again.
            </p>
            <div class="mt-4 flex gap-4 text-sm">
              <NuxtLink
                to="/blog"
                class="font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Read more →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div class="lg:col-span-2">
      <ContactSection />
    </div>
  </main>
</template>
