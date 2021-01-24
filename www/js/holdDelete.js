var mouseIsDown = false;
var timeOutGlobalScope = {}

window.addEventListener('mousedown', function() {
    mouseIsDown = true;
    timeOutGlobalScope.a = setTimeout(function() {
        if(mouseIsDown) {
            alert('hold')
        }
    }, 2000);
});

window.addEventListener('mouseup', function() {
    mouseIsDown = false;
    clearTimeout(timeOutGlobalScope.a);
});