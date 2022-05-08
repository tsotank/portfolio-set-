const imageTotalNumber = 3;
const mainImageElement = document.getElementById("mainImage");
const imageListElement = document.getElementById("imagelist");
const prevImageElement = document.getElementById("prevImage");
const nextImageElement = document.getElementById("nextImage");

let currentSlideNumber = 1;
 
// main imageに関する機能
mainImageElement.setAttribute("src" , 'slide_img/image1.jpg');
// imagelistに関する機能
function changeImageSlide(){
    if( currentSlideNumber === 1){
        prevImageElement.classList.add("inActive");
    }
    else{
        prevImageElement.classList.remove("inActive");
    }
    if(currentSlideNumber === imageTotalNumber){
        nextImageElement.classList.add("inActive");
    }
    else{
        nextImageElement.classList.remove("inActive");
    }
    document.getElementById("currentSlideNumber").textContent = `${currentSlideNumber} / ${imageTotalNumber}`;
}
changeImageSlide();

for(let i = 0; i< imageTotalNumber; i++){
    const liElement = document.createElement("li");
    liElement.style.backgroundImage = `url(slide_img/image${i+1}.jpg)`;
    // 違う大きさの画像を入れるとレイアウトがくづれていくのでバックグラウンドイメージ
    liElement.addEventListener("click" ,  ()=>{
        mainImageElement.setAttribute('src' , `slide_img/image${i+1}.jpg`);
        currentSlideNumber = i+1;
        changeImageSlide();
    });
    imageListElement.appendChild(liElement);
}

prevImageElement.addEventListener("click" , ()=>{
    if (currentSlideNumber !== 1){
        currentSlideNumber --; 
        mainImageElement.setAttribute('src' , `slide_img/image${currentSlideNumber}.jpg`);
        changeImageSlide();
    }
})

nextImageElement.addEventListener("click" , ()=>{
    if(currentSlideNumber !== imageTotalNumber){
        currentSlideNumber ++;
        mainImageElement.setAttribute('src' , `slide_img/image${currentSlideNumber}.jpg`);
        changeImageSlide();
    }
})