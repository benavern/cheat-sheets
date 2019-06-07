Date: __June 2019__

# Static

By default, in an html document, all the elements have a **static position**.
This means that it keeps its natural order and follows the main DOM stream.

We will consider these elements as "not positionned".

No property of size, position, z-index...will affect it.

```css
.my-selector {
  position: static; /* facultative if not overitten */
}
```

![static](../assets/images/css-positioning-1.png)

# Relative

Like static positioning, elements with **relative position** will keep their natural order in the main DOM stream.

But as long as it is not an *inline element* (display CSS property), it has a DOM consistency. This means that we can give it:

* a **size** (width, height).
* a **relative offset** (top, left, right, bottom) to define a position regarding its original position.
* a **z-index** so that it will be stack on the Z axis regarding other elements overlapsing it.

Its children will consider it as a reference for their positioning.
