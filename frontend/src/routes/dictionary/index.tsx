import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="w-screen h-screen">
      <nav class="flex flex-row items-center justify-between w-full h-auto bg-violet-300">
        <div>
          <button type="button">⚙️</button>
        </div>

        <div>
          <img src="" alt="Image of logo" width={64} height={64} />
        </div>

        <div>
          <img src="" alt="Profile picture" width={64} height={64} />
        </div>
      </nav>

      <main class="flex flex-row items-center justify-center-safe w-full h-full">
        <div class="flex flex-col items-center justify-center w-full h-full bg-orange-400">
          <input type="search" class="w-full h-auto bg-slate-50" />

          <p>Lorem ipsum</p>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Dictionary",
  meta: [
    {
      name: "description",
      content: "Language dictionary",
    },
  ],
};
