---
order: 1
title:
  zh-CN: 填充按钮
  en-US: Fill
---

## zh-CN

通过`fill`属性来设置按钮是否填充

## en-US

Use the `fill` property to set whether the button is filled   

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button fill>Default</Button>
    <Button type="primary" fill>Primary</Button>
    <Button type="success" fill>Success</Button>
    <Button type="info" fill>Information</Button>
    <Button type="danger" fill>Danger</Button>
    <Button type="warning" fill>Warning</Button>
  </div>,
  mountNode,
);
```
