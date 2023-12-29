const addBtn = document.querySelector(".add-button");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".submit-button");
const booksShell = document.querySelector(".books");

//Read and remove
const readBtn = document.querySelector(".read-button");
const removeBtn = document.querySelector(".remove-button");

const title = document.querySelector("#title-input");
const author = document.querySelector("#author-input");
const pages = document.querySelector("#pages-input");

const myLibrary = [];

class Book {
  constructor(title, author, pageNum, isRead = true) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
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

const addBookToLibrary = function (e) {
  if (title.value !== "" && author.value !== "") {
    const newBook = new Book(title.value, author.value, pages.value);
    console.log(newBook);
    myLibrary.push(newBook);
    const index = myLibrary.indexOf(newBook);
    displayBook(newBook, index);
    closeModal();
    console.log(myLibrary);
  }
};

const displayBook = function (obj, index) {
  const html = ` <div class="book" data-index="${index}">
  <div class="book-content">
    <p class="title content">Title: ${obj.title}</p>
    <p class="author content">Author:${obj.author}</p>
    <p class="pages-num content">Pages:${obj.pageNum}</p>

    <div class="buttons">
      <button class="read-button main-btn" data-read="unread">Read</button>
      <button class="remove-button main-btn">Remove</button>
    </div>
  </div>
</div>`;
  booksShell.insertAdjacentHTML("afterbegin", html);
};

const toggleRead = function (button) {
  const readState = button.dataset.read;
  button.dataset.read = readState === "read" ? "unread" : "read";
  button.style.backgroundColor =
    readState === "read" ? "rgb(128, 197, 131)" : "rgb(128, 168, 197)";
  button.innerHTML = readState;
};

//Event Listeners
addBtn.addEventListener("click", showModal);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
});

const removeAndReadBook = function (e) {
  booksShell.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-button")) {
      const bookContainer = e.target.closest(".book");
      const indexToRemove = bookContainer.dataset.index;

      // Remove from myLibrary
      myLibrary.splice(indexToRemove, 1);

      // Remove from the web page
      bookContainer.remove();
      console.log(myLibrary);
    }

    if (e.target.classList.contains("read-button")) {
      toggleRead(e.target);
    }
  });
};
removeAndReadBook();
