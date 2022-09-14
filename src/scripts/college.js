import {header} from '../components/header.js'
document.getElementById('header').innerHTML=header();




//linking all the navbar headers to pages

//1. news -> navbar2
document.getElementById("news").addEventListener("click",function(){
    newNews();
})
function newNews(){
    window.location.href="index.html"
}





document.getElementById("user").addEventListener("click",function(){
    loginUser();
})
function loginUser(){
    window.location.href="login.html"
}
document.getElementById("entertain").addEventListener("click",function(){
    entertainNews();
})
function entertainNews(){
    window.location.href="entertain.html"
}

document.getElementById("business_icon").addEventListener("click",function(){
    businessNews_icon();
})
function businessNews_icon(){
    window.location.href="business.html"
}







//search icon 
document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').style.display = 'block';
    document.getElementById('clear').style.display = 'block';
    document.getElementById('search').focus();
    document.getElementById('searchIcon').style.display = 'none';
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
  }
