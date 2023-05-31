


function append(data){
    document.getElementById("box").innerHTML=null;
    document.getElementById("loader").style.display="none"
    data.forEach(function(el){

        let div= document.createElement("div");
        let image= document.createElement("img");
        image.src= el.Poster;
        let name= document.createElement("p");
        name.innerText= el.Title;

        div.append(image,name)
        document.getElementById("box").append(div)
        
    })
    
}


export default append