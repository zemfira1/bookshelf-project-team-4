!function(){function n(n,e,o,t){Object.defineProperty(n,e,{get:o,set:t,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=o.parcelRequire0232;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in r){var e=r[n];delete r[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){r[n]=e},o.parcelRequire0232=i),i.register("iE7OH",function(e,o){"use strict";n(e.exports,"register",function(){return t},function(n){return t=n}),n(e.exports,"resolve",function(){return r},function(n){return r=n});var t,r,i={};t=function(n){for(var e=Object.keys(n),o=0;o<e.length;o++)i[e[o]]=n[e[o]]},r=function(n){var e=i[n];if(null==e)throw Error("Could not resolve bundle with id "+n);return e}}),i.register("aNJCr",function(e,o){n(e.exports,"getBundleURL",function(){return t},function(n){return t=n});"use strict";var t,r={};t=function(n){var e=r[n];return e||(e=function(){try{throw Error()}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(n)return(""+n[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[n]=e),e}}),i("iE7OH").register(JSON.parse('{"fiiPO":"shopping-list.018692f1.js","kmBaM":"amazon-1x-min.8c21baec.png","lhukd":"amazon-2x-min.0069dc96.png","66ixL":"openbook-1x-min.a9f158e0.png","8NGYt":"openbook-2x-min.16cfa35b.png","cuoci":"bookshop-1x-min.a446a613.png","3eJH6":"bookshop-2x-min.b9dbc8f6.png","1Q36U":"shopping-list.61f304ed.js","ivlKJ":"shopping-list.bf6f2919.js"}')),i("g6ZeJ"),i("8e9SS"),i("xpKCW"),i("iNcuh");var a={};a=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("kmBaM");var c={};c=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("lhukd");var s={};s=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("66ixL");var l={};l=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("8NGYt");var d={};d=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("cuoci");var u={};function f(){var n=localStorage.getItem("bookShopingListLS");return n?JSON.parse(n):[]}function p(){var n=f(),o=document.querySelector(".js-books.shop"),t=document.querySelector(".empty-shopping-list-div");if(0===n.length)t.style.display="block",o.innerHTML="";else{var r=n.map(function(n){var o,t,r,i,f,p;return o=n.book_image,t=n.title,r=n.list_name,i=n.description,f=n.author,n.buy_links,p=n._id,'<div class="book-card">\n  <img class="book-card-image" src="'.concat(o,'" alt="').concat(t,'" />\n  <div class="book-card-info">\n    <div class="book-card-hero">\n      <div class="book-card-title+cat">\n        <h3 class="book-card-title">').concat(t,'</h3>\n        <p class="book-card-category">').concat(r,'</p>\n      </div>\n      <button class="book-card-remove" data-bookid="').concat(p,'">\n        <svg class="book-card-remove-icon" width="28" height="28">\n          <use href="/sprite.f14d31f7.svg#icon-trash-03"></use>\n        </svg>\n      </button>\n    </div>\n    <p class="book-card-description">').concat(i,'</p>\n    <div class="book-card-footer">\n      <p class="book-card-author">Author: ').concat(f,'</p>\n      <div class="book-card-links">\n        <a class="amazon-link" target="_blank">\n              <img\n                class="change-color add-hover"\n                srcset="\n                  ').concat(e(a)," 1x,\n                  ").concat(e(c),' 2x\n                "\n                src="').concat(e(a),'"\n                alt="Amazon Logo"\n              />\n            </a>\n            <a class="applebooks-link" target="_blank">\n              <img\n                class="change-color"\n                srcset="\n                  ').concat(e(s)," 1x,\n                  ").concat(e(l),' 2x\n                "\n                src="').concat(e(s),'"\n                alt="Openbook Logo"\n              />\n            </a>\n            <a class="bookshop-link" target="_blank">\n              <img\n                class="change-color"\n                srcset="\n                  ').concat(e(d)," 1x,\n                  ").concat(e(u),' 2x\n                "\n                src="').concat(e(d),'"\n                alt="Bookshop Logo"\n              />\n            </a>     \n      </div>\n    </div>\n  </div>\n</div>')}).join("");o.innerHTML=r,t.style.display="none"}}u=i("aNJCr").getBundleURL("fiiPO")+i("iE7OH").resolve("3eJH6"),document.querySelector(".amazon-link"),document.querySelector(".bookshop-link"),document.querySelector(".applebooks-link"),document.addEventListener("DOMContentLoaded",p),document.addEventListener("click",function(n){var e,o;n.target.classList.contains("book-card-remove")&&(e=n.target.getAttribute("data-bookid"),o=f().filter(function(n){return n._id!==e}),localStorage.setItem("bookShopingListLS",JSON.stringify(o)),p())}),i("i8Q71")}();
//# sourceMappingURL=shopping-list.018692f1.js.map