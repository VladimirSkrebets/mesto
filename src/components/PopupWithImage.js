import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhotoImage = this._popup.querySelector('.popup__image');
    this._popupPhotoTitle = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    this._popupPhotoImage.src = link;
    this._popupPhotoImage.alt = name;
    this._popupPhotoTitle.textContent = name;
    super.open();
  }
}
