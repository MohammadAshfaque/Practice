var btn = document.querySelector("button")
btn.addEventListener("click", function(){
     btn.textContent= "starting";
     btn.style.backgroundColor= "yellow";
     btn.style.color= "blue";
})
btn.addEventListener("mouseover", function(){
     btn.style.backgroundColor = "red";
})

btn.addEventListener("mouseout", function(){
     btn.style.backgroundColor = "yellow";
})
