---
order: 1
title:
  zh-CN: 自定义图标
  en-US: Custom
---

## zh-CN

为了保证包大小，库中仅包含组件中使用的`icon`，如果你想使用[@mdi](https://www.npmjs.com/org/mdi)中其他的图标，可以使用`register`方法。

## en-US

In order to guarantee the size of the package, the library only contains the `icon` used in the component. If you want to use other icons in [@mdi](https://www.npmjs.com/org/mdi), you can use `register` method.   

```jsx
import { Icon } from 'co-ui';
import { mdiCar } from '@mdi/js';

Icon.register('car', mdiCar);
ReactDOM.render(<Icon name="car" />, mountNode);
```
