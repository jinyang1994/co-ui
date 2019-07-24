---
category: Components
type: General
title: Button
---


Buttons are one of the indispensable elements in human-computer interaction and are used to start an instant operation.

## When To Use

Clicking a button will trigger corresponding business logic.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disabled state of button | boolean | `false` |
| type | the type of button | string | 'primary' \| 'info' \| 'warning' \| 'danger' |
| htmlType | the original html `type` of `button` | 'button' \| 'submit' \| 'reset' | - |
| size | the size of button | 'large' \| 'small' | - |
| icon | the icon of button | string | - |
| fill | the fill status of button | boolean | false |
| loading | the loading status of button | boolean | false |
| onClick | the handler to handle `click` event | (event) => void | - |

It accepts all props which native button support.
