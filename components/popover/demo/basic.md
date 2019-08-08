---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

完善中。

## en-US

To be done.

```jsx
import { Popover, Switch, Radio, Checkbox } from 'co-ui';

function App() {
  const [placement, setPlacement] = React.useState(['top']);
  const [arrow, setArrow] = React.useState(true);
  const [trigger, setTrigger] = React.useState(['click']);

  return (
    <>
      <h5>Direction:</h5>
      <Radio.Group 
        value={placement[0]} 
        onChange={(value) => setPlacement([value, placement[1]])}
      >
        <Radio value="top">Top</Radio>
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="bottom">Bottom</Radio>
      </Radio.Group>
      <h5>Position:</h5>
      <Radio.Group 
        value={placement[1]} 
        onChange={(value) => setPlacement([placement[0], value])}
      >
        <Radio value="start">Start</Radio>
        <Radio value="end">End</Radio>
        <Radio value={undefined}>Center</Radio>
      </Radio.Group>
      <h5>Trigger:</h5>
      <Checkbox.Group value={trigger} onChange={(value) => setTrigger(value)}>
        <Checkbox 
          disabled={trigger.indexOf('focus') !== -1} 
          value="click"
        >
          Click
        </Checkbox>
        <Checkbox value="hover">Hover</Checkbox>
        <Checkbox 
          value="focus"
          disabled={trigger.indexOf('click') !== -1} 
        >
          Focus
        </Checkbox>
      </Checkbox.Group>  
      <h5>Show arrow:</h5>
      <Switch value={arrow} onChange={(value) => setArrow(value)} />
      <Popover 
        arrow={arrow}
        placement={placement} 
        trigger={trigger}
        content={<div className="content">popper</div>}       
      >
        <input className="target" placeholder="Target" /> 
      </Popover>
    </>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.target {
  display: block;
  max-width: 200px;
  height: 40px;
  box-sizing: border-box;
  margin: 40px auto 0;
  background: #fff;
  border: 2px dashed #d7e1ea;
  color: #35425b;
  line-height: 36px;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
}

.content {
  width: 200px;
  height: 100px;
}
```
