import { addNoteMarkdown } from './addNote.js'
import { saveNoteWrite } from './saveNoteWriter.js'


const $editNote = document.querySelector('#editNote')
const textAreaId = document.querySelector('#textAreaId')
const htmlResult = document.querySelector('#htmlResult')
const selectedOptions = document.querySelector('#optionSelected')



export function editNoteContent(value, index) {

    const dataValue = { value, index }


    $editNote.addEventListener('click', () => {
        console.log('sE HIZO CLICK EN EDITAR')
            // debugger
        const $markdownTextAreaIdentified = document.querySelector('.markdownTextArea')
        $markdownTextAreaIdentified.setAttribute('aria-edit-content', true)

        // Mostramos la vista de  markdown y result
        addNoteMarkdown()

        textAreaId.value = dataValue.value[0]
        htmlResult.innerHTML = dataValue.value[1]
        selectedOptions.innerText = dataValue.value[2]

        const valueToEdit = {
            edit: true,
            value,
            index
        }
        saveEditNoteMarkdown(valueToEdit)

    })

}


export function saveEditNoteMarkdown(valueToEdit) {

    const $saveEditNote = document.querySelector('#saveNote')
    $saveEditNote.addEventListener('click', () => {
        debugger
        saveNoteWrite(valueToEdit.edit, valueToEdit.value, valueToEdit.index)
        return true
    })
}