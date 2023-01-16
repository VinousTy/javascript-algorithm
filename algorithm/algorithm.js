const main = (input) => {
  let lookup = { '{': '}', '[': ']' };

  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (Object.keys(lookup).indexOf(input[i]) !== -1) {
      stack.push(lookup[input[i]]);
    }

    if (Object.values(lookup).indexOf(input[i]) !== -1) {
      if (!stack) {
        return false;
      }

      if (stack.pop() !== input[i]) {
        return false;
      }
    }
  }

  return true;
};

const result = main("{key: 'value', key2: [1, 2, 3]}");
console.log(result);
