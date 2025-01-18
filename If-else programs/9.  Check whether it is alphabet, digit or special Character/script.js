var ch=prompt("Enter a Character \n To Check Whether it is Alphabet,Digit,Special Character");

if (ch>='A' && ch<='Z' || ch>='a' && ch<='z') {
    console.log(ch,"Character is an Alphabet");
}else  if (ch>='0' && ch<='9') {
       
    console.log(ch,"Character is in a Digit");
}else {
    console.log(ch," is a Special Character");
    
}  