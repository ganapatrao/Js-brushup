let testArray = [29, 10, 14, 37, 14];

function selectionsort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] < data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
    console.log(data);
  }

  return data;
}

console.log(selectionsort(testArray));
