const mergeSort = (arr) => {
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
    return merge(left,right);
}

const merge = (left,right) =>{
    let leftIndex=0,rightIndex=0;
    let result=[]
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while(leftIndex<left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

const arr=[156,2,4,2,4,2,4,6,0,5,67,9,52,7,96,2,14]
console.log(mergeSort(arr));