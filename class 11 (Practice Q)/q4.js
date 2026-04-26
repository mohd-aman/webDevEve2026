// Write functions to:
//     List all books.
//     Mark a book as borrowed (isAvailable = false).
//     Return a book (isAvailable = true).
//     Find books by a specific author.

const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book5", author: "Author5", isAvailable: true },
];

function listBooks() {
  return books;
}

function markAsBorrowed(title) {
  // Write your code here
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const nameOfTheBook = book.title;
    const isAvailable = book.isAvailable;
    if (title === nameOfTheBook) {
      if (isAvailable) {
        book.isAvailable = false;
        return book;
      } else {
        return "Book is not available";
      }
    }
  }
  return `Book with the title: ${title} does not exist`;
}

function returnBook(title) {
  // Write your code here
}

function findBooksByAuthor(author) {
  // Write your code here
}

console.log(listBooks());
console.log(markAsBorrowed("Book2"));
console.log(markAsBorrowed("Book2"));
console.log(markAsBorrowed("Book8"));