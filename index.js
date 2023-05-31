
import navbar from "./components/navbar.js";
//console.log(navbar)

let nav= document.getElementById("nav")
nav.innerHTML=navbar();

import carousel from "./components/carousel.js";

let slideshow= document.getElementById("carousel");
slideshow.innerHTML=carousel();
// function carousel(){
    

//     let images=[ "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/80/1320080-h-8fc543bf9335","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6845/1376845-h-d0e066aa0374","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7333/1317333-h-c4cd88bedeb7","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7382/1357382-h-e8e07b3880aa"]

//     let  img= document.createElement("img");
//     img.src=images[0];
//     document.getElementById("carousel").append(img)
// let i=1;
    
//     img.style.width="50%"
   
//     setInterval(function(){
//         if(i==images.length){
//             i=0
//         }
// img.src=images[i];
// document.getElementById("carousel").append(img)
// i++
//     },3000)
   
// }
//carousel()


var data1= {
   Title:    "Super-30",
   
Poster:      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
}

var data2= {Title:"Rocky",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d",
}

var data3= {Title:"Prey",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e",
}

var data4= {Title:"Pink",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/4578/1000154578/1000154578-v",
}

var data5= {Title:"Masaan",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
}
var data6= {Title:"Luca",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6",
}

var data7=  {
   Title:"VR",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1725/1351725-v-ef0226cc1fa6",
}

var data8= {Title:"Neerja",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v",
}

var data9= {Title:"Bhag Milkha Bhag",

Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v",
}

var data=JSON.parse(localStorage.getItem("movies"))||[];

data.push(data1);
data.push(data2);
data.push(data3);
data.push(data4);
data.push(data5);
data.push(data6);
data.push(data7);
data.push(data8);
data.push(data9);
//console.log(data)
localStorage.setItem("movies",JSON.stringify(data));

// 
import append from "./scripts/apped.js";




// adding loader

//var data=JSON.parse(localStorage.getItem("movies"))||[];

let getmeData= new Promise(function(resolve,reject){
setTimeout(function(){
    if(data!=null){
        resolve(data)
    }
    else {
        reject("ERR: Server could not get movies data")
    }
},3000);
});

getmeData.then(function(success){
append(success)
})
.catch(function(error){
console.log(error)
})

document.querySelector("#lead").addEventListener("click",lead)

function lead(){
   
    window.location.href="search.html"
}

document.querySelector("#right>div:nth-child(4)").addEventListener("click", redirect);
function redirect(){
    window.location.href="signup.html"
}