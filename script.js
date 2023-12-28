const addBtn = document.querySelector(".add-button");

const myLibrary = [];

class Book {
  constructor(title, author, pageNum) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
  }
}
