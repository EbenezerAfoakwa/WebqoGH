// navbar scroll top
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");

menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    menuOverlay.classList.toggle("open");
});

window.onscroll = function () {
    transformLogo();
};

const logo = document.querySelector(".logo");

function transformLogo() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        logo.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
    }
}
// navbar scroll top 







// let lastScrollpos = window.pageYOffset;
// let menuButtonCheck = document.querySelector(".menu-btn");
// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (lastScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-85px";
//     }
//     lastScrollpos = currentScrollPos;
//     menuButtonCheck.checked = false;
// } 







// Message bot
var running = false;
function send() {
    if (running == true) return;
    var msg = document.getElementById("message").value;
    if (msg == "") return;
    running = true;
    addMsg(msg);
    //DELEAY MESSAGE RESPOSE Echo
    window.setTimeout(addResponseMsg, 1000, msg);
}
function addMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML =
        "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
        msg +
        "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    //SEND MESSAGE TO API
    document.getElementById("message").value = "";
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
}
function addResponseMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
    running = false;
}
document.getElementById("message").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        send();
    }
});
document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = "none"
        document.getElementById("chatbot_toggle").children[1].style.display = ""
        setTimeout(addResponseMsg, 1000, "Hi if you need any help, please contact us on info@webqo.com. Thanks")
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = ""
        document.getElementById("chatbot_toggle").children[1].style.display = "none"
    }
}
// Message bot








// Animation Effect
(function () {
    var Util,
        __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

    Util = (function () {
        function Util() { }

        Util.prototype.extend = function (custom, defaults) {
            var key, value;
            for (key in custom) {
                value = custom[key];
                if (value != null) {
                    defaults[key] = value;
                }
            }
            return defaults;
        };

        Util.prototype.isMobile = function (agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };

        return Util;

    })();

    this.WOW = (function () {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true
        };

        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = __bind(this.scrollCallback, this);
            this.scrollHandler = __bind(this.scrollHandler, this);
            this.start = __bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
        }

        WOW.prototype.init = function () {
            var _ref;
            this.element = window.document.documentElement;
            if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
                return this.start();
            } else {
                return document.addEventListener('DOMContentLoaded', this.start);
            }
        };

        WOW.prototype.start = function () {
            var box, _i, _len, _ref;
            this.boxes = this.element.getElementsByClassName(this.config.boxClass);
            if (this.boxes.length) {
                if (this.disabled()) {
                    return this.resetStyle();
                } else {
                    _ref = this.boxes;
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        this.applyStyle(box, true);
                    }
                    window.addEventListener('scroll', this.scrollHandler, false);
                    window.addEventListener('resize', this.scrollHandler, false);
                    return this.interval = setInterval(this.scrollCallback, 50);
                }
            }
        };

        WOW.prototype.stop = function () {
            window.removeEventListener('scroll', this.scrollHandler, false);
            window.removeEventListener('resize', this.scrollHandler, false);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };

        WOW.prototype.show = function (box) {
            this.applyStyle(box);
            return box.className = "" + box.className + " " + this.config.animateClass;
        };

        WOW.prototype.applyStyle = function (box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
        };

        WOW.prototype.resetStyle = function () {
            var box, _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                box = _ref[_i];
                _results.push(box.setAttribute('style', 'visibility: visible;'));
            }
            return _results;
        };

        WOW.prototype.customStyle = function (hidden, duration, delay, iteration) {
            var style;
            style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
            if (duration) {
                style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
            }
            if (delay) {
                style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
            }
            if (iteration) {
                style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
            }
            return style;
        };

        WOW.prototype.scrollHandler = function () {
            return this.scrolled = true;
        };

        WOW.prototype.scrollCallback = function () {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function () {
                    var _i, _len, _ref, _results;
                    _ref = this.boxes;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        _results.push(box);
                    }
                    return _results;
                }).call(this);
                if (!this.boxes.length) {
                    return this.stop();
                }
            }
        };

        WOW.prototype.offsetTop = function (element) {
            var top;
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };

        WOW.prototype.isVisible = function (box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = window.pageYOffset;
            viewBottom = viewTop + this.element.clientHeight - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };

        WOW.prototype.util = function () {
            return this._util || (this._util = new Util());
        };

        WOW.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };

        return WOW;

    })();

}).call(this);


wow = new WOW(
{
    animateClass: 'animated',
    offset: 100
}
);
wow.init();
// Animation Effect