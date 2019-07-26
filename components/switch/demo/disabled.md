---
order: 1
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

Switch 失效状态。

## en-US

Disabled state of `Switch`.

```jsx
import { Switch, Button } from 'co-ui';

function App() {
  const [active, setActive] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  
  return (
    <div>
      <Switch 
        className="switch"
        disabled={disabled} 
        value={active}
        onChange={(value) => setActive(value)}
      />
      <Button
        className="button"
        onClick={() => setDisabled(!disabled)}
      >
        Toggle disabled
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.switch {
  vertical-align: middle;
  margin-right: 8px;
}

.button {
  vertical-align: middle;
}
```
