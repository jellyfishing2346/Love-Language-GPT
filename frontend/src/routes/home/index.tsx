import { $, component$, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";
import { Vmodal } from "~/components/Vmodal/Vmodal";
import { Vmodalcols } from "~/components/Vmodalcols";
import { Overlay } from "~/components/Overlay/Overlay";
import VerticalLogo from '~/assets/LLGPT_Logo_Vertical.png?jsx';
import DefaultPFP from '~/assets/Default_PFP.png?jsx';
import AIRobotImg from '~/assets/michael-martinelli--CPRUDsU7Mo-unsplash.jpg?jsx';
import DatingImg from '~/assets/gama-films-cWeRjegaVLg-unsplash.jpg?jsx';
import DictionaryImg from '~/assets/sincerely-media-F466AcbeILI-unsplash.jpg?jsx';

export default component$(() => {

  const isOverlayVisible = useStore({setOverlayVisible: false});
  const btnOverlayTxt = ("✕");

  const openOverlay = $(() => {
    isOverlayVisible.setOverlayVisible = true;
  });

  const closeOverlay = $(() => {
    isOverlayVisible.setOverlayVisible = false;
  });

  return (
    <Parentcont>
      <nav class="flex flex-row items-center justify-between w-full h-auto bg-violet-300">
        <div class="flex w-auto h-full">
          <button onClick$={openOverlay} class="w-full h-full p-8 bg-blue-500 text-white rounded hover:bg-blue-400 active:bg-blue-400">
            ⚙️
          </button>
          <Overlay
              isVisible={isOverlayVisible.setOverlayVisible}
              onClose={closeOverlay}
              buttonText={btnOverlayTxt}
          >
              <h1 class="font-bold text-5xl/loose">Settings</h1>
          </Overlay>
        </div>

        <div class="flex w-auto h-full">
          <VerticalLogo class="w-auto h-[64px]" />
        </div>

        <div class="flex w-auto h-full">
          <DefaultPFP class="w-auto h-[64px]" />
        </div>
      </nav>

      <main class="flex flex-row items-center justify-center-safe w-full h-full">

        <Vmodal class="bg-purple-300">

          <Vmodalcols class="bg-purple-300">
            <Link href="/ai" class="flex flex-col items-center justify-start w-full h-full">
              <h2 class="font-bold text-6xl">A.I.</h2>

              <AIRobotImg class="w-auto h-[700px]" />

              <p class="text-2xl">Configure or chat with your A.I.</p>
            </Link>
            
          </Vmodalcols>

          <Vmodalcols class="bg-red-400">
            <Link href="/datefinder" class="flex flex-col items-center justify-start w-full h-full">
              <h2 class="font-bold text-6xl">Find A Date</h2>

              <DatingImg class="w-auto h-[700px]" />

              <p class="text-2xl">Swipe left or right! Find a match today!</p>
            </Link>
          </Vmodalcols>

          <Vmodalcols class="bg-orange-400">
            <Link href="/dictionary" class="flex flex-col items-center justify-start w-full h-full">
              <h2 class="font-bold text-6xl">Language Dictionary</h2>

              <DictionaryImg class="w-auto h-[700px]"/>

              <p class="text-2xl">Learning a language or find a word to express your love.</p>
            </Link>
          </Vmodalcols>

        </Vmodal>
        
      </main>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Account Homepage",
    },
  ],
};

