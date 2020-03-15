export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  addCode(code, description) {
    this.map.set(code, description);
  }

  translate(code) {
    if (this.map.has(code) === false) {
      console.log("Unknown error");
    } else {
      return this.map.get(code);
    }
  }
}
