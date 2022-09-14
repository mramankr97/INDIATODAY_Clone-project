// import {header} from '../components/header.js'
// document.getElementById('header').innerHTML=header();


var arr = [
  {
    title: 'PRINT',
    price: '699',
    description: 'Get 52 India Today Print Issues  ',
  },
  {

    title: 'PRINT + DIGITAL',
    price: '579',
    description: 'Get 52 India Today Print Issues  ',
  },
  {

    title: 'DIGITAL',
    price: '2199',
    description: 'Get 52 India Today Print Issues'
  },
];



var add = JSON.parse(localStorage.getItem('mycart')) || []
display(arr)








function display(arr) {
  document.querySelector("#container").innerHTML = null




  arr.forEach(function (e) {

    var b = document.createElement("p")
    b.innerText = e.title
    b.setAttribute("id", "title")

    var c = document.createElement("p")
    c.innerText = e.description

    var rs = document.createElement("p")
    rs.innerText = "1 yesr for Rs" + " "

    var rupee = document.createElement("p")
    rupee.innerText = e.price
    var rsp = document.createElement("div")
    rsp.append(rs, rupee)
    rsp.setAttribute("id", "rsp")

    var i = document.createElement("button")
    i.innerText = "Add to cart"
    i.setAttribute("id", "button")
    i.addEventListener("click", function () {
      add.push(e.price)
      localStorage.setItem("mycart", JSON.stringify(add))
      alert("Items added in Cart")
      setTimeout(() => {
        window.location.href = './checkout.html';
      }, 1000);
    })




    var ld = document.createElement("div")
    ld.setAttribute("id", "ld")
    ld.append(b, c, rsp, i)
    var z = document.querySelector("#container")
    z.append(ld)
  })
}