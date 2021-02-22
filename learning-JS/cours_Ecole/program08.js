// orienté objet : paradigme permet de manipuler des objets
// propriété, méthodes, héritage, surcharge de méthodes

// object litéral
const fighter = {
  name: "Ken",
  hp: 1000,
  attaque: ["hadouken", "tatsumaki"],
  isSecret: false,
  isAlive: function() {
    return this.hp > 0;
  },
};

console.log(fighter.name);
console.log(fighter.isSecret)

fighter.hp = 0;
console.log(fighter.hp)
console.log(fighter.isAlive())
fighter.performAttack = function () {
  console.log("hadooooken");
};

fighter.performAttack();

function Human(hp){
  this.hp = hp;
  this.isAlive = function (){
    return this.hp > 0;
  };
}


// function constructeur
function StreetFighter(hp, name){
  Human.call(this, hp);
  this.name = name;
  this.performAttack = function(){
    console.log("haddoooo")
  };
}

const ryu = new StreetFighter(1000, "ryu");
const ken = new StreetFighter(900, "ken");

ryu.performAttack();
ken.performAttack();

console.log(ryu)
console.log(ruy.isAlive());

//ajout des methodes a la classe
StreetFighter.prototype.shout = function() {
  console.log(this.name, "huaaa huaa")
}
// ajout d'une propriété
StreetFighter.prototype.stun = 1000;

console.log("stun de ryu", ryu.stun)
console.log("shout ryu");
ryu.shout();

console.log(StreetFighter.prototype)