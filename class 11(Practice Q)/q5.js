// Implement secretMessage(secret) that:
// Returns a function.
// When called, returns the stored secret.
// Starter Code:

// Implement secretMessage(secret) that:
//     Returns a function.
//     When called, returns the stored secret.
// Approach: Think about what this function will return.
//  Will you get a value when you call this function or something that can be called later. 

const secret = secretMessage("Hidden Code");
console.log(secret());
function secretMessage(secret) {
    return function(){
        return secret;
    }
}