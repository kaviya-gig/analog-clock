
var hour=document.getElementById("hour");
var minutes=document.getElementById("minute");
var seconds=document.getElementById("seconds");
function myfunc(){
const day=new Date();
const hr=day.getHours();
const mins=day.getMinutes();
const sec=day.getSeconds();

const hd=(hr*30)+(0.5*mins);
const md=(mins*6)+(0.1*sec);
const sd=(sec*6);
hour.style.transform='rotate('+hd+'deg)';
minutes.style.transform='rotate('+md+'deg)';
seconds.style.transform='rotate('+sd+'deg)';
}

myfunc();
setInterval(myfunc,1000);