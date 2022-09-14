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


//1. Home -> navbar3
document.getElementById("home").addEventListener("click",function(){
    homepage();
})
function homepage(){
    window.location.href="index.html"
}

//2. india -> navbar3
document.getElementById("india").addEventListener("click",function(){
    indiaNews()
})
function indiaNews(){
    window.location.href="india.html"
}

// 3. world -> navbar3
document.getElementById("world").addEventListener("click",function(){
    worldNews();
})
function worldNews(){
    window.location.href="world.html"
}

// 4. busniness -> navbar3
document.getElementById("business").addEventListener("click",function(){
    businessNews();
})
function businessNews(){
    window.location.href="business.html"
}

// 5. tech -> navbr3
document.getElementById("tech").addEventListener("click",function(){
    techNews();
})
function techNews(){
    window.location.href="tech.html";
}

// 6. health -> navbar3
document.getElementById("health").addEventListener("click",function(){
    healthNews();
})
function healthNews(){
    window.location.href="health.html";
}

// 7. sports -> navbar3
document.getElementById("sports").addEventListener("click",function(){
    sportsNews();
})
function sportsNews(){
    window.location.href="sports.html";
}

// 8. college -> navbar3
document.getElementById("college").addEventListener("click",function(){
    college();
})
function college(){
    window.location.href="college.html";
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
