const myLibrary = [
  {title: '50th law', author: 'Robert Greene', pages: '350', status: 'read'},
  {title: 'Atomic Habits', author: 'James Clear', pages: '320', status: 'not read'}
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBooks();
};

const card = document.createElement('div');
card.className = 'card';

function displayBooks() {
  const container = document.getElementById('cardContainer');
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <div>${myLibrary[i].title}</div>
    <div>${myLibrary[i].author}</div>
    <div>${myLibrary[i].pages}</div>
    <div>${myLibrary[i].status}</div>
    <button class="delete-button-${[i]}">delete</div>
    `;

    container.appendChild(card);

    let delBtn = document.querySelector(`.delete-button-${[i]}`);
    delBtn.addEventListener('click', function() {
      myLibrary.splice([i], 1);
      displayBooks();
    });
  };
};

displayBooks();

const addBookBtn = document.querySelector('.add-book-button');
const dialog = document.getElementById('addBookDialog');

addBookBtn.addEventListener('click', function() {
  dialog.showModal();
});

const form = document.getElementById('addBookForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const status = form.status.value;

  addBookToLibrary(title, author, pages, status);
  dialog.close();
  form.reset();
});