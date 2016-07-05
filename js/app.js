$(function () {
	$('#my-slider').sliderPro({
		width: '100%',
		aspectRatio: 2.5,
		arrows: true,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: false,
		autoScaleLayers: false
	});

	/* slide panel */
	$('.toggle-btn').on('click', function (e) {
		e.stopPropagation();
		var $this = $(this);
		var $holder = $this.closest('.slide-panel');
		var $target = $holder.find('.holder');

		$target.slideToggle(function () {

			$holder.toggleClass('open');
		})

		return false;

	});
	
	/* Tabs */
	$('.tabs-nav a').on('click', function(e){
		e.stopPropagation();
		var $this = $(this);
		var $holder = $this.closest('.tabs');
		
		var $active_link = $holder.find('.tabs-nav a.active');
		var $open_tab = $holder.find('.tab.open');
		
		
		var $target = $holder.find('#' + $this.data('target'));
		
		var isOpened = $target.is($open_tab);
		
		if(!isOpened){
			$active_link.removeClass('active');
			$this.addClass('active');
			
			$open_tab.fadeOut('fast', function(){
				
				$open_tab.removeClass('open');
				
				$target.fadeIn('fast', function(){
					
					$target.addClass('open');
					
					$target.removeAttr('style');
					$open_tab.removeAttr('style');
				})
				
			})
		}	
		
		return false;
	});
	
	/*Footer toggle*/
	$('.prefooter .toggle-btn').on('click', function(e){
		e.stopPropagation();
		var $this = $(this);
		var $holder = $this.closest('.prefooter');
		var $target = $holder.find('.js-animation');
		
		$target.slideToggle('fast', function(){
			$holder.toggleClass('open');
			$target.removeAttr('style');
		})

		
		
		
		return false;
	})
});