# 前言：

`场景：左侧菜单栏，右侧内容区，可以拖拽菜单栏右侧边界控制菜单栏宽度`

# 下载 

``` js
npm i dragDiv-right
```

# 引入 

```js
//原生引入：
const {dragDiv} = require("dragDiv-right")
//vue引入:
import {dragDiv} from 'dragdiv-right'
```

# 使用

``` html
<div id="dictionary">
    <div id="tree">
        左侧元素
    </div>
    <!-- 分割线，用来拖拽 -->
    <div id="middle"></div>
    <div id="content">
      内容区
    </div>
  </div>
```

``` css
//大概是这种布局样式
#dictionary { //父元素
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
}
#middle{//拖拽div

  cursor:col-resize;

  height:100%;

  position: relative;

  width: 2px;

  border-left: 1px solid #8f949a;

}
 #tree {//左侧菜单
    width: 300px;
    height: 100%;
    overflow: auto;
    background: #fff;
}
.content{//右侧内容区
    flex: 1;
    height: 100%;
}

```

``` js
//vue使用方法：
mounted(){
    dragDiv({
        resize:'middle',//拖拽div的id
        left:'tree',//拖拽左侧菜单的id
        right:'content',//右侧内容区的id
        box:'dictionary',//父元素id
        minClientWidth:200,//左侧空间小多少像素//可以不传，默认200
        maxClientWidth:600,//左侧空间最大多少像素//可以不传，默认600
    })
}
//原生调用
window.onload=function(){
    dragDiv({
        resize:'middle',//拖拽div的id
        left:'tree',//拖拽左侧菜单的id
        right:'content',//右侧内容区的id
        box:'dictionary',//父元素id
        minClientWidth:200,//左侧空间小多少像素//可以不传，默认200
        maxClientWidth:600,//左侧空间最大多少像素//可以不传，默认600
    })
};
    //...
`这样就配置完成了`

```


# 查看效果--->  

源码 [github](https://github.com/MaLunan/dragDiv-right)

效果 [malunan的blog](https://www.zmln1021.cn)