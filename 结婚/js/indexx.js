(function($){
	$.fn.snow=function(options){
		var r =parseInt(Math.random()*256);
		var g =parseInt(Math.random()*256);
		var b =parseInt(Math.random()*256);
		var $flake=$('<div id="flake"/>').css({
			'position':'absolute',
			'top':'80px',
			'color':"rgb("+r+","+g+","+b+")"
		}).html('❤'),
		documentHeigth=$(document).height(),
		documentWidth=$(document).width(),
		defaults={
			minSize:10,
			maxSize:20,
			newOn:1000
		},
		options=$.extend({},defaults,options);
		var interval=setInterval(function(){
			var startPositionLeft=Math.random()*documentWidth-100,
			startOpacity=0.5+Math.random(),
			sizeFlake=options.minSize+Math.random()*options.maxSize,
			endPositionTop=documentHeigth-80,
			endPositionLeft=startPositionLeft-100+Math.random()*200,

			durationFall=documentHeigth*10+Math.random()*5000;
			$flake.clone().appendTo('body').css({
				left:startPositionLeft,
				opacity:startOpacity,
				'font-size':sizeFlake
			}).animate({
				top:endPositionTop,
				left:endPositionLeft,
				opacity:0.8
			},
			durationFall,'linear',
			function(){
				$(this).remove()
			});
		},
		options.newOn);
	};
})(jQuery);