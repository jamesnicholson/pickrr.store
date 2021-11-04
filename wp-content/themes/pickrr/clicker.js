(function($) {
    $(document).ready(function(){
        $('.filter').on('click', function(item) {
            var tag_id = $(this).attr('data-tag');
            $('.recipe-card').each(function(){
                var stuff = $(this).attr('data-tags').split(',');
                if(stuff.includes(tag_id)){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            })
        });
        $('#filter-tag-all').on('click', function() {
            $('.recipe-card').each(function(){
                $(this).show();
            })
        });
    });
})(jQuery);