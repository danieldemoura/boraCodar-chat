const main = document.querySelector("#contact-message")
const contact = document.querySelector(".contact")

contact.addEventListener("click", openChat)

function removeElementChild() {
    const child = main.querySelector("#presentation-message")
    main.removeChild(child)
}

function createElementIframe() {
    const iframe = document.createElement("iframe")
    iframe.src = "./chat.html"
    removeElementChild()
    main.appendChild(iframe)
}


function openChat() {
    const desktop = window.innerWidth > 768
    const openChatMobile = () => window.location.assign("./chat.html")

    if(desktop) {
        createElementIframe()
    } else {
        openChatMobile()
    }
    
}