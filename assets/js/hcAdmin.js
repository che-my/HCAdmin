/**
 * hcAdmin.js 后台主题UI框架
 * version 4.9
 * 自定义js 公共配置
 */
define(['jquery'],function($){
    var HcAdmin = {
        init:function(){
            $(document).ready(function () {
                // MetsiMenu
                $('#side-menu').metisMenu();

                // 打开右侧边栏
                $('.right-sidebar-toggle').click(function () {
                    $('#right-sidebar').toggleClass('sidebar-open');
                });

                // 右侧边栏使用slimscroll
                $('.sidebar-container').slimScroll({
                    height: '100%',
                    railOpacity: 0.4,
                    wheelStep: 10
                });

                // 打开聊天窗口
                $('.open-small-chat').click(function () {
                    $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
                    $('.small-chat-box').toggleClass('active');
                });

                // 聊天窗口使用slimscroll
                $('.small-chat-box .content').slimScroll({
                    height: '234px',
                    railOpacity: 0.4
                });

                // Small todo handler
                $('.check-link').click(function () {
                    var button = $(this).find('i');
                    var label = $(this).next('span');
                    button.toggleClass('fa-check-square').toggleClass('fa-square-o');
                    label.toggleClass('todo-completed');
                    return false;
                });

                //固定菜单栏
                $(function () {
                    $('.sidebar-collapse').slimScroll({
                        height: '100%',
                        railOpacity: 0.9,
                        alwaysVisible: false
                    });
                });


                // 菜单切换
                $('.navbar-minimalize').click(function () {
                    $("body").toggleClass("mini-navbar");
                    HcAdmin.SmoothlyMenu();
                });

                // 侧边栏高度
                HcAdmin.fix_height();

                $(window).bind("load resize click scroll", function () {
                    if (!$("body").hasClass('body-small')) {
                        HcAdmin.fix_height();
                    }
                });

                //侧边栏滚动
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
                        $('#right-sidebar').addClass('sidebar-top');
                    } else {
                        $('#right-sidebar').removeClass('sidebar-top');
                    }
                });

                $('.full-height-scroll').slimScroll({
                    height: '100%'
                });

                $('#side-menu>li').click(function () {
                    if ($('body').hasClass('mini-navbar')) {
                        HcAdmin.NavToggle();
                    }
                });
                $('#side-menu>li li a').click(function () {
                    if ($(window).width() < 769) {
                        HcAdmin.NavToggle();
                    }
                });

                $('.nav-close').click(HcAdmin.NavToggle());

                //ios浏览器兼容性处理
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    $('#content-main').css('overflow-y', 'auto');
                }
            });

            $(window).bind("load resize", function () {
                if ($(this).width() < 769) {
                    $('body').addClass('mini-navbar');
                    $('.navbar-static-side').fadeIn();
                }
            });

            //主题设置
            $(function () {

                // 顶部菜单固定
                $('#fixednavbar').click(function () {
                    if ($('#fixednavbar').is(':checked')) {
                        $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                        $("body").removeClass('boxed-layout');
                        $("body").addClass('fixed-nav');
                        $('#boxedlayout').prop('checked', false);

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("boxedlayout", 'off');
                        }

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("fixednavbar", 'on');
                        }
                    } else {
                        $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                        $("body").removeClass('fixed-nav');

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("fixednavbar", 'off');
                        }
                    }
                });


                // 收起左侧菜单
                $('#collapsemenu').click(function () {
                    if ($('#collapsemenu').is(':checked')) {
                        $("body").addClass('mini-navbar');
                        HcAdmin.SmoothlyMenu();

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("collapse_menu", 'on');
                        }

                    } else {
                        $("body").removeClass('mini-navbar');
                        HcAdmin.SmoothlyMenu();

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("collapse_menu", 'off');
                        }
                    }
                });

                // 固定宽度
                $('#boxedlayout').click(function () {
                    if ($('#boxedlayout').is(':checked')) {
                        $("body").addClass('boxed-layout');
                        $('#fixednavbar').prop('checked', false);
                        $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                        $("body").removeClass('fixed-nav');
                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("fixednavbar", 'off');
                        }


                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("boxedlayout", 'on');
                        }
                    } else {
                        $("body").removeClass('boxed-layout');

                        if (HcAdmin.localStorageSupport()) {
                            localStorage.setItem("boxedlayout", 'off');
                        }
                    }
                });

                // 默认主题
                $('.s-skin-0').click(function () {
                    $("body").removeClass("skin-1");
                    $("body").removeClass("skin-2");
                    $("body").removeClass("skin-3");
                    return false;
                });

                // 蓝色主题
                $('.s-skin-1').click(function () {
                    $("body").removeClass("skin-2");
                    $("body").removeClass("skin-3");
                    $("body").addClass("skin-1");
                    return false;
                });

                // 黄色主题
                $('.s-skin-3').click(function () {
                    $("body").removeClass("skin-1");
                    $("body").removeClass("skin-2");
                    $("body").addClass("skin-3");
                    return false;
                });

                if (HcAdmin.localStorageSupport()) {
                    var collapse = localStorage.getItem("collapse_menu");
                    var fixednavbar = localStorage.getItem("fixednavbar");
                    var boxedlayout = localStorage.getItem("boxedlayout");

                    if (collapse == 'on') {
                        $('#collapsemenu').prop('checked', 'checked')
                    }
                    if (fixednavbar == 'on') {
                        $('#fixednavbar').prop('checked', 'checked')
                    }
                    if (boxedlayout == 'on') {
                        $('#boxedlayout').prop('checked', 'checked')
                    }
                }

                if (HcAdmin.localStorageSupport()) {

                    var collapse = localStorage.getItem("collapse_menu");
                    var fixednavbar = localStorage.getItem("fixednavbar");
                    var boxedlayout = localStorage.getItem("boxedlayout");

                    var body = $('body');

                    if (collapse == 'on') {
                        if (!body.hasClass('body-small')) {
                            body.addClass('mini-navbar');
                        }
                    }

                    if (fixednavbar == 'on') {
                        $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                        body.addClass('fixed-nav');
                    }

                    if (boxedlayout == 'on') {
                        body.addClass('boxed-layout');
                    }
                }
            });
        },
        NavToggle:function () {
            $('.navbar-minimalize').trigger('click');
        },
        SmoothlyMenu:function () {
            if (!$('body').hasClass('mini-navbar')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(500);
                    }, 100);
            } else if ($('body').hasClass('fixed-sidebar')) {
                $('#side-menu').hide();
                setTimeout(
                    function () {
                        $('#side-menu').fadeIn(500);
                    }, 300);
            } else {
                $('#side-menu').removeAttr('style');
            }
        },
        // 侧边栏高度
        fix_height:function () {
            var heightWithoutNavbar = $("body > #wrapper").height() - 61;
            $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
        },
        localStorageSupport:function () {
            //判断浏览器是否支持html5本地存储
            return (('localStorage' in window) && window['localStorage'] !== null)
        }
    };
    HcAdmin.init();
    if (HcAdmin.localStorageSupport()) {
        var collapse = localStorage.getItem("collapse_menu");
        var body = $('body');
        if (collapse == 'on') {
            if (!body.hasClass('body-small')) {
                body.addClass('mini-navbar');
            }
        }else{
            if (body.hasClass('mini-navbar')) {
                body.removeClass('mini-navbar');
            }
        }
    }else{
        if ($('body').hasClass('mini-navbar')) {
            $('body').removeClass('mini-navbar');
        }
    }
    return HcAdmin;
});











