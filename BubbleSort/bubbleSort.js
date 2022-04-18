function swap(array, a, b){
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function arrayLength(array){
    let i = 0;

    while(array[i] != null){
        i++;
    }

    return i;
}

function bubbleSort(array){
    let len = arrayLength(array);

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(array[j] > array[j+1])
                swap(array, j, j+1);
        }
    }

    return array;
}

function printArray(array){
    let len = arrayLength(array);
    let output = "";

    for(let i = 0; i < len; i++){
        output += array[i] + " ";
    }

    return output;
}