


$( document ).ready(function() {




    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');

    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');

        scaleBannerVideoSize('.video-container video');
    });



function scaleVideoContainer() {

    var height = $(window).height() ;
    var unitHeight = parseInt(height) + 'px';


}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;


    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}



// подключили видео

//disqus

var x = 0;
if(x == 0){
  $(".dis-activator").on("click" , function(){
     $("#disqus_thread").slideDown();
     $(".dis").addClass("dis-disabled");
     $(".dis-activator").addClass("dis-activator-disabled");
     x++;
  })
}

//disqus

var crest = document.querySelectorAll(".main-nav-brand")[0],
    crest2 = document.querySelectorAll(".main-nav-brand")[1],
    sidenav = document.querySelector(".sidenav");

$(crest).on("click" , function(e){

 if ( document.documentElement.clientWidth <= 768){
     e.preventDefault();

    $(this).toggleClass("main-nav-brand-active");
    $(crest2).toggleClass("main-nav-brand-active");
    if(crest.classList.contains('main-nav-brand-active')) sidenav.classList.add("sidenav-active");
    else sidenav.classList.remove("sidenav-active");
 }

});

$(crest2).on("click" , function(e){

 if ( document.documentElement.clientWidth <= 768){
     e.preventDefault();
    $(this).toggleClass("main-nav-brand-active");
    $(crest).toggleClass("main-nav-brand-active");
    if(crest.classList.contains('main-nav-brand-active')) sidenav.classList.add("sidenav-active");
    else sidenav.classList.remove("sidenav-active");
 }

});

var mainNav = document.querySelectorAll(".main-nav li > a");

function countNav(event){

if(event.target == mainNav[1]){
    $(mainNav[0]).empty();
    mainNav[0].innerHTML += "<i class='fa fa-home'></i>"
    }
if(event.target == mainNav[2]){
    $(mainNav[0]).empty();
    mainNav[0].innerHTML += "<i class='fa fa-user-circle'></i>"
    }
if(event.target == mainNav[3]){
    $(mainNav[0]).empty();
    mainNav[0].innerHTML += "<i class='fa fa-vcard'></i>"
    }
if(event.target == mainNav[5]){
    $(mainNav[4]).empty();
    mainNav[4].innerHTML += "<i class='fa fa-home'></i>"
    }
if(event.target == mainNav[6]){
    $(mainNav[4]).empty();
    mainNav[4].innerHTML += "<i class='fa fa-user-circle'></i>"
    }
if(event.target == mainNav[7]){
    $(mainNav[4]).empty();
    mainNav[4].innerHTML += "<i class='fa fa-vcard'></i>"
    }
}

function countNavLeave(event){

  mainNav[0].innerHTML = "<i class='fa fa-ravelry'></i>";
  mainNav[4].innerHTML = "<i class='fa fa-ravelry'></i>";
}



for (var i = 0 ; i < mainNav.length ; i++) {
    mainNav[i].addEventListener("mouseenter" , function(){
   if(document.documentElement.clientWidth > 768){
    countNav(event);
  }
  });
     mainNav[i].addEventListener("mouseleave" , function(){
    if(document.documentElement.clientWidth > 768){
    countNavLeave(event);
    }
  });
}

//searchdown

$(".search-nav").on("click" , function(){
  if($(".searchdown").hasClass("searchdown searchdown__active")){
  $(".searchdown").removeClass('searchdown__active').slideUp();

  }else{
  $(".searchdown").addClass('searchdown__active').slideDown();

  }
})

//searchdown

//search animate
var search = document.querySelectorAll(".search-submit");

$(".search-submit").on("click" , function(){
   $(this).addClass("search-submit-active");

   setTimeout(function(){
    search[0].className = "search-submit";
    search[1].className = "search-submit";
   } , 1000);

 });
$(".search-submit").on("click" , function(){
   $(this).addClass("search-submit-active");

   setTimeout(function(){
    search.className = "search-submit";
   } , 1000);

 });
//tippy



//scrolldown

 //count
