function swap(array, a, b){
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function bubbleSortRec(array, len){
    if(len = 1)
        return;

    for(let i  = 0; i < len - 1; i++){
        if(array[i] > array[i+1])
            swap(array, i, i+1);
    }

    bubbleSortRec(array, len - 1);
}

function printArray(array){
    let len = array.length;
    let output = "";

    for(let i = 0; i < len; i++){
        output += array[i] + " ";
    }

    return output;
}