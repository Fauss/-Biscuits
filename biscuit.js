// 基础框架
//定义一个对象，名字就是 YC
var YC = function(){}
YC.prototype = {
    extend:function(tar,source){
        for(var i in source){
            tar[i]=source[i];
        }
        return tar;
    }
}
// 在框架中实例化，这样外面使用的时候就不用实例化
YC = new YC();


// 通用模板
YC.extend(YC,{
    
})

// 事件模块
YC.extend(YC,{
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
 

})

// 选择模块
YC.extend(YC,{
        // id选择器
    $id:function(id){
        return document.getElementById(id)
    },
    //标签选择器
    $tag:function(tag){
        return document.getElementByTagName(tag)
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
    }
})