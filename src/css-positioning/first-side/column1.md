Date: __April 2019__

# Static

By default, in an html document, all the elements are statically positionned.
This means that it keeps its natural order and follows the DOM stream.

We will consider these elements as "not positionned".

No property of size, position, z-index...will affect it.

```css
.my-selector {
  position: static; /* facultative if not overitten */
}
```

```



image




```

# Relative

As in static positioning, elements relatively positioned will keep their natural order in the DOM stream.

This time, as long as it is not an inline element, it has a DOM consistency. This means that we can give it:

* a **size** (width, height).
* a **relative offset** (top, left, right, bottom) to define a position regarding its original position.
* a **z-index** so that it will be positionned on the z axis regarding other elements overlapsing it.

Its children will consider it as a reference for their positioning.
