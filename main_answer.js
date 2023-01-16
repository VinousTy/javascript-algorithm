//1. 九九関数
// const multiplicationTables = () => {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${i}の段`);
//     for (let j = 1; j <= 9; j++) {
//       let sum = i * j;
//       console.log(`${i} × ${j} = ${sum}`);
//     }
//   }
// };

// multiplicationTables();

//2. FizzBuzz

// const max = 100;

// const fizzBuzz = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (num % 3 === 0) {
//     return 'Fizz';
//   } else if (num % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return num;
//   }
// };

// for (let i = 1; i <= max; i++) {
//   console.log(fizzBuzz(i));
// }

//重複要素の削除
// const main = (lines) => {
//   const num = lines.splice(0, 1)[0];

//   let arr = [lines[0]];

//   for (let i = 0; i < num; i++) {
//     if (arr.indexOf(lines[i]) === -1) {
//       arr.push(lines[i]);
//     }
//   }

//   console.log(arr);
// };
//main(['5', '1', '2', '3', '5', '2']);

//割り切れる回数
// const main = (lines) => {

//   let count = 0;
//   let target = lines[0];

//   while (target % 2 == 0) {
//     count += 1;
//     target = target / 2;
//   }
//   console.log(count);
// };

// main(['4']); //2
// main(['8']); //3
// main(['10']); //1

//階乗
// const main = (lines) => {
//   const num = Number(lines[0]);
//   let sum = num;

//   for (let i = num - 1; i >= 1; i--) {
//     sum *= i;
//   }
//   console.log(sum);
// };

// main(['3']); //6
// main(['5']); //120
// main(['7']); //5040

//10 進数から 2 進数に変換
// const main = (lines) => {
// let target = lines[0];
// let answer = [];
// while (target != 0) {
//   if (target === 1) {
//     break;
//   }
//   answer.unshift(target % 2);
//   target = Math.floor(target / 2);
// }
// answer.unshift(target);
// console.log(answer.map(String).join().replace(/,/g, ''));

//下記方法でも可
// while (num !== 0) {
//   array.unshift(Math.floor(num % 2));
//   num = Math.floor(num / 2);
// }

//下記方法でも可
// for (let i = 0; i < answer.length; i++) {
//   str += answer[i];
// }
// console.log(str);

//下記方法でも可
// const val = Number(lines[0]);
//   const binary = val.toString(2);
//   console.log(binary);

// };

// main(['4']); //100
// main(['6']); //110
// main(['10']); //1010

//積の最大
// const main = (lines) => {
//   const [numA, numB] = lines.splice(0, 1)[0].split(' ');
//   const arrA = lines[0].split(' ').map(Number);
//   const arrB = lines[1].split(' ').map(Number);

//   let answer = [];

//   for (let i = 0; i < numA; i++) {
//     for (let j = 0; j < numB; j++) {
//       answer.push(arrA[i] * arrB[j]);
//     }
//   }

//   const max = Math.max(...answer);

//   console.log(max);
// };
// main([
//   '10 10',
//   '85 -46 93 44 -40 -75 -75 -18 -54 95',
//   '1 95 -92 -90 32 -25 36 55 22 86',
// ]); //9025
// main(['2 3', '-100 0', '-100 0 100']); //10000

// 4. 文字列処理
// const main = (input) => {
//   const str = input
//   .replace(/A/gi, 4)
//   .replace(/E/gi, 3)
//   .replace(/G/gi, 6)
//   .replace(/I/gi, 1)
//   .replace(/O/gi, 0)
//   .replace(/S/gi, 5)
//   .replace(/Z/gi, 2);

// console.log(str);
// };
// main('PAIZA');

// ビット演算子
// const main = (lines) => {
//   const [inputA, inputB] = lines[0].split(' ');
//   let s = Number(inputA) ^ Number(inputB);
//   let c = Number(inputA) && Number(inputB);

//   console.log(c, s);
// };
// main(['0 0']);

//配列操作
// const main = (lines) => {
//   const num = lines.splice(0, 1)[0];
//   let max = Number(lines[0]);

//   for (let i = 0; i < num; i++) {
//     if (max < Number(lines[i])) {
//       max = Number(lines[i]);
//     }
//   }

