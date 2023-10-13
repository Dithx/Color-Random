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
const hexButton = document.querySelector('.hex');
const simpleButton = document.querySelector('.simple');
let mode = 'simple';

// fungsi untuk mengaktifkan mode Hex
hexButton.onclick = function(){
    mode = 'hex';
    validateMode(); // memanggil fungsi validasi mode ketika hexButton ditekan
};

// fungsi untuk mengaktifkan mode Simple
simpleButton.onclick = function(){
    mode ='simple';
    validateMode(); // memanggil fungsi validasi mode ketika simpleButton ditekan
};

// membuat validasi apakah sedang di mode simple atau hex
function validateMode() {
    if (mode === 'hex') {
        hexButton.style.backgroundColor = '#0077b6'; // merubah warna background hexButton ketika mode hex aktif
        hexButton.style.color = "white"; // merubah warna text hexButton menjadi putih ketika mode aktif

        simpleButton.style.color = "black"; // Merubah kembali warna text simpleButton menjadi hitam ketika mode tidak aktif
        simpleButton.style.backgroundColor = ''; // Menghapus warna latar belakang
    } else if (mode === 'simple') {
        simpleButton.style.backgroundColor = '#0077b6'; // merubah warna backround simpleButton ketika mode simple aktif
        simpleButton.style.color = "white"; // merubah warna text simpleButton ketika mode aktif

        hexButton.style.color = "black"; // merubah kembali warna text hexButton menjadi hitam ketika mode tidak aktif
        hexButton.style.backgroundColor = ''; // Menghapus warna latar belakang
    }
}
// memanggil fungsi validateMode saat halam dimuat
validateMode();

function clickButton(){
    function changeBg(id, id2){
        // generate random color dari random index
        
        let randomIndex = Math.floor(Math.random() * valueColor.length);
        document.getElementById(id).style.cssText = 
        `background-color: ${valueColor[randomIndex]};`
        document.getElementById(id2).innerHTML = `${keyColor[randomIndex]}`;
        
    }
    
    function changeBgHex(id, id2){
        // generate random color dari random index
        let randomIndex = Math.floor(Math.random() * valueColor.length);
        
        document.getElementById(id).style.cssText = `background-color: ${valueColor[randomIndex]};`
    
        document.getElementById(id2).innerHTML = `${valueColor[randomIndex]}`;
        
    }

    if(mode === 'simple'){
        changeBg('bg-color','colorInfo');
    }else if(mode === 'hex'){
        changeBgHex('bg-color','colorInfo');
    }
}

// cek pilihan mode

console.log(mode);