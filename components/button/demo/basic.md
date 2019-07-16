---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

类型分为：`朴素`、`主要`、`成功`、`信息`、`危险`、`警告`  

## en-US

Button type: Default, Primary, Success, Info, Danger, Warning   

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Information</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
  </div>,
  mountNode,
);
```

<style>
 .example button + button {
    margin-left: 15px;
 }
</style>
