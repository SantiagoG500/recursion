import { fibWithoutRecursion } from './assignments/assignment_1/fib_no_recursion.js';
import { fibWithRecursion } from './assignments/assignment_1/fib_recursion.js';
import { mergeSort } from './assignments/assignment_2/merge_sort.js';

const fibResponse = fibWithoutRecursion(10);
const fibRecursion = fibWithRecursion(10);
const sortResult = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

console.log({ fibResponse, fibRecursion });
console.log({ sortResult });
