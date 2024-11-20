function flip(array, n) {
    let start = 0;
    while (start < n) {
        [array[start], array[n]] = [array[n], array[start]];
        start++;
        n--;
    }
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    if (array.length < 2){
        return array;
    }
    let curSize = array.length;
    while (curSize >1){
        let zero = 0;
        for (let i =1; i < curSize;i++){
            if (array[i] > array[zero]){
                zero=i;
            }
        }
        if (zero!==curSize - 1){
            flip(array,zero);
            flip(array,curSize-1);
        }
        curSize--;
}

    return array;
}
        







    
