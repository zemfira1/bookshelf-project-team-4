var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=o.parcelRequire0232;function a(){let o=localStorage.getItem("bookShopingListLS");return o?JSON.parse(o):[]}function t(){let o=a(),e=document.querySelector(".js-books.shop"),i=document.querySelector(".empty-shopping-list-div");if(0===o.length)i.style.display="block",e.innerHTML="";else{let s=o.map(o=>(function(o){let{book_image:e,title:i,list_name:s,description:a,author:t,buy_links:n,_id:r}=o;return`<div class="book-card">
  <img class="book-card-image" src="${e}" alt="${i}" />
  <div class="book-card-info">
    <div class="book-card-hero">
      <div class="book-card-title+cat">
        <h3 class="book-card-title">${i}</h3>
        <p class="book-card-category">${s}</p>
      </div>
      <button class="book-card-remove" data-bookid="${r}">
        <svg class="book-card-remove-icon" width="34" height="34">
          <use href="/sprite.f14d31f7.svg#icon-trash-03"></use>
        </svg>
      </button>
    </div>
    <p class="book-card-description">${a}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${t}</p>
      <ul class="book-card-links">
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Amazon"===o.name).url}">
            <img class="img-shoplist-cards-amazon" srcset="/amazon-1x-min.07b88612.png 1x, /amazon-2x-min.44eeea63.png 2x" 
            src="/amazon-1x-min.07b88612.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Apple Books"===o.name).url}">
            <img class="img-shoplist-cards" srcset="/openbook-1x-min.cb403ab2.png 1x, /openbook-2x-min.fe84158a.png 2x" 
            src="/openbook-1x-min.cb403ab2.png" alt="icon" srcset="" />
          </a>
        </li>
        <li class="book-card-item">
          <a class="book-card-link" href="${n.find(o=>"Bookshop"===o.name).url}">
            <img class="img-shoplist-cards" srcset="/bookshop-1x-min.064258f5.png 1x, /bookshop-2x-min.f9eb0e06.png 2x" 
            src="/bookshop-1x-min.064258f5.png" alt="icon" srcset="" />
          </a>
        </li>
     
      </ul>
    </div>
  </div>
</div>`})(o)).join("");e.innerHTML=s,i.style.display="none"}}null==s&&((s=function(o){if(o in e)return e[o].exports;if(o in i){var s=i[o];delete i[o];var a={id:o,exports:{}};return e[o]=a,s.call(a.exports,a,a.exports),a.exports}var t=Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(o,e){i[o]=e},o.parcelRequire0232=s),s("48nW0"),s("iuRNH"),s("dTazW"),s("c4xQB"),document.addEventListener("DOMContentLoaded",t),document.addEventListener("click",function(o){if(o.target.classList.contains("book-card-remove")){let e=o.target.getAttribute("data-bookid");(function(o){let e=a(),i=e.filter(e=>e._id!==o);localStorage.setItem("bookShopingListLS",JSON.stringify(i)),t()})(e)}}),s("bUb57");
//# sourceMappingURL=shopping-list.233aedf6.js.map
