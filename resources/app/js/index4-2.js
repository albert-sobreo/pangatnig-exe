/**
* Drag and drop quiz intended for an iBooks widget
*/
score = 0;
arr = [];
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
     console.log(parseInt(document.getElementById(7).style.top))
    if((parseInt(document.getElementById(1).style.top) > 20 && parseInt(document.getElementById(1).style.top) < 40) || (parseInt(document.getElementById(6).style.top) > -174 && parseInt(document.getElementById(6).style.top) < -154)){
      score++;
      arr.push('1')
      console.log(score)
    }
    if(parseInt(document.getElementById(2).style.top) > 40 && parseInt(document.getElementById(2).style.top) < 60){
      score++;
      arr.push('2')
      console.log(score)
    }
    if((parseInt(document.getElementById(3).style.top) > 63 && parseInt(document.getElementById(3).style.top) < 83) || (parseInt(document.getElementById(8).style.top) > -132 && parseInt(document.getElementById(8).style.top) < -112)){
      score++;
      arr.push('3')
      console.log(score)
    }
    if(parseInt(document.getElementById(4).style.top) > -156 && parseInt(document.getElementById(4).style.top) < -136){
      score++;
      arr.push('4')
      console.log(score)
    }
    if((parseInt(document.getElementById(5).style.top) > 265 && parseInt(document.getElementById(5).style.top) < 285) || (parseInt(document.getElementById(10).style.top) > 112 && parseInt(document.getElementById(10).style.top) < 132)){
      score++;
      arr.push('5')
      console.log(score)
    }
    if((parseInt(document.getElementById(1).style.top) > 260 && parseInt(document.getElementById(1).style.top) < 280) || (parseInt(document.getElementById(6).style.top) > 65 && parseInt(document.getElementById(6).style.top) < 85)){
      score++;
      arr.push('6')
      console.log(score)
    }
    if(parseInt(document.getElementById(7).style.top) > -35 && parseInt(document.getElementById(7).style.top) < -15 || (parseInt(document.getElementById(11).style.top) > -150 && parseInt(document.getElementById(11).style.top) < -130)){
      score++;
      arr.push('7')
      console.log(score)
    }
    if((parseInt(document.getElementById(3).style.top) > 300 && parseInt(document.getElementById(3).style.top) < 320) || (parseInt(document.getElementById(8).style.top) > 108 && parseInt(document.getElementById(8).style.top) < 128)){
      score++;
      arr.push('8')
      console.log(score)
    }
    // if(parseInt(document.getElementById(9).style.top) > 9 && parseInt(document.getElementById(9).style.top) < 30){
    //   score++;
    //   console.log(score)
    // }
    if((parseInt(document.getElementById(5).style.top) > 305 && parseInt(document.getElementById(5).style.top) < 325) || (parseInt(document.getElementById(10).style.top) > 150 && parseInt(document.getElementById(10).style.top) < 170)){
      score++;
      arr.push('10')
      console.log(score)
    }
    if(parseInt(document.getElementById(11).style.top) > -30 && parseInt(document.getElementById(11).style.top) < -10 || (parseInt(document.getElementById(7).style.top) > 87 && parseInt(document.getElementById(7).style.top) < 107)){
      score++;
      arr.push('11')
      console.log(score)
    }
    document.getElementById("magaling").innerHTML = "Ang iyong marka ay " + score + "/10"
		  $('.lightbox-bg').show();
      $('.status.confirm').show();
	   
   });
});