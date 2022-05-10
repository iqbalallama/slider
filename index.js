const img = [
    'image/120202692_1585304671650779_269726080686575677_n.jpg',
    'image/150069309_1703877906460121_2099695172597973541_n.jpg',
    'image/72181708_1273146132866636_4953121783722016768_n.jpg',
    'image/271212210_1941449996036243_1404665651428652919_n.jpg',
    'image/137280033_1680796595434919_1119705473989993850_n.jpg'
];
let imgIndex = 0;
const sliders = document.getElementById('slider');
setInterval(()=>{
    if(imgIndex >= img.length){
        imgIndex = 0;
    }
    const imgUrl = img[imgIndex];
    sliders.setAttribute('src', imgUrl)
   
    imgIndex++
},2000)