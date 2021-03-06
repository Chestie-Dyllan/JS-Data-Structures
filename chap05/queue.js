class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

var dancers = [
    "F Allison McMillan",
    "M Frank Opitz",
    "M Mason McMillan",
    "M Clayton Ruff",
    "F Cheryl Ferenback",
    "M Raymond Williams",
    "F Jennifer Ingram",
    "M Bryan Frazer",
    "M David Durr",
    "M Danny Martin",
    "F Aurora Adney"
]

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

var males = new Queue();
var females = new Queue();

function run() {
    getDancers();
    dance();
    noDancePartner();
}

function getDancers() {
    var names = [];
    for (var idx = 0; idx < dancers.length; idx++) {
        var person = dancers[idx].split(" ")
        var firstName = person[1];
        var lastName = person[2];

        names[idx] = firstName + " " + lastName;
    }

    for (var i = 0; i < dancers.length; ++i) {
        var person = dancers[i].split(" ");
        var sex = person[0];
        var name = names[i];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance() {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log("\tand the male dancer is: " + person.name);
        console.log("\n");
    }
}

function noDancePartner() {
    console.log("\n");
    
    if (!females.empty()) {
        console.log(females.front().name + " is waiting to dance.");
    }
    if (!males.empty()) {
        console.log(males.front().name + " is waiting to dance.");
    }
}

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

function run() {
    var p = new Patient("Smith", 5);
    var ed = new Queue();
    ed.enqueue(p);
    p = new Patient("Jones", 4);
    ed.enqueue(p);
    p = new Patient("Fehrenbach", 6);
    ed.enqueue(p);
    p = new Patient("Brown", 1);
    ed.enqueue(p);
    p = new Patient("Ingram", 1);
    ed.enqueue(p);
    console.log(ed.toString());
    var seen = ed.dequeue();
    console.log("Patient being treated: " + seen[0].name);
    console.log("Patients waiting to be seen: ")
    console.log(ed.toString());
    // another round
    var seen = ed.dequeue();
    console.log("Patient being treated: " + seen[0].name);
    console.log("Patients waiting to be seen: ")
    console.log(ed.toString());
    var seen = ed.dequeue();
    console.log("Patient being treated: " + seen[0].name);
}

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

var queues = [];
var nums = [];

function run() {
    createQueuesNums();
    beforeAndAfterRadixSort();
}

function createQueuesNums() {
    for (var i = 0; i < 10; ++i) {
        queues[i] = new Queue();
    }
    for (var i = 0; i < 10; ++i) {
        nums[i] = Math.floor(Math.floor(Math.random() * 101));
    }
}

function beforeAndAfterRadixSort() {
    console.log("Before radix sort: ");
    dispArray(nums);
    distribute(nums, queues, 10, 1);
    collect(queues, nums);
    distribute(nums, queues, 10, 10);
    collect(queues, nums);
    console.log("\n\nAfter radix sort: ");
    dispArray(nums);
}