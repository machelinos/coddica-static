// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*
    FlexNav.js 0.7

    Copyright 2013, Jason Weaver http://jasonweaver.name
    Released under the WTFPL license
    http://sam.zoy.org/wtfpl/

//
*/
(function() {

  $.fn.flexNav = function(options) {
    var $nav, breakpoint, isDragging, nav_open, resizer, settings;
    settings = $.extend({
      'animationSpeed': 100
    }, options);
    $nav = $(this);
    nav_open = false;
    isDragging = false;
    $nav.find("li").each(function() {
      if ($(this).has("ul").length) {
        return $(this).addClass("item-with-ul").find("ul").hide();
      }
    });
    if ($nav.data('breakpoint')) {
      breakpoint = $nav.data('breakpoint');
    }

    resizer = function() {
      if ($(window).width() <= breakpoint) {
        $nav.removeClass("lg-screen").addClass("sm-screen");

        $('.one-page li a').on('click', function() {
          return $nav.removeClass('show');
        });
        return $('.item-with-ul').off();
      } else {
        $nav.removeClass("sm-screen").addClass("lg-screen");
        $nav.removeClass('show');
        return $('.item-with-ul').on('mouseenter', function() {
          return $(this).find('>ul').addClass('show').stop(true, true).slideDown(settings.animationSpeed);
        }).on('mouseleave', function() {
          return $(this).find('>ul').removeClass('show').stop(true, true).slideUp(settings.animationSpeed);
        });
      }
    };
    $('.item-with-ul, .menu-button').append('<span class="touch-button"><i class="navicon">&#9660;</i></span>');
    $('.menu-button, .menu-button .touch-button').on('touchstart mousedown', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(isDragging);
      return $(this).on('touchmove mousemove', function(e) {
        var msg;
        msg = e.pageX;
        isDragging = true;
        return $(window).off("touchmove mousemove");
      });
    }).on('touchend mouseup', function(e) {
      var $parent;
      e.preventDefault();
      e.stopPropagation();
      isDragging = false;
      $parent = $(this).parent();
      if (isDragging === false) {
        console.log('clicked');
      }
      if (nav_open === false) {
        $nav.addClass('show');
        $('.cerrar-menu').show();
        $('.abrir-menu').hide();
        return nav_open = true;
      } else if (nav_open === true) {
        $nav.removeClass('show');
        $('.cerrar-menu').hide();
        $('.abrir-menu').show();
        return nav_open = false;
      }
    });
    $('.touch-button').on('touchstart mousedown', function(e) {
      e.stopPropagation();
      e.preventDefault();
      return $(this).on('touchmove mousemove', function(e) {
        isDragging = true;
        return $(window).off("touchmove mousemove");
      });
    }).on('touchend mouseup', function(e) {
      var $sub;
      e.preventDefault();
      e.stopPropagation();
      $sub = $(this).parent('.item-with-ul').find('>ul');
      if ($nav.hasClass('lg-screen') === true) {
        $(this).parent('.item-with-ul').siblings().find('ul.show').removeClass('show').hide();
      }
      if ($sub.hasClass('show') === true) {
        return $sub.removeClass('show').slideUp(settings.animationSpeed);
      } else if ($sub.hasClass('show') === false) {
        return $sub.addClass('show').slideDown(settings.animationSpeed);
      }
    });
    $('.item-with-ul *').focus(function() {
      $(this).parent('.item-with-ul').parent().find(".open").not(this).removeClass("open").hide();
      return $(this).parent('.item-with-ul').find('>ul').addClass("open").show();
    });
    resizer();
    return $(window).on('resize', resizer);
  };

}).call(this);


/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */


(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);


