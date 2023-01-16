const main = (lines) => {
  const [numA, numB] = lines.splice(0, 1)[0].split(' ');
  const arrA = lines[0].split(' ').map(Number);
  const arrB = lines[1].split(' ').map(Number);

  let answer = [];

  for (let i = 0; i < numA; i++) {
    for (let j = 0; j < numB; j++) {
      answer.push(arrA[i] * arrB[j]);
    }
  }

  console.log(answer.length);
};

main([
  '10 10',
  '85 -46 93 44 -40 -75 -75 -18 -54 95',
  '1 95 -92 -90 32 -25 36 55 22 86',
]); //9025
// main(['2 3', '-100 0', '-100 0 100']); //10000
