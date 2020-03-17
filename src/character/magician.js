import Character from "./character.js";

export default class Magician extends Character {
  constructor(name) {
    super(name, "Magician", 100);
    this.distance = 1;
    this.distanceAttack = this.attack;
    this.stone = false;
  }

  set attacked(value) {
    this.distance = Math.round(value);
    this.distanceAttack = this.attack - (this.attack * ((this.distance - 1) / 10));
    if (this.stone === true) {
      this.distanceAttack -= Math.log2(value) * 5;
    }
  }

  stoned() {
    if (this.stone === true) {
      this.stone = false;
    } else {
      this.stone = true;
    }
  }
}
