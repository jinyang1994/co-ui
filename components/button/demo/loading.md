---
order: 4
title:
  zh-CN: 加载状态
  en-US: Loading
---

## zh-CN

通过`loading`属性来设置加载状态，加载时会覆盖掉显示的`icon`

## en-US

Set the loading state by the `loading` property, which will overwrite the displayed `icon` when loading

```jsx
import React, { useState } from 'react';
import { Button } from 'co-ui';

function Example() {
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="example">
      <Button icon="face" loading fill>Loading...</Button>
      <Button 
        type="primary"
        icon="face" 
        loading={loading} 
        fill
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2 * 1000);
        }}
      >
        {loading ? 'Loading...' : 'Click me!'}
      </Button>
    </div>  
  );
}

ReactDOM.render(<Example />, mountNode);
```
