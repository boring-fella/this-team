export function hideElement() {
  const ratingElements = document.querySelectorAll('.film-card__rating');

  for (const ratingElement of ratingElements) {
    ratingElement.classList.add('elem-isHidden');
  }
}

// export default { hideElement };

// export function hideMark() {
//   const dateElements = document.querySelectorAll('.film-card__date');
//   const featuresElements = document.querySelectorAll('.film-card__features');

//   const featuresMarkElements = document.querySelectorAll(
//     '.film-card__features-mark'
//   );

//   //   console.log(dateElements);
//   //   console.log(featuresElements);
//   //   console.log(featuresMarkElements);

//   for (const dateElement of dateElements) {
//     console.log(dateElement.textContent.length);

//     if (!dateElement.textContent.length) {
//       featuresMarkElements.classList.add('elem-isHidden');
//     }
//   }
// }

export function hideSpan() {
  const spanAll = document.querySelectorAll('.film-card__features-mark');

  spanAll.forEach((elem, index) => {
    if (
      elem.previousElementSibling.textContent === '' ||
      elem.nextElementSibling.textContent === ''
    ) {
      spanAll[index].innerHTML = ' ';
    } else {
      spanAll[index].innerHTML = ' |';
    }
  });
}
