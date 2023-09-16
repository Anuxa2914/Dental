/*let arr = [2, 10, 15, 20, 25];

const doubledArray = arr.reduce((total, curr) => {
  return total.concat(curr * 2);
}, []);

console.log(doubledArray);

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

/* Function to remove duplicates from an array
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

var uniqueArray = removeDuplicates(arr1);
console.log(uniqueArray);*/

//let names=['PUGAZH','santhosh','ANU','KUNAL']
//const ans=names.map

// let arrNum=[15,39,20,32,30,45,22]
// let result=arrNum.filter(multi)

// function multi(arrNum)
// {
//     return ans=arrNum+1

// }

// console.log(result);

let arrNum = [15, 39, 20, 32, 30, 45, 22]
function divBythree(num) {
  return num % 3 == 0
}
let arrNewNum = arrNum.filter(divBythree)
console.log(arrNewNum)


let names=['PUGAZH','santhosh','ANU','KUNAL']

const result = names.map((item)=>{
    let upper =item.toUpperCase();
    if(item == upper){
        return(item);
    }

})

const result1=result.filter(ans => ans!=undefined);
    console.log(result);
    console.log(result1);
    // item.toUpperCase());
// console.log(upperCaseArray);
// function capital(upperCaseArray) {
//     return upperCaseArray == names
//   }
//   let arr = upperCaseArray.filter(capital)
//   console.log(arr)

const arr=[100,150,300,200,220,250,300]
// let greater=arr.find(({value})=>
// value>200
// );
// console.log(greater)
// console.log(typeof(arr[0]))
// let adultMember = arr.find(({ value }) => value > 90);

let arr1=arr.filter(arr => arr>200);
console.log(arr1);

let least=Math.min.apply(null,arr1);
console.log(least);

names=['PUGAZG','santhosh','tarunkumar','KUNAL','ANU','saravana']
names.reverse()
console.log(names);















