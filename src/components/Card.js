export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _deleteCard() {
    this._element.remove();
    this._element = null
  }

  _likeCard() {
    this._cardLikeButton.classList.toggle('cards__icon-like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.cards__trash').addEventListener('click', () => this._deleteCard());
    this._cardLikeButton.addEventListener('click', () => this._likeCard());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__picture');
    this._cardLikeButton = this._element.querySelector('.cards__icon-like');
    this._setEventListeners();

    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
}


