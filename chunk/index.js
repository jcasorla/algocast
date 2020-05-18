// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) - -> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    const chunked=[];

    // for(let element of array){
    //     const last= chunked[chunked.length-1];

    //     if(!last || last.length===size){
    //         chunked.push([element]);
    //     }
    //     else{
    //         last.push(element);
    //     }
    // }

    for(let i=0; i<array.length; i++){
        const last= chunked[chunked.length-1];

        if(!last || last.length===size){
            chunked.push([array[i]]); //create chunk and push it to array
        }
        else{
            //add current element to chunk
            last.push(array[i]);
        }

    }

    return chunked; 
    //note this works because last is pointing to chunked subarray by reference

 
}

console.log(chunk([1, 2, 3, 4], 2));

//other solution

// function chunk(array,size){
//     const chunked = [];
//     let index = 0;

//     while(index < array.length){
//         chunked.push(array.slice(index, index + size));
//     }
//     return chunked;
// }

module.exports = chunk;

// var count =0;
// arr=[];
// chunk=[];
// for(let i =0; i< array.length; i++){
//     if(count<size){
//         chunk.push(array[i]);

//         count++

//     }
//     if(count==size){
//         arr.push(chunk);
//         count=0;
//         chunk=[];
        
//     }
    
    
// }
// return arr;