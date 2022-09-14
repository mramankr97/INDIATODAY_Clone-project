let createiCont3 = (data) => {
  return `
  <div>
    <h4>${data.category[0]}</h4>
    <img src="${data.image_url}" alt="No Image available">
    <h3>${data.title}</h3>
    <hr>
    <li>${data.description}</li>
    <hr>
    <li>${data.pubDate}</li>
    <span>${data.source_id}</span>
    <span>More from ${data.category[0]} ></span>
  </div>
  `;
}

export default createiCont3;