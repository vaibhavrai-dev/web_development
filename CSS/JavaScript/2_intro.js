
/***
 * 
 * LOOP
*/

let target = 20;
for (let num = 1; num <= target; num++){
    if (num % 5==0 && num % 3==0){
        console.log("Fizz buzz");
        break;
        
    }else if (num % 3==0){
        console.log("fizz");
    } else if (num % 5==0){
        console.log("buzz");
   
    } else{
        console.log(num);
    }

}