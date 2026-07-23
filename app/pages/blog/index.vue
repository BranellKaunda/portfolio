<script setup lang="ts">
useHead({
  title: "MadVue 2026 - Branell's Blog",
  meta: [
    {
      name: "description",
      content:
        "My first Vue conference in Madrid - an experience I want to relive over and over again.",
    },
  ],
});
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-16 lg:py-24">
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

    <article>
      <div class="mb-6 flex items-center gap-3 text-sm text-gray-500">
        <span
          class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
          >Vue</span
        >
        <span>·</span>
        <time>June 30, 2026</time>
      </div>

      <h1 class="text-3xl font-bold leading-tight text-white lg:text-5xl">
        MadVue 2026
      </h1>

      <p class="mt-4 text-lg leading-relaxed text-gray-400">
        This year I attended my first Vue conference in Madrid. An experience I
        want to relive over and over again.
      </p>

      <img
        src="/MadvueStaff.jpg"
        alt="MadVue Staff"
        class="mt-10 w-full rounded-xl border border-purple-500/10 object-cover"
      />

      <div class="mt-12 space-y-5 text-base leading-relaxed text-gray-400">
        <p>
          I was part of the team that hosted the event, which meant I got to see
          behind the curtain. The first night we had dinner with the speakers
          and the
          <a
            href="https://madvue.es"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >MadVue</a
          >
          crew. Honestly, that was the best way to start - breaking the ice
          before the chaos of event day. I had conversations that went way
          deeper than I expected. You could just feel how much these people love
          what they do. It's not a job for them, it's a genuine obsession.
        </p>

        <p>
          Event day started at 8 AM and wrapped up around 7 PM, with little
          breaks in between talks. Long day? Yes. Worth it? Absolutely. The
          speaker lineup was stacked -
          <a
            href="https://roe.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >Daniel Roe</a
          >,
          <a
            href="https://nicodevs.com"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >Nico Devs</a
          >,
          <a
            href="https://wmedia.es/en"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >Juan Andrés Núñez</a
          >, Eduardo San Martín to name a few. These are the ones that really
          stuck with me. Maybe it's because they were the ones I got to chat
          with during breaks, or maybe it's because they just had a way of
          explaining things that made me think, "I want to be able to do that
          one day." Either way, they left a mark on me.
        </p>

        <p>
          <a
            href="https://nicodevs.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition-colors hover:text-purple-400"
            >Nico Devs</a
          >
          talked about real-time apps with Vue and the way he spoke about it -
          man. You could tell he wasn't just explaining a concept, he was
          sharing something he genuinely loves. That level of passion is rare.
          And then I found out he's self-taught. As someone who's also
          self-taught, that hit different. It shows me it is possible to get to
          that level of expertise. Its not easy at all but possible.
        </p>

        <p>
          <a
            href="https://wmedia.es/en"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition-colors hover:text-purple-400"
            >Juan Andrés Núñez</a
          >
          gave a talk about learning frontend with science and AI, and honestly
          it couldn't have come at a better time. I'm still a junior, still
          learning every day, and his approach just clicked with me. We ended up
          chatting during breaks and at the after party. We still keep in touch.
          Funny how a random conversation can turn into a genuine connection.
        </p>

        <p>
          And
          <a
            href="https://roe.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition-colors hover:text-purple-400"
            >Daniel Roe</a
          >
          .This man is a menace (in the best way). I've watched so many of his
          YouTube videos, and standing there watching him speak live felt like
          having a front row seat to something I'd only ever seen through a
          screen. Surreal.
        </p>

        <p>
          Something i never expected is how nice the community is... maybe its
          my introverted perception but I'm glad i stepped out of my comfort
          zone and got to experience it. What was even more welcoming was how
          everyone listened to each other, regardless of experience level. It
          was refreshing.
        </p>

        <p>
          If you're a developer reading this and you're not sure whether to go
          to a conference, just go. Talk to people. You'll be surprised what
          happens when you put yourself out there.
        </p>

        <p>
          Forever greatful for the people at
          <a
            href="https://madvue.es"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >MadVue</a
          >
          for making it all happen.
        </p>

        <p>
          Anyway. That was MadVue 2026. My first blog post. My first conference.
          Definitely not my last.
        </p>

        <p class="text-white">
          Can't wait for
          <a
            href="https://madvue.es"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-purple-400"
            >MadVue 2027!</a
          >
        </p>
      </div>
    </article>
  </main>
  <div class="border-t border-purple-500/10">
    <ContactSection />
  </div>
</template>
