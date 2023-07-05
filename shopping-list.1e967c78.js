function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequire0232;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},t.parcelRequire0232=i),i.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return r},function(e){return r=e}),e(o.exports,"resolve",function(){return n},function(e){return n=e});var r,n,i={};r=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)i[o[t]]=e[o[t]]},n=function(e){var o=i[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),i("kyEFX").register(JSON.parse('{"iYQha":"shopping-list.1e967c78.js","6Xdw9":"amazon-1x-min.8c21baec.png","baCd6":"amazon-2x-min.0069dc96.png","cc4rM":"openbook-1x-min.a9f158e0.png","5kIq2":"openbook-2x-min.16cfa35b.png","4oIIU":"bookshop-1x-min.a446a613.png","aZh2v":"bookshop-2x-min.b9dbc8f6.png","cUzvb":"shopping-list.115c89db.js","l3Aiw":"shopping-list.42a26c71.js"}')),i("48nW0"),i("iuRNH"),i("dTazW"),i("c4xQB");var a={};a=new URL(i("kyEFX").resolve("6Xdw9"),import.meta.url).toString();var s={};s=new URL(i("kyEFX").resolve("baCd6"),import.meta.url).toString();var l={};l=new URL(i("kyEFX").resolve("cc4rM"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("5kIq2"),import.meta.url).toString();var d={};d=new URL(i("kyEFX").resolve("4oIIU"),import.meta.url).toString();var u={};function p(){let e=localStorage.getItem("bookShopingListLS");return e?JSON.parse(e):[]}function b(){let e=p(),t=document.querySelector(".js-books.shop"),r=document.querySelector(".empty-shopping-list-div");if(0===e.length)r.style.display="block",t.innerHTML="";else{let n=e.map(e=>(function(e){let{book_image:t,title:r,list_name:n,description:i,author:p,buy_links:b,_id:g}=e;return`<div class="book-card">
  <img class="book-card-image" src="${t}" alt="${r}" />
  <div class="book-card-info">
    <div class="book-card-hero">
      <div class="book-card-title+cat">
        <h3 class="book-card-title">${r}</h3>
        <p class="book-card-category">${n}</p>
      </div>
      <button class="book-card-remove" data-bookid="${g}">
        <svg class="book-card-remove-icon" width="34" height="34">
          <use href="/sprite.f14d31f7.svg#icon-trash-03"></use>
        </svg>
      </button>
    </div>
    <p class="book-card-description">${i}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${p}</p>
      <div class="book-card-links">
        <a class="amazon-link" href="#">
              <img
                class="change-color add-hover"
                srcset="
                  ${o(a)} 1x,
                  ${o(s)} 2x
                "
                src="${o(a)}"
                alt="Amazon Logo"
              />
            </a>
            <a class="applebooks-link" href="#">
              <img
                class="change-color"
                srcset="
                  ${o(l)} 1x,
                  ${o(c)} 2x
                "
                src="${o(l)}"
                alt="Openbook Logo"
              />
            </a>
            <a class="bookshop-link" href="#">
              <img
                class="change-color"
                srcset="
                  ${o(d)} 1x,
                  ${o(u)} 2x
                "
                src="${o(d)}"
                alt="Bookshop Logo"
              />
            </a>     
      </div>
    </div>
  </div>
</div>`})(e)).join("");t.innerHTML=n,r.style.display="none"}}u=new URL(i("kyEFX").resolve("aZh2v"),import.meta.url).toString(),document.addEventListener("DOMContentLoaded",b),document.addEventListener("click",function(e){if(e.target.classList.contains("book-card-remove")){let o=e.target.getAttribute("data-bookid");(function(e){let o=p(),t=o.filter(o=>o._id!==e);localStorage.setItem("bookShopingListLS",JSON.stringify(t)),b()})(o)}}),i("bUb57");
//# sourceMappingURL=shopping-list.1e967c78.js.map
