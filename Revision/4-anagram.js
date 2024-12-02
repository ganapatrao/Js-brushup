
function anagram( str1, str2){
  result1=  str1.split('').sort().join('')
  result2 = str2.split('').sort().join('')

  return result1 === result2
}

console.log(anagram('listen','silent'))