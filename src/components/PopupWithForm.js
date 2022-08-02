import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, { callBackSubmitForm }) {
    super(popup);
    this._callBackSubmitForm = callBackSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
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
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
