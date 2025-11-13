function quickSort(arr,low,high){
    if(arr.length<2){
        return arr;
    }

    if(low<high){
        let pivotIndex=partition(arr,low,high);
        quickSort(arr,low,pivotIndex-1);
        quickSort(arr,pivotIndex+1,high);
    }
    return arr;
}

function partition(arr,low,high){
    let pivot=arr[low];
    let i=low;
    let j=high;
    while(i<j){
        while(arr[i]<=pivot && i<high){
            i++;
        }
        while(arr[j]>pivot && j>low){
            j--;
        }
        if(i<j){
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[low],arr[j]]=[arr[j],arr[low]];
    return j;
}

const arr=[1,5,2,46,3,42,45,516320,0,8,12]
console.log(quickSort(arr,0,arr.length-1));