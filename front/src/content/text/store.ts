import {defineStore} from "pinia";
import {computed, ref} from "vue";

export function getInputComponent(): HTMLInputElement | HTMLTextAreaElement | null {
    const active = document.activeElement as HTMLElement | null;
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
        const component = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)
        const inputText = computed(() => component.value?.value || component.value?.textContent || "")

        return {selectedText, inputText, component}
    })