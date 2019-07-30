---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox component.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## API

### Props

#### Checkbox

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Specifies whether the checkbox is selected. | boolean | false |
| disabled | Disable checkbox | boolean | false |
| onChange | The callback function that is triggered when the state changes. | Function(value:string, e:Event) | - |
| value | The `value` property of all `input[type="checkbox"]` | string | - |
| name | The `name` property of all `input[type="checkbox"]` | string | - |

#### Checkbox Group

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Disable all checkboxes | boolean | false |
| name | The `name` property of all `input[type="checkbox"]` children | string | - |
| value | Used for setting the currently selected value. | string\[] | \[] |
| onChange | The callback function that is triggered when the state changes. | Function(checkedValue: string[]) | - |

### Methods

#### Checkbox

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