function count(){
 $(".count").each(function(){
            $(this).prop('Counter',0).animate({
              Counter: $(this).text()
                },
                {
              duration:4000,
              step:function(now){
                  $(this).text(Math.ceil(now));
                }
              });
           });
 }

 function typedFacts(){
        var typed = new Typed('.facts-about-down-desc', {
      stringsElement: '.facts-about-down',
      typeSpeed: 50,
      startDelay:500,
      backDelay:100000000,
      backSpeed: 60,
      loop:true,
      loopCount: Infinity
  });
 }
    x = 0 ;
   if(document.querySelectorAll(".arrow-slide")[0]){
    document.querySelectorAll(".arrow-slide")[0].addEventListener ("click" ,function(){
     if(x == 0){
        typedFacts();
        count();
     }
     $("html , body").animate({
      scrollTop : $("#one").offset().top

         });


      x++;

    });
   }
   if(document.querySelectorAll(".arrow-slide")[1]){
    document.querySelectorAll(".arrow-slide")[1].addEventListener ("click" ,function(){

     $("html , body").animate({
      scrollTop : $("#two").offset().top

         });

    });
   }


  if(document.querySelector('#one')){
    if(document.documentElement.clientWidth > 576){
 document.querySelector("body").addEventListener("wheel" , function(event){
    if(document.documentElement.className == "active-html js"){
     if(event.deltaY > 0 && pageYOffset < document.documentElement.clientHeight){

             $("html , body").animate({
               scrollTop : $("#one").offset().top
               });
            if(x == 0){
                count();
                typedFacts();
            }
            x++;
          }
        if(event.deltaY > 0 && pageYOffset + 20  > document.documentElement.clientHeight && pageYOffset < document.documentElement.clientHeight * 2){

             $("html , body").animate({
               scrollTop : $("#two").offset().top
               });
          }
        }
    });
   }
 }


$(".subscribedrop-form input").on("focus" , function(event){
 if(event.target.value == "")
       event.target.nextElementSibling.classList.add("span-active");

});
$(".subscribedrop-form input").on("blur" , function(event){
 if(event.target.value == "")
   event.target.nextElementSibling.classList.remove("span-active");
});

//submit subscribe
var x = 0;


$(".subscribedrop-form").submit(function(){
   var subscribeName_one = document.querySelectorAll(".subscribe-name")[0].value,
      subscribeEmail_one = document.querySelectorAll(".subscribe-email")[0].value,
      subscribeName_two  = document.querySelectorAll(".subscribe-name")[1].value,
      subscribeEmail_two = document.querySelectorAll(".subscribe-email")[1].value;


   if(this.querySelectorAll("input")[0].value == "" || this.querySelectorAll("input")[1].value == "" || !(/.+@.+\..+/i.test(this.querySelectorAll("input")[1].value))){
    x = 1;

   }else
    x = 0;

    $.ajax({
      url: "subscribe.php",
      type: "POST",
      data: {nameOne:subscribeName_one,emailOne:subscribeEmail_one ,nameTwo:subscribeName_two,emailTwo:subscribeEmail_two}
    }).done(function(data){

       if(x == 1){
         $(".subscribedrop-form button").addClass('button-error');
      setTimeout(function(){
      $(".subscribedrop-form button").removeClass('button-error');
      },1000);
      return false;
    }
      $(".subscribedrop-form button").addClass('button-success');
      setTimeout(function(){
      $(".subscribedrop-form button").removeClass('button-success');
      },1000);

    });
    return false;
});

//subscribedrop


var scribe = document.getElementsByClassName("nav-animate")[2];

scribe.addEventListener("click" , function() {

var    subscribeName_one = document.querySelectorAll(".subscribe-name")[0],
      subscribeEmail_one = document.querySelectorAll(".subscribe-email")[0];




 if(scribe.nextSibling.className == "subscribedrop") scribe.nextSibling.className = "subscribedrop subscribedrop-active"
 else {
  scribe.nextSibling.className = "subscribedrop";
  subscribeName_one.value = "";
  subscribeEmail_one.value = "";
  }
});
var scribe2 = document.getElementsByClassName("nav-animate")[5];

scribe2.addEventListener("click" , function() {

var   subscribeName_two  = document.querySelectorAll(".subscribe-name")[1],
      subscribeEmail_two = document.querySelectorAll(".subscribe-email")[1];


 if(scribe2.nextSibling.className == "subscribedrop") scribe2.nextSibling.className = "subscribedrop subscribedrop-active"
 else {
  scribe2.nextSibling.className = "subscribedrop";
  subscribeName_two.value = "";
  subscribeEmail_two.value = "";
  }
});


//side-form

$('.email-subscribe').on("click" , function(){

 $(".email-convert").addClass("email-convert-active");
 $(".form-aside").addClass("form-aside-active");

});
$('.my-close').on("click" , function(){
 setTimeout(function(){
 $(".email-convert").removeClass("email-convert-active");
 },3000);
 $(".form-aside").removeClass("form-aside-active");


});

//typed


