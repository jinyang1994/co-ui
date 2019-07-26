---
order: 3
title:
  zh-CN: 开关大小
  en-US: Sizes
---

## zh-CN

通过设置`size`为`large` `small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。

## en-US

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

```jsx
import { Switch } from 'co-ui';

function Item(props) {
  const [active, setActive] = React.useState(true);
  
  return (
    <Switch 
      {...props}
      value={active}
      onChange={(value) => setActive(value)}
    />
  );
}
function App() {
  return (
    <div className="example">
      <Item size="large" />
      <Item />
      <Item size="mini" />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```
