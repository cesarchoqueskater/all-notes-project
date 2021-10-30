import { addNoteMarkdown } from './optionsContent.js'
import { showButtonDelete } from './showHideContent.js'

const $editNote = document.querySelector('#editNote')
const textAreaId = document.querySelector('#textAreaId')
const htmlResult = document.querySelector('#htmlResult')
const selectedOptions = document.querySelector('#optionSelected')

const valuesEditArray = []

export function editNoteContent(value, index) {

    const dataValue = { value, index }


    $editNote.addEventListener('click', () => {

        // Se deja vacio el array
        valuesEditArray.splice(0, valuesEditArray.length)

        console.log('Se hizo click en el button editar')
            // Mostramos la vista de  markdown y result
        addNoteMarkdown()
        showButtonDelete(true)
        textAreaId.value = dataValue.value[0]
        htmlResult.innerHTML = dataValue.value[1]
        selectedOptions.innerText = dataValue.value[2]

        const valueToEdit = {
            edit: true,
            value,
            index
        }
        valuesEditArray.push(valueToEdit)
        return true

    })

}


export function valueToEditData() {
    return valuesEditArray
}