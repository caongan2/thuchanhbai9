function wPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function sPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function aPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function dPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 87:
            wPressed();
            break;
        case 83:
            sPressed();
            break;
        case 65:
            aPressed();
            break;
        case 68:
            dPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
