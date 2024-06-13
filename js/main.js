$(document).ready(function() {

    $(function(){
        //menu
        $('.menu-ico').click(function(){
            $('.menu').slideDown(500);
        });
        $('.close-ico').click(function(){
            $('.menu').slideUp(500);
        });
    });

}); 