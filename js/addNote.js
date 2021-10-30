import { showHideNote, showHideOptions, showHideMarkdown, showHidePreviewContent, showHideShowContent, showeditButtonNote, showHideModal } from './showHideContent.js'
import { saveNoteWrite, readArrayNote } from './saveNoteWriter.js'

export function addNoteMarkdown() {
    console.log("Click en Escribir Nota")

    const textAreaId = document.querySelector('#textAreaId')
    const htmlResult = document.querySelector('#htmlResult')
    textAreaId.value = ''
    htmlResult.innerHTML = ''

    showHideNote()
    showHideMarkdown(true)
    showHideOptions(true)
    showHidePreviewContent()
    showHideShowContent()
    showeditButtonNote()
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
    showeditButtonNote()
}

export function selectedPreviewMarkdown() {
    console.log("Click en Visualizar Nota")
    showHideShowContent(true)
    showHidePreviewContent()
    showeditButtonNote()

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
        showeditButtonNote()
        return true
    }
    showHideNote()
    showHidePreviewContent(true)
    showHideMarkdown()
    showHideOptions()
    showHideShowContent()
    showeditButtonNote()

}

export function showDetailsNote() {
    console.log("Click en Detalle de Nota")
    showHideOptions()
    showHideShowContent(true)
    showeditButtonNote(true)
    showHideNote()
    showHidePreviewContent()
    showHideMarkdown()
}

export function editNote() {
    console.log("Click en Edit Nota")
    showHideOptions(true)
    showHideMarkdown(true)
    showHideShowContent()
    showeditButtonNote()
    showHideNote()
    showHidePreviewContent()
}

export function openModal() {
    console.log("Click para abrir modal")
    showHideModal(true)
}

export function closeModal() {
    console.log("Click para cerrar modal")
    showHideModal()
}