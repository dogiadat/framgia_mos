$(document).on('turbolinks:load', function() {
  $('#selectAll').click(function() {
    if (this.checked) {
      $(':checkbox').each(function() {
        this.checked = true;
      });
    }else{
      $(':checkbox').each(function() {
        this.checked = false;
      });
    }
  });

  $('.post_ids_').on('change', function(){
    var i = true;
    $('.post_ids_').each(function(){
      if ($(this).prop('checked') == false) {
        i = false;
      }
    });
    $('#selectAll').prop('checked', i);
  });

  $('.btn-delete-posts').click(function(e) {
    check_delete = false;
    $(':checkbox').each(function(){
      if (this.checked == true){
        check_delete = true;
        return;
      }
    });
    if (check_delete == false){
      alert('Please choose posts to delete!');
      e.preventDefault();
    }
  });
});
