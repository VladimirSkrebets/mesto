const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonSubmit = popup.querySelector('.popup__submit');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__user-name');
let jobInput = document.querySelector('.popup__user-work');
// Выбериаем элементы, куда должны быть вставлены значения полей
let userName = document.querySelector('.profile__title');
let userJob = document.querySelector('.profile__description');

function popupOpen() {
	popup.classList.add('popup_opened');
	// Получaем значение полей jobInput и nameInput из свойства value
	nameInput.value = userName.textContent;
	jobInput.value = userJob.textContent;
}

function popupClose() {
	popup.classList.remove('popup_opened');
}


openPopupButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	// Так мы можем определить свою логику отправки.
	// О том, как это делать, расскажем позже.

	// Вставляем новые значения с помощью textContent
	userName.textContent = nameInput.value;
	userJob.textContent = jobInput.value;

	popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
