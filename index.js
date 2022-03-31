//可拖拽Div
function dragDiv(obj) {

        let resize = document.getElementById(obj.resize);

        let left = document.getElementById(obj.left);

        let right = document.getElementById(obj.right);

        let box = document.getElementById(obj.box);

        resize.onmousedown = function (e) {
          let startX = e.clientX;

          resize.left = resize.offsetLeft;

          document.onmousemove = function (e) {
            let endX = e.clientX;

            let moveLen = resize.left + (endX - startX);

            let maxT = box.clientWidth - resize.offsetWidth;
            let minClientWidth=obj.minClientWidth?obj.minClientWidth:200
            let maxClientWidth=obj.maxClientWidth?obj.maxClientWidth:200
            if (moveLen <minClientWidth) moveLen =minClientWidth;

            if (moveLen > maxClientWidth) moveLen = maxClientWidth;

            resize.style.left = moveLen;

            left.style.width = moveLen + "px";

            right.style.width = box.clientWidth - moveLen - 5 + "px";
          };

          document.onmouseup = function (evt) {
            evt.stopPropagation();

            document.onmousemove = null;

            document.onmouseup = null;

            resize.releaseCapture && resize.releaseCapture();
          };

          resize.setCapture && resize.setCapture();

          return false;
    }
}
module.exports = {dragDiv:dragDiv}