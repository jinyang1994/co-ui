---
category: Components
subtitle: 多选框
type: 数据录入
title: Checkbox
---

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API

### 属性

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false  |
| disabled | 失效状态 | boolean | false  |
| onChange | 变化时回调函数 | Function(value:string, e:Event) | - |
| value | `input[type="checkbox"]` 的 `value` 属性 | string | - |
| name | `input[type="checkbox"]` 的 `name` 属性 | string | - |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 整组失效 | boolean | false |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |
| value | 指定选中的选项 | string\[] | \[] |
| onChange | 变化时回调函数 | Function(checkedValue: string[]) | - |

### 方法

#### Checkbox

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
