// Task
// Implement an API retry mechanism where a request to an invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted up to 3 times before showing an error message.
// Clicking "Retry Fetch" should attempt to fetch the API. The status should be updated in real-time for each attempt on the page.
// If the request fails, retry up to 3 times before displaying a failure message.
// Show real-time status updates on the page for each attempt.

document.getElementById("retryFetchBtn").addEventListener("click", () => {
  fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
});

async function fetchWithRetry(url, retries) {
  const statusElement = document.getElementById("status");
  for(let attempt=1;attempt<=retries;attempt++){
    try{
        const resp = await fetch(url);
        if(!resp.ok){
            throw new Error("Attempt failed : " + attempt);
        }
        const data = await resp.json();
        statusElement.innerText = "Success!";
        return data;
    }catch(error){
        if(attempt === retries){
            statusElement.innerText = "All Attempts Failed";
        }else{
            statusElement.innerText = "Error : " + error.message;
        }
    }
  }
}