---
order: 2
title:
  zh-CN: 修改延时
  en-US: Customize duration
---

## zh-CN

自定义时长 `10s`，默认时长为 `3s`。

## en-US

Customize message display duration from default `3s` to `10s`.

```jsx
import { message, Button } from 'co-ui';

function App() {
  function show() {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  }

  return (
    <Button type="primary" onClick={show}>
      Customized display duration
    </Button>
  );
}

ReactDOM.render(<App />, mountNode);
```
