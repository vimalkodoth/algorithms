/*  Bubble Sort implementation in JS 
    Author : Vimal Madhavan
    Selection Sort works by selecting the smallest element ( by doing a linear search on the array ) from the remaining array 
    and placing the element at the right position, starting from the left end and moving towards the right end. 
    Since it has to loop over all the elements in each pass, it has time complexity of O(n2) 
*/
function arrayMin(ar, i){
    var min, temp;
    min=i
    for(var j=i+1;j<ar.length;j++){
        if(ar[j] < ar[min]){
            min = j  
        }
    }
    temp = ar[min];
    ar[min] = ar[i];
    ar[i] = temp;
    return ;
}


function selectionSort(ar){
    
    for(var i=0;i<ar.length;i++){
        arrayMin(ar, i);
    }
    print(ar);   
    return ar;
}

selectionSort([2342,25,-2,6,1,1555,114,-5,4,15,111,-12,356,122,0,9,13]);