function getSavedBooks() {
  const savedBooks = localStorage.getItem('shoppingList');
  if (savedBooks) {
    return JSON.parse(savedBooks);
  }
  return [];
}

function generateBookCard(book) {
  const { image, title, category, description, author, links } = book;

  const linksMarkup = links
    .map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`)
    .join('');

  return `
    <div class="book-card">
      <img class="book-card-image" src="${image}" alt="${title}">
      <h3 class="book-card-title">${title}</h3>
      <p class="book-card-category">${category}</p>
      <p class="book-card-description">${description}</p>
      <p class="book-card-author">Author: ${author}</p>
      <div class="book-card-links">${linksMarkup}</div>
      <button class="book-card-remove" data-bookid="${book.id}">Remove from Shopping List</button>
    </div>
  `;
}

function renderBooks() {
  const savedBooks = getSavedBooks();
  const booksContainer = document.querySelector('.js-books-container');
  const emptyListImg = document.querySelector('.empty-list-img');

  if (savedBooks.length === 0) {
    emptyListImg.style.display = 'block';
  } else {
    const booksMarkup = savedBooks.map(book => generateBookCard(book)).join('');
    booksContainer.innerHTML = booksMarkup;
    emptyListImg.style.display = 'none';
  }
}

function handleRemoveBook(event) {
  if (event.target.classList.contains('book-card-remove')) {
    const bookId = event.target.dataset.bookid;
    removeBookFromList(bookId);
  }
}

function removeBookFromList(bookId) {
  const savedBooks = getSavedBooks();
  const updatedBooks = savedBooks.filter(book => book.id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
  renderBooks();
}

document.addEventListener('DOMContentLoaded', renderBooks);

document.addEventListener('click', handleRemoveBook);
