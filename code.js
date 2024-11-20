function flip(array, n) {
    let start = 0;
    while (start < n) {
        [arr[start], arr[n]] = [arr[n], arr[start]];
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
            flip(array,curSize-1)
        }
        curSize--;
}
for (let i =1; i <array.length;i++){
    let pos = 0;
    if (array[i] <=array[0]){
        if (i ==1){
            flip(array, i+1);
        }
        else{
            flip(array,i)
            flip(array,i+1);
        }
    }
    else if (array[i]>array[0] && array[1]<array[i-1]{
        flip(array,i+1);
        while (array[0] <= array[pos]){
            pos++;
        }
    flip(array,pos);
    flip(array,pos -1);
    flip(array,i+1);
    }
}
    return array;

        







    
