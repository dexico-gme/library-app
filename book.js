let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const book1 = new Book("the hobbit", "tolkein", "294", "no");
const book2 = new Book("catcher in the rye", "jd salinger", "180", "no");

console.log(book1.info());

console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.valueOf());

addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(myLibrary);

// document.getElementById("table").insertRow(-1);
function displayBook() {
  let table = document.getElementById("table");
  table.innerHTML = `
  <th>Book</th>
  <th>Author</th>
  <th>Pages</th>
  <th>Read</th>`;
  for (let x = 0; x < myLibrary.length; x++) {
    let title = myLibrary[x].title;
    let titleTrim = title.split(" ").join("");
    console.log(typeof titleTrim);
    this.title = title;
    this.titleTrim = titleTrim;
    console.log(`title trim: ${titleTrim}`);
    // let table = document.getElementById("table");
    const row = document.createElement("tr");
    const cell0 = document.createElement("td");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    table.appendChild(row);
    table.appendChild(cell0).innerHTML = `${myLibrary[x].title}`;
    table.appendChild(cell1).innerHTML = `${myLibrary[x].author}`;
    table.appendChild(cell2).innerHTML = `${myLibrary[x].pages}`;
    table.appendChild(cell3).innerHTML = `${myLibrary[x].read}`;
    table.appendChild(
      cell4
    ).innerHTML = `<button id="row${x}" onclick="removeBook(${x})">remove book</button>`;
  }
}

document.getElementById("addABook").addEventListener("click", hi);

const form = document.getElementById("submitBook");

displayBook();

function removeBook(x) {
  console.log(x);
  myLibrary.splice(x, 1);
  console.log(myLibrary);
  displayBook();
}

function hi() {
  let title = form.elements["title"].value;
  let author = form.elements["author"].value;
  let pages = form.elements["pages"].value;
  let read = form.elements["read"].value;
  console.log(`${title}, ${author}, ${pages}, ${read}`);
  let book3 = new Book(title, author, pages, read);
  addBookToLibrary(book3);
  displayBook();
}
