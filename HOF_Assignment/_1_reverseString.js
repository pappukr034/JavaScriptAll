 // Q1.
// let str="pappukumarsahni";
// let newstr="";


// setTimeout(() => {
//     for(let i=str.length;i>=0;i--){
//         newstr+=str[i];
//       }
//    console.log(newstr);
// }, 2000);

// Q2

// const [number, setnumber] = useState();
// function randomNumber() {
//   let number1 = Math.floor(Math.random() * 21 + 1);
//   setnumber(number1);
// }
// setInterval(() => {
//   randomNumber();
// }, 6000);

//Q3

// // Sample object with items and their prices in USD
// const itemsInUSD = {
//     item1: 10, // Price in USD
//     item2: 20,
//     item3: 30,
//   };
  
//   // Exchange rate: 1 USD = 80 INR
//   const exchangeRate = 80;
  
//   // Convert USD prices to INR using the map function
//   const itemsInINR = Object.entries(itemsInUSD).map(([item, priceInUSD]) => {
//     const priceInINR = priceInUSD * exchangeRate;
//     return { [item]: priceInINR };
//   });
  
//   // Convert the array of objects into a single object
//   const itemsWithPricesInINR = Object.assign({}, ...itemsInINR);
  
//   console.log(itemsWithPricesInINR);
  

// Q4 

// // Sample list of books with authors and publication years
// const books = [
//     { title: "Book 1", author: "Author 1", year: 2005 },
//     { title: "Book 2", author: "Author 2", year: 2015 },
//     { title: "Book 3", author: "Author 3", year: 2008 },
//     { title: "Book 4", author: "Author 4", year: 2012 },
//   ];
  
//   // Filter books published before 2010 and capitalize author names
//   const filteredBooks = books
//     .filter(book => book.year >= 2010)
//     .map(book => ({ ...book, author: book.author.toUpperCase() }));
  
//   console.log(filteredBooks);
  








// Q5 URL Validation


// function isValidURL(str) {
//     if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
//          console.log('YES');
//      } else {
//          console.log('NO');
//      }
//  }

//  isValidURL("https://www.geeksforgeeks.org");


  // Q6 URL Validation of Linkedin profile

//   function isValidLinkedInUrl(url) {
//     // Define a regular expression pattern for a valid LinkedIn URL
//     const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    
//     // Use the test method to check if the URL matches the pattern
//     return pattern.test(url);
//   }
  
//   // Example usage:
//   const linkedinUrl = "https://www.linkedin.com/in/johndoe123";
//   if (isValidLinkedInUrl(linkedinUrl)) {
//     console.log(`The LinkedIn URL ${linkedinUrl} is valid.`);
//   } else {
//     console.log(`The LinkedIn URL ${linkedinUrl} is not valid.`);
//   }
  

