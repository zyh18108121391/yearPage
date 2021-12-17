(function () {
    function setFontSize() {
        var winWidth = document.documentElement.clientWidth//获取浏览器宽
        //设置root的fontSize
        document.documentElement.style.fontSize = (winWidth / 1920) * 100 + 'px'//（浏览器宽/设计稿宽）*100px;
    }
    var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'//判断是否有旋转属性(有旋转的为平板和移动端)

    var timer = null
    //监听，屏幕旋转，和web端，大小改变事件，
    window.addEventListener(
        evt,
        function () {
            clearTimeout(timer)
            timer = setTimeout(setFontSize, 300)//防止改变过快还未执行
        },
        false
    )
    window.addEventListener(
        'pageshow',
        function (event) {
            if (event.persisted) {
                clearTimeout(timer)
                timer = setTimeout(setFontSize, 300)//页面显示(pageshow)事件
            }
        },
        false
    )
    // 初始化加载js文件时
    setFontSize()
})()
