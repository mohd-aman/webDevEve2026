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

  // Write code here
}