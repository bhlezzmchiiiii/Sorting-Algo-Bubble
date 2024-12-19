function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          console.log( 'Swapped ${arr[i]} and ${arr[i + 1]}. Array is now: ${JSON.stringify(arr)}');
        }
      }
    } while (swapped);
    return arr;
  }
  
  let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];
  
  console.log("Unsorted array:", numbers);
  const sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array:", sortedNumbers);
