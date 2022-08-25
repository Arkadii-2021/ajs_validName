export default class Validator {
  constructor(nick) {
    this.nick = nick;
  }

  validateUsername() {
    const regex = /[^\d\W_](^\d)*(([^a-z|\D])\d{0,3})*[^\d\W_]\w*/i;
    if (this.nick.match(regex)[0] === this.nick.match(regex).input) {
      return true;
    }
    return false;
  }
}
