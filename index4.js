var button=document.getElementById("btn");
var div=document.getElementById("div-1");
/* button.addEventListener("click",function(){
    console.log("The button is clicked!");
})
    */
button.onclick=eventHandler;
function eventHandler(event){
    console.log(event);
    console.log(Math.floor(Math.random()*255));
    div.style.backgroundColor= `rgb(${(Math.floor(Math.random()*255))},${(Math.floor(Math.random()*255))},${(Math.floor(Math.random()*255))})`;
}  


/*
var redirection=true;
if(redirection){
    window.location="https://google.com";
}
    
 setTimeout(function(){
    console.log("Rendering after 4 seconds:");
    window.location="https://google.com";
     
 },5000)
 */
 console.log(student);
 var student="Awais";
 console.log(student);

 x=45;
 console.log(x);
 var x;

 console.log(Date());
 
 var d=new Date;
 console.log(d.toLocaleDateString());

 setInterval(eventHandler,5000);
 var y= "string";
 console.log(typeof y);
