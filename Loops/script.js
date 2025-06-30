// for (let i =0; i<20 ; i++){
//     console.log("hello");
// }

// for (let i=0; i<=4; i++){
//     console.log("hello" + i);
// }


// for (let i = 0; i<9; i=i+2){
// console.log("hello riya" +i);
// }

// for (let i=5; i>0; i--){
//     console.log("riya" + i);
// }

// let arr =[10, 6, 5, 6, 7, 7, 5, 4, 6]
// console.log(arr.length);

// for (let i=0; i< arr.length; i++){
//     console.log(arr[i]);
// }

//print all the even num in the given array

// let arr = [10, 4, 5, 7, 8, 6, 90, 45]

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2== 0){
//         console.log(arr[i]);
//     }
// }

// let i=0;
// while(i<5){
//     code
//     i++;
// }

// write a funtion that searches for an element in an array and returns the index, if the element is not present then just return -1

// let arr= [2, 4,6, 7, 6, 8,90]
// function findTheElement(arr,a){
//   for (let i =0; i<arr.length; i++){
//     if(arr[i]==a){
//         return i;
//     }
//   }
//   return -1;
// }

// let arr = [4, 7, 8,5]
// let result = findTheElement(arr, 8);
// console.log(result);

//write a function that returns the number of nagative numbers in an array

// let arr = [2, -3, -9, 170, 0, -1, -10, -4, 8];
// function countNegatives(arr){
//     let count =0;
// for (let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         count++;
//     }
// }
// return count;
// }
// let result = countNegatives(arr);
// console.log(result);

//find largest element in an array;;
// function findLargest(arr){
//     or let largest = arr[0];
//     let largest = -Infinity;
//     for (let i=0; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// let result = findLargest(arr);
// console.log(result);

// write a func to get the min element of an array

// let arr =[2, 4, 5, 1, -1];
// function findMin(arr){
//     let min = +Infinity;
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;

// }
// let result = findMin(arr);
// console.log(result);

// write a func to find second largest element in an array ---------

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;
//  let arr = [3, 5, 7, 9, 0, 5, 10, 34, 55];
//    function secondLargest (arr){

    //   if (arr.length <2) {
    //     return null;
    //   }


//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i=0; i< arr.length; i++){

//         if(firstLargest <arr[i]){
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         }
//         else if (secondLargest < arr[i] && arr[i] != fisrstLargest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
//    }

//    let result = secondLargest (arr);
//    console.log(result);

//loops within a loop


// for (let i = 0; i<5; i++){
//     for (let j=0; j<5; j++){
//         console.log("i=" + i+ "j=" +j)
//     }
// }

// for (let i =0; i<=3; i++){
//     for (let j=0; j<=i; j++){
//         console.log(i, j)
//     }
// }

// for (let i=0; i<3; i++){
//     for (j=i; j>0; j--){
//         console.log("i=" +i +" " + "j=" +j);
//     }
// }

// for (let i=5; i>0; i--){
//     for (j=0; j<i; j++){
//         console.log(i, j);
//     }
// }

//STAR PATTERNS
// let n= 6;
// for (let i=0; i<n; i++){
//     row = ""
//     for (j=0; j<n; j++){
//         row = row +"*"
//     } 
//     console.log(row);
// }

// let n = 4;
// for (let i=0; i<n; i++){
//     row =""
// for (let j=0; j<i+1;j++){
//     row= row + "*";
// }
// console.log(row);
// }

// let n = 5;
// for (let i=0; i<n; i++){
//     row =""
//     for (let j=0; j<=i; j++){
//         row= row+(j+1) 
//     }
//     console.log(row) 
// }

// for (let i=0; i<n; i++){
//     row =""
//     for (let j=0; j<=i; j++){
//         row = row + (i+1);
//     }
//     console.log(row)
// }

// for (let i=1; i<=5; i++){
//     row =""
//     for (let j=1; j<=i; j++){
//         row = row+i;
//     }
//     console.log(row)
// }

// for (let i=0; i<n; i++){
//     row =""
//     for (let j=0; j<n-i; j++){
//         row = row+(j+1);
//     }
//     console.log(row)
// }

// for (let i=0; i<=n; i++){
//     row =""
//     for (let j=1; j<=(n-i); j++){
//         row = row+ "*";
//     }
//     console.log(row)
// }


// for (let i=0; i<n; i++){
//     row =""
//     for (let j=1; j<(n-(i+1)); j++){
//         row = row+ " ";
//     }
//     for(let k=0; k<i+1; k++){
//         row = row+"*";
//     }
//     console.log(row);
// }

// for (let i=0; i<=n; i++){
//     let row =""
//     let toggle =1;
//     for (let j=1; j<(i+1); j++){
//         row = row+toggle ;
//         if(toggle ==1){
//             toggle =0;
//         }
//         else{
//             toggle =1;
//         }
//     }
//     console.log(row)
// }

// count digit 
// let n = 345687;

// function countDigit(n){
//     let count = 0;
//   while(n>0){
//     n = Math.floor(n/10);
//     count ++;
// }
// return count;
// }
// let digits = countDigit(132456789);
// console.log(digits);



