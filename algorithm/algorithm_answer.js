//バブルソート
// const main = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length - 1 - i; j++) {
//       if (input[j] > input[j + 1]) {
//         let few = input[j + 1];
//         input[j + 1] = input[j];
//         input[j] = few;
//         //下記の書き方でもOK!
//         //[input[j], input[j + 1]] = [input[j + 1], input[j]];
//       }
//     }
//   }
//   return input;
// };

// const result = main([2, 5, 8, 7, 3]);
// console.log(result);

// バイナリデータ
// const liner_search = (input, value) => {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === value) {
//       return i;
//     }
//   }

//   return '検索した値は見つかりませんでした。';
// };

// const result = liner_search([0, 1, 5, 7, 9, 11, 15, 20, 24], 15);
// console.log(result);

// const binary_search = (input, value) => {
//   let left = 0;
//   let right = input.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     console.log(`mid: ${mid}`);

//     if (input[mid] === value) {
//       return mid;
//     } else if (input[mid] < value) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//     console.log(`left: ${left}`);
//     console.log(`right: ${right}`);
//   }

//   return '検索した値は見つかりませんでした。';
// };

// const result = binary_search([0, 1, 5, 7, 9, 11, 15, 20, 24], 15);
// console.log(result);

// ユークリッドの互除法
// const main = (input) => {
//   let [a, b] = input[0].split(' ').map(Number);
//   let remainder = 0;

//   while (b !== 0) {
//     remainder = a % b;
//     a = b;
//     b = remainder;
//   }
//   console.log(a);
// };
// main(['15 40']);

//スタック
// const main = (input) => {
//   const lookup = { '{': '}', '[': ']' };

//   let stack = [];

//   for (char of input) {
//     if (Object.keys(lookup).indexOf(char) !== -1) {
//       stack.push(lookup[char]);
//     }
//     if (Object.values(lookup).indexOf(char) !== -1) {
//       if (!stack) {
//         return false;
//       }
//       if (char !== stack.pop()) {
//         return false;
//       }
//     }
//   }

//   if (stack.length) {
//     return false;
//   }

//   return true;
// };

// const result = main("{ key: 'value', key2: [1, 2, 3] }"); //true
// const result = main("{ key: '[value', key2: [1, 2, 3] }");//false
// console.log(result);

// フィボナッチ数列
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
// const result = fib(15);
// console.log(result);

//バイナリーサーチツリー
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left;
//     this.right;
//   }
// }

// const insert = (node, value) => {
//   if (!node) {
//     return new Node(value);
//   }

//   if (value < node.value) {
//     node.left = insert(node.left, value);
//   } else {
//     node.right = insert(node.right, value);
//   }
//   return node;
// };

// const inorder = (node) => {
//   if (node) {
//     inorder(node.left);
//     console.log(node.value);
//     inorder(node.right);
//   }
// };

// const search = (node, value) => {
//   if (!node) {
//     return false;
//   }

//   if (node.value === value) {
//     return true;
//   } else if (node.value > value) {
//     return search(node.left, value);
//   } else if (node.value < value) {
//     return search(node.right, value);
//   }
// };

// let root;
// root = insert(root, 3);
// root = insert(root, 6);
// root = insert(root, 5);
// root = insert(root, 7);
// root = insert(root, 1);
// root = insert(root, 10);
// root = insert(root, 2);
// inorder(root);
// console.log(search(root, 1));
