/*my jQuery js file */

$(document).ready(function(){
	/*alert("hallo");*/
				  		$("#toggle-menu").click(function(){
						$(".menu-item li a").toggle(1000);
					});
				  });



/*img toggle class */



var meinimg =$('#slider img').toArray();
var meinbu = $('.click-button').toArray();
var i = 0;

window.setInterval(function(){
	$(meinimg[i]).toggleClass('active');
	$(meinbu[i]).toggleClass('active');
		i++;
	
	
	if (i >= meinimg.length){
		i = 0;
		$(meinimg[i]).toggleClass('active');
		$(meinbu[i]).toggleClass('active');
		}							
}, 1000);


/* video player function */



var lieblings = $(".img-video").hover(myHover, myHider);

function myHover(e){
	$('video', this).get(0).play();
}

function myHider(e){
	$('video', this).get(0).pause();
}

