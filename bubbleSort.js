/*  Bubble Sort implementation in JS 
	Author : Vimal Madhavan
	Bubble Sort works by comparing the adjacent elements starting from one end and placing that element in its 
	right position at the end of each pass
	Since it has to loop over all the elements on each pass, it has time complexity of O(n2) 
*/
function bubbleSort(ar){
    
    var i, j, temp;
    for(var i=0; i< ar.length;i++){
        for(j=ar.length-1;j>=i;j--){
            if(ar[j-1] > ar[j]){
                temp = ar[j-1];
                ar[j-1]=ar[j];
                ar[j] = temp;
            }
        }
    }
    return ar;
}

bubbleSort([4,55,241,1246,-134,1,44, 124,99,335,221,2,44,5,1,1,56,7]);