if(document.documentElement.clientWidth > 992){
  var typed = new Typed(".interactive-nav" , {
      strings : ["" ,"<a href='ymskaya-step.php'>заповедник Ямская степь</a>","<a href='bald-mountain.php'>заповедник Лысые горы</a>" , "<a href='forest-in-vorscla.php'>заповедник Лес-на-Ворскле</a>" , "<a href='ostravaevy-yar.php'>заповедник Острасьевы яры</a>" , "<a href='bekaryukovsky-bor.php'>заповедник Бекарюковский бор</a>" ,"<a href='walls-highlands.php'>заповедник Стенки – Изгорья</a>"],
      typeSpeed: 50,
      startDelay:8000,
      backDelay:2000,
      backSpeed: 60,
      loop:true,
      loopCount: Infinity

  })
}
setTimeout(function(){
    if(document.querySelector(".header-take")){
   var typed = new Typed('.header-take', {
     stringsElement: '.header-desc',
     typeSpeed: 50,
     startDelay:1500,
     backDelay:100000000,
     backSpeed: 60,
     loop:true,
     loopCount: Infinity
   });
  }
},1500);


// submit convert

$(".form-aside").submit(function(){
  $.ajax({
    url: "index.php",
    type: "post",
    data: $(this).serialize()
  }).done(function(){
     $(".form-aside button").addClass("button-submit-success");
     setTimeout(function(){
     $(".form-aside button").removeClass("button-submit-success");
     $(".form-aside").removeClass("form-aside-active");
     },1000);
     setTimeout(function(){
     $(".email-convert").removeClass("email-convert-active");

     },4000);
     setTimeout(function(){
        $(".email-aside").addClass("animated");
        $(".email-aside").addClass("zoomOutUp");
     },5500);
  });
  return false;

});


//search-button-nav
var found0 =  document.querySelectorAll(".found-search")[0];
var found =  document.querySelectorAll(".found-search")[1];
function funcSuccess (data){

  if(data != ""){
    found.style.display = "block";

    found.innerHTML = data;
    }



  if(data != ""){
    found0.style.display = "block";

    found0.innerHTML = data;
    }
}



$(".nav-search").submit(function(){
var searchDocOne = document.querySelectorAll(".search")[0].value;
var searchDocTwo = document.querySelectorAll(".search")[1].value;
    $.ajax({
        url: "search.php",
        type: "POST",
        data: ({searchOne : searchDocOne , searchTwo:searchDocTwo}),
        success: funcSuccess,
        dataType: "html"
    });
    return false ;
});

//submit-mail
function funcMailError(){
 var form = document.querySelector(".submit-mail");
 var createSpan = document.createElement("span");
 var error = document.createTextNode("Сообщение не доставлено");
 createSpan.appendChild(error);
 createSpan.className = "span-error";
 form.appendChild(createSpan);


 setTimeout(function(){
  createSpan.remove();
 },2500);

}
function funcMailSuccess(data){

 $(".submit-mail button").addClass('submit-mail-button-success');
 var form = document.querySelector(".submit-mail");
 var createSpan = document.createElement("span");
 var success = document.createTextNode(data);
 createSpan.appendChild(success);

 createSpan.className = "span-success";

 if(data == "Сообщение не доставлено") createSpan.className = "span-error";

 form.appendChild(createSpan);

 setTimeout(function(){
  $(".submit-mail button").removeClass('submit-mail-button-success');
  createSpan.remove();
 },2500);

}


$(".submit-mail").submit(function(){
var from = document.querySelectorAll(".submit-mail input")[0].value;
var subject = document.querySelectorAll(".submit-mail input")[1].value;
var message = document.querySelector(".submit-mail textarea").value;
 $.ajax({
  url: "mail.php",
  type: "POST",
  data: {from: from , subject: subject , message: message},
  success: funcMailSuccess,
  error: funcMailError
 })
 return false;
});

x = 0;
//submit-mail anim up
$("body").on("click",function(){
  if(document.querySelector(".mail-to-me").classList.contains('mail-to-me-up')){
    document.querySelector(".mail-to-me").classList.remove('mail-to-me-up');
  }
});

$(".mail-to-me").on('click' , function(e){
    event.stopPropagation();
    $(this).addClass("mail-to-me-up");
    $(".close-mail").removeClass("close-mail-active");



});

$(".close-mail").bind('click' , function(e){

  event.stopPropagation();
  $(".mail-to-me").removeClass("mail-to-me-up");
  $(".close-mail").addClass("close-mail-active");

});

