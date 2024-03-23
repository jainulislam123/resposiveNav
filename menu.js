let icon = document.querySelector(".icons");
let navBar = document.querySelector(".navBar");
let icon1 = document.querySelector(".fa-bars");
let icon2 = document.querySelector(".fa-xmark");
let x=0;
icon.addEventListener("click",()=>{
 if(x==0){
    x=1;
   //  navBar.classList.add("active");
    icon1.style.display="none"
    icon2.style.display="block"
 }else{
   //  navBar.classList.remove("active");
    icon1.style.display="block"
    icon2.style.display="none"
    x=0;
 }
 navBar.classList.toggle("active"); // IF single click
})
