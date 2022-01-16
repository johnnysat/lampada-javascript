const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const refresh = document.getElementById('refresh');

//Verificação de Lâmpada Quebrada
function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1;
}

//Só pode ligar se for diferente de lâmpada quebrada
function lampOn () {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
    
}

//Só pode desligar se for diferente de lâmpada quebrada
function lampOff () {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

//Lampada quebrada
function lampBroken () {
    lamp.src ='./img/quebrada.jpg';
}

function changeLamp () {
    lamp.src='./img/desligada.jpg'
}

//Ligar
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);

//Desligar
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave', lampOff);

//Quebrar
lamp.addEventListener('dblclick', lampBroken);

//Trocar lâmpada
refresh.addEventListener('click', changeLamp);