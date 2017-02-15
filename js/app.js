var main = function() {

// selects all <a> elements that don't begin with a hash or contain the root, and adds target="_blank"
  $('a:not([href^="#"], [href^="/"])').attr('target', '_blank');

  // $('.gtfs-tag').click(function(e) {
  //
  //   // To be used later in copy-to-clipboard functionality
  //   // var link = location.protocol + "//" + location.host + location.pathname + "#" + e.target.id;
  //
  //   window.location.href = "#" + e.currentTarget.id;
  //
  //   console.log(e.currentTarget.id);
  //
  // });

}

$(document).ready(main);
