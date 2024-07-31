const express = require('express');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/creation.html');
});
// Serve the form
app.get('/creation', (req, res) => {
    res.sendFile(__dirname + '/creation.html');
});

// Process the form and generate the CV
app.post('/submit-form', async (req, res) => {
    // Read the cv.html template
    const cvHtml = fs.readFileSync('cv.html', 'utf8');

    // Create a new JSDOM instance for cv.html
    const cvDom = new JSDOM(cvHtml);
    const cvDocument = cvDom.window.document;

    // Update the cv.html with form data
    cvDocument.getElementById('cv_name').textContent = req.body.name;
    cvDocument.getElementById('cv_mail').textContent = req.body.mail;
    cvDocument.getElementById('cv_phone').textContent = req.body.phone;
    cvDocument.getElementById('cv_adresse').textContent = req.body.adresse;
    // Assuming no address in cv.html

    // Serialize the updated cv DOM to HTML
    const updatedCvHtml = cvDom.serialize();

    // Generate PDF from updated HTML using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(updatedCvHtml, { waitUntil: 'networkidle0' });
    await page.addStyleTag({ path: path.join(__dirname, 'public', 'cv.css') });
    const pdf = await page.pdf({ format: 'A4' });

    await browser.close();

    // Send the PDF as the response
    res.contentType('application/pdf');
    res.send(pdf);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
