import { readArrayNote } from './saveNoteWriter.js'
import { addNoteMarkdown } from './addNote.js'


const $editNote = document.querySelector('#editNote')
const textAreaId = document.querySelector('#textAreaId')
const htmlResult = document.querySelector('#htmlResult')

$editNote.addEventListener('click', () => {

    addNoteMarkdown()
    editNoteContent()
})


export function editNoteContent() {
    console.log('sE HIZO CLICK EN EDITAR')
    const $showContent = document.querySelector('#showContent')


    const getId = $showContent.firstElementChild.id

    const getValue = getId.substring(19)

    const data = readArrayNote()
    const getPositionArraytoEdit = data[getValue]

    textAreaId.value = getPositionArraytoEdit[0]
    htmlResult.innerHTML = getPositionArraytoEdit[1]

}