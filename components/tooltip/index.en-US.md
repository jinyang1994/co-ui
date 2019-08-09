---
category: Components
type: Data Display
title: Tooltip
---

A simple text popup tip.

## When To Use

- The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
- To provide an explanation of a `button/text/operation`. It's often used instead of the html `title` attribute.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | The text shown in the tooltip | string \| ReactNode | - |
| theme | Tooltip theme | 'dark' \| 'light' | - |
| placement | The position of the tooltip relative to the target | \['top' \| 'left' \| 'right' \| 'bottom', 'start' \| 'end'\] | \['top'\] |
