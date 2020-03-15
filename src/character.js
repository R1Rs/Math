class Character {
  constructor(name, type, attack) {
    this.name = name;
    this.typs = type;
    this.attack = attack;
  }
}

class Magician extends Character {
  constructor(name) {
    super (name, "Magician", 100);
    this.distance = 1;
    this.distanceAttack = this.attack;
    this.stone = false;
  }

  set distance (value) {
    this._distance = Math.round(value);
    this._distanceAttack = this.attack - (this.attack * ((this._distance - 1) / 10));
    if (this.stone) {
      this._distanceAttack = this._distanceAttack - Math.log2(value) * 5;
    }
  }

  stoned () {
    this.stone = true;
  }
}