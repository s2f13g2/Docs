    
var musicList = [



{ title:"薄荷色的夏天 Summertime Sadness",singer:"wiggler27",cover:"http://kibey-echo.b0.upaiyun.com/poster/2015/03/21/b2d148e3227b5801.png!/fwfh/100x100/unsharp/true",src:"http://ws.qn-echo-cp-cdn.app-echo.com/c2/70c4499cfef204963509c7ac0e36b778785840931b8eed220509d6b44af045d77a8a6353.mp3?1448191088",lyric:"null"},
{
    title : '贝加尔湖畔',
    singer : '李建',
    cover  : '',
    src    : 'music/song/李健-贝加尔湖畔.mp3',
    lyric  : null
}

];


$(function(){
    $('body').show();
    new SMusic({
        musicList : musicList,
        autoPlay  : false,  //是否自动播放
        defaultMode : 1,   //默认播放模式，随机
        callback   : function (obj) {  //返回当前播放歌曲信息
            console.log(obj);
            $(".backgrounds").css('background-image','url("'+obj.cover+'")')
        }
    });
    NProgress.start();
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 50);
    

});