//   console.log(max);
// };
// main(['5', '1', '2', '3', '4', '5']); //5

// 5. 数値処理
// const main = (input) => {
//   let sum = input[0] * input[1];
//   console.log(sum % 2 !== 0 ? 'Odd' : 'Even');
// };

// main([1, 26]);

//指定された行数の数字の出力
// const main = (lines) => {
//   const num = lines[0];

//   for (let i = 1; i <= num; i++) {
//     let str = '';
//     for (let j = 1; j <= 5; j++) {
//       if (j == 5) {
//         str += j;
//       } else {
//         str += j + ' ';
//       }
//     }
//     console.log(str);
//   }
// };

// main(['5']);

//階段の出力
// const main = (lines) => {
//   const num = lines;

//   for (let i = 1; i <= num; i++) {
//     let sum = '';

//     for (let j = 1; j <= i; j++) {
//       if (i == j) {
//         sum += j;
//       } else {
//         sum += j + ' ';
//       }
//     }
//     console.log(sum);
//   }
// };
// main(5);

// 6. 文字列処理
// const main = (input) => {
//   let count = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === '1') {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = main('000');
// console.log(result);

//再帰処理
// const main = (input) => {
//   //再帰は「再帰終了条件」を持たなければならない。
//   if (input < 2) {
//     return 1;
//   }

//   //再帰的に関数自身を呼び出さなければならない。
//   //状態を変えながら再帰終了条件に進んでいかなければならない。
//   return input * main(input - 1);
// };

// const result = main(1); //1
// console.log(result);
// const result = main(3); //6
// console.log(result);
// const result = main(5); //120
// console.log(result);

//行列の転置
// const main = (lines) => {
//   const [row, column] = lines.splice(0, 1)[0].split(' ');
//   let array = [];

//   for (let i = 0; i < row; i++) {
//     array.push(lines[i].split(' '));
//   }

//   for (let i = 0; i < column; i++) {
//     let str = '';
//     for (let j = 0; j < row; j++) {
//       str += array[j][i] + ' ';
//     }
//     console.log(str.trim());
//   }
//   console.log(array);
// };
// main(['2 3', '1 2 3', '4 5 6']);

//イテレーター
// const genIterator = (max) => {
//   let i = 0;

//   return {
//     next: () => {
//       if (i >= max) {
//         return {
//           done: true,
//         };
//       } else {
//         return {
//           done: false,
//           value: i++,
//         };
//       }
//     },
//   };
// };

// const it = genIterator(10);

// let a = it.next();

// while (!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

// 配列処理
// const main = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     if (i === 0) continue;
//     input[i] = input[i - 1] + input[i];
//   }

//   return input;
// };

// main([1, 2, 3, 4]); //[1,3,6,10]
// main([1, 1, 1, 1, 1]); //[[1,2,3,4,5]
// main([3, 1, 2, 10, 1]); //[3,4,6,16,17]

// ピボットインデックスの場所
// const main = (input) => {
//   let total = 0;
//   for (let i = 0; i < input.length; i++) {
//     total += input[i];
//   }

//   let leftSum = 0;
//   for (let i = 0; i < input.length; i++) {
//     let right = total - leftSum - input[i];
//     if (right === leftSum) {
//       return i;
//     }
//     leftSum += input[i];
//   }

//   return -1;
// };
// main([1, 7, 3, 6, 5, 6]); //3
// main([1,2,3]); //-1
// main([2,1,-1]); //0

//6. 数値処理(2)
// const main = (input) => {
//   input.splice(0, 1);

//   let floor_now = 1;
//   let count = 0;

//   input.forEach((i, index) => {
//     if (index === 0) {
//       count += i - floor_now;
//       floor_now = i;
//     } else {
//       if (Math.sign(floor_now - i) === -1) {
//         count += -(floor_now - i);
//         floor_now = i;
//       } else {
//         count += floor_now - i;
//         floor_now = i;
//       }
//     }
//   });

//下記処理でも可
// for (let i = 0; i < num; i++) {
//   if (lines[i] < floor) {
//     count += -(lines[i] - floor);
//   } else {
//     count += lines[i] - floor;
//   }
//   floor = lines[i];
// }

//   console.log(count);
// };

// main([3, 3, 1, 4]); //7回
// main([8, 17, 28, 11, 62, 64, 4, 7, 17]); //170回

