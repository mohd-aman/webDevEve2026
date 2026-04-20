// Problem 1
// Flattening an Array

// Problem Statement: Flatten Nested Array

// You are given a nested array containing array elements. Your task is to write a JavaScript function to flatten this nested array into a single-dimensional array, where all the nested arrays' elements are moved to the top-level array.

// For example, given the following nested array:

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// The flattened array should be:

// [1, 2, 3, 4, 5, 6]
// Your task is to implement a function flattenArray that takes the nested array as input and returns the flattened array.

// Input:

// A nested array arr containing integers.
// Output:

// A single-dimensional array containing all the elements of the nested array.
// Input:

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// Output:

// [1, 2, 3, 4, 5, 6]

const flattenArray = (nestedArr)=>{
    return nestedArr.reduce((acc,ele)=>{
        //logical implementation
        if(Array.isArray(ele)){
            const arrflattened = flattenArray(ele);
            acc.push(...arrflattened);
        }else{
            acc.push(ele);
        }
        return acc;
    },[]);
}
const input = [1, [2, 3], [4, [5, 6]]];
const output = flattenArray(input);
console.log(output);



// Problem-2
// Problem Statement:

// You are given an array of objects representing transactions made by customers. Each object contains the following properties:

// customerId: Number, representing the unique ID of the customer.
// amount: Number, representing the amount of the transaction.
// date: String, representing the date of the transaction (in the format "YYYY-MM-DD").
// Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

// totalTransactions: Total number of transactions.
// totalAmount: Total amount of all transactions.
// averageTransactionAmount: Average amount of transactions.
// transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
// transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.
// Example Input:

// const transactions = [
//   { customerId: 1, amount: 100, date: '2024-03-01' },
//   { customerId: 2, amount: 150, date: '2024-03-01' },
//   { customerId: 1, amount: 200, date: '2024-03-02' },
//   { customerId: 3, amount: 50, date: '2024-03-02' },
//   { customerId: 2, amount: 120, date: '2024-03-03' }
// ];