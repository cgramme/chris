$(window).resize(function(){
	if($(window).width()>800){listSetup();}else{$('.menu, .course-menu, .signin-menu').hide();}
});
$(window).load(function(){
	showText("#msg", "<Code Odessey/>", 0, 100);
	listSetup();
});
$(document).ready(function(){
	$('.menu .courses').on('click',function(){listOut($('.menu li'), 0, 50);listIn($('.course-menu li'), 0, 50);});
	$('.menu .sign-in').on('click',function(){listOut($('.menu li'), 0, 50);listIn($('.signin-menu li'), 0, 50);});
	$('.course-menu').on('click mouseleave', function(){listIn($('.menu li'), 0, 50);listOut($('.course-menu li'), 0, 50);});
	$('.signin-menu').on('click mouseleave', function(){listIn($('.menu li'), 0, 50);listOut($('.signin-menu li'), 0, 50);});
	//tablet/phone size menu display
	$('.menu-button').on('click', function(){
		if($('.menu').is(":visible")){
			listOut($('.menu li'), 0, 50);
		}else{
			listIn($('.menu li'), 0, 50);
		}
		
	});
	//Course buttons on hover
    $('.html-basics').mouseover(function() {
		buttonAnimate("Learn the basic principles of the foundational web language HTML.", this);
	}).mouseout(function() {buttonAnimate("HTML Basics", this);});
    $('.html-intermediate').mouseover(function() {
		buttonAnimate("Take your basic knowledge of HTML to the next level with this HTML intermediate guide. Coming soon!", this);
	}).mouseout(function() {buttonAnimate("HTML Intermediate", this);});
	$('.css-basics').mouseover(function() {
		buttonAnimate("Add style to your HTML with this CSS basics course. Coming soon!", this);
	}).mouseout(function() {buttonAnimate("CSS Basics", this);});
    $('.css-intermediate').mouseover(function() {
		buttonAnimate("Take your CSS to the next level! Coming soon!", this);
	}).mouseout(function() {buttonAnimate("CSS Intermediate", this);});
    $('.javascript-basics').mouseover(function() {
		buttonAnimate("Take even more control of your site with Javascript Basics! Comming soon!", this);
	}).mouseout(function() {buttonAnimate("Javascript Basics", this);});
    $('.sass-basics').mouseover(function() {
		buttonAnimate("Syntactically awesome stylesheets, your css on steriods! Comming soon!", this);
	}).mouseout(function() {buttonAnimate("Sass Basics", this);});
	//Start Welcome message and course recommendation sliding text
	slideText(5000);
});
//course transition animation
//string1 sets text to be displayed after animation
//paramObject should be set to "this"
function buttonAnimate(string1, paramObject){
	$(paramObject).find('p').transition({
			  perspective: '500px',rotateY: '-90deg',rotateX: '-90deg'
			},200, function(){
				$(paramObject).find('p').html(string1);
				$(paramObject).find('p').transition({
			 		 perspective: '500px',rotateY: '0deg',rotateX: '0deg'
				},200);
			}
		);
}
//Welcome text and recommendation for courses animated sliding text
//time variable sets pause between each message
function slideText(time){
	var i = 1;
	setInterval(function(){ 
		var listLength = $('.text-slide li').length;
		if($('.text-slide span').length != 0){$('.text-slide span').remove();}
		$('.text-slide li:nth-child('+i+')').css({"display":"block"}).addClass('translate-x-in').delay(time).queue(function(next){
				$(this).css({"display":"none"});
				next();
			});
		if(i>=listLength){i=1;}else{i++;}	
	}, time);
}
//display one string text character at a time
//target is the element to be filled with text
//message is the string to be displayed one character at a time
//index should be set to 0
//interval is the time in milliseconds between each character dispalyed
function showText (target, message, index, interval) {   
  if(index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
        showText(target, message, index, interval); 
    }, interval);
  }
}
//listOut will remove list from view by moving item down one at a time
function listOut (list, index, interval) {
	if(index < list.length) {
    $(list[index++]).removeClass('list-in-anima').addClass('list-out-anima').parent().hide();
    setTimeout(function () {
        listOut(list, index, interval); 
    }, interval);
  }
}
//listIn will show each list item one at a time by moving to original position
function listIn (list, index, interval) {
	if(index < list.length) {
    $(list[index++]).removeClass('list-out-anima').addClass('list-in-anima').parent().show();
    setTimeout(function () {
        listIn(list, index, interval);
    }, interval);
  }
}
//Menu list setup and animate in
function listSetup () {
	listOut($('.course-menu li'), 0, 0);
	listOut($('.signin-menu li'), 0, 0);
	if($(window).width()>800){
		listIn($('.menu li'), 0, 200);
	}else{
		listOut($('.menu li'), 0, 0);
	}
	setTimeout(function () {$('.course-menu, .signin-menu, .menu').css({"opacity":"1"});}, 500);
}
