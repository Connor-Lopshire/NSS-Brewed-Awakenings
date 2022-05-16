import { getProducts} from "./database.js"
import {  getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()
const products = getProducts()



















//  export const findOcc = (arr, key) => {
//     let orderCount = [];
      
//     arr.forEach((x)=>{
         
//       // Checking if there is any object in orderCount
//       // which contains the key value
//        if(orderCount.some((val)=>{ return val[key] == x[key] })){
           
//          // If yes! then increase the occurrence by 1
//          orderCount.forEach((k)=>{
//            if(k[key] === x[key]){ 
//              k["occurrence"]++
//            }
//         })
           
//        }else{
//          // If not! Then create a new object initialize 
//          // it with the present iteration key's value and 
//          // set the occurrence to 1
//          let a = {}
//          a[key] = x[key]
//          a["occurrence"] = 1
//          orderCount.push(a);
//        }
//     })
      
//     return orderCount
//   }