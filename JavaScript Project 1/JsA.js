let cart = ["milk", "eggs"];

function insertHoney(){
    if(cart.indexOf("honey") == -1) {
        cart.push("honey");
        alert("Buy some Honey");
    }else{
        alert("You have already honey");
    }
}

function deleteHoney(){
    let deleted = false
    let output;
    for (let i = cart.length -1; i>= 0; i--){
        if (cart[i] == "honey"){
            cart.splice(i,1);
            /* alert("No more Honey") */
            deleted = true;
        }
    }
    output = (deleted) ? "honey deleted successfully" : "honey not found"
    alert(output);
}

insertHoney();
insertHoney();
deleteHoney();
deleteHoney();




