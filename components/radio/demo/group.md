---
order: 1
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

```jsx
import { Radio } from 'co-ui';

function App() {
  const [value, setValue] = React.useState('Ironforge');
  
  return (
    <Radio.Group 
      value={value}
      onChange={(nextValue) => setValue(nextValue)} 
    >
      <Radio value="Ironforge">Ironforge</Radio>
      <Radio value="Darnassus">Darnassus</Radio>
      <Radio disabled value="Undercity">Undercity</Radio>
      <Radio value="Dalaran">Dalaran</Radio>
    </Radio.Group>
  );
}

ReactDOM.render(<App />, mountNode);
```
