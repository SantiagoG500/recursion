import { LinkedNode } from './Nodes.js';

export const LinkedList = () => {
  let listHead = null;
  let listTail = null;
  let countNodes = 0;

  const append = (data) => {
    const newNode = LinkedNode(data, null);

    if (!listHead) {
      listHead = newNode;
      listTail = newNode;
      return;
    }

    let currentNode = listHead;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
    listTail = newNode;
  };
  const prepend = (data) => {
    const newNode = LinkedNode(data, listHead);
    listHead = newNode;
  };
  const size = () => {
    let currentNode = listHead;

    while (currentNode) {
      countNodes++;
      currentNode = currentNode.nextNode;
    }

    return countNodes;
  };

  const head = () => listHead;
  const tail = () => listTail;

  const at = (index) => {
    let currentNode = listHead;
    let count = 0;

    while (currentNode) {
      if (count >= index) return currentNode;
      else {
        currentNode = currentNode.nextNode;
        count++;
      }
    }
  };
  const pop = () => {
    let currentNode = listHead;
    let preTail;

    while (currentNode.nextNode !== null) {
      preTail = currentNode;
      currentNode = currentNode.nextNode;
    }
    currentNode = null;
    preTail.nextNode = null;
    countNodes -= 1;
  };

  const contains = (value) => {
    let currentNode = listHead;
    let result = false;

    while (currentNode) {
      if (currentNode.value === value) {
        result = true;
        break;
      }
      currentNode = currentNode.nextNode;
    }

    return result;
  };
  const find = (value) => {
    let currentNode = listHead;
    let index = 0;
    let founded = false;

    // console.log(value);
    while (currentNode) {
      if (Array.isArray(value) && Array.isArray(currentNode.value)) {
        founded = evalArray(currentNode.value, value);
        break;
      }
      if (
        !Array.isArray(currentNode.value) &&
        typeof currentNode.value === 'object'
      ) {
        founded = evalObj(currentNode.value, value);
        break;
      }

      if (currentNode.value === value) {
        founded = true;
        break;
      }

      currentNode = currentNode.nextNode;
      index++;
    }

    if (!founded) return null;
    return index;
  };
  const toString = () => {
    if (!listTail) return;

    let message = '';
    let currentNode = listHead;

    while (currentNode) {
      message += `( ${
        typeof currentNode.value === 'object'
          ? JSON.stringify(currentNode.value)
          : currentNode.value
      } ) -> ${currentNode.nextNode ? ' ' : currentNode.nextNode}`;
      currentNode = currentNode.nextNode;
    }

    return message;
  };

  const insertAt = (index, newValue) => {
    const newNode = LinkedNode(newValue, null);
    let currentNode = listHead;

    let count = 0;
    while (currentNode) {
      if (count === index) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      }

      currentNode = currentNode.nextNode;
      count++;
    }
  };
  const removeAt = (index) => {
    let currentNode = listHead;
    const nodeToRemove = at(index);
    let preNode;

    if (!nodeToRemove) return;

    while (currentNode.nextNode) {
      if (currentNode.nextNode.value == nodeToRemove.value) {
        preNode = currentNode;
      }
      currentNode = currentNode.nextNode;
    }

    if (!preNode) {
      listHead = listHead.nextNode;
    } else {
      preNode.nextNode = nodeToRemove.nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const evalArray = (value1 = [], value2 = []) => {
  if (value1.length !== value2.length) return false;

  for (let index = 0; index < value1.length; index++)
    if (value1[index] !== value2[index]) return false;

  return true;
};
const evalObj = (value1 = {}, value2 = {}) => {
  // console.log(JSON.stringify(value1));
  // console.log(JSON.stringify(value2));

  return JSON.stringify(value1) === JSON.stringify(value2);
};
