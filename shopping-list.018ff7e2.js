var e;function t(){let e=localStorage.getItem("shoppingList");return e?JSON.parse(e):[]}function o(){let e=t(),o=document.querySelector(".js-books-container"),n=document.querySelector(".empty-list-img");if(0===e.length)n.style.display="block";else{let t=e.map(e=>(function(e){let{image:t,title:o,category:n,description:a,author:c,links:r}=e,i=r.map(e=>`<a href="${e.url}" target="_blank">${e.name}</a>`).join("");return`
    <div class="book-card">
      <img class="book-card-image" src="${t}" alt="${o}">
      <h3 class="book-card-title">${o}</h3>
      <p class="book-card-category">${n}</p>
      <p class="book-card-description">${a}</p>
      <p class="book-card-author">Author: ${c}</p>
      <div class="book-card-links">${i}</div>
      <button class="book-card-remove" data-bookid="${e.id}">Remove from Shopping List</button>
    </div>
  `})(e)).join("");o.innerHTML=t,n.style.display="none"}}window,e=document,localStorage.getItem("my_darkMode")&&(e.documentElement.className+=" darkmode"),function(e,t,o){t.querySelector(".switch").addEventListener("change",function(e){if(e.preventDefault(),t.documentElement.classList.toggle("darkmode"),t.documentElement.classList.contains("darkmode")){localStorage.setItem("my_darkMode",!0);return}localStorage.removeItem("my_darkMode")},!1)}(window,document),document.querySelector(".tab-hidden.ico-burger").addEventListener("click",function(){document.getElementById("burger-menu").classList.add("show")}),document.querySelector(".nav-burger").addEventListener("click",function(){document.getElementById("burger-menu").classList.remove("show")}),document.addEventListener("DOMContentLoaded",o),document.addEventListener("click",function(e){if(e.target.classList.contains("book-card-remove")){let n=e.target.dataset.bookid;(function(e){let n=t(),a=n.filter(t=>t.id!==e);localStorage.setItem("shoppingList",JSON.stringify(a)),o()})(n)}}),window.addEventListener("DOMContentLoaded",function(){let e=document.querySelector('a[data-action="index"]');e.classList.add("current");let t=window.location.href;if(t.endsWith("/shopping-list.html")){e.classList.remove("current");let t=document.querySelector('a[data-action="shopping-list"]');t.classList.add("current")}});
//# sourceMappingURL=shopping-list.018ff7e2.js.map
