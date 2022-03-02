$(".cardx").hover(function(){
  
    var selectedClassName = $(this).attr('data-id');
    
    $('.' + selectedClassName).addClass("active");
    $('.' + selectedClassName).siblings(".section-bg").removeClass("active");
  });
  