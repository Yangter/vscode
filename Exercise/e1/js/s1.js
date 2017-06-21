
var n1 = (function helloGuy(name){
    var n = name;
    function printName(){
        console.log('hello '+ n);
    }
    return printName;
})("Jack");
n1();

var ps = document.getElementsByTagName('p');
console.log(ps.length);
