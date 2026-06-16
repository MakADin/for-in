export class Character {
  constructor({ name, type, health = 100, level = 1, attack = 10, defence = 10, special = [] }) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.special = special;
  }
}
