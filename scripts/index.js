// Попап изменения профиля
const openEditPopupButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const editPopupCloseButton = popupEditProfile.querySelector('.popup__close');


const editFormElement = document.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__user-name');
const jobInput = editFormElement.querySelector('.popup__user-work');
// Выбериаем элементы, куда должны быть вставлены значения полей
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__description');

function popupEditOpen() {
  popupEditProfile.classList.add('popup_opened');
  // Получaем значение полей jobInput и nameInput из свойства value
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function popupEditClose() {
  popupEditProfile.classList.remove('popup_opened');
}

openEditPopupButton.addEventListener('click', popupEditOpen);
editPopupCloseButton.addEventListener('click', popupEditClose);


// Обработчик «отправки» формы
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  // Вставляем новые значения с помощью textContent
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  popupEditClose();
}

// Прикрепляем обработчик к форме:
editFormElement.addEventListener('submit', editFormSubmitHandler);


// Открытие и закрытие попапа добавления карточек
const openAddPopupButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add');
const addPopupCloseButton = popupAddCard.querySelector('.popup__close');

function popupAddOpen() {
  popupAddCard.classList.add('popup_opened');
}

function popupAddClose() {
  popupAddCard.classList.remove('popup_opened');
  placeInput.value = '';
  linkInput.value = '';
}

openAddPopupButton.addEventListener('click', popupAddOpen);
addPopupCloseButton.addEventListener('click', popupAddClose);

const addFormElement = popupAddCard.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__user-name');
const linkInput = addFormElement.querySelector('.popup__user-work')

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();

  renderCards({ name: placeInput.value, link: linkInput.value });

  popupAddClose();
  placeInput.value = '';
  linkInput.value = '';
}

addFormElement.addEventListener('submit', addFormSubmitHandler);

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

//Обработчики событий

const handleDeleteCard = (evt) => {
  evt.target.closest('.cards__item').remove();
};

const handleLikeCard = (evt) => {
  evt.target.closest('.cards__icon-like').classList.toggle('cards__icon-like_active');
};

const popupPhotoBig = document.querySelector('.popup_type_photo');
const popupImageBig = popupPhotoBig.querySelector('.popup__image');
const popupCaptionBig = popupPhotoBig.querySelector('.popup__caption');

//Удаление popupPhoto
const popupPhotoButtonClose = popupPhotoBig.querySelector('.popup__close')

function popupPhotoClose() {
  popupPhotoBig.classList.remove('popup_opened');
};
popupPhotoButtonClose.addEventListener('click', popupPhotoClose);


// Генерация карточек

const generateCards = (cardsData) => {
  const newCards = cardsTemplate.cloneNode(true);

  const titleCards = newCards.querySelector('.cards__title');
  titleCards.textContent = cardsData.name;

  const linkCards = newCards.querySelector('.cards__picture');
  linkCards.src = cardsData.link;
  linkCards.alt = cardsData.name;

  const deleteButton = newCards.querySelector('.cards__trash');
  deleteButton.addEventListener('click', handleDeleteCard);

  const likeButton = newCards.querySelector('.cards__icon-like');
  likeButton.addEventListener('click', handleLikeCard);

  const popupPhoto = newCards.querySelector('.cards__picture');
  popupPhoto.addEventListener('click', popupPhotoOpen);


  function popupPhotoOpen() {
    popupPhotoBig.classList.add('popup_opened');

    popupImageBig.src = cardsData.link;
    popupImageBig.alt = cardsData.name;
    popupCaptionBig.textContent = cardsData.name;
  };

  return newCards
};

//Рендер карточек

const renderCards = (cardsData) => {
  cardsContainer.prepend(generateCards(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCards(cardsData);
});




