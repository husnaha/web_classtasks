function update() {
    console.log ("event is fired");
    // i want tto create variables
    var x=10;
    var y=20;
    console.log(x*y);
    // i want to create function in js
    function sum(a,b){
        return a+b;
        // if i want to assignfunction to variable
        var mysum = sum;
        console.log(mysum)
    }
}
