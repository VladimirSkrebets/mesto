import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './data.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

// Переменные, в которых находятся адресса элементов для вызова и управления попапом изменения профиля
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
// Переменные, в которых находятся адресса элементов формы и её полей изменения профиля
const formEditProfile = document.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__user-name');
const jobInput = formEditProfile.querySelector('.popup__user-work');
// Выбериаем элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
// Переменные, в которых находятся адресса элементов для вызова и управления попапом добавления карточек
const buttonOpenAddPopup = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add');
//попап просмтотра фото
const popupPhotoView = document.querySelector('.popup_type_photo');
//ДОМ элементы карточек
const cardsContainer = document.querySelector('.cards__list');
//Селекторы формы попапов для валидациии
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


// Обработчик события (при клике открывает попап редактирования профиля)
buttonOpenEditPopup.addEventListener('click', function () {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.description;
  //скрываем показ ошибок при открытии попапа
  formEditValidation.resetValidation();
  popupWithFormEditProfile.open();
});


// Обработчик события (при клике открывает попап добавления карточки)
buttonOpenAddPopup.addEventListener('click', function () {
  //скрываем показ ошибок при открытии попапа
  formAddCardValidation.resetValidation();
  popupWithFormAddCard.open();
});


//Класс Card
const createCard = (cardsData) => {
  const card = new Card(cardsData, '.cards-template', handleCardClick);
  return card.generateCard();
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}


//Класс Section
const section = new Section({
  items: initialCards,
  renderer: (cardsData) => {
    const element = createCard(cardsData);
    section.addItem(element);
  }
}, cardsContainer);

section.rendererElements();


//Класс FormValidator
const formEditValidation = new FormValidator(settings, popupEditProfile);
formEditValidation.enableValidation();
const formAddCardValidation = new FormValidator(settings, popupAddCard);
formAddCardValidation.enableValidation();


//класс PopupWithImage
const popupWithImage = new PopupWithImage(popupPhotoView);
popupWithImage.setEventListeners()


//класс PopupWithForm
const popupWithFormEditProfile = new PopupWithForm(popupEditProfile, {
  callBackSubmitForm: (data) => {
    userInfo.setUserInfo(data);
  }
});
popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm(popupAddCard, {
  callBackSubmitForm: (data) => {
    const cardElement = createCard({name: data.place, link: data.link});
    section.addItem(cardElement);
  }
});
popupWithFormAddCard.setEventListeners();


//класс UserInfo
const userInfo = new UserInfo({ userName: profileName, userDescription: profileDescription });
