# Project: Recursion

Solution of Algorithm Assignments for The Odin Project.
Data structures included in this project are:

- Recursion
  - [Fibonacci with and without recursion](#fibonacci-with-and-without-recursion)
  - [Merge sort](#merge-sort)

- Algorithms
  - [Linked list](#linked-list)
  
## Fibonacci with and without recursion

Implementations of the fibonacci sequence using recursion and not using it. Both functions work the exact same way. If you input a number, these functions will return an array with the quantity of numbers you specified as a parameter

``` Javascript
// will return an array with the first 10 nums of the sequence

const fibRecursion = fibWithRecursion(10); // =  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
const fibNoRecursion = fibWithoutRecursion(10); // =  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```

## Merge Sort

Sorting algorithm using recursion. [Merge sort](https://en.wikipedia.org/wiki/Merge_sort) works with the premise of divide and conquer. It will take an array and split it into two halves, sort the items inside the generated sublists and then merge them together

``` Javascript
// will return an array with the first 10 nums of the sequence
const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1]
const sortResult = mergeSort(unsortedArr); //  = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
```

## Linked List

Implementation of slingly linked lists. the next methods are implemented:

- __append__: Adds a new node at the end of the list
- __prepend__: Adds a new node at the beginning of the list
- __head__: Returns the head of the node
- __tail__: Returns the tail of the node
- __size__: Returns the size of the linked list
- __at__: Returns the node that is in a given index (index starts at zero)
- __find__: returns the index of the node containing a value, or null if not found.
- __contains__: It checks if the value is within the list; otherwise returns false
- __insertAt__: inserts a new node at a given index
- __removeAt__: Removes a node at a given idnex
- __pop__: Removes the last node of the list
- __toStrin__: Returns the linked list is String format
