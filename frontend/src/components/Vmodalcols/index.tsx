import { component$, Slot } from '@builder.io/qwik';
import type { stylesprops } from '../stylesprops';

export const Vmodalcols = component$<stylesprops>(({class: className}) => {
    return (
        <div class={`flex flex-col items-center justify-start w-full h-full border border-black ${className}`}>
            <Slot />
        </div>
    );
});