console.log('Hello World');

// string
var guitar = 'guitarra';
var drums = 'bateria';

console.log ( guitar);
console.log (drums);
 
//number
var cuatro = 4;
var nueve = 9;

console.log (cuatro, nueve);

//boolean
var rodrigoYgabriela = true;
var friends = false;

console.log (rodrigoYgabriela, friends);

//ecuations
var ecuation1 = 5 * 5;
var ecuation2 = ecuation1 - 10;
var ecuation3= (ecuation1 + ecuation2)/2;

console.log (ecuation1);
console.log(ecuation2);
console.log (ecuation3);

var ecuations = [ ecuation1,ecuation2,ecuation3];

//Array
var overNightBag = ['toothBrush','contacts','clothes'];
var pairsToTen = [2,6,8];
console.log (overNightBag);
console.log (pairsToTen);

//Push function
overNightBag.push('makeUp');
console.log(overNightBag);

pairsToTen.push (4,10);
console.log (pairsToTen);

//splice function
console.log (overNightBag.splice(0,2));

console.log (pairsToTen.splice (0,3));

//reverse function

console.log (overNightBag);
overNightBag.reverse ();

console.log(overNightBag);

//String interpolation

var mayDays= 31;
var maySentence= `The number of days in May is ${mayDays}`;

console.log (maySentence);

// Type of variable

console.log (typeof guitar);
console.log (typeof friends);
console.log (typeof ecuation3);
console.log (typeof pairsToTen);
console.log (typeof mayDays);