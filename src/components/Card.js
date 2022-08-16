export class Card {
  constructor(data, templateSelector, handleCardClick, { handleDeleteCardClick, addLike, deleteLike }, userId) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._likesId = data.likes._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._userId = userId;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _likeCard() {
    if (!this._cardLikeButton.classList.contains('cards__icon-like_active')) {
      this._addLike(this._likesId);
    } else {
      this._deleteLike(this._likesId);
    }
  }

  _setEventListeners() {
    this._cardTrashButton.addEventListener('click', () => this._handleDeleteCardClick(this));
    this._cardLikeButton.addEventListener('click', () => this._likeCard());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikeButton(isLiked) {
    if (isLiked) {
        this._cardLikeButton.classList.add('cards__icon-like_active');
    } else {
        this._cardLikeButton.classList.remove('cards__icon-like_active');
    }
  }

  countLikes(data) {
  this._likesNumber.textContent = data.likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__picture');
    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardLikeButton = this._element.querySelector('.cards__icon-like');
    this._cardTrashButton = this._element.querySelector('.cards__trash');
    this._likesNumber = this._element.querySelector('.cards__like-number');
    this._likesNumber.textContent = this._likes.length;
    if (this._userId !== this._ownerId) {
      this._cardTrashButton.remove();
    }
    this._likes.forEach(like => {
      if (like._id === this._userId) {
          this._cardLikeButton.classList.add('cards__icon-like_active');
      }
    })
    this._setEventListeners();

    return this._element;
  }
}
