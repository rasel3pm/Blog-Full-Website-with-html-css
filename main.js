const icon = document.querySelector(".fa-sun");
const allBtn = document.querySelectorAll(".root-btn");
const allPera = document.querySelectorAll("a");

icon.addEventListener("click", function() {
    document.body.style.backgroundColor = "black"

    allBtn.forEach((e) => {
        e.style.color = "white"
    })

    allPera.forEach((f) => {
        f.style.color = "white"
    })
})