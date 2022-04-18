function insertionSortRec(array, len){
    if(len <= 1)
        return;
    
    insertionSortRec(array, len - 1);

    let last = array[len - 1];
    let i = len - 2;

    while(i >= 0 && array[i] > last){
        array[i+1] = array[i];
        i--;
    }

    array[i + 1] = last;
}

function printArray(array){
    let len = array.length;
    let output = "";

    for(let i = 0; i < 5; i++){
        output += array[i] + " ";
    }

    return output;
}