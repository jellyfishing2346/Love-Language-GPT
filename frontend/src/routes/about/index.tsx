import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import AIRobotImg from '~/assets/michael-martinelli--CPRUDsU7Mo-unsplash.jpg?jsx';
import DatingImg from '~/assets/gama-films-cWeRjegaVLg-unsplash.jpg?jsx';
import DictionaryImg from '~/assets/sincerely-media-F466AcbeILI-unsplash.jpg?jsx';
import LanguagePhoneAppImg from '~/assets/maccy-HvIrf_slw4Q-unsplash.jpg?jsx';
import FlirtImg from '~/assets/ph-m-tr-n-hoan-th-nh-nzKj7DEYKAA-unsplash.jpg?jsx';
import ChattingImg from '~/assets/joyce-busola-dwmhtK_zX6Y-unsplash.jpg?jsx';

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-start h-auto bg-slate-950 text-slate-100">
      <h1 class="font-bold text-9xl">About</h1>
      
      <p class="m-2 p-4">
        Welcome to Love Language GPT, the revolutionary dating app that breaks down language barriers in real-time! 💬❤️ 
        Powered by Bionic GPT, our app translates conversations seamlessly, so you can connect with souls, not just words. 
        Whether you're whispering sweet nothings or debating the best pizza toppings, Love Language GPT ensures nothing gets lost in translation.
      </p>

      <br />

      <h2 class="font-bold text-6xl">Our Mission</h2>

      <p class="m-2 p-4">
        Our mission is to leverage the power of artificial intelligence to facilitate better communication and understanding between individuals. 
        We believe that love languages play a crucial role in how people connect, and our goal is to help users discover their own love languages and those of their partners.
      </p>

      <h2 class="font-bold text-6xl">Get Involved</h2>

      <p class="m-2 p-4">
        As an open-source project, we encourage contributions from the community. 
        Whether you're a developer, designer, or simply someone who wants to help, we invite you to join us in making Love-Language-GPT the best it can be. 
        Check out our <Link href="https://github.com/jellyfishing2346/Love-Language-GPT.git" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">GitHub repository</Link> for more information on how to contribute.
      </p>

      <h2 class="font-bold text-6xl">Citation & Sources</h2>

      <div class="grid grid-flow-col grid-rows-3 gap-4 items-center justify-center w-auto my-2">
        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <AIRobotImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <Link href="https://unsplash.com/@michaelmartinelli?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Michael Martinelli
            </Link> on <Link href="https://unsplash.com/photos/a-robot-standing-in-front-of-a-white-wall--CPRUDsU7Mo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </Link>
          </p>
        </div>
        
        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <DatingImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <Link href="https://unsplash.com/@gamafilms1703?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Gama. Films
            </Link> on <Link href="https://unsplash.com/photos/man-in-white-suit-jacket-kissing-woman-in-red-long-sleeve-shirt-cWeRjegaVLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </Link>
          </p>
        </div>
        
        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <DictionaryImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <Link href="https://unsplash.com/@sincerelymedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Sincerely Media
            </Link> on  <Link href="https://unsplash.com/photos/white-book-page-on-blue-table-F466AcbeILI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </Link>
          </p>
        </div>

        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <LanguagePhoneAppImg  class="w-1/4 h-auto" />
          Photo by <Link href="https://unsplash.com/@jizhidexiaohailang?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Maccy</Link> on <Link href="https://unsplash.com/photos/person-holding-black-android-smartphone-HvIrf_slw4Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
          </Link>
        </div>

        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <FlirtImg class="w-1/4 h-auto" />
          Photo by <Link href="https://unsplash.com/@thinhpham?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Phạm Trần Hoàn Thịnh</Link> on <Link href="https://unsplash.com/photos/a-man-holding-a-bouquet-of-flowers-next-to-a-woman-nzKj7DEYKAA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
          </Link>
        </div>

        <div class="flex flex-col items-center justify-stretch w-full h-full border border-slate-300">
          <ChattingImg class="w-1/4 h-auto" />
          Photo by <Link href="https://unsplash.com/@joycebusola?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Joyce Busola</Link> on <Link href="https://unsplash.com/photos/woman-in-pink-shirt-holding-white-smartphone-dwmhtK_zX6Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
          </Link>
        </div>
      </div>

      <h2 class="font-bold text-6xl">Developers</h2>

      <div class="grid grid-flow-col grid-row-1 gap-4 items-center-safe justify-center-safe w-full h-auto m-2 p-1">
        <div class="flex flex-col items-center justify-center m-1 p-1">
          <h3 class="font-bold text-3xl">Frontend Developer</h3>
          <Link href="https://github.com/WeiJian123-tech">
            <img src="https://avatars.githubusercontent.com/u/55195954?v=4" alt="Wei Jian's GitHub Profile" width={128} height={128} class="transition delay-75 duration-150 ease-in-out hover:-translate-y-1 hover:scale-104" />
          </Link>
          <Link href="https://github.com/WeiJian123-tech" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">Wei Jian Zhen</Link>
        </div>

        <div class="flex flex-col items-center justify-center m-1 p-1">
          <h3 class="font-bold text-3xl">Backend Developer</h3>
          <Link href="https://github.com/jellyfishing2346">
            <img src="https://avatars.githubusercontent.com/u/108194702?v=4" alt="Faizan's GitHub Profile" width={128} height={128} class="transition delay-75 duration-150 ease-in-out hover:-translate-y-1 hover:scale-104" />
          </Link>
          <Link href="https://github.com/jellyfishing2346" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">Faizan Khan </Link>
        </div>
      </div>

      <br />

      <Link href="/" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">← Back To Homepage</Link>

      <br />
        
    </div>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "About page for Love-Language-GPT",
    },
  ],
};