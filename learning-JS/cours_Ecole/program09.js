// class dispo depuis es6
class Human {
  static PRODUCER_NAME = "Geoffrey"

  constructor(hp) {
    this.hp = hp;
  }

  isAlive() {
    return this.hp > 0;
  }
}

class StreetFighter extends Human {
  static count = 0;
  static PRODUCER_NAME = "yosjinori ono"

  static getName() {
    return "streetfighter";
  }
  
  constructor(hp, name) {
    super(hp);
    this.name = name;
  }

  performAttack() {
    console.log(this.name, "hadoooooken")
  }
}
// sucre synthaxique : facon simplifier d'ecrire du code plus compliqué
const ruy = new StreetFighter(1000, "ruy");
console.log(ruy);
ruy.performAttack();

console.log(StreetFighter.count)

console.log(StreetFighter.getName())