export const fibWithoutRecursion = (num) => {
  const arrlist = [0, 1];

  // for (let i = 0; i <= num; i++)
  for (let i = arrlist.length; i < num; i++)
    arrlist.push(arrlist[arrlist.length - 1] + arrlist[arrlist.length - 2]);

  return arrlist;
};
