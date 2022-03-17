$(".cardx").hover(function(){
  
  var selectedClassName = $(this).attr('data-id');
  $(this).addClass("now");
  $(this).parent().siblings(".card-wrapper").find(".cardx").removeClass("now");
  $('.' + selectedClassName).addClass("active");
  $('.' + selectedClassName).siblings(".section-bg").removeClass("active");
});