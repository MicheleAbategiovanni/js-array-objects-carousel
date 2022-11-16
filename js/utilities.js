function generateImage(containerEl, array) {

    const arrayImg = array;

    const imgEl = document.createElement("img");
    imgEl.classList.add("width-img");
    
    imgEl.src = arrayImg.image;

    containerEl.append(imgEl);

}
