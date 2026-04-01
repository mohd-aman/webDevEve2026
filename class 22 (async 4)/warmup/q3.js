// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

function fetchCatFact() {
  // Write code here...
  fetch("https://catfact.ninja/fact")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.fact);
    }).catch((error)=>{
      console.log(error.message);
    })
}

// Usage:
fetchCatFact();