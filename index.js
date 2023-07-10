import { displayBookSection, displayNewBooksSection, displayContactSection, displayAllSections } from './modules/display-section.js';
import  { printDateTime }  from './modules/date.js';
import  BookLibrary  from './modules/book-library.js';
  
let bookLibrary;

function initializePage() {
  bookLibrary = new BookLibrary();
  window.bookLibrary = bookLibrary;
}

window.addEventListener('DOMContentLoaded', initializePage);

document.getElementById('addBtn').addEventListener('click', () => {
  if (bookLibrary) {
    bookLibrary.handleClick();
  }
});

let list = document.getElementById('list-link');
let addBook = document.getElementById('add-link');
let contact = document.getElementById('contact-link');
let front = document.getElementById('front');

list.addEventListener('click', displayBookSection);
addBook.addEventListener('click', displayNewBooksSection);
contact.addEventListener('click', displayContactSection);
front.addEventListener('click', displayAllSections);

printDateTime();
setInterval(printDateTime, 1000);