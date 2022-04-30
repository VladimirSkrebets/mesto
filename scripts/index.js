const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonSubmit = popup.querySelector('.popup__submit');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__user-name');
let jobInput = document.querySelector('.popup__user-work');
// Выбериаем элементы, куда должны быть вставлены значения полей
let userName = document.querySelector('.profile__title');
let userJob = document.querySelector('.profile__description');

function popupOpen() {
  popup.classList.add('popup_opened');
  // Получaем значение полей jobInput и nameInput из свойства value
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}


openPopupButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Вставляем новые значения с помощью textContent
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Добавление карточек на страницу из массива

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Шаблоны

const cardsTemplate = document
  .querySelector('.cards-template')
  .content.querySelector('.cards__item');

//ДОМ элементы карточек
const cardsContainer = document.querySelector('.cards__list');

// Генерация карточек

const generateCards = (cardsData) => {
  const newCards = cardsTemplate.cloneNode(true);

  const titleCards = newCards.querySelector('.cards__title');
  titleCards.textContent = cardsData.name;

  const linkCards = newCards.querySelector('.cards__picture')
  linkCards.src = cardsData.link;

  return newCards
}

//Рендер карточек

const renderCards = (cardsData) => {
  cardsContainer.prepend(generateCards(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCards(cardsData);
});


