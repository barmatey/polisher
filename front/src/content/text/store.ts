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


export function replaceTextToInputComponent(
    component: HTMLInputElement | HTMLTextAreaElement | HTMLElement,
    text: string
) {
    // если это input или textarea
    if (component instanceof HTMLInputElement || component instanceof HTMLTextAreaElement) {
        component.value = text;
        component.dispatchEvent(new Event("input", {bubbles: true}));
    }

    // если это contenteditable элемент
    else if (component.isContentEditable) {
        component.innerText = text;

        // перемещаем курсор в конец
        const range = document.createRange();
        range.selectNodeContents(component);
        range.collapse(false);

        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    }
}

export function replaceSelectedTextToInputComponent(
    component: HTMLInputElement | HTMLTextAreaElement | HTMLElement,
    text: string
) {
    // input или textarea
    if (component instanceof HTMLInputElement || component instanceof HTMLTextAreaElement) {
        const start = component.selectionStart ?? 0;
        const end = component.selectionEnd ?? 0;

        const value = component.value;
        const before = value.slice(0, start);
        const after = value.slice(end);

        component.value = before + text + after;

        // ставим курсор после вставленного текста
        const cursorPos = before.length + text.length;
        component.selectionStart = component.selectionEnd = cursorPos;

        // генерируем событие, чтобы Vue/React и т.п. отреагировали
        component.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // contenteditable
    else if (component.isContentEditable) {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const range = selection.getRangeAt(0);
        // заменяем выделенный контент
        range.deleteContents();

        const node = document.createTextNode(text);
        range.insertNode(node);

        // ставим курсор после вставленного текста
        range.setStartAfter(node);
        range.setEndAfter(node);

        selection.removeAllRanges();
        selection.addRange(range);
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