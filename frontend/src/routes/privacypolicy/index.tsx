import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";

export default component$(() => {
  return (
    <Parentcont>
      <div class="flex flex-col items-center justify-start w-full h-full bg-black text-slate-100">
        <h1 class="font-bold text-9xl">Privacy Policy</h1>
        <p>
            Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. 
            Officia, sequi! 
            Ipsam natus minus corrupti amet magnam tempora facilis libero excepturi consequatur deleniti dignissimos, 
            deserunt in culpa mollitia a doloribus reprehenderit?
        </p>
      </div>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Privacy policy page for Love-Language-GPT",
    },
  ],
};