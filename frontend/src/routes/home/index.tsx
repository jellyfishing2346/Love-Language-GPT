import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

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
        <div class="w-full h-full bg-purple-300">

          <Link href="/ai" class="flex flex-col items-center justify-evenly w-full h-full">
            <h2 class="font-bold text-6xl">A.I.</h2>

            <img src="" alt="Content Picture" width={128} height={128} />

            <p class="text-2xl">Configure or chat with your A.I.</p>
          </Link>
          
        </div>

        <div class="w-full h-full bg-red-400">

          <Link href="/datefinder" class="flex flex-col items-center justify-evenly w-full h-full">
            <h2 class="font-bold text-6xl">Find A Date</h2>

            <img src="" alt="Content Picture" width={128} height={128} />

            <p class="text-2xl">Swipe left or right! Find a match today!</p>
          </Link>
          
        </div>

        <div class="w-full h-full bg-orange-400">

          <Link href="/dictionary" class="flex flex-col items-center justify-evenly w-full h-full">
            <h2 class="font-bold text-6xl">Language Dictionary</h2>

            <img src="" alt="Content Picture" width={128} height={128} />

            <p class="text-2xl">Learning a language or find a word to express your love.</p>
          </Link>
          
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
