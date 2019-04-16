
```css
.my-selector {
  position: relative;
  top: 15px;
  left: 50px;
  z-index: 1;
}
```

```



image




```

# Absolute

An element that is absolutely positioned is no longer part of the (principal) DOM stream. Other elements in the DOM stream will not take care of it.

Even if it is not consistent for the main DOM stream, it can be affected by the **size** and **z-index** properties. **relative offset** Affect it as well, but this time it will be regarding the first positioned parent or the document itself if none exists.

It is considered as positionned so its children will consider it their reference.

```css
.my-selector {
  position: absolute;
  top: 15px;
  left: 50px;
  z-index: 1;
}
```

```



image




```
