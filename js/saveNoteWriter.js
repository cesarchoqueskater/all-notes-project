import { valueToEditData } from './editNoteContent.js'

const arrayNote = []


const textAreaId = document.querySelector('#textAreaId')
const htmlResult = document.querySelector('#htmlResult')

export function saveNoteWrite(valueToEdit = false) {

    //Buscar el valor del array
    const data = readArrayNote()

    const editOption = valueToEditData().length == '0' ? valueToEdit : valueToEditData()[0]["edit"]

    //Valor de la optionSelectionVisibility
    const selectedOptions = document.querySelector('#optionSelected').textContent

    if (textAreaId.textLength !== 0) {
        // debugger
        if (editOption == true) {
            console.log('Ingreso para editar Nota y guardarla')

            // Obtenemos el indice del arreglo al cual hemos seleccionado para editar
            const indexToEdit = valueToEditData()[0]['index']
                // Obtenemos los datos del array para editar
            const arraySelected = data[indexToEdit]

            // Seteamos los nuevos valores, del edit
            arraySelected[0] = textAreaId.value
            arraySelected[1] = htmlResult.innerHTML
            arraySelected[2] = selectedOptions

            // Convertimos al array en vacio
            valueToEditData().length = '0'

            return arrayNote

        } else {
            console.log('Se procede a guardar la nota')
            console.log("opcion :" + editOption)
                // valueToEditData().splice(0, valueToEdit.length)
            arrayNote.push([textAreaId.value, htmlResult.innerHTML, selectedOptions]);
            // console.log(arrayNote)
            resetInput()
            return arrayNote
        }

    }
    console.log("TextArea vacio")
    return false
}

export function readArrayNote() {
    return arrayNote
}

export function resetInput() {
    textAreaId.value = ''
    htmlResult.innerHTML = ''
}