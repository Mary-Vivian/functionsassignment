// Given an array of strings, use a function to reverse all the elements in 
// the string in ascending order and the specific elements in descending order

function namereverse(namearr){

 let sortname=[...namearr].sort();
 console.log({sortname})
}


// correction
namereverse(["Jane","Mary","Lisa","Hanna"])
function namesReverse(namearr){
    const reversename=namearr.map(name =>[...name].reverse().join(''));
    console.log(reversename);
}
namesReverse(["Mary", "Jane","Hawa","Zippy"])

// Using JS functions and an array of numbers, return positive if
//  an element within the array is positive, negative i
// f an element is negative, else zero
function Num(numberarr){
    numberarr.forEach(y=>{
        if(y>0){
            console.log(( y + "positive"));
        }
        else {
            console.log((y + "negative"))
        }
         if (y==0){
            console.log(( y + "zero"))
        }
    });
    
}
 Num([7,-8,9,-1,0]);

// Given an array of objects, where each object 
// represents an employee with an id, name, and salary property,
//  write a function that returns a new array of employee objects 
    function Employees(employeedetails){
        return employeedetails.sort((a,b) => a.salary-b.salary);
    }
 Employees(employeedetails=[
        {firstid:1, name: 'Lina',salary:80000},
        {secondid:2, name: 'Tina',salary:50000},
        {thirdid:3, name:'Natalie',salary:900000}
        
    ]);
    const employeesbysalary= Employees(employeedetails);
    console.log((employeesbysalary));


    
 
 
// // Write a function that accepts an a
// // rray of numbers and uses the forEach()
// //  method to console.log each number multiplied by 2.
function arrnum(num){
    num.forEach(element => {
        console.log((element*2))
        
    });
}
arrnum([6,9,8,7])
 
// Write a function that takes in an array of
//  numbers and consoles the first four items multiplied by 8 and 
// the last two added by 5. Console the array with the new values
function itemsarr(items){
    let item1=items.slice(0,4)
    let item2=items.slice(-2)
    let item3=items.sort()
     console.log(item3)
    item1.forEach(i=>{
        console.log((i*8))
    })
    item2.forEach(y=>{

        console.log((y +5))
    })
    
}
itemsarr([6,8,9,5,2,9,8,7,2])




