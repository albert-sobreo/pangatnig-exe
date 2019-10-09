/**
* Drag and drop quiz intended for an iBooks widget
*/
score = 0;
$(document).ready( function() {
  //initialize the quiz options
  var answersLeft = [];
  $('.quiz-wrapper').find('li.option').each( function(i) {
    var $this = $(this);
    var answerValue = $this.data('target');
    var $target = $('.answers .target[data-accept="'+answerValue+'"]');
    var labelText = $this.html();
    $this.draggable( {
      revert: "invalid",
      containment: ".quiz-wrapper"
    });
   
    if ( $target.length > 0 ) {
    $target.droppable( {
        // accept: 'li.option[data-target="'+answerValue+'"]',
        drop: function( event, ui ) {
          console.log(answersLeft)
          // $this.draggable('destroy');
          // $target.droppable('destroy');
          // $this.html('&nbsp;');
          // $target.html(labelText);
          // answersLeft.splice( answersLeft.indexOf( answerValue ), 1 );
        }
    });
    answersLeft.push(answerValue);
    }
   });
   $('.quiz-wrapper button[type="submit"]').click( function() {
    //  console.log(parseInt(document.getElementById(3).style.top))
    if(parseInt(document.getElementById(1).style.top) > 95 && parseInt(document.getElementById(1).style.top) < 120){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(2).style.top) > -38 && parseInt(document.getElementById(2).style.top) < -20){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(3).style.top) > 300 && parseInt(document.getElementById(3).style.top) < 320){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(4).style.top) > 164 && parseInt(document.getElementById(4).style.top) < 180){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(5).style.top) > -95 && parseInt(document.getElementById(5).style.top) < -75){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(6).style.top) > -15 && parseInt(document.getElementById(6).style.top) < 0){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(7).style.top) > 7 && parseInt(document.getElementById(7).style.top) < 25){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(8).style.top) > -311 && parseInt(document.getElementById(8).style.top) < -300){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(9).style.top) > 9 && parseInt(document.getElementById(9).style.top) < 30){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(10).style.top) > -210 && parseInt(document.getElementById(10).style.top) < -190){
      score++;
      console.log(score)
    }
    document.getElementById("magaling").innerHTML = "Ang iyong marka ay " + score + "/10"
		  $('.lightbox-bg').show();
      $('.status.confirm').show();
	   
   });
});