// Task
// Build a simple dog image gallery that fetches three random dog images from https://dog.ceo/api/breeds/image/random in parallel using a Promise method.
// Clicking the "Get Dogs" button should display three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

document.getElementById("fetchDogsBtn").addEventListener("click", fetchDogs);

const loadingEle = document.createElement('p');
loadingEle.innerText = "Loading...."

async function fetchDogs() {
  try {
    const urls = [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ];
    const container = document.querySelector('#dogContainer');
    container.appendChild(loadingEle);
    const responeValuesArray = await Promise.all(urls.map((url)=>fetch(url)));
    const dataValuesArray = await Promise.all(responeValuesArray.map((resp)=>resp.json()));
    // for(let i=0;i<dataValuesArray.length;i++){
    //     const imgTag = document.createElement('img');
    //     imgTag.src = dataValuesArray[i].message;
    //     container.appendChild(imgTag);
    // }
    container.innerHTML = "";
    dataValuesArray.forEach((data)=>{
        const imgTag = document.createElement('img');
        imgTag.src = data.message;
        container.appendChild(imgTag);
    })
  } catch (error) {
    alert("Error fetching dog images: " + error.message);
  }
}