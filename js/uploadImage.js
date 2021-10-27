const inputFile = document.querySelector("#uploadImage");
const textAreaId = document.querySelector('#textAreaId')

export default function uploadImage() {

    inputFile.addEventListener("change", (e) => {

        const file = e.target.files[0];
        const nameFile = file.name
            // debugger
            // API FileReader
        const reader = new FileReader();
        reader.onloadend = () => {
            // console.log(`<img src="${reader.result}" alt="${nameFile}">`)
            const image = `<img src="${reader.result}" alt="${nameFile}">`
            textAreaId.value = textAreaId.value + image
        };
        // debugger
        reader.readAsDataURL(file);
    });
}