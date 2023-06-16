const body1 = document.querySelector("body")

body1.addEventListener("mousemove",(event)=>{
    const x = event.offsetX
    const y = event.offsetY
    const spn = document.createElement("span")
    spn.style.left = x + "px";
    spn.style.top = y + "px";
    const size = Math.random()*100;
    spn.style.width = size + "px";
    spn.style.height = size + "px";
    body1.appendChild(spn)
    setTimeout(()=>{
        spn.remove();
    }, 3000)

})