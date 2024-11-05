// Task N1

const replaceStringLetters = (string, valueToReplace, valueToReplaceWith) =>
  string.split(valueToReplace).join(valueToReplaceWith);

console.log(replaceStringLetters("Agent_James_Bond", "_", " "));
console.log(replaceStringLetters("Agent James Bond", "James", "Jon"));

// Task N2

const capitalizeFirstLetters = (string) =>
  string
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");

console.log(capitalizeFirstLetters("hello my beautiful world!"));

// Task N3

const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Giga", age: 35 },
  { name: "Guja", age: 27 },
];

const sortUsersByAgeAscending = (userArr) =>
  userArr.sort((user1, user2) => user1.age - user2.age);

console.log(sortUsersByAgeAscending(users));
