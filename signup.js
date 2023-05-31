document.querySelector("#submit").addEventListener("click", save);
var allData=JSON.parse(localStorage.getItem("HotstarDetails"))||[];
function save(){
    window.location.href="login.html"
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    function obj(email,password){
        this.email= email;
        this.password= password
    }
    var data= new obj(email,password);
   allData.push(data);
   localStorage.setItem("HotstarDetails", JSON.stringify(allData));
   
}

document.querySelector(" #card>div:nth-child(5)>span").addEventListener("click", direct);

function direct(){
    window.location.href="login.html"
}
//constructor function is a whole amazing thing.
// it simplified my whole task;