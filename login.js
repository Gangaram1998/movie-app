document.getElementById("submit").addEventListener("click", check);


function check(){
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    let data= JSON.parse(localStorage.getItem("HotstarDetails"))||[];
var count=0
   for(var i=0;i<data.length;i++){
    if(data[i].email==email&&data[i].password==password){
        count++;
        document.querySelector("h3").innerText= "logged-in Successfully!";
       document.querySelector("h3").style.color="green"

       setTimeout(function(){
        window.location.href="index.html"
       }, 4000)
    }
   }
if(count==0){
    document.querySelector("h3").innerText= "Incorrect Email or Password!"
    document.querySelector("h3").style.color="black"
}
}