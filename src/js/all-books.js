import BookShelf from './bookshelf-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { showLoader, hideLoader } from './exp-func';

const refs = {
  books: document.querySelector('.js-books'),
};

let viewportWidth = window.innerWidth;
let countColumn;

if (viewportWidth >= 1440) {
  countColumn = 5;
} else if (viewportWidth >= 768) {
  countColumn = 3;
} else {
  countColumn = 1;
}

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
        const title = `<div class="one-category"><h3 class="topbook-title">${list_name}</h3><ul class="topbooks-list">`;
        let itemBook = '';
        for (let i = 0; i < countColumn; i += 1) {
          itemBook += `<li class="book-item">
          <a class="book-item-link" href="#" data-bookid="${books[i]._id}">  
            <img class="book-item-img" src="${books[i].book_image}" alt="${books[i].title}" loading="lazy">
            <p class="book-title">${books[i].title}</p>
            <p class="book-author">${books[i].author}</p>
          </a>
        </li>
        `;
        }
        const markUp =
          title +
          itemBook +
          '</ul><div class="btn-div" ><button type="button" class="btn-category" data-open-category>see more</button></div></div>';
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

showLoader('.books .loader');
addMarkupTopBooks()
  .then(markUp => {
    refs.books.innerHTML = markUp;
    hideLoader('.books .loader');
  })
  .catch(error => {
    Notify.failure(error.message);
    refs.categoryList.innerHTML = `<div>
    <p>Sorry, an error occurred!</p>
    <img src="#" alt="Empty block">
    </div>`;
  });
