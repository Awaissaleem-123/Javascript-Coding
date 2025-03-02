var firstname = "Awais";
var lastname = "Saleem";
var fullname= firstname+" "+lastname;
var age=20.5;
var salary;
salary=20000;
document.getElementById("eh-2").innerHTML=fullname;
console.log(fullname);
console.log(salary);
var num1=56;
var num2=4;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
num1+=13;
console.log(num1);

var array=["Awais","Saleem","Khan","Bacha",3];
console.log(array[2]);
console.log(array[4]);

var person={
    firstname: "Awais",
    lastname:"khan",
    age:"25",
    weight:"75",
    height:"6.2"  
}
console.log(person.firstname+ " " +person.lastname,person.age,person.weight);
console.log(person.height);

 //window.alert("Your name has been deleted!");
 
 //  var name = window.prompt("Enter your full name?");
  // console.log(name);

   function generateFullName(first_name,last_name){
    console.log("First line of function");
    console.log("Second line of function");
    console.log("Third line of function");
    return first_name+" "+last_name;
   }

   generateFullName("Awais","Saleem");
   generateFullName("Saleem","khan");

   var funcoutput=generateFullName("Awais","Saleem");
   console.log(funcoutput);
   var funcoutput=generateFullName("Saleem","Khan");
   console.log(funcoutput);
   document.getElementById("eh-2").innerHTML=funcoutput;

   function sum(first_num,last_num){
    return first_num+last_num;
   }
   var funcoutput=sum(15,20);
   console.log(funcoutput);