import { showHideNote, showHideOptions, showHideGridMarkdown, showHidePreviewContent } from './showHideContent.js'

export function addNoteMarkdown() {
    const $note = document.querySelector('#noteContent')
    console.log("Click en Escribir Nota")
    showHideNote(true)
    showHideGridMarkdown(true)
    showHideOptions(true)
}

export function saveNoteMarkdown() {
    const $saveNote = document.querySelector('#saveNote')
    console.log("Click en Guardar Nota")
    showHidePreviewContent(true)
    showHideGridMarkdown()
    showHideOptions()
}