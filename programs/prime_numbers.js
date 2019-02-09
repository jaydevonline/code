/* Write a javascript function to find prime numbers  */
isPrimeNumber = ( input ) => {
  
    if ( !Number.isNaN(input) ){
      
      if( input === parseInt(input) ){
         
        let offset = parseInt(Math.sqrt(input));
        let isPrime = false;
        
        while( offset > 1 ){
          
          if( ( input % offset ) === 0 ){
            isPrime = true;
            break;
          }
          offset--; 
        }
        return isPrime;
      }
      else{ 
        return ( "please enter a integer ")
      }
    }
    else{
      return( "Please enter a valid number ")
    }
  }
  
  console.log( isPrimeNumber() )