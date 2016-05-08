// use 原型对象封装框架（工具包）必须实例化
function Biscuit(){   
}

Biscuit.prototype = {
    // 绑定事件
    on:function(id,type,fn){
        var dom = document.getElementById(id);
        if(document.addEventListener){
            dom.addEventLister(type,fn,false)
        }else{
            if(dom.attchEvent){
                dom.attchEvent('on'+type,fn)
            }
        }
    },
    // 解除绑定
    un:function(id,type,fn){
        var dom = document.getElementById(id);
        if(dom.removeEventListener){
            dom.removeEventListener(type,fn,false)
        }else{
            if(dom.detachEvent){
               dom.detachEvent('on'+type,fn)  
            }
        }      
    },
    // 获取事件
    getEvent:function(e){
        var event;
        // if(e){
        //     event = e;
        // }else{
        //     event = window.event;
        // }
        // return event;
        // return e?e:window.event;
        return e||window.event;
    }, 

    // 获取目标元素
    getTarget(event){
        var e = getEvent(event);
        return e.target||e.srcElement;
    },
    // 阻止冒泡
    stopPropagation:function(event){
        var event = $$.getEvent(evet);
        if(event,stopPropagation){
            event.stopPropagation()
        }else{
            event.cancelBubble = true;
        }
    }
}





// 使用对象中的方法必须先实例化（如何实例化：new）
var $ = new Biscuit()
