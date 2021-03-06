import { addNoteMarkdown, saveNoteMarkdown, homeContent } from './optionsContent.js'
import textConvertToMarkdown from './markedMarkdown.js'
import selectOptionVisibility from './optionVisibility.js'
import uploadImage from './uploadImage.js'
import { openModalContent } from './openModal.js'


const $addNote = document.querySelector('#addNote')
const $saveNote = document.querySelector('#saveNote')
const $home = document.querySelector('#home')

uploadImage()
openModalContent()
$addNote.addEventListener('click', addNoteMarkdown)
$saveNote.addEventListener('click', saveNoteMarkdown)
$home.addEventListener('click', homeContent)
textConvertToMarkdown()
selectOptionVisibility()