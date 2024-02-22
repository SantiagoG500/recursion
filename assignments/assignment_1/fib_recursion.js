export const fibWithRecursion = (num, sequence = [0, 1]) => {
  if (sequence.length === num) return sequence;
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return fibWithRecursion(num, sequence);
};
