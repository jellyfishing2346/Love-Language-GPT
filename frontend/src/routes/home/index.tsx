import { $, component$, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";
import { Vmodal } from "~/components/Vmodal/Vmodal";
import { Vmodalcols } from "~/components/Vmodalcols";
import { Overlay } from "~/components/Overlay/Overlay";

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
        <div>
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

        <div>
          <img src="" alt="Image of logo" width={64} height={64} />
        </div>

        <div>
          <img src="" alt="Profile picture" width={64} height={64} />
        </div>
      </nav>

      <main class="flex flex-row items-center justify-center-safe w-full h-full">

        <Vmodal class="bg-purple-300">

          <Vmodalcols class="bg-purple-300">
            <Link href="/ai" class="w-full h-full">
              <h2 class="font-bold text-6xl">A.I.</h2>

              <img src="" alt="Content Picture" width={128} height={128} />

              <p class="text-2xl">Configure or chat with your A.I.</p>
            </Link>
            
          </Vmodalcols>

          <Vmodalcols class="bg-red-400">
            <Link href="/datefinder" class="w-full h-full">
              <h2 class="font-bold text-6xl">Find A Date</h2>

              <img src="" alt="Content Picture" width={128} height={128} />

              <p class="text-2xl">Swipe left or right! Find a match today!</p>
            </Link>
          </Vmodalcols>

          <Vmodalcols class="bg-orange-400">
            <Link href="/dictionary" class="w-full h-full">
              <h2 class="font-bold text-6xl">Language Dictionary</h2>

              <img src="" alt="Content Picture" width={128} height={128} />

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

