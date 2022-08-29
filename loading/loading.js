const renderCard = () => {
    document.querySelectorAll(".box_img").forEach((cardImage) => {
        cardImage.classList.remove("loading")
    })

    document.querySelectorAll(".box_img img").forEach((cardImageSet) => {
        cardImageSet.style.visibility = "visible"
    })
}

setTimeout(() => {
    renderCard()
}, 10000);

// window.addEventListener("load", () => {
//     renderCard()
// })