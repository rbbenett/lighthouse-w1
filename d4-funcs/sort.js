const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const sort = function(array) {
  array.sort(function(a, b) {
    if (a.name < b.name)
      return - 1;
    if (a.name > b.name)
      return 1;
    if (a.name === b.name)
      return b.age - a.age;
    return 0;
  });
  
  return array;
};

console.log(sort(students));