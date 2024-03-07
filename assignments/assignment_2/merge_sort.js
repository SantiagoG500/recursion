export const mergeSort = (arr = []) => {
  // if the splitted array is 1 it count like already sorted
  if (arr.length <= 1) return arr;

  const midOfArr = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, midOfArr));
  const rightHalf = mergeSort(arr.slice(midOfArr));

  return merge(leftHalf, rightHalf);
};

function merge(left = [], right = []) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
  }

  return [...sortedArr, ...left, ...right];
}
