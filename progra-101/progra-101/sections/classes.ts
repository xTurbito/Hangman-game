

export class Car {

   public readonly brand : string;
    public  doors : number;
    public fuelTank : number;
    public isRunning : boolean;
    public type : string;


    public readonly createAt : number;

    constructor( brand:string, type:string ){
         this.brand = brand;
         this.doors  = 0;
         this.fuelTank = 0;
         this.isRunning = false;
         this.type = type;

         this.createAt = 1112313;
    }

  turnOn(){
    if ( this.isRunning ){
        console.log("El carro ya estaba encendido.... se daño el motor");
        return;
    }

     if(this.fuelTank <= 0) {
        console.log("El carro no tiene gasolina ")
        return;
     }
        this.isRunning = true;
        console.log("El carro esta encendido");
  }


filltank( gas:number){
  
  if ( gas <= 0){
      console.log("El gas tiene que ser positivo");
      return;
  }
     let newFueltank = this.fuelTank + gas;
     if( newFueltank >= 100){
         newFueltank = 100;
     } 

      this.fuelTank = newFueltank;
     
     
}
}


let myMazda = new Car('Mazda','Sedan');


console.log(myMazda);
myMazda.filltank(50);
myMazda.filltank(120);
console.log(myMazda);
