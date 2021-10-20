import { readArrayNote } from './saveNoteWriter.js'
import { showDetailsNote } from './addNote.js'
import { createDOM } from './utils/dom.js'
import { editNoteContent } from './editNoteContent.js'

export function cardshowDetailsNoteView(markdown, resultHTML, visibility, index) {
    return `
        <div class="showContentDetails" id="showContentDetails-${index}">
            <h2 class="title-show">César Choquehuanca <span>${visibility}</span></h2>
            <div class="content-show">
                ${resultHTML}
            </div>
        </div>
        `
}

export function createcardshowDetailsNoteView(markdown, resultHTML, visibility, index) {
    return createDOM(cardshowDetailsNoteView(markdown, resultHTML, visibility, index))
}

export function showDetailsNoteView(value, index) {
    showDetailsNote()
    const data = readArrayNote()

    const getPositionArray = data[index]

    const markdown = getPositionArray[0]
    const resultHTML = getPositionArray[1]
    const visibility = getPositionArray[2]
        // console.log(index)
        // debugger
    const $container = document.querySelector('#showContent')
    $container.innerHTML = ''
    const $panel = createcardshowDetailsNoteView(markdown, resultHTML, visibility, index)
    $container.append($panel)

    editNoteContent()
}