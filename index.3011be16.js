var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return a[e]=i,r.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequired7c6=r),r.register("hgmNe",(function(e,a){var t,i,n,l;t=e.exports,i="default",n=function(){return s},Object.defineProperty(t,i,{get:n,set:l,enumerable:!0,configurable:!0});var d=r("459vf");var s={createFilmCardMarkup:function(e){return e.map((({poster_path:e,title:a,original_title:t,name:r,genre_ids:i,release_date:n,first_air_date:l,vote_average:s})=>`<div class="film__card">\n          <img class="film-card__image" src="${null===e?"https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg":"https://image.tmdb.org/t/p/w500"+e}" alt="${a}" loading="lazy" title="Click to enlarge"/>\n          <div class="film-card__features-wrap">\n            <p class="film-card__title">${a||t||r}</p>\n            <div class="film-card__tech-wrap">\n              <p class="film-card__features">${(0,d.findGenreById)(i)||""}<span class="film-card__features-mark"> |</span></p>\n              <p class="film-card__date">${n.slice(0,4)||l.slice(0,4)||""}</p>\n              <p class="film-card__rating">${Math.round(10*s)/10}</p>\n            </div>\n          </div>\n        </div>\n        `)).join("")}}}));var i=r("2shzp");var n=r("hgmNe"),l=r("ibaxf");function d(e){l.default.save("display-films",e)}const s={filmGalleryContainer:document.querySelector(".film-container")},c=new class{async fetchPopFilms(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=3c2d3d1a4a9318a7ef02a0fdedccb03f&page=${this.page}`,{data:{results:a}}=await i.default.get(e);return console.log(e),a}icrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1}};window.addEventListener("load",(function(e){console.log("Загрузка страницы и приход популярных фильмов с бэка:"),c.fetchPopFilms().then((e=>{!function(e){console.log(e),d(e),s.filmGalleryContainer.insertAdjacentHTML("beforeend",n.default.createFilmCardMarkup(e))}(e)}))}));
//# sourceMappingURL=index.3011be16.js.map