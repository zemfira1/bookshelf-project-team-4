import axios from "axios";

const jsBooks = document.querySelector(".js-books");
const popupModalBackground = document.querySelector(".popup-modal-background");
const popupModalCloseButton = document.querySelector(".popup-modal-close-button");
const bookImage = document.querySelector(".book-image");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookDescription = document.querySelector(".book-description");
const addToListButton = document.querySelector(".add-to-list-button");
const amazonLink = document.querySelector(".amazon-link");
const bookshopLink = document.querySelector(".bookshop-link");
const applebooksLink = document.querySelector(".applebooks-link");

let bookData;
let bookShopingList = JSON.parse(localStorage.getItem("bookShopingListLS")) || [];

jsBooks.addEventListener("click", openPopupModal);
popupModalCloseButton.addEventListener("click", closePopupModal);
popupModalBackground.addEventListener("click", event => {
  if (event.target.classList.contains("popup-modal-background")) {
    closePopupModal();
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePopupModal();
  }
});


async function openPopupModal(event) {
  event.preventDefault();
  try {
    bookData = await getBookInfo(event.target.parentNode.dataset.bookid);
    popupModalBackground.classList.replace("hidden", "visible");
    bookImage.setAttribute("src", bookData.book_image);
    bookImage.setAttribute("alt", bookData.title);
    bookTitle.textContent = bookData.title;
    bookAuthor.textContent = bookData.author;
    bookDescription.textContent = bookData.description;
    const amazonURL = bookData.buy_links.find((buyLink) => buyLink.name === "Amazon").url;
    const bookshopURL = bookData.buy_links.find((buyLink) => buyLink.name === "Bookshop").url;
    const applebooksURL = bookData.buy_links.find((buyLink) => buyLink.name === "Apple Books").url;
    amazonLink.setAttribute("href", amazonURL);
    bookshopLink.setAttribute("href", bookshopURL);
    applebooksLink.setAttribute("href", applebooksURL);
    bookPresenseCheck();

  }
  catch {
    console.log("Error");
  }
}


function closePopupModal() {
  popupModalBackground.classList.replace("visible", "hidden");
}


async function getBookInfo(bookId) {
  const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
  return await response.data;
}


function bookPresenseCheck() {
  console.log(bookShopingList);
  if (bookShopingList.some((book) => book._id === bookData._id)) {
    addToListButton.removeEventListener("click", addToListFunction);
    addToListButton.addEventListener("click", removeFromListFunction);
    addToListButton.textContent = "REMOVE FROM SHOPING LIST";
  }
  else {
    addToListButton.removeEventListener("click", removeFromListFunction);
    addToListButton.addEventListener("click", addToListFunction);
    addToListButton.textContent = "ADD TO SHOPING LIST";
  }
  localStorage.setItem("bookShopingListLS", JSON.stringify(bookShopingList));
}


function addToListFunction() {
  console.log("Added!");
  bookShopingList.push(bookData);
  bookPresenseCheck();
}


function removeFromListFunction() {
  console.log("Removed!");
  bookShopingList = bookShopingList.filter((book) => book._id !== bookData._id);
  bookPresenseCheck();
}


