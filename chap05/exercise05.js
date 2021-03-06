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
    