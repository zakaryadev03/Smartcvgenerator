
const fs = require('fs');
const { JSDOM } = require('jsdom');


const html = fs.readFileSync('cv.html', 'utf8');


const dom = new JSDOM(html);


const document = dom.window.document;

// Access the elements by their IDs
const nameElement = document.getElementById('cv_name');
const adresseElement = document.getElementById('cv_adresse');
const phoneElement = document.getElementById('cv_phone');
const mailElement = document.getElementById('cv_mail');


// Get the text content of the elements
const name = nameElement.textContent;
const email = mailElement.textContent;
const phone = phoneElement.textContent;
const adresse = adresseElement.textContent;

// Log the information to the console (or perform other operations)
console.log("Name:", name);
console.log("Email:", email);
console.log("Phone:", phone);

// Example of manipulating the elements
nameElement.style.color = "blue";
mailElement.textContent = "new.email@example.com";

// Serialize the DOM back to HTML
const updatedHtml = dom.serialize();

// Save the updated HTML back to the file
fs.writeFileSync('cv_updated.html', updatedHtml, 'utf8');
