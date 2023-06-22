// https://unsplash.com/developers

const apiKey = "sxc3vq_uylDF1JVkPmgftOQSqc9aV8cvnIOouaSLfIg";

const formEl = document.querySelector("form");
const searchInputEl = document.querySelector("input");

const searchResultsEl = document.querySelector(".results");
const moreBtnEl = document.getElementById("show-more");

let inputData = "";
let page = 1;

async function searchPhotos() {
  inputData = searchInputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    // console.log(url)
  
  const response = await fetch(url);
  const data = await response.json();
    // console.log(data)

  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;
    // console.log(results)
  results.map((result) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    
    imageContainer.appendChild(image);
    imageContainer.appendChild(imageLink);
    searchResultsEl.appendChild(imageContainer);
  });

  page++;

  if(page > 1) {
    moreBtnEl.style.display = "block";
  }
}



formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchPhotos();
});

moreBtnEl.addEventListener("click", () => {
    searchPhotos();
});
