function insertionSort(arr){
    var i, j, temp;
    for(var i=1;i<arr.length;i++){
        temp=arr[i];
        for(var j=i-1;j>=0;j--){
            if(temp < arr[j]){
                arr[j+1]=arr[j];
                if(j==0){
                  arr[j]=temp;
                }
            } else{
                arr[j+1]=temp;
                break;
            }
        
        }
    }
    console.log(arr);
    return arr;
}

insertionSort([7,5,-5,1,0,8,3,-422,34,14,87,25,11,111,-54,24,55,4,-555]);