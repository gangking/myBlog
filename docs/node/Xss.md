# 前端防止xss

[参考1](https://www.cnblogs.com/meituantech/p/9718677.html)

## vue

### 1、引入XSS工具

1.在终端引入xss,命令：

```
npm install xss --save
```

 2.在vue的页面进行引入

```
import xss from 'xss'
```

3.定义一个变量进行测试

首先测试一个没有进行防止xss攻击的测试

```
<p v-html="test"></p>

export default {
  data () {
    return {
      test: `<a onclick='alert("xss攻击")'>链接</a>`
    }
}
```

结果，js事件直接被翻译了

 因此应该杜绝这些情况，解决方法如下

4、进行拦截

```
<p v-html="$xss(test)"></p>

import xss from 'xss'
export default {
  data () {
    return {
      test: `<a onclick='alert("xss攻击")'>链接</a>`
    }
}

Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
```

此时a标签会保留，但是onclick事件被拦截了



### 2、直接不用v-html指令即可



## React

默认情况下，React DOM 在重新渲染页面时将所有进行转码，官方宣称在 React 应用中

确保不会注入任何没显式编写的数据，所有的数据在页面渲染之前都会被转换成字符串，这防止 XSS 进攻



