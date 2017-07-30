$(function() {
	$(function() {
		if($(document).height() <= $(window).height()) {
			$('footer').addClass('navbar-fixed-bottom');
		}
		$('#sort-table').tablesorter({
			sortList: [[0, 0], [0, 1]]
		});

		var $rows = $('table tr');
		$('.search-input').keyup(function() {
			var val = $.trim($(this).val()).replace(/ + /g, ' ').toLowerCase(); // / + g, ' ' ???
			$rows.show().filter(function() {
				var text = $(this).text().replace(/\s + /g, ' ').toLowerCase();
				return !~text.indexOf(val);	// !~ ??? 
			}).hide();
		});
	});


})(jQuery);