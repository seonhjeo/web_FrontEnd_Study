const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
    console.log("title was clicked!");
}

function handleMouseEnter() {
    h1.style.color = "blue";
}
function handleMouseLeave() {
    h1.style.color = "black";
}
function handleWindowResize()
{
    document.body.style.backgroundColor = "tomato";
}
function handeWindowCopy()
{
    alert("copier!");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handeWindowCopy);