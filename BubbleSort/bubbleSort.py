def bubbleSort(array):
    len = len(array)
    
    for i in range(len):
        for j in range(0, len - i - 1):
            if array[j] > array[j+1]:
               array[j], array[j+1] = array[j+1], array[j]
       
