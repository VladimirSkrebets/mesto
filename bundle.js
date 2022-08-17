(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a=o.handleDeleteCardClick,c=o.addLike,u=o.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._ownerId=e.owner._id,this._likes=e.likes,this._likesId=e.likes._id,this._templateSelector=n,this._handleCardClick=r,this._addLike=c,this._deleteLike=u,this._handleDeleteCardClick=a,this._userId=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_likeCard",value:function(){this._cardLikeButton.classList.contains("cards__icon-like_active")?this._deleteLike(this._likesId):this._addLike(this._likesId)}},{key:"_setEventListeners",value:function(){var e=this;this._cardTrashButton.addEventListener("click",(function(){return e._handleDeleteCardClick(e)})),this._cardLikeButton.addEventListener("click",(function(){return e._likeCard()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setLikeButton",value:function(e){e?this._cardLikeButton.classList.add("cards__icon-like_active"):this._cardLikeButton.classList.remove("cards__icon-like_active")}},{key:"countLikes",value:function(e){this._likesNumber.textContent=e.likes.length}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".cards__picture"),this._element.querySelector(".cards__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardLikeButton=this._element.querySelector(".cards__icon-like"),this._cardTrashButton=this._element.querySelector(".cards__trash"),this._likesNumber=this._element.querySelector(".cards__like-number"),this._likesNumber.textContent=this._likes.length,this._userId!==this._ownerId&&this._cardTrashButton.remove(),this._likes.forEach((function(t){t._id===e._userId&&e._cardLikeButton.classList.add("cards__icon-like_active")})),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._form.addEventListener("input",(function(){return e._toggleButtonState()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t)}))})),this._toggleButtonState()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._selectorContainer=n}var t,n;return t=e,(n=[{key:"renderElements",value:function(e){var t=this;e.reverse().forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._selectorContainer.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleBackgroundClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(t){return e.close(t)})),this._popup.addEventListener("click",(function(t){return e._handleBackgroundClose(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPhotoImage=t._popup.querySelector(".popup__image"),t._popupPhotoTitle=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupPhotoImage.src=t,this._popupPhotoImage.alt=e,this._popupPhotoTitle.textContent=e,l(d(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.callBackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callBackSubmitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitBtn=n._form.querySelector(".popup__submit"),n._submitSaveBtn=n._submitBtn.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBackSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),b(S(a.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){this._submitBtn.textContent=e?"Сохранение...":this._submitSaveBtn}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;O(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBackSubmitForm()}))}},{key:"setSubmitAction",value:function(e){this._callBackSubmitForm=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.userName,r=t.userDescription,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userDescription=r,this._avatarUser=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userDescription.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatarUser.src=e.avatar}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U,A=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"getDownloadedCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=".popup_type_edit",x=".popup_type_add",N=".popup_type_edit-avatar",V=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-button"),H=document.querySelector(".popup__form"),M=H.querySelector(".popup__user-name"),z=H.querySelector(".popup__user-work"),$=document.querySelector(".profile__title"),G=document.querySelector(".profile__description"),K=document.querySelector(".profile__avatar"),Q=document.querySelector(".cards__list"),W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"b9557719-c9d8-4f14-9deb-953fa591f94c","Content-Type":"application/json"}}),Z=new T({userName:$,userDescription:G,userAvatar:K});Promise.all([Y.getUserInfo(),Y.getDownloadedCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o),Z.setAvatar(o),U=o._id,ee.renderElements(i)})).catch((function(e){console.log(e)}));var ee=new i({renderer:function(e){var t=ce(e);ee.addItem(t)}},Q),te=new w(D,{callBackSubmitForm:function(e){te.renderLoading(!0),Y.editUserInfo(e).then((function(e){Z.setUserInfo(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners();var ne=new w(x,{callBackSubmitForm:function(e){ne.renderLoading(!0),Y.addNewCard(e).then((function(e){var t=ce(e);ee.addItem(t),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)}))}});ne.setEventListeners();var re=new w(N,{callBackSubmitForm:function(e){re.renderLoading(!0),Y.editUserAvatar(e).then((function(e){Z.setAvatar(e),console.log(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)}))}});re.setEventListeners();var oe=new _(".popup_type_photo");function ie(e,t){oe.open(e,t)}oe.setEventListeners();var ae=new I(".popup_type_delete");ae.setEventListeners();var ce=function(e){var n=new t(e,".cards-template",ie,{handleDeleteCardClick:function(t){ae.open(),ae.setSubmitAction((function(){Y.deleteCard(e).then((function(e){t.deleteCard(e),ae.close()})).catch((function(e){console.log(e)}))}))},addLike:function(){Y.addLike(e).then((function(e){n.countLikes(e),n.setLikeButton(!0)})).catch((function(e){console.log(e)}))},deleteLike:function(){Y.deleteLike(e).then((function(e){n.countLikes(e),n.setLikeButton(!1)})).catch((function(e){console.log(e)}))}},U);return n.generateCard()},ue=new r(W,document.querySelector(D));ue.enableValidation();var se=new r(W,document.querySelector(x));se.enableValidation();var le=new r(W,document.querySelector(N));le.enableValidation(),V.addEventListener("click",(function(){var e=Z.getUserInfo();M.value=e.name,z.value=e.about,ue.resetValidation(),te.open()})),F.addEventListener("click",(function(){se.resetValidation(),ne.open()})),J.addEventListener("click",(function(){le.resetValidation(),re.open()}))})();