
export let numbers = [1,6,8,4,2,7,10,3,5];
let Par = numbers[0];
let Impar = numbers[0];

for ( let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 == 0 ){
       Par = numbers[i];
       console.log(Par , " es un numero par");
    }
    if ( numbers[i] % 2 == 1){
        Impar = numbers[i];
        console.log(Impar, " es un numero impar");
    }
}

/*for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];

    if ((number % 2) == 0){
        console.log(number + " es par")
    }else {
        console.log(number + " es impar");
    }
}*/