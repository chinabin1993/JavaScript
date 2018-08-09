var EventUtil = {
    // 事件处理函数，使用DOM2，IE，两者都不满足可以使用DOM0事件
    addHandler:function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type, handler);
        }else{
            element["on" + type] = handler;
        }
    },
    // 在IE中，event是一个全局对象的属性
    getEvent:function (event) {
      return event ? event : window.event;  
    },
    // 在DOM标准时间中，当前元素是target属性，IE中是scrElement属性
    getTarget:function (event) {
      return event.target || event.srcElement;  
    },
    // 阻止默认事件
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    // 移除事件处理程序
    removeHandler:function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){
            element.detachEvent(type, handler);
        }else{
            element["on" + type] = null;
        }
    },
    // 阻止冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },
    // 取得字符编码
    getCharcode:function(event){
        if(typeof event.charCode === 'number'){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    }
}