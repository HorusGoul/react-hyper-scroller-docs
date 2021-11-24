---
sidebar_position: 3
---

# Items with fixed size

Building lists in which the size of each item is fixed is very common in web apps, for example, a todo list app. But what happens if you have hundreds of items? or thousands? In this case, you'll need to virtualize the list, and that's what HyperScroller is for.

In this example, we'll create a list of items that are fixed size, and we'll use HyperScroller to virtualize the list.

```jsx {8}
import HyperScroller from "react-hyper-scroller";

// List of 500 items.
const items = new Array(500).fill(null);

export function MyList() {
  return (
    <HyperScroller estimatedItemHeight={50} measureItems={false}>
      {items.map((item, index) => (
        <div key={`item-${index}`} style={{ height: 50 }}>
          Item {index}.
        </div>
      ))}
    </HyperScroller>
  );
}
```

As you can see in the code, we're creating a list of 500 items. Then, for each item, we're creating a div with a fixed height of 50px. We know the size won't change, so we set the `measureItems` prop to `false`, and the `estimatedItemHeight` prop to `50`. This will tell HyperScroller to not measure the items, and instead use the fixed height of 50px for all the calculations.

And that's it! If you check using Inspect Element, you'll see that the list is now rendered as a virtual list. You could try scrolling down and up to see how the list behaves, also, try to make the list longer to see at which point the performance starts to become an issue.

:::info
This example is available in [CodeSandbox](https://codesandbox.io/s/react-hyper-scroller-v3-items-with-fixed-size-example-1-twk37?file=/src/App.js). It may be useful if you want to try out the code directly in your browser!
:::
