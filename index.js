const imgUrl = "https://image.tmdb.org/t/p/w200"
const url ="https://api.themoviedb.org/3/search/movie?api_key=396f7abead7b7b21aaeabbfc5a6f1929&language=en-US"
const pageUrl ="https://www.themoviedb.org/search?query=avengers"
const api_key= "396f7abead7b7b21aaeabbfc5a6f1929";

const inputElement= document.querySelector("#inputValue");
const buttonElement= document.querySelector("#search");


buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;
    

   
    const newUrl = url+ "&query=" +value; 
    const newPageUrl= pageUrl+ "&query=" +value;

fetch(newUrl)
.then((res) => res.json())
.then((data) => {
    
   let arr= document.querySelectorAll(".image")
   let names = document.getElementsByClassName("title");

for(var i=0;i<arr.length;i++){
     
    let rating= data.results[i].vote_average
    let title= data.results[i].original_title;
    let backDropPath = data.results[i].backdrop_path 
    let newImgUrl = imgUrl+backDropPath;
    document.getElementsByTagName("a")[i].setAttribute("href",newPageUrl)
    names[i].innerHTML= title+"<br>"+"Rating:"+rating;
    arr[i].setAttribute("src",newImgUrl);

}

}).catch((err) =>{
    console.log("error: "+ err);
})
console.log("name= "+ value);
}


 