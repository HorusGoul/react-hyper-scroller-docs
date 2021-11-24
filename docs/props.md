---
sidebar_position: 2
---

# Props

Here's the list of props that you can use to customize the behavior of the virtual list.

## `estimatedItemHeight`

Type: **`number`**
Required: **`true`**

Estimated height that will be used on initial render for each item. If `measureItems` is `false`, this value is treated as the exact size of the items.

## `children`

Type: **`React.ReactNode`**
Required: **`true`**

The list of items that will be rendered.

## `cache`

Type: **`HyperScrollerCache`**
Required: **`false`**
Default: **`new HyperScrollerCache(nextInt)`**

The cache that will be used to store the scroll position and the height of measured items.

## `overscanItemCount`

Type: **`number`**
Default: **`2`**
Required: **`false`**

The number of items that will be rendered before and after the ones that are shown in the viewport. Minimum value is `2`.

## `targetView`

Type: **`React.RefObject<HTMLElement> | Window`**
Default: **`window`**
Required: **`false`**

The target view that will be used as a scroll view.

## `initialScrollPosition`

Type: **`number`**
Default: **`0`**
Required: **`false`**

Initial scroll position.

## `scrollRestoration`

Type: **`boolean`**
Default: **`false`**
Required: **`false`**

Allows telling the component whether you want it to restore the scroll or not. The Scroll Restoration feature depends on the `cache`, as it will retrieve the latest scroll position from it.

## `measureItems`

Type: **`boolean`**
Default: **`true`**
Required: **`false`**

Measure the height of the items. If set to `false`, make sure to set `estimatedItemHeight` with the exact size of the items.
