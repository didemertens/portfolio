$(document).on('submit','#contact-bottom-form',function(e){
  e.preventDefault();

  // console.log($('#id_name').val())
  // console.log($('#id_from_email').val())
  // console.log($('#id_message').val())

  $.ajax({
    type:'POST',
    url:'/email/',
    data:{
      name: $('#id_name').val(),
      email: $('#id_from_email').val(),
      message: $('#id_message').val(),
      csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
    },
    success:function(){
      alert('Thank you for your message.');
    }
  });
});
