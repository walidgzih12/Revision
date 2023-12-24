/*                                  *** Exercice 1 ***

function Or(state1,state2){

    return !(state1 && state2)

}

***invokig***
Or(5>1,6<1)

***output***
true

*/

// **********************************************************************************************
                      

 /*                              *** Exercice 2 ***

 function Opposite (boolean){

    console.log(!boolean)
 }

***invokig***
 Opposite(true)

***output***
 false

*/


// **********************************************************************************************
                      

 /*                              *** Exercice 3 ***

 function greaterThan5 (num1 , num2){

    if(num1 > 5 || num2 > 5){
        return true
    
    }

    else if(num1 < 5 && num2 < 5){
        return false
    }

}

***invokig***
greaterThan5(1, 6) -> true 
greaterThan5(5, 5) -> false 
greaterThan5(1, 4) -> false

*/

// **********************************************************************************************
                      

 /*                              *** Exercice 4 ***

 function allGreaterThan5(num1,num2){

    if (num1 > 5 && num2 > 5){
        
        return true
    }

else if ((num1 < 5 || num2 < 5) || (num1 < 5 && num2 < 5))

    return false
    
}

***invoking***

allGreaterThan5(6, 7) -> true 
allGreaterThan5(2, 7) -> false

*/

// **********************************************************************************************
                      

 /*                              *** Exercice 5 ***

 function largest() {
    var x1 = 10
    var x2 = 5

    if (x1 > x2) {

        return x1
      }

else if(x2 > x1){

    return x2
}

}
 
***invoking***
largest()---> 10


// **********************************************************************************************
                      

 /*                              *** Exercice 6 ***

 
    function add(number1,number2) {
   
    return number1+number2
}
    var result = add(2,3)
    console.log("result is : "+ result)
    
 
***invoking***
result is : 5   


// **********************************************************************************************
                      

 /*                              *** Exercice 7 ***

 
    function guessMyNumber(number) {

    if(number > 5){

        return "Please try a number between 0 and  5."
    }

else if(number===Rand(5)){

    return "Nice Guess!"
}

else{

    return "Wrong Guess!! try again."
}
    
}

function Rand(number) {

    return  Math.floor(Math.random() *(number+1))
    
}




*/






