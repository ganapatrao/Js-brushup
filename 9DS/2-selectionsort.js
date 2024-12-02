let testArray = [29, 10, 4, 37, 1];

4, 10, 29, 37, 14;
function selectionsort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    let temp = data[minIndex];
    data[minIndex] = data[i];
    data[i] = temp;
  }

  return data;
}

console.log(selectionsort(testArray));
