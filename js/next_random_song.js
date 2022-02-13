/**
 * You have list of songs: [2,1,5,3,.... 100 songs]
 * 
 * ### Constraints:
 * 1) Play songs randomly
 * 2) Dont play already played songs
 * 3) Space allowed O(1)
 * 4) Dont delete my array elements
 * 5) Return integer  // nothing to play return -1
 * 
*/

var listOfSongs = [];
var index = 0;
    
function playNext() {
    if(index >= listOfSongs.length){
        return -1;
    }
    else{
        let randint = getRandomInt(index, listOfSongs.length-1);
        let value = listOfSongs[randint];
        listOfSongs[randint] = listOfSongs[index];
        listOfSongs[index++]=value;
        return value;
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function test(numberOfNextPresses){
    listOfSongs = [2,1,3,4,9,100];
    index = 0;
    for(let i=0; i<numberOfNextPresses; i++){
        console.log(`Next Song: ${playNext()}`);
    }
}

test(10);
 