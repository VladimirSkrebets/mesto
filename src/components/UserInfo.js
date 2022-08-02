export class UserInfo {
  constructor({ userName, userDescription}) {
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userDescription.textContent
    }
  }

  setUserInfo(description) {
    this._userName.textContent = description.name;
    this._userDescription.textContent = description.description;
  }
}
