console.log("The house always wins!")


var idInput = document.getElementById("idInput");
var colorInput = document.getElementById("colorInput");

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
    colorInput.card.style.color = "pink";
}



