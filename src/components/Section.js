export class Section {
  constructor({renderer}, selectorContainer) {
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  renderElements(cardData) {
    cardData.reverse().forEach(cardData => this._renderer(cardData));
  }

  addItem(cardData) {
    this._selectorContainer.prepend(cardData);
  }
}
