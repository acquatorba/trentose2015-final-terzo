/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("test getLanguageScore", function() {
    
  it("testo che the best sia inglese", function() { 
      expect(ParlaModel.getLanguageScore("The Best", "English")).toBe(1);
  }); 
  it("testo che the best dia 0 con italiano", function() { 
      expect(ParlaModel.getLanguageScore("The Best", "English")).toBe(0);

  });  
 
});

describe("test detectedLanguage", function() {
    
  it("testo in che lingua è scritto The Best", function() { 
      expect(ParlaModel.detectLanguage("The Best")).toBe("English");
  }); 
 
});