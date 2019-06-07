
```css
.my-selector {
  position: relative;
  top: 15px;
  left: 50px;
  z-index: 1;
}
```

![relative](../assets/images/css-positioning-2.png)

# Absolute

An element with **absolute position** is no longer part of the main DOM stream, it creates its own one. Other elements in the main DOM stream will not affect or be affected by this element.

Even if it is not consistent for the main DOM stream, it can be affected by the **size** and **z-index** properties. **Relative offset** affects it as well, but regarding the **first positioned parent** or the document itself if none exists.

Its children will consider it as a reference for their positioning.

```css
.my-selector {
  position: absolute;
  top: 15px;
  left: 50px;
  z-index: 1;
}
```

![absolute](../assets/images/css-positioning-3.png)
