import { $, component$ } from "@builder.io/qwik";
import type { stylesprops } from "../stylesprops";

interface redirbtnprops {
    url: string;
    label: string;
    class?: stylesprops | string;
}

export const Redirbtn = component$<redirbtnprops>(({url, label, class: className}: redirbtnprops) => {
    const handleClick = $(

        function handleClick() {
            window.location.href = url;
        }
    );
      
    return (
        <button
            type="button"
            onClick$={handleClick}
            class={
                `border border-solid border-slate-900 rounded-md cursor-pointer ${className} transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:border-2 hover:shadow-lg hover:shadow-slate-800 active:-translate-y-1 active:scale-102`
            }
        >
            {label}
        </button>
    );
});