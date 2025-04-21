import { component$, Slot } from '@builder.io/qwik';

export const Vmodalcols = component$(() => {
    return (
        <div class="flex flex-col items-center justify-start w-full h-full border border-black">
            <Slot />
        </div>
    );
});