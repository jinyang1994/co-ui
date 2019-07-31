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
import { Radio, Button } from 'co-ui';

function App() {
  const [disabled, setDisabled] = React.useState(true);
  
  return (
    <>
      <Radio disabled={disabled}>Disabled</Radio>
      <Radio disabled={disabled} checked>Disabled Checked</Radio>
      <div style={{ marginTop: 20 }}>
        <Button 
          type="primary" 
          onClick={() => setDisabled(!disabled)}
        >
          Toggle Disabled
        </Button>
      </div> 
    </>
  );
}

ReactDOM.render(<App />, mountNode);
```
