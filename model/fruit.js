const Fruits = []
 

function create(fruit) {
    Fruits.push(fruit)
}

function getAll (){
    return Fruits;
}

module.exports = {
    Fruits, 
    create,
    getAll
     
}