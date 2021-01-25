
let toggleMenu = document.getElementById("toggleLines");
toggleMenu.addEventListener("click",()=>{
    let aside = document.querySelector(".aside");
     aside.style.width = "50%";
     let footerAside = document.querySelector(".footerAside");
     footerAside.style.width = "50%";
     if(aside.style.display == "block"){
        aside.style.display = "none";
     }
     else{
         aside.style.display = "block";
     }
});
let mainContainer = document.querySelector(".mainContainer");
 mainContainer.addEventListener("click",()=>{
     let aside = document.querySelector(".aside");
     if(aside.style.display == "block"){
         aside.style.display = "none";
     }
});