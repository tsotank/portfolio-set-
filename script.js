// イメージスライダーを作る上で必要となる要素
// イメージスライダーの要素 background-image

const heroImageElement = document.getElementById("home");
const prevImageElement = document.getElementById("prevImage");
const nextImageElement = document.getElementById("nextImage");
const imageTotalNumber = 4;
heroImageElement.style.backgroundImage = 'url(img/image1.jpg)';
let currentSlideNumber = 1;
    // ←ボタンクリック時のイベント
// style.css の方でbackgroundimageの指定いらないのでは、、
    prevImageElement.addEventListener("click" , ()=>{
        if(currentSlideNumber !==1){
            currentSlideNumber--;
            heroImageElement.style.backgroundImage  = `url(img/image${currentSlideNumber}.jpg)`;
        }
    })

    nextImageElement.addEventListener('click' , ()=>{
        if(currentSlideNumber !== imageTotalNumber){
            currentSlideNumber++;
            heroImageElement.style.backgroundImage = `url(img/image${currentSlideNumber}.jpg)`;
        }
    } );

