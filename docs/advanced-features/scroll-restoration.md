# Scroll Restoration

One of the features that we expect from the browser, and apps is to restore scroll position when navigating back to a page. With virtualization, this is not possible, as the scroll position is lost when the user scrolls to a different page, and the browser will not restore it.

However, the HyperScroller component can be configured to store the scroll position in the `cache`, so that it can be restored when mounting the component again.

The scroll restoration approach works with both dynamic and static lists, we'll reuse the same example from the Getting Started guide to demonstrate how to make use of this feature.

:::info
This example is available in [CodeSandbox](https://codesandbox.io/s/react-hyper-scroller-v3-scroll-restoration-example-1-4f3ct?file=/src/App.js). It may be useful if you want to try out the code directly in your browser!
:::

In this case, we've added a button to hide and show the list, so we can see the scroll restoration feature in action, but let's not focus on that part of the example. The important part are the `scrollRestoration` and `cache` props. These two props are used to enable the scroll restoration feature, the first one is used to tell the component whether you want it to restore the scroll or not, and the second one is used to store the scroll position in the cache, and retrieve it when mounting the component again.

The `HyperScrollerCache` class has a static method called `getOrCreateCache`, which accepts a `key`. This key is used to identify the cache, so that you can have multiple caches in your application. If we want to restore the scroll position when mounting the component again, we need to pass the same key to the `getOrCreateCache` method.

```jsx {25,26}
import { useState } from "react";
import HyperScroller, { HyperScrollerCache } from "react-hyper-scroller";

// List of random numbers from 50 to 300 (inclusive).
// These number represent the height of each item in the list.
// We do this to simulate a list of items with unknown height.
const items = new Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * 150) + 50);

export function MyList() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        <button onClick={() => setShow((current) => !current)}>
          Show/Hide Scroller
        </button>
      </div>

      {show && (
        <HyperScroller
          estimatedItemHeight={175}
          scrollRestoration={true}
          cache={HyperScrollerCache.getOrCreateCache("cache-key")}
        >
          {items.map((item, index) => (
            <div key={`item-${index}`} style={{ height: item }}>
              Item {index}. Height: {item}
            </div>
          ))}
        </HyperScroller>
      )}
    </>
  );
}
```

Try scrolling the list, see which items are rendered and then click the button to hide the list. Now, click the button again to show the list again and see how the scroll position is restored.

That's it, it should be easy to use the scroll restoration feature in your application with HyperScroller.
