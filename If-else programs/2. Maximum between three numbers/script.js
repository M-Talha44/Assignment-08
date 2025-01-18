var a=+prompt("Find a Maximum Number \n Enter 1st Number");
var b=+prompt("Enter 2st Number");
var c=+prompt("Enter 3st Number");
if (a>b && a>c) {
    console.log(a,"is Larger than",b,c);
}else if (a<b && b==c) {
    console.log( b ,c,"is Larger than",a);
} 
 else if (b>a && b>c) {
    console.log(b,"is Larger than",a,c);
} else if (b<a && a==c) {
    console.log( a,c,"is Larger than",b);
} else if (c>a && c>b) {
    console.log(c,"is Larger than",a,b);
} else if (c<b && b==a) {
    console.log( a ,b,"is Larger than",c);
} else if (a==b && b==c) {
    console.log("Equal to Each Other",a,b,c);
} else{   
     console.log("Invalid Numbers");
}   
