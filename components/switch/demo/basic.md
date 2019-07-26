---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { Switch } from 'co-ui';

function App() {
  const [active, setActive] = React.useState(false);
  
  return (
    <Switch 
      value={active} 
      onChange={(value) => setActive(value)} 
    />
  );
}

ReactDOM.render(<App />, mountNode);
```

<style>
  .co-switch {
    margin-right: 8px;
  }
</style>
