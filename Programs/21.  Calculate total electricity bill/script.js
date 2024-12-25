var Unit=+prompt("To Check a Total Electricity Bill \n Enter Electricity unit charges ");
var a=0
if (Unit <= 50) {
    a= 0.50 * Unit *20/100;
    console.log(a);
    
} else if (Unit >50 && Unit <=150) {
    a= 0.75 * Unit *20/100 ;
    console.log(a);
} else if (Unit >150 && Unit <=250) {
    a= 1.20 * Unit * 20/100;
    console.log(a);
    
} else if (Unit > 250) {
    a= 1.50 * Unit * 20/100 ;
    console.log(a);
    
} else {
    console.log("Invalid Number");
    
}