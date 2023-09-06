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

const book1 = new Book("the hobbit", "tolkein", "294", "yes");
const book2 = new Book("catcher in the rye", "jd salinger", "180", "no");

console.log(book1.info());

console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.valueOf());

addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(myLibrary);

function displayBook() {
  let table = document.getElementById("table");
  table.innerHTML = `
  <th>Book</th>
  <th>Author</th>
  <th>Pages</th>
  <th>Read</th>
  <th>Remove</th>`;
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
    table.appendChild(
      cell3
    ).innerHTML = `<button id="read" onclick="readBtn(${x})">${myLibrary[x].read}</button>`;
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
  //modal.style.display = "none";
}

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-book-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("read").addEventListener("click", readBtn);

function readBtn(y) {
  if (myLibrary[y].read == "yes") {
    myLibrary[y].read = "no";
    console.log("no");
    console.log(myLibrary);
  } else {
    myLibrary[y].read = "yes";
    console.log("yes");
    console.log(myLibrary);
  }
  displayBook();
  console.log(myLibrary);
  console.log("fun!");
}
