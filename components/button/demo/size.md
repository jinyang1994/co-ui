---
order: 5
title:
  zh-CN: 按钮大小
  en-US: Size
---

## zh-CN

通过设置`size`为`large` `small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。

## en-US

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

```jsx
import { Button } from 'co-ui';

ReactDOM.render(
  <div className="example">
    <div className="simple">
      <Button size="large" icon="heart">Like</Button>
      <Button icon="heart">Like</Button>
      <Button size="small" icon="heart">Like</Button>
    </div>
    <div className="group">
      <Button.Group size="large">
        <Button type="primary">Prev</Button>
        <Button type="primary">Next</Button>
      </Button.Group>
      <Button.Group>
        <Button type="primary">Prev</Button>
        <Button type="primary">Next</Button>
      </Button.Group>
      <Button.Group size="small">
        <Button type="primary">Prev</Button>
        <Button type="primary">Next</Button>
      </Button.Group>
    </div>  
  </div>,
  mountNode,
);
```

<style>
  .example .simple {
    margin-bottom: 15px;
  }
  
  .example .co-btn, example .co-btn-group {
    vertical-align: middle;
  }
</style>
