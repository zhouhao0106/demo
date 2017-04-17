/**
 * Created by Administrator on 2017/4/9.
 */
$(function(){
    $("#form1").submit(function(){
        return validate();
    });
})

function validate(){
    if(!people()){
        return false;
    }else if(!phone()){
        return false;
    }else if(!num()){
        return false;
    }else if(!detail()){
        return false;
    }else if(!date()){
        return false;
    }
    else{
        return true;
    }

}
var people=	function(){
    var n= $("#people").val();
    if(n==""){
        $("#people").css({"border-top":"1px solid red","border-bottom":"1px solid red"});
        return false;
    } else{
        $("#people").css({"border-top":"1px solid #b3b3b3","border-bottom":"none"});
        return true;
    }
}

var phone=function(){
    var p1=$("#phone").val();
    var regphone=/^\d{11}$/;
    if(regphone.test(p1)==false)
    {
        $("#phone").css({"border-top":"1px solid red","border-bottom":"1px solid red"});
        return false;
    }else{
        $("#phone").css({"border-top":"1px solid #b3b3b3","border-bottom":"none"});
        return true;
    }
}

var num=function(){
    var nu=$("#num").val();
    if(nu==''){
        $("#num").css({"border-top":"1px solid red","border-bottom":"1px solid red"});
        return false;
    }
    else{
        $("#num").css({"border-top":"1px solid #b3b3b3","border-bottom":"none"});
        return true;
    }
}
var detail=function(){
    var de=$("#detail").val();
    if(de=='')
    {
        $("#detail").css({"border-top":"1px solid red","border-bottom":"1px solid red"});
        return false;
    }
    else
    {
        $("#detail").css({"border-top":"1px solid #b3b3b3","border-bottom":"none"});
        return true;
    }
}
var date=function () {
    var da=$("#date").val();
    var d=/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
    if(d.test(da)==false){
        $("#date").css({"border-top":"1px solid red","border-bottom":"1px solid red"});
        return false;
    }else{
        $("#date").css({"border-top":"1px solid #b3b3b3","border-bottom":"none"});
        return true;
    }
}
