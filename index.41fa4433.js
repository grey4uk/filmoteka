var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}const n={body:document.querySelector("body"),paginatorDiv:document.querySelector(".paginator"),decrementBtn:document.querySelector("#btnBack"),incrementBtn:document.querySelector("#btnForward"),filmsContainer:document.querySelector(".js-films-container")};API_KEY="407d4e26fe6158c959ba633b835fa721";const r=new class{fetchCards(){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=sherlock holmes`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get search(){return this.itemToSearch}set search(e){this.itemToSearch=e}constructor(){this.itemToSearch="",this.page=1}};r.fetchCards().then((({total_pages:e,page:t})=>{const r=[];for(let a=1;a<=e;a+=1){function o(){return a===t?"paginator__page--active":""}console.log(a),r.push(`<button type="button" id="${a}" class="paginator__page ${o()}">${a}</button>`)}console.log(r.join("")),n.decrementBtn.insertAdjacentHTML("afterend",r.join(""))})),n.decrementBtn.addEventListener("click",(function(){r.decrementPage(),console.log("hi - ")})),n.incrementBtn.addEventListener("click",(function(){r.incrementPage(),console.log("gi +")})),console.log(n.decrementBtn);var o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,h=l||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return h.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=s.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}const _=document.querySelector(".js-box");_.innerHTML='<label class="header__label">\n            <input class="header__input" type="text" name="movieSearch" placeholder="Movie search">\n            <span class="img__search"/>\n         </label>';const y=document.querySelector("#library"),v=document.querySelector("#home"),j=document.querySelector("header");document.querySelector(".header__input");function S(e){return`<ul class="films">${e.map((({title:e,genre_ids:t,release_date:n="--",poster_path:r})=>`\n        <li class="films__item">\n            <img \n                class="films__img" \n                src="https://image.tmdb.org/t/p/w500/${r}" \n                alt="${e}">\n            <h3 class="films__title">${e}</h3>\n            <p class="films__genre">${t.join(", ")}</p>\n            <p class="films__year">${n.slice(0,4)}</p>\n        </li>\n      `)).join("")}</ul>`}y.addEventListener("click",(function(e){e.preventDefault(),_.innerHTML="",_.innerHTML='<div class="js-box--padding"><button class="btn-watched" type="button">Watched</button>\n         <button class="btn-queue" type="button">queue</button></div>',j.classList.add("header--bgc"),y.classList.add("nav-list__link--active"),v.classList.remove("nav-list__link--active")}));var $={};Object.defineProperty($,"__esModule",{value:!0}),$.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e},API_KEY="407d4e26fe6158c959ba633b835fa721";(new class{fetchCards(){return fetch(`${this._baseUrl}/3/search/movie?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get search(){return this.itemToSearch}set search(e){this.itemToSearch=e}constructor(){t($)(this,"_baseUrl","https:api.themoviedb.org"),this.itemToSearch="sherlock holmes",this.page=1}}).fetchCards().then((e=>function(e){n.filmsContainer.innerHTML=S(e)}(e.results)));
//# sourceMappingURL=index.41fa4433.js.map
