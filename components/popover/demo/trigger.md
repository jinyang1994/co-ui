---
order: 1
title:
  zh-CN: 四种触发方式
  en-US: Three ways to trigger
---

## zh-CN

鼠标移入、聚集、点击、手动控制。

## en-US

Mouse to click, focus, move in and manual.

```jsx
import { Popover, Button } from 'co-ui';

function App() {
  const content = (
    <div>
      <p>Content: </p>
      <p>Content: </p>
    </div>
  );
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="popover-trigger-examples">
      <Popover content={content} trigger={['hover']}>
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} trigger={['focus']}>
        <Button>Focue me</Button>
      </Popover>
      <Popover content={content} trigger={['click']}>
        <Button>Click me</Button>
      </Popover>
      <Popover visible={visible} content={content} trigger={['manual']}>
        <Button onClick={() => setVisible(!visible)}>Click me</Button>
      </Popover>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.popover-trigger-examples .co-btn + .co-btn {
  margin-left: 10px;
}
```
