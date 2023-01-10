// All element classes
var row = $('.row');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var block = $('.time-block');


// Current date and time
$(document).ready(function(){
 
  var today = dayjs().format('MMM-DD-YYYY | h:mm');
  $('#currentDay').text(today)

});

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // Function to set the colors of the time blocks
    block.each(function(){
      var pTime = $(this).parents('row');
      var fTime = parseInt(pTime.attr('id'));
      var cTime = parseInt(dayjs().format('H'));

      if (fTime < cTime){
        $(this).addClass('past');
      } else if (fTime === cTime){
        $(this).addClass('present')
        $(this).removeClass('past')
      } else {
        $(this).addClass('future')
        $(this).removeClass('past')
        $(this).removeClass('present')
      }
    })


    

  });
  