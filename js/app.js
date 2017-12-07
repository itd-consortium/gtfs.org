var main = function() {

  // Sidenav Scrollspy

  $('body').scrollspy({ target: '.sidenav', offset: 150 });

  // Anchor Row Feature

  // $('.anchor-row').click(function() {
  //   window.location = '#' + this.id;
  // });

  // System Tag Feature

  $('.system-tag-button').click(function(e) {

    // if button is highlighted
    // turn off highlighting
    if ($(this).hasClass('highlight')) {
      $('.system-tag-button').removeClass('highlight');
      $('tr').removeClass('highlight');
    } else {
      // remove all active classes from all rows
      $('tr').removeClass('highlight');
      // remove highlight from buttons
      $('.system-tag-button').removeClass('highlight');
      // add highlight class to all rows with the class of the button id
      $("." + e.target.dataset.target).addClass('highlight');

    }
  });

}

$(document).ready(main);
