jQuery(document).ready(function($) {

	$('.n-tabs li').click(function() {
        $('.n-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.js-n-tab-content').removeClass('show-tab-content');
        let id = $(this).attr('data-tab-id');
        $('[data-content-id="'+id+'"]').addClass('show-tab-content');
    });
});