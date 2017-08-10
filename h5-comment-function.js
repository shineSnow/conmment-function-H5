/**
 * h5页面开发常用工具库基于zepto.
 * 功能函数：
 */
(function (window, $, undefined) {
    /**
     * [setCookie 设置cookie]
     * @param {[type]} name [名字]
     * @param {[type]} value [值]
     * @param {[type]} time [持续时间]
     * d是天数，30天则：d30
     * setCookie("name","hayden","s20")
     */
    var setCookie = function (name, value, time) {
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        window.document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    var getsec = function (str) {
        console.log(str);
        var len = str.length;
        var str1 = str.substring(1, len) * 1;
        var str2 = str.substring((len - 1), len);
        if (str2 == "s") {
            return str1 * 1000;
        } else if (str2 == "h") {
            return str1 * 60 * 60 * 1000;
        } else if (str2 == "d") {
            return str1 * 24 * 60 * 60 * 1000;
        }
    }
    /**
     * [getCookie 读取cookie]
     * @param  {[type]} name [description]
     */
    var getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    var delCookie = function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            window.document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

    var getQueryStr = function (name) {
        var reg = new RegExp("(^|$)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    /**
     * 终端识别
     *
     * */
    var app = function () {
        var u = navigator.userAgent;
        return {
            is_trident: u.indexOf('Trident') > -1, /*IE内核*/
            is_presto: u.indexOf('Presto') > -1, /*opera内核*/
            is_webKit: u.indexOf('AppleWebKit') > -1, /*苹果、谷歌内核*/
            is_gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, /*火狐内核*/
            is_mobile: !!u.match(/AppleWebKit.*Mobile.*/), /*是否为移动终端*/
            is_ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /*ios终端*/
            is_android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /*android终端或者uc浏览器*/
            is_iPhone: u.indexOf('iPhone') > -1, /*是否为iPhone或者QQHD浏览器*/
            is_iPad: u.indexOf('iPad') > -1, /*是否iPad*/
            is_webApp: u.indexOf('Safari') == -1, /*是否web应该程序，没有头部与底部*/
            is_weixin: u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
        }
    }()
    /*数据类型检测*/
    var gettype = Object.prototype.toString;
    var dataType = {
        isObj: function (o) {
            return gettype.call(o) == "[object Object]";
        },

        isArr: function (o) {
            return gettype.call(o) == "[object Array]";
        },

        isNULL: function (o) {
            return gettype.call(o) == "[object Null]";
        }

    }


    window.we = {
        setCookie: setCookie,
        getCookie: getCookie,
        delCookie: delCookie,
        getQueryStr: getQueryStr,
        app: app,
        dataType:dataType
    }

})(window, Zepto)