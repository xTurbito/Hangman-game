

export function printMultiplication(base:number , limit:number ){
   
 if ( limit <= 0){
    throw new Error('Como vas a querer multiplicar tiene que ser mayor a 0')
 }
   
   
    for (let i = 1; i <= limit; i++){
    console.log( base, ' x ', i, ' = ', base * i )
   }
   return;
}
