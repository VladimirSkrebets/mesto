// Массив карточек
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

// Селекторы попапов
const selectorPopupEdit = '.popup_type_edit';
const selectorPopupAdd = '.popup_type_add';
const selectorPopupPhoto = '.popup_type_photo';
// адресса кнопок открытия попапов
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
//ДОМ элементы карточек
const cardsContainer = document.querySelector('.cards__list');
//Селектор темплэйта
const cardsTemplate = '.cards-template';
//
//Селекторы формы попапов для валидациии
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {
  selectorPopupEdit,
  selectorPopupAdd,
  selectorPopupPhoto,
  initialCards,
  buttonOpenEditPopup,
  popupEditProfile,
  nameInput,
  jobInput,
  profileName,
  profileDescription,
  buttonOpenAddPopup,
  popupAddCard,
  cardsContainer,
  cardsTemplate,
  settings,
};
