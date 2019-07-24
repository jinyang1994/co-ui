---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

通过`name`属性设置图标类型，并支持使用`css`进行样式修改

## en-US

Set the icon type with the `name` attribute and support style modification with `css`   

```jsx
import { Icon } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Icon name="account" />
    <Icon name="account" className="example-icon-size" />
    <Icon name="account" className="example-icon-color example-icon-size" />
  </div>,
  mountNode,
);
```

```css
.example-icon-size { 
  font-size: 25px;
}

.example-icon-color {
  color: #0055ff;
}
```

<style>
 .example .co-icon + .co-icon {
    margin-left: 15px;
 }
</style>
