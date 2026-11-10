<script setup lang="ts">
import { nextTick, ref } from "vue";

type Message = { role: "user" | "assistant"; text: string };

const ENDPOINT =
  "https://ai-assistant-production-i8piqs.laravel.cloud/api/assistant";

const open = ref(false);
const input = ref("");
const loading = ref(false);
const messages = ref<Message[]>([
  {
    role: "assistant",
    text: "Hi, I'm Anaphiri. Ask me anything about Branell's portfolio. I will answer your questions to the best of my ability.",
  },
]);
const scroller = ref<HTMLElement | null>(null);

async function scrollToBottom() {
  await nextTick();
  scroller.value?.scrollTo({
    top: scroller.value.scrollHeight,
    behavior: "smooth",
  });
}

async function send() {
  const question = input.value.trim();
  if (!question || loading.value) return;

  messages.value.push({ role: "user", text: question });
  input.value = "";
  loading.value = true;
  scrollToBottom();

  try {
    const res = await $fetch<{ answer: string }>(ENDPOINT, {
      method: "POST",
      body: { question },
    });
    messages.value.push({
      role: "assistant",
      text: res?.answer ?? "Sorry, I didn't get an answer. Please try again.",
    });
  } catch {
    messages.value.push({
      role: "assistant",
      text: "Sorry, I couldn't reach Anaphiri right now. Please try again.",
    });
  } finally {
    loading.value = false;
    scrollToBottom();
  }
}
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="open"
        class="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-surface shadow-2xl shadow-purple-500/10"
      >
        <div
          class="flex items-center gap-3 border-b border-purple-500/10 px-5 py-4"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            />
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
            />
          </span>
          <div>
            <p class="text-sm font-semibold text-white">Anaphiri</p>
            <p class="text-xs text-gray-500">Assistant</p>
          </div>
        </div>

        <div ref="scroller" class="flex-1 space-y-4 overflow-y-auto p-4">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="[
              'max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm leading-relaxed',
              msg.role === 'user'
                ? 'ml-auto rounded-br-sm bg-purple-600 text-white'
                : 'mr-auto rounded-bl-sm bg-card text-gray-300',
            ]"
          >
            {{ msg.text }}
          </div>

          <div
            v-if="loading"
            class="mr-auto flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-card px-4 py-3"
          >
            <span
              class="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.3s]"
            />
            <span
              class="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.15s]"
            />
            <span class="h-2 w-2 animate-bounce rounded-full bg-purple-400" />
          </div>
        </div>

        <form
          class="flex gap-2 border-t border-purple-500/10 p-3"
          @submit.prevent="send"
        >
          <input
            v-model="input"
            type="text"
            placeholder="Ask about Branell..."
            class="flex-1 rounded-full bg-card px-4 py-2 text-sm text-white placeholder-gray-500 outline-none ring-purple-500 focus:ring-1"
          />
          <button
            type="submit"
            :disabled="loading || !input.trim()"
            class="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send
          </button>
        </form>
      </div>
    </Transition>

    <button
      type="button"
      :aria-label="open ? 'Close Anaphiri' : 'Open Anaphiri'"
      class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
      @click="open = !open"
    >
      <svg
        v-if="!open"
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
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        />
      </svg>
      <svg
        v-else
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>
