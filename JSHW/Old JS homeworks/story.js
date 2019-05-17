
//conditional statements

var adventures = 'desert';

if (adventures == 'amazonas'){
    console.log ('if you go here, you will get eaten by mosquitos');
}
else if (adventures == 'desert'){
    console.log ('if you go here, you better bring water');
}
else if (adventures == 'northPole'){
    console.log ('if you go here, you may meet Santa');
}
else {
    console.log('you are boring');
}

// functions
var advChoice1 = 'amazonas';
var advChoice2 = 'desert';
var advChoice3 = 'northPole';

function outcome1(advChoice1){
    var adventureStory = advChoice1 + 'you get eaten by mosquitos';
    console.log(adventureStory);
}
 outcome1 ('amazonas, ');
 
 function outcome2 (advChoice2){
     var adventureStory = advChoice2 + 'you better bring water';
    console.log(adventureStory);
    }

outcome2 ('desert, ');


function outcome3 (advChoice3){
    var adventureStory = advChoice3 + 'you may meet Santa';
    console.log(adventureStory);
}

outcome3 ('northPole, ');

//function with conditional statements

function adventure (){
    if (advChoice1 == 'amazon'){
        console.log ('if you go here, you get eaten by mosquitos');
    } else if (advChoice2 == 'desert'){
        console.log ('if you go here, you better bring water');
    } else if (advChoice3 == 'northPole'){
        console.log ('if you go here, you may meet Santa');
    } else {
        console.log ('you did not pay some darn attention');
    }
}

adventure (advChoice2);