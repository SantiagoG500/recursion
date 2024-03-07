import { fibWithRecursion } from './assignments/assignment_1/fib_recursion.js';
import { fibWithoutRecursion } from './assignments/assignment_1/fib_no_recursion.js';
import { mergeSort } from './assignments/assignment_2/merge_sort.js';
import { LinkedList } from './assignments/linked-list/LinkedList.js';

const fibNoRecursion = fibWithoutRecursion(10);
const fibRecursion = fibWithRecursion(10);
const sortResult = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

const newLInkedList = LinkedList();

newLInkedList.append([1, 2]);
newLInkedList.append(1);
newLInkedList.append(2);
newLInkedList.append(3);
newLInkedList.append(5);
newLInkedList.append(6);
