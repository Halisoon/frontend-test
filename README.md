// algorithm

array = [1, 2, 3, 4, 5];
  const miniMaxSum = (input) => {
    // clone array and sort
    let arr = [...input].sort();
    // sum max
    let max = arr.slice(1).reduce((a, b) => a + b, 0);
    arr.reverse();
    // sum min
    let min = arr.slice(1).reduce((a, b) => a + b, 0);
    console.log(min + " " + max);
  };

  const total = (input) => {
    const total = array.reduce((a, b) => a + b, 0);
    console.log(total);
  };

  const findMin = (input) => {
    let arr = [...input].sort();
    console.log("find min " + arr[0]);
  };

  const findMax = (input) => {
    let arr = [...input].sort();
    arr.reverse();
    console.log("find max " + arr[0]);
  };

  const findEven = (input) => {
    let newArr = input.filter((vl) => vl % 2 == 0);
    console.log(newArr);
  };

  const findOdd = (input) => {
    let newArr = input.filter((vl) => vl % 2 != 0);
    console.log(newArr);
  };