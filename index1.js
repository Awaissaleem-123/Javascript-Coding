var student=["Awais","Saleem","khan","Ali","Arif"];
var ages=[20,30,40,50,60];

console.log(student[2]);
console.log(ages[3]);

var myname={
   firstname:"Awais",
   lastname : "Saleem",
   age : 20,
   height : 6.4,
   greetings:function(){
    return "You will be the next Alexander the great:";
   }
};

console.log(myname.age);
console.log(myname["firstname"]);

var num=15;
function square(num1){
    var result=num1*num1;
    return result;
}
var admin=square(35);
console.log(admin);
var owais=myname.greetings();
console.log(owais);

var authenticated=false;

if(authenticated===true){
    console.log("Your authentication is true:");
}else{
    console.log("Your authentication is false:");
}
 var age=12;
 if(age>=18){
    console.log("Congratulation you are an adult:");
 }else if(age <18 && age > 16){
    console.log("Sorry you are not an adult:");
 }else{
    console.log("I am the one who stole your identity");
 }
 var num;
 function checkNum(num){
    var result;
    num%2==0 ?  result="Even" : result="Odd";
    return result;
 }
 console.log(checkNum(5));
 var position="Engineer";

 switch(position){
     case "Manager":
     console.log("Hello I am a manager:");
     break;
     case "Engineer":
     console.log("Hi I am an Engineer:");
     break;
     case "Developer":
     console.log("Hi I am a developer:");
     break;
     default:
        console.log("I am not even a student:");
        break;
 }