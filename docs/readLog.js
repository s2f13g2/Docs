//一次键盘位移 40
var lastIndex = 0;
var numbers = 0;
var maxNmb = 5;
var isFocus = true;
var statistics = new Object();
statistics.logs = [];
var refreshTime = function() {
  statistics = JSON.parse(localStorage.statistics);
  var allTime = 0;
  for (var i = 0; i < statistics.logs.length; i++) {
    var log = statistics.logs[i];
    if (log.name == getLocalName()) {
      allTime += 5;
    }
  };
  document.getElementById("readTimeSpan").innerHTML = "本章知识已学习 " + allTime + " 秒 ";
}
var loadTime = function() {
  statistics = JSON.parse(localStorage.statistics);
  var allTime = 0;
  for (var i = 0; i < statistics.logs.length; i++) {
    var log = statistics.logs[i];
    if (log.name == getLocalName()) {
      allTime += 5;
    }
  };
  var box = document.createElement("div");
  var span = document.createElement('span'); //1、创建元素
  span.id = "readTimeSpan";
  box.className = "readBox";
  span.innerHTML = "本章知识已学习 " + allTime + " 秒 ";
  var container = getElementByAttr("A", "href", getLocalName());
  // console.log(container);
  // var container = document.getElementsByClassName("active")[0];
  for (var i = 0; i < container.childNodes.length; i++) {
    if (container.childNodes[i].tagName == "A") {

    } else if (container.childNodes[i].tagName == "UL") {

    } else {
      container.removeChild(container.childNodes[i]);
    }

  }
  var svg =
    '<svg t="1520918640235" class="icon" style="width: 2em; height: 2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="884"><path d="M272.91 503.22a103.74 103.74 0 0 1-0.32-108.47h-0.4a63.27 63.27 0 0 0-38.27 113.69l41.59 5.62q-1.42-5.39-2.6-10.84zM751.09 503.22q-1.18 5.45-2.61 10.83l41.59-5.62a63.27 63.27 0 0 0-38.27-113.69h-0.4a103.74 103.74 0 0 1-0.32 108.47zM361.37 344.79a103.9 103.9 0 0 1 59.74 188.93L512 546l90.89-12.28a103.9 103.9 0 1 1 146.53-142.1 244.79 244.79 0 0 0-474.84 0 103.92 103.92 0 0 1 86.79-46.83z" fill="#FFD4C7" p-id="885" data-spm-anchor-id="a313x.7781069.0.i0"></path><path d="M275.51 514.05l5.71 0.77a104.48 104.48 0 0 1-8.32-11.61q1.19 5.46 2.61 10.84zM742.78 514.82l5.71-0.77q1.42-5.38 2.61-10.83a104.48 104.48 0 0 1-8.32 11.6z" fill="#FFD4C7" p-id="886"></path><path d="M272.91 503.22a104.48 104.48 0 0 0 8.32 11.61l139.89 18.9a103.9 103.9 0 1 0-146.54-142.11c-0.68 1-1.35 2.07-2 3.13a103.74 103.74 0 0 0 0.32 108.47zM662.63 344.79a103.9 103.9 0 0 0-59.74 188.93l139.89-18.9a104.48 104.48 0 0 0 8.32-11.61 103.74 103.74 0 0 0 0.32-108.47c-0.65-1.06-1.31-2.1-2-3.13a103.92 103.92 0 0 0-86.79-46.82z" fill="#AEF0FF" p-id="887"></path><path d="M790.08 508.43l-41.59 5.62-5.71 0.77-139.89 18.91L512 546.01l-90.89-12.28-139.89-18.91-5.71-0.77-41.59-5.62-75.58-10.21V898.1l352.67 47.79 354.65-47.8V498.22l-75.58 10.21z" fill="#EF6A6A" p-id="888"></path><path d="M868.77 485.76a10 10 0 0 0-1.35 0.09l-46.88 6.34a76.3 76.3 0 0 0-60.2-109 256.11 256.11 0 0 0-24.79-59.37h1.64a12.07 12.07 0 0 0 10.45-18.1A272.19 272.19 0 0 0 586 179.79l20.76-22.14a12.07 12.07 0 0 0-1.47-17.83l-59.4-45.49a12.07 12.07 0 0 0-18 4l-21.92 42.23-35.51-70a12.07 12.07 0 0 0-16.11-5.35l-90 44.55a12.07 12.07 0 0 0-2.4 20.06l64 53.61a273.61 273.61 0 0 0-149.51 122 12.07 12.07 0 0 0 10.44 18.11h1.77a256.11 256.11 0 0 0-24.93 59.62 76.26 76.26 0 0 0-60.18 108.94l-46.89-6.34a10 10 0 0 0-1.35-0.09 9.91 9.91 0 0 0-9.89 9.91v406.21a9.91 9.91 0 0 0 8.58 9.82L511 960l359.06-48.39a9.91 9.91 0 0 0 8.59-9.82V495.68a9.91 9.91 0 0 0-9.88-9.92zM802.12 459a50.15 50.15 0 0 1-17.4 38l-16.13 2.18a117.21 117.21 0 0 0 5.41-85.29A50.35 50.35 0 0 1 802.12 459z m-48.56-9.32a90.43 90.43 0 0 1-17.77 53.92L606.4 521.13a90.91 90.91 0 1 1 147.16-71.41z m-179.93 75.88L512 533.89l-61.65-8.33a116.41 116.41 0 0 0 27.23-62.83h68.83a116.44 116.44 0 0 0 27.22 62.83z m-254.5-201.9l255.05 0.12 13.46-56.69 15.62 56.71h101.71a230.84 230.84 0 0 1 13.56 23.2 117 117 0 0 0-172.11 89.73h-68.84A117 117 0 0 0 305.47 347a230.75 230.75 0 0 1 13.67-23.35z m42.24 35.13a90.89 90.89 0 0 1 56.22 162.34L288.2 503.64a90.88 90.88 0 0 1 73.17-144.86zM221.88 459A50.33 50.33 0 0 1 250 413.91a117.21 117.21 0 0 0 5.38 85.3L239.3 497a50.13 50.13 0 0 1-17.42-38z m630.78 428.72L511 933.76l-339.68-46V514.09l337.18 45.56 3.48 0.47 3.48-0.47 337.18-45.56z" fill="#512C56" p-id="889"></path><path d="M500.58 619.42v254.17a13 13 0 0 0 26 0V619.42a13 13 0 0 0-26 0z" fill="#512C56" p-id="890"></path></svg>';
  box.innerHTML = svg;
  box.appendChild(span);
  container.insertBefore(box, container.children[1]);

  setInterval(function() {
    var boxx = document.getElementsByClassName("readBox")[0];
    boxx.className = "readBox show";
  }, 100);

  // container.appendChild(box);
}

