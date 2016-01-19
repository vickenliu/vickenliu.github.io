$(document).ready(function(){
  
  $('#menu-icon').click(function(){
    var icon=$(this);
    $('#callaps').slideToggle(500,function(){
      icon.find('.menuspan').toggleClass('callaps');
      if(icon.find('.menuspan').hasClass('callaps')){
        icon.find('h2').text('CLOSE');}
      else{
        $('#content').fadeOut();
        icon.find('h2').text('MENU');}
    });
  });

  $('#callaps').find('a').click(function(e){
    e.preventDefault();
    var fn=$(this).data('fn');
    $('#'+fn).fadeIn();
  });

  $('#bloglist').find('a').click(function(){
    $('#menu-icon').trigger('click');
    var page=$(this).data('fn');
    $.ajax('../blog/'+page,{
      type:'get',
      success:function(data){
        $('#outlet,#content').fadeOut();
        $('#outlet').empty().append(data).fadeIn();
      }
    })
  });


});
