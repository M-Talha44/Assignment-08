var cost=prompt("Enter Your Product Cost");
var sellingPrice =prompt("Enter Your Product Selling Price ");
var  c=sellingPrice - cost;
if (c>1) {
    console.log("You hava a Profit of",c);
    
} else {
    console.log("You have a Loss of",c);
    
}
