const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Define the path to your HTML file
const htmlFilePath = path.resolve(__dirname, 'cv.html');
const cssFilePath = path.resolve(__dirname, 'cv.css');
const outputPdfPath = path.resolve(__dirname, 'output.pdf');

(async () => {
    // Read the HTML and CSS files
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    const cssContent = fs.readFileSync(cssFilePath, 'utf8');

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content of the page with inline CSS
    await page.setContent(`
        <style>${cssContent}</style>
        ${htmlContent}
    `);

    // Generate PDF
    await page.pdf({
        path: outputPdfPath,
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log('PDF generated successfully');
})();
