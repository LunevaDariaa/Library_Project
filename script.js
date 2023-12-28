const addBtn = document.querySelector(".add-button");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".submit-button");
const booksShell = document.querySelector(".books");

const title = document.querySelector("#title-input");
const author = document.querySelector("#author-input");
const pages = document.querySelector("#pages-input");

const myLibrary = [];

class Book {
  constructor(title, author, pageNum) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
  }
}

//Functions
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  title.value = "";
  author.value = "";
  pages.innerHTML = "";
};

const addBookToLibrary = function () {};

const displayBook = function (obj) {
  const html = ` <div class="book">
  <div class="book-content">
    <p class="title content">Title: ${title.value}</p>
    <p class="author content">Author:${author.value}</p>
    <p class="pages-num content">Pages:${pages.value}</p>

    <div class="buttons">
      <button class="read-button main-btn">Read</button>
      <button class="remove-button main-btn">Remove</button>
    </div>
  </div>
</div>`;
  booksShell.insertAdjacentHTML("afterbegin", html);
};

//Event Listeners
addBtn.addEventListener("click", showModal);
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value);
  console.log(newBook);
  myLibrary.push(newBook);
  closeModal();
  console.log(myLibrary);
  displayBook(newBook);
});
