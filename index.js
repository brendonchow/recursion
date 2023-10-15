const fibs = (n) => {
  if (n < 0) return "Error";
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const result = [0, 1];
  for (let i = 3; i <= n; i++) {
    result.push(result[i - 2] + result[i - 3]);
  }
  return result;
};

const fibsRecurse = (n, a = [0, 1]) => {
  return n < 0
    ? "Error"
    : n === 0
    ? []
    : n === 1
    ? [0]
    : n === 2
    ? a
    : fibsRecurse(n - 1, [...a, a[a.length - 1] + a[a.length - 2]]);
};

const mergeSort = (array) => {
  if (array.length === 0 || array.length === 1) return array;

  const halfIndex = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, halfIndex));
  const secondHalf = mergeSort(array.slice(halfIndex));

  const sorted = [];
  let i = 0;
  let j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sorted.push(firstHalf[i]);
      i++;
    } else {
      sorted.push(secondHalf[j]);
      j++;
    }
  }

  while (i < firstHalf.length) {
    sorted.push(firstHalf[i]);
    i++;
  }

  while (j < secondHalf.length) {
    sorted.push(secondHalf[j]);
    j++;  
  }

  return sorted;
};
