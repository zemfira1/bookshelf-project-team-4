function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequire0232;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},r.parcelRequire0232=a),a.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"iYQha":"shopping-list.b4b66636.js","lp5u4":"sprite.7636c4fd.svg","gyO76":"support1.b4f98163.png","8Wb1D":"support2.0d52ab0e.png","9pPSV":"support3.b9e47787.png","gDOVv":"support4.ad00df9a.png","HH57P":"support5.a6a0e792.png","5odUD":"support6.d403ad4a.png","gpnD7":"support7.34630767.png","2xovY":"support8.6a395012.png","8AaKr":"support9.51a50c40.png","cwnzi":"support1-2x.0c82f30c.png","7HgjG":"support2-2x.fd97bd39.png","bnpDo":"support3-2x.005b167b.png","hhSt6":"support4-2x.0a5ea19b.png","9ZNUA":"support5-2x.91f63dad.png","ItJU9":"support6-2x.8d263817.png","lMzWz":"support7-2x.d5030078.png","69UQG":"support8-2x.f6fa8caf.png","7Byx0":"support9-2x.72d971ce.png","6Xdw9":"amazon-1x-min.8c21baec.png","baCd6":"amazon-2x-min.0069dc96.png","cc4rM":"openbook-1x-min.a9f158e0.png","5kIq2":"openbook-2x-min.16cfa35b.png","4oIIU":"bookshop-1x-min.a446a613.png","aZh2v":"bookshop-2x-min.b9dbc8f6.png"}')),window,o=document,localStorage.getItem("my_darkMode")&&(o.documentElement.className+=" darkmode"),function(e,t,o){t.querySelector(".switch").addEventListener("change",function(e){if(e.preventDefault(),t.documentElement.classList.toggle("darkmode"),t.documentElement.classList.contains("darkmode")){localStorage.setItem("my_darkMode",!0);return}localStorage.removeItem("my_darkMode")},!1)}(window,document),document.querySelector(".tab-hidden.ico-burger").addEventListener("click",function(){document.getElementById("burger-menu").classList.add("show")}),document.querySelector(".nav-burger").addEventListener("click",function(){document.getElementById("burger-menu").classList.remove("show")});var s={};s=new URL(a("kyEFX").resolve("gyO76"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("8Wb1D"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("9pPSV"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("gDOVv"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("HH57P"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("5odUD"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("gpnD7"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("2xovY"),import.meta.url).toString();var v={};v=new URL(a("kyEFX").resolve("8AaKr"),import.meta.url).toString();var k={};k=new URL(a("kyEFX").resolve("cwnzi"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("7HgjG"),import.meta.url).toString();var S={};S=new URL(a("kyEFX").resolve("bnpDo"),import.meta.url).toString();var b={};b=new URL(a("kyEFX").resolve("hhSt6"),import.meta.url).toString();var y={};y=new URL(a("kyEFX").resolve("9ZNUA"),import.meta.url).toString();var h={};h=new URL(a("kyEFX").resolve("ItJU9"),import.meta.url).toString();var w={};w=new URL(a("kyEFX").resolve("lMzWz"),import.meta.url).toString();var E={};E=new URL(a("kyEFX").resolve("69UQG"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("7Byx0"),import.meta.url).toString();const H=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(s),img2x:t(k)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(l),img2x:t(f)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(c),img2x:t(S)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(p),img2x:t(b)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(u),img2x:t(y)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(d),img2x:t(h)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(m),img2x:t(w)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(g),img2x:t(E)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(v),img2x:t(_)}];let L=document.querySelector(".donation-organisation-list"),F=document.querySelector(".scroll-btn"),R=document.querySelector(".container-support"),x=document.querySelector(".scroll-img-down"),U=document.querySelector(".scroll-img-up");L.innerHTML=H.map(({img2x:e,img:t,url:o,title:r},n)=>`
      <li class="support-item">
        <span class='support-item-number'>0${n+1}</span>
        <a class="support_link" target='blank' href="${o}">
          <img
            class="support-image"
            src="${t}"
            srcset="${t} 1x, ${e} 2x"
            alt="${r}"
          />
        </a>
      </li>`).join(""),F.addEventListener("click",function(){F.classList.contains("top")?(F.classList.remove("top"),U.style.display="none",x.style.display="block",L.scrollTop=0,R.classList.remove("support-mobile")):(L.scrollTop=L.scrollHeight,F.classList.add("top"),x.style.display="none",U.style.display="block",R.classList.add("support-mobile"))});var A={};A=new URL(a("kyEFX").resolve("6Xdw9"),import.meta.url).toString();var X={};X=new URL(a("kyEFX").resolve("baCd6"),import.meta.url).toString();var $={};$=new URL(a("kyEFX").resolve("cc4rM"),import.meta.url).toString();var q={};q=new URL(a("kyEFX").resolve("5kIq2"),import.meta.url).toString();var I={};I=new URL(a("kyEFX").resolve("4oIIU"),import.meta.url).toString();var M={};M=new URL(a("kyEFX").resolve("aZh2v"),import.meta.url).toString();var O={};function D(){let e=localStorage.getItem("bookShopingListLS");return e?JSON.parse(e):[]}function z(){let e=D(),o=document.querySelector(".js-books.shop"),r=document.querySelector(".empty-shopping-list-div");if(0===e.length)r.style.display="block",o.innerHTML="";else{let n=e.map(e=>(function(e){let{book_image:o,title:r,list_name:n,description:i,author:a,buy_links:s,_id:l}=e;return`<div class="book-card">
  <img class="book-card-image" src="${o}" alt="${r}" />
  <div class="book-card-info">
    <div class="book-card-hero">
      <div class="book-card-title+cat">
        <h3 class="book-card-title">${r}</h3>
        <p class="book-card-category">${n}</p>
      </div>
      <button class="book-card-remove" data-bookid="${l}">
       <svg class="" width="28" height="28">
        <use href="${t(O)}#icon-trash-shop"></use>
      </svg>
      </button>
    </div>
    <p class="book-card-description">${i}</p>
    <div class="book-card-footer">
      <p class="book-card-author">Author: ${a}</p>
      <div class="book-card-links">
        <a class="amazon-link" target="_blank" href="${s.find(e=>"Amazon"===e.name).url}">
              <img
                class="change-color fix-amazon add-hover"
                srcset="
                  ${t(A)} 1x,
                  ${t(X)} 2x
                "
                src="${t(A)}"
                alt="Amazon Logo"
              />
            </a>
            <a class="applebooks-link" target="_blank" href="${s.find(e=>"Apple Books"===e.name).url}">
              <img
                class="change-color"
                srcset="
                  ${t($)} 1x,
                  ${t(q)} 2x
                "
                src="${t($)}"
                alt="Openbook Logo"
              />
            </a>
            <a class="bookshop-link" target="_blank" href="${s.find(e=>"Bookshop"===e.name).url}">
              <img
                class="change-color"
                srcset="
                  ${t(I)} 1x,
                  ${t(M)} 2x
                "
                src="${t(I)}"
                alt="Bookshop Logo"
              />
            </a>     
      </div>
    </div>
  </div>
</div>`})(e)).join("");o.innerHTML=n,r.style.display="none"}}O=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString(),document.querySelector(".amazon-link"),document.querySelector(".bookshop-link"),document.querySelector(".applebooks-link"),document.addEventListener("DOMContentLoaded",z),document.addEventListener("click",function(e){if(e.target.classList.contains("book-card-remove")||e.target.classList.contains("book-card-remove-icon")){let t=e.target.getAttribute("data-bookid");(function(e){let t=D(),o=t.filter(t=>t._id!==e);localStorage.setItem("bookShopingListLS",JSON.stringify(o)),z()})(t)}}),window.addEventListener("DOMContentLoaded",function(){let e=document.querySelector('a[data-action="index"]');e.classList.add("current");let t=window.location.href;if(t.endsWith("/shopping-list.html")){e.classList.remove("current");let t=document.querySelector('a[data-action="shopping-list"]');t.classList.add("current")}});
//# sourceMappingURL=shopping-list.b4b66636.js.map