// 7. ハイアンドロー
// const main = (input) => {
//   let parentFirst = Number(input[0].split(' ')[0]);
//   let parentSecond = Number(input[0].split(' ')[1]);
//   input.splice(0, 1);

//   input.splice(0, 1)[0];

//   let first = '';
//   let second = '';

//   let result = '';

//   input.forEach((i) => {
//     first = Number(i.split(' ')[0]);
//     second = Number(i.split(' ')[1]);

//     if (parentFirst > first) {
//       result += 'High';
//       return;
//     } else if (parentFirst < first) {
//       result += 'Low';
//       return;
//     } else if (parentFirst === first) {
//       if (parentSecond > second) {
//         result += 'Low';
//         return;
//       } else if (parentSecond < second) {
//         result += 'High';
//         return;
//       }
//     }
//   });

//   console.log(result);
// };

// main(['5 1', '2', '7 2', '1 4']);
// main(['7 3', '4', '7 1', '7 4', '5 3', '10 1']);

// 8.ポイント払い
// const main = (input) => {
//   let charge = input[0].split(' ')[0];
//   const numberOfTimes = input[0].split(' ')[1];

//   let point = 0;

//   input.splice(0, 1);

//   input.forEach((cost) => {
//     if (point >= cost) {
//       point -= cost;
//     } else {
//       charge -= cost;
//       point += cost * 0.1;
//     }
//     console.log(`${charge} ${point}`);
//   });
// };

//入力
// main(['2000 5', '300', '500', '300', '100', '100']);
//出力
// 1700 30
// 1200 80
// 900 110
// 900 10
// 800 20

//入力
// main(['3000 3', '1000', '1000', '1000']);
//出力
// 2000 100
// 1000 200
// 0 300

//9. 安息の地を求めて
// const main = (input) => {
//   const [constructionX, constructionY, decivel] = lines
//   .splice(0, 1)[0]
//   .split(' ')
//   .map(Number);
// const num = lines.splice(0, 1)[0];

// for (let i = 0; i < num; i++) {
//   let [x, y] = lines[i].split(' ').map(Number);

//   let distance = 0;

//   if (constructionX < x) {
//     x = -(constructionX - x);
//   } else {
//     x = constructionX - x;
//   }

//   if (constructionY < y) {
//     y = -(constructionY - y);
//   } else {
//     y = constructionY - y;
//   }

//   distance = x ** 2 + y ** 2;
//   if (distance > decivel ** 2) {
//     console.log('silent');
//   } else {
//     console.log('noise  ');
//   }
// }
// };

// main(['20 10 10', '3', '25 10', '20 15', '70 70']);
// main(['50 50 100', '4', '0 0', '0 100', '100 0', '100 100']);

//10. お得な買い物
// const main = (input) => {
//   const data = input.slice(1);

//   let foodPrice = 0;
//   let bookPrice = 0;
//   let clothesPrice = 0;
//   let otherPrice = 0;

//   let foodPoint = 0;
//   let bookPoint = 0;
//   let clothesPoint = 0;
//   let otherPoint = 0;

//   data.forEach((data) => {
//     if (data[0] == 0) {
//       foodPrice += Number(data.split(' ')[1]);
//     } else if (data[0] == 1) {
//       bookPrice += Number(data.split(' ')[1]);
//     } else if (data[0] == 2) {
//       clothesPrice += Number(data.split(' ')[1]);
//     } else if (data[0] == 3) {
//       otherPrice += Number(data.split(' ')[1]);
//     }
//   });

//   foodPoint = Math.floor(foodPrice / 100) * 5;
//   bookPoint = Math.floor(bookPrice / 100) * 3;
//   clothesPoint = Math.floor(clothesPrice / 100) * 2;
//   otherPoint = Math.floor(otherPrice / 100) * 1;

//   const sumPoint = foodPoint + bookPoint + clothesPoint + otherPoint;

//   return sumPoint;
// };

// //0 は食料品、1 は書籍、2 は衣類、3 はその他
// const result = main([
//   '6',
//   '0 200',
//   '1 240',
//   '0 120',
//   '3 460',
//   '1 240',
//   '2 3200',
// ]);
// console.log(result);

