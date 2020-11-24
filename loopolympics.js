//Preliminaries
//Write a for loop that will push the numbers 0 through 9 to an array.
for (var input = 0; input <= 9; input++) {
  console.log(input);
}

//Write a for loop that prints to the console only even numbers 0 through 100.
for (var input = 9; input >= 0; input--) {
  console.log(input);
}

//Write a for loop that prints these fruits to the console.
var fruits = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


//Bronze Medal
//Write a for loop that will push the numbers 0 through 9 to an array.
var arr = [];
for (var input = 0; input <= 9; input++) {
  arr.push(input);
}

//Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (let i = 0; i < fruit.length; i += 2) {
  console.log(fruit[i]);
}



//Silver Medal
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

//Write a loop that will print out all the names of the people of the people array
for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var names = [];
var occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}


//Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
var everyOtherName = [];
var everyOtherOccupation = []
for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    everyOtherName.push(peopleArray[i].name);
  } else {
    everyOtherOccupation.push(peopleArray[i].occupation);
  }
}

//Gold Medal

//Create an array that mimics a grid like the following using nested for loops:
var grid = [];
for (let r = 0; r < 3; r++) {
  grid.push([]);
  for (let c = 0; c < 3; c++) {
    grid[r].push(0)
  }
}

//2.Create an array that mimics a grid like the following using nested for loops:
var grid = [];
for (let r = 0; r < 3; r++) {
  grid.push([]);
  for (let c = 0; c < 3; c++) {
    grid[r].push(r)
  }
}

//3.Create an array that mimics a grid like the following using nested for loops:
var grid = [];
for (let r = 0; r < 3; r++) {
  grid.push([]);
  for (let c = 0; c < 3; c++) {
    grid[r].push(c)
  }
}

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.
