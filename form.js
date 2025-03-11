const form=document.getElementById("my-form");
const namein=document.getElementById("name-input");
console.log(namein);
const passwordin=document.getElementById("password-input");

function submitHandler(event){
   event.preventDefault();

   const name=namein.value;
  const password=passwordin.value;
  console.log(name,password);

  if(!name || !password){
   alert("Enter the name and password values");
   return false;
  }
  if(password.length<8){
   alert("Your password is less than 8 digits:");
    passwordin.classList.add("error");
   return false;
}  
     passwordin.classList.remove("error");
}

form.addEventListener("submit",submitHandler);