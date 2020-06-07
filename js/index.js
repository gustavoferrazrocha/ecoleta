const buttonSearch = document.querySelector("#page-home .main-content a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
const closeModal = document.querySelector("#modal")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})
    
close.addEventListener("click", () => {
    modal.classList.add("hide")
})

closeModal.addEventListener("click", () =>{
    modal.classList.add("hide")
})