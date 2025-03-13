const form=document.querySelector("form");
const Inputval=document.querySelector("input");
const ul=document.querySelector("ul");
const text=" ffff  ffff  ";
console.log(text.trim());
function submitHandler(event){
    event.preventDefault();
    const todo=Inputval.value.trim();
    if(!todo){
        return false;
    }
    const li=document.createElement("li");
    li.innerText=todo;
    const span=document.createElement("span");
    span.innerText=todo;
    li.append(span);
    const deleteButton=document.createElement("button");
    li.append(deleteButton);
    deleteButton.innerText="delete";
    deleteButton.addEventListener("click",function(){
        ul.removeChild(li);
    }) 
    ul.append(li);
    Inputval.value=" ";
}
form.addEventListener("submit",submitHandler);