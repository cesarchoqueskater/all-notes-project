const arrayNote = []


const textAreaId = document.querySelector('#textAreaId')
const htmlResult = document.querySelector('#htmlResult')

export function saveNoteWrite() {
    const selectedOptions = document.querySelector('#optionSelected').textContent

    if (textAreaId.textLength !== 0) {
        console.log('Se procede a guardar la nota')
            // debugger
        arrayNote.push([textAreaId.value, htmlResult.innerHTML, selectedOptions]);
        // console.log(arrayNote)
        resetInput()
        return arrayNote
    }
    console.log("TextArea vacio")
    return false
}

export function readArrayNote() {
    // console.log(arrayNote)
    return arrayNote
}

export function resetInput() {
    textAreaId.value = ''
    htmlResult.innerHTML = ''
}