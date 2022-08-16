import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { callBackSubmitForm }) {
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._submitBtn = this._form.querySelector('.popup__submit');
    this._submitSaveBtn = this._submitBtn.textContent;
  }

  _getInputValues() {
    const inputsData = {}
    this._inputList.forEach((input) => {
      inputsData[input.name] = input.value;
    });

    return inputsData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmitForm(this._getInputValues());
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading) {
    if (isLoading) {
        this._submitBtn.textContent = 'Сохранение...'
    } else {
        this._submitBtn.textContent = this._submitSaveBtn;
    }
  }
}
