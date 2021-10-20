import { readArrayNote } from './saveNoteWriter.js'
import { createDOM } from './utils/dom.js'

export function cardShowPreviewContent(value, index) {
    return `
        <div class="content-preview" id="selectedPreview-${index}">
            <span class="visibility-title">${value[2]}</span>
            ${value[1]}
        </div>
        `
}


export function createcardShowPreviewContent(value, index) {
    return createDOM(cardShowPreviewContent(value, index))
}


export function listDataNote() {
    const getValuesArray = readArrayNote()
    console.log(getValuesArray)
        // debugger
    const $container = document.querySelector('#listPreviewContent')
        // Reseteo el dom para traer las notas en el array
    $container.innerHTML = ''
    getValuesArray.forEach((value, index) => {
        const $panel = createcardShowPreviewContent(value, index)
        $container.append($panel)
            // debugger
    })
}