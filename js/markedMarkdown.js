export default function textConvertToMarkdown() {
    const textArea = document.getElementById("textAreaId");
    const copyValue = document.getElementById("htmlResult");
    textArea.addEventListener('keyup', e => {
        const currentContent = e.target.value;
        copyValue.innerHTML = marked.parse(currentContent);
    });
}