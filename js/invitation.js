(function($) {
  /*var parkNeeded = $('input[name="checkbox-input"]');
  $("#checkbox-input").change(function(){
    if($(this).is(':checked')) {
      console.log('checked');
    } else {
      console.log('no');
    }
  });*/


  // Contact form validator & firebase setup
  $(function() {
    $('#contact-form').validator();

    /* try writing into file
    function writeToFile(data){
        console.log(data);
    }

    function formCallBack() {
      $('#contact-form').find('.alert-messages').css('display','block');
      $('#contact-form')[0].reset();
      setTimeout(function() {
        $('#contact-form').find('.alert-messages').css('display','none');
      }, 2000);
    }*/
    // onsubmit send to firebase
    $('#contact-form').on('submit', function(e) {
      //console.log('clicked');
      if (!e.isDefaultPrevented()) {
        var name = $('#name').val();
        var number = $('#number').val();
        var park = $('#checkbox-input').is(':checked') ? 'Yes' : 'No';
        //console.log('Park needed : '.park);
        var message = $('#message').val();

        var that = $(this),
            url = that.attr('action'),
            type = that.attr('method'),
            data = {"name":name, "number":number, "park":park, "message":message};

        //console.log(data);

        $.ajax({
          url: url,
          type: type,
          data: data,
          success: function(res){
            //console.log('yes sent');
            $('.alert-messages').css('display','block');
            $('#contact-form')[0].reset();
            setTimeout(function() {
              $('.alert-messages').css('display','none');
            }, 2000);
          }
        });
        return false;
      }
    });

    /* init firebase - firebase cannot work within China area
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBw2LJdqZkHbyDbaL6eEZx95SWh06ylVEc",
      authDomain: "wedding-invitation-1b54e.firebaseapp.com",
      databaseURL: "https://wedding-invitation-1b54e.firebaseio.com",
      projectId: "wedding-invitation-1b54e",
      storageBucket: "wedding-invitation-1b54e.appspot.com",
      messagingSenderId: "529515667926"
    };
    firebase.initializeApp(config);

    // ref
    var messageRef = firebase.database().ref('Attend Info');

    // onsubmit send to firebase
    $('#contact-form').on('submit', function(e) {
      console.log('clicked');
      if (!e.isDefaultPrevented()) {
        var name = $('#name').val();
        var number = $('#number').val();
        var park = $('#checkbox-input').is(':checked') ? 'Yes' : 'No';
        var message = $('#message').val();

        var newMessage = messageRef.push();
        newMessage.set({
          name: name,
          number: number,
          park: park,
          message: message
        }, function() {
          $('#contact-form').find('.alert-messages').css('display','block');
          $('#contact-form')[0].reset();
          setTimeout(function() {
            $('#contact-form').find('.alert-messages').css('display','none');
          }, 2000);
        });
        return false;
      }
    });*/
  });
  // /Contact form validator


  //parkNeeded.change(function(){parkNotNeeded.prop('checked',false);});
  //parkNotNeeded.change(function(){parkNeeded.prop('checked',false);});
})(jQuery);
