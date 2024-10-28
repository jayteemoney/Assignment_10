/*Task 1:
1. Create a variable called number and assign it any integer.
2. Use an if-else block to print whether the number is positive, negative, or
zero using console.log(). */

// solution
let number = 2;

if (number > 0){
    console.log("it is a positive number"); 
}else if(number < 0){
    console.log("it is a negative number");   
}else{
    console.log("it is zero");   
}

/*Task 2:
1. Create a variable called day and assign it the name of any day (e.g.,
'Monday').

2.Use a switch statement to print whether the day is a weekday or
weekend. */

// solution
let day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('it is a weekday');
        break;
    case 'tuesday':
        console.log('it is a weekday');
        break;
    case 'wednesday':
        console.log('it is a weekday');
        break;
    case 'thursady':
        console.log('it is a weekday');
        break;
    case 'friday':
        console.log('it is a weekday');
        break;
    case 'saturday':
        console.log('it is weekend');
        break;
    case 'sunday':
        console.log('it is weekend');
        break;
    default :
        break;
}

/*Task 3:
1. Write a for loop that prints numbers from 1 to 10.
2.Use console.log() to print each number in the loop. */
 
// solution
let i =1;
 for (let i = 1; i<=10; i++){
    console.log(i);
 }

 /*Task 4:
1.Create a variable called count and initialize it to 1.
Use a while loop to print the multiplication table of 5 (e.g., 5 × 1 = 5, 5 × 2 =
10) until 5 × 10.
2.
3.Use console.log() to display each step.
 */

// solution
let count = 1;


while (count <= 10){
    console.log(`5 x ${count} = ${5 * count}`);
    count++;
}

/*Task 5:
1. Declare and initialize a number with value of 0
2.Write a do-while loop that Checks if that number is greater than 10.
3.Keep Incrementing the number by 1.
4.Use console.log() to print "The number is: [number]". */

// solution

let x = 0;
do {
    console.log(`the number is: ${x}`); 
} while (x > 10);

/*Task 6:
1.Write a for loop that prints numbers from 1 to 10.
2.Use a break statement to exit the loop when the number 5 is reached.
3.Use console.log() to print each number. */

// solution

for (let i = 1; i<=10; i++){
    if (i===5){
        break;
    }
    console.log(i);
}

/*Task 7:
1.Write a for loop that prints only even numbers between 1 and 20.
2.Use a continue statement to skip odd numbers.
3.Print each even number using console.log(). */

// solution

for (let i = 1; i <= 20; i++){
    if(i % 2 !==0){
        continue;
        
    }
    console.log(i);
    
}

/*Task 8:
1.Write a function that takes two numbers as parameters and divides the
first by the second.

2.Use try-catch-finally to handle division by zero.
3.Print the result if the division is successful, otherwise print an error
message. */

// solution
try {
    let result = num1 / num2;
    if (result === Infinity) {
      throw new Error("it cannot be divisible by 0");
    }
    console.log(result);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("the division is completed");
}


/*Task 9:
1. Write a function called multiply that takes two numbers as parameters
and returns their product.
2. Call the function with any two numbers and print the result using
console.log(). */

// solutions
function mult_Num (x, y){
    return (x*y);
}
mult_Num(5, 6);

/*Task 10:
1.Write a program that prints numbers from 1 to 30.
2.Print 'Fizz' if the number is divisible by 3.
3.Print 'Buzz' if the number is divisible by 5.
4.Print 'FizzBuzz' if the number is divisible by both 3 and 5.
5.Use console.log() to print each result.
 */

// solution
for (let i =1; i <=30; i++){
    if(i % 3 ===0 && i % 5===0){
        console.log("FizzBuzz");  
    }else if(i % 3 ===0){
        console.log("fizz"); 
    }else if(i % 5===0){
        console.log("Buzz");    
    }else{
        console.log(i);
        
    }
    
}