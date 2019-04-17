
# Fixed

An element with **fixed position** behaves almost exactly like an element with **absolute position**. The only difference is that it will ignor all its positioned parent elements. It will always be positioned regarding the **viewport**.

Setting position fixed on an element will cause it not to move with the document when scrolling.


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

*Browsers support is not yet optimal but is getting better: [caniuse.com/#feat=css-sticky](https://caniuse.com/#feat=css-sticky)*

```css
.my-selector {
  position: sticky;
  top: 15px;
}
```

```



image




```
