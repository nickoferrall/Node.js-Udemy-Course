const square = x => {
  let result = x * x;
  return result;
};

console.log(square(9));

const user = {
  name: "Dave",
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHiAlt();
