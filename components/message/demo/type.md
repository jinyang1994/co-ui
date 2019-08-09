---
order: 1
title:
  zh-CN: 其他提示类型
  en-US: Other types of message
---

## zh-CN

包括成功、失败、警告等。

## en-US

Messages of success, error and warning types.

```jsx
import { message, Button } from 'co-ui';

function App() {
  function show(type) {
    message[type](`This is a prompt message for ${type}!`);
  }

  return (
    <div className="message-examples">
      <Button type="success" onClick={() => show('success')}>Success</Button>
      <Button type="danger" onClick={() => show('error')}>Error</Button>
      <Button type="warning" onClick={() => show('warning')}>Warning</Button>
      <Button type="info" onClick={() => show('info')}>Information</Button>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.message-examples .co-btn + .co-btn {
  margin-left: 10px;
}
```
