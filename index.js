const PDFParser = require("pdf2json");

function main() {
  const pdfParser = new PDFParser();
  pdfParser.on("pdfParser_dataError", errData =>
    console.error(errData.parserError)
  );
  pdfParser.on("pdfParser_dataReady", pdfData => {
    pdfData.formImage.Pages[0].Texts.forEach(text => {
      console.log(text.R[0]);
    });
  });

  pdfParser.loadPDF("./quests/quests_for_question.pdf");
}

main();
