import amazon1x from '../images/amazon-1x-min.png';
import amazon2x from '../images/amazon-2x-min.png';
import openbook1x from '../images/openbook-1x-min.png';
import openbook2x from '../images/openbook-2x-min.png';
import bookshop1x from '../images/bookshop-1x-min.png';
import bookshop2x from '../images/bookshop-2x-min.png';
import btnSvg from '../images/sprite.svg';

const amazonLink = document.querySelector('.amazon-link');
const bookshopLink = document.querySelector('.bookshop-link');
const applebooksLink = document.querySelector('.applebooks-link');

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
       <svg class="book-card-remove-icon" width="28" height="28" data-bookid="${_id}">
        <use data-name="book-card-remove" href="${btnSvg}#icon-trash-shop"></use>
      </svg>
      </button>
    </div>
    <p class="book-card-description">${description}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${author}</p>
      <div class="book-card-links">
        <a class="amazon-link" target="_blank" href="${
          buy_links.find(buyLink => buyLink.name === 'Amazon').url
        }">
              <img
                class="change-color fix-amazon add-hover"
                srcset="
                  ${amazon1x} 1x,
                  ${amazon2x} 2x
                "
                src="${amazon1x}"
                alt="Amazon Logo"
              />
            </a>
            <a class="applebooks-link" target="_blank" href="${
              buy_links.find(buyLink => buyLink.name === 'Apple Books').url
            }">
              <img
                class="change-color"
                srcset="
                  ${openbook1x} 1x,
                  ${openbook2x} 2x
                "
                src="${openbook1x}"
                alt="Openbook Logo"
              />
            </a>
            <a class="bookshop-link" target="_blank" href="${
              buy_links.find(buyLink => buyLink.name === 'Bookshop').url
            }">
              <img
                class="change-color"
                srcset="
                  ${bookshop1x} 1x,
                  ${bookshop2x} 2x
                "
                src="${bookshop1x}"
                alt="Bookshop Logo"
              />
            </a>     
      </div>
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
  if (
    event.target.classList.contains('book-card-remove') ||
    event.target.classList.contains('book-card-remove-icon') ||
    event.target.dataset.name === 'book-card-remove'
  ) {
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