//大文字、小文字変換
// const main = (input) => {
// const [a, b] = input[0].split(' ');
// let str = input[1].slice(a - 1, b);
// let upperCase = input[1].replace(str, (s) => {
//   return s.toUpperCase();
// });
// console.log(upperCase);

//下記方法でも可
// const line = input[0].split(' ');
// const front = Number(line[0]);
// const back = Number(line[1]);
// let result = input[1].slice(0, front - 1);
// result += input[1].slice(front - 1, back).toUpperCase();
// result += input[1].slice(back);
// console.log(result);
// };

//下記方法も参考程度に
// const line = lines[0].split(' ');
//   const front = Number(line[0]);
//   const back = Number(line[1]);

//   let str = lines[1];
//   let arr = [...str];
//   arr.splice(front - 1, back - 1, 'HIS I');
//   console.log(arr.join(''));

// main(['2 6', 'this is a pen']); //tHIS Is a pen
// main(['2 6', 'Welcome to the paiza! I`m studying ruby!']);
//WELCOMe to the paiza! I`m studying ruby!
// main(['1 10', 'Welcome to the paiza! I`m studying ruby!']);
//WELCOME TO the paiza! I`m studying ruby!

//文字列の重複カウント
// const main = (input) => {
//   const target = input.splice(0, 1)[0];
//   const str = input[0];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (target === str.substr(i, target.length)) {
//       count++;
//     }
//   }

//   console.log(count);
// };

// main(['AA', 'abdeeAAbAAAbfde']); //3
// main(['el', 'scale']); //0
// main(['Ji', 'JiJiiJiIjiIJjIJi']); //4

// 文字と整数の組のソート
// const main = (input) => {
//   const num = input.splice(0, 1)[0];
//   const numbers = [];

//   for (let i = 0; i < input.length; i++) {
//     numbers.push({
//       str: input[i].split(' ')[0],
//       num: Number(input[i].split(' ')[1]),
//     });
//   }

//   const result = numbers.sort((a, b) => {
//     return a.num - b.num;
//   });

//   result.forEach((result) => {
//     console.log(result.str);
//   });

//下記方法でも可
// const arr = [];
// const n = Number(input[0]);
// for (let i = 1; i <= n; i++) {
//   const line = input[i].split(' ');
//   arr.push([line[0], Number(line[1])]);
// }

// arr.sort((a, b) => {
//   return a[1] < b[1] ? -1 : 1;
// });

// arr.forEach((element) => {
//   console.log(element[0]);
// });
// };

// main(['2', 'A 1', 'B 2']); //A, B
// main(['3', 'G 0', 'S 3', 'E -2']); //E, G, S

//重複の判定
// const main = (input) => {
//   let flg = false;

//   const arr = new Set(input);
//   if (arr.size !== input.length) {
//     flg = true;
//   }

//   console.log(flg);
// };

// main(['HND', 'NRT', 'KIX', 'NGO', 'NGO']);

//重複の判定(map使用)
// const main = (input) => {
//   const counts = new Map();

//   input.forEach((data) => {
//     if (counts.has(data)) {
//       counts.set(data, counts.get(data) + 1);
//     } else {
//       counts.set(data, 1);
//     }
//   });

//   counts.forEach((value, key) => {
//     if (value > 1) {
//       console.log(value);
//     }
//   });
// };

// main(['HND', 'NRT', 'KIX', 'NGO', 'NGO', 'NGO', 'NGO', 'NGO']);

//文字と整数の組のソート2
// const main = (input) => {
//   const num = input.splice(0, 1)[0];
//   const obj = [];

//   for (let i = 0; i < num; i++) {
//     obj.push({
//       str: input[i].split(' ')[0],
//       num: Number(input[i].split(' ')[1]),
//     });
//   }

//   const counts = new Map();

//   obj.forEach((data) => {
//     if (counts.get(data.str)) {
//       counts.set(data.str, counts.get(data.str) + Number(data.num));
//     } else {
//       counts.set(data.str, data.num);
//     }
//   });

//   const obj2 = [];

//   counts.forEach((value, key) => {
//     obj2.push({ str: key, num: value });
//   });

//   obj2.sort((a, b) => {
//     return b.num - a.num;
//   });

