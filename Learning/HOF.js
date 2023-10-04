
const powerof2=(n)=>{
    return n**2;
}


function powerof3(n){
    return powerof2(n)*n;
}
 // console.log(powerof3(3));

 function sayHello(){
    return ()=>{
        console.log("Hi, I'm Pappu");
    }
 }

 let sayHi=sayHello();
 // console.log(sayHi());

 setInterval(()=>{
    console.log(Math.floor(Math.random()*100));
 },1000)

 



