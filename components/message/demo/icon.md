---
order: 2
title:
  zh-CN: 自定义图标
  en-US: Customize icon
---

## zh-CN

自定义提示的图标。

## en-US

Customize message display icon.

```jsx
import { message, Button, Icon } from 'co-ui';

function App() {
  function show() {
    message.open('This is a message prompt for the heart icon', undefined, <Icon name="heart" />);  
  }

  return (
    <Button type="primary" onClick={show}>
      Customized display icon
    </Button>
  );
}

ReactDOM.render(<App />, mountNode);
```
