

const hamburger = document.getElementById("hamburger");

// const menuham = document.getElementById("menuham");

const close = document.getElementById("close");

hamburger.addEventListener("click", ()=>{

// console.log("ooo");
     document.getElementById("menuham").style.height= 200 +"px";
     
     hamburger.style.visibility="hidden";

     close.style.visibility="visible";
    
})


close.addEventListener("click", ()=>{
    document.getElementById("menuham").style.height= 0 +"px";
    hamburger.style.visibility="visible";
    close.style.visibility="hidden";
})