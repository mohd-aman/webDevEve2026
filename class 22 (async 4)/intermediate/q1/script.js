// Task
// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

const randomUserGenBtn = document.querySelector("#fetchUserBtn");
randomUserGenBtn.addEventListener("click", fetchRandomUser);

async function fetchRandomUser() {
  // Write code here...
  try {
    const resp = await fetch("https://randomuser.me/api/");
    const data = await resp.json();
    const user = data.results[0];
    document.querySelector("#userCard").style.display = "block";
    document.querySelector("#userName").innerText = user.name.first;
    document.querySelector("#userEmail").innerText = user.email;
    document.querySelector("#userCountry").innerText = user.location.country;
  } catch (error) {
    alert("Failed to fetch the user ", error.message);
  }
}