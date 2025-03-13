const h3tags=document.getElementsByTagName("h3");
console.log(h3tags[1].innerHTML);
const clastags=document.getElementsByClassName("bg-custom");
console.log(clastags);
const body=document.querySelector("body");
const nametags=document.getElementsByName("firstname");
console.log(nametags);
const button=document.querySelector("button");
console.log(button);
const button2=document.createElement("button");
body.prepend(button2);
button2.innerText="Submit button";

const a=document.createElement("a");
a.innerHTML="Visit my Instagram";
a.setAttribute("href","https://instagram.com");
body.append(a);

