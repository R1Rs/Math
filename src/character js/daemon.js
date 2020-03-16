import Character from "./character.js";

export default class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon", 100);
    this.distance = 1;
    this.distanceAttack = this.attack;
    this.stone = false;
  }

  set attacked(value) {
    this.distance = Math.round(value);
    this.distanceAttack = this.attack - (this.attack * ((this.distance - 1) / 10));
    if (this.stone) {
      this.distanceAttack -= Math.log2(value) * 5;
    }
  }

  stoned() {
    this.stone = true;
  }
}
