---
order: 0
title:
  zh-CN: 禁用多选框
  en-US: Disabled
---

## zh-CN

禁用多选框。

## en-US

Disabled checkbox.

```jsx
import { Checkbox } from 'co-ui';

function App() {  
  return (
    <>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox checked disabled>Disabled Checked</Checkbox>  
    </>
  );
}

ReactDOM.render(<App />, mountNode);
```
