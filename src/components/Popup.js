export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //открытие Popup
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  //закрытие Popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  //закрытие Popup на Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  //закрытия Popup если кликнуть на окружающий фон
  _handleBackgroundClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  //установка слушателей событий для кнопки закрытия и область вокруг фона
  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', (evt) => this.close(evt));
    this._popup.addEventListener('click', (evt) => this._handleBackgroundClose(evt));
  }

}
