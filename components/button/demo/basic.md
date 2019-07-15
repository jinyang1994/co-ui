---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

测试按钮   

## en-US

Default button   

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <Button onClick={() => window.alert(123)}>Default</Button>
  </div>,
  mountNode,
);
```

```css
.example button {
  color: red;
}
```

<style>
 .test button + button {
    margin-left: 20px;
 }
</style>
