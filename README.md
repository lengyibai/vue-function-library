<img src="https://lengyibai-img-bed.netlify.app/img/lyb.png" style="width:200px;margin:0 auto;border-radius:50%" />

<p style="font-size:50px;font-weight:bold;width:100%;text-align:center;color:#fff;text-shadow:0 0 15px">冷弋白</p>
<p style="text-align:center;color:#aaa;position: relative;top:-10px;text-shadow:0 0 10px"><a href='https://wpa.qq.com/msgrd?v=3&uin=1329670984&site=qq&menu=yes' style='text-decoration: none;
'>点击此处联系我</a></p>
# 介绍

## 00-单文件

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/00

**详细介绍**

> 一些小玩意儿
>
> 目前有：
>
> 1. 倒计时
> 2. 记住密码
> 3. 拖拽排序

## 01-锚点路由

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/01

**内置两种方案**

> 默认方案为方案2，推荐方案2
>
> 方案1：滚动到指定位置，按钮样式跟随改变，地址栏也会跟随改变，点击按钮也会滚动到指定位置，但修改地址栏不会跳转，修改地址栏后需要手动刷新页面才会跳转
>
> 方案2：除了滚动不会修改地址栏，需要点击按钮才会修改地址栏，其他功能与方案一一致，因为修改地址栏会触发实时监听地址栏，出现滚动错误，如果想自动修改地址栏，可以采用上面的方案。`Vue`官网就是采用的此方案

## 02-better-scroll吸顶

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/02

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

> https://bejewelled-biscuit-15590b.netlify.app/dist/03

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

> https://bejewelled-biscuit-15590b.netlify.app/dist/04

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

> https://bejewelled-biscuit-15590b.netlify.app/dist/07

**详细介绍**

> 使用了自己写的元素出场功能、动画库
>
> 参考：https://gitee.com/lengyibai/scroll-animate
>
> 点击删除的动画使用的是`Vue`的动画标签

## 08-购物车

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/08

**详细介绍**

> 主要是作为未来做项目的参考

## 09-路由侧边栏与面包屑

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/09

**详细介绍**

> 通过路由来结合`Element UI`的侧边栏组件来动态生成侧边栏
>
> 附带面包屑，面包屑支持点击
>
> 注：路由基础格式需要参考项目中的路由格式，否则会生错误

## 10-文件上传

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/10

**详细介绍**

> 设计灵感来自`Element UI`的`Upload`组件
>
> 上传文件后并不会返回什么
>
> 主要是作为未来做项目的参考

**主要功能如下：**

- 支持多种文件图标显示，图片文件会直接默认为图标
- 支持修改最大同时上传数（项目内修改）
- 支持点击图标删除，同时取消上传请求
- 支持上传过程中添加文件继续上传，需要手动点击上传加入上传队列
- 支持上传失败后可再次进行上传，需要手动点击开始上传
- 支持清空列表，同时会取消所有上传请求
- 支持清除已上传

## 11-正则搜索

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/11

**主要功能如下：**

- 支持各种关键属性搜索
- 支持拼音搜索
- 支持拼音简写搜索
- 不区分大小写
- 支持模糊查询

## 12-Grid特色布局

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/12

**主要功能如下：**

- 组件1：支持数字创建布局，支持响应式 + 动画，可试着改变浏览器宽度预览效果
- 组件2：支持字母模板布局，支持响应式，可试着改变浏览器宽度预览效果
- 组件3：贴边间隔左对齐布局，支持根据浏览器宽度，实时更新高度等比宽度

## 13-文件上传组件

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/13

**详细介绍**

> 可直接使用，支持多文件和单文件上传，传递接口地址即可，并会返回一个上传完成的回调

**主要功能如下：**

- 显示文件名
- 显示上传进度
- 显示上传状态

## 14-iframe任务视图

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/14

**详细介绍**

> 公司提出的一个需求，点击页面上的一个链接，在当前页面通过`iframe`打开
>
> 顺便加了些动画进去
>
> 将此功能抽离出来主要是作为未来做项目的参考

## 15-flexible.js + rem + 媒体查询布局

**演示地址**

> https://bejewelled-biscuit-15590b.netlify.app/dist/15

**详细介绍**

> 改良了淘宝的`flexible.js`，PC端适配缩小到一定范围会进行一定的放大补偿，
>
> 虽然补偿并不明显，但可以自己调节，目前的是缩小到`960px`将html的字体大小`×1.5`倍，可以设置多个判断
