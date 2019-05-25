$(document).on('submit','#contact-bottom-form',function(e){
  e.preventDefault();

  $.ajax({
    type:'POST',
    url:'email/',
    data:{
      name: $('#id_name').val(),
      from_email: $('#id_from_email').val(),
      message: $('#id_message').val(),
      csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
    },
    success:function(){
      alert('Thank you for your message.');
    }
  });
});
