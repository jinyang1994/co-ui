---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

信息提醒反馈。

## en-US

Normal message for information.

```jsx
import { message, Button } from 'co-ui';

function App() {
  function show() {
    message.open('This is a normal message!').then(() => {
      console.log('The message is closed!');
    });
  }

  return (
    <Button type="primary" onClick={show}>
      Display normal message
    </Button>
  ); 
}

ReactDOM.render(<App />, mountNode);
```
