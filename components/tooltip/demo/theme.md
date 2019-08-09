---
order: 1
title:
  zh-CN: 主题
  en-US: Theme
---

## zh-CN

主题有 `dark` 和 `light`。

## en-US

The theme has `dark` and `light`.

```jsx
import { Button, Tooltip } from 'co-ui';

function App() {
  return (
    <div className="theme-examples">
      <Tooltip theme="light" title="This is light theme.">
        <Button>Theme light</Button>
      </Tooltip>
      <Tooltip theme="dark" title="This is dark theme.">
        <Button fill>Theme dark</Button>
      </Tooltip>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.theme-examples .co-btn + .co-btn {
  margin-left: 10px;
}
```
