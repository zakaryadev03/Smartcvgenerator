const express = require('express');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');
const path = require('path');
const cors = require("cors")


const app = express();

app.use(cors()) // disable cors 
app.use(express.json({ limit: "5mb" })); // to parse JSON and set the size lim to 5mb
app.use(express.static(path.join(__dirname, 'public')));


// Process the form and generate the CV
app.post('/submit-form', async (req, res) => {
    console.log("got req");
    console.log(req.body);
    
    // Read the cv.html template
    const cvHtml = fs.readFileSync('cv.html', 'utf8');

    // Create a new JSDOM instance for cv.html
    const cvDom = new JSDOM(cvHtml);
    const cvDocument = cvDom.window.document;

    // Update the cv.html with form data
    cvDocument.getElementById('cv_name').textContent = req.body.name;
    cvDocument.getElementById('description').textContent = req.body.description;
    cvDocument.getElementById('cv_email').textContent = req.body.mail;
    cvDocument.getElementById('cv_phone').textContent = req.body.phone;
    cvDocument.getElementById('cv_address').textContent = req.body.address;
    cvDocument.getElementById('permis').textContent = req.body.permis;
    cvDocument.getElementById('profile').src = req.body.photo; // make it valid base 64
    // Assuming no address in cv.html

    // Serialize the updated cv DOM to HTML
    const updatedCvHtml = cvDom.serialize();

    // Generate PDF from updated HTML using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(updatedCvHtml, { waitUntil: 'networkidle0' });
    await page.addStyleTag({ path: path.join(__dirname, 'public', 'cv.css') });
    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    // Send the PDF as the response
    res.contentType('application/pdf');
    res.send(pdf);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
