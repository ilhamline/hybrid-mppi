export class QuickSortRunner {
  run(arr, left, right){
    var pivot,
    partitionIndex;


    if(left < right){
      pivot = right;
      partitionIndex = this.partition(arr, pivot, left, right);

      //sort left and right
      this.run(arr, left, partitionIndex - 1);
      this.run(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
    partitionIndex = left;

    for(var i = left; i < right; i++){
      if(arr[i] < pivotValue){
        this.swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    this.swap(arr, right, partitionIndex);
    return partitionIndex;
  }

  swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export class BubbleSortRunner {
  run(arr){
    var swapped;
    do {
      swapped = false;
      for (var i=0; i < arr.length-1; i++) {
        if (arr[i] > arr[i+1]) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
}

export class QueensProblemRunner {
  run(size){
    return this.enumerate(size);
  }

  enumerate(n) {
    var a = new Array(n);
    return this.enumerate2(a, 0);
  }

  enumerate2(q, k) {
    var n = q.length;
    if (k == n) {
      if (n <= 5) {
        return this.printQueens(q);
      } else {
        return '';
      }
    }
    else {
      var result = '';
      for (var i = 0; i < n; i++) {
        q[k] = i;
        if (this.isConsistent(q, k)) {
          result = result.concat(this.enumerate2(q, parseInt(k+1)));
        }
      }
      return result;
    }
  }

  printQueens(q) {
    var n = q.length;
    var result = '';
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (q[i] == j) {
          result = result.concat("Q ");
        }
        else{
          result = result.concat("* ");
        }
      }
      result = result.concat("<br>");
    }
    result = result.concat("<br>");
    return result;
  }

  isConsistent(q, n) {
    for (var i = 0; i < n; i++) {
      if (q[i] == q[n]) {
        return false;   // same column
      }
      else if ((q[i] - q[n]) == (n - i)){
        return false;   // same major diagonal
      } else if ((q[n] - q[i]) == (n - i)) {
        return false;   // same minor diagonal
      }
    }
    return true;
  }
}
