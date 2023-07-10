import {
  displayBookSection, displayNewBooksSection, displayContactSection, displayAllSections,
} from './modules/display-section.js';
import { printDateTime } from './modules/date.js';
import BookLibrary from './modules/book-library.js';

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

const list = document.getElementById('list-link');
const addBook = document.getElementById('add-link');
const contact = document.getElementById('contact-link');
const front = document.getElementById('front');

list.addEventListener('click', displayBookSection);
addBook.addEventListener('click', displayNewBooksSection);
contact.addEventListener('click', displayContactSection);
front.addEventListener('click', displayAllSections);

printDateTime();
setInterval(printDateTime, 1000);