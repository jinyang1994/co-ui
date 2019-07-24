---
order: 6
title:
  zh-CN: 按钮组
  en-US: Button Group
---

## zh-CN

可以使用`Button.Group`组件将`Button`组装成按钮组。

## en-US

You can assemble `Button` into a button group using the `Button.Group` component.

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button.Group>
      <Button disabled fill>Disabled</Button>
      <Button type="primary">Primary</Button> 
      <Button type="danger" icon="face" fill />
    </Button.Group>
  </div>,
  mountNode,
);
```

<style>
  .example .co-btn-group + .co-btn-group {
    margin-left: 15px;
  }
</style>
