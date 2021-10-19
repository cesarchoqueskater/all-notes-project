import { addNoteMarkdown, saveNoteMarkdown, selectedPreviewMarkdown, homeContent } from './addNote.js'

const $addNote = document.querySelector('#addNote')
const $saveNote = document.querySelector('#saveNote')
const $selectedPreview = document.querySelector('#selectedPreview')
const $home = document.querySelector('#home')

$addNote.addEventListener('click', addNoteMarkdown)
$saveNote.addEventListener('click', saveNoteMarkdown)
$selectedPreview.addEventListener('click', selectedPreviewMarkdown)
$home.addEventListener('click', homeContent)