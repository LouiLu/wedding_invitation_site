(function($) {
  var parkNeeded = $('input[name="checkbox-input"]');
  $("#checkbox-input").change(function(){
    if($(this).is(':checked')) {
      console.log('checked');
    } else {
      console.log('no');
    }
  });


  //parkNeeded.change(function(){parkNotNeeded.prop('checked',false);});
  //parkNotNeeded.change(function(){parkNeeded.prop('checked',false);});
})(jQuery);
