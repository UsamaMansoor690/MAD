
// Usama Mansoor (FA20-BCS-026)
// Array Methods

// 1) toString
/* Converts an array into a string */
var students = ["Usama", "Aamir", "Alyaan", "Ali"];
var to_String = students.toString();
console.log(to_String);

/* 2) join
 Joins all array elements into a string, just like toString() method. */
 var departments = ["CS", "EE", "Math", "BBA"];
 var join_elements = departments.join(" : ");
 console.log(join_elements);

 /* 3) push
  pushes an element into an array */
students.push("Awais");
console.log(students);

 /* 4) pop
poping an element from an array */
students.pop();
console.log(students);

/* 5) shift
removes the first element and shift all elements to a lower index */
students.shift();
console.log(students);

/* 6) unShift
add a new element to an array at start and move all elements to next indexes*/
students.unshift("Usama Mansoor");
console.log(students);

/* 7) concat
we can merge two arrays by using the concat() method */
var concat_arrays = students.concat(departments);
console.log(concat_arrays);

/* 8) splice
this method changing an array by removing or replacing existing elements. This method takes 3 parameters: starting index, the number of elements to remove and the elements to add */
students.splice(3, 0, "Ahmed", "Junaid");
console.log(students);

/* 9) slice
this method returns a new array that contain a portion of the original array. It takes 2 parameters: starting and ending index. */
var slice_Array = students.slice(0,3);
console.log(slice_Array);

/* 10) map
this method creates a new array with the same length of original array by applying a function to each element in array. */

function mapFunc(num) {
    num = num + 10;
    return num;
}
var num_array = [10, 20, 30, 40, 50];
num_array = num_array.map(mapFunc);
console.log(num_array);

/* 11) filter
this method creates anew array (length less than or equal in length of original array) that returns true value after applying filter function. */
function filterFunc(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var arr = [10, 13, 11, 20];
var filterArray = arr.filter(filterFunc);
console.log(filterArray);