import { openModal, closeModal } from './optionsContent.js'
import { createDOM } from './utils/dom.js'
import { homeContent } from './optionsContent.js'
import { readArrayNote } from './saveNoteWriter.js'
import { valueToEditData } from './editNoteContent.js'

const $openModalDisplay = document.querySelector('#openModal')
const $optionOpendCloseModal = document.querySelector('#showModal')



export function cardshowOpenContent() {
    return `
        <div class="open-modal">
            <h3 class="title-modal">Are you sure you want to delete it?</h3>
            <p class="content-modal">You cannot undo this action </p>
            <div class="actions-button">
                <div class="button btn-delete-confirm" id="deleteNote">Delete</div>
                <div class="button btn-cancel" id="cancelOption">Cancel</div>
            </div>
        </div>
        `
}

export function cardshowOpen() {
    return createDOM(cardshowOpenContent())
}

export function openModalContent() {
    const $container = document.querySelector('#showModal')

    $openModalDisplay.addEventListener('click', function() {

        if (valueToEditData().length == '0') {
            console.warn("No se puede eliminar una nota que no a sido creada")
            return true
        } else {
            openModal()
            const $panel = cardshowOpen()
            $container.append($panel)
            closeModalContent()
            deleteNote()
            return true
        }
    })
}

export function closeModalContent() {
    if ($optionOpendCloseModal.getAttribute('aria-open-modal')) {

        const $cancelOption = document.querySelector('#showModal #cancelOption')
            // Se procede a Cerrar el Modal
        $cancelOption.addEventListener('click', function() {
            closeModal()
            $optionOpendCloseModal.innerHTML = ''
        })
    }
}

export function deleteNote() {
    if ($optionOpendCloseModal.getAttribute('aria-open-modal')) {
        const $deleteNote = document.querySelector('#deleteNote')

        console.log('Click en borrar nota')
        $deleteNote.addEventListener('click', function() {

            // Se busca el index a editar
            const indexToDelete = valueToEditData()[0]['index']
                // Se elimina el array encontrado en base a su index
            readArrayNote().splice(indexToDelete, 1)

            closeModal()
            $optionOpendCloseModal.innerHTML = ''
            homeContent(true)
        })

    }
}