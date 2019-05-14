var cycle3 = [
    'Shawn',
    'Sandra',
    'Les',
    'Hugh'
];

//for loop
for(var m = 0; m < cycle3.length; m++){
    console.log(m);
    var x = cycle3[m];
    console.log (x);

}

//filter

var c3shortnames = cycle3.filter(item => {
    return item.length < 5;
})
 console.log(c3shortnames);

 //map

 var c3SM = cycle3.map(item => {
    return item + ':The Scrum Master';
 });

 console.log(c3SM);

 //for each

 cycle3.forEach(element => {
    console.log(element);
  });
 