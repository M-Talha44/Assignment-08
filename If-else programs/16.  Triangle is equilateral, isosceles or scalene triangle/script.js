var a=+prompt("To Check a Triangle is equilateral, isosceles or scalene \n Enter a 1st side angle");
var b=+prompt("Enter a 2nd Side Angle");
var c=+prompt("Enter a 3rd Side Angle");
var sum=a+b+c;
var d=sum;
if(d<=180)
    {
    if (a==b && b==c) {
        console.log(a,b,c,"So Triangle is equilateral");
    } else if (a!=b && b==c) {
        console.log(a,b,c,"So Triangle is isosceles");
    } else if(a==b && b!=c){
        console.log(a,b,c,"So Triangle is isosceles");
    } else if( a==c && c!=b){
        console.log(a,b,c,"So Triangle is isosceles");
    }
    else {
        console.log(a,b,c,"So Triangle is scalene");  
    } 
 
}
else{
    console.log("The Sum of Angles Should be less than or equal to 180");
    
}