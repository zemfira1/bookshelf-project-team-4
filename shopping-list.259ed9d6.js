var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=o.parcelRequire0232;function t(){let o=localStorage.getItem("bookShopingListLS");return o?JSON.parse(o):[]}function a(){let o=t(),e=document.querySelector(".js-books.shop"),i=document.querySelector(".empty-shopping-list-div");if(0===o.length)i.style.display="block",e.innerHTML="";else{let s=o.map(o=>(function(o){let{book_image:e,title:i,list_name:s,description:t,author:a,buy_links:n,_id:l}=o;return`<div class="book-card">
  <img class="book-card-image" src="${e}" alt="${i}" />
  <div class="book-card-info">
    <div class="book-card-hero">
      <div class="book-card-title+cat">
        <h3 class="book-card-title">${i}</h3>
        <p class="book-card-category">${s}</p>
      </div>
      <button class="book-card-remove" data-bookid="${l}">
        <svg class="book-card-remove-icon" width="34" height="34">
          <use href="./images/sprite.svg#icon-trash"></use>
        </svg>
      </button>
    </div>
    <p class="book-card-description">${t}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${a}</p>
      <ul class="book-card-links">
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Amazon"===o.name).url}">
            <img src="./images/amazon-1x-min.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Apple Books"===o.name).url}">
            <img src="./images/openbook-1x-min.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Bookshop"===o.name).url}">
            <img src="./images/bookshop-1x-min.png" alt="icon" srcset="" />
          </a>
        </li>
     
      </ul>
    </div>
  </div>
</div>`})(o)).join("");e.innerHTML=s,i.style.display="none"}}null==s&&((s=function(o){if(o in e)return e[o].exports;if(o in i){var s=i[o];delete i[o];var t={id:o,exports:{}};return e[o]=t,s.call(t.exports,t,t.exports),t.exports}var a=Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,e){i[o]=e},o.parcelRequire0232=s),s("48nW0"),s("iuRNH"),s("dTazW"),s("c4xQB"),document.addEventListener("DOMContentLoaded",a),document.addEventListener("click",function(o){if(o.target.classList.contains("book-card-remove")){let e=o.target.dataset.bookid;console.log("bookremove",e),function(o){let e=t();console.log(e);let i=e.filter(e=>e._id!==o);console.log(i),localStorage.setItem("bookShopingListLS",JSON.stringify(i)),a()}(e)}}),s("bUb57");
//# sourceMappingURL=shopping-list.259ed9d6.js.map
