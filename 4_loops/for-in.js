// for in , iterrate over objects, and has access to every key of the object, 
// use it for objects. 



const user = {
    id: "sdf67sd9f876sad9f", 
    name : "Ajmal", 
    age: 23,
    email: "user@1.com",
    role: "developer", 
}

for (key in user) {
    console.log(`${key}: ${user[key]}`)
}

const room = {
     tires: "4",
     doors: "4",
     fuelstypes: "Eletic", 
} 

for(key in room){
    console.log(`${key}: ${room[key]}`);   
}