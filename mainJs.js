     //selecting Divs *Not actual values
let hour = document.querySelector('.hou');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let PaM = document.querySelector('.PM');




//Getting dates from Date Object
let dateObject = new Date();

 hour.innerText = dateObject.getHours();
 min.innerHTML  = dateObject.getMinutes();

  //settingSeconds
setInterval(()=>{
    
   
    
    let secObject = new Date().getSeconds();
    sec.innerText =  secObject;
    
   
   
},1000);

if(hour.innerText > 12){
    PaM.innerHTML ='PM';
    
}else if(hour.innerText < 12){
    PaM.innerHTML ='AM';
}

 




