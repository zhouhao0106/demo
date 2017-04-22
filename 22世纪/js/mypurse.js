/**
 * Created by Administrator on 2017/4/22.
 */
$(function () {
    $(".mypurse-part1-22 li").click(function () {
        var indexs=$(this).index();
        $(".mypurse-part1-22 li").css("border-bottom","none");
        $(this).css("border-bottom","2px solid red");
        $(".wait-pay").hide();
        $(".wait-pay1").hide();
        $(".wait-pay1").eq(indexs).show();
    });
    $(".mypurse-part1-21").click(function () {
        $(".mypurse-part1-22 li").css("border-bottom","none");
        $(".mypurse-part1-22 li:nth-child(1)").css("border-bottom","2px solid red");
        $(".wait-pay1").hide();
        $(".wait-pay").show();
    });
})