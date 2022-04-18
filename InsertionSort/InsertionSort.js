function insertionSort(array){
    let len = array.length;
    
    for(let i = 0; i < len; i++){
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = key;
    }

    return array;
}

function printArray(array){
    let len = array.length;
    let output = "";

    for(let i = 0; i < 5; i++){
        output += array[i] + " ";
    }

    return output;
}