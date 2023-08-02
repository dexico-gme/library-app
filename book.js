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
  for (let x = 0; x < myLibrary.length; x++) {
    let title = myLibrary[x].title;
    let titleTrim = title.split(" ").join("");
    console.log(typeof titleTrim);
    this.title = title;
    this.titleTrim = titleTrim;
    document.getElementById("table").innerHTML += `
<tr id="${titleTrim}"><td>${myLibrary[x].title}</td>
<td>${myLibrary[x].author}</td>
<td>${myLibrary[x].pages}</td>
<td>${myLibrary[x].read}</td>
<td><button id="row${x}" onclick="removeBook(row${x})">remove book</button></td>
</tr>`;
  }
}

console.log("done");

document.getElementById("addABook").addEventListener("click", hi);

const form = document.getElementById("submitBook");

let titlePrint = form.elements["title"].value;

// let titleVal = formTitle.value;
// console.log(titleVal);

let formAuthor = document.getElementById("author").value;
console.log(formAuthor);

// let book = new Book(formTitle);

displayBook();

function removeBook(x) {
  console.log(x);
  // let elementIndex = document.getElementById(`"${row}"`);
  // elementIndex.remove();
  // const table = document.getElementById("table");
  // table.deleteRow(elementIndex);
  console.log("done");
}

function hi() {
  let title = form.elements["title"].value;
  let author = form.elements["author"].value;
  let pages = form.elements["pages"].value;
  let read = form.elements["read"].value;
  console.log(`${title}, ${author}, ${pages}, ${read}`);
  let book3 = new Book(title, author, pages, read);
  addBookToLibrary(book3);
  let position = myLibrary.length - 1;
  let libLength = myLibrary.length;
  let titleTrim = title.split(" ").join("");
  console.log(titleTrim);
  document.getElementById("table").innerHTML += `
<tr id="${titleTrim}"><td id="Row">${title}</td>
<td>${author}</td>
<td>${pages}</td>
<td>${read}</td>
<td><button id="row${position}" onclick="removeBook(${titleTrim})">remove book</button></td>
</tr>`;
}
