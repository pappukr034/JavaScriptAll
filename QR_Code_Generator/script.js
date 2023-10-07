const inputText=document.querySelector("#inputField");
const generatebtn=document.querySelector("#generatebtn");
const downloadbtn=document.querySelector("#downloadbtn");
const qrimagecontainer=document.querySelector("#qrimagecontainer");

function generateQRCode(){
    let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
   qrimagecontainer.src=url;


}

generatebtn.addEventListener('click',()=>{
    if(inputText.value.length>0){
        generateQRCode();
        inputText.value="";
        qrimagecontainer.classList.add('qrWithAnimation')
    }
    else{
        alert("Please enter Text OR URL");
    }
});

function downloadQRCode(){
    let img=document.querySelector("#qrimagecontainer");
    let srcValue=img.getAttribute('src');
    downloadbtn.setAttribute('href',srcValue);
}
downloadbtn.addEventListener('click',()=>{
    downloadQRCode();
})

