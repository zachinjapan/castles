(() => {
    var t = {
            187: () => {
                $(document).ready((function () {
                    $('[data-toggle="tooltip"]').tooltip(), $(".navbar a, footer a[href='#myPage']").on("click", (function (t) {
                        if ("" !== this.hash) {
                            t.preventDefault();
                            var o = this.hash;
                            $("html, body").animate({
                                scrollTop: $(o).offset().top
                            }, 900, (function () {
                                window.location.hash = o
                            }))
                        }
                    }))
                }))
            }
        },
        o = {};

    function e(r) {
        var a = o[r];
        if (void 0 !== a) return a.exports;
        var n = o[r] = {
            exports: {}
        };
        return t[r](n, n.exports, e), n.exports
    }
    e.n = t => {
        var o = t && t.__esModule ? () => t.default : () => t;
        return e.d(o, {
            a: o
        }), o
    }, e.d = (t, o) => {
        for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: o[r]
        })
    }, e.o = (t, o) => Object.prototype.hasOwnProperty.call(t, o), (() => {
        "use strict";
        e(187)
    })()
})();