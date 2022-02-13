/**
 * Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. 
 * If there is such a triplet present in array, then print the triplet and return true. Else return false.
 * 
 * Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
 * Output: 12, 3, 9 
 * Explanation: There is a triplet (12, 3 and 9) present in the array whose sum is 24. 
 * 
 * Input: array = {1, 2, 3, 4, 5}, sum = 9 
 * Output: 5, 3, 1 
 * Explanation: There is a triplet (5, 3 and 1) present in the array whose sum is 9.
*/

function findTriplets(array, sum){
    console.log(`Running solution1: ${solution1(array,sum)}`);
    console.log(`Running solution2: ${solution2(array,sum)}`);
    console.log(`Running solution3: ${solution3(array,sum)}`);
}

function solution1(array, sum){
    for(index=0; index<array.length; index++){
        let num = array[index];
        for(let i=0, y=array.length-1; i<array.length, y>-1; i++, y--){
            if(i!=y && i!=index && y!=index){
                if(num+array[y]+array[i]==sum){
                    console.log([num, array[i], array[y]])
                    return true
                }
            }
        }
    }        
    return false;
}

function solution2(array, sum){
    for(index=0; index<array.length; index++){
        let num = array[index];
        let i = 0;
        let y=array.length-1;   
        while(i<array.length && y>-1){
            if(i!=y && i!=index && y!=index){
                if(num+array[y]+array[i]==sum){
                    console.log([num, array[i], array[y]])
                    return true
                }
            }
            i++;
            y--;
        }
    }        
    return false;
}

function solution3(array, sum){
    for(index=0; index<array.length; index++){
        let num = array[index];
        let i = 0;

        while(i<(array.length+1)/2){
            let currentSum = num+array[i];
            let y=array.length-1;
            while(y>(array.length+1)/2){
                if(i!=y && i!=index && y!=index && currentSum+array[y]==sum){
                    console.log([num, array[i], array[y]])
                    return true;
                }
                y--;
            }
            i++;
        }
    }        
    return false;
}

function test(){
    const inputList = [[12, 3, 4, 1, 6, 9],
                    [1, 2, 3, 4, 5]];
    findTriplets(inputList[0], 24);
    findTriplets(inputList[1], 9);
}

test();
