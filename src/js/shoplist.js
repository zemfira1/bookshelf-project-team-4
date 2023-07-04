function getSavedBooks() {
  const savedBooks = localStorage.getItem('bookShopingListLS');
  if (savedBooks) {
    return JSON.parse(savedBooks);
  }
  return [];
}

function generateBookCard(book) {
  const { book_image, title, list_name, description, author, buy_links, _id } =
    book;
  return `<div class="book-card">
  <img class="book-card-image" src="${book_image}" alt="${title}" />
  <div class="book-card-info">
    <div class="book-card-hero">
      <div class="book-card-title+cat">
        <h3 class="book-card-title">${title}</h3>
        <p class="book-card-category">${list_name}</p>
      </div>
      <button class="book-card-remove" data-bookid="${_id}">
        <svg class="book-card-remove-icon" width="34" height="34">
          <use href="/sprite.f14d31f7.svg#icon-trash-03"></use>
        </svg>
      </button>
    </div>
    <p class="book-card-description">${description}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${author}</p>
      <ul class="book-card-links">
        <li class="book-card-item">
          <a class="book-card-link" href="${
            buy_links.find(buyLink => buyLink.name === 'Amazon').url
          }">
            <img class="img-shoplist-cards-amazon" srcset="/amazon-1x-min.07b88612.png 1x, /amazon-2x-min.44eeea63.png 2x" 
            src="/amazon-1x-min.07b88612.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${
            buy_links.find(buyLink => buyLink.name === 'Apple Books').url
          }">
            <img class="img-shoplist-cards" srcset="/openbook-1x-min.cb403ab2.png 1x, /openbook-2x-min.fe84158a.png 2x" 
            src="/openbook-1x-min.cb403ab2.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${
            buy_links.find(buyLink => buyLink.name === 'Bookshop').url
          }">
            <img class="img-shoplist-cards" srcset="/bookshop-1x-min.064258f5.png 1x, /bookshop-2x-min.f9eb0e06.png 2x" 
            src="/bookshop-1x-min.064258f5.png" alt="icon" srcset="" />
          </a>
        </li>
     
      </ul>
    </div>
  </div>
</div>`;
}

function renderBooks() {
  const savedBooks = getSavedBooks();
  const booksContainer = document.querySelector('.js-books.shop');
  const emptyListImg = document.querySelector('.empty-shopping-list-div');

  if (savedBooks.length === 0) {
    emptyListImg.style.display = 'block';
    booksContainer.innerHTML = '';
  } else {
    const booksMarkup = savedBooks.map(book => generateBookCard(book)).join('');
    booksContainer.innerHTML = booksMarkup;
    emptyListImg.style.display = 'none';
  }
}

function handleRemoveBook(event) {
  if (event.target.classList.contains('book-card-remove')) {
    const bookId = event.target.getAttribute('data-bookid');
    removeBookFromList(bookId);
  }
}

function removeBookFromList(bookId) {
  const savedBooks = getSavedBooks();
  const updatedBooks = savedBooks.filter(book => book._id !== bookId);
  localStorage.setItem('bookShopingListLS', JSON.stringify(updatedBooks));
  renderBooks();
}

document.addEventListener('DOMContentLoaded', renderBooks);

document.addEventListener('click', handleRemoveBook);
