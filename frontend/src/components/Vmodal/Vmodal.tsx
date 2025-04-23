import { component$, Slot } from '@builder.io/qwik';
import type { stylesprops } from '../stylesprops';

export const Vmodal = component$<stylesprops>(({class: className}) => {
    return (
        <div class={`flex flex-row items-center justify-center w-full h-screen text-center ${className}`}>
            <Slot />
        </div>
    );
});