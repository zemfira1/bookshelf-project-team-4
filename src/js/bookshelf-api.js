import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export default class BookShelf {
  constructor() {
    this.requestParam = '';
    this.options = {
      headers: {
        accept: 'application/json',
      },
    };
  }

  async getRequest() {
    const response = await axios.get(`${BASE_URL}${this.param}`, this.options);
    return response;
  }

  get param() {
    return this.requestParam;
  }

  set param(newParam) {
    this.requestParam = newParam;
  }
}
