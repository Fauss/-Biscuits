// 基础框架
function Biscuit(){}
Biscuit.prototype = {
    extend:function(tar,source){
        for(var i in source){
            tar[i]=source[i];
        }
        return tar;
    }
}
var $ = new Biscuit();


// 通用模板
$.extend($,{
    
})

// 事件模块
$.extend($,{
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
    }
})

// 选择模块
$.extend($,{
        // id选择器
    $id:function(id){
        return document.getElementById(id)
    },
    //标签选择器
    $tag:function(tag){
        return document.getElementByTagName(tag)
    },
})