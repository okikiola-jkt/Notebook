const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-note");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}//Add to browser storage

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src= "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    
})//add me notes

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage(); 
            } //update storage when word is added.
        })
    }
    
})//Delete Icon

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("inserLineBreak");
        event.preventDefault();
    }
})//Prevent default enter function
