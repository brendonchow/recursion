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

const mergeSort = (arr, left = 0, right = arr.length - 1) => {
  if (left === right) return [arr[left]];

  const mid = left + Math.floor((right - left) / 2);
  const firstHalf = mergeSort(arr, left, mid);
  const secondHalf = mergeSort(arr, mid + 1, right);

  const firstHalfLength = firstHalf.length;
  const secondHalfLength = secondHalf.length;
  const sorted = new Array(firstHalfLength + secondHalfLength);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < firstHalfLength && j < secondHalfLength) {
    if (firstHalf[i] < secondHalf[j]) {
      sorted[k++] = firstHalf[i++];
    } else {
      sorted[k++] = secondHalf[j++];
    }
  }

  while (i < firstHalfLength) {
    sorted[k++] = firstHalf[i++];
  }

  while (j < secondHalfLength) {
    sorted[k++] = secondHalf[j++];
  }

  return sorted;
};
