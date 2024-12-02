function bubblesort(data) {
  for (let i = 0; i < data.length-1 ; i++) { // 4 times //1 less
    for (let j = 0; j < data.length-1-i  ; j++) { //-i coz every iteration we will get highest value at the end and we have to skip it
      if (data[j] > data[j + 1]) {
        let temp = data[j]
        data[j] = data[j+1]
        data[j+1]= temp
      }
    }
  }

  return data
}

let testarary = [29, 10, 11, 37, 14];
console.log(bubblesort(testarary));

10 11 29 14 37

10 29 11 37 14   10 11 29 14 37
10 11 29 37 14
10 11 29 37 14    10 11 14 29 37
10 11 29 14 37





