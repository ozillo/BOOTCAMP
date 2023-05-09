//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().

const user = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = user.map((user)=>{
    if(user.name.includes("A")){
       user.name = "Anacleto"
    }
    return user
})
console.log(names)