function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(num) {
  while (num >= 0) {
    console.log(num);
    num -= 1;
  }
  console.log('done');
}