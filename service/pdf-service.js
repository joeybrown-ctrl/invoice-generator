PDFDocument = require("pdfkit");

function generatePDF(dataCallback, endCallback) {

    const doc = new PDFDocument();
    doc.on("data", dataCallback);
    doc.on("end", endCallback);
    doc
        .fontSize(25)
        .text('Testing');
    doc.end();
}

module.exports = {
    generatePDF
};