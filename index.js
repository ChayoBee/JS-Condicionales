//index1

function validar() {
    const pass1 = document.querySelector('#pass1').value;
    const pass2 = document.querySelector('#pass2').value;
    const pass3 = document.querySelector('#pass3').value;


    if (pass1 == 9 && pass2 == 1 && pass3 == 1) {
        var msg1 = 'La password 1 es correcta';
        document.getElementById('answer').innerText = msg1;
    } else if (pass1 == 7 && pass2 == 1 && pass3 == 4) {
        var msg2 = 'La password 2 es correcta';
        document.getElementById('answer').innerText = msg2;
    } else {
        var msg3 = 'La password es incorrecta';
        document.getElementById('answer').innerText = msg3;
    }
}


//index2

function llevar() {
    const sticker1 = document.querySelector('#sticker1');
    const sticker2 = document.querySelector('#sticker2');
    const sticker3 = document.querySelector('#sticker3');
    
    const suma = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
 
    if (suma > 10) {
        var wrong = 'Llevas muchos stickers';
        document.getElementById('take').innerText = wrong;
    } else {
        var correct = `Gracias, llevas ${suma} stickers.`;
        document.getElementById('take').innerText = correct;
    }
}

//index3

let bg = document.getElementById('cursed');

function cursed() {
    if (bg.classList.contains('border')) {
        bg.classList.remove('border');
    } else {
        bg.classList.add('border');
    }
}