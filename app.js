var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea = function(l,w){
    return l*w;
    
};
var name = "Christian Corpus";
console.log('Age ' +age);
console.log('Pi ' +pi);
console.log('Date ' +date);
console.log('Name ' +name);
console.log(computeArea(10,60));

var x=1;
var y=null;
var waladiha=undefined;

if (x)
console.log('x is true');
if (!y)
console.log ('y is false');
if (!waladiha)
console.log ('waladiha is undifined');



//=======JSON Jacascript Object Notation;

var jsonObject = {
     name: 'Christian ',
     lastname: 'Corpus',
     address: 'California',
     
};
console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonstObject);