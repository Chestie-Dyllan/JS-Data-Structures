function grades() {
    this.studentGrades = [];
    this.add = add;
    this.average = average;
}

function add(grade) {
this.studentGrades.push(grade);
}
function average() {
var total = 0;
for (var i = 0; i < this.studentGrades.length; ++i) {
total += this.studentGrades[i];
}
return total / this.studentGrades.length;
}
var students = new grades();
students.add(88);
students.add(55);
students.add(60);
students.add(39);
students.add(75);
students.add(50);
students.add(56);
students.add(92);
console.log(students.average());

var fruit = ['apple','pear','berries','mango','bananna']
fruit.sort();
console.log(fruit);

fruit.reverse();
console.log(fruit);


Array.matrix = function weekTemps() {
this.dataStore = [];
this.add = add;
this.average = average;
}
function add(temp) {
this.dataStore.push(temp);
}
function average() {
var total = 0;
for (var i = 0; i < this.dataStore.length; ++i) {
total += this.dataStore[i];
}
return total / this.dataStore.length;
}
var week01 = new weekTemps();
var week02 = new weekTemps();
var week03 = new weekTemps();
var week04 = new weekTemps();

for(var i = 0; i < 8; ++i) {
    myRandom = Math.floor(Math.random * 36);
    week01.add(myRandom);
}

for(var i = 0; i < 8; ++i) {
    myRandom = Math.floor(Math.random * 36);
    week02.add(myRandom);
}

for(var i = 0; i < 8; ++i) {
    myRandom = Math.floor(Math.random * 36);
    week03.add(myRandom);
}

for(var i = 0; i < 8; ++i) {
    myRandom = Math.floor(Math.random * 36);
    week04.add(myRandom);
}

var monthTemp = [week01.dataStore, week02.dataStore, week03.dataStore, week04.dataStore];

week1.average();
week2.average();
week3.average();
week4.average();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average());