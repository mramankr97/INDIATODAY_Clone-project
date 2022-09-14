import createiCont3 from './createiCont3.js'

let url = `https://newsdata.io/api/1/news?&country=in&apikey=pub_9372bba35bc2c1d12127a34dbc38c52ef36d`;

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  let arr = data.results;
  document.querySelector('#indexcont3').innerHTML = null;
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].image_url !== null) {
      document.querySelector('#indexcont3').innerHTML += createiCont3(arr[i]);
      count++;
      if (count == 6) {
        break;
      }
    }
  }
}

export { getData };