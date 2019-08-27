var
    inn_float_menu = $(".inn_float_menu"),
    pro_new_i_pr_infor_me_box = $(".pro_new_i_pr_infor_me_box"),
    pro_new_i_pr_infor_me_box1 = $(".pro_new_i_pr_infor_me_box1"),
    bg_chan = $(".bg_chan"),
    roated = $(".roated")




tlo_i_info = new TimelineLite({
    paused: true,
    reversed: true
})

tlo_i_info.from(inn_float_menu, 0.1, { autoAlpha: 0, ease: Power2.easeOut });
tlo_i_info.from(pro_new_i_pr_infor_me_box, 0.5, { autoAlpha: 0, ease: Power2.easeOut });
tlo_i_info.staggerFrom(pro_new_i_pr_infor_me_box1, 0.5, { y: "-=10", autoAlpha: 0, ease: Power2.easeOut }, 0.1, '-=0.5', "stagger");
tlo_i_info.to(bg_chan, 0.6, { backgroundImage: "url('./images/content/close.png')", ease: Power2.easeOut }, '-=0.6');
tlo_i_info.to(bg_chan, 0.6, { rotation: 180, ease: Power2.easeOut }, '-=0.8');

tlo_i_info.pause();
$(".pro_icon_anim_at").on("click", function() {
    if (tlo_i_info.reversed()) {
        tlo_i_info.play();
    } else {
        tlo_i_info.reverse();
    }
});