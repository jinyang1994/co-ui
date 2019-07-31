---
category: Components
type: Data Entry
title: Radio
---

Radio.

## When To Use

- Used to select a single state from multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## API

### Radio

| Property | Description | Type | Default |
| --- | --- | --- | --- | --- |
| checked | Specifies whether the radio is selected. | boolean | false  |
| value | According to value for comparison, to determine whether the selected | any | - |
| name | The `name` property of `input[type="checkbox"]` | string | - |
| disabled | Disable radio | boolean | false |
| onChange | The callback function that is triggered when the state changes. | Function(value:any, e:Event) | - |

### RadioGroup

Radio group can wrap a group of `Radio`。

| Property | Description | Type | Default |
| --- | --- | --- | --- | --- |
| disabled | Default selected value | boolean | false |
| name | The `name` property of all `input[type="radio"]` children | string | - |
| value | Used for setting the currently selected value. | any | - |
| onChange | The callback function that is triggered when the state changes. | Function(value:any, e:Event) | - |

## Methods

### Radio

| Name | Description |
| --- | --- |
| blur() | remove focus |
| focus() | get focus |
