var div = document.createElement("div");
div.style.border = "1px solid red";
div.style.height = "100px";
div.style.width = "100px";
// div.style.top = "auto"
div.id = "demo";
document.body.appendChild(div);
//设置一个开关，鼠标按下才移动
var x = false;
var position = [
    0,
    0
];
div.onmousedown = (e)=>{
    x = true;
    position = [
        e.clientX,
        e.clientY
    ];
};
document.onmousemove = (e)=>{
    if (x === true) {
        //top是100px字符串， e.clientY是数字
        console.log(e.clientX, e.clientY);
        var deltaX = e.clientX - position[0];
        var deltaY = e.clientY - position[1];
        var top = parseInt(div.style.top) || 0;
        var left = parseInt(div.style.left) || 0;
        // var top = parseInt(div.style.top)
        // var left = parseInt(div.style.left)
        div.style.top = top + deltaY + "px";
        div.style.left = left + deltaX + "px";
        position = [
            e.clientX,
            e.clientY
        ];
    }
};
document.onmouseup = (e)=>{
    x = false;
};

//# sourceMappingURL=index.6bc2c328.js.map
