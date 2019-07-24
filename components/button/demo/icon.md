---
order: 3
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

通过`icon`属性来设置图标，图标的具体使用可以[查看](/components/icon)

## en-US

Set the icon with the `icon` attribute. You can view the [icon](/components/icon) by using the specific icon

```jsx
import { Button, Icon } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button icon="face" fill />
    <Button icon="heart" fill>Like</Button>
    <Button type="primary">
      Search
      <Icon className="icon-magnify" name="magnify" />  
    </Button>
  </div>,
  mountNode,
);
```

```css
.example .icon-magnify {
  margin-left: 8px;
}
```
