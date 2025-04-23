import type { QRL } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import type { stylesprops } from '../stylesprops';

interface overlayprops {
    isVisible: boolean;
    onClose: QRL<() => void>;
    buttonText?: string;
    buttonImage?: string;
    class?: stylesprops;
}

export const Overlay = component$(({isVisible, onClose, buttonText, buttonImage, class: className}: overlayprops) => {

    if (!isVisible) return null;

    return (
        <div class={`flex flex-col items-center justify-start fixed inset-0 w-full h-screen bg-slate-300 opacity-95 z-50 text-center ${className}`}>
            <div class="flex items-end justify-end w-full h-auto">
                <button onClick$={ onClose } class="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-400">
                    {buttonImage && <img src={buttonImage} alt="Button Icon" width={64} height={64} class="inline-block w-full h-auto mr-2" />}
                    {buttonText}
                </button>
            </div>
            <div class="flex flex-col items-center justify-center w-full h-auto">
                <Slot />
            </div>
        </div>
    );
});