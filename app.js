document.getElementById("knapp").addEventListener("click", handleClick)
var element = document.getElementById("myElement");


function handleClick() {
    const number = document.getElementById("yes").value
    if (number <= 0) {
        element.innerText = "Ange en giltig ålder"
    }
    else if (number < 13) {
        element.innerText = "Du är ett barn"
    }
    else if (number < 20) {
        element.innerText = "Du är en tonåring"
    }
    else if (number < 65) {
        element.innerText = "Du är en vuxen"
    }
    else {
        element.innerText = "Du är en senior"
    }
}