import { openModal, closeModal } from '../addNote.js'
import { createDOM } from './dom.js'

const $openModalDisplay = document.querySelector('#openModal')
const $closeModalDisplay = document.querySelector('#cancelOption')
const $optionOpendCloseModal = document.querySelector('#showModal')


export function cardshowOpenContent() {
    return `
        <div class="open-modal">
            <h3 class="title-modal">Are you sure you want to delete it?</h3>
            <p class="content-modal">You cannot undo this action </p>
            <div class="actions-button">
                <div class="button btn-delete-confirm" id="delete">Delete</div>
                <div class="button btn-save" id="cancelOption">Cancel</div>
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
        console.log('aqui')
        openModal()
        const $panel = cardshowOpen()
        $container.append($panel)
        closeModalContent()
    })

}

export function closeModalContent() {
    if ($optionOpendCloseModal.getAttribute('aria-open-modal')) {

        const $cancelOption = document.querySelector('#showModal #cancelOption')
            // Se procede a Cerrar el Modal
        $cancelOption.addEventListener('click', function() {
            closeModal()
        })
    }
}