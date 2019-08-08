---
order: 1
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

Radio 不可用。

## en-US

Radio unavailable.

```jsx
import { Radio } from 'co-ui';

function App() {  
  return (
    <div>
      <Radio disabled>Disabled</Radio>
      <Radio disabled checked>Disabled Checked</Radio>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```