// LIQUID SLIDER ====================================================
if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}(function(d,c,a,e){var b={determineAnimationType:function(){var f=this,l="animation",j="",h="Webkit Moz O ms Khtml".split(" "),k="",g=0;f.useCSS=false;if(f.elem.style.animationName){f.useCSS=true}if(f.useCSS===false){for(g=0;g<h.length;g++){if(f.elem.style[h[g]+"AnimationName"]!==e){k=h[g];l=k+"Animation";j="-"+k.toLowerCase()+"-";f.useCSS=true;break}}}if(a.documentElement.clientWidth>f.options.useCSSMaxWidth){f.useCSS=false}if(f.useCSS){f.options.continuous=false}},configureCSSTransitions:function(){var f=this,g,h;f.easing={easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175,.885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};if(f.useCSS){g="all "+f.options.slideEaseDuration+"ms "+f.easing[f.options.slideEaseFunction];h="all "+f.options.autoHeightEaseDuration+"ms "+f.easing[f.options.autoHeightEaseFunction];d(f.panelContainer).css({"-webkit-transition":g,"-moz-transition":g,"-ms-transition":g,"-o-transition":g,transition:g});if(f.options.autoHeight){(f.$sliderId).css({"-webkit-transition":h,"-moz-transition":h,"-ms-transition":h,"-o-transition":h,transition:h})}}},makeResponsive:function(){var f=this;d(f.sliderId+"-wrapper").addClass("liquid-responsive").css({"max-width":d(f.sliderId+" .panel").width(),width:"100%"});d(f.sliderId+" .panel-container").css("width",100*f.panelCount+f.pSign);d(f.sliderId+" .panel").css("width",100/f.panelCount+f.pSign);if(!f.options.autoHeight){(f.$sliderId).css("height",f.getHeighestPanel()+"px")}if(f.options.hideArrowsWhenMobile){f.leftWrapperPadding=d(f.sliderId+"-wrapper").css("padding-left");f.rightWrapperPadding=(f.$sliderWrap).css("padding-right")}if(f.options.dynamicArrows||f.options.dynamicArrowsGraphical){(f.$sliderId).css("padding-top",d(f.sliderId+"-wrapper .liquid-nav-right").css("height"))}f.slideWidth=(f.$sliderId).width();f.pSign="px";if(f.options.responsive){f.responsiveEvents()}d(f.sliderId+"-nav-select").change(function(){f.setCurrent(parseInt(d(this).val().split("tab")[1],10)-1)});d(f.sliderId+"-wrapper").css("width",(f.$sliderId).width());if(f.options.responsive){d(c).bind("resize",function(){f.responsiveEvents();clearTimeout(f.resizingTimeout);f.resizingTimeout=setTimeout(function(){f.adjustHeight();f.transition()},500)})}},responsiveEvents:function(){var g=this,f;if(g.options.responsive){f=(g.options.mobileUIThreshold||(g.totalNavWidth+10||g.options.hideArrowsThreshold));if((g.$sliderId).outerWidth()<f){if(g.options.mobileNavigation&&g.totalNavWidth){(g.$sliderNavUl).css("display","none");d(g.sliderId+"-wrapper .liquid-slider-select-box").css("display","block");d(g.sliderId+"-nav-select").css("display","block");if(g.loaded){d(g.sliderId+"-nav-select").val(g.options.mobileNavDefaultText)}}if(g.options.hideArrowsWhenMobile&&g.options.dynamicArrows){(g.$leftArrow).remove();(g.$rightArrow).remove()}else{if(!g.options.dynamicArrowsGraphical&&g.options.dynamicArrows){(g.$leftArrow).css("margin-"+g.options.dynamicTabsPosition,"0");(g.$rightArrow).css("margin-"+g.options.dynamicTabsPosition,"0")}}}else{if(g.options.mobileNavigation&&g.options.dynamicTabs){(g.$sliderNavUl).css("display","block");d(g.sliderId+"-wrapper .liquid-slider-select-box").css("display","none");d(g.sliderId+"-nav-select").css("display","none")}if(g.options.hideArrowsWhenMobile&&g.options.dynamicArrows&&!(d(g.leftArrow).length||d(g.rightArrow).length)){g.addArrows();g.registerArrows()}else{if(!g.options.dynamicArrowsGraphical&&g.options.dynamicArrows){(g.$leftArrow).css("margin-"+g.options.dynamicTabsPosition,(g.$sliderNavUl).css("height"));(g.$rightArrow).css("margin-"+g.options.dynamicTabsPosition,(g.$sliderNavUl).css("height"))}}}d(g.sliderId+"-wrapper").css("width","100%");g.slideWidth=d(g.sliderId).outerWidth(true)}},addPreloader:function(){var f=this;if(f.useCSS){d(f.sliderId).append('<div class="liquid-slider-preloader"></div>')}else{d(f.sliderId+" .panel-container").children().each(function(){d(this).children().append('<div class="liquid-slider-preloader"></div>')})}},removePreloader:function(){var g=this,f=0;if(g.options.preloader){d(g.sliderId+" .panel").children().each(function(){if(d(this).find(g.options.preloaderElements).not(".liquid-slider-preloader").length){f=g.getHeighestPanel()}else{var h=d(this);h.find(".liquid-slider-preloader").remove();if(h.parent()[0]===d((g.$panelContainer).children()[g.currentTab+~~g.options.continuous])[0]&&g.options.autoHeight){d(g.sliderId).css("height",d((g.$panelContainer).children()[g.currentTab+~~g.options.continuous]).css("height"))}}return f})}},addNavigation:function(){var h=this,g,f="<"+h.options.navElementTag+' class="liquid-nav"><ul id="'+(h.$elem).attr("id")+'-nav-ul"></ul></'+h.options.navElementTag+">",i=(h.options.mobileNavDefaultText)?'<option disabled="disabled" selected="selected">'+h.options.mobileNavDefaultText+"</option>":null;if(h.options.responsive&&h.options.mobileNavigation){g='<div class="liquid-slider-select-box"><select id="'+(h.$elem).attr("id")+'-nav-select" name="navigation">'+i+"</select></div>"}if(h.options.dynamicTabsPosition==="bottom"){(h.$sliderId).after(f)}else{(h.$sliderId).before(f)}if(h.options.responsive){h.$sliderNavUl=d(h.sliderId+"-nav-ul");(h.$sliderNavUl).before(g)}d.each((h.$elem).find(h.options.panelTitleSelector),function(j){d((h.$sliderWrap)).find(".liquid-nav ul").append('<li class="tab'+(j+1)+'"><a href="#'+(j+1)+'" title="'+d(this).text()+'">'+d(this).text()+"</a></li>")});if(h.options.responsive&&h.options.mobileNavigation){d.each((h.$elem).find(h.options.panelTitleSelector),function(j){d((h.$sliderWrap)).find(".liquid-slider-select-box select").append('<option value="tab'+(j+1)+'">'+d(this).text()+"</option>")})}},alignNavigation:function(){var f=this,g=(f.options.dynamicArrowsGraphical)?"-arrow":"";if(f.options.dynamicTabsAlign!=="center"){if(!f.options.responsive){d((f.$sliderWrap)).find(".liquid-nav ul").css("margin-"+f.options.dynamicTabsAlign,d((f.$sliderWrap)).find(".liquid-nav-"+f.options.dynamicTabsAlign+g).outerWidth(true)+parseInt((f.$sliderId).css("margin-"+f.options.dynamicTabsAlign),10))}d((f.$sliderWrap)).find(".liquid-nav ul").css("float",f.options.dynamicTabsAlign)}f.totalNavWidth=d((f.$sliderWrap)).find(".liquid-nav ul").outerWidth(true);if(f.options.dynamicTabsAlign==="center"){f.totalNavWidth=0;d((f.$sliderWrap)).find(".liquid-nav li a").each(function(){f.totalNavWidth+=d(this).outerWidth(true)});d((f.$sliderWrap)).find(".liquid-nav ul").css("width",f.totalNavWidth+1)}},init:function(g,h){var f=this;f.elem=h;f.$elem=d(h);d("body").removeClass("no-js");f.sliderId="#"+(f.$elem).attr("id");f.$sliderId=d(f.sliderId);f.options=d.extend({},d.fn.liquidSlider.options,g);f.pSign=(f.options.responsive)?"%":"px";if(((navigator.appVersion.indexOf("MSIE 7.")!==-1)||navigator.appVersion.indexOf("MSIE 8.")!==-1)){f.dontAnimateHeight=true}if(f.options.responsive){f.determineAnimationType()}f.build();if(f.options.preloader){f.addPreloader()}if(f.options.autoSlide){f.autoSlide()}f.events();if(f.options.preloader&!f.useCSS){f.removePreloader()}if(f.useCSS){f.clickable=false}d(c).bind("load",function(){if(f.options.preloader){d(".liquid-slider-preloader").each(function(){d(this).fadeOut(f.options.preloaderFadeOutDuration)})}f.loaded=true;f.clickable=true;f.adjustHeightNoAnimation();if(f.options.responsive){f.responsiveEvents(f.loaded)}if(f.options.responsive){f.configureCSSTransitions()}f.readyToSlide=true;f.adjustHeightNoAnimation();f.transition()})},build:function(){var f=this,g;if(f.options.hashLinking){f.getHashTags(c.location.hash);if(typeof(f.hashValue)!=="number"){f.hashValue=1}}f.currentTab=(f.hashValue)?f.hashValue-1:f.options.firstPanelToLoad-1;f.tabTemp=f.currentTab;if((f.$sliderId).parent().attr("class")!=="liquid-slider-wrapper"){(f.$sliderId).wrap('<div id="'+(f.$elem).attr("id")+'-wrapper" class="liquid-slider-wrapper"></div>')}f.$sliderWrap=d(f.sliderId+"-wrapper");d(f.sliderId).children().addClass((f.$elem).attr("id")+"-panel panel");f.panelClass=f.sliderId+" ."+(f.$elem).attr("id")+"-panel";f.$panelClass=d(f.panelClass);(f.$panelClass).wrapAll('<div class="panel-container"></div>');(f.$panelClass).wrapInner('<div class="panel-wrapper"></div>');f.panelContainer=(f.$panelClass).parent();f.$panelContainer=f.panelContainer;if(f.options.slideEaseFunction==="fade"){(f.$panelClass).addClass("fadeClass");f.options.continuous=false;d((f.$panelContainer).children()[f.currentTab]).css("display","block")}if(f.options.autoHeight&&!f.options.responsive){f.adjustHeightNoAnimation(d(d(f.panelContainer).children()[f.currentTab]).height()+~~(d(f.sliderId+"-wrapper .liquid-nav-right").height())+f.pSign)}else{if(!f.options.preloader){f.adjustHeightNoAnimation(d(d(f.panelContainer).children()[f.currentTab]).height())}}if(f.options.dynamicTabs){f.addNavigation()}if(f.options.dynamicArrows){f.addArrows()}else{f.options.hoverArrows=false;f.options.hideSideArrows=false}if(f.options.crossLinks){f.$crosslinks=d("[data-liquidslider-ref*="+(f.sliderId).split("#")[1]+"]")}g=((f.$leftArrow)&&(f.$leftArrow).css("position")==="absolute")?0:1;f.totalSliderWidth=(f.$sliderId).outerWidth(true)+~~(d(f.$leftArrow).outerWidth(true))*g+~~(d(f.$rightArrow).outerWidth(true))*g;d((f.$sliderWrap)).css("width",f.totalSliderWidth);if(f.options.dynamicTabs){f.alignNavigation()}if(f.options.continuous){(f.$panelContainer).prepend((f.$panelContainer).children().last().clone());(f.$panelContainer).append((f.$panelContainer).children().eq(1).clone())}f.clickable=true;f.panelCount=(f.options.slideEaseFunction==="fade")?1:d(f.panelClass).length;f.panelWidth=d(f.panelClass).outerWidth();f.totalWidth=f.panelCount*f.panelWidth;if(f.options.responsive&&!f.useCSS){f.slideWidth=100}else{f.slideWidth=(f.$sliderId).width()}if(f.options.slideEaseFunction!=="fade"&&!f.useCSS){d(f.panelContainer).css("margin-left",(-f.slideWidth*~~(f.options.continuous))+(-f.slideWidth*f.currentTab)+f.pSign)}f.setCurrent(f.currentTab);d(f.sliderId+" .panel-container").css("width",f.totalWidth);if(f.options.responsive){f.makeResponsive()}if(f.useCSS){f.panelWidth=d(f.panelClass).outerWidth();(f.panelContainer).css({"margin-left":"0%"});d(f.panelContainer).css({transform:"translate3d("+((-f.panelWidth*~~(f.options.continuous))+(-f.panelWidth*f.currentTab)+"px")+", 0, 0)","-webkit-transform":"translate3d("+((-f.panelWidth*~~(f.options.continuous))+(-f.panelWidth*f.currentTab)+"px")+", 0, 0)","-moz-transform":"translate3d("+((-f.panelWidth*~~(f.options.continuous))+(-f.panelWidth*f.currentTab)+"px")+", 0, 0)"})}},events:function(){var f=this;if(f.options.dynamicArrows){f.registerArrows()}if(f.options.crossLinks){f.registerCrossLinks()}if(f.options.dynamicTabs){(f.$sliderWrap).find("[class^=liquid-nav] li").on("click",function(){if(!f.clickable){return false}if(typeof f.options.callforwardFunction==="function"){f.animationCallForward(true)}f.setCurrent(parseInt(d(this).attr("class").split("tab")[1],10)-1);if(typeof f.options.callbackFunction==="function"){f.animationCallback(true)}return false})}(f.$sliderWrap).find("*").on("click",function(){if(!f.options.autoSlidePauseOnHover||f.options.autoSlideStopWhenClicked){if(f.options.autoSlide){f.checkAutoSlideStop()}if(f.options.continuous){clearTimeout(f.continuousTimeout)}}});if(f.options.autoSlidePauseOnHover||(f.options.hoverArrows&&f.options.dynamicArrows)){f.hoverable=true;f.hover()}if(f.options.swipe){f.touch()}if(f.options.keyboardNavigation){f.keyboard()}},setCurrent:function(g){var f=this;if(f.clickable){f.clickable=false;if(typeof g==="number"){f.currentTab=g}else{f.currentTab+=(~~(g==="right")||-1);if(!f.options.continuous){f.currentTab=(f.currentTab<0)?d(f.panelClass).length-1:(f.currentTab%d(f.panelClass).length)}}if(f.options.continuous){f.panelHeightCount=f.currentTab+1;if(f.currentTab===f.panelCount-2){f.setTab=0}else{if(f.currentTab===-1){f.setTab=f.panelCount-3}else{f.setTab=f.currentTab}}}else{f.panelHeightCount=f.currentTab;f.setTab=f.currentTab}if(f.options.dynamicTabs){d((f.$sliderWrap)).find(".tab"+(f.setTab+1)+":first a").addClass("current").parent().siblings().children().removeClass("current")}if(f.options.crossLinks){(f.$crosslinks).each(function(){if(f.options.hashCrossLinks){if(d(this).attr("href")===("#"+d(d(f.panelContainer).children()[(f.setTab+~~(f.options.continuous))]).find(f.options.panelTitleSelector).text().replace(/(\s)/g,"-").toLowerCase())){d("[data-liquidslider-ref="+(f.sliderId).split("#")[1]+"]").removeClass("currentCrossLink");d(this).addClass("currentCrossLink")}}else{if(d(this).attr("href")==="#"+(f.setTab+1)){d("[data-liquidslider-ref="+(f.sliderId).split("#")[1]+"]").removeClass("currentCrossLink");d(this).addClass("currentCrossLink")}}})}if(f.options.responsive&&f.options.mobileNavigation&&f.loaded){d(f.sliderId+"-nav-select").val("tab"+(f.setTab+1))}if(f.options.hashLinking){f.updateHashTags(f.currentTab)}if(f.options.hideSideArrows){f.hideArrows()}if(f.$leftArrow&&!f.options.hoverArrows&&f.options.dynamicArrows&&!f.options.hideSideArrows){(f.$leftArrow).css({opacity:1,visibility:"visible"});(f.$rightArrow).css({opacity:1,visibility:"visible"})}this.transition()}},getHeight:function(f){var g=this,h;h=f||d(d(g.panelContainer).children()[g.panelHeightCount]).css("height").split("px")[0];g.setHeight=(g.options.autoHeightRatio)?(((g.$sliderWrap).outerWidth(true)/(g.options.autoHeightRatio).split(":")[1]*(g.options.autoHeightRatio).split(":")[0])):h;g.setHeight=(g.setHeight<h)?g.setHeight:h;g.setHeight=(g.setHeight<g.options.autoHeightMin)?g.options.autoHeightMin:g.setHeight;if(!g.removePre&&g.options.preloader){g.removePre=true;return g.removePreloader()}return g.setHeight},getHeighestPanel:function(){var g=this,f=0,h;d(g.sliderId+" .panel").each(function(){h=d(this).height();f=(h>f)?h:f});return f},adjustHeight:function(i,h,f){var g=this;if(g.options.autoHeight&&(g.useCSS||g.dontAnimateHeight)){g.adjustHeightNoAnimation(f)}else{if(g.options.autoHeight){(g.$sliderId).animate({height:g.getHeight(f)+"px"},{easing:i||g.options.autoHeightEaseFunction,duration:h||g.options.autoHeightEaseDuration,queue:false})}}},adjustHeightNoAnimation:function(f){var g=this;(g.$sliderId).css({height:g.getHeight(f)+"px"})},transition:function(){var f=this;if(f.options.autoHeight){f.adjustHeight()}if(f.options.slideEaseFunction==="fade"){if(f.loaded){d(d(f.panelContainer).children()[f.currentTab]).fadeTo(f.options.fadeInDuration,1).css("z-index",1).siblings().fadeTo(f.options.fadeOutDuration,0).css("z-index",0);setTimeout(function(){if(f.options.continuous){f.continuousSlide()}else{f.clickable=true}},f.options.slideEaseDuration+50)}}else{if(f.loaded||!f.useCSS){if(f.options.continuous){f.marginLeft=-(f.currentTab*f.slideWidth)-f.slideWidth}else{f.marginLeft=-(f.currentTab*f.slideWidth)}if((f.marginLeft+f.pSign)!==(f.panelContainer).css("margin-left")||(f.marginLeft!==-100)){if(f.useCSS&&f.loaded){(f.panelContainer).css({"-webkit-transform":"translate3d("+f.marginLeft+f.pSign+", 0, 0)","-moz-transform":"translate3d("+f.marginLeft+f.pSign+", 0, 0)","-ms-transform":"translate3d("+f.marginLeft+f.pSign+", 0, 0)","-o-transform":"translate3d("+f.marginLeft+f.pSign+", 0, 0)",transform:"translate3d("+f.marginLeft+f.pSign+", 0, 0)"});setTimeout(function(){if(f.options.continuous){f.continuousSlide()}else{f.clickable=true}},f.options.slideEaseDuration+50)}else{(f.panelContainer).animate({"margin-left":f.marginLeft+f.pSign},{easing:f.options.slideEaseFunction,duration:f.options.slideEaseDuration,queue:false,complete:function(){if(f.options.continuous){f.continuousSlide()}else{f.clickable=true}}})}}}}if(f.options.responsive){d(f.sliderId+"-wrapper").css("width",(f.$sliderId).outerWidth(true))}}};d.fn.liquidSlider=function(f){return this.each(function(){var g=Object.create(b);g.init(f,this);d.data(this,"liquidSlider",g)})};d.fn.liquidSlider.options={autoHeight:true,autoHeightMin:0,autoHeightEaseDuration:1500,autoHeightEaseFunction:"easeInOutExpo",autoHeightRatio:null,slideEaseDuration:1500,fadeInDuration:1000,fadeOutDuration:1000,slideEaseFunction:"easeInOutExpo",callforwardFunction:null,callbackFunction:null,autoSlide:false,autoSliderDirection:"right",autoSlideInterval:7000,autoSlideControls:false,autoSlideStartText:"Start",autoSlideStopText:"Stop",autoSlideStopWhenClicked:false,autoSlidePauseOnHover:false,continuous:false,dynamicArrows:false,dynamicArrowsGraphical:false,dynamicArrowLeftText:"&#171; left",dynamicArrowRightText:"right &#187;",hideSideArrows:false,hideSideArrowsDuration:750,hoverArrows:false,hoverArrowDuration:250,dynamicTabs:true,dynamicTabsAlign:"left",dynamicTabsPosition:"top",firstPanelToLoad:1,panelTitleSelector:"h2.title",navElementTag:"div",crossLinks:false,hashLinking:false,hashNames:true,hashCrossLinks:false,hashTitleSelector:"h2.title",hashTagSeparator:"",hashTLD:"",keyboardNavigation:false,leftKey:39,rightKey:37,panelKeys:{1:49,2:50,3:51,4:52},responsive:true,mobileNavigation:true,mobileNavDefaultText:"Menu",mobileUIThreshold:0,hideArrowsWhenMobile:true,hideArrowsThreshold:481,useCSSMaxWidth:1030,preloader:true,preloaderFadeOutDuration:250,preloaderElements:"img,video,iframe,object",swipe:false}})(jQuery,window,document);

