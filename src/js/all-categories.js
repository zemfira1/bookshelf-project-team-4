import BookShelf from './bookshelf-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { showLoader, hideLoader } from './exp-func';

const refs = {
  categoryList: document.querySelector('.js-category-block'),
};

const request = new BookShelf();
request.param = 'category-list';

async function fetchCategoryList() {
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

async function addMarkupCategoryList() {
  try {
    const response = await fetchCategoryList();

    const markUp = response
      .map(({ list_name }) => {
        return `<li class="category-item">
      <a class="category-link" href="#">${list_name}</a></li>`;
      })
      .join('');
    return `<ul class="category-list">
      <li class="category-item current-category"><a class="category-link" href="#">All categories</a></li>
      ${markUp}
    </ul>`;
  } catch (error) {
    Notify.failure(error.message);
    return `<ul class="category-list">
      <li class="category-item current-category"><a href="#">All categories</a></li>
    </ul>`;
  }
}

showLoader('.categories .loader');
addMarkupCategoryList()
  .then(markUp => {
    refs.categoryList.innerHTML = markUp;
    hideLoader('.categories .loader');
  })
  .catch(error => {
    Notify.failure(error.message);
    refs.categoryList.innerHTML =
      '<ul class="category-list"><li class="category-item"><a href="#">All categories</a></li></ul>';
  });