//   obj2.forEach((obj) => {
//     console.log(`${obj.str} ${obj.num}`);
//   });
// };

// main(['7', 'A 1', 'D 6', 'C 2', 'G 4', 'B 70', 'A 10', 'B 5']);
//B 75 A 11 D 6 G 4 C 2

//五目並べ
// const main = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     //列毎の個数を判定したいため、列毎に変数を初期化している
//     let oCount = 0;
//     let xCount = 0;

//     console.log('初期値' + xCount);
//     for (let j = 0; j < 5; j++) {
//       if (input[j][i] === 'O') {
//         oCount++;
//       } else if (input[j][i] === 'X') {
//         xCount++;
//       }
//     }

//     if (oCount === 5) {
//       console.log('O');
//       return;
//     } else if (xCount === 5) {
//       console.log('X');
//       return;
//     }
//   }

//   console.log('D');
// };
// main(['XXOXO', 'OXOXX', 'OOOOO', 'OXOX.', 'XOXXO']); //D
// main(['XXOXO', 'OXOXX', '.OOXO', 'OXOO.', 'XXOXX']); //O
// main(['...X.', '...X.', '...X.', '...X.', 'OOOO.']); //D

//占い
// const main = (lines) => {
//   const peopleNumber = Number(lines.splice(0, 1)[0]);
//   const people = lines.splice(0, peopleNumber);
//   const divinationNumber = Number(lines.splice(0, 1));
//   const divination = lines.splice(0, divinationNumber);

//   const peopleArray = new Map();

//   for (let i = 0; i < peopleNumber; i++) {
//     const [user, type] = people[i].split(' ');
//     peopleArray.set(user, type);
//   }

//   const divinationArray = new Map();

//   for (let i = 0; i < divinationNumber; i++) {
//     const [type, result] = divination[i].split(' ');
//     divinationArray.set(type, result);
//   }

//   for (let i = 0; i < peopleNumber; i++) {
//     const user = people[i].split(' ')[0];
//     console.log(`${user} ${divinationArray.get(peopleArray.get(user))}`);
//   }
// };

// main([
//   '5',
//   'Kyoko B',
//   'Rio O',
//   'Tsubame AB',
//   'KurodaSensei A',
//   'NekoSensei A',
//   '4',
//   'A red',
//   'B green',
//   'O blue',
//   'AB yellow',
// ]);
//Kyoko green
// Rio blue
// Tsubame yellow
// KurodaSensei red
// NekoSensei red

//クラス継承
// class Underage {
//   constructor() {
//     this.sum = 0;
//   }

//   take_food(price) {
//     this.sum += price;
//   }
//   take_softdring(price) {
//     this.sum += price;
//   }
//   take_alcohol(price) {
//     return;
//   }
//   get_sum() {
//     return this.sum;
//   }
// }

// class Adult extends Underage {
//   constructor() {
//     super();
//     this.alcohol = false;
//   }

//   take_alcohol(price) {
//     this.sum += price;
//     this.alcohol = true;
//   }

//   take_food(price) {
//     if (this.alcohol) {
//       this.sum += price - 200;
//     } else {
//       this.sum += price;
//     }
//   }
// }

// const main = (lines) => {
//   const [peopleNum, orderNum] = lines.splice(0, 1)[0].split(' ').map(Number);

//   let instance = [];

//   for (let i = 0; i < peopleNum; i++) {
//     if (Number(lines.splice(0, 1)[0]) >= 20) {
//       instance.push(new Adult());
//     } else {
//       instance.push(new Underage());
//     }
//   }

//   for (let i = 0; i < orderNum; i++) {
//     const [index, order, price] = lines[i].split(' ');

//     if (order === 'food') {
//       instance[index - 1].take_food(Number(price));
//     }
//     if (order === 'alcohol') {
//       instance[index - 1].take_alcohol(Number(price));
//     }
//     if (order === 'softdrink') {
//       instance[index - 1].take_softdring(Number(price));
//     }
//   }

//   instance.forEach((ist) => {
//     console.log(ist.get_sum());
//   });
// };

// main([
//   '2 5',
//   '59',
//   '5',
//   '2 food 1223',
//   '1 alcohol 4461',
//   '1 alcohol 4573',
//   '1 alcohol 1438',
//   '2 softdrink 1581',
// ]);
