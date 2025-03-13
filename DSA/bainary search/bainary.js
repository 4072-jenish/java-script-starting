

   console.log("Bainery search :");
   let arr = [1,2,3,4,5,6,7,8,9,10];

   function baineryseach(arr , searchEle){
          let left = 0;
          let right = arr.length - 1;

         let  mid =Math.floor((left + right) / 2);

    

        while (left <= right){
            if(arr[mid] == searchEle){
                return mid;
            }else if( arr[mid] < searchEle){
                left = mid + 1;
            }else if(arr[mid] > searchEle){
                right = mid - 1;
            }
        }
        return -1;
   }
   

console.log(baineryseach(arr ,(43)));