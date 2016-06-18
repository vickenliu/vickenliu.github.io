var projectOffset= document.querySelector('#projects').offsetTop
var aboutOffset= document.querySelector('#about').offsetTop
var vh= window.innerHeight
var vw= window.innerWidth

document.addEventListener("DOMContentLoaded", function() {
  console.log('wecome')
  if (document.addEventListener) {//firefox
      document.addEventListener('DOMMouseScroll', changepage, false);
  }
  // ie, or chrome
  window.onmousewheel = document.onmousewheel = changepage;
  $('#arrow').on('click',function(){
    if(document.body.scrollTop >= aboutOffset){
      $('body').stop().animate({scrollTop:0},'500',correctarrowdirection)
    }else{
      $('body').stop().animate({scrollTop:document.body.scrollTop+vh},'500',correctarrowdirection)
    }
  })

  bindProjectEven()

  $(window).resize(bindProjectEven)

});

function bindProjectEven(){
  vh= window.innerHeight
  vw= window.innerWidth
  if(vh<813){
    $('.project').on('click','img',mobileNavprojects);
  }
}

function correctarrowdirection(){
  document.body.scrollTop > projectOffset+vh/2 ? $('#arrow img').addClass('up') :
  $('#arrow img').removeClass('up')
}


function changepage(e){
  if(vw<=813){
    return;
  }
  if(scrollFunc(e)==='down'&& document.body.scrollTop>= (vh+vh/4)){
    // document.body.scrollTop=2*vh
    $('body').stop().animate({scrollTop:2*vh},'500',correctarrowdirection)
  }else if(scrollFunc(e)==='down'&& document.body.scrollTop>=vh/3 && document.body.scrollTop< projectOffset){
    // document.body.scrollTop=vh
    $('body').stop().animate({scrollTop:vh},'500',correctarrowdirection)
  }else if(scrollFunc(e)==='up'&& document.body.scrollTop>projectOffset &&  document.body.scrollTop<(aboutOffset-vh/7)){
    // document.body.scrollTop=vh
    $('body').stop().animate({scrollTop:vh},'500',correctarrowdirection)
  }else if(scrollFunc(e)==='up'&& document.body.scrollTop<(projectOffset-vh/10)){
    // document.body.scrollTop=0
    $('body').stop().animate({scrollTop:0},'500',correctarrowdirection)
  }
}



function scrollFunc(e) {
    e = e || window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            return 'up';
        }
        if (e.wheelDelta < 0) {
            return 'down';
        }
    } else if (e.detail) {
        if (e.detail> 0) {
            return 'up';
        }
        if (e.detail< 0) {
            return 'down';
        }
    }
}

function mobileNavprojects(e){
  var ele= e.target
  $(ele).parent('.project').find('a')[0].click()
}
