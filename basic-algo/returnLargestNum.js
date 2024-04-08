// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
    let cArr = [...arr];
    const results = [];
    for(i=0;i<cArr.length;i++){
        let max = cArr[i][0];
        for(j=0;j<cArr[i].length;j++){
            if(cArr[i][j] > max){
                max = cArr[i][j];
            }
        }
        results[i] = max;
    }
    console.log(results);
  return results;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
