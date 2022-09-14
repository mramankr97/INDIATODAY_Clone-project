import { getData } from '../components/indexcont3.js'
import { header } from '../components/header.js'
document.getElementById('header').innerHTML = header();
import { footer } from '../components/footer.js'
document.getElementById('footer').innerHTML = footer();

getData();




//linking all the navbar headers to pages

document.getElementById("news").addEventListener("click", function () {
    newNews();
})
function newNews() {
    window.location.href = "index.html"
}

document.getElementById("home").addEventListener("click", function () {
    homepage();
})
function homepage() {
    window.location.href = "index.html"
}

document.getElementById("india").addEventListener("click", function () {
    indiaNews()
})
function indiaNews() {
    window.location.href = "india.html"
}

document.getElementById("world").addEventListener("click", function () {
    worldNews();
})
function worldNews() {
    window.location.href = "world.html"
}

document.getElementById("business").addEventListener("click", function () {
    businessNews();
})
function businessNews() {
    window.location.href = "business.html"
}

document.getElementById("tech").addEventListener("click", function () {
    techNews();
})
function techNews() {
    window.location.href = "tech.html";
}

document.getElementById("health").addEventListener("click", function () {
    healthNews();
})
function healthNews() {
    window.location.href = "health.html";
}

document.getElementById("sports").addEventListener("click", function () {
    sportsNews();
})
function sportsNews() {
    window.location.href = "sports.html";
}

document.getElementById("college").addEventListener("click", function () {
    college();
})
function college() {
    window.location.href = "college.html";
}

document.getElementById("user").addEventListener("click", function () {
    loginUser();
})
function loginUser() {
    window.location.href = "signin.html"
}
document.getElementById("entertain").addEventListener("click", function () {
    entertainNews();
})
function entertainNews() {
    window.location.href = "entertain.html"
}

document.getElementById("business_icon").addEventListener("click", function () {
    businessNews_icon();
})
function businessNews_icon() {
    window.location.href = "business.html"
}

//search icon 
document.getElementById('searchIcon').onclick = function () {
    document.getElementById('search').style.display = 'block';
    document.getElementById('clear').style.display = 'block';
    document.getElementById('search').focus();
    document.getElementById('searchIcon').style.display = 'none';
}
document.getElementById('clear').onclick = function () {
    document.getElementById('searchIcon').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
}