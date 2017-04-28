/**
 * Created by Administrator on 2017/4/28.
 */
/**
 * Created by Administrator on 2017/4/20.
 */
$(function() {
    $("#all").click(function() {
        all = $(this).prop("checked")
        $(".Each").each(function() {
            $(this).prop("checked", all);
        })
    })
    //删除当前行
    $(".del").each(function() {
        $(this).click(function() {
            $(this).parent().parent().remove();
        })
    })

    //全选删除
    $(".foot_del").click(function() {
        $(".Each").each(function() {
            if($(this).prop('checked')) {
                $(this).parents(".imfor").remove();
            }
        })

    })

})
