const average= (arr)=>{
    let total=0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
};
let arr=[1,2,3,4,5,6,7,8];
console.log(average(arr));