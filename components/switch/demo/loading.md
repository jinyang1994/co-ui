---
order: 4
title:
  zh-CN: 加载中
  en-US: Loading
---

## zh-CN

标识开关操作仍在执行中。

## en-US

Mark a pending state of switch.

```jsx
import { Switch } from 'co-ui';

function App() {
  return (
    <div>
      <Switch loading />
      <Switch value loading />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```
