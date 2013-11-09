<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-cn" lang="zh-cn" style="overflow-x:hidden;overflow:hidden">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>西安文理学院 墨颀-多媒体文学</title>
	<meta name="keywords" content="" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
    <link  href="http://fonts.googleapis.com/css?family=Kenia:regular" rel="stylesheet" type="text/css" >
	<link rel="stylesheet" type="text/css" href="styles/main.css" />
	<link rel="shortcut icon" href="images/favicon.ico">
	<style type="text/css">
		@font-face{
			font-family:flower; 
            font-weight: bold; 
            src: url(fonts/ornaments.ttf); 
            format('truetype');
		}
		#stage {
			top: 0px;
			left: 0px;
			z-index:auto;
		}
		.stage {
		  position: absolute;
		  top: 0px;
		  left: 0px;
		  width: 100%;
		  min-width: 900px;
		  height: 100%;
		  overflow: hidden;
		}
		#bg {
		  background:#FF9 url(images/sky1.png) 0 0 repeat-x;
		  z-index:12;
		}
		#hill2 {
		  background: transparent url(images/hill2.png) 0 bottom repeat-x;
		  z-index:998;
		}
		#clouds {
		  background: transparent url(images/cloud.png) 0px 40px repeat-x;
		  z-index:1100;
		}
		#hill1 {
		  background: transparent url(images/hill-with-windmill.png) 0 bottom repeat-x;
		  z-index:1002;
		}
		#mm{
		background: transparent url(images/mm.gif)right -20% no-repeat;
		opacity:0.8;
		z-index:999;
		}
		body{
		  _background-image:url(images/background.jpg)!important;
		}
	</style>
	
	
</head>
<body>
<embed src="media/gaoshan.mid" autostart=true loop=true hidden=true></embed>
<div id="container">
	<div id="stage" class="stage">
		<div id="tap" class="stage"></div>
		<div id="bg" class="stage"></div>
        <div id="hill2" class="stage"></div>
		<div id="hill1" class="stage"></div>
		<div id="clouds" class="stage"></div>
        <div id="mm" class="stage"></div>
		<div id="logo">Mokcy</div>
	</div>
    	<div id="debugarea"></div>
</div>
<div id="cloud1" class="clouds">
    <div id="clouds-small"></div>
</div>
    <div id="header">
          <ul id="menu">
              <li><a href="#首页" class="btn">首页</a></li>
              <li><a href="#部门组成" class="btn">部门组成</a></li>
              <li><a href="#优秀作品" class="btn">优秀作品</a></li>
              <li><a href="#活动新闻" class="btn">活动新闻</a></li>
        </ul>
    </div>
    
<div id="wrapper">
      <ul id="mask">
          <li id="首页" class="box">
          <a name="box1"></a>
          <h1>简介</h1>
          <div class="content">
                 <div class="inner">
                   <div id="mokfont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;墨颀&nbsp;多媒体-文学，
                   源于一个单纯而美好的梦想,这世间，纷纷扰扰，每天都会有各种喜怒哀乐，每天都会有各种想法冲
                   动，困顿时，我们会抬头看看天，因为很庆幸，还有阳光的非常照顾。<br />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时候，看着风吹向的某个角落，会希望它可以带走我们的祝福:倘若朋友
你不会忘记我，那么偶尔的短信我也会开心不已：倘若梦想为努力的人存在，那么再多的疲惫都是甘之如饴。<br />
百态人生，我们每天穿越人海，熟记键盘的每个字母，却喊孤独；漫步街巷，吃过每家饭店，却仍叫嚣空虚。<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可是时光不待，流水不再，用无谓换来的欢娱，只会滋生成漫无边际的黑暗。<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而亲爱的人们，后悔不属于年少，绝望不属于青春。<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停下脚步，描绘未来的蓝图；卸下情绪，共创梦想的天堂<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;墨颀，因梦想而生。<br />
                   </div>
               </div>
          </div>
          </li><!-- end box1 -->
          <li id="部门组成" class="box">
              <a name="box2"></a>
              <h1>部门组成</h1>
              <div class="content"><div class="inner">
              <div id="usual1" class="usual">
              <ul>
                 <li><a href="#mktab">开发部</a></li> 
                 <li><a href="#mktab2">组织部</a></li>
                 <li><a href="#mktab3">技术部</a></li>
                 <li><a href="#mktab4">创作部</a></li>
                 <li><a href="#mktab5">外联部</a></li>
              </ul> 
                 <div id="mktab">主要负责网络开发及相关事务</div>
                 <div id="mktab2">负责日常工作及事务等</div>
                 <div id="mktab3">维护及相关制作</div>
                 <div id="mktab4">文学艺术等创作相关</div>
                 <div id="mktab5">负责对外事务等事项</div>
             </div>	
             </div>
         </div>
          </li><!-- end box2 -->
          <li id="优秀作品" class="box">
              <a name="box3"></a>
              <h1>优秀作品</h1>
              <div class="content"><div class="inner">
               <a href="#" title="Vitrual Wiki World">墨颀虚拟文学世界wiki</a>
              <br />
              <a href="xumap/xumaps.htm" id="xumap" title="xumap">文理地图</a>
    </div></div>
          </li><!-- end box3 -->
          <li id="活动新闻" class="box">
              <a  name="box4"></a>
              <h1>活动新闻</h1>
              <div class="content"><div class="inner">
              <a id="act" href="act.html" title="">预览</a>
              <a href="ppt/index.html">首届墨颀PPT大赛</a>
              </div>
              </div>
          </li><!-- end box4 -->
      </ul><!-- end mask -->
  </div><!-- end wrapper -->
 </div>
