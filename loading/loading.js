const renderCard = () => {
    document.querySelectorAll(".box_img").forEach((cardImage) => {
        cardImage.classList.remove("loading")
    })

    document.querySelectorAll(".box_img img").forEach((cardImageSet) => {
        cardImageSet.style.visibility = "visible"
    })
}

window.addEventListener("load", () => {
    renderCard()
})