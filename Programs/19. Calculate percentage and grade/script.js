var a=+prompt("Enter a Marks of Each Subjects \n Physics");
var b=+prompt(" Chemistry");
var c=+prompt(" Biology");
var d=+prompt(" Mathematics");
var e=+prompt("Computer");
var percentage=(a+b+c+d+e)/500*100;
console.log(percentage ,"Percent");
var t=percentage;
if (t >= 90 ) {
    console.log("Grade A");
} else if (t >=80) {
    console.log("Grade B");
} else if (t >=70) {
    console.log("Grade C");
} else if (t >=60) {
    console.log("Grade D");
} else if (t >=40) {
    console.log("Grade E");
} else  {
    console.log("Fail");
}