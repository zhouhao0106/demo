/**
 * Created by Administrator on 2017/4/18.
 */
$(function () {
    $(".add").click(function () {
        var V=$(".Text").val();
        var i=parseInt(V);
        i=i+1;
        $(".Text").val(i);
    })
})
$(function () {
    $(".del").click(function () {
        var V=$(".Text").val();
        var i=parseInt(V);
        i=i-1;
        if(i<1){
            i=1;
        }
        $(".Text").val(i);
    })
})
$(function () {
    $(".Menubar-21-32 a:last-of-type").click(function () {
        $(".fullscreen").show();
        $(".fullscreen1").show();
    })
    $(".fullscreen").click(function () {
        $(".fullscreen").hide();
        $(".fullscreen1").hide();
    });
    $(".f-header span").click(function () {
        $(".fullscreen").hide();
        $(".fullscreen1").hide();
    });
})
$(function () {
    $(".part-two1-2 li").click(function () {
        var indexs=$(this).index();
        $(".table-menu").hide();
        $(".table-menu").eq(indexs).show();
        $(".part-two1-2 li").css("background-color","#333333");
        $(this).css("background-color","#f47b2b");
    });
})