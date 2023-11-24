//index1

function validar() {
    const pass1 = document.querySelector('#pass1').value;
    const pass2 = document.querySelector('#pass2').value;
    const pass3 = document.querySelector('#pass3').value;


    if (pass1 == 9 && pass2 == 1 && pass3 == 1) {
        var msg1 = 'La password 1 es correcta';
        document.getElementById('answer1').innerText = msg1;
    } else if (pass1 == 7 && pass2 == 1 && pass3 == 4) {
        var msg2 = 'La password 2 es correcta';
        document.getElementById('answer2').innerText = msg2;
    } else {
        var msg3 = 'La password es incorrecta';
        document.getElementById('answer3').innerText = msg3;
    }
}

//falta borrar las demás respuestas, solo debe aparecer 1

//index2

function llevar() {
    const sticker1 = document.querySelector('#sticker1');
    const sticker2 = document.querySelector('#sticker2');
    const sticker3 = document.querySelector('#sticker3');

    var suma = sticker1 + sticker2 + sticker3;
 
    if (suma > 10) {
        var wrong = 'Llevas muchos stickers';
        document.getElementById('wrong').innerText = wrong;
    } else {
        var correct = 'Gracias por tu compra';
        document.getElementById('correct').innerText = correct;
    }
}

//no se visualiza la respuesta wrong, solo la correct

//index3

let bg = document.getElementById('cursed');

//bg.classList.toggle('border');

if (bg.classList.contains('border')) {
    bg.classList.remove('border');
} else {
    bg.classList.add('border');
}

//el borde no se quita