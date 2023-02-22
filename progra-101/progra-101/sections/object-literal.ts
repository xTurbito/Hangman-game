
export let person = {
    name : 'Melisa',
    age : '30',
    isActive: true,
    hobbies:  ["soccer,games"],
    toString(){
        let objectString = this.name + " "  + this.age + " " +  this.hobbies;
        console.log(objectString);
    }
}


//console.log(person.name);

//person.toString();


let car = {
    trademark : 'FORD',
    tires : 4,
    Price : 50000
}

let smarTv = {
    trademark : 'LG',
    size : '50int',
    price : 1000
}


let youtubeVideo = {
    NameChanne : 'Fernando Herrera',
    Suscribers : 1000,
    Title : 'Objetos'
}


console.log(car);
console.log(smarTv);
console.log(youtubeVideo);