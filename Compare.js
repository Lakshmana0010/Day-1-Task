let obj1= {name:"Person1", age:5}
let obj2= {age:5, name:"Person1"}
//console.log(obj2)
//console.log(obj1)
newobj1 = Object.keys(obj1).sort()
//console.log(newobj1)
//onsole.log(JSON.stringify(newobj1))
newobj2 =  Object.keys(obj2).sort()
//console.log(newobj2)
//console.log(JSON.stringify(newobj2))
//both obj1 and obj 2 is under array, so it cannot be checked equal so changning the arrary into string 
//refer line no (7 & 11)

//now comparing the two obj

if(JSON.stringify(newobj1)===JSON.stringify(newobj2)){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}

