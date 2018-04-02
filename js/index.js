//我的淘宝
{
    $(".tb-title").mouseenter(function () {
        $(".taobao-menu").css("display", "block");
        $(".bottom-btn").css("transform", "rotate(-180deg)");
    })
    $(".mytaobao").mouseleave(function () {
        $(".taobao-menu").css("display", "none");
        $(".bottom-btn").css("transform", "rotate(0)");
    })
}
//收藏夹
{
    $(".tb-title1").mouseenter(function () {
        $(".menu-panel1").css("display", "block");
        $(".bottom-btn1").css("transform", "rotate(-180deg)");
    })
    $(".shoucang").mouseleave(function () {
        $(".menu-panel1").css("display", "none");
        $(".bottom-btn1").css("transform", "rotate(0)");
    })
}
//手机版
{
    $(".mobile").mouseenter(function () {
        $(".menu-mobile").css("display", "block");
    })
    $(".mobile").mouseleave(function () {
        $(".menu-mobile").css("display", "none");
    })
}
//商家支持
{
    $(".sell-wenzi").mouseenter(function () {
        $(".menu-seller").css("display", "block");
        $(".bottom-btn2").css("transform", "rotate(-180deg)");
    })
    $(".seller").mouseleave(function () {
        $(".menu-seller").css("display", "none");
        $(".bottom-btn2").css("transform", "rotate(0)");
    })
}
//网站导航
{
    $(".map-wenzi").mouseenter(function () {
        $(".menu-map").css("display", "block");
        $(".bottom-btn3").css("transform", "rotate(-180deg)");
    })
    $(".map").mouseleave(function () {
        $(".menu-map").css("display", "none");
        $(".bottom-btn3").css("transform", "rotate(0)");
    })
}

//返回顶部
{
    $(".totopicon").click(function () {

        $("html,body").animate({scrollTop: 0});
    });
}
//bannerlist
{
    $(".nav-item").mouseenter(function () {
        let index = $(this).index(".nav-item");
        $(".categoty-item").eq(index).show();
    })
        .mouseleave(function () {
            let index = $(this).index(".nav-item")
            $(".categoty-item").eq(index).hide();
        })
}
//banner    轮播点
{
    $(".lunbo").mouseenter(function () {
        // let colorarr=["rgb(215,19,59)","rgb(232,232,232)","rgb(232,232,232)","rgb(232,232,232)","rgb(19, 16, 61)"]
        let index = $(this).index(".lunbo");
        $(".mainbanner").removeClass("select").eq(index).addClass("select");
        $(".lunbo").removeClass("select").eq(index).addClass("select");
        n = index;
    })
    let n = 0;

    function move() {
        n++;
        if (n === $(".mainbanner").length) {
            n = 0;
        }
        ;
        if (n < 0) {
            n = $(".mainbanner").length - 1;
        }
        ;
        $(".mainbanner").removeClass("select").eq(n).addClass("select");
        $(".lunbo").removeClass("select").eq(n).addClass("select");
    }

    move();
    setInterval(move, 3000);
}
//天猫超市
{
    let n=0;
    function move() {
        n++;
        if(n===$(".todayb").length){
            n=0;
        }
        if(n<0){
            n=$(".todayb").length-1;
        }
        $(".todayb").removeClass("select").eq(n).addClass("select");
        $(".tabcolor").removeClass("select").eq(n).addClass("select");
    }
    move();
    setInterval(move, 3000);
}
//topbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 700) {
            $(".topbarbox").show();
        } else {
            $(".topbarbox").hide();
        }
        if (st > 600) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//楼层跳转
{
    $(".listnav").click(function () {
        let index = $(this).index(".listnav");
        let ot = $(".goodsitem").eq(index).offset().top - 200;
        $("html,body").animate({scrollTop: ot});
    })
}
//监测滚动
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        $(".goodsitem").each(function (index, ele) {
            if (st >= $(this).offset().top - 200) {
                $(".leftnavb .listnav").removeClass("active").eq(index).addClass("active");
            }
        })
    })
}
//leftbar返回顶部
{
    $(".listnavback").click(function () {
        $("html,body").animate({scrollTop: 0});
    });
}

//固定猫
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".mao-icon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-mao")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".mao").mouseleave(function () {
    //     n = 1;
    //     // switch (dir){
    //     //     case"left":$(".menu-mao").addClass("leftOut")
    //     // };
    //     $(".menu-mao").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
}
//固定人民币
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".qian").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-qian")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-dollar").mouseleave(function () {
    //     n = 1;
    //     $(".menu-qian").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
}
//固定收藏
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".xing-icon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-xing")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-xing").mouseleave(function () {
    //     n = 1;
    //     $(".menu-xing").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
}
//固定定时
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".dingshiicon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-dingshi")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-dingshi").mouseleave(function () {
    //     n = 1;
    //     $(".menu-dingshi").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
}
//固定充值
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".chongzhiicon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-chongzhi")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-chongzhi").mouseleave(function () {
    //     n = 1;
    //     $(".menu-chongzhi").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
}
//固定编辑
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".bianjiicon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-bianji")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-bianji").mouseleave(function () {
    //     n = 1;
    //     $(".menu-bianji").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);
    $(".bianjiicon").mouseenter(function () {
        let index = $(this).index(".bianjiicon");
        $(".menu-bianji").eq(index)
            .fadeIn(1000)
            .css("opacity", "1")
            .removeClass("leftOut").addClass("leftIn")
    })
    $(".bianjiicon").mouseleave(function () {
        let index = $(this).index(".bianjiicon");
        $(".menu-bianji").eq(index)
            .fadeOut(1000)
            .css("opacity", "0")
            .removeClass("leftIn").addClass("leftOut")
    })
    // $(".bianjiicon").mouseenter(function () {
    //     $(".rightlogo-xiaoguo1").css("opacity", "1");
    // })
    // $(".bianjiicon").mouseleave(function () {
    //     $(".rightlogo-xiaoguo1").css("opacity", "0");
    // })
}
//固定二维码
{
    $(".erweiicon").mouseenter(function () {
        $(".menu-erwei").css("display", "block");
    });
    $(".gd-erweima").mouseleave(function () {
        $(".menu-erwei").css("display", "none");
    })
}
//固定返回顶部
{
    // let n = 0;
    // let dir;
    // let fadeIn = $(".totopicon").mouseenter(function () {
    //     n++;
    //     if (n > 0) {
    //         $(".menu-totop")
    //             .fadeIn(1000)
    //             .css("display", "block")
    //             .addClass("leftIn")
    //     }
    //     ;
    // })
    // $(".gd-totop").mouseleave(function () {
    //     n = 1;
    //     $(".menu-totop").css("display", "none").fadeOut(1000);
    // })
    // $(fadeIn);

}