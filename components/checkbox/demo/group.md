---
order: 0
title:
  zh-CN: 多选框组
  en-US: Checkbox Group
---

## zh-CN

使用`Checkbox.Group`组件包裹`Checkbox`组件实现多选框组，可以嵌套其他组件实现灵活的布局。

## en-US

Use the `Checkbox.Group` component to wrap the `Checkbox` component to implement a checkbox group, which can be nested with other components for flexible layout.

```jsx
import { Checkbox } from 'co-ui';

function App() {
  const [value, setValue] = React.useState(['Ironforge', 'Darnassus']);
  
  return (
    <Checkbox.Group 
      value={value}
      className="checkbox-group"
      onChange={(nextValue) => setValue(nextValue)}
    >
      <div className="item">
        <Checkbox value="Ironforge">Ironforge</Checkbox>
      </div>   
      <div className="item">
        <Checkbox value="Darnassus">Darnassus</Checkbox>
      </div>
      <div className="item">
        <Checkbox disabled value="Undercity">Undercity</Checkbox>
      </div>
      <div className="item">
        <Checkbox value="Dalaran">Dalaran</Checkbox>
      </div>
      <div className="item">
        <Checkbox value="Orgrimmar">Orgrimmar</Checkbox>
      </div>
    </Checkbox.Group>
  );
}

ReactDOM.render(<App />, mountNode);
```

```css
.checkbox-group::after {
  content: '';
  display: block;
  clear: both;
}
.checkbox-group .item {
  float: left;
  width: 33%;
  margin-bottom: 10px;
}
```
