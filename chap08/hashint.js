function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    print("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            print(i + ": " + this.table[i]);
        }
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

function run() {
    var numStudents = 10;
    var arrSize = 97;
    var idLen = 9;
    var students = new Array(numStudents);
    genStuData(students);
    console.log("Student data: \n");
    for (var i = 0; i < students.length; ++i) {
        console.log(students[i].substring(0, 8) + " " +
            students[i].substring(9));
    }
    console.log("\n\nData distribution: \n");
    var hTable = new HashTable();
    for (var i = 0; i < students.length; ++i) {
        hTable.put(students[i]);
    }
    hTable.showDistro();
}