document.addEventListener('DOMContentLoaded', start);

var tereoAPI = "https://eda-te-reo.herokuapp.com/api/proverbs";
var proverb;

function start () {
}


function proverbMaker () {
  $.ajax({
     url: "https://eda-te-reo.herokuapp.com/api/proverbs",
     error: function() {
        $('#proverb').html('<p>An error has occurred</p>');
        },
    dataType: 'json',
    success: function(data){
      proverb = data["source"];
      $("#proverb").html("Proverb: " + (data["source"]));
      $("#translation").html("Translation: " + (data["translation"]));
    },
    type: 'GET'
  });
}


// function proverbMaker () {
//   $.getJSON( tereoAPI, {
//     tags: "any",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       proverb = data["source"];
//       $("#proverb").html("Proverb: " + (data["source"]));
//       $("#translation").html("Translation: " + (data["translation"]));
//     });
// }

function tweeter() {
  window.location.href=("https://twitter.com/intent/tweet?text=" + proverb);
}
