function isWeiXin() { //判断是否是微信
  var ua: any = window.navigator.userAgent.toLowerCase();
  console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

function getParams(url: any) { //获取url参数
  var index = url.indexOf("?") + 1;
  var params = url.substr(index);
  //使用&切割字符串，返回一个数组
  var arr = params.split("&");
  var o: any = {};
  for (var i = 0; i < arr.length; i++) {
    var tmpArr = arr[i].split("=");
    var key = tmpArr[0];
    var value = tmpArr[1];
    o[key] = value;
  }
  return o;
}


function getCodeState(href: any) { // 获取code和state参数
  const urlArr = href.split('?')
  const leftUrl = urlArr[0]
  const rightUrlArr = urlArr[1].split('#/')
  const queryObj: any = {}
  // 获取code和state参数
  rightUrlArr[0]
    .split('&')
    .map((item: any) => {
      const splitStr = item.split('=')
      return {
        key: splitStr[0],
        value: splitStr[1],
      }
    })
    .forEach((item: any) => {
      queryObj[item.key] = item.value
    })
  return { queryObj, leftUrl, rightUrlArr };
}


export {
  isWeiXin,
  getParams,
  getCodeState
}