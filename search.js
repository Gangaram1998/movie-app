import navbar from "./components/navbar.js";
let nav= document.getElementById("nav");
nav.innerHTML=navbar();
  

import carousel from "./components/carousel.js";
let slideshow= document.getElementById("carousel");
slideshow.innerHTML=carousel();

async function searchMovies(){
    document.getElementById("loader").style.display="block"
    let name= document.getElementById("movie_name").value;
  
try{
    let response= await fetch(`https://www.omdbapi.com/?apikey=5d5e6ce3&s=${name}&page=1`);
    let data=await response.json();
   
    let actual_data= data.Search;
    //console.log(actual_data)
 //   document.getElementById("loader").style.display="none"
   append(actual_data);
}

catch(err){

}
//    response.then(function(success){
// let data=success.json()
// data.then(function(success){
//     console.log(success)
// }).catch(function(error){
//     console.log(error)
// })
//    }).catch(function(error){
// //console.log(error)
//    })
}

import append from "./scripts/apped.js";

// function append(data){
//     document.getElementById("box").innerHTML=null;
// document.getElementById("loader").style.display="none"
//     data.forEach(function(el){

//         let div= document.createElement("div");
//         let image= document.createElement("img");
//         image.src= el.Poster;
//         let name= document.createElement("p");
//         name.innerText= el.Title;

//         div.append(image,name)
//         document.getElementById("box").append(div)
        
//     })
    
// }

let id; //creating global scope for id
function debounce(fun, delay){

if(id){
    clearTimeout(id);
}

 id=   setTimeout(function(){
        fun();

    },delay)
}


let input_box= document.getElementById("movie_name");
input_box.addEventListener("input",function(){
    debounce(searchMovies,1000)
})
// hiding search button
let hide= document.querySelector("#lead");
hide.style.display="none"


// hidng search input

const hide2 = document.querySelector('#right>div:nth-child(1)');
hide2.style.display="none"