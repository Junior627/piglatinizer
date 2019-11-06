$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#imp").click(function(){
  let pigLatin =$("#in").val();
  let parray= pigLatin.split("");
  console.log(parray);
  let firstLetter= parray[0];
  console.log(firstLetter);

  let vowel= ["a","e","i","o","u"];
    if(vowel.includes(firstLetter)){
      pigLatin=pigLatin+"ay";
    }
    else{
      function isVowel (vowe){
        return vowel.includes(vowe)
      }
      parray.findIndex(vowe);
      let igLatin=pigLatin.substr(1);
      pigLatin=igLatin+firstLetter+"ay";
    }
    $("#result").text(pigLatin);
});








});
