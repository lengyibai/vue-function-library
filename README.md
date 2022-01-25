<img src="http://lengyibai.gitee.io/img-bed/img/lyb.png" style="width:200px;margin:0 auto;border-radius:50%" />

<p style="font-size:50px;font-weight:bold;width:100%;text-align:center;color:#fff;text-shadow:0 0 15px">冷弋白</p>
<p style="text-align:center;color:#aaa;position: relative;top:-10px;text-shadow:0 0 10px"><a href='https://wpa.qq.com/msgrd?v=3&uin=1329670984&site=qq&menu=yes' style='text-decoration: none;
'>点击此处联系我</a></p>

# 介绍

## 01-锚点路由

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/01

**内置两种方案**

> 默认方案为方案2，推荐方案2
>
> 方案1：滚动到指定位置，按钮样式跟随改变，地址栏也会跟随改变，点击按钮也会滚动到指定位置，但修改地址栏不会跳转，修改地址栏后需要手动刷新页面才会跳转
>
> 方案2：除了滚动不会修改地址栏，需要点击按钮才会修改地址栏，其他功能与方案一一致，因为修改地址栏会触发实时监听地址栏，出现滚动错误，如果想自动修改地址栏，可以采用上面的方案。`Vue`官网就是采用的此方案

## 02-better-scroll吸顶

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/02

**详细介绍**

> 通过鼠标按下滑动页面才会滚动，不能使用滚轮滚动
>
> 已将`better-scroll`封装成了一个组件
>
> [better-scroll](https://better-scroll.github.io/docs/zh-CN)盒子吸顶的实现方法
>
> PS：如果页面无法滚动或出现其他问题，请刷新页面

## 03-better-scroll(多栏)

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/03

**详细介绍**

> 通过鼠标按下滑动页面才会滚动，不能使用滚轮滚动
>
> 已将`better-scroll`封装成了一个组件
>
> `better-scroll`在多tab栏的使用方法
>
> 能力有限无法实现手指滑动进行切换，只能通过点击tab栏进行切换，并带有切换动画
>
> PS：如果页面无法滚动或出现其他问题，请刷新页面

## 04-单多选

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/04

**详细介绍**

> 单选单tab栏、单选多tab栏、多选单tab栏、多选多tab栏
>
> 已将这四种选择方式封装成了四个组件进行展示，方便参考实现过程
>
> 项目内置无动画版

## 05-上拉加载下拉刷新单栏

**演示地址**

> 存在调用第三方接口，无法直接预览，只能在项目运行后查看
>
> 注：只能通过`F12`，切换成移动端进行按下滑动页面才会滚动，此组件不支持`PC`端
>
> PS：如果页面无法滚动或出现其他问题，请刷新页面

**详细介绍**

> 用于移动端的分页加载
>
> 第一次请求网络错误会显示网络错误的状态图，请求数据为空也会显示空状态图
>
> 下拉刷新：支持通过后端返回的状态显示刷新成功及刷新失败，刷新后，数据将回到第一页
>
> 上拉加载：支持通过后端返回的状态显示暂无更多和加载失败
>
> 更多功能参考项目代码

## 06-上拉加载下拉刷新多栏

> 与单栏的功能一样，并且多栏刷新和加载互不影响

## 07-过渡动画

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/07

**详细介绍**

> 使用了自己写的元素出场功能、动画库
>
> 参考：https://gitee.com/lengyibai/scroll-animate
>
> 点击删除的动画使用的是`Vue`的动画标签

## 08-购物车

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/08

**详细介绍**

> 主要是作为未来做项目的参考

## 09-路由侧边栏与面包屑

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/08

**详细介绍**

> 通过路由来结合`Element UI`的侧边栏组件来动态生成侧边栏
>
> 附带面包屑，面包屑支持点击
>
> 注：路由基础格式需要参考项目中的路由格式，否则会生错误

## 10-文件上传

**演示地址**

> http://lengyibai.gitee.io/vue-library/preview/10

**详细介绍**

> 设计灵感来自`Element UI`的`Upload`组件
>
> 上传文件后并不会返回什么
>
> 主要是作为未来做项目的参考

**主要功能如下**

- 支持多种文件图标显示，图片文件会直接默认为图标

- 支持修改最大同时上传数（项目内修改）
- 支持点击图标删除，同时取消上传请求
- 支持上传过程中添加文件继续上传，需要手动点击上传加入上传队列
- 支持上传失败后可再次进行上传，需要手动点击开始上传
- 支持清空列表，同时会取消所有上传请求
- 支持清除已上