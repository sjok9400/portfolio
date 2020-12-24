$(document).ready(function(){
        $('#header .nav > ul > li').hover(function(){
                $('#header .container .menubg').stop().slideDown();
        }, function(){
        $('#header .container .menubg').stop().slideUp();
        });
        
        $('.pop').click(function(){
                var idx = $(this).parent('div').index() + 1;
                var imgSrc = 'image/sangsae_0' + idx + '.jpg';
                $('.popcont img').attr('src', imgSrc);
                $('.popup').stop().fadeIn();
        });
        $('.popbg, .close').click(function(){
                $('.popup').stop().fadeOut();
        });

        // setInterval(function(){
	// 	var $first = $('#sec_02 .container .slide div').first();
	// 		$('#sec_02 .container .slide').animate({'margin-left':'-1200px'
	// 		}, 1000, function(){
	// 				$('#sec_02 .container .slide').append($first).css('margin-left','0px');
	// 		});
        // },3000);
        
        AOS.init();
        
});










// var string = " 새롭게 피어난 신입 웹디자이너, 웹퍼블리셔 옥수진입니다.";
//         var str = string.split("");
//         var el = document.getElementById('border');
//         (function animate() {
//         str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
//         var running = setTimeout(animate, 90);
// })();
        
  