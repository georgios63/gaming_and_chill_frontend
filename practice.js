const array = [
  "world of tanks",
  "world of warships",
  "spellsworn",
  "SoulWorker",
  "warframe",
];

const regEx = array[1].replaceAll("[^A-Za-z]+", "");
console.log(regEx);
