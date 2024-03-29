---
category: Components
subtitle: 全局提示
type: 反馈
title: Message
---

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

组件提供了一些静态方法，使用方式和参数如下：

- `message.open(content, [duration], [icon]).then(afterClose)`
- `message.success(content, [duration], [icon]).then(afterClose)`
- `message.error(content, [duration], [icon]).then(afterClose)`
- `message.warning(content, [duration], [icon]).then(afterClose)`
- `message.info(content, [duration], [icon]).then(afterClose)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | string\|ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| icon | 自定义图标 | ReactNode | - |
| afterClose | 关闭时触发的回调函数 | Function | - |

### 全局方法

还提供了全局配置和全局销毁方法：

- `message.config(options)`

#### message.config

```js
message.config({
  duration: 3,
});
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |
