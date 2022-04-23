/*function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}*/

/*function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}


function greaterThan(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (element > this.dataStore[i]) {
            this.dataStore[this.listSize++] = element;
            break;
        }
    }
}

function smallerThan(element) {
    for (var i = 0; i > this.dataStore.length; --i) {
        if (element < this.dataStore[i]) {
            this.dataStore[this.listSize--] = element;
            break;
        }
    }
}

var myList = List();
myList.append(434);
myList.append(323);
myList.append(65);
myList.append(60);
myList.append(12);
myList.append(987);
myList.append(34);*/


//3.3

/*class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.displayPeople = displayPeople;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
function displayPeople() {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "F") {
            female.append(this.dataStore[i]);
        }
    }
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "M") {
            male.append(this.dataStore[i]);
        }
    } 
    console.log("\nFemales: ");
    for(var f = 0; f < female.dataStore.length; f++){   
        console.log("\t" + female.dataStore[f].name);
    }
    console.log("\nMales: ");
    for(var m = 0; m < male.dataStore.length; m++){
        console.log("\t" + male.dataStore[m].name);
    }
}

var male = new List();
var female = new List();
var people = new List();

function run() {
    var person1 = new Person("Sipho", "M");
    var person2 = new Person("Neo", "F");
    var person3 = new Person("Dyllan", "M");
    var person4 = new Person("Fiona", "F");
    var person5 = new Person("Mike", "M");

    people.append(person1);
    people.append(person2);
    people.append(person3);
    people.append(person4);
    people.append(person5);
    people.displayPeople();
}
*/

//3.4


var movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II',
    'Pulp Fiction', 'The Good, the Bad and the Ugly', '12 Angry Men', 'Schindler’s List',
    'The Dark Knight', 'The Lord of the Rings: The Return of the King',
    'Fight Club', 'Star Wars: Episode V - The Empire Strikes Back',
    'One Flew Over the Cuckoo’s Nest', 'The Lord of the Rings: The Fellowship of the Ring',
    'Inception', 'Goodfellas', 'Star Wars', 'Seven Samurai', 'The Matrix', 'Forrest Gump',
    'City of God'];
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
function checkOut(movieName) {
    if (availableMovies.contains(movieName)) {
        rentedMovies.append(movieName);
        availableMovies.remove(movieName);
        console.log(movieName + " is rented out.");
    } else {
        console.log(movieName + " is not available.");
    }
}

function checkIn(movieName) {
    if (rentedMovies.contains(movieName)) {
        availableMovies.append(movieName);
        rentedMovies.remove(movieName);
        console.log(movieName + " was returned.");
    } else {
        console.log("Sorry, the film " + movieName + " is ours.");
    }
}

var availableMovies = new List();
for (var i = 0; i < movies.length; i++) {
    availableMovies.append(movies[i]);
}
var rentedMovies = new List();
function run() {
    checkOut("12 Angry Men");
    checkIn("The Shawshank Redemption");
}


