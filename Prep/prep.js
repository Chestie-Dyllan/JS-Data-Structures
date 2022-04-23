function sselectionSort(arr) {
    document.write("Starting array " + arr + "<br>");
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        document.write("<br><b>" + arr + "</B><br>");
        for (var j = i + 1; j < arr.length; j++) {
            document.write("compairing " + arr[j] + " and " + arr[lowest] + "<br>");
            if (arr[j] < arr[lowest]) {
                lowest = j;
                document.write(arr[lowest] + " --is now the smallest <br>");

            }
        }
        if (i !== lowest) {

            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            document.write("<br>" + arr + "<br>");
        }

    }
    document.write(" <b> this is the final array </b><br>");
    return arr;
}


/*function selectionSort(arr) {
    document.write("Starting array " + arr + "<br>");
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}*/

document.write(sselectionSort([0, 2, 34, 22, 10, 19, 17]));