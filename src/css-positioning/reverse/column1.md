
# Fixed

When an element position is fixed, this means the same than for absolutely positioned elements but ignoring all its positioned parent elements. It will always be positioned regarding the **viewport**.

Positioning the element fixed regarding the viewport will cause these elements not to move when scrolling.


```css
.my-selector {
  position: fixed;
  top: 15px;
  left: 50px;
}
```

```



image




```

# Sticky

Sticky positioning is a hybrid of **relative** and **fixed** positioning. 

The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.

*Browsers support is not yet optimal but is getting better: https://caniuse.com/#feat=css-sticky *

```css
.my-selector {
  position: sticky;
  top: 15px;
}
```

```



image




```
