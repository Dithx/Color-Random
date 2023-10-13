const colorRandom = {
    Red : '#FF0000',
    Blue : '#0000FF',
    Crimson : '#DC143C',
    Pink : '#FFC0CB',
    Orange : '#FFA500',
    Tomato : '#FF6347',
    Green : '#008000',
    Lime : '#00FF00',
    Teal : '#008080',
    Cyan : '#00FFFF',
    Navy : '#000080',
}
const keyColor = Object.keys(colorRandom);
const valueColor = Object.values(colorRandom);
const hexButton = document.getElementsByClassName('hex');
const simpleButton = document.getElementsByClassName('simple');
let mode = 'simple';

hexButton.onclick = function(){
    mode = 'hex';
    return mode;
}

simpleButton.onclick = function(){
    mode ='simple' ;
    return mode;
}

function changeBg(id, id2){
    let randomIndex = Math.floor(Math.random() * valueColor.length);
    
    document.getElementById(id).style.cssText = 
    `background-color: ${valueColor[randomIndex]};`

    if(mode === 'simple'){
        document.getElementById(id2).innerHTML = `Background Color: ${keyColor[randomIndex]}`;
    }else{
        document.getElementById(id2).innerHTML = `Background Color: ${valueColor[randomIndex]}`;
    }
}