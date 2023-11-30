
var color=["blue","purple","green"]
docment.querySelector("div").addEventListener("mouseover",function(){
    document.querySelector("div").stylebackground=color[Math.random()*color.length];
})