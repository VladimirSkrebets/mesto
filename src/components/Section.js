export class Section {
  constructor({items, renderer}, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  renderElements() {
    this._items.forEach(cardData => this._renderer(cardData));
  }

  addItem(cardData) {
    this._selectorContainer.prepend(cardData);
  }
}
