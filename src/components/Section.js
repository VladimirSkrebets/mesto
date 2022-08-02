export class Section {
  constructor({items, renderer}, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  rendererElements() {
    this._items.forEach(cardsData => this._renderer(cardsData));
  }

  addItem(cardsData) {
    this._selectorContainer.prepend(cardsData);
  }
}
