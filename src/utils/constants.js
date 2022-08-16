// Селекторы попапов
const selectorPopupEdit = '.popup_type_edit';
const selectorPopupAdd = '.popup_type_add';
const selectorPopupPhoto = '.popup_type_photo';
const selectorPopupCheckDelete = '.popup_type_delete';
const selectorPopupEditAvatar = '.popup_type_edit-avatar';
// адресса кнопок открытия попапов
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenAddPopup = document.querySelector('.profile__add-button');
const buttonOpenEditAvatarPopup = document.querySelector('.profile__avatar-button');
// Переменные, в которых находятся адресса элементов формы
const formEditProfile = document.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__user-name');
const jobInput = formEditProfile.querySelector('.popup__user-work');
// Выбираем элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar');
//ДОМ элементы карточек
const cardsContainer = document.querySelector('.cards__list');
//Селектор темплэйта
const cardsTemplate = '.cards-template';
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
  selectorPopupCheckDelete,
  selectorPopupEditAvatar,
  buttonOpenEditAvatarPopup,
  buttonOpenEditPopup,
  nameInput,
  jobInput,
  profileName,
  profileDescription,
  profileAvatar,
  buttonOpenAddPopup,
  cardsContainer,
  cardsTemplate,
  settings,
};
