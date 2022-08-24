export default class Validator {
  constructor(nick) {
    this.nick = nick;
  }

  validateUsername() {
    const regex = /[^\d\W_](([a-z-_])\d{0,3})*[^\d\W_]/i;
    if (this.nick.match(regex)[0] === this.nick.match(regex).input) {
      return true;
    }
    return false;
  }
}
