---
category: Components
type: Data Entry
title: Switch
---

Switching Selector.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | determine whether the `Switch` is value | boolean | false |
| disabled | Disable switch | boolean | false |
| loading | loading state of switch | boolean | false |
| size | the size of button | 'large' \| 'small' | - |
| name | The `name` property of switch | string | - |
| onChange | trigger when the checked state is changing | Function(checked: boolean, event: Event) |  |
| className | additional class to Switch | string | - |