var log = function() {

  var nowIndex = document.documentElement.scrollTop;
  if (isFocus) { //如果焦点不在本页面不统计信息。
    if ((lastIndex + 100) > nowIndex && (lastIndex - 100) < nowIndex) {
      //前后浮动各100

      if (maxNmb == (numbers + 1)) {
        numbers = 0;

        var ss = localStorage.statistics;
        if (ss != undefined && ss != "") {
          var log = new Object();
          log.name = getLocalName();
          log.index = nowIndex;
          log.readDate = new Date();

          statistics.logs.push(log);
        } else {
          var log = new Object();
          log.name = getLocalName();
          log.index = nowIndex;
          log.readDate = new Date();
          statistics.logs.push(log);
        }
        var str = JSON.stringify(statistics);
        localStorage.statistics = str;

        // console.log(nowIndex);
        statistics = localStorage.statistics;
        refreshTime();
      } else {
        numbers++;
        lastIndex = nowIndex;
      }
    } else {
      numbers = 0;
      lastIndex = nowIndex;
    }
  }
}
setInterval("log()", 1000);
hashChange();
//url变化监听器
if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
  // 浏览器支持onhashchange事件
  window.onhashchange = hashChange; // TODO，对应新的hash执行的操作函数
} else {
  // 不支持则用定时器检测的办法
  setInterval(function() {
    // 检测hash值或其中某一段是否更改的函数， 在低版本的iE浏览器中通过window.location.hash取出的指和其它的浏览器不同，要注意
    var ischanged = isHashChanged();
    if (ischanged) {
      hashChange(); // TODO，对应新的hash执行的操作函数
    }
  }, 150);
}

window.onblur = function() {
  isFocus = false;
};
window.onfocus = function() {
  isFocus = true;
};

function getLocalName() {
  var hash = window.location.hash;
  var result = hash.split("?id=");
  return result[0];

}

function getElementByAttr(tag, attr, value) {
  var aElements = document.getElementsByTagName(tag);
  var aEle = [];
  for (var i = 0; i < aElements.length; i++) {
    var st = decodeURI(value);
    // console.log(st);
    // console.log("attrr:"+aElements[i].getAttribute(attr));
    // console.log("value:"+st);
    // console.log(aElements[i].getAttribute(attr)==st);
    if (aElements[i].getAttribute(attr) == st)
      aEle.push(aElements[i]);
  }
  // console.log(aEle);
  return aEle[0].parentNode;
}

//监听触发操作
function hashChange() {
  setTimeout("loadTime()", 1000);
}
