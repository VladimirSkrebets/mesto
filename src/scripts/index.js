import './../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation'
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';

import {
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
} from '../utils/constants.js';

let userId;


// ------------------------------- Класс Api  -------------------------------

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: 'b9557719-c9d8-4f14-9deb-953fa591f94c',
    'Content-Type': 'application/json'
  }
});


//------------------------------класс UserInfo -----------------------------

const userInfo = new UserInfo({
  userName: profileName,
  userDescription: profileDescription,
  userAvatar: profileAvatar
});


//------------------ Забираем данные пользователя и карточки с сервера -------------------

Promise.all([
  api.getUserInfo(),
  api.getDownloadedCards()
])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    userId = userData._id;
    section.renderElements(cards);
  })
  .catch((err) => {
    console.log(err);
  });


//------------------------------- Класс Section -----------------------------------

const section = new Section({
  renderer: (cardData) => {
    const element = createCard(cardData);
    section.addItem(element);
  }
}, cardsContainer);


//------------------------ класс PopupWithFormEdit ------------------------------

const popupWithFormEditProfile = new PopupWithForm(selectorPopupEdit, {
  callBackSubmitForm: (data) => {
    popupWithFormEditProfile.renderLoading(true);
    api.editUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithFormEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormEditProfile.renderLoading(false);
    });
  }
});

popupWithFormEditProfile.setEventListeners();


//------------------------ класс PopupWithFormAddCard ------------------------------

const popupWithFormAddCard = new PopupWithForm(selectorPopupAdd, {
  callBackSubmitForm: (data) => {
    popupWithFormAddCard.renderLoading(true);
    api.addNewCard(data)
      .then((res) => {
        const cardElement = createCard(res);
        section.addItem(cardElement);
        popupWithFormAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormAddCard.renderLoading(false);
      });
  }
});

popupWithFormAddCard.setEventListeners();


//------------------------ класс popupWithFormEditAvatar ------------------------------

const popupWithFormEditAvatar = new PopupWithForm(selectorPopupEditAvatar, {
  callBackSubmitForm: (data) => {
    popupWithFormEditAvatar.renderLoading(true);
      api.editUserAvatar(data)
          .then((res) => {
              userInfo.setAvatar(res);
              console.log(res);
              popupWithFormEditAvatar.close();
          })
          .catch((err) => {
              console.log(err);
          })
          .finally(() => {
            popupWithFormEditAvatar.renderLoading(false);
          })
  }
});

popupWithFormEditAvatar.setEventListeners();


//----------------------- класс PopupWithImage ---------------------

const popupWithImage = new PopupWithImage(selectorPopupPhoto);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}


//----------------------- класс PopupWithConfirmation ---------------------

const popupWithConfirmation = new PopupWithConfirmation(selectorPopupCheckDelete);

popupWithConfirmation.setEventListeners();


//------------------------------ Класс Card ---------------------------

const createCard = (cardsData) => {
  const card = new Card(cardsData, cardsTemplate, handleCardClick, {
    handleDeleteCardClick: (card) => {
      popupWithConfirmation.open();
      popupWithConfirmation.setSubmitAction(() => {
        api.deleteCard(cardsData)
          .then((res) => {
            card.deleteCard(res);
            popupWithConfirmation.close();
          })
          .catch((err) => {
            console.log(err);
          })
      })
    },
    addLike: () => {
      api.addLike(cardsData)
        .then((cardsData) => {
          card.countLikes(cardsData);
          card.setLikeButton(true);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteLike: () => {
      api.deleteLike(cardsData)
        .then((cardsData) => {
          card.countLikes(cardsData);
          card.setLikeButton(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, userId);

  return card.generateCard();
}


//------------------------------ Класс FormValidator ---------------------------------

const formEditValidation = new FormValidator(settings, document.querySelector(selectorPopupEdit));
formEditValidation.enableValidation();
const formAddCardValidation = new FormValidator(settings, document.querySelector(selectorPopupAdd));
formAddCardValidation.enableValidation();
const formEditAvatarValidation = new FormValidator(settings, document.querySelector(selectorPopupEditAvatar));
formEditAvatarValidation.enableValidation();


//-------------------------------- Слушатели событий --------------------------

//(при клике открывает попап редактирования профиля)
buttonOpenEditPopup.addEventListener('click', function () {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;
  //скрываем показ ошибок при открытии попапа
  formEditValidation.resetValidation();
  popupWithFormEditProfile.open();
});


//(при клике открывает попап добавления карточки)
buttonOpenAddPopup.addEventListener('click', function () {
  //скрываем показ ошибок при открытии попапа
  formAddCardValidation.resetValidation();
  popupWithFormAddCard.open();
});


//(при клике открывает попап изменения аватара)
buttonOpenEditAvatarPopup.addEventListener('click', function () {
  //скрываем показ ошибок при открытии попапа
  formEditAvatarValidation.resetValidation();
  popupWithFormEditAvatar.open();
});
