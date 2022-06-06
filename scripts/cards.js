import { openPopup } from './index.js'

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _deleteCard(evt) {
    evt.target.closest('.cards__item').remove();
  }

  _likeCard(evt) {
    evt.target.closest('.cards__icon-like').classList.toggle('cards__icon-like_active');
  }

  _openPhotoPlace() {
    const popupPhotoView = document.querySelector('.popup_type_photo');
    popupPhotoView.querySelector('.popup__image').src = this._link;
    popupPhotoView.querySelector('.popup__image').alt = this._name;
    popupPhotoView.querySelector('.popup__caption').textContent = this._name;
    openPopup(popupPhotoView);
  }

  _setEventListeners() {
    this._element.querySelector('.cards__trash').addEventListener('click', (evt) => this._deleteCard(evt));
    this._element.querySelector('.cards__icon-like').addEventListener('click', (evt) => this._likeCard(evt));
    this._element.querySelector('.cards__picture').addEventListener('click', () => this._openPhotoPlace());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__title').textContent = this._name;
    this._element.querySelector('.cards__picture').src = this._link;
    this._element.querySelector('.cards__picture').alt = this._name;

    return this._element;
  }
}


