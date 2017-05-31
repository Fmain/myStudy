/*
* @Author: Marte
* @Date:   2017-04-18 16:40:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-23 20:16:09
*/
function $(v){
    if(typeof v === 'function'){
        window.onload = v;
    }else if(typeof v === 'string'){
        return document.getElementById(v);
        /*
        if (v==='input') {
            return document.getElementsByTagName(v);
        }else{
        };*/
    }else if(typeof v === 'object'){
        return v;
    }
}

function getStyle(obj,attr){
            /*
            if (obj.currentStyle) {
                    return obj.currentStyle[attr];
                }else{
                    return getComputedStyle(obj)[attr];
                };
            */
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
            // return obj.currentStyle[attr]||getComputedStyle(obj)[attr];
}

function getFirstChild (obj) {
    return obj.firstElementChild||obj.firstChild;
}

function myTime(){
    var myTime = new Date();    //typeof object
    var str = '';

    var iYear = myTime.getFullYear();   //typeof number
    var iMonth = myTime.getMonth()+1;   //typeof number
    var iDate = myTime.getDate();   //typeof number
    var iWeek = myTime.getDay();   //typeof number
    var iHours = myTime.getHours();   //typeof number
    var iMinutes = myTime.getMinutes();   //typeof number
    var iSeconds = myTime.getSeconds();   //typeof number

    if (iWeek===0)iWeek='星期日';
    if (iWeek===1)iWeek='星期一';
    if (iWeek===2)iWeek='星期二';
    if (iWeek===3)iWeek='星期三';
    if (iWeek===4)iWeek='星期四';
    if (iWeek===5)iWeek='星期五';
    if (iWeek===6)iWeek='星期六';

    str = iYear+'年'+toTwo(iMonth)+'月'+toTwo(iDate)+'日 '+iWeek+' '+toTwo(iHours)+':'+toTwo(iMinutes)+':'+toTwo(iSeconds);


    return str;
}

function toTwo (n) {
    /*
    if (n<10) {
        return '0' + n;
    } else{
        return '' + n;
    };
     */
    return n<10?'0'+n:''+n;
}

function doMove (obj,attr,dir,target) {
    //三目运算符: a?b:c if(a){return b}else{return c};
    dir = parseInt(getStyle(obj,attr))<target ? dir : -dir;//判断dir正负,控制方向
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var speed = parseInt(getStyle(obj,attr)) + dir ;
        /*
        //判断往前跑还是往后跑
        if (speed>target&&dir>0) {
            speed = target;
        };
        if (speed<target&&dir<0) {
            speed = target;
        };
         */
        if (speed>target&&dir>0 || speed<target&&dir<0) {
            speed = target;
        };
        obj.style[attr] = speed + 'px';
        if (speed==target) {
            clearInterval(obj.timer);
        };
    },20);
}

/*
function shake ( obj,attr,endFn) {
    var pos = parseInt(getStyle(obj,attr));
    var arr = [];
    var num = 0;
    for (var i = 20; i > 0; i -= 2) {
        arr.push(i,-i);
    };
    arr.push(0);
    clearInterval(obj.shake);   //
    obj.shake = setInterval(function() {
        obj.style[attr] = pos + arr[num] + 'px';
        num++;
        if(num == arr.length){
            clearInterval(obj.shake);
            endFn&&endFn();
        }
    },20);
}
 */
//shake(对象,动作,属性);
function shake (obj,act,attr) {
    var pos = parseInt(getStyle(obj,attr));
    act?(obj[act] = shakeNA):(shakeNA());
            /*
            if (act) {
                obj[act] = shakeNA;
            }else{
                shakeNA();
            };
            */
    function shakeNA () {
        var arr = [];
        var num = 0;
        var timer = null;
        for (var i = 20; i > 0; i -=2) {
            arr.push(i,-i);
        };
        arr.push(0);

        clearInterval(timer);
        timer = setInterval(function(){
            obj.style[attr] = pos + arr[num] + 'px';
            num++;
            if (num == arr.length) {
                clearInterval(timer);
            };
        },50);
    }
};



//取得当前元素到页面顶部绝对距离的方式
function getPos(obj) {
    var pos = {left:0,top:0};

    while(obj){
        pos.left += obj.offsetLeft;
        pos.top += obj.offsetTop;

        obj = obj.offsetParent;
    }
    return pos;
}



//获取父级parent元素中的,tagName标签下的,名为'className'的元素;
function getElementsByClassName(parent,tagName,className) {
    var aEls = parent.getElementsByTagName(tagName);
    var arr = [];

    for (var i=0;i<aEls.length;i++){
//                    if (aEls[i].className == className){
//                        arr.push(aEls[i]);
//                    }
        var aClassName = aEls[i].className.split(' ');
        for(var j=0;j<aClassName.length;j++){
            if(aClassName[j] == className){
                arr.push(aEls[i]);
                break;//防止一个元素中有两个相同className
            }
        }
    }
    return arr;
}



////////////////////////////
// 添加Class
////////////////////////////
function addClass(obj,className) {
    var arrClassName = obj.className.split(' ');
    var _index = arrIndexOf(arrClassName,className);
    // alert(_index);
    if (_index == ''){   //如果要添加的Class在原来的Class中不存在或没有Class
        obj.className += ' '+className;
    }//如果要添加的Class在原来的Class中存在,不执行
}
////////////////////////////
// 移除Class
////////////////////////////
function removeClass(obj, className) {
    arrClassName = obj.className.split(' ');
    var _index = arrIndexOf(arrClassName,className);
    if (_index != ''){
        for(var i=0; i<_index.length;i++){
            arrClassName.splice(_index,1);
        }
        obj.className = arrClassName.join(' ');
    }
}
function arrIndexOf(arr, v) {
    var _index = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==v){
            _index.push(i);
        }
    }
    return _index;
}


// 给一个元素绑定事件的处理函数
function bind(obj,evname,fn) {
    if (obj.addEventListener){
        obj.addEventListener(evname,fn,false);
    }else{
        obj.attachEvent('on'+evname,function () {
            fn.call(obj);
        })
    }
}