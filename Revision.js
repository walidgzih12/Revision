// exercice 1 (with for loop)

function iterateAndLog(n) {

    for(var i = 0 ; i<n ; i++)
     if(i%2===0){

    console.log(i,"is even")
         
     }
            
    else{

    console.log(i,"is odd")
         
     }
}

// Now with while loop

function iterateAndLog(n) {

    var i = 0
    
  while(i<n){ 

        i++
        
  if(i%2===0){

    console.log(i,"is even")
         
     }
            
  else{

    console.log(i,"is odd")
         
     }
    
   
  }
}

// exercice 2 (while loop)
function iterateAndLog(n) {

    var i = n
    
  while(i>0){ 

        i--
        
  if(i%2===0){

    console.log(i,"is even")
         
     }
            
  else{

    console.log(i,"is odd")
         
     }
    
   
  }
}

// for loop

function iterateAndLog(n) {

    for(var i = n ; i>0 ; i--)
        if(i%2===0){

            console.log(i,"is even")
 }
    else{

        console.log(i,"is odd")
    
}

  }

  // With Recursion

function reverseIterateAndLogWithFor(n){

    if(n<0){
 
        return
    }
     
     if(n%2===0){
     console.log(n," is even")
         
     }
         
     else {
         
      console.log(n," is odd")
  }
     reverseIterateAndLogWithFor(n-1)
     
 }


// exercice 3 (for loop)

function weirdDivisionWithFor(n) {

    for(var i = 1 ; i<=n ; i++){
      if (i%3 === 0 && i%5 === 0) {
      
        console.log("JuliaJames");
      }
          
      else if (i%3 === 0) {
          
        console.log("Julia")
      }
          
      else if (isNaN%5 === 0) {
          
        console.log("James");
      } 
      
      else {
          
        console.log(i);
      }

    }

    }


        

// With Recursion

function weirdDivisionWithFor(n) {
  if (n < 1) {
      
    return
  }

  if (n%3 === 0 && n%5 === 0) {
      
    console.log("JuliaJames");
  }
      
  else if (n%3 === 0) {
      
    console.log("Julia")
  }
      
  else if (n%5 === 0) {
      
    console.log("James");
  } 
  
  else {
      
    console.log(n);
  }

  weirdDivisionWithFor(n - 1);
}


