const mode = document.querySelectorAll(".mode")
const body = document.body
const texto = document.getElementById("modoTexto")

mode[0].addEventListener("click", () => {
    const value = body.classList.toggle("bright")
    localStorage.setItem("mode", value)
    if(value){
        texto.innerHTML = "modo claro";
    } else {texto.innerHTML = "modo oscuro";
}
})

const value = localStorage.getItem("mode")

if (value == "true") {
    body.classList.add("bright");
    texto.innerHTML = "modo claro";
} else {
    body.classList.remove("bright");
    texto.innerHTML = "modo oscuro";
}