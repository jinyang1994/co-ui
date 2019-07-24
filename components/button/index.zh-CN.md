---
category: Components
type: 通用
title: Button
subtitle: 按钮
---

按钮是人机交互中必不可缺的元素之一，用于开始一个即时操作。

## 何时使用

点击触发相应逻辑。

## API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 按钮的失效状态 | boolean | `false` |
| type | 按钮的类型 | 'primary' \| 'info' \| 'warning' \| 'danger' | - |
| htmlType | `button`原生`type`值 | 'button' \| 'submit' \| 'reset' | - |
| size | 按钮的大小 | 'large' \| 'small' | - |
| icon | 按钮的图标 | string | - |
| fill | 按钮的填充状态 | boolean | false |
| loading | 按钮的加载状态 | boolean | false |
| onClick | 点击按钮时的回调 | (event) => void | - |

支持原生 button 的其他所有属性。

