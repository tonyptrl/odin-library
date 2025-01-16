const myLibrary = [
  {title: '50th law', author: 'Robert Greene', pages: '350', status: 'read'},
  {title: 'Atomic Habits', author: 'James Clear', pages: '320', status: 'not read'}
];

function Book() {
  // the constructor...
}

function addBookToLibrary(bookTitle, author, pages, status) {
  myLibrary.push({
    title: bookTitle,
    author: author,
    pages: pages,
    status: status
  });
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
    <button class="delete-button">delete</div>
    `;

    container.appendChild(card);
  };

};

displayBooks();

//addBookToLibrary('50th law', 'Robert Greene', '350', 'read');
//addBookToLibrary('51th law', 'Robert Greene', '350', 'read');

    /*
    function Book(name, author, pages, status) {
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.status = status;
      this.info = function() {
        return(`${this.name}, by ${this.author}, ${this.pages} pages, ${this.status}`);
      };
    };

    const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
    console.log(theHobbit.info());
    */