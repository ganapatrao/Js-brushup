function bubblesort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j]
        data[j] = data[j+1]
        data[j+1]= temp
      }
    }
  }

  return data
}

let testarary = [29, 10, 14, 37, 14];
console.log(bubblesort(testarary));
