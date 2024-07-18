var main =  document.querySelector("main");
var cursor = document.querySelector(".cursor");


main.addEventListener("mousemove",(elem)=>{
    cursor.style.top = elem.y + "px";
    cursor.style.left = elem.x + "px";
});