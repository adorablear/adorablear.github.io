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

    // // .list-tit 요소 슬라이드 인
    // $('.list-tit').addClass('visible');

    // // 슬라이드 인 효과 완료 후, .box-item 요소 순차적으로 페이드 인
    // setTimeout(function() {
    //     $('.box-item').each(function(index) {
    //         const item = $(this);
    //         setTimeout(function() {
    //             item.addClass('visible');
    //         }, index * 300); // 순차적으로 페이드 인 효과 적용 (300ms 간격)
    //     });
    // }, 1000); // list-tit의 transition 시간이 1초이므로 동일하게 1000ms 설정

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
});

// 맨 위로 스크롤하는 버튼 보이기/감추기
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scrollTopBtn').fadeIn();
    } else {
        $('#scrollTopBtn').fadeOut();
    }
});