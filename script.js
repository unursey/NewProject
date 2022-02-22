"use strict";

class First {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Привет я ${this.name} родителя!`);
  }
}

class Second extends First {
  hello() {
    super.hello();
    console.log(`А я наследуемый ${this.name}!`);
  }
}

const dev = new Second("метод");

dev.hello();
