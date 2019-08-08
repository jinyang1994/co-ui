---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的 checkbox。

## en-US

Basic usage of checkbox.

```jsx
import { Checkbox } from 'co-ui';

function App() {
  const [checked, setChecked] = React.useState(true);
  
  return (
    <>
      <Checkbox 
        checked={checked} 
        onChange={(nextChecked) => setChecked(nextChecked)}
      >
        Checkbox
      </Checkbox>
      <Checkbox 
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
      />  
    </>
  );
}

ReactDOM.render(<App />, mountNode);
```
