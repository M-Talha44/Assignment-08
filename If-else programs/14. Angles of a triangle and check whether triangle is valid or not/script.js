var a=+prompt("To Check the Triangle is Valid or Not \n Enter 1st side angle ");
var b=+prompt("Enter 2nd Side Angle");
var c=+prompt("Enter 3rd Side Angle");
var sum=a+b+c;
 var d=sum;
if (d<=180) {
    console.log("Triangle is Valid");
} else  {
    console.log("Triangle is not Valid");
}