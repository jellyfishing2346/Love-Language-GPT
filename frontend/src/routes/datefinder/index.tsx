import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";
import VerticalLogo from '~/assets/LLGPT_Logo_Vertical.png?jsx';
import DefaultPFP from '~/assets/Default_PFP.png?jsx';

export default component$(() => {
  return (
    <Parentcont>
      <nav class="flex flex-row items-center justify-between w-full h-auto bg-violet-300">
        <div>
          <button type="button">⚙️</button>
        </div>

        <div class="flex w-auto h-full">
          <VerticalLogo class="w-auto h-[64px]" />
        </div>

        <div class="flex w-auto h-full">
          <DefaultPFP class="w-auto h-[64px]" />
        </div>
      </nav>

      <main class="flex flex-row items-center justify-center-safe w-full h-full">
        <div class="flex flex-row items-center justify-center w-full h-full bg-red-400">
          <button type="button">⬅️</button>

          <img src="" alt="Image of person" width={128} height={128} class="w-auto h-full m-1 p-0 border border-black" />

          <button type="button">➡️</button>
        </div>
      </main>
    </Parentcont>
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
