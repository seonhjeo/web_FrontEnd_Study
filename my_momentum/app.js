const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
    const activeClass = "active";
    if (h1.classList.contains(activeClass)) {
        h1.classList.remove(activeClass);
    } else {
        h1.classList.add(activeClass);
    }   
}

h1.addEventListener("click", handleh1Click);
