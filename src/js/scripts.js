(function(){

    document.getElementById("triangles").drawShapes({
        shape: "triangle",
        qtt:50,
        hideSpeed: 500,
        showSpeed: 150,
        size: {min:10,max:40},
        speed:2000,
        colors:["rgb(253,8,100)","rgb(138,190,43)","rgb(13,195,202)","rgb(128,128,128)"],
        rotate: true
    });

    document.getElementById("rectangles").drawShapes({
        shape: "rectangle",
        qtt:10,
        hideSpeed: 1000,
        showSpeed: 50,
        size: {min:15,max:15},
        speed:250,
        colors:["rgb(253,8,100)","rgb(138,190,43)","rgb(13,195,202)","rgb(128,128,128)"],
        rotate: false
    });

    document.getElementById("ovals").drawShapes({
        shape: "oval",
        qtt:20,
        hideSpeed: 1000,
        showSpeed: 50,
        size: {min:20,max:50},
        speed:1000,
        colors:["rgb(253,8,100)","rgb(138,190,43)","rgb(13,195,202)","rgb(128,128,128)"],
        rotate: true
    });

})();