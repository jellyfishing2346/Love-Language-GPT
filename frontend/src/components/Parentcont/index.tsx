import { component$, Slot } from '@builder.io/qwik';
import type { stylesprops } from '../stylesprops';


export const Parentcont = component$<stylesprops>(({class: className}) => {
    return (
        <div class={`w-screen h-screen m-0 p-0 ${className}`}>
            <Slot />
        </div>
    );
});