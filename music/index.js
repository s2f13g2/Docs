    
var musicList = [

{
    title : '欧美男声唱出远距离恋爱的痛苦 Standing In China',
    singer : '苹果姐',
    cover  : 'http://al.qn-echo-image-cdn.app-echo.com/c383c0c7bf25d53e7a025c22c4fee7de260902d9?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/100/q/100',
    src    : 'http://al.qn-echo-cp-cdn.app-echo.com/c2/148b2ae912c6ec2e4c517e8e244f6f0fb7c4d2d9fb463beee152f9686fbcb1797bc7cb1a.mp3?1479956162',
    lyric  : null
},
{
    title : '有暖气功能的轻盈R&B混音 How It Is (XXYYXX Remix)',
    singer : '苹果姐',
    cover  : 'http://up.qn-echo-image-cdn.app-echo.com/FqCrB1R06sm-_RrXzgPIiJqgkeUZ?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/100/q/100',
    src    : 'http://al.qn-echo-cp-cdn.app-echo.com/c2_96k/1b1a0732391368873a7adbf3f8f599181d681dd4be4b8181bfe3b9612bf506539cf87ef7.mp3?1453952956',
    lyric  : null
},
{ title:"薄荷色的夏天 Summertime Sadness",singer:"wiggler27",cover:"http://kibey-echo.b0.upaiyun.com/poster/2015/03/21/b2d148e3227b5801.png!/fwfh/100x100/unsharp/true",src:"http://ws.qn-echo-cp-cdn.app-echo.com/c2/70c4499cfef204963509c7ac0e36b778785840931b8eed220509d6b44af045d77a8a6353.mp3?1448191088",lyric:"null"},
{
    title : '清晨必备醒脑电子串烧',
    singer : '_Neptune',
    cover  : 'http://qn.qn-echo-image-cdn.app-echo.com/Fq6MDBt_fVf37jx4OJ1V2aokrz1N?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/100/q/100',
    src    : 'http://al.qn-echo-cp-cdn.app-echo.com/c2/01c033f65722126c5ecd95903f59cb60a2c01e29ddb65016fe378f69535bf224ba4592b2.mp3?1458711041',
    lyric  : null
}

];


$(function(){
    $('body').show();
    new SMusic({
        musicList : musicList,
        autoPlay  : true,  //是否自动播放
        defaultMode : 1,   //默认播放模式，随机
        callback   : function (obj) {  //返回当前播放歌曲信息
            console.log(obj);
            $(".backgrounds").css('background-image','url("'+obj.cover+'")')
        }
    });
    NProgress.start();
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 50);
    

});


