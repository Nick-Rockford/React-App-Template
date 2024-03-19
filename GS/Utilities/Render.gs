function doGet() {
  return HtmlService.createTemplateFromFile('HTML/base')
         .evaluate().setTitle("PAGETITLE");
}
// TODO
//Change Page title
function include(filename) {
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent();
}