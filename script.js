const btn = document.getElementById('btn')
const group = document.getElementById('group')
const substract = document.getElementById('substract')
const beforeBtn = document.getElementById('before_btn')
const substractPath = document.getElementById('substract_path')
const text = document.getElementById('text')

group.addEventListener('mouseenter', function () {
    spreadBtnBorder()
    rotateScaleSubstract();
    fillButton();
    setTimeout(whiteSubstractText, 1500);
})

function rotateScaleSubstract() {
    substract.style.transform = 'rotate(360deg) scale(1,1)'
}

function spreadBtnBorder() {
    btn.style.width = '281px'
}


function fillButton() {
    beforeBtn.style.width = '282px'
}

function whiteSubstractText() {
    substractPath.style.fill = 'white';
    text.style.webkitTextFillColor = 'unset';
}

