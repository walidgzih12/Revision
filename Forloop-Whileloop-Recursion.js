/* exercice1

function sumOfN(n){

    var sum = 0
    
    for(var i = n ; i>=0 ; i--){

        sum = sum + i

        
    }
    return sum
}

*/

/* exercice 2
function factorialOfN(n) {

    var mult = 1

    for(var i = 1 ; i<=n ; i++){
       

        mult = mult * i
        console.log(mult)
         

    }
    return mult
    
}
*/

/* exercice3
function repeatString(string, num) {

    var str = ""

    for(var i = 1 ; i<=num ; i++){
       
    str = str + string
         console.log(str,i)
        
    }
    return str
}

*/


/* exercice 4
function countMinMax(min, max) {
   var res = 0

    for(var i = max ; i>=min ; i--){
        
     res = max-min
        
    }
    return res
}  

*/

/* exerice 5
function sumMinToMax(min, max) {
    var sum = 0
 
     for(var i = min ; i<max ; i++){
         
          sum = sum+i
         
         
         
     }
     return sum
 }  
 */


 
/*exercice 6 

function countCharAtIndex(string1, index, string2) {

    if(index>=0 && index < string1.length){

     StoreCh = string1.charAt(index)

        for(var i = 0 ; i < string2.length ; i++){

            if(StoreCh===string2.charAt(i)){

                

             count=count + 1
   }   
}

  return count
        
         }
        
    else{

        console.log("wrong")
    }

}


/* exercice 7

var store = ""
function reverseString(string) {

    for(var i = string.length ; i >= 0 ; i--){


        store = store + string.charAt(i)
    }

    return store
}  

*/