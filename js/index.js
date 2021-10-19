import { addNoteMarkdown, saveNoteMarkdown } from './addNote.js'

const $addNote = document.querySelector('#addNote')
const $saveNote = document.querySelector('#saveNote')
$addNote.addEventListener('click', addNoteMarkdown)
$saveNote.addEventListener('click', saveNoteMarkdown)