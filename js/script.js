const displayCharacter = function () {
    console.log(this.getAttribute("value"));
};
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {input.addEventListener("click", displayCharacter);});

