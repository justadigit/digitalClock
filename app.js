
let clock = document.querySelector(".clock");

let tick = ()=>{
    const now = new Date();
    const min = now.getMinutes();
    const hr = now.getHours();
    const sec = now.getSeconds();
    const zone = hr>12?"PM":"AM";
    const date = now.toLocaleDateString();
    clock.innerHTML = `
        <div class="date">${date}</div> 
        <div class="hr">${hr}</div> :
        <div class="min">${min}</div> :
        <div class="sec">${sec} </div>
        <div class="zone">${zone}</div>
    `
};

setInterval(tick,1000);