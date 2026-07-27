// Question 1 => Write the tabel fo 5 
// for(i=1;i<10;i++){
    // console.log(`${number} x ${i} = ${number*i}`);
// }


// Question 2 => // factorial of Number . 

// let number=5;
// let i =1;
// let factorial=1;
// i=1;
// while(i<=number){
//     factorial*=i;
//     i++;
// }
// console.log(factorial);  Output =>120;


// Question 3 => reverse.  123 => 321

// let number=123456789;
// let remainder=0;
// let reverse=0
// for(i=1;number!=0;i++){
//     remainder=number%10;
//     reverse=reverse*10+remainder;
//     number=parseInt(number/10);
// }

// console.log(reverse); Output => 4321


// Question 4 => Pallindrome. 121 => 121

// let value=100001;
// let reverse=0;
// let x=value;
// let remainder=0;
// for( let i=1;value!=0;i++){
//     remainder=value%10;
//     reverse=reverse*10+remainder;
//     value=parseInt(value/10);

// }
// console.log(reverse);

// console.log(x);

// if(reverse===x){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not a Palindrome");
// }

// Question 5 => Evenpallindroem or Odd Pallindrome. 121 => 1+2+1 => 4 even pallindrome.


// let value =3232;
// let remainder=1;
// let reverse=0;
// let x=value;
// let sum=0;
// for(let i=0; value!=0; i++){
//     remainder=value%10;
//     reverse=reverse*10+remainder;
//     value=parseInt(value/10);
//     sum+=remainder;
// }
// // console.log(reverse);
// if(reverse===x){
// if(sum%2==0){
//     console.log("Even Pallindrome", reverse);
// }
// else{
//     console.log("Odd Pallindrome",reverse);
// }
// }

// else{
//     console.log("Not a Pallindrome",reverse);
// }
// Question 6 => Check if give string or word is pallindrome or not. eye => eye pallidrome.

    // let text = "eye";
  

// function pallindrome(text){
//       let orginaltext = text;

//     let ans = [];
//     let size=text.length;
//     for(let i =0; i<size; i++){
//         ans.unshift(text[i]);
//     }
//  let reverse_word = ans.join("");


//  if(reverse_word.toLowerCase() === orginaltext.toLowerCase()){
    
//     return`Is Palindrome, ${orginaltext}`;
 
// }
// else{
//     return`Isn't palindrome", ${orginaltext}`;
// }

// }
//  const ans_check = pallindrome("Level");
//  console.log(ans_check);

// Question 7 => Buzz number number last digit 7 or number divisible by 7 

// let number= 27;

// if(number%7==0 || number%10==7 ){
//         console.log(`${number} is buzz number`);
//     }
// else{
//     console.log(`${number} is not buzz number`);
// }
    

// Question 8 => Niven number => number sum 18= 1+8=9 can divde number completely 18/9=0 that's a nieven number 

// let number = 24;
// let remainder=1
// let sum=0
// let og_number=number;

// for(let i=0;number!=0;i++){
//     remainder=number%10;
//     sum+=remainder;
//     number=parseInt(number/10);
  
// }
// console.log(sum);
// if(number%sum==0){
//     console.log(`${og_number} is Niven number`);
// }
// else{
//     console.log(`${og_number} is not Niven Number`);
// }

// Question 9 => Strong Number = like factorial is equal to original number like 145 !1 !2 !3 !4;

// let number= 120;
// let remainder=0;
// let factorial=1;


// let i = 0
// while(number!=0){
   
// i++;
// } 

// console.log(factorial);


// Question 10 => Fibonacci series. fibbonacci number 0,1,1,2,3,5,8 .... like 0,0+1=1,1+1=2,1+2=3...


// let needFebo_num=10;
// let x=0;
// let y=1;

// for(let i = 0; i<needFebo_num;i++){
//     console.log(x);
    

//     let z =x+y;
//     x=y;
//     y=z;
// }




// Question 11 => Neon number. => number square 9*9= 81 => sum 8+1=9 neon number.

// let number=9;
// let og_Num=number;
// let square=number*number;
// console.log(square);
// let num_Sum=0;
// for(let i = 0; number!=0;i++){

//     let remainder=number%10;
//     num_Sum=num_Sum+remainder;
//     number=parseInt(number/10);

// }
// console.log(num_Sum);

// if(og_Num == num_Sum ){
//     console.log("Neon Number");
// }
// else{
//     console.log("Not neon Number");
// }

// Question 12 Armstrong number 

// let isArmStrong=153;
// let og_Arm=isArmStrong;
// let temp=og_Arm;
// let number=0;

// let count=0;

// let result=0;
// for(let i = 1; isArmStrong!=0;i++){
//     count++;      
//         isArmStrong= parseInt(isArmStrong/10);

//     }
// console.log(og_Arm);
// while(temp!=0){
//     number=temp%10;
//     result+=Math.pow(number,count);
//     temp=parseInt(temp/10);

// }
// if(result===og_Arm){
//     console.log("Strong Number",result);
// }
// else{
//     console.log("Not strong Number",result);
// }