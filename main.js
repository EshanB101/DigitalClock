//To display @ DOM
const hr = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

//Update every sec
setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = ' AM';

    //12h format
    if(h>12){
        h=h-12;
        session=" PM";
    }

    //to make h/m/s as 01,02 instead of 1,2
    h < 10 ? h='0'+h : h
    m < 10 ? m='0'+m : m
    s < 10 ? s='0'+s : s

    //display
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    document.querySelector('.am-pm').innerHTML = session;

},1000)

document.body.addEventListener('mousemove',(e)=>{
    document.body.style.backgroundColor = "rgba(" + e.offsetX + "," + e.offsetY + ",40,0.5)";
    //document.body.style.backgroundColor = linear-gradient(right, rgba(255,0,0,0), rgba(255,0,0,1));
})