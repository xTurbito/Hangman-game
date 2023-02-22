
export let employees:string [] = ['Miguel','Frida','Manuel'];
export let salaries: number [] = [1500,2400,3200]


//let flower:string[] = ["Rosa","Girasol","Lirio","Rosa Azul"];

 

//for (let i = 0;i < flower.length; i++){
 //  console.log(flower[i]);
//}


for (let i = 0; i < employees.length; i++){
    let employee = employees[i];
    let salary = salaries[i];
    console.log(employee + " tiene un salario de " + salary);
}