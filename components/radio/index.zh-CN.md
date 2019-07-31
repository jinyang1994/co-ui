---
category: Components
subtitle: 单选框
type: 数据录入
title: Radio
---

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false  |
| value | 根据 value 进行比较，判断是否选中 | any | - |
| name | `input[type="radio"]` 的 `name` 属性 | string | - |
| disabled | 单选框的失效状态 | boolean | false |
| onChange | 选项变化时的回调函数 | Function(value:any, e:Event) | - |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| value | 用于设置当前选中的值 | any | - |
| onChange | 选项变化时的回调函数 | Function(value:any, e:Event) | - |

## 方法

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
