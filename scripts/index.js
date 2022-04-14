const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonSubmit = popup.querySelector('.popup__submit');

function popupOpenToggle() {
  popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);
popupCloseButtonSubmit.addEventListener('click', popupOpenToggle);


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__user-name');
let jobInput = document.querySelector('.popup__user-work');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получaем значение полей jobInput и nameInput из свойства value
  nameInput.value;
  jobInput.value;
  // Выбериаем элементы, куда должны быть вставлены значения полей
  let name = document.querySelector('.profile__title');
  let job = document.querySelector('.profile__description');
  // Вставляем новые значения с помощью textContent
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
