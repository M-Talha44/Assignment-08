var a=+prompt(" Find a Maximum Number \n Enter 1st Number");
var b=+prompt("Enter 2nd Number");
if (a>b) {
    console.log(a,"is a Larger Number than",b );
} else if(a<b) {
    console.log(b,"is a Larger Number than",a);   
} else if (a=b) {
    console.log(a, "is equal to",b);
} else {
    console.log("Invalid Number");
    
}