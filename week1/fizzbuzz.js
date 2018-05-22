// use this template for your fizzbuzz code

function fizzbuzz(numbers) {
  // assume numbers is an array of integers.  fizzbuzz should return a new
  // array where multiples of 3s and 5s become "Fizz" "Buzz" or "FizzBuzz"
  // using numbers.map()
  // YOUR CODE HERE
  var newArr = numbers.map(function(num) {
    if (num % 3 == 0 && num % 5 != 0) {
      return "Fizz";
    } else if (num % 5 == 0 && num % 3 != 0) {
      return "Buzz";
    } else if (num % 3 == 0 && num % 5 == 0) {
      return "FizzBuzz";
    } else {
      return num;
    }
  });
  return newArr;
}

// here's a test case to see if you got it right
// DON'T CHANGE THIS
function test() {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  let updatedArray = fizzbuzz(arr);
  updatedArray.forEach(element => {
    console.log(element);
  });
}

test();
