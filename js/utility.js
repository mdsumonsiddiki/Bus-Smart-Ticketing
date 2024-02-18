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
function getInnerTextSting(elementId){
    const element = document.getElementById(elementId).innerText;
    return element;
}
function setColor(value){
    value.style.backgroundColor = '#1DD100';
    value.style.color = '#FFFFFF';
}
function disableElement(element){
    element.setAttribute("disabled", "")
}
function removeClassById(elementId, value){
    const element = document.getElementById(elementId);
    element.classList.remove(value)
}
function addClassById(elementId, value){
    const element = document.getElementById(elementId);
    element.classList.add(value)
}
