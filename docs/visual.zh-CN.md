---
order: 2
title: 视觉
---

Concise UI拥有一套自己的色彩和字体体系，用来规范系统的视觉体验。

---

## 色彩

在色彩方面，我们选择了一套**基础色**和一套**系统级功能色**，帮助使用系统的用户快速形成认知。

```__react
import Colors from '@examples/visual/Colors'; 

ReactDOM.render(<Colors />, mountNode);
```

## 字体

在字体方面，我们使用[@Rasmus Andersson](https://rsms.me/inter/)制作的`Inter`系列字体。

它提供了丰富的**字体宽度**和**字体样式**，配合不同的字号来区别内容的权重，帮助使用系统的用户提高工作效率。

```__react
import Font from '@examples/visual/Font'; 

ReactDOM.render(<Font />, mountNode);
```

