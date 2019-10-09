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
     console.log(parseInt(document.getElementById(4).style.top))
    if(parseInt(document.getElementById(1).style.top) > -115 && parseInt(document.getElementById(1).style.top) < -95){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(2).style.top) > 20 && parseInt(document.getElementById(2).style.top) < 40){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(3).style.top) > 40 && parseInt(document.getElementById(3).style.top) < 60){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(4).style.top) > -34 && parseInt(document.getElementById(4).style.top) < -14){
      score++;
      console.log(score)
    }
    if(parseInt(document.getElementById(5).style.top) > 64 && parseInt(document.getElementById(5).style.top) < 84){
      score++;
      console.log(score)
    }
    document.getElementById("magaling").innerHTML = "Ang iyong marka ay " + score + "/5"
		  $('.lightbox-bg').show();
      $('.status.confirm').show();
	   
   });
});