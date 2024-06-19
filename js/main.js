$(document).ready(function() {
    //메뉴 슬라이드 다운
    $('.menu-ico').click(function(){
        $('.menu').slideDown(500);
    });
    $('.close-ico').click(function(){
        $('.menu').slideUp(500);
    });

    // 맨 위로 스크롤하는 버튼 클릭 시
    $('#scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

// 맨 위로 스크롤하는 버튼 보이기/감추기
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scrollTopBtn').fadeIn();
    } else {
        $('#scrollTopBtn').fadeOut();
    }
});


// myWork-sec가 화면에 보일 때
$(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var myWorkSecTop = $('.myWork-sec').offset().top;
    var triggerPoint =  windowHeight - myWorkSecTop + scrollTop;

    if (triggerPoint > 300) {
        $('.list-tit').addClass('visible');

        setTimeout(function() {
            $('.box-item').each(function(index) {
                const item = $(this);
                setTimeout(function() {
                    item.addClass('visible');
                }, index * 300);
            });
        }, 1000);
    }
});