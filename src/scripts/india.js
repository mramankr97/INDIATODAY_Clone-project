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


  //............................news......................................

  let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=3fbeddfb8b474c858aded713acc19c9c'

  async function getData()
  {
    let res=await fetch(url);
    let data= await res.json();

    console.log(data.articles);
    display(data.articles)
  }

  getData()



  function display(data)
  {
    let container=document.getElementById('indianews');

    data.forEach((el)=>{
        let image=document.createElement('img');
        image.src=el.urlToImage;
        image.style.width='250px';

        let photo=document.createElement('div');
        photo.append(image);


        let title=document.createElement('h2');
        title.innerText=el.title;

        let desc=document.createElement('p');
        desc.innerText=el.description
        desc.style.marginLeft='-0.1px'

        let div=document.createElement('div');
        div.append(title,desc)
        div.style.padding='5px 10px'

        let box=document.createElement('div');
        box.append(photo,div);
        box.style.display='flex'
        box.style.marginBottom='20px'

        container.append(box);
    })
  }










  