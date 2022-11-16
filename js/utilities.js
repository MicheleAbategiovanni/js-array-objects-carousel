function generateImage(containerEl, array,) {


    for (let i = 0; i < array.length; i++) {
        const immagine = array[i];
        const imgEl = document.createElement("img");
        const titleEl = document.createElement("h4");
        const descriptionEl = document.createElement("p");

        if (i === 0) {
           
            imgEl.classList.add("opacity");
            titleEl.classList.add("opacity-title");
            descriptionEl.classList.add("opacity-description");

        }

        imgEl.classList.add("width-img");
        imgEl.id = "immagine_grande";
        imgEl.src = immagine.image;

        titleEl.textContent = `${immagine.title}`
        titleEl.classList.add("title-text");

        descriptionEl.textContent = `${immagine.text}`;
        descriptionEl.classList.add("descrption-text");

        containerEl.append(imgEl, titleEl, descriptionEl);
    }


    scrollNextEl.classList.add("scroll-next")
    scrollPrevEl.classList.add("scroll-prev")

    containerEl.append(scrollNextEl, scrollPrevEl);
}
