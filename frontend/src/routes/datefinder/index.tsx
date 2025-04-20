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
        <div class="flex flex-row items-center justify-center w-full h-full bg-red-400">
          <button type="button">⬅️</button>

          <img src="" alt="Image of person" width={128} height={128} class="w-auto h-full m-1 p-0 border border-black" />

          <button type="button">➡️</button>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Datefinder",
  meta: [
    {
      name: "description",
      content: "Date finding page",
    },
  ],
};
