
function increment (){
    alert("the button was clicked!")
}

let  countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
}

function save() {

    let nums = count + " - "
    saveEl.textContent += nums

    countEl.textContent = 0;
    count = 0;
    console.log(count)
}
