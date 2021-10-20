import { listDataNote } from './listShowPreviewContent.js'

const $noteContent = document.querySelector('#noteContent')
const $optionsContent = document.querySelector('#optionsContent')
const $markdownContent = document.querySelector('#markdownContent')
const $previewContent = document.querySelector('#previewContent')
const $showContent = document.querySelector('#showContent')
const $editButtonNote = document.querySelector('#editNote')

export function showHideNote(isShow) {
    if (isShow) {
        $noteContent.removeAttribute('aria-disabled')
        $noteContent.setAttribute('aria-selected', true)
        return isShow
    }
    $noteContent.removeAttribute('aria-selected')
    $noteContent.setAttribute('aria-disabled', true)
}

export function showHideOptions(isShow) {
    if (isShow) {
        $optionsContent.removeAttribute('aria-disabled')
        $optionsContent.setAttribute('aria-selected', true)
        return isShow
    }
    $optionsContent.removeAttribute('aria-selected')
    $optionsContent.setAttribute('aria-disabled', true)
}

export function showHideMarkdown(isShow) {
    if (isShow) {
        $markdownContent.removeAttribute('aria-disabled')
        $markdownContent.setAttribute('aria-selected', true)
        return isShow
    }
    $markdownContent.removeAttribute('aria-selected')
    $markdownContent.setAttribute('aria-disabled', true)
}

export function showHidePreviewContent(isShow) {
    if (isShow) {
        // Listo las notas obtenidas
        listDataNote()
        $previewContent.removeAttribute('aria-disabled')
        $previewContent.setAttribute('aria-selected', true)
        return isShow
    }
    $previewContent.removeAttribute('aria-selected')
    $previewContent.setAttribute('aria-disabled', true)
}

export function showHideShowContent(isShow) {
    if (isShow) {
        $showContent.removeAttribute('aria-disabled')
        $showContent.setAttribute('aria-selected', true)
        return isShow
    }
    $showContent.removeAttribute('aria-selected')
    $showContent.setAttribute('aria-disabled', true)
}

export function showeditButtonNote(isShow) {
    if (isShow) {
        $editButtonNote.removeAttribute('aria-disabled')
        $editButtonNote.setAttribute('aria-selected', true)
        return isShow
    }
    $editButtonNote.removeAttribute('aria-selected')
    $editButtonNote.setAttribute('aria-disabled', true)
}