var main = function() {

// selects all <a> elements that don't begin with a hash or contain the root, and adds target="_blank"
  $('a:not([href^="#"], [href^="/"])').attr('target', '_blank');

  $('.anchor-row').click(function() {

    window.location = '#' + this.id;

  });

}

$(document).ready(main);
