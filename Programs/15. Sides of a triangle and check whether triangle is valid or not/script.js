var a=+prompt("To Check the Triangle is Valid or Not \n Enter 1st side Length  ");
var b=+prompt("Enter 2nd Side Length ");
var c=+prompt("Enter 3rd Side Length ");
if (a + b > c ) {
    console.log("Triangle is Valid");
} else if (b + c > a ) {
    console.log("Triangle is Valid");
} else if (a + c > b ) {
    console.log("Triangle is Valid");
} else {
    console.log("Triangle is not Valid");
}