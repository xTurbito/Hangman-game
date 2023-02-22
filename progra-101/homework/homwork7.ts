
export function max(a:number, b:number,c:number){
       
   if ( a > b){
    if ( a < c){
        return a;
    }else {
        return c;
    }
   }

   if( b > c){
    return b;
   }else {
    if( a > c){
        return a
    }else {
        return c;
    }
   }
   
}



let maxValue = max(3,5,10);

console.log(maxValue);