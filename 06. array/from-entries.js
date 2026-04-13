// entry === [key, vaule]
// entries = [[key, value], ...]

const people = {
  name: "chris",
  age: 19,
  gender: "male",
  inClass: ["a", "b", "c"],
  admin: true,
};

const entries = Object.entries(people);
console.log("entries", entries);
const transEntries = [];
const result = entries.reduce((acc, [key, value]) => {
  if (key !== "admin") {
    acc.push[[key, value]];
  }
  return acc;
}, []);
