function on(id,type,fn){
	var dom = document.getElementById(id);
	if (document.addEventListener) {
		//标准组织的写法
		dom.addEventListener(type,fn,false)
	}else{
		//如果是ie浏览器
		if(document.attachEvent){
			dom.attachEvent('on'+type,fn)
		}
	}
}
