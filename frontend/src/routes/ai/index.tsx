import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";

export default component$(() => {
  return (
    <Parentcont>
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
        <div class="flex flex-col items-center justify-start w-1/3 h-full bg-purple-600">
          <button type="button">+ Add New Chat</button>
          <button type="button">First Chat</button>
        </div>

        <div class="flex flex-col items-center justify-end w-2/3 h-full bg-violet-300">
          <input type="text" class="w-full h-[48px] p-1 bg-slate-50" />
        </div>
      </main>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "A.I.",
  meta: [
    {
      name: "description",
      content: "A.I. Chats",
    },
  ],
};
