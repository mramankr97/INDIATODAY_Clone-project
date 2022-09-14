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