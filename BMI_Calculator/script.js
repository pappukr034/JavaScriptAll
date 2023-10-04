const myForm=document.querySelector('form');
myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    const message=document.querySelector("#message");
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML=`Please enter valid height ${height}`
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter valid weight ${weight}`
    }else{
        result.innerHTML=`<span>${bmi}</span>`
    }
    

    if(bmi<18.6){
        message.innerHTML=`<span>Under Weight</span>`
    }else if(bmi>18.6 && bmi<24.9){
        message.innerHTML=`<span>Normal Weight</span>`
    }else{
        message.innerHTML=`<span>Over Weight</span>`
    }
    


})

