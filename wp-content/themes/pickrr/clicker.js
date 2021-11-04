(function($) {
    $(document).ready(function(){
    
        $('.filter').on('click', function(item) {
            var category_id = $(this).attr('data-category');
            var tag_id = $(this).attr('data-tag');

            $('.filter').each(function(){
                $(this).removeClass('selected');
            })
            $(this).addClass('selected');
           
            $('.recipe-card').each(function(){
                var dataTags = $(this).attr('data-tags').split(',');
                var dataCategories = $(this).attr('data-categories').split(',');
                if(category_id != 0){
                    if(dataCategories.includes(category_id) || dataTags.includes(tag_id)){
                        $(this).show();         
                    }else{
                        $(this).hide();
                    }
                }else{
                    $(this).show();      
                }
            })
        });
    });
})(jQuery);