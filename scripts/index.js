import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './data.js';

// Переменные, в которых находятся адресса элементов для вызова и управления попапом изменения профиля
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonCloseEditPopup = popupEditProfile.querySelector('.popup__close');
// Переменные, в которых находятся адресса элементов формы и её полей изменения профиля
const formEditProfile = document.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__user-name');
const jobInput = formEditProfile.querySelector('.popup__user-work');
// Выбериаем элементы, куда должны быть вставлены значения полей
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__description');
// Переменные, в которых находятся адресса элементов для вызова и управления попапом добавления карточек
const buttonOpenAddPopup = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add');
const buttonCloseAddPopup = popupAddCard.querySelector('.popup__close');
const buttonSubmitAddPopup = popupAddCard.querySelector('.popup__submit');
// Переменные, в которых находятся адресса элементов формы и её полей попапа добавления карточек
const formAddCards = popupAddCard.querySelector('.popup__form');
const placeInput = formAddCards.querySelector('.popup__user-name');
const linkInput = formAddCards.querySelector('.popup__user-work')


// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// Обработчик «отправки» формы редактирования профиля
function submitEditForm(evt) {
  evt.preventDefault();
  // Вставляем новые значения с помощью textContent
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

// Обработчик «отправки» формы добавления карточек
const addFormSubmitHandler = (evt) => {
  evt.preventDefault();

  renderCard({ name: placeInput.value, link: linkInput.value });

  closePopup(popupAddCard);
  formAddCards.reset();
}

// Обработчик события (при клике открывает попап редактирования профиля)
buttonOpenEditPopup.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  //скрываем показ ошибок при открытии попапа
  formEditValidation.resetValidation();
  openPopup(popupEditProfile);
});

// Обработчик события (при клике закрывает попап редактирования профиля)
buttonCloseEditPopup.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

// Обработчик события (при клике отправляет форму изменения профиля)
formEditProfile.addEventListener('submit', submitEditForm);

// Обработчик события (при клике открывает попап добавления карточек)
buttonOpenAddPopup.addEventListener('click', function () {
  //скрываем показ ошибок при открытии попапа
  formAddCards.reset();
  formAddCardValidation.resetValidation();
  openPopup(popupAddCard);
});

// Обработчик события (при клике зыкрвает попап добавления карточек)
buttonCloseAddPopup.addEventListener('click', function () {
  closePopup(popupAddCard);
});

// Обработчик события (при клике отправляет форму добавления карточек)
formAddCards.addEventListener('submit', addFormSubmitHandler);

//ДОМ элементы карточек
const cardsContainer = document.querySelector('.cards__list');


const popupPhotoView = document.querySelector('.popup_type_photo');
const popupPhotoImage = popupPhotoView.querySelector('.popup__image');
const popupPhotoTitle = popupPhotoView.querySelector('.popup__caption')
//Удаление popupPhoto
const popupPhotoButtonClose = popupPhotoView.querySelector('.popup__close')

function openPhotoPlace(title, link) {
  popupPhotoImage.src = link;
  popupPhotoImage.alt = title;
  popupPhotoTitle.textContent = title;
  openPopup(popupPhotoView);
}

popupPhotoButtonClose.addEventListener('click', function () {
 closePopup(popupPhotoView);
});

//Класс Card

const createCard = (cardsData) => {
  const card = new Card(cardsData, '.cards-template', openPhotoPlace);
  return card.generateCard();
}

const renderCard = (cardsData) => {
  const element = createCard(cardsData)
  cardsContainer.prepend(element);
};

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});

//Класс FormValidator

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const formEditValidation = new FormValidator(settings, popupEditProfile);
formEditValidation.enableValidation();
const formAddCardValidation = new FormValidator(settings, popupAddCard);
formAddCardValidation.enableValidation();

//закртыие на оверлей

popupEditProfile.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupEditProfile);
  };
});

popupAddCard.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupAddCard);
  };
});

popupPhotoView.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupPhotoView);
  };
});


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
