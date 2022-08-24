// Module 9 Practice Portfolio Challenge
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//this is an example of using Arrow Functions.
// Using an arrow function, we can avoid using the function keyword, parentheses around the function parameter, and the curly 
//braces used to wrap a function, as we're only performing one action in the function. 
//This is one of the benefits of arrow functions and array methods: we can keep simpler tasks on one line of code and make it more concise.

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
  };