function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element;
}
function getInnerText(elementId){
    const element = document.getElementById(elementId).innerText;
    const textToNumber = parseInt(element);
    return textToNumber;
}
function setColor(value){
    value.style.backgroundColor = '#1DD100';
    value.style.color = '#FFFFFF';
}
function disableElement(element){
    element.setAttribute("disabled", "")
}