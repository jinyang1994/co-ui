---
order: 2
title:
  zh-CN: 禁用按钮
  en-US: Disabled
---

## zh-CN

通过`disabled`属性来设置按钮是否是禁用状态

## en-US

Use the `disabled` property to set whether the button is disabled   

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button disabled>Default(Disabled)</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <Button type="danger" fill disabled>Danger(Disabled)</Button>
  </div>,
  mountNode,
);
```
