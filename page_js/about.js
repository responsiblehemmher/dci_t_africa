
// Paragraph Animation Functions
function displayParagraphs() {
    var paragraphs = document.querySelectorAll('.about__img-content p');
    var delay = 2000; 
    
    paragraphs.forEach(function(paragraph, index) {
        setTimeout(function() {
            paragraph.style.opacity = 1;
        }, index * delay);
    });
  }
  
  displayParagraphs();