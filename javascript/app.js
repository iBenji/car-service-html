//Cloning Spacers
$(document).ready(function() {
    var e = $('.spacer');
    for (var i = 0; i < 3; i++) {
      e.clone().insertAfter(e);
    }
});