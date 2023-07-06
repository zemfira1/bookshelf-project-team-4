import BookShelf from './bookshelf-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { showLoader, hideLoader } from './exp-func';
import iconUp from '../images/sprite.svg';

const STORAGE_KEY_TOP_BOOKS = 'top-books-response';

const refs = {
  books: document.querySelector('.js-books'),
  title: document.querySelector('.best-sellers'),
  section: document.querySelector('.section.pos-scroll'),
};

const markUpBtnScroll = `<button id="btnToTop" class="scroll-btn scrollToTop">
    <a href="#top">
      <svg class="scroll-to-up" width="54" height="54">
        <use href="${iconUp}#icon-up"></use>
      </svg>
    </a>
  </button>
`;

let viewportWidth = window.innerWidth;
let countColumn;

if (viewportWidth >= 1440) {
  countColumn = 5;
} else if (viewportWidth >= 768) {
  countColumn = 3;
} else {
  countColumn = 1;
}

window.addEventListener('resize', () => {
  let countCard = countColumn;
  if (window.innerWidth <= 767 && countCard !== 1) {
    countColumn = 1;
    if (refs.title.textContent.trim() === 'Best Sellers Books') {
      changeMarkUp(countColumn);
    }
    return;
  }
  if (
    window.innerWidth >= 768 &&
    window.innerWidth <= 1439 &&
    countCard !== 3
  ) {
    countColumn = 3;
    if (refs.title.textContent.trim() === 'Best Sellers Books') {
      changeMarkUp(countColumn);
    }
    return;
  }
  if (window.innerWidth >= 1440 && countCard !== 5) {
    countColumn = 5;
    if (refs.title.textContent.trim() === 'Best Sellers Books') {
      changeMarkUp(countColumn);
    }
    return;
  }
  return;
});

const request = new BookShelf();
request.param = 'top-books';

innerMarkUp(countColumn);

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
    showLoader('.books .loader');
    const response = await fetchTopBooks();
    sessionStorage.setItem(STORAGE_KEY_TOP_BOOKS, JSON.stringify(response));
    hideLoader('.books .loader');
  } catch (error) {
    Notify.failure(error.message);
    return `<div class="error-block">
    <p>Sorry, an error occurred!</p>
    <img src="./images/crash.jpg" alt="Empty block"  width="360" height="300">    </div>`;
  }
}

async function createMarkUpTopBooks(countCard) {
  try {
    await addMarkupTopBooks();
    const response = JSON.parse(sessionStorage.getItem(STORAGE_KEY_TOP_BOOKS));

    const markUp = response
      .map(({ list_name, books }) => {
        const title = `<div class="one-category"><h2 class="topbook-title">${list_name}</h2><ul class="topbooks-list">`;
        let itemBook = '';
        for (let i = 0; i < countCard; i += 1) {
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
    return `<div class="error-block">
    <p>Sorry, an error occurred!</p>
    <img src="./images/crash.jpg" alt="Empty block"  width="360" height="300">    </div>`;
  }
}

async function innerMarkUp(countCard) {
  try {
    const markUp = await createMarkUpTopBooks(countCard);
    refs.books.innerHTML = markUp;
    refs.section.insertAdjacentHTML('beforeend', markUpBtnScroll);
    refs.books.addEventListener('click', onClickSeeMore);
  } catch (error) {
    Notify.failure(error.message);
    refs.books.innerHTML = `<div class="error-block">
    <p>Sorry, an error occurred!</p>
    <img src="./images/crash.jpg" alt="Empty block"  width="360" height="300">    </div>`;
  }
}

function changeMarkUp(countCard) {
  const arrBooks = JSON.parse(sessionStorage.getItem(STORAGE_KEY_TOP_BOOKS));

  const markUp = arrBooks
    .map(({ list_name, books }) => {
      const title = `<div class="one-category"><h2 class="topbook-title">${list_name}</h2><ul class="topbooks-list">`;
      let itemBook = '';
      for (let i = 0; i < countCard; i += 1) {
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
  refs.books.innerHTML = markUp;
}

export default async function onClickSeeMore(e) {
  e.preventDefault();
  if (!e.target.classList.contains('btn-category')) {
    return;
  }
  try {
    const title =
      e.target.parentNode.parentNode.querySelector(
        '.topbook-title'
      ).textContent;

    const arrTitle = title.split(' ');
    const startTitle = arrTitle
      .filter((el, idx) => idx < arrTitle.length - 1)
      .join(' ');
    const endTitle = arrTitle[arrTitle.length - 1];
    refs.title.innerHTML = `${startTitle} <span class="title-color">${endTitle}</span>`;
    const currentCategory = document.querySelector('.current-category');
    const newCurrentCategory = document.querySelector(
      `.category-link-text[data-name="${title}"]`
    );
    if (currentCategory) {
      currentCategory.classList.remove('current-category');
    }
    newCurrentCategory.classList.add('current-category');
    const param = `category?category=${title}`;
    request.param = param;
    showLoader('.books .loader');
    const markUp = await addMarkupCategoryBooks();
    refs.books.innerHTML = markUp;
    hideLoader('.books .loader');
    refs.books.removeEventListener('click', onClickSeeMore);
    window.scroll(0, 0);
  } catch (error) {
    Notify.failure(error.message);
    refs.books.innerHTML = `<div class="error-block">
    <p>Sorry, an error occurred!</p>
    <img src="./images/crash.jpg" alt="Empty block"  width="360" height="300">    </div>`;
  }
}

async function addMarkupCategoryBooks() {
  try {
    const response = await fetchTopBooks();

    const headMarkup = `<div class="one-category"><ul class="topbooks-list">`;
    const listBook = response
      .map(({ _id, book_image, title, author }) => {
        return `<li class="book-item">
          <a class="book-item-link" href="#" data-bookid="${_id}">  
            <img class="book-item-img" src="${book_image}" alt="${title}" loading="lazy">
            <p class="book-title">${title}</p>
            <p class="book-author">${author}</p>
          </a>
        </li>
        `;
      })
      .join('');
    const markUp = headMarkup + listBook + '</ul></div>';
    return markUp;
  } catch (error) {
    Notify.failure(error.message);
    return `<div class="error-block">
    <p>Sorry, an error occurred!</p>
    <img src="./images/crash.jpg" alt="Empty block"  width="360" height="300">    </div>`;
  }
}

export { countColumn };
