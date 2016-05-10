// 基本框架
var biscuit={

    // 拷贝一个对象中的方法和属性给另一个对象
    extend:function(tar,source){
        for(var i in sourse){
            tar[i] = source[i];
        }
        return tar;
    }
}

// 基本模块
biscuit.extend(biscuit,{
    // 这里面放的是下面这些模块可能用到的
    each:function(){},
    map:function(){}
})

// 数据类型判断
biscuit.extend(biscuit,{
     // 数据类型
    isString:function(){},
    isNumber:function(){},
    isArray:function(){},
    isObj:function(){},
})

// 事件模块
biscuit.extend(biscuit,{
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
    // XMLHttpRequest请求事件
    request:function(){
        var request;
        if(XMLHttpRequest){
            // 标准写法
            request = new XMLHttpRequest;
        }else{
            // IE5、IE6写法
            request = new ActiveObject("Microsoft.XMLHTTP");
        }
    }
})

// 选择模块
biscuit.extend(biscuit,{
    // id选择器
    $id:function(id){
        return document.getElementById(id)
    },
    //标签选择器
    $tag:function(tag){
        return document.getElementByTagName(tag)
    },
})

// 属性内容模块
biscuit.extend(biscuit,{
    
})