/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

  // Enable strict mode
  "use strict";

  w.picturefill = function() {
    var ps = w.document.getElementsByTagName( "span" );

    // Loop the pictures
    for( var i = 0, il = ps.length; i < il; i++ ){
      if( ps[ i ].getAttribute( "data-picture" ) !== null ){

        var sources = ps[ i ].getElementsByTagName( "span" ),
          matches = [];

        // See if which sources match
        for( var j = 0, jl = sources.length; j < jl; j++ ){
          var media = sources[ j ].getAttribute( "data-media" );
          // if there's no media specified, OR w.matchMedia is supported
          if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
            matches.push( sources[ j ] );
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

      if( matches.length ){
        var matchedEl = matches.pop();
        if( !picImg ){
          picImg = w.document.createElement( "img" );
          picImg.alt = ps[ i ].getAttribute( "data-alt" );
        }

        picImg.src =  matchedEl.getAttribute( "data-src" );
        matchedEl.appendChild( picImg );
      }
      else if( picImg ){
        picImg.parentNode.removeChild( picImg );
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if( w.addEventListener ){
    w.addEventListener( "resize", w.picturefill, false );
    w.addEventListener( "DOMContentLoaded", function(){
      w.picturefill();
      // Run once only
      w.removeEventListener( "load", w.picturefill, false );
    }, false );
    w.addEventListener( "load", w.picturefill, false );
  }
  else if( w.attachEvent ){
    w.attachEvent( "onload", w.picturefill );
  }

}( this ));



/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
  'use strict';

  /*
   * Global api.
   */
  var skrollr = window.skrollr = {
    get: function() {
      return _instance;
    },
    //Main entry point.
    init: function(options) {
      return _instance || new Skrollr(options);
    },
    VERSION: '0.6.8'
  };

  //Minify optimization.
  var hasProp = Object.prototype.hasOwnProperty;
  var Math = window.Math;
  var getStyle = window.getComputedStyle;

  //They will be filled when skrollr gets initialized.
  var documentElement;
  var body;

  var EVENT_TOUCHSTART = 'touchstart';
  var EVENT_TOUCHMOVE = 'touchmove';
  var EVENT_TOUCHCANCEL = 'touchcancel';
  var EVENT_TOUCHEND = 'touchend';

  var SKROLLABLE_CLASS = 'skrollable';
  var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
  var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
  var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

  var SKROLLR_CLASS = 'skrollr';
  var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
  var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
  var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

  var DEFAULT_EASING = 'linear';
  var DEFAULT_DURATION = 1000;//ms
  var MOBILE_DECELERATION = 0.0006;//pixel/ms²

  var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

  var ANCHOR_START = 'start';
  var ANCHOR_END = 'end';
  var ANCHOR_CENTER = 'center';
  var ANCHOR_BOTTOM = 'bottom';

  //The property which will be added to the DOM element to hold the ID of the skrollable.
  var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

  var rxTrim = /^\s+|\s+$/g;

  //Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
  var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

  var rxPropValue = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

  //Easing function names follow the property in square brackets.
  var rxPropEasing = /^([a-z\-]+)\[(\w+)\]$/;

  var rxCamelCase = /-([a-z])/g;
  var rxCamelCaseFn = function(str, letter) {
    return letter.toUpperCase();
  };

  //Numeric values with optional sign.
  var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

  //Used to replace occurences of {?} with a number.
  var rxInterpolateString = /\{\?\}/g;

  //Finds rgb(a) colors, which don't use the percentage notation.
  var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

  //Finds all gradients.
  var rxGradient = /[a-z\-]+-gradient/g;

  //Vendor prefix. Will be set once skrollr gets initialized.
  var theCSSPrefix = '';
  var theDashedCSSPrefix = '';

  //Will be called once (when skrollr gets initialized).
  var detectCSSPrefix = function() {
    //Only relevant prefixes. May be extended.
    //Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
    var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

    //Detect prefix for current browser by finding the first property using a prefix.
    if(!getStyle) {
      return;
    }

    var style = getStyle(body, null);

    for(var k in style) {
      //We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
      theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

      if(theCSSPrefix) {
        break;
      }
    }

    //Did we even detect a prefix?
    if(!theCSSPrefix) {
      theCSSPrefix = theDashedCSSPrefix = '';

      return;
    }

    theCSSPrefix = theCSSPrefix[0];

    //We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
    if(theCSSPrefix.slice(0,1) === '-') {
      theDashedCSSPrefix = theCSSPrefix;

      //There's no logic behind these. Need a look up.
      theCSSPrefix = ({
        '-webkit-': 'webkit',
        '-moz-': 'Moz',
        '-ms-': 'ms',
        '-o-': 'O'
      })[theCSSPrefix];
    } else {
      theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
    }
  };

  var polyfillRAF = function() {
    var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

    var lastTime = _now();

    if(_isMobile || !requestAnimFrame) {
      requestAnimFrame = function(callback) {
        //How long did it take to render?
        var deltaTime = _now() - lastTime;
        var delay = Math.max(0, 33 - deltaTime);

        window.setTimeout(function() {
          lastTime = _now();
          callback();
        }, delay);
      };
    }

    return requestAnimFrame;
  };

  //Built-in easing functions.
  var easings = {
    begin: function() {
      return 0;
    },
    end: function() {
      return 1;
    },
    linear: function(p) {
      return p;
    },
    quadratic: function(p) {
      return p * p;
    },
    cubic: function(p) {
      return p * p * p;
    },
    swing: function(p) {
      return (-Math.cos(p * Math.PI) / 2) + 0.5;
    },
    sqrt: function(p) {
      return Math.sqrt(p);
    },
    outCubic: function(p) {
      return (Math.pow((p - 1), 3) + 1);
    },
    //see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
    bounce: function(p) {
      var a;

      if(p <= 0.5083) {
        a = 3;
      } else if(p <= 0.8489) {
        a = 9;
      } else if(p <= 0.96208) {
        a = 27;
      } else if(p <= 0.99981) {
        a = 91;
      } else {
        return 1;
      }

      return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
    }
  };

  /**
   * Constructor.
   */
  function Skrollr(options) {
    documentElement = document.documentElement;
    body = document.body;

    detectCSSPrefix();

    _instance = this;

    options = options || {};

    _constants = options.constants || {};

    //We allow defining custom easings or overwrite existing.
    if(options.easing) {
      for(var e in options.easing) {
        easings[e] = options.easing[e];
      }
    }

    _edgeStrategy = options.edgeStrategy || 'set';

    _listeners = {
      //Function to be called right before rendering.
      beforerender: options.beforerender,

      //Function to be called right after finishing rendering.
      render: options.render
    };

    //forceHeight is true by default
    _forceHeight = options.forceHeight !== false;

    if(_forceHeight) {
      _scale = options.scale || 1;
    }

    _smoothScrollingEnabled = options.smoothScrolling !== false;
    _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

    //Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
    _smoothScrolling = {
      targetTop: _instance.getScrollTop()
    };

    //A custom check function may be passed.
    _isMobile = ((options.mobileCheck || function() {
      return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
    })());

    if(_isMobile) {
      _skrollrBody = document.getElementById('skrollr-body');

      //Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
      if(_skrollrBody) {
        _detect3DTransforms();
      }

      _initMobile();
      _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
    } else {
      _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
    }

    //Triggers parsing of elements and a first reflow.
    _instance.refresh();

    _addEvent(window, 'resize orientationchange', _reflow);

    var requestAnimFrame = polyfillRAF();

    //Let's go.
    (function animloop(){
      _render();
      requestAnimFrame(animloop);
    }());

    return _instance;
  }

  /**
   * (Re)parses some or all elements.
   */
  Skrollr.prototype.refresh = function(elements) {
    var elementIndex;
    var elementsLength;
    var ignoreID = false;

    //Completely reparse anything without argument.
    if(elements === undefined) {
      //Ignore that some elements may already have a skrollable ID.
      ignoreID = true;

      _skrollables = [];
      _skrollableIdCounter = 0;

      elements = document.getElementsByTagName('*');
    } else {
      //We accept a single element or an array of elements.
      elements = [].concat(elements);
    }

    elementIndex = 0;
    elementsLength = elements.length;

    for(; elementIndex < elementsLength; elementIndex++) {
      var el = elements[elementIndex];
      var anchorTarget = el;
      var keyFrames = [];

      //If this particular element should be smooth scrolled.
      var smoothScrollThis = _smoothScrollingEnabled;

      //The edge strategy for this particular element.
      var edgeStrategy = _edgeStrategy;

      if(!el.attributes) {
        continue;
      }

      //Iterate over all attributes and search for key frame attributes.
      var attributeIndex = 0;
      var attributesLength = el.attributes.length;

      for (; attributeIndex < attributesLength; attributeIndex++) {
        var attr = el.attributes[attributeIndex];

        if(attr.name === 'data-anchor-target') {
          anchorTarget = document.querySelector(attr.value);

          if(anchorTarget === null) {
            throw 'Unable to find anchor target "' + attr.value + '"';
          }

          continue;
        }

        //Global smooth scrolling can be overridden by the element attribute.
        if(attr.name === 'data-smooth-scrolling') {
          smoothScrollThis = attr.value !== 'off';

          continue;
        }

        //Global edge strategy can be overridden by the element attribute.
        if(attr.name === 'data-edge-strategy') {
          edgeStrategy = attr.value;

          continue;
        }

        var match = attr.name.match(rxKeyframeAttribute);

        if(match === null) {
          continue;
        }

        var constant = match[1];

        //If there is a constant, get it's value or fall back to 0.
        constant = constant && _constants[constant.substr(1)] || 0;

        //Parse key frame offset. If undefined will be casted to 0.
        var offset = (match[2] | 0) + constant;
        var anchor1 = match[3];
        //If second anchor is not set, the first will be taken for both.
        var anchor2 = match[4] || anchor1;

        var kf = {
          offset: offset,
          props: attr.value,
          //Point back to the element as well.
          element: el
        };

        keyFrames.push(kf);

        //"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
        if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
          kf.mode = 'absolute';

          //data-end needs to be calculated after all key frames are know.
          if(anchor1 === ANCHOR_END) {
            kf.isEnd = true;
          } else {
            //For data-start we can already set the key frame w/o calculations.
            //#59: "scale" options should only affect absolute mode.
            kf.frame = offset * _scale;

            delete kf.offset;
          }
        }
        //"relative" mode, where numbers are relative to anchors.
        else {
          kf.mode = 'relative';
          kf.anchors = [anchor1, anchor2];
        }
      }

      //Does this element have key frames?
      if(!keyFrames.length) {
        continue;
      }

      //Will hold the original style and class attributes before we controlled the element (see #80).
      var styleAttr, classAttr;

      var id;

      if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
        //We already have this element under control. Grab the corresponding skrollable id.
        id = el[SKROLLABLE_ID_DOM_PROPERTY];
        styleAttr = _skrollables[id].styleAttr;
        classAttr = _skrollables[id].classAttr;
      } else {
        //It's an unknown element. Asign it a new skrollable id.
        id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
        styleAttr = el.style.cssText;
        classAttr = _getClass(el);
      }

      _skrollables[id] = {
        element: el,
        styleAttr: styleAttr,
        classAttr: classAttr,
        anchorTarget: anchorTarget,
        keyFrames: keyFrames,
        smoothScrolling: smoothScrollThis,
        edgeStrategy: edgeStrategy
      };

      _updateClass(el, [SKROLLABLE_CLASS], []);
    }

    //Reflow for the first time.
    _reflow();

    //Now that we got all key frame numbers right, actually parse the properties.
    elementIndex = 0;
    elementsLength = elements.length;

    for(; elementIndex < elementsLength; elementIndex++) {
      var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

      if(sk === undefined) {
        continue;
      }

      //Parse the property string to objects
      _parseProps(sk);

      //Fill key frames with missing properties from left and right
      _fillProps(sk);
    }

    return _instance;
  };

  /**
   * Transform "relative" mode to "absolute" mode.
   * That is, calculate anchor position and offset of element.
   */
  Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
    var viewportHeight = documentElement.clientHeight;
    var box = element.getBoundingClientRect();
    var absolute = box.top;

    //#100: IE doesn't supply "height" with getBoundingClientRect.
    var boxHeight = box.bottom - box.top;

    if(viewportAnchor === ANCHOR_BOTTOM) {
      absolute -= viewportHeight;
    } else if(viewportAnchor === ANCHOR_CENTER) {
      absolute -= viewportHeight / 2;
    }

    if(elementAnchor === ANCHOR_BOTTOM) {
      absolute += boxHeight;
    } else if(elementAnchor === ANCHOR_CENTER) {
      absolute += boxHeight / 2;
    }

    //Compensate scrolling since getBoundingClientRect is relative to viewport.
    absolute += _instance.getScrollTop();

    return (absolute + 0.5) | 0;
  };

  /**
   * Animates scroll top to new position.
   */
  Skrollr.prototype.animateTo = function(top, options) {
    options = options || {};

    var now = _now();
    var scrollTop = _instance.getScrollTop();

    //Setting this to a new value will automatically cause the current animation to stop, if any.
    _scrollAnimation = {
      startTop: scrollTop,
      topDiff: top - scrollTop,
      targetTop: top,
      duration: options.duration || DEFAULT_DURATION,
      startTime: now,
      endTime: now + (options.duration || DEFAULT_DURATION),
      easing: easings[options.easing || DEFAULT_EASING],
      done: options.done
    };

    //Don't queue the animation if there's nothing to animate.
    if(!_scrollAnimation.topDiff) {
      if(_scrollAnimation.done) {
        _scrollAnimation.done.call(_instance, false);
      }

      _scrollAnimation = undefined;
    }

    return _instance;
  };

  /**
   * Stops animateTo animation.
   */
  Skrollr.prototype.stopAnimateTo = function() {
    if(_scrollAnimation && _scrollAnimation.done) {
      _scrollAnimation.done.call(_instance, true);
    }

    _scrollAnimation = undefined;
  };

  /**
   * Returns if an animation caused by animateTo is currently running.
   */
  Skrollr.prototype.isAnimatingTo = function() {
    return !!_scrollAnimation;
  };

  Skrollr.prototype.setScrollTop = function(top, force) {
    //Don't do smooth scrolling (last top === new top).
    if(force === true) {
      _lastTop = top;
      _forceRender = true;
    }

    if(_isMobile) {
      _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);

      //That's were we actually "scroll" on mobile.
      if(_skrollrBody) {
        //Set the transform ("scroll it").
        skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
      }
    } else {
      window.scrollTo(0, top);
    }

    return _instance;
  };

  Skrollr.prototype.getScrollTop = function() {
    if(_isMobile) {
      return _mobileOffset;
    } else {
      return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
    }
  };

  Skrollr.prototype.on = function(name, fn) {
    _listeners[name] = fn;

    return _instance;
  };

  Skrollr.prototype.off = function(name) {
    delete _listeners[name];

    return _instance;
  };

  /*
    Private methods.
  */

  var _initMobile = function() {
    var initialElement;
    var initialTouchY;
    var initialTouchX;
    var currentTouchY;
    var currentTouchX;
    var lastTouchY;
    var deltaY;

    var initialTouchTime;
    var currentTouchTime;
    var lastTouchTime;
    var deltaTime;

    _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
      e.preventDefault();

      var touch = e.changedTouches[0];

      currentTouchY = touch.clientY;
      currentTouchX = touch.clientX;
      currentTouchTime = e.timeStamp;

      switch(e.type) {
        case EVENT_TOUCHSTART:
          //The last element we tapped on.
          if(initialElement) {
            initialElement.blur();
          }

          initialElement = e.target;
          initialTouchY = lastTouchY = currentTouchY;
          initialTouchX = currentTouchX;
          initialTouchTime = currentTouchTime;

          break;
        case EVENT_TOUCHMOVE:
          deltaY = currentTouchY - lastTouchY;
          deltaTime = currentTouchTime - lastTouchTime;

          _instance.setScrollTop(_mobileOffset - deltaY);

          lastTouchY = currentTouchY;
          lastTouchTime = currentTouchTime;
          break;
        default:
        case EVENT_TOUCHCANCEL:
        case EVENT_TOUCHEND:
          var distanceY = initialTouchY - currentTouchY;
          var distanceX = initialTouchX - currentTouchX;
          var distance2 = distanceX * distanceX + distanceY * distanceY;

          //Check if it was more like a tap (moved less than 7px).
          if(distance2 < 49) {
            //It was a tap, click the element.
            initialElement.focus();
            initialElement.click();

            return;
          }

          initialElement = undefined;

          var speed = deltaY / deltaTime;

          //Cap speed at 3 pixel/ms.
          speed = Math.max(Math.min(speed, 3), -3);

          var duration = Math.abs(speed / MOBILE_DECELERATION);
          var targetOffset = speed * duration + 0.5 * MOBILE_DECELERATION * duration * duration;
          var targetTop = _instance.getScrollTop() - targetOffset;

          //Relative duration change for when scrolling above bounds.
          var targetRatio = 0;

          //Change duration proportionally when scrolling would leave bounds.
          if(targetTop > _maxKeyFrame) {
            targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

            targetTop = _maxKeyFrame;
          } else if(targetTop < 0) {
            targetRatio = -targetTop / targetOffset;

            targetTop = 0;
          }

          duration = duration * (1 - targetRatio);

          _instance.animateTo(targetTop, {easing: 'outCubic', duration: duration});
          break;
      }
    });

    //Just in case there has already been some native scrolling, reset it.
    window.scrollTo(0, 0);
    documentElement.style.overflow = body.style.overflow = 'hidden';
  };

  /**
   * Updates key frames which depend on others.
   * That is "end" in "absolute" mode and all key frames in "relative" mode.
   */
  var _updateDependentKeyFrames = function() {
    var skrollable;
    var element;
    var anchorTarget;
    var keyFrames;
    var keyFrameIndex;
    var keyFramesLength;
    var kf;
    var skrollableIndex;
    var skrollablesLength;

    //First process all relative-mode elements and find the max key frame.
    skrollableIndex = 0;
    skrollablesLength = _skrollables.length;

    for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
      skrollable = _skrollables[skrollableIndex];
      element = skrollable.element;
      anchorTarget = skrollable.anchorTarget;
      keyFrames = skrollable.keyFrames;

      keyFrameIndex = 0;
      keyFramesLength = keyFrames.length;

      for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
        kf = keyFrames[keyFrameIndex];

        if(kf.mode === 'relative') {
          _reset(element);

          kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - kf.offset;

          _reset(element, true);
        }

        //Only search for max key frame when forceHeight is enabled.
        if(_forceHeight) {
          //Find the max key frame, but don't use one of the data-end ones for comparison.
          if(!kf.isEnd && kf.frame > _maxKeyFrame) {
            _maxKeyFrame = kf.frame;
          }
        }
      }
    }

    //#133: The document can be larger than the maxKeyFrame we found.
    _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

    //Now process all data-end keyframes.
    skrollableIndex = 0;
    skrollablesLength = _skrollables.length;

    for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
      skrollable = _skrollables[skrollableIndex];
      keyFrames = skrollable.keyFrames;

      keyFrameIndex = 0;
      keyFramesLength = keyFrames.length;

      for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
        kf = keyFrames[keyFrameIndex];

        if(kf.isEnd) {
          kf.frame = _maxKeyFrame - kf.offset;
        }
      }

      skrollable.keyFrames.sort(_keyFrameComparator);
    }
  };

  /**
   * Calculates and sets the style properties for the element at the given frame.
   * @param fakeFrame The frame to render at when smooth scrolling is enabled.
   * @param actualFrame The actual frame we are at.
   */
  var _calcSteps = function(fakeFrame, actualFrame) {
    //Iterate over all skrollables.
    var skrollableIndex = 0;
    var skrollablesLength = _skrollables.length;

    for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
      var skrollable = _skrollables[skrollableIndex];
      var element = skrollable.element;
      var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
      var frames = skrollable.keyFrames;
      var firstFrame = frames[0].frame;
      var lastFrame = frames[frames.length - 1].frame;
      var beforeFirst = frame < firstFrame;
      var afterLast = frame > lastFrame;
      var firstOrLastFrame = frames[beforeFirst ? 0 : frames.length - 1];
      var key;
      var value;

      //If we are before/after the first/last frame, set the styles according to the given edge strategy.
      if(beforeFirst || afterLast) {
        //Check if we already handled this edge case last time.
        //Note: using setScrollTop it's possible that we jumped from one edge to the other.
        if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
          continue;
        }

        //Add the skrollr-before or -after class.
        _updateClass(element, [beforeFirst ? SKROLLABLE_BEFORE_CLASS : SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS, SKROLLABLE_AFTER_CLASS]);

        //Remember that we handled the edge case (before/after the first/last keyframe).
        skrollable.edge = beforeFirst ? -1 : 1;

        switch(skrollable.edgeStrategy) {
          case 'reset':
            _reset(element);
            continue;
          case 'ease':
            //Handle this case like it would be exactly at first/last keyframe and just pass it on.
            frame = firstOrLastFrame.frame;
            break;
          default:
          case 'set':
            var props = firstOrLastFrame.props;

            for(key in props) {
              if(hasProp.call(props, key)) {
                value = _interpolateString(props[key].value);

                skrollr.setStyle(element, key, value);
              }
            }

            continue;
        }
      } else {
        //Did we handle an edge last time?
        if(skrollable.edge !== 0) {
          _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
          skrollable.edge = 0;
        }
      }

      //Find out between which two key frames we are right now.
      var keyFrameIndex = 0;
      var framesLength = frames.length - 1;

      for(; keyFrameIndex < framesLength; keyFrameIndex++) {
        if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
          var left = frames[keyFrameIndex];
          var right = frames[keyFrameIndex + 1];

          for(key in left.props) {
            if(hasProp.call(left.props, key)) {
              var progress = (frame - left.frame) / (right.frame - left.frame);

              //Transform the current progress using the given easing function.
              progress = left.props[key].easing(progress);

              //Interpolate between the two values
              value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

              value = _interpolateString(value);

              skrollr.setStyle(element, key, value);
            }
          }

          break;
        }
      }
    }
  };

  /**
   * Renders all elements.
   */
  var _render = function() {
    //We may render something else than the actual scrollbar position.
    var renderTop = _instance.getScrollTop();

    //If there's an animation, which ends in current render call, call the callback after rendering.
    var afterAnimationCallback;
    var now = _now();
    var progress;

    //Before actually rendering handle the scroll animation, if any.
    if(_scrollAnimation) {
      //It's over
      if(now >= _scrollAnimation.endTime) {
        renderTop = _scrollAnimation.targetTop;
        afterAnimationCallback = _scrollAnimation.done;
        _scrollAnimation = undefined;
      } else {
        //Map the current progress to the new progress using given easing function.
        progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

        renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
      }

      _instance.setScrollTop(renderTop);
    }
    //Smooth scrolling only if there's no animation running and if we're not on mobile.
    else if(!_isMobile) {
      var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

      //The user scrolled, start new smooth scrolling.
      if(smoothScrollingDiff) {
        _smoothScrolling = {
          startTop: _lastTop,
          topDiff: renderTop - _lastTop,
          targetTop: renderTop,
          startTime: _lastRenderCall,
          endTime: _lastRenderCall + _smoothScrollingDuration
        };
      }

      //Interpolate the internal scroll position (not the actual scrollbar).
      if(now <= _smoothScrolling.endTime) {
        //Map the current progress to the new progress using easing function.
        progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

        renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
      }
    }

    //Did the scroll position even change?
    if(_forceRender || _lastTop !== renderTop) {
      //Remember in which direction are we scrolling?
      _direction = (renderTop >= _lastTop) ? 'down' : 'up';

      _forceRender = false;

      var listenerParams = {
        curTop: renderTop,
        lastTop: _lastTop,
        maxTop: _maxKeyFrame,
        direction: _direction
      };

      //Tell the listener we are about to render.
      var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

      //The beforerender listener function is able the cancel rendering.
      if(continueRendering !== false) {
        //Now actually interpolate all the styles.
        _calcSteps(renderTop, _instance.getScrollTop());

        //Remember when we last rendered.
        _lastTop = renderTop;

        if(_listeners.render) {
          _listeners.render.call(_instance, listenerParams);
        }
      }

      if(afterAnimationCallback) {
        afterAnimationCallback.call(_instance, false);
      }
    }

    _lastRenderCall = now;
  };

  /**
   * Parses the properties for each key frame of the given skrollable.
   */
  var _parseProps = function(skrollable) {
    //Iterate over all key frames
    var keyFrameIndex = 0;
    var keyFramesLength = skrollable.keyFrames.length;

    for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
      var frame = skrollable.keyFrames[keyFrameIndex];
      var easing;
      var value;
      var prop;
      var props = {};

      var match;

      while((match = rxPropValue.exec(frame.props)) !== null) {
        prop = match[1];
        value = match[2];

        easing = prop.match(rxPropEasing);

        //Is there an easing specified for this prop?
        if(easing !== null) {
          prop = easing[1];
          easing = easing[2];
        } else {
          easing = DEFAULT_EASING;
        }

        //Exclamation point at first position forces the value to be taken literal.
        value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

        //Save the prop for this key frame with his value and easing function
        props[prop] = {
          value: value,
          easing: easings[easing]
        };
      }

      frame.props = props;
    }
  };

  /**
   * Parses a value extracting numeric values and generating a format string
   * for later interpolation of the new values in old string.
   *
   * @param val The CSS value to be parsed.
   * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
   * where the first element is the format string later used
   * and all following elements are the numeric value.
   */
  var _parseProp = function(val) {
    var numbers = [];

    //One special case, where floats don't work.
    //We replace all occurences of rgba colors
    //which don't use percentage notation with the percentage notation.
    rxRGBAIntegerColor.lastIndex = 0;
    val = val.replace(rxRGBAIntegerColor, function(rgba) {
      return rgba.replace(rxNumericValue, function(n) {
        return n / 255 * 100 + '%';
      });
    });

    //Handle prefixing of "gradient" values.
    //For now only the prefixed value will be set. Unprefixed isn't supported anyway.
    if(theDashedCSSPrefix) {
      rxGradient.lastIndex = 0;
      val = val.replace(rxGradient, function(s) {
        return theDashedCSSPrefix + s;
      });
    }

    //Now parse ANY number inside this string and create a format string.
    val = val.replace(rxNumericValue, function(n) {
      numbers.push(+n);
      return '{?}';
    });

    //Add the formatstring as first value.
    numbers.unshift(val);

    return numbers;
  };

  /**
   * Fills the key frames with missing left and right hand properties.
   * If key frame 1 has property X and key frame 2 is missing X,
   * but key frame 3 has X again, then we need to assign X to key frame 2 too.
   *
   * @param sk A skrollable.
   */
  var _fillProps = function(sk) {
    //Will collect the properties key frame by key frame
    var propList = {};
    var keyFrameIndex;
    var keyFramesLength;

    //Iterate over all key frames from left to right
    keyFrameIndex = 0;
    keyFramesLength = sk.keyFrames.length;

    for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
      _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
    }

    //Now do the same from right to fill the last gaps

    propList = {};

    //Iterate over all key frames from right to left
    keyFrameIndex = sk.keyFrames.length - 1;

    for(; keyFrameIndex >= 0; keyFrameIndex--) {
      _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
    }
  };

  var _fillPropForFrame = function(frame, propList) {
    var key;

    //For each key frame iterate over all right hand properties and assign them,
    //but only if the current key frame doesn't have the property by itself
    for(key in propList) {
      //The current frame misses this property, so assign it.
      if(!hasProp.call(frame.props, key)) {
        frame.props[key] = propList[key];
      }
    }

    //Iterate over all props of the current frame and collect them
    for(key in frame.props) {
      propList[key] = frame.props[key];
    }
  };

  /**
   * Calculates the new values for two given values array.
   */
  var _calcInterpolation = function(val1, val2, progress) {
    var valueIndex;
    var val1Length = val1.length;

    //They both need to have the same length
    if(val1Length !== val2.length) {
      throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
    }

    //Add the format string as first element.
    var interpolated = [val1[0]];

    valueIndex = 1;

    for(; valueIndex < val1Length; valueIndex++) {
      //That's the line where the two numbers are actually interpolated.
      interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
    }

    return interpolated;
  };

  /**
   * Interpolates the numeric values into the format string.
   */
  var _interpolateString = function(val) {
    var valueIndex = 1;

    rxInterpolateString.lastIndex = 0;

    return val[0].replace(rxInterpolateString, function() {
      return val[valueIndex++];
    });
  };

  /**
   * Resets the class and style attribute to what it was before skrollr manipulated the element.
   * Also remembers the values it had before reseting, in order to undo the reset.
   */
  var _reset = function(elements, undo) {
    //We accept a single element or an array of elements.
    elements = [].concat(elements);

    var skrollable;
    var element;
    var elementsIndex = 0;
    var elementsLength = elements.length;

    for(; elementsIndex < elementsLength; elementsIndex++) {
      element = elements[elementsIndex];
      skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

      //Couldn't find the skrollable for this DOM element.
      if(!skrollable) {
        continue;
      }

      if(undo) {
        //Reset class and style to the "dirty" (set by skrollr) values.
        element.style.cssText = skrollable.dirtyStyleAttr;
        _updateClass(element, skrollable.dirtyClassAttr);
      } else {
        //Remember the "dirty" (set by skrollr) class and style.
        skrollable.dirtyStyleAttr = element.style.cssText;
        skrollable.dirtyClassAttr = _getClass(element);

        //Reset class and style to what it originally was.
        element.style.cssText = skrollable.styleAttr;
        _updateClass(element, skrollable.classAttr);
      }
    }
  };

  /**
   * Detects support for 3d transforms by applying it to the skrollr-body.
   */
  var _detect3DTransforms = function() {
    _translateZ = 'translateZ(0)';
    skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

    var computedStyle = getStyle(_skrollrBody);
    var computedTransform = computedStyle.getPropertyValue('transform');
    var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
    var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

    if(!has3D) {
      _translateZ = '';
    }
  };

  /**
   * Set the CSS property on the given element. Sets prefixed properties as well.
   */
  skrollr.setStyle = function(el, prop, val) {
    var style = el.style;

    //Camel case.
    prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

    //Make sure z-index gets a <integer>.
    //This is the only <integer> case we need to handle.
    if(prop === 'zIndex') {
      //Floor
      style[prop] = '' + (val | 0);
    }
    //#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
    else if(prop === 'float') {
      style.styleFloat = style.cssFloat = val;
    }
    else {
      //Need try-catch for old IE.
      try {
        //Set prefixed property if there's a prefix.
        if(theCSSPrefix) {
          style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
        }

        //Set unprefixed.
        style[prop] = val;
      } catch(ignore) {}
    }
  };

  /**
   * Cross browser event handling.
   */
  var _addEvent = skrollr.addEvent = function(element, names, callback) {
    var intermediate = function(e) {
      //Normalize IE event stuff.
      e = e || window.event;

      if(!e.target) {
        e.target = e.srcElement;
      }

      if(!e.preventDefault) {
        e.preventDefault = function() {
          e.returnValue = false;
        };
      }

      return callback.call(this, e);
    };

    names = names.split(' ');

    var nameCounter = 0;
    var namesLength = names.length;

    for(; nameCounter < namesLength; nameCounter++) {
      if(element.addEventListener) {
        element.addEventListener(names[nameCounter], callback, false);
      } else {
        element.attachEvent('on' + names[nameCounter], intermediate);
      }
    }
  };

  var _reflow = function() {
    var pos = _instance.getScrollTop();

    //Will be recalculated by _updateDependentKeyFrames.
    _maxKeyFrame = 0;

    if(_forceHeight && !_isMobile) {
      //un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
      body.style.height = 'auto';
    }

    _updateDependentKeyFrames();

    if(_forceHeight && !_isMobile) {
      //"force" the height.
      body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
    }

    //The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
    if(_isMobile) {
      _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
    } else {
      //Remember and reset the scroll pos (#217).
      _instance.setScrollTop(pos, true);
    }

    _forceRender = true;
  };

  /*
   * Returns the height of the document.
   */
  var _getDocumentHeight = function() {
    var skrollrBodyHeight = (_skrollrBody && _skrollrBody.offsetHeight || 0);
    var bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

    return bodyHeight - documentElement.clientHeight;
  };

  /**
   * Returns a string of space separated classnames for the current element.
   * Works with SVG as well.
   */
  var _getClass = function(element) {
    var prop = 'className';

    //SVG support by using className.baseVal instead of just className.
    if(window.SVGElement && element instanceof window.SVGElement) {
      element = element[prop];
      prop = 'baseVal';
    }

    return element[prop];
  };

  /**
   * Adds and removes a CSS classes.
   * Works with SVG as well.
   * add and remove are arrays of strings,
   * or if remove is ommited add is a string and overwrites all classes.
   */
  var _updateClass = function(element, add, remove) {
    var prop = 'className';

    //SVG support by using className.baseVal instead of just className.
    if(window.SVGElement && element instanceof window.SVGElement) {
      element = element[prop];
      prop = 'baseVal';
    }

    //When remove is ommited, we want to overwrite/set the classes.
    if(remove === undefined) {
      element[prop] = add;
      return;
    }

    //Cache current classes. We will work on a string before passing back to DOM.
    var val = element[prop];

    //All classes to be removed.
    var classRemoveIndex = 0;
    var removeLength = remove.length;

    for(; classRemoveIndex < removeLength; classRemoveIndex++) {
      val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
    }

    val = _trim(val);

    //All classes to be added.
    var classAddIndex = 0;
    var addLength = add.length;

    for(; classAddIndex < addLength; classAddIndex++) {
      //Only add if el not already has class.
      if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
        val += ' ' + add[classAddIndex];
      }
    }

    element[prop] = _trim(val);
  };

  var _trim = function(a) {
    return a.replace(rxTrim, '');
  };

  /**
   * Adds a space before and after the string.
   */
  var _untrim = function(a) {
    return ' ' + a + ' ';
  };

  var _now = Date.now || function() {
    return +new Date();
  };

  var _keyFrameComparator = function(a, b) {
    return a.frame - b.frame;
  };

  /*
   * Private variables.
   */

  //Singleton
  var _instance;

  /*
    A list of all elements which should be animated associated with their the metadata.
    Exmaple skrollable with two key frames animating from 100px width to 20px:

    skrollable = {
      element: <the DOM element>,
      styleAttr: <style attribute of the element before skrollr>,
      classAttr: <class attribute of the element before skrollr>,
      keyFrames: [
        {
          frame: 100,
          props: {
            width: {
              value: ['{?}px', 100],
              easing: <reference to easing function>
            }
          },
          mode: "absolute"
        },
        {
          frame: 200,
          props: {
            width: {
              value: ['{?}px', 20],
              easing: <reference to easing function>
            }
          },
          mode: "absolute"
        }
      ]
    };
  */
  var _skrollables;

  var _skrollrBody;

  var _listeners;
  var _forceHeight;
  var _maxKeyFrame = 0;

  var _scale = 1;
  var _constants;

  //Current direction (up/down).
  var _direction = 'down';

  //The last top offset value. Needed to determine direction.
  var _lastTop = -1;

  //The last time we called the render method (doesn't mean we rendered!).
  var _lastRenderCall = _now();

  //Will contain data about a running scrollbar animation, if any.
  var _scrollAnimation;

  var _smoothScrollingEnabled;

  var _smoothScrollingDuration;

  //Will contain settins for smooth scrolling if enabled.
  var _smoothScrolling;

  //Can be set by any operation/event to force rendering even if the scrollbar didn't move.
  var _forceRender;

  //Each skrollable gets an unique ID incremented for each skrollable.
  //The ID is the index in the _skrollables array.
  var _skrollableIdCounter = 0;

  var _edgeStrategy;


  //Mobile specific vars. Will be stripped by UglifyJS when not in use.
  var _isMobile = false;

  //The virtual scroll offset when using mobile scrolling.
  var _mobileOffset = 0;

  //If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
  var _translateZ;
}(window, document));

