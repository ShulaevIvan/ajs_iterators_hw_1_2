import Person from './person.js';

class Team {
  constructor() {
    this.members = [];
  }

  add(characterObj) {
    this.members.push(characterObj);
  }

  * [Symbol.iterator]() {
    /* eslint-disable-next-line */
    for (const item of this.members) {
      yield item;
    }
  }
}

const character = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
const team = new Team();
team.add(character);
team.add(character);
team.add(character);
team.add(character);
/* eslint-disable-next-line */
for (const item of team) {
  console.log(item);
}
