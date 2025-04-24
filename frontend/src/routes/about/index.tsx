import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";
import AIRobotImg from '~/assets/michael-martinelli--CPRUDsU7Mo-unsplash.jpg?jsx';
import DatingImg from '~/assets/gama-films-cWeRjegaVLg-unsplash.jpg?jsx';
import DictionaryImg from '~/assets/sincerely-media-F466AcbeILI-unsplash.jpg?jsx';

export default component$(() => {
  return (
    <Parentcont>
      <div class="flex flex-col items-center justify-start w-full h-full bg-black text-slate-100 overflow-hidden">
        <h1 class="font-bold text-9xl">About</h1>
        
        <p>
            Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. 
            Officia, sequi! 
            Ipsam natus minus corrupti amet magnam tempora facilis libero excepturi consequatur deleniti dignissimos, 
            deserunt in culpa mollitia a doloribus reprehenderit?
        </p>

        <h2>Citation & Sources</h2>

        <div class="w-1/4 h-auto">
          <AIRobotImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <a href="https://unsplash.com/@michaelmartinelli?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Michael Martinelli
            </a> on <a href="https://unsplash.com/photos/a-robot-standing-in-front-of-a-white-wall--CPRUDsU7Mo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </a>
          </p>
        </div>
        
        <div class="w-1/4 h-auto">
          <DatingImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <a href="https://unsplash.com/@gamafilms1703?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Gama. Films
            </a> on <a href="https://unsplash.com/photos/man-in-white-suit-jacket-kissing-woman-in-red-long-sleeve-shirt-cWeRjegaVLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </a>
          </p>
        </div>
        
        <div class="w-1/4 h-auto">
          <DictionaryImg class="w-1/4 h-auto" />
          <br />
          <br />
          <p>
            Photo by <a href="https://unsplash.com/@sincerelymedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Sincerely Media
            </a> on  <a href="https://unsplash.com/photos/white-book-page-on-blue-table-F466AcbeILI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </a>
          </p>
        </div>
        
      </div>
    </Parentcont>
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