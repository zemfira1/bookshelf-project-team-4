import BookShelf from './bookshelf-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  books: document.querySelector('.js-books'),
};

let viewportWidth = window.innerWidth;
console.log(viewportWidth);
let countColumn;

if (viewportWidth >= 1440) {
  countColumn = 5;
} else if (viewportWidth >= 768) {
  countColumn = 3;
} else {
  countColumn = 1;
}

console.log(countColumn);

const request = new BookShelf();
request.param = 'top-books';

async function fetchTopBooks() {
  try {
    const response = await request.getRequest();
    if (!response.data) {
      Notify.warning('Sorry, an error occurred!');
      return [];
    }
    if (response.data.length === 0) {
      Notify.warning('Sorry, the search result is empty!');
      return response.data;
    }
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
    return [];
  }
}

async function addMarkupTopBooks() {
  try {
    const response = await fetchTopBooks();

    const markUp = response
      .map(({ list_name, books }) => {
        const title = `<h3 class="topbook-title">${list_name}</h3><ul class="topbooks-list">`;
        const itemBook = '';
        for (let i = 0; i < countColumn; i += 1) {
          itemBook += `<li class="book-item">
      <img src="${books[i].book_image}" alt="${books[i].title}">
      <p class="book-title">${books[i].title}</p>
      <p class="book-title">${books[i].author}</p>
      </li>
      `;
        }
        const markUp = title + itemBook + '</ul>';
        return markUp;
      })
      .join('');
    return markUp;
  } catch (error) {
    Notify.failure(error.message);
    return `<div>
    <p>Sorry, an error occurred!</p>
    <img src="#" alt="Empty block">
    </div>`;
  }
}
