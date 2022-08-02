import './../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  initialCards,
  buttonOpenEditPopup,
  popupEditProfile,
  nameInput,
  jobInput,
  profileName,
  profileDescription,
  buttonOpenAddPopup,
  popupAddCard,
  popupPhotoView,
  cardsContainer,
  cardsTemplate,
  settings,
} from '../utils/constants.js';


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
  const card = new Card(cardsData, cardsTemplate, handleCardClick);
  return card.generateCard();
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}


//Класс Section
function renderCard(card) {
  section.addItem(card);
}

const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const element = createCard(cardData);
    renderCard(element);
  }
}, cardsContainer);

section.renderElements();


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
    popupWithFormEditProfile.close();
  }
});
popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm(popupAddCard, {
  callBackSubmitForm: (data) => {
    const cardElement = createCard({name: data.place, link: data.link});
    renderCard(cardElement);
    popupWithFormAddCard.close();
  }
});
popupWithFormAddCard.setEventListeners();


//класс UserInfo
const userInfo = new UserInfo({ userName: profileName, userDescription: profileDescription });


