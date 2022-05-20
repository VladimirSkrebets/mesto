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

  renderCards({ name: placeInput.value, link: linkInput.value });

  closePopup(popupAddCard);
  formAddCards.reset();
  buttonSubmitAddPopup.setAttribute('disabled', 'bezRaznicy');
  buttonSubmitAddPopup.classList.add('popup__submit_inactive');
}

// Обработчик события (при клике открывает попап редактирования профиля)
buttonOpenEditPopup.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  //скрываем показ ошибок при открытии попапа
  hideInputError(popupEditProfile, nameInput, settings);
  hideInputError(popupEditProfile, jobInput, settings);
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
  hideInputError(popupAddCard, placeInput, settings);
  hideInputError(popupAddCard, linkInput, settings);
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAddCard);
});

// Обработчик события (при клике зыкрвает попап добавления карточек)
buttonCloseAddPopup.addEventListener('click', function () {
  closePopup(popupAddCard);
});

// Обработчик события (при клике отправляет форму добавления карточек)
formAddCards.addEventListener('submit', addFormSubmitHandler);

// Добавление карточек на страницу из массива
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

const popupPhotoView = document.querySelector('.popup_type_photo');
const popupImageView = popupPhotoView.querySelector('.popup__image');
const popupCaptionView = popupPhotoView.querySelector('.popup__caption');
//Удаление popupPhoto
const popupPhotoButtonClose = popupPhotoView.querySelector('.popup__close')

popupPhotoButtonClose.addEventListener('click', function () {
 closePopup(popupPhotoView);
});


// Генерация карточек
const generateCards = (cardsData) => {
  const newCards = cardsTemplate.cloneNode(true);

  const titleCards = newCards.querySelector('.cards__title');
  titleCards.textContent = cardsData.name;

  const linkCards = newCards.querySelector('.cards__picture');
  linkCards.src = cardsData.link;
  linkCards.alt = cardsData.name;

  const buttonDeleteCard = newCards.querySelector('.cards__trash');
  buttonDeleteCard.addEventListener('click', handleDeleteCard);

  const buttonLikeCard = newCards.querySelector('.cards__icon-like');
  buttonLikeCard.addEventListener('click', handleLikeCard);

  linkCards.addEventListener('click', function () {
    popupImageView.src = cardsData.link;
    popupImageView.alt = cardsData.name;
    popupCaptionView.textContent = cardsData.name;

    openPopup(popupPhotoView);
  });

  return newCards
};

//Рендер карточек
const renderCards = (cardsData) => {
  cardsContainer.prepend(generateCards(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCards(cardsData);
});



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
