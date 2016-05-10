# -Biscuits
    1. biscuit01.js 原型对象封装
    2. biscuit02.js json封装
    3. biscuit03.js 模块化extend封装
    4. biscuit.js 最终版
    
    
 注：封装方法放在原型上，属性放在对象上；共有的东西放在原型上，
 
 知识点：
    1. extend 方法
     // 拷贝一个对象中的方法和属性给另一个对象
        ****
            extend:function(tar,source){
                for(var i in sourse){
                    tar[i] = source[i];
                }
                return tar;
            }
        ****
    2. event对象
    3. 精简代码
        + 三元表达式
            e?e:window.event
        + 短路表达式
            e||window.event （可以简化if else语句）
        + 解析： 
            - ||:如果左边是true就返回左边 否则就返回右边
            - &&：如果左边是true就返回右边 否则返回左边  （两个正好相反）
            