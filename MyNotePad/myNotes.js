function getOnlyDate(){
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months= ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]
   
    let cdate= new Date();
    let day= days[cdate.getDay()];
    let date= cdate.getDate();
    let month= months[cdate.getMonth()];
    let year= cdate.getFullYear();
    let hours= cdate.getHours();
    let minutes= cdate.getMinutes();
    let seconds= cdate.getSeconds();

    return day + " " + date + " " + month + " " + year + "<br>" +
            (((hours < 10) ? "0" : "") + hours) + ":" + (((minutes < 10) ? "0" : "") + minutes) + ":" +
            (((seconds < 10) ? "0" : "") + seconds);
}



let header= document.querySelector(".header");
header.innerHTML= getOnlyDate()


let idnum= 1;
function insertItem(){
    let noteName= document.getElementById("NoteName");
    let noteNameText= noteName.value
    
    if (noteNameText === ""){
        return;
    }
    
    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", "item" + idnum);
    newCheckbox.setAttribute("onclick", "strikeThrough(this)");
    
    let newLbl = document.createElement("label");
    newLbl.setAttribute("for", "item" + idnum);
    newLbl.innerHTML = noteNameText;

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "item");
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newLbl);

    let newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("onclick", "deleteItem(this.parentElement)");
    newBtn.textContent = "X";

    let newLi = document.createElement("li");
    newLi.appendChild(newDiv);
    newLi.appendChild(newBtn);

    let ul = document.querySelector(".main > ul");
    ul.appendChild(newLi);

    noteName.value = "";
    idnum++;
}   

document.getElementById("NoteName").addEventListener("keyup", function(event){
    if ((event.key === "Enter") && (document.getElementById("noteName") !="")){
        insertItem()
    }
})

function deleteItem(item){
    item.remove();
}

function strikeThrough(item){
    if(item.checked){
        item.nextElementSibling.style.textDecoration = "line-through";
        item.nextElementSibling.style.color = "white";
    }else{
        item.nextElementSibling.style.textDecoration = "none";
        item.nextElementSibling.style.color = "black";
    }
}