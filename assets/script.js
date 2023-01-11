// All element classes
var row = $('.row');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var block = $('.time-block');
var sButton = $('.saveBtn');


// Current date and time
$(document).ready(function(){
 
  var today = dayjs().format('ddd, MMM-DD-YYYY | h:mm');
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
      var pTime = $(this).parent('row');
      var fTime = parseInt(pTime.attr('id'));
      var cTime = parseInt(dayjs().format('h'));

      if (fTime < cTime){
        $(this).addClass('past');
      } else if (fTime === cTime){
        $(this).removeClass('.past')
        $(this).addClass('.present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }

    })

    sButton.onclick = event => {
      console.log(this);
      var txt = $(this).siblings('.time-block').val();
      var time = $(this).parent().attr("id")
      localStorage.setItem(time, txt)
    }
    $('#hour-9 .time-block').val(localStorage.getItem('hour-9'));
    $('#hour-10 .time-block').val(localStorage.getItem('hour-10'));
    $('#hour-11 .time-block').val(localStorage.getItem('hour-11'));
    $('#hour-12 .time-block').val(localStorage.getItem('hour-12'));
    $('#hour-13 .time-block').val(localStorage.getItem('hour-13'));
    $('#hour-14 .time-block').val(localStorage.getItem('hour-14'));
    $('#hour-15 .time-block').val(localStorage.getItem('hour-15'));
    $('#hour-16 .time-block').val(localStorage.getItem('hour-16'));
    $('#hour-17 .time-block').val(localStorage.getItem('hour-17'));

  });
  