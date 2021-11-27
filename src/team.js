export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) throw new Error(`${person} is not type of Character or already available in this Set`);
    this.members.add(person);
  }

  addAll(persons) {
    persons.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}
