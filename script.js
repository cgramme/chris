var intertV;

$(window).load(function(){
	slideContent(5000);
	resizeWindow();
	setTimeout(function(){
		$('.wrapper').addClass('fade-in-slow');
	},100);

	setTimeout(function () {

            listIn($('li .child-3d'), 0, 300);

        }, 1000);
});
$(document).ready(function(){
	resizeWindow();
	$('.projects').click(function() {
  		loadXMLDoc("projects.txt","change-content");
  		$('.home-icon').show().addClass('fade-in-slow');
	});
	$('.interests').click(function() {
  		loadXMLDoc("interests.txt","change-content");
  		$('.home-icon').show().addClass('fade-in-slow');
	});

	$('.name-logo').click(function() {
  		alert($(window).width());
	});



});

$(document).on('click', '.contact', function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

$(document).on('mouseenter', '.large-icon.email', function(){
		$('.footer h2').fadeOut(200);
		setTimeout(function(){$('.footer h2').css({'font-size':'40px'}).html("cgramme36@gmail.com").fadeIn(200);},200);
	}).on('mouseleave', '.large-icon.email', function(){
		$('.footer h2').fadeOut(200);
		setTimeout(function(){$('.footer h2').css({'font-size':'70px'}).html("Contact").fadeIn(200);},200);
	});
$(document).on('mouseenter', '.large-icon.phone', function(){
		$('.footer h2').fadeOut(200);
		setTimeout(function(){$('.footer h2').css({'font-size':'50px'}).html("# (770) 549-5787").fadeIn(200);},200);
	}).on('mouseleave', '.large-icon.phone', function(){
		$('.footer h2').fadeOut(200);
		setTimeout(function(){$('.footer h2').css({'font-size':'70px'}).html("Contact").fadeIn(200);},200);
	});

$(document).on('click', '.android', function () {
    loadXMLDoc("android.txt","change-content");
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

//AJAX loading
function loadXMLDoc(url, elementId){
		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
 			 xmlhttp=new XMLHttpRequest();
 		}else{// code for IE6, IE5
 			 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 		}
		xmlhttp.onreadystatechange=function(){
  			if (xmlhttp.readyState==4 && xmlhttp.status==200){
    				document.getElementById(elementId).innerHTML=xmlhttp.responseText;
   			 }
  		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
}

//Animated main menu
var boxSize=120;	//boxSize should be set to the size of your animated element.
var scaleSize=1.07; 	//scaleSize should be set to desired amount of zoom on hover.
var scale3d=40;		//scale3d should be set to the amount of 3d effect on cursor hover.
$(document).mousemove(function(e){
    var divPos={};
    var offset;
    var divXpos;
    var divYpos;
    if($(e.target).attr('class') == "child-3d"){
        offset = $(e.target).parent().offset();
        divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };
        if(divPos.top>boxSize/2){
            divXpos = (divPos.top-boxSize/2)/(boxSize/scale3d);
            divYpos = -(divPos.left-boxSize/2)/(boxSize/scale3d);
        }else{
            divXpos = -((boxSize/2)-divPos.top)/(boxSize/scale3d);
            divYpos = ((boxSize/2)-divPos.left)/(boxSize/scale3d);
        }
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)','-webkit-transform':'rotateY(0deg) rotateX(0deg)'});
        $('.parent-3d').css({'z-index':'1'});
        $(e.target).parents('.parent-3d').css({'z-index':'10'});
        $(e.target).css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale('+scaleSize+')',
            ' -webkit-transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg)'});
    }else{
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)','-webkit-transform':'rotateY(0deg) rotateX(0deg)'});
        $('.parent-3d').css({'z-index':'1'});
    }
});


//Welcome text and recommendation for courses animated sliding text
//time variable sets pause between each message
function slideContent(time){
	$('.slides:first').show();
	var i = 0;
	var listLength = $('.slide-content .slides').length;
	intertV = setInterval(function(){ 
		if(i===listLength-1){
			setTimeout(function(){
				$('.slides:nth('+(i)+')').hide();
				$('.slides:first').css({'opacity':'0'}).show().removeClass('translate-y-out').addClass('fade-in-slow');
				i=0;
			},0);
		}else{
			$('.slides:first').css({'opacity':'1'}).removeClass('translate-y-out, fade-in-slow');
			$('.slides:nth('+(i+1)+')').show();
			resizeWindow();
			setTimeout(function(){
				$('.slides:nth('+(i-1)+')').hide();
				$('.slides:nth('+i+')').removeClass('translate-y-in').addClass('translate-y-out');
				$('.slides:nth('+(i+1)+')').removeClass('translate-y-out').addClass('translate-y-in');
				i++
			},100);
		}
	}, time);
	intertV;
}


function listIn (list, index, interval) {
    if(index < list.length) {
        $(list[index++]).addClass('fall-in').css({'opacity':'1'}).delay(2000).queue(function(next){
                $(this).removeClass('fall-in');
                next();
        });
        setTimeout(function () {
            listIn(list, index, interval);
        }, interval);
    }
}

function resizeWindow() {
	var width = $(window).width();
	if(width < 400){
		$('.child-3d').width(width/3.3).height(width/3.3).css({'margin':'0 2px'});
	}else{
		$('.child-3d').width(120).height(120).css({'margin':'0 5px'});
	}

	if(width<800) {
		$('.box .pic').height($('.box .pic').width());
		$('.footer h2').hide();
	}else{
		$('.footer h2').show();
	}


}

$(window).resize(function() {
	resizeWindow();
});

