# Scroll to Item

Scrolling to an item is very easy, we just need to make use of the `useHyperScrollerRef` hook, this hook returns a `React.RefObject` that will contain the `scrollToItem` method that we can use to scroll to an item.

To use that method, we need to pass it the `key` of the item we want to scroll to.

Check out the code:

```jsx {1,11,16,21}
import HyperScroller, { useHyperScrollerRef } from "react-hyper-scroller";

// List of random numbers from 50 to 300 (inclusive).
// These number represent the height of each item in the list.
// We do this to simulate a list of items with unknown height.
const items = new Array(500)
  .fill(0)
  .map(() => Math.floor(Math.random() * 150) + 50);

export function MyList() {
  const hyperScrollerRef = useHyperScrollerRef();

  return (
    <>
      <button
        onClick={() => hyperScrollerRef.current?.scrollToItem("item-300")}
      >
        Jump to the item-300
      </button>

      <HyperScroller ref={hyperScrollerRef} estimatedItemHeight={175}>
        {items.map((item, index) => (
          <div key={`item-${index}`} style={{ height: item }}>
            Item {index}. Height: {item}
          </div>
        ))}
      </HyperScroller>
    </>
  );
}
```

:::info
This example is available in [CodeSandbox](https://codesandbox.io/s/react-hyper-scroller-v3-scroll-to-item-example-1-65o8k?file=/src/App.js). It may be useful if you want to try out the code directly in your browser!
:::
