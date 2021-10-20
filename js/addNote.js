import { showHideNote, showHideOptions, showHideMarkdown, showHidePreviewContent, showHideShowContent } from './showHideContent.js'
import { saveNoteWrite, readArrayNote } from './saveNoteWriter.js'

export function addNoteMarkdown() {
    console.log("Click en Escribir Nota")
    showHideNote()
    showHideMarkdown(true)
    showHideOptions(true)
    showHidePreviewContent()
    showHideShowContent()
}

export function saveNoteMarkdown() {
    console.log("Click en Guardar Nota")
    const valor = saveNoteWrite()
        // console.log(valor)
    if (valor == false) {
        console.warn('No se puede guardar una nota que esta vacia')
        return true
    }
    showHidePreviewContent(true)
    showHideMarkdown()
    showHideOptions()
}

export function selectedPreviewMarkdown() {
    console.log("Click en Visualizar Nota")
    showHideShowContent(true)
    showHidePreviewContent()

}

export function homeContent() {
    console.log("Click en Log - Home")
    console.log(readArrayNote().length)
        // debugger
    if (readArrayNote().length == 0) {
        showHideNote(true)
        showHideOptions()
        showHideMarkdown()
        showHidePreviewContent()
        showHideShowContent()
        return true
    }
    showHideNote()
    showHidePreviewContent(true)
    showHideMarkdown()
    showHideOptions()

}