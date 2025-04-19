import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="w-screen h-screen">
      <div class="flex align-center justify-center-safe w-full h-full bg-black">
        <div class="flex flex-col align-center justify-center w-1/4 h-full">
          <form class="flex flex-col align-center justify-evenly bg-slate-500">
            
            <div class="flex align-center justify-end-safe w-full my-2">
              <label>Email: </label>
              <input type="email" class="mx-1 bg-white" />
            </div>
            
            <div class="flex align-center justify-end-safe w-full my-2">
              <label>Password: </label>
              <input type="password" class="mx-1 bg-white" />
            </div>

            <div class="flex align-center justify-end-safe w-full my-2">
              <label>Confirm Password: </label>
              <input type="password" class="mx-1 bg-white" />
            </div>
            
            <div class="flex align-center justify-center w-full my-2">
              <button type="submit" class="p-8 bg-green-500 cursor-pointer">Sign-up</button>
            </div>

            <div class="flex align-center justify-center w-full my-2 text-blue-300 hover:text-cyan-300 active:text-cyan-300 visited:text-purple-400">
              <Link href="/login">Already have an account? Login!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sign-up",
  meta: [
    {
      name: "description",
      content: "Sign-up page for Love-Language-GPT",
    },
  ],
};
