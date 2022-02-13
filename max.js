// var business = 350;
// var minister = 450;
// var army = 600;

// if (business > minister && business> army) {
//     console.log ('Business er pula is bigger');
// }
// else if (minister> business && minister> army) {
//     console.log ('Minister er pula is bigger')
// }
// else {
//     console.log ('army er pula is bigger');
// }

function findLargest (business, minister, army) {
    if (business> minister && business> army) {
        return business;
    }
    else if (minister> business && minister> army) {
        return minister;
    }
    else {
        return army;
    }
}

const largest = findLargest(350,750,650);
console.log ("Larger is: ", largest);


function findSmallest (a, b, c) {
    if(a<b && a<c) {
        return a;
    }
    else if (b<a && b<c) {
        return b;
    }
    else {
        return c;
    }
}

const smallest = findSmallest(120, 200, 180);
console.log (smallest);

