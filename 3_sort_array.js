var arr = [12,3,19,1,7,20,5,14,9,2,17,6,8,4,11,10,13,18,15,16];

for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);
