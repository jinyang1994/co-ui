---
category: Components
type: Feedback
title: Message
---

Display global messages as feedback in response to user operations.

## When To Use

- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## API

This components provides some static methods, with usage and arguments as following:

- `message.open(content, [duration], [icon]).then(afterClose)`
- `message.success(content, [duration], [icon]).then(afterClose)`
- `message.error(content, [duration], [icon]).then(afterClose)`
- `message.warning(content, [duration], [icon]).then(afterClose)`
- `message.info(content, [duration], [icon]).then(afterClose)`

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | content of the message | ReactNode | - |
| duration | time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 3 |
| icon | Customized Icon | ReactNode | - |
| afterClose | Specify a function that will be called when the message is closed | function | - |

### Global static methods

Methods for global configuration and destruction are also provided:

- `message.config(options)`

#### message.config

```js
message.config({
  duration: 3,
});
```

| Argument | Description | Type | Default |
| --- | --- | --- | --- |
| duration | time before auto-dismiss, in seconds | number | 3 |