<div id="footer" >
   <menu>  
      <fonter>© Copyright 2011  Mokcy In
      <a href="http://xawl.org" target="_blank">西安文理学院</a>
        <br/>Powered by
      <a href="http://mokcy.com" target="_blank">Mokcy.com</a>
         &
      <a href="http://mokcy.com/admin" target="_blank"><fgx>A</fgx></a>
   </fonter>& 
      <a href="http://www.miibeian.gov.cn" target="_blank"><mokfont>陕ICP备11000677号</mokfont></a>
    <img src="images/gs.gif">
    </menu>
</div>
 
<script src="scripts/jquery.min.js" type="text/javascript"></script>
<script src="scripts/jquery.scrollTo.min.js" type="text/javascript"></script>
<script type="text/javascript">    //页面切换
    $(document).ready(function () {
        $('a.link').click(function () {
            $('#wrapper').scrollTo($(this).attr('href'), 800);
            setPosition($(this).attr('href'), '#cloud1', '0px', '400px', '800px', '1200px')
            setPosition($(this).attr('href'), '#cloud2', '0px', '800px', '1600px', '2400px')
            $('a.link').removeClass('selected');
            $(this).addClass('selected');
            return false;
        });
    });
    function setPosition(check, div, p1, p2, p3, p4) {
        if (check === '#box1') {
            $(div).scrollTo(p1, 800);
        }
        else if (check === '#box2') {
            $(div).scrollTo(p2, 800);
        }
        else if (check === '#box3') {
            $(div).scrollTo(p3, 800);
        }
        else {
            $(div).scrollTo(p4, 800);
        }
    };
</script>
<script type="text/javascript" src="scripts/jquery.lazyload.js" /></script>
<script type="text/javascript" charset="utf-8">    //LazyLoad延时加载
    $(function () {
        $("img").lazyload({
            placeholder: "images/grey.gif",
            effect: "fadeIn"
        });
    });
</script>
<script type="text/javascript" src="fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#xumap").fancybox({
            'width': '80%',
            'height': '95%',
            'autoScale': true,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'type': 'iframe'
        });
        $("#act").fancybox({
            'width': '80%',
            'height': '95%',
            'autoScale': true,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'type': 'iframe'
        });
    });
</script>
<script type="text/javascript" src="scripts/jquery.idTabs.min.js"></script>
<script type="text/javascript">
    $("#usual1 ul").idTabs();
</script>
<script src="scripts/jsized.snow.min.js" type="text/javascript"></script>    
<script type="text/javascript"><!--雪花。。-->
   createSnow('', 80);
</script>
<script src="scripts/jquery.spritely-0.3b.js" type="text/javascript"></script>
<script type="text/javascript">    //背景滑动效果
    (function ($) {
        $(document).ready(function () {

            $('#logo').click(function () {
                document.location.href = 'http://www.mokcy.com/';
            });

            var direction = 'left';

            // The bird should be locked to #hill2
            // and scroll across the screen.
            $('#bird')
					.sprite({ fps: 9, no_of_frames: 3 })
					.lockTo('#hill2', {
					    'left': 359,
					    'top': -60,
					    'bg_img_width': $(document).width()
					})
					.spState(2);

            $('#clouds').pan({ fps: 30, speed: 0.7, dir: direction, depth: 10 });
            $('#hill2').pan({ fps: 30, speed: 2, dir: direction, depth: 30 });
            $('#hill1').pan({ fps: 30, speed: 3, dir: direction, depth: 70 });
            $('#hill1, #hill2, #clouds').spRelSpeed(8);

        });
    })(jQuery);
	
	</script>
</body>
</html>



