import BookShelf from './bookshelf-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { showLoader, hideLoader } from './exp-func';
import onClickSeeMore from './all-books';

const refs = {
  categoryList: document.querySelector('.js-category-block'),
  books: document.querySelector('.js-books'),
  title: document.querySelector('.best-sellers'),
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

refs.categoryList.addEventListener('click', onClickCategory);

const request = new BookShelf();

async function onClickCategory(e) {
  e.preventDefault();
  if (!e.target.classList.contains('category-link')) {
    return;
  }
  try {
    const param =
      e.target.textContent === 'All categories'
        ? 'top-books'
        : `category?category=${e.target.textContent}`;
    const currentCategory = e.currentTarget.querySelector('.current-category');
    request.param = param;
    showLoader('.books .loader');
    const markUp =
      param === 'top-books'
        ? await addMarkupTopBooks()
        : await addMarkupCategoryBooks();
    refs.books.innerHTML = markUp;
    hideLoader('.books .loader');
    if (currentCategory) {
      currentCategory.classList.remove('current-category');
    }
    e.target.classList.add('current-category');
    if (e.target.dataset.name === 'All categories') {
      refs.books.addEventListener('click', onClickSeeMore);
    } else {
      if (currentCategory.dataset.name === 'All categories') {
        refs.books.removeEventListener('click', onClickSeeMore);
      }
    }
  } catch (error) {
    Notify.failure(error.message);
    refs.categoryList.innerHTML = `<div>
    <p>Sorry, an error occurred!</p>
    <img src="#" alt="Empty block">
    </div>`;
  }
}

async function fetchCategoryBooks() {
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

async function addMarkupCategoryBooks() {
  try {
    const response = await fetchCategoryBooks();

    const title = response[0].list_name;
    const arrTitle = title.split(' ');
    const startTitle = arrTitle
      .filter((el, idx) => idx < arrTitle.length - 1)
      .join(' ');
    const endTitle = arrTitle[arrTitle.length - 1];
    refs.title.innerHTML = `${startTitle} <span class="title-color">${endTitle}</span>`;

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
    return `<div>
    <p>Sorry, an error occurred!</p>
    <img src="#" alt="Empty block">
    </div>`;
  }
}

async function addMarkupTopBooks() {
  try {
    const response = await fetchCategoryBooks();

    refs.title.innerHTML = `Best Sellers <span class="title-color">Books</span>`;

    const markUp = response
      .map(({ list_name, books }) => {
        const title = `<div class="one-category"><h2 class="topbook-title">${list_name}</h2><ul class="topbooks-list">`;
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
