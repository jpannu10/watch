     //selecting Divs *Not actual values
let hour = document.querySelector('.hou');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let PaM = document.querySelector('.PM');


var secStartObject = new Date().getSeconds();
sec.innerText =  secStartObject;

  //settingSeconds
setInterval(()=>{
    let secObject = new Date().getSeconds();
    sec.innerText =  secObject;
},1000);

//setting-minutes
setInterval(()=>{
    let minObject = new Date().getMinutes();
    min.innerHTML  = minObject;
},1000);

//setting-hours
setInterval(()=>{
    let houObject = new Date().getHours();
    hour.innerText = houObject;

},1000)



if(hour.innerText > 12){
    PaM.innerHTML ='PM';
    
}else if(hour.innerText < 12){
    PaM.innerHTML ='AM';
}

 




