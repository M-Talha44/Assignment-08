var a=prompt("Input any Amount");
var b;
var c;
var d;
var e;
var f;
var g;
var h;
while (a>=5000) {

        b=a/5000;
        b=parseInt(b)
        console.log(a);
        
        console.log(b,"Notes of 5000 rupees");
        
    
    a=a%5000;

}
while (a>=1000) {
      
        
            c=a/1000;
            c=parseInt(c);
            console.log(c,"Notes of 1000 Rupees");
            
    a=a%1000;
    
}
while (a>=500) {

            d=a/500;
            d=parseInt(d);
            console.log(d,"Notes of 500 Rupees");
            
        
    a=a%500;
    
}
while (a>=100) {
    
        e=a/100;
        e=parseInt(e);
        console.log(e,"Notes of 100 Rupees");
        
    
    a=a%100;
}
while (a>=50) {
    
        f=a/50;
        f=parseInt(f);
        console.log(f,"Notes of 50 Rupees");
    
    a=a%50;
}
while (a>=20) {
    
        g=a/20;
        g=parseInt(g);
        console.log(g,"Notes of 20 Rupees");
        
    
    a=a%20;
}
while (a>=10) {
    
        h=a/10;
        h=parseInt(h);
        console.log(h,"Notes of 10 Rupees");
        
    
    a=a%10;
}
console.log("Remaining",a,"Rupees");