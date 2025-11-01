import {defineStore} from "pinia";
import {ref} from "vue";

export function getInputComponent(): HTMLElement | null {
    const active = document.activeElement as HTMLElement | null;
    console.log(active)
    if (active) {
        if (
            active.tagName === "INPUT" ||
            active.tagName === "TEXTAREA" ||
            active.isContentEditable
        ) {
            return active as HTMLInputElement | HTMLTextAreaElement
        }
    }
    return null;
}


export function addTextToInputComponent(
    component: HTMLInputElement | HTMLTextAreaElement | HTMLElement,
    text: string
): void {
    // если это input или textarea
    if (component instanceof HTMLInputElement || component instanceof HTMLTextAreaElement) {
        component.value += text;
        component.dispatchEvent(new Event("input", {bubbles: true}));
    }

    // если это contenteditable элемент
    else if (component.isContentEditable) {
        component.innerText += text;

        // перемещаем курсор в конец
        const range = document.createRange();
        range.selectNodeContents(component);
        range.collapse(false);

        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    }
}


export const useSelectedTextStore = defineStore(
    "useSelectedTextStore",
    () => {
        const selectedText = ref("")
        const inputText = ref("")
        const component = ref<HTMLElement | null>(null)

        return {selectedText, inputText, component}
    })