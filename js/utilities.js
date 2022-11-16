function generateImage(containerEl, array, i) {

    // ciclare l'array
    // e cos' abbiaom ogni singolo oggetto di immagine

    // --> dentro il ciclo
    const scrollNextEl = document.createElement("button");
    const scrollPrevEl = document.createElement("button");
    const immagine = array[i];
    const imgEl = document.createElement("img");

    imgEl.classList.add("width-img");
    imgEl.src = immagine.image;

    scrollNextEl.classList.add("scroll-next")
    scrollPrevEl.classList.add("scroll-prev")


    containerEl.append(imgEl, scrollNextEl, scrollPrevEl);

    scrollNextEl.addEventListener("click", function () {

        i++;

        if (i > array.length - 1) {
            i = 0;
        }

        const immagine = array[i];
        imgEl.src = immagine.image;

    });

}