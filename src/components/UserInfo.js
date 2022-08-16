export class UserInfo {
  constructor({ userName, userDescription, userAvatar }) {
    this._userName = userName;
    this._userDescription = userDescription;
    this._avatarUser = userAvatar;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userDescription.textContent,
    }
  }

  setUserInfo(description) {
    this._userName.textContent = description.name;
    this._userDescription.textContent = description.about;
  }

  setAvatar(description) {
    this._avatarUser.src = description.avatar;
  }
}
