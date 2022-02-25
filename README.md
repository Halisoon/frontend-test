array = [1,2,3,4,5];
<!-- miniMaxSum array -->
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

   <!-- Count total of array -->
     const total = (input) =>{
        const total = array.reduce((a, b) => a + b, 0);
        console.log(total);
    }
    

    <!-- find min array -->
    
    const findMin = (input) =>{
        let arr = [...input].sort();
        console.log("find min " + arr[0]);
    }

      <!-- find max array -->
    const findMax = (input) =>{
        let arr = [...input].sort();
        arr.reverse();
        console.log("find max " + arr[0]);
    }

    <!-- Find Even elements in array -->
    const findEven = (input) =>{
    let newArr = input.filter((vl) => vl % 2 == 0);
      console.log(newArr);
    }

     <!-- Find Odd elements in array -->
    const findOdd = (input) =>{
    let newArr = input.filter((vl) => vl % 2 != 0);
      console.log(newArr);
    }