function toggleBtnHandler(){
    let toggleMenu = document.querySelector('.togglemenu');
    let toggleMnDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');
    
    if (toggleMnDisplayStatus == "none") {
        toggleMenu.style.display = "block";
    }else{
        toggleMenu.style.display = "none"; 
    }
}
$(document).ready(function(){
    hideAllDescriptions();
    showImageText("#Rhythmic", ".rhythmicText");
    showImageText("#Ballet", ".balletText");

})

function hideAllDescriptions(){
   let imageTexts = $("div[class*='Text']");
   imageTexts.each(function(){
    $(this).hide();
   })
}


function showImageText(imgId, textDiv){
    $(textDiv).prepend("<h1></h1>");
    $(textDiv + ">h1").addClass("mb-20");
    $(textDiv + ">h1").text(imgId);

    $(imgId).hover(function(){
        $(this).css({"box-shadow": "0 0 5px #ad6d88"});
        $(textDiv).show();
    }, function(){
        $(this).css({"box-shadow":"none"});
        $(textDiv).hide()
    })
}


















