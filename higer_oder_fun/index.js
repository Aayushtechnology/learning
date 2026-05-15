function add(){
    console.log(" hi ");
    
}
function higgerOrderFubn(fun){
fun()    
}
higgerOrderFubn(add)
// output hi
// arguments add


// map
// the map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// ransformation arry


//Convert numbers into double
var n =[10, 20, 30, 40]

const nums = n.map((num) => { return num * num })

console.log(nums);


const num = n.map((num) => { return num /3})
console.log(num);


// 4 
const x = ["ram", "shyam", "hari"]


//object 
const user1 =  [
{ name: "Aayush", age: 20 },
{ name: "Ram", age: 25 }
  ]

  const users = user1.map((user)=>{
      return `        productname: ${user.name}   `
    
  })
  console.log(users);
  
const products = [
    { product: "Phone", price: 10000 },
    { product: "Laptop", price: 50000 }
];

const result = products.map(item => `${item.product} costs ${item.price}`);
console.log(result);