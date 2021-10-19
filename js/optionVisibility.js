export default function selectOptionVisibility() {
    const selected = document.querySelectorAll('.li-options')
    const detectedOpenDetails = document.querySelector('details.btn-visibility')
    const putSelectedOptions = document.querySelector('#optionSelected')


    selected.forEach((options) => {
        options.addEventListener('click', (e) => {
            // console.log(e.target.textContent)
            detectedOpenDetails.removeAttribute('open')
            putSelectedOptions.innerHTML = e.target.textContent
            return e.target.textContent
        })
    })
}