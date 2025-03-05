console.log("Loops in JavaScript");
var count=1;
while(count<=10){
    console.log(count);
  console.log("Welcome to JavaScript"); 
  count+=1;
}

for(count=1;count<=15;count+=1){
    console.log(count);
    console.log("My name is Awais Saleem");
}
var cars=["Mercedes","Mark X","Civic","Toyota","Suzuki"];
for(var car of cars){
    console.log(car);
}

var num=[10,20,30,40,50,60,70];
for(var n of num){
    console.log(n);
}
var person={
    firstname : "Awais",
    lastname : "Saleem",
    age : 25,
    height:6.2
};

function welcome(gFullname){
    console.log("Welcome to javaScript",`${gFullname()}`);
}
welcome(function(){
     return person.firstname+" "+person.lastname;
})
var button = document.getElementById("btn");
var h1=document.getElementById("h1");
button.addEventListener("click", function (event) {
   var visibility=h1.style.visibility;
   if(visibility==="hidden"){
    h1.style.visibility = " ";
   }else{
    h1.style.visibility= " hidden";
   }


});
button.addEventListener("mouseover",function(){
    console.log("We have enter in the red zone");
})