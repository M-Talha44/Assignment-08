var Unit=+prompt("To Check a Total Electricity Bill \n Enter Electricity unit charges ");
var a;
var b;

 if (Unit <= 50) {
   a= 0.50 * Unit ;
   b=a*20/100 
    console.log(a+b);
    
} else if (Unit >50 && Unit <=150) {
    a= 0.75 * Unit ;
    b=a*20/100 
    console.log(a+b);
} else if (Unit >150 && Unit <=250) {
    a= 1.20 * Unit ;
    b=a*20/100 
    console.log(a+b);
    
} else if (Unit > 250) {
    a= 1.50 * Unit ;
    b=a*20/100 ; 
    console.log(a+b);
    
} else {
    console.log("Invalid Number"); 
    
}  