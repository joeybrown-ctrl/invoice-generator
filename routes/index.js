const express = require("express");
const pdfService = require("../service/pdf-service");

const router = express.Router();
router.get("/invoice", (req, res, next) => {
    const dataStream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment;filename=invoice.pdf"
    });

    pdfService.generatePDF(
        (chunk) => dataStream.write(chunk),
        () => dataStream.end()
    )
});

module.exports = router;