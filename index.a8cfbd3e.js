function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("fb9GJ"),a=r("2shzp");var l=r("hgmNe"),c=r("6Xidn"),s=(c=r("6Xidn"),r("dRsRU")),f=r("B4GFe"),u=r("392Er");function d(e){console.log(e.message);const t=document.querySelector(".text-error");t.style.color="#ff001b",t.textContent="Sorry, something going wrong... Please try again."}var g=r("gjiCh"),m=r("jkVf4");const h={formEl:document.querySelector("#search-form"),inputEl:document.querySelector("#search"),notificationEl:document.querySelector(".text-error"),filmGalleryContainer:document.querySelector(".film-container")},y=new class{async fetchFilms(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=3c2d3d1a4a9318a7ef02a0fdedccb03f&query=${this.searchQuery}&page=${e}`,{data:n}=await a.default.get(t);return n}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery=""}},p=new(e(i))("pagination",{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0}),E=p.getCurrentPage();function v(e){const t=e.page;y.fetchFilms(t).then((e=>{(0,s.scrollOnTop)(0),(0,f.clearMurkup)(),x(e.results)})).catch(d)}function x(e){h.filmGalleryContainer.insertAdjacentHTML("beforeend",l.default.createFilmCardMarkup(e)),(0,m.saveCurrentFilmsToLocal)(e),(0,u.hideElement)(),(0,u.hideSpan)()}h.notificationEl.style.color="#ff001b",h.notificationEl.textContent="",h.formEl.addEventListener("submit",(function(e){e.preventDefault(),function(){if(!h.inputEl.value.trim()){h.notificationEl.style.color="#ff001b",h.notificationEl.textContent="Please, type something.";setTimeout((()=>{h.notificationEl.textContent=""}),3e3);return}(0,g.toggleLoader)(),y.query=h.inputEl.value.trim(),c.pagination.off("afterMove",c.popular),p.off("afterMove",v),y.fetchFilms(E).then((e=>{if(!e.results.length){(0,g.toggleLoader)(),h.notificationEl.style.color="#ff001b",h.notificationEl.textContent="Sorry, there are no films matching your search query. Please, try again.";setTimeout((()=>{h.notificationEl.textContent=""}),3e3);return}h.notificationEl.textContent="",(0,f.clearMurkup)(),x(e.results),p.reset(e.total_results),(0,u.hideElement)(),p.on("afterMove",v);const t=e.total_results;(0,g.toggleLoader)(),h.notificationEl.style.color="#00ff22",h.notificationEl.textContent=`We found ${t} films. Enjoy!`;setTimeout((()=>{h.notificationEl.textContent=""}),3e3)})).catch(d)}()}));
//# sourceMappingURL=index.a8cfbd3e.js.map