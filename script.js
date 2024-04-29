const question = document.querySelector('.question');
let gif = document.getElementById('gif');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');

let clickCount = 0;

function handleYesClick() {
    clickCount++;
    if (clickCount === 1) {
        question.innerHTML = 'beneraan kamu mau jadi pacar akuu??';
        gif.src = 'https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif';
    } else if (clickCount === 2) {
        question.innerHTML = 'horeee akuu sayangg kamuu❤️❤️ <br> <br> aku punya bunga nih buat kamu, mau gaa sayang??';
        gif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGk3enBkbDBtcHFyZGpscTRuMHphYWgybW04Ynd0cnl1MTc2dmd4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/FTGah7Mx3ss04PcasF/giphy.gif';
    } else if (clickCount === 3) {
        window.location.href = 'https://athazahrane.github.io/second-flower.github.io/';
    }
}

function handleNoHover() {
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

yesBtn.addEventListener('click', handleYesClick);
noBtn.addEventListener('mouseover', handleNoHover);
