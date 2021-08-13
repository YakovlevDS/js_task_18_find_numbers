// ? Task: Итак, вам дан массив arr из N целых чисел, где значение arr[i] - находится в диапазоне [1, N].

// Необходимо найти все целые числа в диапазоне [1, N], которые не входят в исходный массив.

// Входные данные: N == arr.length, 1 <= N <= 10^5.

// Вывод: список пропущенных элементов


// Solution 1

const getMissingNumbers = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const index = Math.abs(arr[i]) - 1;

    if (arr[index] > 0) {
      arr[index] *= -1;
    }
  }

  const result = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(getMissingNumbers([1, 1])); // [2]
console.log(getMissingNumbers([1, 2])); // []


// ! Explanation:Так как размер массива равен N и диапазон чисел — это положительные числа от 1 до N, то пометить элементы мы можем отрицательным значением.

// Алгоритм

// Проходим по массиву: каждый элемент массива — это index в массиве [1, N]. Помечаем arr[index] = (-1) * arr[index];
// Проходим по значениям от 1 до N: добавляем в результирующий массив элементы исходного массива, которые больше 0.
