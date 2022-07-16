function toggleBtnHandler(){
    let toggleMenu = document.querySelector('.togglemenu');
    let toggleMnDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');
    
    if (toggleMnDisplayStatus == "none") {
        toggleMenu.style.display = "block";
    }else{
        toggleMenu.style.display = "none"; 
    }
}