//Given a number. Print “odd” if the number is odd and “even” if it’s even.

if(a % 2 === 0){
    console.log("even")
 }else {
    console.log("odd")
 }

`Given a positive integer. Bring the last digit of the number to the beginning.
 Print the new number. If the last digit of the inserted number is 0, number remains the same.` 
if (a % 10 != 0 && a > 10){
   let lastDigit = a % 10
   let c = ( a - lastDigit) /10
   console.log (String(lastDigit)+ String(c))
}else if (a % 10 === 0){
    console.log(a)
} else if (a < 10 ){
console.log(a)
}

//Given five numbers as input. Calculate and print the average of the numbers(without using arrays)
let a, b, c, d, e
console.log((a + b + c + d + e) / 5)

 //Given three numbers. Sort them by the ascending order.
if (a > b && b > c){
   console.log(c,b,a)
} else if(a > b && b<c){
if (a>c){
console.log(b, c, a)
}else{
console.log(b, a, c)
}
}
  else if (a < b && b > c){
   if (a > c){
   console.log(c, a, b)
} else { console.log(a, c, b)
}
}

//Given the following code rewrite it using only two if operators. (Hint: use logical operators)

var n = +prompt()
var i = 0
var j = 0
if (n % 2 === 0 && !Math.floor (n / 10)){
   i +=1;
   }
if(n % 3 === 0 && n % 10 === 1){
   j += 1
   }