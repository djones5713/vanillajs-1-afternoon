console.log("The house always wins!")


const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

console.log(idInput);
console.log(colorInput);

function setCard(){
 const card  = document.getElementById(idInput.value);
 card.style.color = colorInput.value;
 console.log(card);
 console.log(card.style.color);
}

function reset() {
    const resetCard = document.getElementsByTagName("section");
    // console.log(colorInput.style)
    colorInput.style.color = "pink";
}



