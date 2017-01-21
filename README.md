# drawshapes.js

Live demo: [drawshapes.crayon.pro](http://drawshapes.crayon.pro/).

## Installation
Download the `drawshapes.js` library and include it to your page:
```html
<script src="js/drawshapes.min.js"></script>
```
```js
document.getElementById("box").drawShapes({
        shape: "triangle",
        qtt:50,
        hideSpeed: 500,
        showSpeed: 150,
        size: {min:10,max:40},
        speed:2000,
        colors:["rgb(253,8,100)","rgb(138,190,43)","rgb(13,195,202)","rgb(128,128,128)"],
        rotate: true
    });
```
```css
#box {
  width:100%;
  height:300px;
  position: relative;
}
#box span {
    opacity:1;
}
#box span.tHide {
    opacity:0;
}
```

## Copyright and license
Code and documentation copyright 2011-2016 [Le Cinquième Crayon](http://www.cinquiemecrayon.eu). Code released under [the MIT license](https://github.com/pistom/pageconsole.js/blob/master/LICENSE.md).