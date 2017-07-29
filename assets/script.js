window.onload = function() {
    var count_down = document.querySelector("#count-down");
    var count = 5;
    count_down.innerHTML = count;
    var autoJumpInterval = setInterval(function() {
        count_down.innerHTML = --count;
        if(count <= 0) {
            document.location = "http://blog.yinqiu.wang";
        }
    }, 1000);
    window.addEventListener("keydown", function(event) {
        if(event.defaultPrevented) {
            return;
        }
        switch(event.key) {
            case "Escape":
                clearInterval(autoJumpInterval);
                count_down.innerHTML = "好了我不倒计时了，你自己选择吧。";
                // setTimeout(function(){
                //     count_down.remove();
                //     count_down.innerHTML = "";
                // }, 3000);
                break;
            default:
                return;
        }

        event.preventDefault();
    }, true);
}