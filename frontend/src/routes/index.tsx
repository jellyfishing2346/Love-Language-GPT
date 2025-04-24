import { component$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";
import { Vmodal } from "~/components/Vmodal/Vmodal";
import { Vmodalcols } from "~/components/Vmodalcols";
import { Redirbtn } from "~/components/Redirbtn";
import HorizontalLogo from '~/assets/LLGPT_Logo_Horizontal.png?jsx';

export default component$(() => {
  return (
    <Parentcont>
      <nav class="flex flex-row items-center justify-between w-full h-auto bg-black">
        <div class="w-auto h-full bg-slate-500">
          <HorizontalLogo />
        </div>
        <div class="w-auto h-full">
          <Redirbtn url="./login" label="Login/Sign-up" class="p-8 bg-purple-400 font-semibold text-xl text-slate-900" />
        </div>
      </nav>
      <main class="flex flex-col items-center justify-evenly w-full min-h-screen bg-pink-400">
        <div class="flex flex-col items-center justify-center w-full h-screen text-center">
          <h1 class="font-extrabold text-9xl">Romance Internationally</h1>
          <h2 class="font-bold text-6xl">With your A.I. wingman</h2>
          <Redirbtn url="./login" label="Find Love Now!" class="mt-8 p-8 font-semibold text-2xl bg-pink-300" />
        </div>

        <Vmodal class="bg-rose-300">

          <Vmodalcols>
            <h3 class="font-bold text-4xl my-3">Learn On The Go</h3>
            <p class="text-xl">Practice learning your lover's language anywhere at anytime!</p>
          </Vmodalcols>

          <Vmodalcols>
            <h3 class="font-bold text-4xl mt-3 mb-1">Stress Less,</h3>
            <h3 class="font-bold text-4xl mt-1 mb-3">Flirt More</h3>
            <p class="text-xl" >Translate your conversations with A.I. in real-time chats!</p>
          </Vmodalcols>

          <Vmodalcols>
            <h3 class="font-bold text-4xl my-3">Real-time Action</h3>
            <p class="text-xl">Chat in real-time with text, audio calls, or even video calls!</p>
          </Vmodalcols>
          
        </Vmodal>
      </main>
      <footer class="flex flex-col items-center justify-center w-full h-auto bg-black text-white">
        <div class="flex flex-row items-center justify-center w-full h-1/2 my-2">
          <Link href="/termsofservice" class="mx-2">Terms of Service</Link>
          <Link href="/privacypolicy" class="mx-2">Privacy Policy</Link>
          <Link href="/about" class="mx-2">About</Link>
        </div>
        <div class="flex flex-row items-center justify-center w-full h-1/2 m-0">
          <small>@ Copyright 2025</small>
        </div>
      </footer>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Love-Language-GPT",
  meta: [
    {
      name: "description",
      content: "Multilingual AI Dating Web Application",
    },
  ],
};
