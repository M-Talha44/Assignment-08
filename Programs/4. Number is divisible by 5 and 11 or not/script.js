var a=+prompt(" To Check a number is divisible by 5 and 11 or not \n Enter a Number");
if (a % 5 ==0 && a % 11==0) {
    console.log(a,"is divisible by 5 and 11");
} else if (a % 5 ==0) {
        console.log(a,"is divisible by",5.);      
}
 else if (a % 11==0) {
    console.log(a,"is divisible by",11.);
} else {
    console.log(a,"is not divisible by 5 and 11.");
} 