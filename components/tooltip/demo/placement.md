---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US

There are 12 placement options available.

```jsx
import { Button, Tooltip } from 'co-ui';

function App() {
  const title = (
    <span className="text">
      May 21, 2108<br />
      <strong>$473.73</strong>
    </span>
  );

  return (
    <div className="tooltip-examples">
      <Tooltip theme="light" placement={['top', 'start']} title={title}>
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['top']} title={title}>
        <Button>Top Center</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['top', 'end']} title={title}>
        <Button>Top End</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['left', 'start']} title={title}>
        <Button>Left Start</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['left']} title={title}>
        <Button>Left Center</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['left', 'end']} title={title}>
        <Button>Left End</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['right', 'start']} title={title}>
        <Button>Right Start</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['right']} title={title}>
        <Button>Right Center</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['right', 'end']} title={title}>
        <Button>Right End</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['bottom', 'start']} title={title}>
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['bottom']} title={title}>
        <Button>Bottom Center</Button>
      </Tooltip>
      <Tooltip theme="light" placement={['bottom', 'end']} title={title}>
        <Button>Bottom End</Button>
      </Tooltip>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);
```

```css
.tooltip-examples .co-btn {
  margin-right: 10px;
  margin-bottom: 10px;
}

.text {
  font-size: 14px;
  color: #778699;
  line-height: 1.57;
  font-weight: normal;
  margin: 0;
}
