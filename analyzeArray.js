export default function analyzeArray(arr) {
  const sum = arr.reduce((total, n) => total + n, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}