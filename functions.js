// Given an array of strings, use a function to reverse all the elements in 
// the string in ascending order and the specific elements in descending order

function namereverse(){
 let namearr=["Jane","Mary","Lisa","Hanna"]
 let sortname=[...namearr].sort();
 console.log({sortname})
}
namereverse()


// Using JS functions and an array of numbers, return positive if
//  an element within the array is positive, negative i
// f an element is negative, else zero
// function Num(){
//     let nums=[7,9,-4,9]
//     nums.forEach((x)=>{
        
//             if(x >0){
//                 println(positive);

//             }
//             else(x < 0);{
//                 println(negative);
//             }
//             console.log({nums})

//          } );   
// }
// Num();

// Given an array of objects, where each object 
// represents an employee with an id, name, and salary property,
//  write a function that returns a new array of employee objects 
// sorted by their salary in ascending order.
function employees(){
    let id=["12342","6758","7896"]
    let name=["Majid","Walucy","Anne"]
    let salary=[20200,50100,20000]
    let sorted=salary.sort()
    console.log({sorted});
}
employees()



