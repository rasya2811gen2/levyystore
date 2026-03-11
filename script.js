const links = document.querySelectorAll(".link");

links.forEach(link => {
link.addEventListener("click", () => {
console.log("Membuka:", link.innerText);
});
});
