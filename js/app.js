var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages, 
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
     // write your code here, but don't add any additional 
     // parameters to the the function
       var score=0;
       for (var i=0;i<this.length;i++){
           if(this[i].name==language){
           var parole=languages[i].dictionary;
            for(var j=0;j<parole.length;j++){
                if(phrase.indexOf(parole[j])>-1){
                        score++;
                }
            }
           }
       }
       return score;
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
     // write your code here, but don't add any additional 
     // parameters to the the function
       var maxscore=0;
       var lingua;
       for(var i=0;i<languages.length;i++){
           if(ParlaModel.getLanguageScore(phrase,languages[i].name)>maxscore){
               maxscore=ParlaModel.getLanguageScore(phrase,languages[i].name);
               lingua=languages[i].name;
           }
           
       }
       return lingua;
   }
         
}

var octopus ={
    init: function(){
        view.init();
        
    },
    passafrase: function(Ph){
        return ParlaModel.detectLanguage(Ph);
        
    }
    
};

var view ={
    init: function(){
        view.startbutton();
    },
    startbutton: function(){
        $(".check").on("click", function (event) {
                  var text=$("input").val();
                  console.log(text);
                  $(".lang-name").html(octopus.passafrase(text));
              })
    }
};



octopus.init();
