// use json对象封装框架(if you use 字面量形式来封装框架，就不需要实例化)

var biscuit={
    // id选择器
    $id:function(id){
        return document.getElementById(id)
    },
    //标签选择器
    $tag:function(tag){
        return document.getElementByTagName(tag)
    },
    // 数据类型
    isString:function(){},
    isNumber:function(){},
    isArray:function(){},
    isObj:function(){},
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
    // // 拷贝一个对象中的方法和属性给另一个对象
    // extend:function(tar,source){
    //     for(var i in sourse){
    //         tar[i] = source[i];
    //     }
    //     return tar;
    // }
}
