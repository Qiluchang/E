$(function(){
	var InterValObj; //timer变量，控制时间
	var count = 60; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	//手机号
	$("#loginmobile").focus(function(){
		if(this.value=="手机号或胎大王账号登入"){this.value="";}
	});
	$("#loginmobile").blur(function(){
		if(this.value==""){this.style.color="#ccc";this.value="手机号或胎大王账号登入";}
	});
	$("#loginmobile").keydown(function(){
		this.style.color="#fff";
	});
	//密码
	$("#loginkeyword").focus(function(){
		if(this.value=="请输入密码"){this.value="";}
	});
	$("#loginkeyword").blur(function(){
		if(this.value==""){this.style.color="#ccc";this.value="请输入密码";}
	});
	$("#loginkeyword").keydown(function(){
		this.style.color="#fff";
	});
	
	// 表单验证、记住用户名
	$("#loginForm").validate({
        rules: {
            loginmobile: {
                required: true
            },
            loginkeyword: {
                required: true,
				rangelength:[4,12]
            }
        },
        messages: {
            loginmobile: {
				required:"手机号不能为空"
			},
            loginkeyword: {
                required: "请填写密码",
				rangelength:"请填写正确的密码"
            }
        }
    });
	
	
	//手机号
	$("#registermobile").focus(function(){
		if(this.value=="输入手机号码"){this.value="";}
	});
	$("#registermobile").blur(function(){
		if(this.value==""){this.style.color="#8f8f8f";this.value="输入手机号码";}
	});
	$("#registermobile").keydown(function(){
		this.style.color="#000";
	});
	//密码
	$("#registerkeyword").focus(function(){
		if(this.value==""){$(".keywordtip").css("display","none");}
	});
	$(".keywordtip").click(function(){
		if($("#registerkeyword").val()==""){$(".keywordtip").css("display","none");$("#registerkeyword").focus();}
	});
	$("#registerkeyword").blur(function(){
		if(this.value==""){$(".keywordtip").css("display","block");}
	});
	$("#registerkeyword").keydown(function(){
		this.style.color="#000";
	});
	$("#registericon1").click(function(){
		var a=$("#registermobile")[0].value;
		if(a!=""&&a!="输入手机号码"){$("#registermobile").val("");$("#registermobile").focus();}
	});
	/*$("#registericon2").click(function(){
		$(".keywordtip").css("display","none");
		$("#registerkeyword").focus();
		$("#registerkeyword").attr("type","text");
	});*/
	//验证码
	$("#registercaptcha").blur(function(){
		if(this.value==""){this.style.color="#8f8f8f";}
	});
	$("#registercaptcha").keydown(function(){
		this.style.color="#000";
	});
	//客服热线 遮罩
	//遮罩
	$("#callservice").click(function(){
		ShowGuide();
	});
	function ShowGuide(){
		$(".guide_cover").css("height",$(document).height()+"px").fadeIn();
		if($(window).height()<$(".callservice").height()){
			$(".callservice").css({"margin-top":-$(window).height()/2+"px"});
		}
		$(".callservice").fadeIn();
	}
	function HideGuide(){
			$(".guide_cover").fadeOut();
			$(".callservice").fadeOut();
	}
	$(".guide_cover,#callcancel,#callconfirm").click(function(){
			HideGuide();
	});
});