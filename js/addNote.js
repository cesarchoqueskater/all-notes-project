import { showHideNote, showHideOptions, showHideGridMarkdown, showHidePreviewContent, showHideShowContent } from './showHideContent.js'

export function addNoteMarkdown() {
    // const $note = document.querySelector('#noteContent')
    console.log("Click en Escribir Nota")
    showHideNote()
    showHideGridMarkdown(true)
    showHideOptions(true)
    showHideShowContent()
}

export function saveNoteMarkdown() {
    // const $saveNote = document.querySelector('#saveNote')
    console.log("Click en Guardar Nota")
    showHidePreviewContent(true)
    showHideGridMarkdown()
    showHideOptions()
}

export function selectedPreviewMarkdown() {
    console.log("Click en Visualizar Nota")
    showHideShowContent(true)
    showHidePreviewContent()

}

export function homeContent() {
    console.log("Click en Log - Home")
    showHideNote(true)
    showHideOptions()
    showHideGridMarkdown()
    showHidePreviewContent()
    showHideShowContent()
}