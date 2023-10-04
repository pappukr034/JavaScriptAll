const btn=document.querySelector("#btn");
const body=document.getElementsByTagName("body");

let randomColorGenerator=()=>{
    let hexNum="0123456789ABCDEF";
    let tempHex="#";
    for (let i = 0; i < 6; i++) {
        tempHex = tempHex + hexNum[Math.floor(Math.random()*16)];
    }
    return tempHex;
};

 
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColorGenerator();
})
