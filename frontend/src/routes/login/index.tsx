import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";

export default component$(() => {
  return (
    <Parentcont>
      <div class="flex items-center justify-center-safe w-full h-full bg-black">
        <div class="flex flex-col items-center justify-center w-1/4 h-full">
          <form class="flex flex-col items-center justify-evenly bg-slate-500">
            
            <div class="flex items-center justify-end-safe w-full my-2">
              <label>Email: </label>
              <input type="email" class="mx-1 bg-white" />
            </div>
            
            <div class="flex tiems-center justify-end-safe w-full my-2">
              <label>Password: </label>
              <input type="password" class="mx-1 bg-white" />
            </div>
            
            <div class="flex items-center justify-center w-full my-2">
              <button type="submit" class="p-8 bg-green-500 cursor-pointer">Login</button>
            </div>

            <div class="flex items-center justify-center w-full my-2 text-blue-300 hover:text-cyan-300 active:text-cyan-300 visited:text-purple-400">
              <Link href="/signup">Don't have an account? Sign-up!</Link>
            </div>
          </form>
        </div>
      </div>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Login page for Love-Language-GPT",
    },
  ],
};
