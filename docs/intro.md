---
sidebar_position: 1
---

# Getting Started

Let's create a virtual list in less than five minutes.

## Installation

In the project of your choice, open a terminal and run the following command to install the `react-hyper-scroller` package.

```bash npm2yarn
npm install react-hyper-scroller@next
```

## Usage

Let's convert a simple list to a virtual list. This means that instead of rendering the whole list, we will only render a portion of it, making it cheaper in terms of performance.

Take a look at this example, we're creating an array of 100 numbers. Each number represents an item in the list, and will correspond with the height of the item.

```jsx
// List of random numbers from 50 to 300 (inclusive).
// These number represent the height of each item in the list.
// We do this to simulate a list of items with unknown height.
const items = new Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * 150) + 50);

export function MyList() {
  return (
    <div>
      {items.map((item, index) => (
        <div key={`item-${index}`} style={{ height: item }}>
          Item {index}. Height: {item}
        </div>
      ))}
    </div>
  );
}
```

Now, to make this list virtual, we need to import the `<HyperScroller />` component from the `react-hyper-scroller` package, and replace the `<div />` wrapper with it.

```jsx {1,12,18}
import HyperScroller from "react-hyper-scroller";

// List of random numbers from 50 to 300 (inclusive).
// These number represent the height of each item in the list.
// We do this to simulate a list of items with unknown height.
const items = new Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * 150) + 50);

export function MyList() {
  return (
    <HyperScroller>
      {items.map((item, index) => (
        <div key={`item-${index}`} style={{ height: item }}>
          Item {index}. Height: {item}
        </div>
      ))}
    </HyperScroller>
  );
}
```

We also need to pass it the `estimatedItemHeight` prop, which should be a number representing the average estimate of the list items. In this case, we'll set it to `175`.

:::note
Don't worry, this is just an estimate, and it's not required to be accurate, we could set it to `50` and it would still work. Learn more about `estimatedItemHeight` in the [props](/docs/props#estimateditemheight) section.
:::

```jsx {12}
import HyperScroller from "react-hyper-scroller";

// List of random numbers from 50 to 300 (inclusive).
// These number represent the height of each item in the list.
// We do this to simulate a list of items with unknown height.
const items = new Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * 150) + 50);

export function MyList() {
  return (
    <HyperScroller estimatedItemHeight={175}>
      {items.map((item, index) => (
        <div key={`item-${index}`} style={{ height: item }}>
          Item {index}. Height: {item}
        </div>
      ))}
    </HyperScroller>
  );
}
```

And that's it! If you check using Inspect Element, you'll see that the list is now rendered as a virtual list. You could try scrolling down and up to see how the list behaves, also, try to make the list longer to see at which point the performance starts to become an issue.

:::info
This example is available in [CodeSandbox](https://codesandbox.io/s/react-hyper-scroller-v3-getting-started-example-1-1k3uf?file=/src/App.js). It may be useful if you want to try out the code directly in your browser!
:::