var sideBarUl = document.querySelector(".nav-main-list");
var allh4 = document.querySelectorAll("h4");
var createSideBarLi;
var createSideBarA;
var createText;
for( var i = 0 ; i < allh4.length ; i++){
  createSideBarLi = document.createElement("li");
  createSideBarA = document.createElement("a");
  createText = document.createTextNode(allh4[i].innerHTML);
  createSideBarA.appendChild(createText);
  createSideBarLi.appendChild(createSideBarA);
  sideBarUl.appendChild(createSideBarLi);
  allh4[i].id = i;
  createSideBarA.className =  i;
}

$('<li><a class="watch-picture">Просмотреть картинки</a></li>').appendTo(sideBarUl);

var navA = document.querySelectorAll(".nav-main-list li a");

$(".nav-main-list li:not(:last) a").on("click" , function(e){

 var scroll =  e.target.className;

  $("html , body").animate({
      scrollTop : $("#" + scroll).offset().top + -200 + "px"

         });

});
$(".nav-main-list li a.watch-picture").on("click" , function(e){



  $("html , body").animate({
      scrollTop : $("#slick").offset().top + -200 + "px"

         });

});

var heightTwo = document.getElementById("two").getBoundingClientRect().height - document.documentElement.clientHeight;
$(document).on("scroll" , function(e){

for (var i = 0 ; i < allh4.length ; i++){

      if(allh4[i].getBoundingClientRect().top < 210){
        var id = allh4[i].id;
        navA[i].classList.add("nav-a-active");
        if(i != 0)
          navA[i].parentElement.previousElementSibling.firstElementChild.classList.remove("nav-a-active");
    }
    else{
        navA[i].classList.remove("nav-a-active");
      }

}


  if(sideBarUl.getBoundingClientRect().top < -200 || sideBarUl.getBoundingClientRect().top > 500){
    if( document.getElementById("two").getBoundingClientRect().top > -heightTwo)
    document.querySelector(".nav-main").style.top = Math.abs(document.getElementById("two").getBoundingClientRect().top) + 100 + "px";
  }

});


$(".slick").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});
var j = 0;
var i = 0 ;

var linkReserve = document.querySelectorAll(".list-reserve-wrapper a");

$(".link-active-reserve").on("click" , function(){

document.querySelectorAll(".active-crest")[1].classList.toggle("active-crest-two");
if(document.querySelectorAll(".active-crest")[1].classList.contains('active-crest-two')){
  for( i = 0 ; i < linkReserve.length ; i++){
   j = 0 ;
   setTimeout(function(i){
    return function(){

      linkReserve[i].style.display = "block";
      linkReserve[i].classList.add("animated");
      linkReserve[i].classList.add("zoomIn");
      linkReserve[i].classList.remove("zoomOut");

      }

   }(i),200 * i);


  }
}else{



     for( i = linkReserve.length ;  i >= 0 ; i-- , j++){

   setTimeout(function(i){
    return function(){


      linkReserve[i].classList.remove("zoomIn");
      linkReserve[i].classList.add("zoomOut");
      setTimeout(function(){
         linkReserve[i].style.display = "none";
      },1000);


      }

   }(i),200 * j);


  }


}

});


var tsCount = document.querySelectorAll(".tspan-count");


var len = document.querySelectorAll("svg.svg");

var lenh5 = document.querySelectorAll(".portfolio-item h5");

port.onclick =  function(e){

 document.querySelectorAll(".active-crest")[0].classList.add("active-crest-one");

$(".my-photo").addClass("my-photo-active");
$(".portfolio-item").css("display" , "flex");
$("footer").css("min-height" , "800px");
$("html , body").animate({

 scrollTop: $("#portfolio-wrapper-item").offset().top

})

        for (var i = 0 ; i < len.length ; i++){


      setTimeout(function(i){

       return function(){


               lenh5[i].style.display = "block";
               lenh5[i].classList.add("animated");
               lenh5[i].classList.add("slideInLeft");
               len[i].style.display = "block";
               len[i].classList.add("animated");
               len[i].classList.add("slideInLeft");

               var valueCount = tsCount[i].innerHTML;
               var j = 0;
               var timer  = setInterval(function(){
                tsCount[i].innerHTML = j;
                j++;
                if(j > valueCount) clearInterval(timer);
               },40);


         }

       }(i),500 * i);

}


}








if(document.querySelector(".header-take"))
 var remove = document.getElementsByClassName("header-desc")[0].lastChild.remove();


    setTimeout(function(){
     $(".preloader-wrapper").addClass("preloader-wrapper-load");

    },1500)
    setTimeout(function(){

     document.documentElement.className = "active-html js";
    },2500)
});





