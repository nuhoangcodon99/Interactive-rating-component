const submit = document.getElementById("submit");
// const select = document.querySelector(".list button");
const rate = document.getElementById("rate-again");
const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
    thankContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

rate.addEventListener("click", () => {
    thankContainer.classList.add("hidden");
    mainContainer.style.display = "block";
})

rates.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e);
        rating.textContent = e.target.textContent;
    })
});



