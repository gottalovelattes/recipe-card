(function() {
    var DEBUG = !1,
        HOST = DEBUG ? "http://test.yumprint.com" : "http://yumprint.com",
        SECURE_HOST = DEBUG ? "https://test.yumprint.com" : "https://yumprint.com",
        API_HOST = DEBUG ? "http://testapi.yumprint.com" : "http://api.yumprint.com",
        SECURE_API_HOST = DEBUG ? "https://testapi.yumprint.com" : "https://api.yumprint.com",
        ANIMATION_TIME = 200,
        MESSAGE_TIME = 1E3,
        TOUCH = "undefined" !== typeof window && "ontouchstart" in window || "undefined" !== typeof navigator && (0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints);
    (function() {
        var a = function(a) {
                return a
            },
            f = function(a, b) {
                return [a, b]
            };
        Array.prototype.shuffle = function() {
            for (var a = 0; a < this.length - 1; ++a) {
                var b = Math.floor(Math.random() * (this.length - a)) + a,
                    d = this[a];
                this[a] = this[b];
                this[b] = d
            }
            return this
        };
        Array.prototype.map = Array.prototype.map || function(a) {
            for (var b = [], d = 0; d < this.length; ++d) b.push(a(this[d], d, this));
            return b
        };
        Array.prototype.filter = Array.prototype.filter || function(a) {
            for (var b = [], d = 0; d < this.length; ++d) a(this[d], d, this) && b.push(this[d]);
            return b
        };
        Array.prototype.every =
            function(c) {
                for (var c = c || a, b = 0; b < this.length; ++b)
                    if (!c(this[b], b, this)) return !1;
                return !0
            };
        Array.prototype.some = function(c) {
            for (var c = c || a, b = 0; b < this.length; ++b)
                if (c(this[b], b, this)) return !0;
            return !1
        };
        Array.prototype.drop = function(c) {
            if ("number" === typeof c) return 0 <= c ? this.slice(c) : this.slice(0, this.length + c);
            if ("function" === typeof c) {
                for (var c = c || a, b = 0; b < this.length; ++b)
                    if (!c(this[b], b, this)) return this.slice(b);
                return []
            }
        };
        Array.prototype.take = function(c) {
            if ("number" === typeof c) return 0 <= c ? this.slice(0,
                c) : this.slice(this.length + c);
            if ("function" === typeof c) {
                for (var c = c || a, b = 0; b < this.length; ++b)
                    if (!c(this[b], b, this)) return this.slice(0, b);
                return this
            }
        };
        Array.prototype.reverse = Array.prototype.reverse || function() {
            for (var a = [], b = this.length - 1; 0 <= b; --b) a.push(this[b]);
            return a
        };
        Array.prototype.first = function() {
            return this.length ? this[0] : null
        };
        Array.prototype.last = function() {
            return this.length ? this[this.length - 1] : null
        };
        Array.prototype.element = function(a) {
            return 0 > a ? this[this.length - a] : this[a]
        };
        Array.prototype.bind =
            function(a) {
                for (var b = [], d = 0; d < this.length; ++d) b = b.concat(a(this[d], d));
                return b
            };
        Array.prototype.distinct = function(c) {
            for (var c = c || a, b = [], d = {}, g = 0; g < this.length; ++g) {
                var f = c(this[g], g);
                f in d || (d[f] = !0, b.push(this[g]))
            }
            return b
        };
        Array.prototype.order = function() {
            var c = arguments;
            c.length || (c = [a]);
            var b = this.slice();
            b.sort(function(a, b) {
                for (var f = 0; f < c.length; ++f) {
                    var e = c[f],
                        h = e(a),
                        e = e(b);
                    if (h < e) return -1;
                    if (e < h) return 1
                }
                return 0
            });
            return b
        };
        Array.prototype.group = function(c, b) {
            for (var c = c || a, b = b || a,
                    d = {}, g = 0; g < this.length; ++g) {
                var f = c(this[g], g, this);
                f in d || (d[f] = []);
                d[f].push(b(this[g], g, d[f].length, this))
            }
            var g = [],
                e;
            for (e in d) "function" !== typeof d[e] && g.push({
                key: e,
                elements: d[e]
            });
            return g
        };
        Array.prototype.groupUntil = function(c, b) {
            for (var c = c || a, b = b || a, d = !1, g, f = [], e = [], h = 0; h < this.length; ++h) {
                var l = c(this[h], h, this);
                if (!d || l !== g) d && (e.push({
                    key: g,
                    elements: f
                }), f = []), g = l, d = !0;
                f.push(b(this[h], h, f.length, this))
            }
            d && e.push({
                key: g,
                elements: f
            });
            return e
        };
        Array.prototype.let = function(a) {
            return a(this)
        };
        Array.prototype.zip = function(a, b) {
            for (var b = b || f, d = [], g = 0; g < this.length && g < a.length; ++g) d.push(b(this[g], a[g], g));
            return d
        };
        Array.fromObject = function(a) {
            var b = [],
                d;
            for (d in a) b.push({
                key: d,
                item: a[d]
            });
            return b
        };
        Array.random = function(a, b) {
            for (var b = b || Math.random, d = [], g = 0; g < a; ++g) d.push(b());
            return d
        };
        Array.prototype.reduce = Array.prototype.reduce || function(a, b) {
            var d, g;
            void 0 === b ? (d = this[g], g = 1) : (d = b, g = 0);
            for (; g < this.length; ++g) d = a(d, this[g], g, this);
            return d
        };
        Array.prototype.reduceRight = Array.prototype.reduceRight ||
            function(a, b) {
                var d, g;
                void 0 === b ? (d = this[this.length - 1], g = this.length - 2) : (d = b, g = this.length - 1);
                for (; 0 <= g; --g) d = a(d, this[g], g, this);
                return d
            };
        Array.prototype.sum = function() {
            return this.reduce(function(a, b) {
                return a + b
            }, 0)
        };
        Array.prototype.max = function(a) {
            return "undefined" === typeof a ? this.reduce(function(a, c) {
                return Math.max(a, c)
            }) : this.reduce(function(a, c) {
                return Math.max(a, c)
            }, a)
        };
        Array.prototype.min = function(a) {
            return "undefined" === typeof a ? this.reduce(function(a, c) {
                return Math.min(a, c)
            }) : this.reduce(function(a,
                c) {
                return Math.min(a, c)
            }, a)
        };
        Array.prototype.count = function() {
            return this.length
        };
        Array.prototype.average = function() {
            return this.sum() / (this.length || 1)
        };
        Array.prototype.indexOf = Array.prototype.indexOf || function(a, b) {
            for (var d = b; d < this.length; ++d)
                if (this[d] === a) return d;
            return -1
        };
        Array.prototype.lastIndexOf = Array.prototype.lastIndexOf || function(a, b) {
            for (var d = b; 0 <= d; --d)
                if (this[d] === a) return d;
            return -1
        };
        Array.prototype.forEach = Array.prototype.forEach || function(a) {
            for (var b = 0; b < this.length; ++b) a(this[b],
                b, this)
        };
        Array.prototype.run = function(a) {
            for (var b = 0; b < this.length; ++b) a(this[b], b, this);
            return this
        };
        Array.prototype.intersect = function(c, b) {
            for (var b = b || a, d = {}, g = 0; g < c.length; ++g) d[b(c[g], g, c)] = !0;
            for (var f = [], g = 0; g < this.length; ++g) {
                var e = b(this[g], g, this);
                e in d && d[e] && (d[e] = !1, f.push(this[g]))
            }
            return f
        };
        Array.prototype.union = function(c, b) {
            for (var b = b || a, d = {}, g = [], f = 0; f < this.length; ++f) {
                var e = b(this[f], f, this);
                e in d || (d[e] = !0, g.push(this[f]))
            }
            for (f = 0; f < c.length; ++f) e = b(c[f], f, c), e in d || (d[e] = !0, g.push(c[f]));
            return g
        };
        Array.prototype.except = function(c, b) {
            for (var b = b || a, d = {}, g = 0; g < c.length; ++g) d[b(c[g], g, c)] = !0;
            for (var f = [], g = 0; g < this.length; ++g) b(this[g], g, this) in d || f.push(this[g]);
            return f
        };
        Array.prototype.toObject = function(a, b) {
            for (var a = a || function(a) {
                    return a.key
                }, b = b || function(a) {
                    return a.item
                }, d = {}, g = 0; g < this.length; ++g) d[a(this[g], g, this)] = b(this[g], g, this);
            return d
        };
        Array.prototype.equals = function(a) {
            if (this.length !== a.length) return !1;
            for (var b = 0; b < this.length; ++b)
                if (this[b] !==
                    a[b]) return !1;
            return !0
        };
        Array.range = function(a, b, d) {
            if (void 0 === b)
                for (var g = [], f = 0; f < a; ++f) g.push(f);
            else {
                d = Math.abs(d || 1) * (b >= a ? 1 : -1);
                g = [];
                for (f = a + 0; 0 > d && f > b || 0 < d && f < b; f += d) g.push(f)
            }
            return g
        };
        Array.repeat = function(a, b) {
            for (var d = [], g = 0; g < b; ++g) d.push(a);
            return d
        };
        Array.empty = function() {
            return []
        };
        Array.make = function() {
            for (var a = [], b = 0; b < arguments.length; ++b) a.push(arguments[b]);
            return a
        };
        Array.prototype.empty = function() {
            return !this.length
        };
        Array.prototype.contains = function(a) {
            return 0 <= this.indexOf(a)
        };
        Array.prototype.flatten = function() {
            for (var a = [], b = 0; b < this.length; ++b) a = a.concat(this[b]);
            return a
        };
        Array.prototype.combine = function(c, b, d, g) {
            for (var b = b || a, d = d || a, g = g || f, k = {}, e = 0; e < c.length; ++e) {
                var h = d(c[e], e, c);
                k[h] = k[h] || [];
                k[h].push([c[e], e])
            }
            d = [];
            for (e = 0; e < this.length; ++e)
                if (h = b(this[e], e, this), h = k[h])
                    for (var l = 0; l < h.length; ++l) d.push(g(this[e], h[l][0], e, h[l][1], this, c));
            return d
        };
        Array.prototype.combineGroup = function(c, b, d, g) {
            for (var b = b || a, d = d || a, g = g || function(a, b) {
                        return {
                            key: a,
                            elements: b
                        }
                    },
                    f = {}, e = 0; e < c.length; ++e) {
                var h = d(c[e], e, c);
                f[h] = f[h] || [];
                f[h].push(c[e])
            }
            c = [];
            for (e = 0; e < this.length; ++e) h = b(this[e], e, this), (h = f[h]) && c.push(g(this[e], h, e, this));
            return c
        };
        Array.prototype.transpose = function() {
            for (var a = [], b = 0; b < this.length; ++b) {
                var d = this[b];
                if (0 === b)
                    for (var g = 0; g < d.length; ++g) a.push([d[g]]);
                else
                    for (g = 0; g < d.length; ++g) a[g].push(d[g])
            }
            return a
        };
        Array.like = function(a) {
            for (var b = [], d = 0; d < a.length; ++d) b.push(a[d]);
            return b
        };
        Number.prototype.to = function(a) {
            return Array.range(this, a)
        }
    })();
    (function(a, f) {
        function c(u) {
            var a = u.length,
                b = j.type(u);
            return j.isWindow(u) ? !1 : 1 === u.nodeType && a ? !0 : "array" === b || "function" !== b && (0 === a || "number" === typeof a && 0 < a && a - 1 in u)
        }

        function b(u, a, b, e) {
            if (j.acceptData(u)) {
                var c = j.expando,
                    d = "string" === typeof a,
                    g = u.nodeType,
                    h = g ? j.cache : u,
                    l = g ? u[c] : u[c] && c;
                if (l && h[l] && (e || h[l].data) || !(d && b === f)) {
                    l || (g ? u[c] = l = wa.pop() || j.guid++ : l = c);
                    h[l] || (h[l] = {}, g || (h[l].toJSON = j.noop));
                    if ("object" === typeof a || "function" === typeof a) e ? h[l] = j.extend(h[l], a) : h[l].data = j.extend(h[l].data,
                        a);
                    u = h[l];
                    e || (u.data || (u.data = {}), u = u.data);
                    b !== f && (u[j.camelCase(a)] = b);
                    d ? (b = u[a], null == b && (b = u[j.camelCase(a)])) : b = u;
                    return b
                }
            }
        }

        function d(u, a, b) {
            if (j.acceptData(u)) {
                var e, c, d, g = u.nodeType,
                    h = g ? j.cache : u,
                    f = g ? u[j.expando] : j.expando;
                if (h[f]) {
                    if (a && (d = b ? h[f] : h[f].data)) {
                        j.isArray(a) ? a = a.concat(j.map(a, j.camelCase)) : a in d ? a = [a] : (a = j.camelCase(a), a = a in d ? [a] : a.split(" "));
                        e = 0;
                        for (c = a.length; e < c; e++) delete d[a[e]];
                        if (!(b ? k : j.isEmptyObject)(d)) return
                    }
                    if (!b && (delete h[f].data, !k(h[f]))) return;
                    g ? j.cleanData([u], !0) : j.support.deleteExpando || h != h.window ? delete h[f] : h[f] = null
                }
            }
        }

        function g(u, a, b) {
            if (b === f && 1 === u.nodeType)
                if (b = "data-" + a.replace(Fb, "-$1").toLowerCase(), b = u.getAttribute(b), "string" === typeof b) {
                    try {
                        b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : Gb.test(b) ? j.parseJSON(b) : b
                    } catch (e) {}
                    j.data(u, a, b)
                } else b = f;
            return b
        }

        function k(u) {
            for (var a in u)
                if (!("data" === a && j.isEmptyObject(u[a])) && "toJSON" !== a) return !1;
            return !0
        }

        function e() {
            return !0
        }

        function h() {
            return !1
        }

        function l(u, a) {
            do u = u[a];
            while (u && 1 !== u.nodeType);
            return u
        }

        function m(u, a, b) {
            a = a || 0;
            if (j.isFunction(a)) return j.grep(u, function(u, e) {
                return !!a.call(u, e, u) === b
            });
            if (a.nodeType) return j.grep(u, function(u) {
                return u === a === b
            });
            if ("string" === typeof a) {
                var e = j.grep(u, function(u) {
                    return 1 === u.nodeType
                });
                if (Tc.test(a)) return j.filter(a, e, !b);
                a = j.filter(a, e)
            }
            return j.grep(u, function(u) {
                return 0 <= j.inArray(u, a) === b
            })
        }

        function n(u) {
            var a = rc.split("|"),
                u = u.createDocumentFragment();
            if (u.createElement)
                for (; a.length;) u.createElement(a.pop());
            return u
        }

        function p(u) {
            var a = u.getAttributeNode("type");
            u.type = (a && a.specified) + "/" + u.type;
            return u
        }

        function q(u) {
            var a = Uc.exec(u.type);
            a ? u.type = a[1] : u.removeAttribute("type");
            return u
        }

        function r(u, a) {
            for (var b, e = 0; null != (b = u[e]); e++) j._data(b, "globalEval", !a || j._data(a[e], "globalEval"))
        }

        function v(u, a) {
            if (1 === a.nodeType && j.hasData(u)) {
                var b, e, c;
                e = j._data(u);
                var d = j._data(a, e),
                    h = e.events;
                if (h)
                    for (b in delete d.handle, d.events = {}, h) {
                        e = 0;
                        for (c = h[b].length; e < c; e++) j.event.add(a, b, h[b][e])
                    }
                d.data && (d.data =
                    j.extend({}, d.data))
            }
        }

        function t(u, a) {
            var b, e, c = 0,
                d = typeof u.getElementsByTagName !== C ? u.getElementsByTagName(a || "*") : typeof u.querySelectorAll !== C ? u.querySelectorAll(a || "*") : f;
            if (!d) {
                d = [];
                for (b = u.childNodes || u; null != (e = b[c]); c++) !a || j.nodeName(e, a) ? d.push(e) : j.merge(d, t(e, a))
            }
            return a === f || a && j.nodeName(u, a) ? j.merge([u], d) : d
        }

        function w(a) {
            Hb.test(a.type) && (a.defaultChecked = a.checked)
        }

        function x(a, b) {
            if (b in a) return b;
            for (var e = b.charAt(0).toUpperCase() + b.slice(1), c = b, d = sc.length; d--;)
                if (b = sc[d] +
                    e, b in a) return b;
            return c
        }

        function z(a, b) {
            a = b || a;
            return "none" === j.css(a, "display") || !j.contains(a.ownerDocument, a)
        }

        function D(a, b) {
            for (var e, c, d, h = [], g = 0, f = a.length; g < f; g++)
                if (c = a[g], c.style)
                    if (h[g] = j._data(c, "olddisplay"), e = c.style.display, b) !h[g] && "none" === e && (c.style.display = ""), "" === c.style.display && z(c) && (h[g] = j._data(c, "olddisplay", I(c.nodeName)));
                    else if (!h[g] && (d = z(c), e && "none" !== e || !d)) j._data(c, "olddisplay", d ? e : j.css(c, "display"));
            for (g = 0; g < f; g++)
                if (c = a[g], c.style && (!b || "none" === c.style.display ||
                        "" === c.style.display)) c.style.display = b ? h[g] || "" : "none";
            return a
        }

        function s(a, b, e) {
            return (a = Vc.exec(b)) ? Math.max(0, a[1] - (e || 0)) + (a[2] || "px") : b
        }

        function y(a, b, e, c, d) {
            for (var b = e === (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0, h = 0; 4 > b; b += 2) "margin" === e && (h += j.css(a, e + Ca[b], !0, d)), c ? ("content" === e && (h -= j.css(a, "padding" + Ca[b], !0, d)), "margin" !== e && (h -= j.css(a, "border" + Ca[b] + "Width", !0, d))) : (h += j.css(a, "padding" + Ca[b], !0, d), "padding" !== e && (h += j.css(a, "border" + Ca[b] + "Width", !0, d)));
            return h
        }

        function M(a, b, e) {
            var c = !0,
                d = "width" === b ? a.offsetWidth : a.offsetHeight,
                h = Da(a),
                g = j.support.boxSizing && "border-box" === j.css(a, "boxSizing", !1, h);
            if (0 >= d || null == d) {
                d = Ea(a, b, h);
                if (0 > d || null == d) d = a.style[b];
                if (jb.test(d)) return d;
                c = g && (j.support.boxSizingReliable || d === a.style[b]);
                d = parseFloat(d) || 0
            }
            return d + y(a, b, e || (g ? "border" : "content"), c, h) + "px"
        }

        function I(a) {
            var b = A,
                e = tc[a];
            if (!e) {
                e = U(a, b);
                if ("none" === e || !e) Va = (Va || j("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement),
                    b = (Va[0].contentWindow || Va[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), e = U(a, b), Va.detach();
                tc[a] = e
            }
            return e
        }

        function U(a, b) {
            var e = j(b.createElement(a)).appendTo(b.body),
                c = j.css(e[0], "display");
            e.remove();
            return c
        }

        function ea(a, b, e, c) {
            var d;
            if (j.isArray(b)) j.each(b, function(b, d) {
                e || Wc.test(a) ? c(a, d) : ea(a + "[" + ("object" === typeof d ? b : "") + "]", d, e, c)
            });
            else if (!e && "object" === j.type(b))
                for (d in b) ea(a + "[" + d + "]", b[d], e, c);
            else c(a, b)
        }

        function J(a) {
            return function(b, e) {
                "string" !==
                typeof b && (e = b, b = "*");
                var c, d = 0,
                    h = b.toLowerCase().match(ja) || [];
                if (j.isFunction(e))
                    for (; c = h[d++];) "+" === c[0] ? (c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(e)) : (a[c] = a[c] || []).push(e)
            }
        }

        function L(a, b, e, c) {
            function d(f) {
                var l;
                h[f] = !0;
                j.each(a[f] || [], function(a, u) {
                    var f = u(b, e, c);
                    if ("string" === typeof f && !g && !h[f]) return b.dataTypes.unshift(f), d(f), !1;
                    if (g) return !(l = f)
                });
                return l
            }
            var h = {},
                g = a === Ib;
            return d(b.dataTypes[0]) || !h["*"] && d("*")
        }

        function F(a, b) {
            var e, c, d = j.ajaxSettings.flatOptions || {};
            for (c in b) b[c] !==
                f && ((d[c] ? a : e || (e = {}))[c] = b[c]);
            e && j.extend(!0, a, e);
            return a
        }

        function Y() {
            try {
                return new a.XMLHttpRequest
            } catch (u) {}
        }

        function ta() {
            setTimeout(function() {
                Ia = f
            });
            return Ia = j.now()
        }

        function na(a, b, e) {
            var c, d, h = 0,
                g = kb.length,
                f = j.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (d) return !1;
                    for (var b = Ia || ta(), b = Math.max(0, k.startTime + k.duration - b), e = 1 - (b / k.duration || 0), c = 0, h = k.tweens.length; c < h; c++) k.tweens[c].run(e);
                    f.notifyWith(a, [k, e, b]);
                    if (1 > e && h) return b;
                    f.resolveWith(a, [k]);
                    return !1
                },
                k =
                f.promise({
                    elem: a,
                    props: j.extend({}, b),
                    opts: j.extend(!0, {
                        specialEasing: {}
                    }, e),
                    originalProperties: b,
                    originalOptions: e,
                    startTime: Ia || ta(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function(b, e) {
                        var c = j.Tween(a, k.opts, b, e, k.opts.specialEasing[b] || k.opts.easing);
                        k.tweens.push(c);
                        return c
                    },
                    stop: function(b) {
                        var e = 0,
                            c = b ? k.tweens.length : 0;
                        if (d) return this;
                        for (d = !0; e < c; e++) k.tweens[e].run(1);
                        b ? f.resolveWith(a, [k, b]) : f.rejectWith(a, [k, b]);
                        return this
                    }
                }),
                b = k.props,
                e = k.opts.specialEasing,
                m, s, n, p;
            for (c in b)
                if (s =
                    j.camelCase(c), n = e[s], m = b[c], j.isArray(m) && (n = m[1], m = b[c] = m[0]), c !== s && (b[s] = m, delete b[c]), (p = j.cssHooks[s]) && "expand" in p)
                    for (c in m = p.expand(m), delete b[s], m) c in b || (b[c] = m[c], e[c] = n);
                else e[s] = n;
            for (; h < g; h++)
                if (c = kb[h].call(k, a, b, k.opts)) return c;
            var q = k;
            j.each(b, function(a, u) {
                for (var b = (Wa[a] || []).concat(Wa["*"]), e = 0, c = b.length; e < c && !b[e].call(q, a, u); e++);
            });
            j.isFunction(k.opts.start) && k.opts.start.call(a, k);
            j.fx.timer(j.extend(l, {
                elem: a,
                anim: k,
                queue: k.opts.queue
            }));
            return k.progress(k.opts.progress).done(k.opts.done,
                k.opts.complete).fail(k.opts.fail).always(k.opts.always)
        }

        function N(a, b, e, c, d) {
            return new N.prototype.init(a, b, e, c, d)
        }

        function ka(a, b) {
            for (var e, c = {
                    height: a
                }, d = 0, b = b ? 1 : 0; 4 > d; d += 2 - b) e = Ca[d], c["margin" + e] = c["padding" + e] = a;
            b && (c.opacity = c.width = a);
            return c
        }

        function ha(a) {
            return j.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W, Z, C = typeof f,
            A = a.document,
            H = a.location,
            aa = a.jQuery,
            la = a.$,
            P = {},
            wa = [],
            lb = wa.concat,
            Xa = wa.push,
            ua = wa.slice,
            mb = wa.indexOf,
            Jb = P.toString,
            Fa = P.hasOwnProperty,
            Ya =
            "1.9.1".trim,
            j = function(a, b) {
                return new j.fn.init(a, b, Z)
            },
            Ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ja = /\S+/g,
            Kb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            Lb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Mb = /^[\],:{}\s]*$/,
            Nb = /(?:^|:|,)(?:\s*\[)+/g,
            Ob = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            Pb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            Qb = /^-ms-/,
            Rb = /-([\da-z])/gi,
            Sb = function(a, b) {
                return b.toUpperCase()
            },
            oa = function(a) {
                if (A.addEventListener || "load" === a.type ||
                    "complete" === A.readyState) ob(), j.ready()
            },
            ob = function() {
                A.addEventListener ? (A.removeEventListener("DOMContentLoaded", oa, !1), a.removeEventListener("load", oa, !1)) : (A.detachEvent("onreadystatechange", oa), a.detachEvent("onload", oa))
            };
        j.fn = j.prototype = {
            jquery: "1.9.1",
            constructor: j,
            init: function(a, b, e) {
                var c;
                if (!a) return this;
                if ("string" === typeof a) {
                    if ((c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Lb.exec(a)) && (c[1] || !b)) {
                        if (c[1]) {
                            if (b = b instanceof j ? b[0] : b, j.merge(this, j.parseHTML(c[1],
                                    b && b.nodeType ? b.ownerDocument || b : A, !0)), nb.test(c[1]) && j.isPlainObject(b))
                                for (c in b)
                                    if (j.isFunction(this[c])) this[c](b[c]);
                                    else this.attr(c, b[c])
                        } else {
                            if ((b = A.getElementById(c[2])) && b.parentNode) {
                                if (b.id !== c[2]) return e.find(a);
                                this.length = 1;
                                this[0] = b
                            }
                            this.context = A;
                            this.selector = a
                        }
                        return this
                    }
                    return !b || b.jquery ? (b || e).find(a) : this.constructor(b).find(a)
                }
                if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                if (j.isFunction(a)) return e.ready(a);
                a.selector !== f && (this.selector = a.selector, this.context =
                    a.context);
                return j.makeArray(a, this)
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ua.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a) {
                a = j.merge(this.constructor(), a);
                a.prevObject = this;
                a.context = this.context;
                return a
            },
            each: function(a, b) {
                return j.each(this, a, b)
            },
            ready: function(a) {
                j.ready.promise().done(a);
                return this
            },
            slice: function() {
                return this.pushStack(ua.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    a = +a + (0 > a ? b : 0);
                return this.pushStack(0 <= a && a < b ? [this[a]] : [])
            },
            map: function(a) {
                return this.pushStack(j.map(this, function(b, e) {
                    return a.call(b, e, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Xa,
            sort: [].sort,
            splice: [].splice
        };
        j.fn.init.prototype = j.fn;
        j.extend = j.fn.extend = function() {
            var a, b, e, c, d, h = arguments[0] || {},
                g = 1,
                l = arguments.length,
                k = !1;
            "boolean" === typeof h && (k = h, h = arguments[1] || {}, g = 2);
            "object" !==
            typeof h && !j.isFunction(h) && (h = {});
            l === g && (h = this, --g);
            for (; g < l; g++)
                if (null != (d = arguments[g]))
                    for (c in d) a = h[c], e = d[c], h !== e && (k && e && (j.isPlainObject(e) || (b = j.isArray(e))) ? (b ? (b = !1, a = a && j.isArray(a) ? a : []) : a = a && j.isPlainObject(a) ? a : {}, h[c] = j.extend(k, a, e)) : e !== f && (h[c] = e));
            return h
        };
        j.extend({
            noConflict: function(b) {
                a.$ === j && (a.$ = la);
                b && a.jQuery === j && (a.jQuery = aa);
                return j
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? j.readyWait++ : j.ready(!0)
            },
            ready: function(a) {
                if (!(!0 === a ? --j.readyWait : j.isReady)) {
                    if (!A.body) return setTimeout(j.ready);
                    j.isReady = !0;
                    !0 !== a && 0 < --j.readyWait || (W.resolveWith(A, [j]), j.fn.trigger && j(A).trigger("ready").off("ready"))
                }
            },
            isFunction: function(a) {
                return "function" === j.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === j.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? String(a) : "object" === typeof a || "function" === typeof a ? P[Jb.call(a)] || "object" : typeof a
            },
            isPlainObject: function(a) {
                if (!a || "object" !==
                    j.type(a) || a.nodeType || j.isWindow(a)) return !1;
                try {
                    if (a.constructor && !Fa.call(a, "constructor") && !Fa.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                for (var e in a);
                return e === f || Fa.call(a, e)
            },
            isEmptyObject: function(a) {
                for (var b in a) return !1;
                return !0
            },
            error: function(a) {
                throw Error(a);
            },
            parseHTML: function(a, b, e) {
                if (!a || "string" !== typeof a) return null;
                "boolean" === typeof b && (e = b, b = !1);
                var b = b || A,
                    c = nb.exec(a),
                    e = !e && [];
                if (c) return [b.createElement(c[1])];
                c = j.buildFragment([a], b,
                    e);
                e && j(e).remove();
                return j.merge([], c.childNodes)
            },
            parseJSON: function(b) {
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (null === b) return b;
                if ("string" === typeof b && (b = j.trim(b)) && Mb.test(b.replace(Ob, "@").replace(Pb, "]").replace(Nb, ""))) return (new Function("return " + b))();
                j.error("Invalid JSON: " + b)
            },
            parseXML: function(b) {
                var e, c;
                if (!b || "string" !== typeof b) return null;
                try {
                    a.DOMParser ? (c = new DOMParser, e = c.parseFromString(b, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(b))
                } catch (d) {
                    e =
                        f
                }(!e || !e.documentElement || e.getElementsByTagName("parsererror").length) && j.error("Invalid XML: " + b);
                return e
            },
            noop: function() {},
            globalEval: function(b) {
                b && j.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(Qb, "ms-").replace(Rb, Sb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, e) {
                var d, h = 0,
                    g = a.length;
                d = c(a);
                if (e)
                    if (d)
                        for (; h < g && !(d = b.apply(a[h], e), !1 === d); h++);
                    else
                        for (h in a) {
                            if (d = b.apply(a[h],
                                    e), !1 === d) break
                        } else if (d)
                            for (; h < g && !(d = b.call(a[h], h, a[h]), !1 === d); h++);
                        else
                            for (h in a)
                                if (d = b.call(a[h], h, a[h]), !1 === d) break;
                return a
            },
            trim: Ya && !Ya.call("\ufeff\u00a0") ? function(a) {
                return null == a ? "" : Ya.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(Kb, "")
            },
            makeArray: function(a, b) {
                var e = b || [];
                null != a && (c(Object(a)) ? j.merge(e, "string" === typeof a ? [a] : a) : Xa.call(e, a));
                return e
            },
            inArray: function(a, b, e) {
                var c;
                if (b) {
                    if (mb) return mb.call(b, a, e);
                    c = b.length;
                    for (e = e ? 0 > e ? Math.max(0, c + e) : e : 0; e < c; e++)
                        if (e in
                            b && b[e] === a) return e
                }
                return -1
            },
            merge: function(a, b) {
                var e = b.length,
                    c = a.length,
                    d = 0;
                if ("number" === typeof e)
                    for (; d < e; d++) a[c++] = b[d];
                else
                    for (; b[d] !== f;) a[c++] = b[d++];
                a.length = c;
                return a
            },
            grep: function(a, b, e) {
                for (var c, d = [], h = 0, g = a.length, e = !!e; h < g; h++) c = !!b(a[h], h), e !== c && d.push(a[h]);
                return d
            },
            map: function(a, b, e) {
                var d, h = 0,
                    g = a.length,
                    f = [];
                if (c(a))
                    for (; h < g; h++) d = b(a[h], h, e), null != d && (f[f.length] = d);
                else
                    for (h in a) d = b(a[h], h, e), null != d && (f[f.length] = d);
                return lb.apply([], f)
            },
            guid: 1,
            proxy: function(a,
                b) {
                var e, c;
                "string" === typeof b && (c = a[b], b = a, a = c);
                if (!j.isFunction(a)) return f;
                e = ua.call(arguments, 2);
                c = function() {
                    return a.apply(b || this, e.concat(ua.call(arguments)))
                };
                c.guid = a.guid = a.guid || j.guid++;
                return c
            },
            access: function(a, b, e, c, d, h, g) {
                var l = 0,
                    k = a.length,
                    m = null == e;
                if ("object" === j.type(e))
                    for (l in d = !0, e) j.access(a, b, l, e[l], !0, h, g);
                else if (c !== f && (d = !0, j.isFunction(c) || (g = !0), m && (g ? (b.call(a, c), b = null) : (m = b, b = function(a, b, e) {
                        return m.call(j(a), e)
                    })), b))
                    for (; l < k; l++) b(a[l], e, g ? c : c.call(a[l], l, b(a[l],
                        e)));
                return d ? a : m ? b.call(a) : k ? b(a[0], e) : h
            },
            now: function() {
                return (new Date).getTime()
            }
        });
        j.ready.promise = function(b) {
            if (!W)
                if (W = j.Deferred(), "complete" === A.readyState) setTimeout(j.ready);
                else if (A.addEventListener) A.addEventListener("DOMContentLoaded", oa, !1), a.addEventListener("load", oa, !1);
            else {
                A.attachEvent("onreadystatechange", oa);
                a.attachEvent("onload", oa);
                var e = !1;
                try {
                    e = null == a.frameElement && A.documentElement
                } catch (c) {}
                e && e.doScroll && function Sc() {
                    if (!j.isReady) {
                        try {
                            e.doScroll("left")
                        } catch (a) {
                            return setTimeout(Sc,
                                50)
                        }
                        ob();
                        j.ready()
                    }
                }()
            }
            return W.promise(b)
        };
        j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            P["[object " + b + "]"] = b.toLowerCase()
        });
        Z = j(A);
        var pb = {};
        j.Callbacks = function(a) {
            var b;
            if ("string" === typeof a) {
                if (!(b = pb[a])) {
                    b = a;
                    var e = pb[b] = {};
                    j.each(b.match(ja) || [], function(a, b) {
                        e[b] = !0
                    });
                    b = e
                }
            } else b = j.extend({}, a);
            var a = b,
                c, d, h, g, l, k, m = [],
                s = !a.once && [],
                n = function(b) {
                    d = a.memory && b;
                    h = !0;
                    l = k || 0;
                    k = 0;
                    g = m.length;
                    for (c = !0; m && l < g; l++)
                        if (!1 === m[l].apply(b[0], b[1]) &&
                            a.stopOnFalse) {
                            d = !1;
                            break
                        }
                    c = !1;
                    m && (s ? s.length && n(s.shift()) : d ? m = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (m) {
                            var b = m.length;
                            (function Xc(b) {
                                j.each(b, function(b, e) {
                                    var c = j.type(e);
                                    "function" === c ? (!a.unique || !p.has(e)) && m.push(e) : e && (e.length && "string" !== c) && Xc(e)
                                })
                            })(arguments);
                            c ? g = m.length : d && (k = b, n(d))
                        }
                        return this
                    },
                    remove: function() {
                        m && j.each(arguments, function(a, b) {
                            for (var e; - 1 < (e = j.inArray(b, m, e));) m.splice(e, 1), c && (e <= g && g--, e <= l && l--)
                        });
                        return this
                    },
                    has: function(a) {
                        return a ? -1 < j.inArray(a, m) : !(!m ||
                            !m.length)
                    },
                    empty: function() {
                        m = [];
                        return this
                    },
                    disable: function() {
                        m = s = d = f;
                        return this
                    },
                    disabled: function() {
                        return !m
                    },
                    lock: function() {
                        s = f;
                        d || p.disable();
                        return this
                    },
                    locked: function() {
                        return !s
                    },
                    fireWith: function(a, b) {
                        b = b || [];
                        b = [a, b.slice ? b.slice() : b];
                        if (m && (!h || s)) c ? s.push(b) : n(b);
                        return this
                    },
                    fire: function() {
                        p.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return p
        };
        j.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", j.Callbacks("once memory"), "resolved"],
                        ["reject", "fail",
                            j.Callbacks("once memory"), "rejected"
                        ],
                        ["notify", "progress", j.Callbacks("memory")]
                    ],
                    e = "pending",
                    c = {
                        state: function() {
                            return e
                        },
                        always: function() {
                            d.done(arguments).fail(arguments);
                            return this
                        },
                        then: function() {
                            var a = arguments;
                            return j.Deferred(function(e) {
                                j.each(b, function(b, u) {
                                    var h = u[0],
                                        g = j.isFunction(a[b]) && a[b];
                                    d[u[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        if (a && j.isFunction(a.promise)) a.promise().done(e.resolve).fail(e.reject).progress(e.notify);
                                        else e[h + "With"](this === c ? e.promise() : this,
                                            g ? [a] : arguments)
                                    })
                                });
                                a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? j.extend(a, c) : c
                        }
                    },
                    d = {};
                c.pipe = c.then;
                j.each(b, function(a, u) {
                    var h = u[2],
                        g = u[3];
                    c[u[1]] = h.add;
                    g && h.add(function() {
                        e = g
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                    d[u[0]] = function() {
                        d[u[0] + "With"](this === d ? c : this, arguments);
                        return this
                    };
                    d[u[0] + "With"] = h.fireWith
                });
                c.promise(d);
                a && a.call(d, d);
                return d
            },
            when: function(a) {
                var b = 0,
                    e = ua.call(arguments),
                    c = e.length,
                    d = 1 !== c || a && j.isFunction(a.promise) ? c : 0,
                    h = 1 === d ? a : j.Deferred(),
                    g = function(a, b, e) {
                        return function(c) {
                            b[a] =
                                this;
                            e[a] = 1 < arguments.length ? ua.call(arguments) : c;
                            e === f ? h.notifyWith(b, e) : --d || h.resolveWith(b, e)
                        }
                    },
                    f, l, k;
                if (1 < c) {
                    f = Array(c);
                    l = Array(c);
                    for (k = Array(c); b < c; b++) e[b] && j.isFunction(e[b].promise) ? e[b].promise().done(g(b, k, e)).fail(h.reject).progress(g(b, l, f)) : --d
                }
                d || h.resolveWith(k, e);
                return h.promise()
            }
        });
        var Tb = j,
            Za;
        var O, Ka, pa, X, La, Ma, Na, $a, qb, ab, B = A.createElement("div");
        B.setAttribute("className", "t");
        B.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        Ka = B.getElementsByTagName("*");
        pa = B.getElementsByTagName("a")[0];
        if (!Ka || !pa || !Ka.length) Za = {};
        else {
            La = A.createElement("select");
            Na = La.appendChild(A.createElement("option"));
            X = B.getElementsByTagName("input")[0];
            pa.style.cssText = "top:1px;float:left;opacity:.5";
            O = {
                getSetAttribute: "t" !== B.className,
                leadingWhitespace: 3 === B.firstChild.nodeType,
                tbody: !B.getElementsByTagName("tbody").length,
                htmlSerialize: !!B.getElementsByTagName("link").length,
                style: /top/.test(pa.getAttribute("style")),
                hrefNormalized: "/a" === pa.getAttribute("href"),
                opacity: /^0.5/.test(pa.style.opacity),
                cssFloat: !!pa.style.cssFloat,
                checkOn: !!X.value,
                optSelected: Na.selected,
                enctype: !!A.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== A.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === A.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            };
            X.checked = !0;
            O.noCloneChecked = X.cloneNode(!0).checked;
            La.disabled = !0;
            O.optDisabled = !Na.disabled;
            try {
                delete B.test
            } catch (uc) {
                O.deleteExpando = !1
            }
            X = A.createElement("input");
            X.setAttribute("value", "");
            O.input = "" === X.getAttribute("value");
            X.value = "t";
            X.setAttribute("type", "radio");
            O.radioValue = "t" === X.value;
            X.setAttribute("checked", "t");
            X.setAttribute("name", "t");
            Ma = A.createDocumentFragment();
            Ma.appendChild(X);
            O.appendChecked = X.checked;
            O.checkClone = Ma.cloneNode(!0).cloneNode(!0).lastChild.checked;
            B.attachEvent && (B.attachEvent("onclick", function() {
                O.noCloneEvent = !1
            }), B.cloneNode(!0).click());
            for (ab in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) B.setAttribute($a =
                "on" + ab, "t"), O[ab + "Bubbles"] = $a in a || !1 === B.attributes[$a].expando;
            B.style.backgroundClip = "content-box";
            B.cloneNode(!0).style.backgroundClip = "";
            O.clearCloneStyle = "content-box" === B.style.backgroundClip;
            j(function() {
                var b, e, c = A.getElementsByTagName("body")[0];
                c && (b = A.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", c.appendChild(b).appendChild(B), B.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = B.getElementsByTagName("td"),
                    e[0].style.cssText = "padding:0;margin:0;border:0;display:none", qb = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", O.reliableHiddenOffsets = qb && 0 === e[0].offsetHeight, B.innerHTML = "", B.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = 4 === B.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== c.offsetTop, a.getComputedStyle && (O.pixelPosition =
                        "1%" !== (a.getComputedStyle(B, null) || {}).top, O.boxSizingReliable = "4px" === (a.getComputedStyle(B, null) || {
                            width: "4px"
                        }).width, e = B.appendChild(A.createElement("div")), e.style.cssText = B.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e.style.marginRight = e.style.width = "0", B.style.width = "1px", O.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), typeof B.style.zoom !== C && (B.innerHTML = "",
                        B.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === B.offsetWidth, B.style.display = "block", B.innerHTML = "<div></div>", B.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== B.offsetWidth, O.inlineBlockNeedsLayout && (c.style.zoom = 1)), c.removeChild(b), B = null)
            });
            Ka = La = Ma = Na = pa = X = null;
            Za = O
        }
        Tb.support = Za;
        var Gb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Fb = /([A-Z])/g;
        j.extend({
            cache: {},
            expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? j.cache[a[j.expando]] : a[j.expando];
                return !!a && !k(a)
            },
            data: function(a, e, c) {
                return b(a, e, c)
            },
            removeData: function(a, b) {
                return d(a, b)
            },
            _data: function(a, e, c) {
                return b(a, e, c, !0)
            },
            _removeData: function(a, b) {
                return d(a, b, !0)
            },
            acceptData: function(a) {
                if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
                var b = a.nodeName &&
                    j.noData[a.nodeName.toLowerCase()];
                return !b || !0 !== b && a.getAttribute("classid") === b
            }
        });
        j.fn.extend({
            data: function(a, b) {
                var e, c, d = this[0],
                    h = 0,
                    l = null;
                if (a === f) {
                    if (this.length && (l = j.data(d), 1 === d.nodeType && !j._data(d, "parsedAttrs"))) {
                        for (e = d.attributes; h < e.length; h++) c = e[h].name, c.indexOf("data-") || (c = j.camelCase(c.slice(5)), g(d, c, l[c]));
                        j._data(d, "parsedAttrs", !0)
                    }
                    return l
                }
                return "object" === typeof a ? this.each(function() {
                    j.data(this, a)
                }) : j.access(this, function(b) {
                    if (b === f) return d ? g(d, a, j.data(d, a)) : null;
                    this.each(function() {
                        j.data(this, a, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    j.removeData(this, a)
                })
            }
        });
        j.extend({
            queue: function(a, b, e) {
                var c;
                if (a) return b = (b || "fx") + "queue", c = j._data(a, b), e && (!c || j.isArray(e) ? c = j._data(a, b, j.makeArray(e)) : c.push(e)), c || []
            },
            dequeue: function(a, b) {
                var b = b || "fx",
                    e = j.queue(a, b),
                    c = e.length,
                    d = e.shift(),
                    h = j._queueHooks(a, b),
                    g = function() {
                        j.dequeue(a, b)
                    };
                "inprogress" === d && (d = e.shift(), c--);
                if (h.cur = d) "fx" === b && e.unshift("inprogress"),
                    delete h.stop, d.call(a, g, h);
                !c && h && h.empty.fire()
            },
            _queueHooks: function(a, b) {
                var e = b + "queueHooks";
                return j._data(a, e) || j._data(a, e, {
                    empty: j.Callbacks("once memory").add(function() {
                        j._removeData(a, b + "queue");
                        j._removeData(a, e)
                    })
                })
            }
        });
        j.fn.extend({
            queue: function(a, b) {
                var e = 2;
                "string" !== typeof a && (b = a, a = "fx", e--);
                return arguments.length < e ? j.queue(this[0], a) : b === f ? this : this.each(function() {
                    var e = j.queue(this, a, b);
                    j._queueHooks(this, a);
                    "fx" === a && "inprogress" !== e[0] && j.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    j.dequeue(this,
                        a)
                })
            },
            delay: function(a, b) {
                a = j.fx ? j.fx.speeds[a] || a : a;
                return this.queue(b || "fx", function(b, e) {
                    var c = setTimeout(b, a);
                    e.stop = function() {
                        clearTimeout(c)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var e, c = 1,
                    d = j.Deferred(),
                    h = this,
                    g = this.length,
                    l = function() {
                        --c || d.resolveWith(h, [h])
                    };
                "string" !== typeof a && (b = a, a = f);
                for (a = a || "fx"; g--;)
                    if ((e = j._data(h[g], a + "queueHooks")) && e.empty) c++, e.empty.add(l);
                l();
                return d.promise(b)
            }
        });
        var xa, rb, bb = /[\t\r\n]/g,
            Ub = /\r/g,
            Vb = /^(?:input|select|textarea|button|object)$/i,
            Wb = /^(?:a|area)$/i,
            sb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            cb = /^(?:checked|selected)$/i,
            va = j.support.getSetAttribute,
            db = j.support.input;
        j.fn.extend({
            attr: function(a, b) {
                return j.access(this, j.attr, a, b, 1 < arguments.length)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    j.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return j.access(this, j.prop, a, b, 1 < arguments.length)
            },
            removeProp: function(a) {
                a = j.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] =
                            f, delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, e, c, d, h, g = 0,
                    f = this.length;
                b = "string" === typeof a && a;
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).addClass(a.call(this, b, this.className))
                });
                if (b)
                    for (b = (a || "").match(ja) || []; g < f; g++)
                        if (e = this[g], c = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bb, " ") : " ")) {
                            for (h = 0; d = b[h++];) 0 > c.indexOf(" " + d + " ") && (c += d + " ");
                            e.className = j.trim(c)
                        }
                return this
            },
            removeClass: function(a) {
                var b, e, c, d, h, g = 0,
                    f = this.length;
                b = 0 === arguments.length ||
                    "string" === typeof a && a;
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).removeClass(a.call(this, b, this.className))
                });
                if (b)
                    for (b = (a || "").match(ja) || []; g < f; g++)
                        if (e = this[g], c = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bb, " ") : "")) {
                            for (h = 0; d = b[h++];)
                                for (; 0 <= c.indexOf(" " + d + " ");) c = c.replace(" " + d + " ", " ");
                            e.className = a ? j.trim(c) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var e = typeof a,
                    c = "boolean" === typeof b;
                return j.isFunction(a) ? this.each(function(e) {
                    j(this).toggleClass(a.call(this,
                        e, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === e)
                        for (var d, h = 0, g = j(this), f = b, l = a.match(ja) || []; d = l[h++];) f = c ? f : !g.hasClass(d), g[f ? "addClass" : "removeClass"](d);
                    else if (e === C || "boolean" === e) this.className && j._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : j._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                for (var a = " " + a + " ", b = 0, e = this.length; b < e; b++)
                    if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(bb, " ").indexOf(a)) return !0;
                return !1
            },
            val: function(a) {
                var b, e, c, d = this[0];
                if (arguments.length) return c = j.isFunction(a), this.each(function(b) {
                    var d = j(this);
                    if (1 === this.nodeType && (b = c ? a.call(this, b, d.val()) : a, null == b ? b = "" : "number" === typeof b ? b += "" : j.isArray(b) && (b = j.map(b, function(a) {
                            return null == a ? "" : a + ""
                        })), e = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], !e || !("set" in e) || e.set(this, b, "value") === f)) this.value = b
                });
                if (d) {
                    if ((e = j.valHooks[d.type] || j.valHooks[d.nodeName.toLowerCase()]) && "get" in e && (b = e.get(d, "value")) !==
                        f) return b;
                    b = d.value;
                    return "string" === typeof b ? b.replace(Ub, "") : null == b ? "" : b
                }
            }
        });
        j.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, e = a.options, c = a.selectedIndex, d = (a = "select-one" === a.type || 0 > c) ? null : [], h = a ? c + 1 : e.length, g = 0 > c ? h : a ? c : 0; g < h; g++)
                            if (b = e[g], (b.selected || g === c) && (j.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !j.nodeName(b.parentNode, "optgroup"))) {
                                b =
                                    j(b).val();
                                if (a) return b;
                                d.push(b)
                            }
                        return d
                    },
                    set: function(a, b) {
                        var e = j.makeArray(b);
                        j(a).find("option").each(function() {
                            this.selected = 0 <= j.inArray(j(this).val(), e)
                        });
                        e.length || (a.selectedIndex = -1);
                        return e
                    }
                }
            },
            attr: function(a, b, e) {
                var c, d, h;
                d = a.nodeType;
                if (a && !(3 === d || 8 === d || 2 === d)) {
                    if (typeof a.getAttribute === C) return j.prop(a, b, e);
                    if (d = 1 !== d || !j.isXMLDoc(a)) b = b.toLowerCase(), c = j.attrHooks[b] || (sb.test(b) ? rb : xa);
                    if (e !== f)
                        if (null === e) j.removeAttr(a, b);
                        else {
                            if (c && d && "set" in c && (h = c.set(a, e, b)) !== f) return h;
                            a.setAttribute(b, e + "");
                            return e
                        }
                    else {
                        if (c && d && "get" in c && null !== (h = c.get(a, b))) return h;
                        typeof a.getAttribute !== C && (h = a.getAttribute(b));
                        return null == h ? f : h
                    }
                }
            },
            removeAttr: function(a, b) {
                var e, c, d = 0,
                    h = b && b.match(ja);
                if (h && 1 === a.nodeType)
                    for (; e = h[d++];) c = j.propFix[e] || e, sb.test(e) ? !va && cb.test(e) ? a[j.camelCase("default-" + e)] = a[c] = !1 : a[c] = !1 : j.attr(a, e, ""), a.removeAttribute(va ? e : c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!j.support.radioValue && "radio" === b && j.nodeName(a, "input")) {
                            var e = a.value;
                            a.setAttribute("type",
                                b);
                            e && (a.value = e);
                            return b
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, e) {
                var c, d, h;
                h = a.nodeType;
                if (a && !(3 === h || 8 === h || 2 === h)) {
                    if (h = 1 !== h || !j.isXMLDoc(a)) b = j.propFix[b] || b, d = j.propHooks[b];
                    return e !== f ? d && "set" in d && (c = d.set(a, e, b)) !== f ? c : a[b] = e : d && "get" in
                        d && null !== (c = d.get(a, b)) ? c : a[b]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Vb.test(a.nodeName) || Wb.test(a.nodeName) && a.href ? 0 : f
                    }
                }
            }
        });
        rb = {
            get: function(a, b) {
                var e = j.prop(a, b),
                    c = "boolean" === typeof e && a.getAttribute(b);
                return (e = "boolean" === typeof e ? db && va ? null != c : cb.test(b) ? a[j.camelCase("default-" + b)] : !!c : a.getAttributeNode(b)) && !1 !== e.value ? b.toLowerCase() : f
            },
            set: function(a, b, e) {
                !1 === b ? j.removeAttr(a, e) : db && va || !cb.test(e) ?
                    a.setAttribute(!va && j.propFix[e] || e, e) : a[j.camelCase("default-" + e)] = a[e] = !0;
                return e
            }
        };
        if (!db || !va) j.attrHooks.value = {
            get: function(a, b) {
                var e = a.getAttributeNode(b);
                return j.nodeName(a, "input") ? a.defaultValue : e && e.specified ? e.value : f
            },
            set: function(a, b, e) {
                if (j.nodeName(a, "input")) a.defaultValue = b;
                else return xa && xa.set(a, b, e)
            }
        };
        va || (xa = j.valHooks.button = {
            get: function(a, b) {
                var e = a.getAttributeNode(b);
                return e && ("id" === b || "name" === b || "coords" === b ? "" !== e.value : e.specified) ? e.value : f
            },
            set: function(a, b,
                e) {
                var c = a.getAttributeNode(e);
                c || a.setAttributeNode(c = a.ownerDocument.createAttribute(e));
                c.value = b += "";
                return "value" === e || b === a.getAttribute(e) ? b : f
            }
        }, j.attrHooks.contenteditable = {
            get: xa.get,
            set: function(a, b, e) {
                xa.set(a, "" === b ? !1 : b, e)
            }
        }, j.each(["width", "height"], function(a, b) {
            j.attrHooks[b] = j.extend(j.attrHooks[b], {
                set: function(a, e) {
                    if ("" === e) return a.setAttribute(b, "auto"), e
                }
            })
        }));
        j.support.hrefNormalized || (j.each(["href", "src", "width", "height"], function(a, b) {
            j.attrHooks[b] = j.extend(j.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return null == a ? f : a
                }
            })
        }), j.each(["href", "src"], function(a, b) {
            j.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }));
        j.support.style || (j.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || f
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        }));
        j.support.enctype || (j.propFix.enctype =
            "encoding");
        j.support.checkOn || j.each(["radio", "checkbox"], function() {
            j.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            }
        });
        j.each(["radio", "checkbox"], function() {
            j.valHooks[this] = j.extend(j.valHooks[this], {
                set: function(a, b) {
                    if (j.isArray(b)) return a.checked = 0 <= j.inArray(j(a).val(), b)
                }
            })
        });
        var eb = /^(?:input|select|textarea)$/i,
            Xb = /^key/,
            Yb = /^(?:mouse|contextmenu)|click/,
            tb = /^(?:focusinfocus|focusoutblur)$/,
            ub = /^([^.]*)(?:\.(.+)|)$/;
        j.event = {
            global: {},
            add: function(a,
                b, e, c, d) {
                var h, g, l, k, m, s, n, p, q;
                if (l = j._data(a)) {
                    e.handler && (k = e, e = k.handler, d = k.selector);
                    e.guid || (e.guid = j.guid++);
                    if (!(g = l.events)) g = l.events = {};
                    if (!(m = l.handle)) m = l.handle = function(a) {
                        return typeof j !== C && (!a || j.event.triggered !== a.type) ? j.event.dispatch.apply(m.elem, arguments) : f
                    }, m.elem = a;
                    b = (b || "").match(ja) || [""];
                    for (l = b.length; l--;) {
                        h = ub.exec(b[l]) || [];
                        p = s = h[1];
                        q = (h[2] || "").split(".").sort();
                        h = j.event.special[p] || {};
                        p = (d ? h.delegateType : h.bindType) || p;
                        h = j.event.special[p] || {};
                        s = j.extend({
                            type: p,
                            origType: s,
                            data: c,
                            handler: e,
                            guid: e.guid,
                            selector: d,
                            needsContext: d && j.expr.match.needsContext.test(d),
                            namespace: q.join(".")
                        }, k);
                        if (!(n = g[p]))
                            if (n = g[p] = [], n.delegateCount = 0, !h.setup || !1 === h.setup.call(a, c, q, m)) a.addEventListener ? a.addEventListener(p, m, !1) : a.attachEvent && a.attachEvent("on" + p, m);
                        h.add && (h.add.call(a, s), s.handler.guid || (s.handler.guid = e.guid));
                        d ? n.splice(n.delegateCount++, 0, s) : n.push(s);
                        j.event.global[p] = !0
                    }
                    a = null
                }
            },
            remove: function(a, b, e, c, d) {
                var h, g, f, l, k, m, s, n, p, q, ca, y = j.hasData(a) &&
                    j._data(a);
                if (y && (m = y.events)) {
                    b = (b || "").match(ja) || [""];
                    for (k = b.length; k--;)
                        if (f = ub.exec(b[k]) || [], p = ca = f[1], q = (f[2] || "").split(".").sort(), p) {
                            s = j.event.special[p] || {};
                            p = (c ? s.delegateType : s.bindType) || p;
                            n = m[p] || [];
                            f = f[2] && RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            for (l = h = n.length; h--;)
                                if (g = n[h], (d || ca === g.origType) && (!e || e.guid === g.guid) && (!f || f.test(g.namespace)) && (!c || c === g.selector || "**" === c && g.selector)) n.splice(h, 1), g.selector && n.delegateCount--, s.remove && s.remove.call(a, g);
                            l && !n.length &&
                                ((!s.teardown || !1 === s.teardown.call(a, q, y.handle)) && j.removeEvent(a, p, y.handle), delete m[p])
                        } else
                            for (p in m) j.event.remove(a, p + b[k], e, c, !0);
                    j.isEmptyObject(m) && (delete y.handle, j._removeData(a, "events"))
                }
            },
            trigger: function(b, e, c, d) {
                var h, g, l, k, m, s, n = [c || A],
                    p = Fa.call(b, "type") ? b.type : b;
                m = Fa.call(b, "namespace") ? b.namespace.split(".") : [];
                l = h = c = c || A;
                if (!(3 === c.nodeType || 8 === c.nodeType) && !tb.test(p + j.event.triggered))
                    if (0 <= p.indexOf(".") && (m = p.split("."), p = m.shift(), m.sort()), g = 0 > p.indexOf(":") && "on" +
                        p, b = b[j.expando] ? b : new j.Event(p, "object" === typeof b && b), b.isTrigger = !0, b.namespace = m.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = f, b.target || (b.target = c), e = null == e ? [b] : j.makeArray(e, [b]), m = j.event.special[p] || {}, d || !(m.trigger && !1 === m.trigger.apply(c, e))) {
                        if (!d && !m.noBubble && !j.isWindow(c)) {
                            k = m.delegateType || p;
                            tb.test(k + p) || (l = l.parentNode);
                            for (; l; l = l.parentNode) n.push(l), h = l;
                            if (h === (c.ownerDocument || A)) n.push(h.defaultView || h.parentWindow ||
                                a)
                        }
                        for (s = 0;
                            (l = n[s++]) && !b.isPropagationStopped();) b.type = 1 < s ? k : m.bindType || p, (h = (j._data(l, "events") || {})[b.type] && j._data(l, "handle")) && h.apply(l, e), (h = g && l[g]) && (j.acceptData(l) && h.apply && !1 === h.apply(l, e)) && b.preventDefault();
                        b.type = p;
                        if (!d && !b.isDefaultPrevented() && (!m._default || !1 === m._default.apply(c.ownerDocument, e)) && !("click" === p && j.nodeName(c, "a")) && j.acceptData(c) && g && c[p] && !j.isWindow(c)) {
                            (h = c[g]) && (c[g] = null);
                            j.event.triggered = p;
                            try {
                                c[p]()
                            } catch (q) {}
                            j.event.triggered = f;
                            h && (c[g] = h)
                        }
                        return b.result
                    }
            },
            dispatch: function(a) {
                var a = j.event.fix(a),
                    b, e, c, d, h = [],
                    g = ua.call(arguments);
                b = (j._data(this, "events") || {})[a.type] || [];
                var l = j.event.special[a.type] || {};
                g[0] = a;
                a.delegateTarget = this;
                if (!(l.preDispatch && !1 === l.preDispatch.call(this, a))) {
                    h = j.event.handlers.call(this, a, b);
                    for (b = 0;
                        (c = h[b++]) && !a.isPropagationStopped();) {
                        a.currentTarget = c.elem;
                        for (d = 0;
                            (e = c.handlers[d++]) && !a.isImmediatePropagationStopped();)
                            if (!a.namespace_re || a.namespace_re.test(e.namespace))
                                if (a.handleObj = e, a.data = e.data, e = ((j.event.special[e.origType] || {}).handle || e.handler).apply(c.elem, g), e !== f && !1 === (a.result = e)) a.preventDefault(), a.stopPropagation()
                    }
                    l.postDispatch && l.postDispatch.call(this, a);
                    return a.result
                }
            },
            handlers: function(a, b) {
                var e, c, d, h, g = [],
                    l = b.delegateCount,
                    k = a.target;
                if (l && k.nodeType && (!a.button || "click" !== a.type))
                    for (; k != this; k = k.parentNode || this)
                        if (1 === k.nodeType && (!0 !== k.disabled || "click" !== a.type)) {
                            d = [];
                            for (h = 0; h < l; h++) c = b[h], e = c.selector + " ", d[e] === f && (d[e] = c.needsContext ? 0 <= j(e, this).index(k) : j.find(e, this, null, [k]).length),
                                d[e] && d.push(c);
                            d.length && g.push({
                                elem: k,
                                handlers: d
                            })
                        }
                l < b.length && g.push({
                    elem: this,
                    handlers: b.slice(l)
                });
                return g
            },
            fix: function(a) {
                if (a[j.expando]) return a;
                var b, e, c;
                b = a.type;
                var d = a,
                    h = this.fixHooks[b];
                h || (this.fixHooks[b] = h = Yb.test(b) ? this.mouseHooks : Xb.test(b) ? this.keyHooks : {});
                c = h.props ? this.props.concat(h.props) : this.props;
                a = new j.Event(d);
                for (b = c.length; b--;) e = c[b], a[e] = d[e];
                a.target || (a.target = d.srcElement || A);
                3 === a.target.nodeType && (a.target = a.target.parentNode);
                a.metaKey = !!a.metaKey;
                return h.filter ?
                    h.filter(a, d) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function(a, b) {
                    null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var e, c, d = b.button,
                        h = b.fromElement;
                    null ==
                        a.pageX && null != b.clientX && (e = a.target.ownerDocument || A, c = e.documentElement, e = e.body, a.pageX = b.clientX + (c && c.scrollLeft || e && e.scrollLeft || 0) - (c && c.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (c && c.scrollTop || e && e.scrollTop || 0) - (c && c.clientTop || e && e.clientTop || 0));
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h);
                    !a.which && d !== f && (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                    return a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (j.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== A.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === A.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== f && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, e, c) {
                a = j.extend(new j.Event, e, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                c ? j.event.trigger(a, null, b) : j.event.dispatch.call(b, a);
                a.isDefaultPrevented() &&
                    e.preventDefault()
            }
        };
        j.removeEvent = A.removeEventListener ? function(a, b, e) {
            a.removeEventListener && a.removeEventListener(b, e, !1)
        } : function(a, b, e) {
            b = "on" + b;
            a.detachEvent && (typeof a[b] === C && (a[b] = null), a.detachEvent(b, e))
        };
        j.Event = function(a, b) {
            if (!(this instanceof j.Event)) return new j.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? e : h) : this.type = a;
            b && j.extend(this, b);
            this.timeStamp =
                a && a.timeStamp || j.now();
            this[j.expando] = !0
        };
        j.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = e;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = e;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = e;
                this.stopPropagation()
            }
        };
        j.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            j.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var e, c = a.relatedTarget,
                        d = a.handleObj;
                    if (!c || c !== this && !j.contains(this, c)) a.type = d.origType, e = d.handler.apply(this, arguments), a.type = b;
                    return e
                }
            }
        });
        j.support.submitBubbles || (j.event.special.submit = {
            setup: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.add(this, "click._submit keypress._submit", function(a) {
                    a = a.target;
                    if ((a = j.nodeName(a, "input") || j.nodeName(a, "button") ?
                            a.form : f) && !j._data(a, "submitBubbles")) j.event.add(a, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), j._data(a, "submitBubbles", !0)
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && j.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.remove(this, "._submit")
            }
        });
        j.support.changeBubbles || (j.event.special.change = {
            setup: function() {
                if (eb.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" ===
                        this.type) j.event.add(this, "propertychange._change", function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }), j.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1);
                        j.event.simulate("change", this, a, !0)
                    });
                    return !1
                }
                j.event.add(this, "beforeactivate._change", function(a) {
                    a = a.target;
                    eb.test(a.nodeName) && !j._data(a, "changeBubbles") && (j.event.add(a, "change._change", function(a) {
                        this.parentNode && (!a.isSimulated && !a.isTrigger) && j.event.simulate("change",
                            this.parentNode, a, !0)
                    }), j._data(a, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                j.event.remove(this, "._change");
                return !eb.test(this.nodeName)
            }
        });
        j.support.focusinBubbles || j.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var e = 0,
                c = function(a) {
                    j.event.simulate(b, a.target, j.event.fix(a), !0)
                };
            j.event.special[b] = {
                setup: function() {
                    0 === e++ &&
                        A.addEventListener(a, c, !0)
                },
                teardown: function() {
                    0 === --e && A.removeEventListener(a, c, !0)
                }
            }
        });
        j.fn.extend({
            on: function(a, b, e, c, d) {
                var g, l;
                if ("object" === typeof a) {
                    "string" !== typeof b && (e = e || b, b = f);
                    for (g in a) this.on(g, b, e, a[g], d);
                    return this
                }
                null == e && null == c ? (c = b, e = b = f) : null == c && ("string" === typeof b ? (c = e, e = f) : (c = e, e = b, b = f));
                if (!1 === c) c = h;
                else if (!c) return this;
                1 === d && (l = c, c = function(a) {
                    j().off(a);
                    return l.apply(this, arguments)
                }, c.guid = l.guid || (l.guid = j.guid++));
                return this.each(function() {
                    j.event.add(this,
                        a, c, e, b)
                })
            },
            one: function(a, b, e, c) {
                return this.on(a, b, e, c, 1)
            },
            off: function(a, b, e) {
                var c;
                if (a && a.preventDefault && a.handleObj) return c = a.handleObj, j(a.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this;
                if ("object" === typeof a) {
                    for (c in a) this.off(c, b, a[c]);
                    return this
                }
                if (!1 === b || "function" === typeof b) e = b, b = f;
                !1 === e && (e = h);
                return this.each(function() {
                    j.event.remove(this, a, e, b)
                })
            },
            bind: function(a, b, e) {
                return this.on(a, null, b, e)
            },
            unbind: function(a, b) {
                return this.off(a,
                    null, b)
            },
            delegate: function(a, b, e, c) {
                return this.on(b, a, e, c)
            },
            undelegate: function(a, b, e) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", e)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    j.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var e = this[0];
                if (e) return j.event.trigger(a, b, e, !0)
            }
        });
        var fb = a,
            gb = function() {
                var a, b = [];
                return a = function(e, c) {
                    b.push(e += " ") > E.cacheLength && delete a[b.shift()];
                    return a[e] = c
                }
            },
            fa = function(a) {
                a[Q] = !0;
                return a
            },
            qa = function(a) {
                var b = ba.createElement("div");
                try {
                    return a(b)
                } catch (e) {
                    return !1
                } finally {}
            },
            G = function(a, b, e, c) {
                var d, h, g, f, l;
                (b ? b.ownerDocument || b : Ga) !== ba && Oa(b);
                b = b || ba;
                e = e || [];
                if (!a || "string" !== typeof a) return e;
                if (1 !== (f = b.nodeType) && 9 !== f) return [];
                if (!ma && !c) {
                    if (d = Yc.exec(a))
                        if (g = d[1])
                            if (9 === f)
                                if ((h = b.getElementById(g)) && h.parentNode) {
                                    if (h.id === g) return e.push(h), e
                                } else return e;
                    else {
                        if (b.ownerDocument && (h = b.ownerDocument.getElementById(g)) && hb(b, h) && h.id === g) return e.push(h), e
                    } else {
                        if (d[2]) return Pa.apply(e, Qa.call(b.getElementsByTagName(a),
                            0)), e;
                        if ((g = d[3]) && S.getByClassName && b.getElementsByClassName) return Pa.apply(e, Qa.call(b.getElementsByClassName(g), 0)), e
                    }
                    if (S.qsa && !ra.test(a)) {
                        d = !0;
                        h = Q;
                        g = b;
                        l = 9 === f && a;
                        if (1 === f && "object" !== b.nodeName.toLowerCase()) {
                            f = R(a);
                            (d = b.getAttribute("id")) ? h = d.replace(Zc, "\\$&"): b.setAttribute("id", h);
                            h = "[id='" + h + "'] ";
                            for (g = f.length; g--;) f[g] = h + K(f[g]);
                            g = Zb.test(a) && b.parentNode || b;
                            l = f.join(",")
                        }
                        if (l) try {
                            return Pa.apply(e, Qa.call(g.querySelectorAll(l), 0)), e
                        } catch (k) {} finally {
                            d || b.removeAttribute("id")
                        }
                    }
                }
                var j;
                a: {
                    a = a.replace(vb, "$1");h = R(a);
                    if (!c && 1 === h.length) {
                        d = h[0] = h[0].slice(0);
                        if (2 < d.length && "ID" === (j = d[0]).type && 9 === b.nodeType && !ma && E.relative[d[1].type]) {
                            b = E.find.ID(j.matches[0].replace(ya, za), b)[0];
                            if (!b) {
                                j = e;
                                break a
                            }
                            a = a.slice(d.shift().value.length)
                        }
                        for (f = wb.needsContext.test(a) ? 0 : d.length; f--;) {
                            j = d[f];
                            if (E.relative[g = j.type]) break;
                            if (g = E.find[g])
                                if (c = g(j.matches[0].replace(ya, za), Zb.test(d[0].type) && b.parentNode || b)) {
                                    d.splice(f, 1);
                                    a = c.length && K(d);
                                    if (!a) {
                                        Pa.apply(e, Qa.call(c, 0));
                                        j = e;
                                        break a
                                    }
                                    break
                                }
                        }
                    }
                    $b(a,
                        h)(c, b, ma, e, Zb.test(a));j = e
                }
                return j
            },
            xb = function(a, b) {
                var e = b && a,
                    c = e && (~b.sourceIndex || vc) - (~a.sourceIndex || vc);
                if (c) return c;
                if (e)
                    for (; e = e.nextSibling;)
                        if (e === b) return -1;
                return a ? 1 : -1
            },
            ac = function(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a
                }
            },
            bc = function(a) {
                return function(b) {
                    var e = b.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && b.type === a
                }
            },
            ca = function(a) {
                return fa(function(b) {
                    b = +b;
                    return fa(function(e, c) {
                        for (var d, h = a([], e.length, b), g = h.length; g--;)
                            if (e[d =
                                    h[g]]) e[d] = !(c[d] = e[d])
                    })
                })
            },
            R = function(a, b) {
                var e, c, d, h, g, f, l;
                if (g = wc[a + " "]) return b ? 0 : g.slice(0);
                g = a;
                f = [];
                for (l = E.preFilter; g;) {
                    if (!e || (c = $c.exec(g))) c && (g = g.slice(c[0].length) || g), f.push(d = []);
                    e = !1;
                    if (c = ad.exec(g)) e = c.shift(), d.push({
                        value: e,
                        type: c[0].replace(vb, " ")
                    }), g = g.slice(e.length);
                    for (h in E.filter)
                        if ((c = wb[h].exec(g)) && (!l[h] || (c = l[h](c)))) e = c.shift(), d.push({
                            value: e,
                            type: h,
                            matches: c
                        }), g = g.slice(e.length);
                    if (!e) break
                }
                return b ? g.length : g ? G.error(a) : wc(a, f).slice(0)
            },
            K = function(a) {
                for (var b =
                        0, e = a.length, c = ""; b < e; b++) c += a[b].value;
                return c
            },
            cc = function(a, b, e) {
                var c = b.dir,
                    d = e && "parentNode" === c,
                    h = bd++;
                return b.first ? function(b, e, h) {
                    for (; b = b[c];)
                        if (1 === b.nodeType || d) return a(b, e, h)
                } : function(b, e, g) {
                    var f, l, k, j = sa + " " + h;
                    if (g)
                        for (; b = b[c];) {
                            if ((1 === b.nodeType || d) && a(b, e, g)) return !0
                        } else
                            for (; b = b[c];)
                                if (1 === b.nodeType || d)
                                    if (k = b[Q] || (b[Q] = {}), (l = k[c]) && l[0] === j) {
                                        if (!0 === (f = l[1]) || f === yb) return !0 === f
                                    } else if (l = k[c] = [j], l[1] = a(b, e, g) || yb, !0 === l[1]) return !0
                }
            },
            dc = function(a) {
                return 1 < a.length ? function(b,
                    e, c) {
                    for (var d = a.length; d--;)
                        if (!a[d](b, e, c)) return !1;
                    return !0
                } : a[0]
            },
            zb = function(a, b, e, c, d) {
                for (var h, g = [], f = 0, l = a.length, k = null != b; f < l; f++)
                    if (h = a[f])
                        if (!e || e(h, c, d)) g.push(h), k && b.push(f);
                return g
            },
            ec = function(a, b, e, c, d, h) {
                c && !c[Q] && (c = ec(c));
                d && !d[Q] && (d = ec(d, h));
                return fa(function(h, g, f, l) {
                    var k, j, m = [],
                        s = [],
                        n = g.length,
                        p;
                    if (!(p = h)) {
                        p = b || "*";
                        for (var T = f.nodeType ? [f] : f, q = [], y = 0, ca = T.length; y < ca; y++) G(p, T[y], q);
                        p = q
                    }
                    p = a && (h || !b) ? zb(p, m, a, f, l) : p;
                    T = e ? d || (h ? a : n || c) ? [] : g : p;
                    e && e(p, T, f, l);
                    if (c) {
                        k = zb(T, s);
                        c(k, [], f, l);
                        for (f = k.length; f--;)
                            if (j = k[f]) T[s[f]] = !(p[s[f]] = j)
                    }
                    if (h) {
                        if (d || a) {
                            if (d) {
                                k = [];
                                for (f = T.length; f--;)
                                    if (j = T[f]) k.push(p[f] = j);
                                d(null, T = [], k, l)
                            }
                            for (f = T.length; f--;)
                                if ((j = T[f]) && -1 < (k = d ? fc.call(h, j) : m[f])) h[k] = !(g[k] = j)
                        }
                    } else T = zb(T === g ? T.splice(n, T.length) : T), d ? d(null, g, T, l) : Pa.apply(g, T)
                })
            },
            gc = function(a) {
                var b, e, c, d = a.length,
                    h = E.relative[a[0].type];
                e = h || E.relative[" "];
                for (var g = h ? 1 : 0, f = cc(function(a) {
                        return a === b
                    }, e, !0), l = cc(function(a) {
                        return -1 < fc.call(b, a)
                    }, e, !0), k = [function(a, e, c) {
                        return !h &&
                            (c || e !== Ab) || ((b = e).nodeType ? f(a, e, c) : l(a, e, c))
                    }]; g < d; g++)
                    if (e = E.relative[a[g].type]) k = [cc(dc(k), e)];
                    else {
                        e = E.filter[a[g].type].apply(null, a[g].matches);
                        if (e[Q]) {
                            for (c = ++g; c < d && !E.relative[a[c].type]; c++);
                            return ec(1 < g && dc(k), 1 < g && K(a.slice(0, g - 1)).replace(vb, "$1"), e, g < c && gc(a.slice(g, c)), c < d && gc(a = a.slice(c)), c < d && K(a))
                        }
                        k.push(e)
                    }
                return dc(k)
            },
            xc = function() {},
            Ra, yb, E, Bb, yc, $b, Sa, Ab, Oa, ba, ga, ma, ra, Ta, Cb, hb, hc, Q = "sizzle" + -new Date,
            Ga = fb.document,
            S = {},
            sa = 0,
            bd = 0,
            zc = gb(),
            wc = gb(),
            Ac = gb(),
            vc = -2147483648,
            Db = [],
            cd = Db.pop,
            Pa = Db.push,
            Qa = Db.slice,
            fc = Db.indexOf || function(a) {
                for (var b = 0, e = this.length; b < e; b++)
                    if (this[b] === a) return b;
                return -1
            },
            Bc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            Cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Bc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            ic = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Cc.replace(3, 8) + ")*)|.*)\\)|)",
            vb = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            $c = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ad = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
            dd = RegExp(ic),
            ed = RegExp("^" + Bc + "$"),
            wb = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                NAME: /^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,
                TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + Cc),
                PSEUDO: RegExp("^" + ic),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                    "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
            Zb = /[\x20\t\r\n\f]*[+~]/,
            jc = /^[^{]+\{\s*\[native code/,
            Yc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            fd = /^(?:input|select|textarea|button)$/i,
            gd = /^h\d$/i,
            Zc = /'|\\/g,
            hd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            ya = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            za = function(a, b) {
                var e = "0x" + b - 65536;
                return e !== e ? b : 0 > e ? String.fromCharCode(e + 65536) :
                    String.fromCharCode(e >> 10 | 55296, e & 1023 | 56320)
            };
        try {
            Qa.call(Ga.documentElement.childNodes, 0)[0].nodeType
        } catch (Gd) {
            Qa = function(a) {
                for (var b, e = []; b = this[a++];) e.push(b);
                return e
            }
        }
        yc = G.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        Oa = G.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : Ga;
            if (b === ba || 9 !== b.nodeType || !b.documentElement) return ba;
            ba = b;
            ga = b.documentElement;
            ma = yc(b);
            S.tagNameNoComments = qa(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            S.attributes = qa(function(a) {
                a.innerHTML = "<select></select>";
                a = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== a && "string" !== a
            });
            S.getByClassName = qa(function(a) {
                a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!a.getElementsByClassName || !a.getElementsByClassName("e").length) return !1;
                a.lastChild.className = "e";
                return 2 === a.getElementsByClassName("e").length
            });
            S.getByName = qa(function(a) {
                a.id = Q + 0;
                a.innerHTML = "<a name='" + Q + "'></a><div name='" + Q + "'></div>";
                ga.insertBefore(a,
                    ga.firstChild);
                var e = b.getElementsByName && b.getElementsByName(Q).length === 2 + b.getElementsByName(Q + 0).length;
                S.getIdNotName = !b.getElementById(Q);
                ga.removeChild(a);
                return e
            });
            E.attrHandle = qa(function(a) {
                a.innerHTML = "<a href='#'></a>";
                return a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href")
            }) ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            };
            S.getIdNotName ? (E.find.ID = function(a, b) {
                if ("undefined" !==
                    typeof b.getElementById && !ma) {
                    var e = b.getElementById(a);
                    return e && e.parentNode ? [e] : []
                }
            }, E.filter.ID = function(a) {
                var b = a.replace(ya, za);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (E.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && !ma) {
                    var e = b.getElementById(a);
                    return e ? e.id === a || "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id").value === a ? [e] : void 0 : []
                }
            }, E.filter.ID = function(a) {
                var b = a.replace(ya, za);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode &&
                        a.getAttributeNode("id")) && a.value === b
                }
            });
            E.find.TAG = S.tagNameNoComments ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a)
            } : function(a, b) {
                var e, c = [],
                    d = 0,
                    h = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; e = h[d++];) 1 === e.nodeType && c.push(e);
                    return c
                }
                return h
            };
            E.find.NAME = S.getByName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByName) return b.getElementsByName(name)
            };
            E.find.CLASS = S.getByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName &&
                    !ma) return b.getElementsByClassName(a)
            };
            Ta = [];
            ra = [":focus"];
            if (S.qsa = jc.test(b.querySelectorAll + "")) qa(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || ra.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                a.querySelectorAll(":checked").length || ra.push(":checked")
            }), qa(function(a) {
                a.innerHTML = "<input type='hidden' i=''/>";
                a.querySelectorAll("[i^='']").length && ra.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                a.querySelectorAll(":enabled").length || ra.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                ra.push(",.*:")
            });
            var a = S,
                e;
            e = Cb = ga.matchesSelector || ga.mozMatchesSelector || ga.webkitMatchesSelector || ga.oMatchesSelector || ga.msMatchesSelector;
            e = jc.test(e + "");
            (a.matchesSelector = e) && qa(function(a) {
                S.disconnectedMatch = Cb.call(a, "div");
                Cb.call(a, "[s!='']:x");
                Ta.push("!=", ic)
            });
            ra = RegExp(ra.join("|"));
            Ta = RegExp(Ta.join("|"));
            hb = jc.test(ga.contains + "") || ga.compareDocumentPosition ? function(a, b) {
                var e = 9 ===
                    a.nodeType ? a.documentElement : a,
                    c = b && b.parentNode;
                return a === c || !(!c || !(1 === c.nodeType && (e.contains ? e.contains(c) : a.compareDocumentPosition && a.compareDocumentPosition(c) & 16)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            hc = ga.compareDocumentPosition ? function(a, e) {
                var c;
                return a === e ? (Sa = !0, 0) : (c = e.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(e)) ? c & 1 || a.parentNode && 11 === a.parentNode.nodeType ? a === b || hb(Ga, a) ? -1 : e === b || hb(Ga, e) ? 1 : 0 : c & 4 ? -1 : 1 : a.compareDocumentPosition ?
                    -1 : 1
            } : function(a, e) {
                var c, d = 0;
                c = a.parentNode;
                var h = e.parentNode,
                    g = [a],
                    f = [e];
                if (a === e) return Sa = !0, 0;
                if (!c || !h) return a === b ? -1 : e === b ? 1 : c ? -1 : h ? 1 : 0;
                if (c === h) return xb(a, e);
                for (c = a; c = c.parentNode;) g.unshift(c);
                for (c = e; c = c.parentNode;) f.unshift(c);
                for (; g[d] === f[d];) d++;
                return d ? xb(g[d], f[d]) : g[d] === Ga ? -1 : f[d] === Ga ? 1 : 0
            };
            Sa = !1;
            [0, 0].sort(hc);
            S.detectDuplicates = Sa;
            return ba
        };
        G.matches = function(a, b) {
            return G(a, null, null, b)
        };
        G.matchesSelector = function(a, b) {
            (a.ownerDocument || a) !== ba && Oa(a);
            b = b.replace(hd, "='$1']");
            if (S.matchesSelector && !ma && (!Ta || !Ta.test(b)) && !ra.test(b)) try {
                var e = Cb.call(a, b);
                if (e || S.disconnectedMatch || a.document && 11 !== a.document.nodeType) return e
            } catch (c) {}
            return 0 < G(b, ba, null, [a]).length
        };
        G.contains = function(a, b) {
            (a.ownerDocument || a) !== ba && Oa(a);
            return hb(a, b)
        };
        G.attr = function(a, b) {
            var e;
            (a.ownerDocument || a) !== ba && Oa(a);
            ma || (b = b.toLowerCase());
            return (e = E.attrHandle[b]) ? e(a) : ma || S.attributes ? a.getAttribute(b) : ((e = a.getAttributeNode(b)) || a.getAttribute(b)) && !0 === a[b] ? b : e && e.specified ? e.value :
                null
        };
        G.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        G.uniqueSort = function(a) {
            var b, e = [],
                c = 1,
                d = 0;
            Sa = !S.detectDuplicates;
            a.sort(hc);
            if (Sa) {
                for (; b = a[c]; c++) b === a[c - 1] && (d = e.push(c));
                for (; d--;) a.splice(e[d], 1)
            }
            return a
        };
        Bb = G.getText = function(a) {
            var b, e = "",
                c = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" === typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) e += Bb(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[c]; c++) e += Bb(b);
            return e
        };
        E = G.selectors = {
            cacheLength: 50,
            createPseudo: fa,
            match: wb,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ya, za);
                    a[3] = (a[4] || a[5] || "").replace(ya, za);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || G.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] +
                        a[8] || "odd" === a[3])) : a[3] && G.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, e = !a[5] && a[2];
                    if (wb.CHILD.test(a[0])) return null;
                    if (a[4]) a[2] = a[4];
                    else if (e && dd.test(e) && (b = R(e, !0)) && (b = e.indexOf(")", e.length - b) - e.length)) a[0] = a[0].slice(0, b), a[2] = e.slice(0, b);
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    if ("*" === a) return function() {
                        return !0
                    };
                    a = a.replace(ya, za).toLowerCase();
                    return function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                },
                CLASS: function(a) {
                    var b = zc[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" +
                        a + "([\\x20\\t\\r\\n\\f]|$)")) && zc(a, function(a) {
                        return b.test(a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, e) {
                    return function(c) {
                        c = G.attr(c, a);
                        if (null == c) return "!=" === b;
                        if (!b) return !0;
                        c += "";
                        return "=" === b ? c === e : "!=" === b ? c !== e : "^=" === b ? e && 0 === c.indexOf(e) : "*=" === b ? e && -1 < c.indexOf(e) : "$=" === b ? e && c.slice(-e.length) === e : "~=" === b ? -1 < (" " + c + " ").indexOf(e) : "|=" === b ? c === e || c.slice(0, e.length + 1) === e + "-" : !1
                    }
                },
                CHILD: function(a, b, e, c, d) {
                    var h = "nth" !== a.slice(0,
                            3),
                        g = "last" !== a.slice(-4),
                        f = "of-type" === b;
                    return 1 === c && 0 === d ? function(a) {
                        return !!a.parentNode
                    } : function(b, e, l) {
                        var k, j, m, s, V, e = h !== g ? "nextSibling" : "previousSibling",
                            n = b.parentNode,
                            Ba = f && b.nodeName.toLowerCase(),
                            l = !l && !f;
                        if (n) {
                            if (h) {
                                for (; e;) {
                                    for (j = b; j = j[e];)
                                        if (f ? j.nodeName.toLowerCase() === Ba : 1 === j.nodeType) return !1;
                                    V = e = "only" === a && !V && "nextSibling"
                                }
                                return !0
                            }
                            V = [g ? n.firstChild : n.lastChild];
                            if (g && l) {
                                l = n[Q] || (n[Q] = {});
                                k = l[a] || [];
                                s = k[0] === sa && k[1];
                                m = k[0] === sa && k[2];
                                for (j = s && n.childNodes[s]; j = ++s && j && j[e] ||
                                    (m = s = 0) || V.pop();)
                                    if (1 === j.nodeType && ++m && j === b) {
                                        l[a] = [sa, s, m];
                                        break
                                    }
                            } else if (l && (k = (b[Q] || (b[Q] = {}))[a]) && k[0] === sa) m = k[1];
                            else
                                for (; j = ++s && j && j[e] || (m = s = 0) || V.pop();)
                                    if ((f ? j.nodeName.toLowerCase() === Ba : 1 === j.nodeType) && ++m)
                                        if (l && ((j[Q] || (j[Q] = {}))[a] = [sa, m]), j === b) break;
                            m -= d;
                            return m === c || 0 === m % c && 0 <= m / c
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var e, c = E.pseudos[a] || E.setFilters[a.toLowerCase()] || G.error("unsupported pseudo: " + a);
                    return c[Q] ? c(b) : 1 < c.length ? (e = [a, a, "", b], E.setFilters.hasOwnProperty(a.toLowerCase()) ?
                        fa(function(a, e) {
                            for (var d, h = c(a, b), g = h.length; g--;) d = fc.call(a, h[g]), a[d] = !(e[d] = h[g])
                        }) : function(a) {
                            return c(a, 0, e)
                        }) : c
                }
            },
            pseudos: {
                not: fa(function(a) {
                    var b = [],
                        e = [],
                        c = $b(a.replace(vb, "$1"));
                    return c[Q] ? fa(function(a, b, e, d) {
                        for (var d = c(a, null, d, []), h = a.length; h--;)
                            if (e = d[h]) a[h] = !(b[h] = e)
                    }) : function(a, d, h) {
                        b[0] = a;
                        c(b, null, h, e);
                        return !e.pop()
                    }
                }),
                has: fa(function(a) {
                    return function(b) {
                        return 0 < G(a, b).length
                    }
                }),
                contains: fa(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || Bb(b)).indexOf(a)
                    }
                }),
                lang: fa(function(a) {
                    ed.test(a || "") || G.error("unsupported lang: " + a);
                    a = a.replace(ya, za).toLowerCase();
                    return function(b) {
                        var e;
                        do
                            if (e = ma ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return e = e.toLowerCase(), e === a || 0 === e.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(a) {
                    var b = fb.location && fb.location.hash;
                    return b && b.slice(1) === a.id
                },
                root: function(a) {
                    return a === ga
                },
                focus: function(a) {
                    return a === ba.activeElement && (!ba.hasFocus || ba.hasFocus()) && !(!a.type &&
                        !a.href && !~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !E.pseudos.empty(a)
                },
                header: function(a) {
                    return gd.test(a.nodeName)
                },
                input: function(a) {
                    return fd.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: ca(function() {
                    return [0]
                }),
                last: ca(function(a, b) {
                    return [b - 1]
                }),
                eq: ca(function(a, b, e) {
                    return [0 > e ? e + b : e]
                }),
                even: ca(function(a, b) {
                    for (var e = 0; e < b; e += 2) a.push(e);
                    return a
                }),
                odd: ca(function(a, b) {
                    for (var e = 1; e <
                        b; e += 2) a.push(e);
                    return a
                }),
                lt: ca(function(a, b, e) {
                    for (b = 0 > e ? e + b : e; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: ca(function(a, b, e) {
                    for (e = 0 > e ? e + b : e; ++e < b;) a.push(e);
                    return a
                })
            }
        };
        for (Ra in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) E.pseudos[Ra] = ac(Ra);
        for (Ra in {
                submit: !0,
                reset: !0
            }) E.pseudos[Ra] = bc(Ra);
        $b = G.compile = function(a, b) {
            var e, c = [],
                d = [],
                h = Ac[a + " "];
            if (!h) {
                b || (b = R(a));
                for (e = b.length; e--;) h = gc(b[e]), h[Q] ? c.push(h) : d.push(h);
                var g = 0,
                    f = 0 < c.length,
                    l = 0 < d.length;
                e = function(a, b, e, h, k) {
                    var j, m, u = [],
                        s = 0,
                        n =
                        "0",
                        V = a && [],
                        p = null != k,
                        Ba = Ab,
                        q = a || l && E.find.TAG("*", k && b.parentNode || b),
                        y = sa += null == Ba ? 1 : Math.random() || 0.1;
                    p && (Ab = b !== ba && b, yb = g);
                    for (; null != (k = q[n]); n++) {
                        if (l && k) {
                            for (j = 0; m = d[j++];)
                                if (m(k, b, e)) {
                                    h.push(k);
                                    break
                                }
                            p && (sa = y, yb = ++g)
                        }
                        f && ((k = !m && k) && s--, a && V.push(k))
                    }
                    s += n;
                    if (f && n !== s) {
                        for (j = 0; m = c[j++];) m(V, u, b, e);
                        if (a) {
                            if (0 < s)
                                for (; n--;) !V[n] && !u[n] && (u[n] = cd.call(h));
                            u = zb(u)
                        }
                        Pa.apply(h, u);
                        p && (!a && 0 < u.length && 1 < s + c.length) && G.uniqueSort(h)
                    }
                    p && (sa = y, Ab = Ba);
                    return V
                };
                e = f ? fa(e) : e;
                h = Ac(a, e)
            }
            return h
        };
        E.pseudos.nth =
            E.pseudos.eq;
        E.filters = xc.prototype = E.pseudos;
        E.setFilters = new xc;
        Oa();
        G.attr = j.attr;
        j.find = G;
        j.expr = G.selectors;
        j.expr[":"] = j.expr.pseudos;
        j.unique = G.uniqueSort;
        j.text = G.getText;
        j.isXMLDoc = G.isXML;
        j.contains = G.contains;
        var id = /Until$/,
            jd = /^(?:parents|prev(?:Until|All))/,
            Tc = /^.[^:#\[\.,]*$/,
            Dc = j.expr.match.needsContext,
            kd = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        j.fn.extend({
            find: function(a) {
                var b, e, c, d = this.length;
                if ("string" !== typeof a) return c = this, this.pushStack(j(a).filter(function() {
                    for (b =
                        0; b < d; b++)
                        if (j.contains(c[b], this)) return !0
                }));
                e = [];
                for (b = 0; b < d; b++) j.find(a, this[b], e);
                e = this.pushStack(1 < d ? j.unique(e) : e);
                e.selector = (this.selector ? this.selector + " " : "") + a;
                return e
            },
            has: function(a) {
                var b, e = j(a, this),
                    c = e.length;
                return this.filter(function() {
                    for (b = 0; b < c; b++)
                        if (j.contains(this, e[b])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(m(this, a, !1))
            },
            filter: function(a) {
                return this.pushStack(m(this, a, !0))
            },
            is: function(a) {
                return !!a && ("string" === typeof a ? Dc.test(a) ? 0 <= j(a, this.context).index(this[0]) :
                    0 < j.filter(a, this).length : 0 < this.filter(a).length)
            },
            closest: function(a, b) {
                for (var e, c = 0, d = this.length, h = [], g = Dc.test(a) || "string" !== typeof a ? j(a, b || this.context) : 0; c < d; c++)
                    for (e = this[c]; e && e.ownerDocument && e !== b && 11 !== e.nodeType;) {
                        if (g ? -1 < g.index(e) : j.find.matchesSelector(e, a)) {
                            h.push(e);
                            break
                        }
                        e = e.parentNode
                    }
                return this.pushStack(1 < h.length ? j.unique(h) : h)
            },
            index: function(a) {
                return !a ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof a ? j.inArray(this[0], j(a)) : j.inArray(a.jquery ?
                    a[0] : a, this)
            },
            add: function(a, b) {
                var e = "string" === typeof a ? j(a, b) : j.makeArray(a && a.nodeType ? [a] : a),
                    e = j.merge(this.get(), e);
                return this.pushStack(j.unique(e))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });
        j.fn.andSelf = j.fn.addBack;
        j.each({
            parent: function(a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            },
            parents: function(a) {
                return j.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, e) {
                return j.dir(a, "parentNode", e)
            },
            next: function(a) {
                return l(a, "nextSibling")
            },
            prev: function(a) {
                return l(a, "previousSibling")
            },
            nextAll: function(a) {
                return j.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return j.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, e) {
                return j.dir(a, "nextSibling", e)
            },
            prevUntil: function(a, b, e) {
                return j.dir(a, "previousSibling", e)
            },
            siblings: function(a) {
                return j.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return j.sibling(a.firstChild)
            },
            contents: function(a) {
                return j.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : j.merge([],
                    a.childNodes)
            }
        }, function(a, b) {
            j.fn[a] = function(e, c) {
                var d = j.map(this, b, e);
                id.test(a) || (c = e);
                c && "string" === typeof c && (d = j.filter(c, d));
                d = 1 < this.length && !kd[a] ? j.unique(d) : d;
                1 < this.length && jd.test(a) && (d = d.reverse());
                return this.pushStack(d)
            }
        });
        j.extend({
            filter: function(a, b, e) {
                e && (a = ":not(" + a + ")");
                return 1 === b.length ? j.find.matchesSelector(b[0], a) ? [b[0]] : [] : j.find.matches(a, b)
            },
            dir: function(a, b, e) {
                for (var c = [], a = a[b]; a && 9 !== a.nodeType && (e === f || 1 !== a.nodeType || !j(a).is(e));) 1 === a.nodeType && c.push(a),
                    a = a[b];
                return c
            },
            sibling: function(a, b) {
                for (var e = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && e.push(a);
                return e
            }
        });
        var rc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ld = / jQuery\d+="(?:null|\d+)"/g,
            Ec = RegExp("<(?:" + rc + ")[\\s/>]", "i"),
            kc = /^\s+/,
            Fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Gc = /<([\w:]+)/,
            Hc = /<tbody/i,
            md = /<|&#?\w+;/,
            nd = /<(?:script|style|link)/i,
            Hb = /^(?:checkbox|radio)$/i,
            od = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ic = /^$|\/(?:java|ecma)script/i,
            Uc = /^true\/(.*)/,
            pd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ia = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: j.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            lc = n(A).appendChild(A.createElement("div"));
        ia.optgroup = ia.option;
        ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
        ia.th = ia.td;
        j.fn.extend({
            text: function(a) {
                return j.access(this, function(a) {
                    return a === f ? j.text(this) : this.empty().append((this[0] && this[0].ownerDocument || A).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b =
                        j(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return j.isFunction(a) ? this.each(function(b) {
                    j(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = j(this),
                        e = b.contents();
                    e.length ? e.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = j.isFunction(a);
                return this.each(function(e) {
                    j(this).wrapAll(b ? a.call(this, e) :
                        a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    j.nodeName(this, "body") || j(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode &&
                        this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var e, c = 0; null != (e = this[c]); c++)
                    if (!a || 0 < j.filter(a, [e]).length) !b && 1 === e.nodeType && j.cleanData(t(e)), e.parentNode && (b && j.contains(e.ownerDocument, e) && r(t(e, "script")), e.parentNode.removeChild(e));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && j.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && j.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return j.clone(this, a, b)
                })
            },
            html: function(a) {
                return j.access(this, function(a) {
                    var b = this[0] || {},
                        e = 0,
                        c = this.length;
                    if (a === f) return 1 === b.nodeType ? b.innerHTML.replace(ld, "") : f;
                    if ("string" === typeof a && !nd.test(a) && (j.support.htmlSerialize || !Ec.test(a)) && (j.support.leadingWhitespace || !kc.test(a)) && !ia[(Gc.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Fc, "<$1></$2>");
                        try {
                            for (; e < c; e++) b = this[e] || {}, 1 === b.nodeType && (j.cleanData(t(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (d) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                !j.isFunction(a) && "string" !== typeof a && (a = j(a).not(this).detach());
                return this.domManip([a], !0, function(a) {
                    var b = this.nextSibling,
                        e = this.parentNode;
                    e && (j(this).remove(), e.insertBefore(a, b))
                })
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, e) {
                var a = lb.apply([], a),
                    c, d, h, g, l = 0,
                    k = this.length,
                    m = this,
                    s = k - 1,
                    n =
                    a[0],
                    y = j.isFunction(n);
                if (y || !(1 >= k || "string" !== typeof n || j.support.checkClone || !od.test(n))) return this.each(function(c) {
                    var d = m.eq(c);
                    y && (a[0] = n.call(this, c, b ? d.html() : f));
                    d.domManip(a, b, e)
                });
                if (k && (g = j.buildFragment(a, this[0].ownerDocument, !1, this), c = g.firstChild, 1 === g.childNodes.length && (g = c), c)) {
                    b = b && j.nodeName(c, "tr");
                    h = j.map(t(g, "script"), p);
                    for (d = h.length; l < k; l++) c = g, l !== s && (c = j.clone(c, !0, !0), d && j.merge(h, t(c, "script"))), e.call(b && j.nodeName(this[l], "table") ? this[l].getElementsByTagName("tbody")[0] ||
                        this[l].appendChild(this[l].ownerDocument.createElement("tbody")) : this[l], c, l);
                    if (d) {
                        g = h[h.length - 1].ownerDocument;
                        j.map(h, q);
                        for (l = 0; l < d; l++)
                            if (c = h[l], Ic.test(c.type || "") && !j._data(c, "globalEval") && j.contains(g, c)) c.src ? j.ajax({
                                url: c.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : j.globalEval((c.text || c.textContent || c.innerHTML || "").replace(pd, ""))
                    }
                    g = c = null
                }
                return this
            }
        });
        j.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(a, b) {
                j.fn[a] = function(a) {
                    for (var e = 0, c = [], d = j(a), h = d.length - 1; e <= h; e++) a = e === h ? this : this.clone(!0), j(d[e])[b](a), Xa.apply(c, a.get());
                    return this.pushStack(c)
                }
            });
        j.extend({
            clone: function(a, b, e) {
                var c, d, h, g, f, l = j.contains(a.ownerDocument, a);
                j.support.html5Clone || j.isXMLDoc(a) || !Ec.test("<" + a.nodeName + ">") ? h = a.cloneNode(!0) : (lc.innerHTML = a.outerHTML, lc.removeChild(h = lc.firstChild));
                if ((!j.support.noCloneEvent || !j.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !j.isXMLDoc(a)) {
                    c =
                        t(h);
                    f = t(a);
                    for (g = 0; null != (d = f[g]); ++g)
                        if (c[g]) {
                            var k = c[g],
                                m = void 0,
                                s = void 0,
                                n = void 0;
                            if (1 === k.nodeType) {
                                m = k.nodeName.toLowerCase();
                                if (!j.support.noCloneEvent && k[j.expando]) {
                                    n = j._data(k);
                                    for (s in n.events) j.removeEvent(k, s, n.handle);
                                    k.removeAttribute(j.expando)
                                }
                                if ("script" === m && k.text !== d.text) p(k).text = d.text, q(k);
                                else if ("object" === m) k.parentNode && (k.outerHTML = d.outerHTML), j.support.html5Clone && (d.innerHTML && !j.trim(k.innerHTML)) && (k.innerHTML = d.innerHTML);
                                else if ("input" === m && Hb.test(d.type)) k.defaultChecked =
                                    k.checked = d.checked, k.value !== d.value && (k.value = d.value);
                                else if ("option" === m) k.defaultSelected = k.selected = d.defaultSelected;
                                else if ("input" === m || "textarea" === m) k.defaultValue = d.defaultValue
                            }
                        }
                }
                if (b)
                    if (e) {
                        f = f || t(a);
                        c = c || t(h);
                        for (g = 0; null != (d = f[g]); g++) v(d, c[g])
                    } else v(a, h);
                c = t(h, "script");
                0 < c.length && r(c, !l && t(a, "script"));
                return h
            },
            buildFragment: function(a, b, e, c) {
                for (var d, h, g, f, l, k, m = a.length, s = n(b), p = [], q = 0; q < m; q++)
                    if ((h = a[q]) || 0 === h)
                        if ("object" === j.type(h)) j.merge(p, h.nodeType ? [h] : h);
                        else if (md.test(h)) {
                    g =
                        g || s.appendChild(b.createElement("div"));
                    f = (Gc.exec(h) || ["", ""])[1].toLowerCase();
                    k = ia[f] || ia._default;
                    g.innerHTML = k[1] + h.replace(Fc, "<$1></$2>") + k[2];
                    for (d = k[0]; d--;) g = g.lastChild;
                    !j.support.leadingWhitespace && kc.test(h) && p.push(b.createTextNode(kc.exec(h)[0]));
                    if (!j.support.tbody)
                        for (d = (h = "table" === f && !Hc.test(h) ? g.firstChild : "<table>" === k[1] && !Hc.test(h) ? g : 0) && h.childNodes.length; d--;) j.nodeName(l = h.childNodes[d], "tbody") && !l.childNodes.length && h.removeChild(l);
                    j.merge(p, g.childNodes);
                    for (g.textContent =
                        ""; g.firstChild;) g.removeChild(g.firstChild);
                    g = s.lastChild
                } else p.push(b.createTextNode(h));
                g && s.removeChild(g);
                j.support.appendChecked || j.grep(t(p, "input"), w);
                for (q = 0; h = p[q++];)
                    if (!(c && -1 !== j.inArray(h, c)) && (a = j.contains(h.ownerDocument, h), g = t(s.appendChild(h), "script"), a && r(g), e))
                        for (d = 0; h = g[d++];) Ic.test(h.type || "") && e.push(h);
                return s
            },
            cleanData: function(a, b) {
                for (var e, c, d, h, g = 0, f = j.expando, l = j.cache, k = j.support.deleteExpando, m = j.event.special; null != (e = a[g]); g++)
                    if (b || j.acceptData(e))
                        if (h = (d =
                                e[f]) && l[d]) {
                            if (h.events)
                                for (c in h.events) m[c] ? j.event.remove(e, c) : j.removeEvent(e, c, h.handle);
                            l[d] && (delete l[d], k ? delete e[f] : typeof e.removeAttribute !== C ? e.removeAttribute(f) : e[f] = null, wa.push(d))
                        }
            }
        });
        var Va, Da, Ea, mc = /alpha\([^)]*\)/i,
            qd = /opacity\s*=\s*([^)]*)/,
            rd = /^(top|right|bottom|left)$/,
            sd = /^(none|table(?!-c[ea]).+)/,
            Jc = /^margin/,
            Vc = RegExp("^(" + Ja + ")(.*)$", "i"),
            jb = RegExp("^(" + Ja + ")(?!px)[a-z%]+$", "i"),
            td = RegExp("^([+-])=(" + Ja + ")", "i"),
            tc = {
                BODY: "block"
            },
            ud = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Kc = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Ca = ["Top", "Right", "Bottom", "Left"],
            sc = ["Webkit", "O", "Moz", "ms"];
        j.fn.extend({
            css: function(a, b) {
                return j.access(this, function(a, b, e) {
                    var c, d = {},
                        h = 0;
                    if (j.isArray(b)) {
                        c = Da(a);
                        for (e = b.length; h < e; h++) d[b[h]] = j.css(a, b[h], !1, c);
                        return d
                    }
                    return e !== f ? j.style(a, b, e) : j.css(a, b)
                }, a, b, 1 < arguments.length)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(a) {
                var b = "boolean" === typeof a;
                return this.each(function() {
                    (b ? a : z(this)) ?
                    j(this).show(): j(this).hide()
                })
            }
        });
        j.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var e = Ea(a, "opacity");
                            return "" === e ? "1" : e
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": j.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, e, c) {
                if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                    var d, h, g, l = j.camelCase(b),
                        k = a.style,
                        b = j.cssProps[l] || (j.cssProps[l] = x(k, l));
                    g = j.cssHooks[b] || j.cssHooks[l];
                    if (e !==
                        f) {
                        h = typeof e;
                        if ("string" === h && (d = td.exec(e))) e = (d[1] + 1) * d[2] + parseFloat(j.css(a, b)), h = "number";
                        if (!(null == e || "number" === h && isNaN(e)))
                            if ("number" === h && !j.cssNumber[l] && (e += "px"), !j.support.clearCloneStyle && ("" === e && 0 === b.indexOf("background")) && (k[b] = "inherit"), !g || !("set" in g) || (e = g.set(a, e, c)) !== f) try {
                                k[b] = e
                            } catch (m) {}
                    } else return g && "get" in g && (d = g.get(a, !1, c)) !== f ? d : k[b]
                }
            },
            css: function(a, b, e, c) {
                var d, h;
                h = j.camelCase(b);
                b = j.cssProps[h] || (j.cssProps[h] = x(a.style, h));
                (h = j.cssHooks[b] || j.cssHooks[h]) &&
                "get" in h && (d = h.get(a, !0, e));
                d === f && (d = Ea(a, b, c));
                "normal" === d && b in Kc && (d = Kc[b]);
                return "" === e || e ? (a = parseFloat(d), !0 === e || j.isNumeric(a) ? a || 0 : d) : d
            },
            swap: function(a, b, e, c) {
                var d, h = {};
                for (d in b) h[d] = a.style[d], a.style[d] = b[d];
                e = e.apply(a, c || []);
                for (d in b) a.style[d] = h[d];
                return e
            }
        });
        a.getComputedStyle ? (Da = function(b) {
            return a.getComputedStyle(b, null)
        }, Ea = function(a, b, e) {
            var c, d = (e = e || Da(a)) ? e.getPropertyValue(b) || e[b] : f,
                h = a.style;
            e && ("" === d && !j.contains(a.ownerDocument, a) && (d = j.style(a, b)), jb.test(d) &&
                Jc.test(b) && (a = h.width, b = h.minWidth, c = h.maxWidth, h.minWidth = h.maxWidth = h.width = d, d = e.width, h.width = a, h.minWidth = b, h.maxWidth = c));
            return d
        }) : A.documentElement.currentStyle && (Da = function(a) {
            return a.currentStyle
        }, Ea = function(a, b, e) {
            var c, d, h = (e = e || Da(a)) ? e[b] : f,
                g = a.style;
            null == h && (g && g[b]) && (h = g[b]);
            if (jb.test(h) && !rd.test(b)) {
                e = g.left;
                if (d = (c = a.runtimeStyle) && c.left) c.left = a.currentStyle.left;
                g.left = "fontSize" === b ? "1em" : h;
                h = g.pixelLeft + "px";
                g.left = e;
                d && (c.left = d)
            }
            return "" === h ? "auto" : h
        });
        j.each(["height",
            "width"
        ], function(a, b) {
            j.cssHooks[b] = {
                get: function(a, e, c) {
                    if (e) return 0 === a.offsetWidth && sd.test(j.css(a, "display")) ? j.swap(a, ud, function() {
                        return M(a, b, c)
                    }) : M(a, b, c)
                },
                set: function(a, e, c) {
                    var d = c && Da(a);
                    return s(a, e, c ? y(a, b, c, j.support.boxSizing && "border-box" === j.css(a, "boxSizing", !1, d), d) : 0)
                }
            }
        });
        j.support.opacity || (j.cssHooks.opacity = {
            get: function(a, b) {
                return qd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var e = a.style,
                    c = a.currentStyle,
                    d = j.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    h = c && c.filter || e.filter || "";
                e.zoom = 1;
                if ((1 <= b || "" === b) && "" === j.trim(h.replace(mc, "")) && e.removeAttribute)
                    if (e.removeAttribute("filter"), "" === b || c && !c.filter) return;
                e.filter = mc.test(h) ? h.replace(mc, d) : h + " " + d
            }
        });
        j(function() {
            j.support.reliableMarginRight || (j.cssHooks.marginRight = {
                get: function(a, b) {
                    if (b) return j.swap(a, {
                        display: "inline-block"
                    }, Ea, [a, "marginRight"])
                }
            });
            !j.support.pixelPosition && j.fn.position && j.each(["top", "left"], function(a,
                b) {
                j.cssHooks[b] = {
                    get: function(a, e) {
                        if (e) return e = Ea(a, b), jb.test(e) ? j(a).position()[b] + "px" : e
                    }
                }
            })
        });
        j.expr && j.expr.filters && (j.expr.filters.hidden = function(a) {
            return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !j.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || j.css(a, "display"))
        }, j.expr.filters.visible = function(a) {
            return !j.expr.filters.hidden(a)
        });
        j.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            j.cssHooks[a + b] = {
                expand: function(e) {
                    for (var c = 0, d = {}, e = "string" === typeof e ? e.split(" ") : [e]; 4 > c; c++) d[a + Ca[c] + b] = e[c] || e[c - 2] || e[0];
                    return d
                }
            };
            Jc.test(a) || (j.cssHooks[a + b].set = s)
        });
        var vd = /%20/g,
            Wc = /\[\]$/,
            Lc = /\r?\n/g,
            wd = /^(?:submit|button|image|reset|file)$/i,
            xd = /^(?:input|select|textarea|keygen)/i;
        j.fn.extend({
            serialize: function() {
                return j.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = j.prop(this, "elements");
                    return a ? j.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !j(this).is(":disabled") && xd.test(this.nodeName) &&
                        !wd.test(a) && (this.checked || !Hb.test(a))
                }).map(function(a, b) {
                    var e = j(this).val();
                    return null == e ? null : j.isArray(e) ? j.map(e, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Lc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: e.replace(Lc, "\r\n")
                    }
                }).get()
            }
        });
        j.param = function(a, b) {
            var e, c = [],
                d = function(a, b) {
                    b = j.isFunction(b) ? b() : null == b ? "" : b;
                    c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            b === f && (b = j.ajaxSettings && j.ajaxSettings.traditional);
            if (j.isArray(a) || a.jquery && !j.isPlainObject(a)) j.each(a, function() {
                d(this.name,
                    this.value)
            });
            else
                for (e in a) ea(e, a[e], b, d);
            return c.join("&").replace(vd, "+")
        };
        j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            j.fn[b] = function(a, e) {
                return 0 < arguments.length ? this.on(b, null, a, e) : this.trigger(b)
            }
        });
        j.fn.hover = function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        };
        var Ha, Aa, nc = j.now(),
            oc = /\?/,
            yd =
            /#.*$/,
            Mc = /([?&])_=[^&]*/,
            zd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Ad = /^(?:GET|HEAD)$/,
            Bd = /^\/\//,
            Nc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Oc = j.fn.load,
            Pc = {},
            Ib = {},
            Qc = "*/".concat("*");
        try {
            Aa = H.href
        } catch (Hd) {
            Aa = A.createElement("a"), Aa.href = "", Aa = Aa.href
        }
        Ha = Nc.exec(Aa.toLowerCase()) || [];
        j.fn.load = function(a, b, e) {
            if ("string" !== typeof a && Oc) return Oc.apply(this, arguments);
            var c, d, h, g = this,
                l = a.indexOf(" ");
            0 <= l && (c = a.slice(l, a.length), a = a.slice(0, l));
            j.isFunction(b) ? (e = b, b = f) : b && "object" === typeof b &&
                (h = "POST");
            0 < g.length && j.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: b
            }).done(function(a) {
                d = arguments;
                g.html(c ? j("<div>").append(j.parseHTML(a)).find(c) : a)
            }).complete(e && function(a, b) {
                g.each(e, d || [a.responseText, b, a])
            });
            return this
        };
        j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            j.fn[b] = function(a) {
                return this.on(b, a)
            }
        });
        j.each(["get", "post"], function(a, b) {
            j[b] = function(a, e, c, d) {
                j.isFunction(e) && (d = d || c, c = e, e = f);
                return j.ajax({
                    url: a,
                    type: b,
                    dataType: d,
                    data: e,
                    success: c
                })
            }
        });
        j.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Aa,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ha[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": j.parseJSON,
                    "text xml": j.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? F(F(a, j.ajaxSettings), b) : F(j.ajaxSettings, a)
            },
            ajaxPrefilter: J(Pc),
            ajaxTransport: J(Ib),
            ajax: function(a, b) {
                function e(a, b, c, d) {
                    var s, u, R, r, K = b;
                    if (2 !== I) {
                        I = 2;
                        l && clearTimeout(l);
                        m = f;
                        g = d || "";
                        x.readyState = 0 < a ? 4 : 0;
                        if (c) {
                            r = n;
                            var d = x,
                                V, v, t, z, ea = r.contents,
                                D = r.dataTypes,
                                U = r.responseFields;
                            for (z in U) z in c && (d[U[z]] = c[z]);
                            for (;
                                "*" === D[0];) D.shift(), v === f && (v = r.mimeType || d.getResponseHeader("Content-Type"));
                            if (v)
                                for (z in ea)
                                    if (ea[z] && ea[z].test(v)) {
                                        D.unshift(z);
                                        break
                                    }
                            if (D[0] in c) t = D[0];
                            else {
                                for (z in c) {
                                    if (!D[0] || r.converters[z + " " + D[0]]) {
                                        t = z;
                                        break
                                    }
                                    V || (V = z)
                                }
                                t = t || V
                            }
                            t ? (t !== D[0] && D.unshift(t), r = c[t]) : r = void 0
                        }
                        if (200 <= a && 300 > a || 304 === a)
                            if (n.ifModified && ((c = x.getResponseHeader("Last-Modified")) && (j.lastModified[h] = c), (c = x.getResponseHeader("etag")) && (j.etag[h] = c)), 204 === a) s = !0, K = "nocontent";
                            else if (304 === a) s = !0, K = "notmodified";
                        else {
                            a: {
                                u = n;R = r;
                                var w, da, K = {};V = 0;v = u.dataTypes.slice();t = v[0];u.dataFilter && (R =
                                    u.dataFilter(R, u.dataType));
                                if (v[1])
                                    for (da in u.converters) K[da.toLowerCase()] = u.converters[da];
                                for (; c = v[++V];)
                                    if ("*" !== c) {
                                        if ("*" !== t && t !== c) {
                                            da = K[t + " " + c] || K["* " + c];
                                            if (!da)
                                                for (w in K)
                                                    if (s = w.split(" "), s[1] === c && (da = K[t + " " + s[0]] || K["* " + s[0]])) {
                                                        !0 === da ? da = K[w] : !0 !== K[w] && (c = s[0], v.splice(V--, 0, c));
                                                        break
                                                    }
                                            if (!0 !== da)
                                                if (da && u["throws"]) R = da(R);
                                                else try {
                                                    R = da(R)
                                                } catch (Ba) {
                                                    s = {
                                                        state: "parsererror",
                                                        error: da ? Ba : "No conversion from " + t + " to " + c
                                                    };
                                                    break a
                                                }
                                        }
                                        t = c
                                    }
                                s = {
                                    state: "success",
                                    data: R
                                }
                            }
                            K = s.state;u = s.data;R =
                            s.error;s = !R
                        }
                        else if (R = K, a || !K) K = "error", 0 > a && (a = 0);
                        x.status = a;
                        x.statusText = (b || K) + "";
                        s ? y.resolveWith(p, [u, K, x]) : y.rejectWith(p, [x, K, R]);
                        x.statusCode(M);
                        M = f;
                        k && q.trigger(s ? "ajaxSuccess" : "ajaxError", [x, n, s ? u : R]);
                        ca.fireWith(p, [x, K]);
                        k && (q.trigger("ajaxComplete", [x, n]), --j.active || j.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a, a = f);
                var b = b || {},
                    c, d, h, g, l, k, m, s, n = j.ajaxSetup({}, b),
                    p = n.context || n,
                    q = n.context && (p.nodeType || p.jquery) ? j(p) : j.event,
                    y = j.Deferred(),
                    ca = j.Callbacks("once memory"),
                    M = n.statusCode || {},
                    R = {},
                    r = {},
                    I = 0,
                    K = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === I) {
                                if (!s)
                                    for (s = {}; b = zd.exec(g);) s[b[1].toLowerCase()] = b[2];
                                b = s[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === I ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var e = a.toLowerCase();
                            I || (a = r[e] = r[e] || a, R[a] = b);
                            return this
                        },
                        overrideMimeType: function(a) {
                            I || (n.mimeType = a);
                            return this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > I)
                                    for (b in a) M[b] = [M[b], a[b]];
                                else x.always(a[x.status]);
                            return this
                        },
                        abort: function(a) {
                            a = a || K;
                            m && m.abort(a);
                            e(0, a);
                            return this
                        }
                    };
                y.promise(x).complete = ca.add;
                x.success = x.done;
                x.error = x.fail;
                n.url = ((a || n.url || Aa) + "").replace(yd, "").replace(Bd, Ha[1] + "//");
                n.type = b.method || b.type || n.method || n.type;
                n.dataTypes = j.trim(n.dataType || "*").toLowerCase().match(ja) || [""];
                null == n.crossDomain && (c = Nc.exec(n.url.toLowerCase()), n.crossDomain = !(!c || !(c[1] !== Ha[1] || c[2] !== Ha[2] || (c[3] || ("http:" === c[1] ? 80 : 443)) != (Ha[3] || ("http:" === Ha[1] ? 80 : 443)))));
                n.data && (n.processData && "string" !==
                    typeof n.data) && (n.data = j.param(n.data, n.traditional));
                L(Pc, n, b, x);
                if (2 === I) return x;
                (k = n.global) && 0 === j.active++ && j.event.trigger("ajaxStart");
                n.type = n.type.toUpperCase();
                n.hasContent = !Ad.test(n.type);
                h = n.url;
                n.hasContent || (n.data && (h = n.url += (oc.test(h) ? "&" : "?") + n.data, delete n.data), !1 === n.cache && (n.url = Mc.test(h) ? h.replace(Mc, "$1_=" + nc++) : h + (oc.test(h) ? "&" : "?") + "_=" + nc++));
                n.ifModified && (j.lastModified[h] && x.setRequestHeader("If-Modified-Since", j.lastModified[h]), j.etag[h] && x.setRequestHeader("If-None-Match",
                    j.etag[h]));
                (n.data && n.hasContent && !1 !== n.contentType || b.contentType) && x.setRequestHeader("Content-Type", n.contentType);
                x.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Qc + "; q=0.01" : "") : n.accepts["*"]);
                for (d in n.headers) x.setRequestHeader(d, n.headers[d]);
                if (n.beforeSend && (!1 === n.beforeSend.call(p, x, n) || 2 === I)) return x.abort();
                K = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[d](n[d]);
                if (m = L(Ib, n, b, x)) {
                    x.readyState = 1;
                    k && q.trigger("ajaxSend", [x, n]);
                    n.async && 0 < n.timeout && (l = setTimeout(function() {
                        x.abort("timeout")
                    }, n.timeout));
                    try {
                        I = 1, m.send(R, e)
                    } catch (v) {
                        if (2 > I) e(-1, v);
                        else throw v;
                    }
                } else e(-1, "No Transport");
                return x
            },
            getScript: function(a, b) {
                return j.get(a, f, b, "script")
            },
            getJSON: function(a, b, e) {
                return j.get(a, b, e, "json")
            }
        });
        j.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    j.globalEval(a);
                    return a
                }
            }
        });
        j.ajaxPrefilter("script", function(a) {
            a.cache === f && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
        j.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, e = A.head || j("head")[0] || A.documentElement;
                return {
                    send: function(c, d) {
                        b = A.createElement("script");
                        b.async = !0;
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a, e) {
                            if (e || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b),
                                b = null, e || d(200, "success")
                        };
                        e.insertBefore(b, e.firstChild)
                    },
                    abort: function() {
                        if (b) b.onload(f, !0)
                    }
                }
            }
        });
        var Rc = [],
            pc = /(=)\?(?=&|$)|\?\?/;
        j.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Rc.pop() || j.expando + "_" + nc++;
                this[a] = !0;
                return a
            }
        });
        j.ajaxPrefilter("json jsonp", function(b, e, c) {
            var d, h, g, l = !1 !== b.jsonp && (pc.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && pc.test(b.data) && "data");
            if (l || "jsonp" === b.dataTypes[0]) return d = b.jsonpCallback =
                j.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, l ? b[l] = b[l].replace(pc, "$1" + d) : !1 !== b.jsonp && (b.url += (oc.test(b.url) ? "&" : "?") + b.jsonp + "=" + d), b.converters["script json"] = function() {
                    g || j.error(d + " was not called");
                    return g[0]
                }, b.dataTypes[0] = "json", h = a[d], a[d] = function() {
                    g = arguments
                }, c.always(function() {
                    a[d] = h;
                    b[d] && (b.jsonpCallback = e.jsonpCallback, Rc.push(d));
                    g && j.isFunction(h) && h(g[0]);
                    g = h = f
                }), "script"
        });
        var Ua, ib, Cd = 0,
            qc = a.ActiveXObject && function() {
                for (var a in Ua) Ua[a](f, !0)
            };
        j.ajaxSettings.xhr =
            a.ActiveXObject ? function() {
                var b;
                if (!(b = !this.isLocal && Y())) a: {
                    try {
                        b = new a.ActiveXObject("Microsoft.XMLHTTP");
                        break a
                    } catch (e) {}
                    b = void 0
                }
                return b
            } : Y;
        ib = j.ajaxSettings.xhr();
        j.support.cors = !!ib && "withCredentials" in ib;
        (ib = j.support.ajax = !!ib) && j.ajaxTransport(function(b) {
            if (!b.crossDomain || j.support.cors) {
                var e;
                return {
                    send: function(c, d) {
                        var h, g, l = b.xhr();
                        b.username ? l.open(b.type, b.url, b.async, b.username, b.password) : l.open(b.type, b.url, b.async);
                        if (b.xhrFields)
                            for (g in b.xhrFields) l[g] = b.xhrFields[g];
                        b.mimeType && l.overrideMimeType && l.overrideMimeType(b.mimeType);
                        !b.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (g in c) l.setRequestHeader(g, c[g])
                        } catch (k) {}
                        l.send(b.hasContent && b.data || null);
                        e = function(a, c) {
                            var g, k, m, n;
                            try {
                                if (e && (c || 4 === l.readyState))
                                    if (e = f, h && (l.onreadystatechange = j.noop, qc && delete Ua[h]), c) 4 !== l.readyState && l.abort();
                                    else {
                                        n = {};
                                        g = l.status;
                                        k = l.getAllResponseHeaders();
                                        "string" === typeof l.responseText && (n.text = l.responseText);
                                        try {
                                            m = l.statusText
                                        } catch (s) {
                                            m =
                                                ""
                                        }!g && b.isLocal && !b.crossDomain ? g = n.text ? 200 : 404 : 1223 === g && (g = 204)
                                    }
                            } catch (p) {
                                c || d(-1, p)
                            }
                            n && d(g, m, n, k)
                        };
                        b.async ? 4 === l.readyState ? setTimeout(e) : (h = ++Cd, qc && (Ua || (Ua = {}, j(a).unload(qc)), Ua[h] = e), l.onreadystatechange = e) : e()
                    },
                    abort: function() {
                        e && e(f, !0)
                    }
                }
            }
        });
        var Ia, Eb, Dd = /^(?:toggle|show|hide)$/,
            Ed = RegExp("^(?:([+-])=|)(" + Ja + ")([a-z%]*)$", "i"),
            Fd = /queueHooks$/,
            kb = [function(a, b, e) {
                var c, d, h, g, f, l, k = this,
                    m = a.style,
                    n = {},
                    s = [],
                    p = a.nodeType && z(a);
                e.queue || (f = j._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued =
                    0, l = f.empty.fire, f.empty.fire = function() {
                        f.unqueued || l()
                    }), f.unqueued++, k.always(function() {
                    k.always(function() {
                        f.unqueued--;
                        j.queue(a, "fx").length || f.empty.fire()
                    })
                }));
                if (1 === a.nodeType && ("height" in b || "width" in b)) e.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === j.css(a, "display") && "none" === j.css(a, "float") && (!j.support.inlineBlockNeedsLayout || "inline" === I(a.nodeName) ? m.display = "inline-block" : m.zoom = 1);
                e.overflow && (m.overflow = "hidden", j.support.shrinkWrapBlocks || k.always(function() {
                    m.overflow =
                        e.overflow[0];
                    m.overflowX = e.overflow[1];
                    m.overflowY = e.overflow[2]
                }));
                for (d in b) h = b[d], Dd.exec(h) && (delete b[d], c = c || "toggle" === h, h !== (p ? "hide" : "show") && s.push(d));
                if (b = s.length) {
                    h = j._data(a, "fxshow") || j._data(a, "fxshow", {});
                    "hidden" in h && (p = h.hidden);
                    c && (h.hidden = !p);
                    p ? j(a).show() : k.done(function() {
                        j(a).hide()
                    });
                    k.done(function() {
                        var b;
                        j._removeData(a, "fxshow");
                        for (b in n) j.style(a, b, n[b])
                    });
                    for (d = 0; d < b; d++) c = s[d], g = k.createTween(c, p ? h[c] : 0), n[c] = h[c] || j.style(a, c), c in h || (h[c] = g.start, p && (g.end =
                        g.start, g.start = "width" === c || "height" === c ? 1 : 0))
                }
            }],
            Wa = {
                "*": [function(a, b) {
                    var e, c, d = this.createTween(a, b),
                        h = Ed.exec(b),
                        g = d.cur(),
                        f = +g || 0,
                        l = 1,
                        k = 20;
                    if (h) {
                        e = +h[2];
                        c = h[3] || (j.cssNumber[a] ? "" : "px");
                        if ("px" !== c && f) {
                            f = j.css(d.elem, a, !0) || e || 1;
                            do l = l || ".5", f /= l, j.style(d.elem, a, f + c); while (l !== (l = d.cur() / g) && 1 !== l && --k)
                        }
                        d.unit = c;
                        d.start = f;
                        d.end = h[1] ? f + (h[1] + 1) * e : e
                    }
                    return d
                }]
            };
        j.Animation = j.extend(na, {
            tweener: function(a, b) {
                j.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var e, c = 0, d = a.length; c < d; c++) e = a[c],
                    Wa[e] = Wa[e] || [], Wa[e].unshift(b)
            },
            prefilter: function(a, b) {
                b ? kb.unshift(a) : kb.push(a)
            }
        });
        j.Tween = N;
        N.prototype = {
            constructor: N,
            init: function(a, b, e, c, d, h) {
                this.elem = a;
                this.prop = e;
                this.easing = d || "swing";
                this.options = b;
                this.start = this.now = this.cur();
                this.end = c;
                this.unit = h || (j.cssNumber[e] ? "" : "px")
            },
            cur: function() {
                var a = N.propHooks[this.prop];
                return a && a.get ? a.get(this) : N.propHooks._default.get(this)
            },
            run: function(a) {
                var b, e = N.propHooks[this.prop];
                this.pos = this.options.duration ? b = j.easing[this.easing](a,
                    this.options.duration * a, 0, 1, this.options.duration) : b = a;
                this.now = (this.end - this.start) * b + this.start;
                this.options.step && this.options.step.call(this.elem, this.now, this);
                e && e.set ? e.set(this) : N.propHooks._default.set(this);
                return this
            }
        };
        N.prototype.init.prototype = N.prototype;
        N.propHooks = {
            _default: {
                get: function(a) {
                    if (null != a.elem[a.prop] && (!a.elem.style || null == a.elem.style[a.prop])) return a.elem[a.prop];
                    a = j.css(a.elem, a.prop, "");
                    return !a || "auto" === a ? 0 : a
                },
                set: function(a) {
                    if (j.fx.step[a.prop]) j.fx.step[a.prop](a);
                    else a.elem.style && (null != a.elem.style[j.cssProps[a.prop]] || j.cssHooks[a.prop]) ? j.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        };
        N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        };
        j.each(["toggle", "show", "hide"], function(a, b) {
            var e = j.fn[b];
            j.fn[b] = function(a, c, d) {
                return null == a || "boolean" === typeof a ? e.apply(this, arguments) : this.animate(ka(b, !0), a, c, d)
            }
        });
        j.fn.extend({
            fadeTo: function(a, b, e, c) {
                return this.filter(z).css("opacity",
                    0).show().end().animate({
                    opacity: b
                }, a, e, c)
            },
            animate: function(a, b, e, c) {
                var d = j.isEmptyObject(a),
                    h = j.speed(b, e, c),
                    g = function() {
                        var b = na(this, j.extend({}, a), h);
                        g.finish = function() {
                            b.stop(!0)
                        };
                        (d || j._data(this, "finish")) && b.stop(!0)
                    };
                g.finish = g;
                return d || !1 === h.queue ? this.each(g) : this.queue(h.queue, g)
            },
            stop: function(a, b, e) {
                var c = function(a) {
                    var b = a.stop;
                    delete a.stop;
                    b(e)
                };
                "string" !== typeof a && (e = b, b = a, a = f);
                b && !1 !== a && this.queue(a || "fx", []);
                return this.each(function() {
                    var b = !0,
                        d = null != a && a + "queueHooks",
                        h = j.timers,
                        g = j._data(this);
                    if (d) g[d] && g[d].stop && c(g[d]);
                    else
                        for (d in g) g[d] && (g[d].stop && Fd.test(d)) && c(g[d]);
                    for (d = h.length; d--;)
                        if (h[d].elem === this && (null == a || h[d].queue === a)) h[d].anim.stop(e), b = !1, h.splice(d, 1);
                    (b || !e) && j.dequeue(this, a)
                })
            },
            finish: function(a) {
                !1 !== a && (a = a || "fx");
                return this.each(function() {
                    var b, e = j._data(this),
                        c = e[a + "queue"];
                    b = e[a + "queueHooks"];
                    var d = j.timers,
                        h = c ? c.length : 0;
                    e.finish = !0;
                    j.queue(this, a, []);
                    b && (b.cur && b.cur.finish) && b.cur.finish.call(this);
                    for (b = d.length; b--;) d[b].elem ===
                        this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
                    for (b = 0; b < h; b++) c[b] && c[b].finish && c[b].finish.call(this);
                    delete e.finish
                })
            }
        });
        j.each({
            slideDown: ka("show"),
            slideUp: ka("hide"),
            slideToggle: ka("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            j.fn[a] = function(a, e, c) {
                return this.animate(b, a, e, c)
            }
        });
        j.speed = function(a, b, e) {
            var c = a && "object" === typeof a ? j.extend({}, a) : {
                complete: e || !e && b || j.isFunction(a) && a,
                duration: a,
                easing: e && b || b && !j.isFunction(b) &&
                    b
            };
            c.duration = j.fx.off ? 0 : "number" === typeof c.duration ? c.duration : c.duration in j.fx.speeds ? j.fx.speeds[c.duration] : j.fx.speeds._default;
            if (null == c.queue || !0 === c.queue) c.queue = "fx";
            c.old = c.complete;
            c.complete = function() {
                j.isFunction(c.old) && c.old.call(this);
                c.queue && j.dequeue(this, c.queue)
            };
            return c
        };
        j.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            }
        };
        j.timers = [];
        j.fx = N.prototype.init;
        j.fx.tick = function() {
            var a, b = j.timers,
                e = 0;
            for (Ia = j.now(); e < b.length; e++) a =
                b[e], !a() && b[e] === a && b.splice(e--, 1);
            b.length || j.fx.stop();
            Ia = f
        };
        j.fx.timer = function(a) {
            a() && j.timers.push(a) && j.fx.start()
        };
        j.fx.interval = 13;
        j.fx.start = function() {
            Eb || (Eb = setInterval(j.fx.tick, j.fx.interval))
        };
        j.fx.stop = function() {
            clearInterval(Eb);
            Eb = null
        };
        j.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        j.fx.step = {};
        j.expr && j.expr.filters && (j.expr.filters.animated = function(a) {
            return j.grep(j.timers, function(b) {
                return a === b.elem
            }).length
        });
        j.fn.offset = function(a) {
            if (arguments.length) return a === f ? this :
                this.each(function(b) {
                    j.offset.setOffset(this, a, b)
                });
            var b, e, c = {
                    top: 0,
                    left: 0
                },
                d = (e = this[0]) && e.ownerDocument;
            if (d) {
                b = d.documentElement;
                if (!j.contains(b, e)) return c;
                typeof e.getBoundingClientRect !== C && (c = e.getBoundingClientRect());
                e = ha(d);
                return {
                    top: c.top + (e.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: c.left + (e.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        };
        j.offset = {
            setOffset: function(a, b, e) {
                var c = j.css(a, "position");
                "static" === c && (a.style.position = "relative");
                var d = j(a),
                    h = d.offset(),
                    g = j.css(a,
                        "top"),
                    f = j.css(a, "left"),
                    l = {},
                    k = {};
                ("absolute" === c || "fixed" === c) && -1 < j.inArray("auto", [g, f]) ? (k = d.position(), c = k.top, f = k.left) : (c = parseFloat(g) || 0, f = parseFloat(f) || 0);
                j.isFunction(b) && (b = b.call(a, e, h));
                null != b.top && (l.top = b.top - h.top + c);
                null != b.left && (l.left = b.left - h.left + f);
                "using" in b ? b.using.call(a, l) : d.css(l)
            }
        };
        j.fn.extend({
            position: function() {
                if (this[0]) {
                    var a, b, e = {
                            top: 0,
                            left: 0
                        },
                        c = this[0];
                    "fixed" === j.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), j.nodeName(a[0],
                        "html") || (e = a.offset()), e.top += j.css(a[0], "borderTopWidth", !0), e.left += j.css(a[0], "borderLeftWidth", !0));
                    return {
                        top: b.top - e.top - j.css(c, "marginTop", !0),
                        left: b.left - e.left - j.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || A.documentElement; a && !j.nodeName(a, "html") && "static" === j.css(a, "position");) a = a.offsetParent;
                    return a || A.documentElement
                })
            }
        });
        j.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var e = /Y/.test(b);
            j.fn[a] =
                function(c) {
                    return j.access(this, function(a, c, d) {
                        var h = ha(a);
                        if (d === f) return h ? b in h ? h[b] : h.document.documentElement[c] : a[c];
                        h ? h.scrollTo(!e ? d : j(h).scrollLeft(), e ? d : j(h).scrollTop()) : a[c] = d
                    }, a, c, arguments.length, null)
                }
        });
        j.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            j.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(e, c) {
                j.fn[c] = function(c, d) {
                    var h = arguments.length && (e || "boolean" !== typeof c),
                        g = e || (!0 === c || !0 === d ? "margin" : "border");
                    return j.access(this, function(b, e, c) {
                        return j.isWindow(b) ?
                            b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : c === f ? j.css(b, e, g) : j.style(b, e, c, g)
                    }, b, h ? c : f, h, null)
                }
            })
        });
        a.jQuery = a.$ = j;
        "function" === typeof define && (define.amd && define.amd.jQuery) && define("jquery", [], function() {
            return j
        })
    })(window);
    (function(a, f) {
        function c(e, c) {
            var d, g;
            d = e.nodeName.toLowerCase();
            if ("area" === d) {
                d = e.parentNode;
                g = d.name;
                if (!e.href || !g || "map" !== d.nodeName.toLowerCase()) return !1;
                d = a("img[usemap=#" + g + "]")[0];
                return !!d && b(d)
            }
            return (/input|select|textarea|button|object/.test(d) ? !e.disabled : "a" === d ? e.href || c : c) && b(e)
        }

        function b(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var d = 0,
            g = /^ui-id-\d+$/;
        a.ui = a.ui || {};
        a.extend(a.ui, {
            version: "1.10.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        });
        a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" === typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus();
                            d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            scrollParent: function() {
                var b;
                b =
                    a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                    }).eq(0);
                return /fixed/.test(this.css("position")) || !b.length ? a(document) :
                    b
            },
            zIndex: function(b) {
                if (b !== f) return this.css("zIndex", b);
                if (this.length)
                    for (var b = a(this[0]), c; b.length && b[0] !== document;) {
                        c = b.css("position");
                        if ("absolute" === c || "relative" === c || "fixed" === c)
                            if (c = parseInt(b.css("zIndex"), 10), !isNaN(c) && 0 !== c) return c;
                        b = b.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++d)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    g.test(this.id) && a(this).removeAttr("id")
                })
            }
        });
        a.extend(a.expr[":"], {
            data: a.expr.createPseudo ?
                a.expr.createPseudo(function(b) {
                    return function(c) {
                        return !!a.data(c, b)
                    }
                }) : function(b, c, d) {
                    return !!a.data(b, d[3])
                },
            focusable: function(b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex"),
                    g = isNaN(d);
                return (g || 0 <= d) && c(b, !g)
            }
        });
        a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
            function d(b, e, c, h) {
                a.each(g, function() {
                    e -= parseFloat(a.css(b, "padding" + this)) || 0;
                    c && (e -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
                    h && (e -= parseFloat(a.css(b, "margin" +
                        this)) || 0)
                });
                return e
            }
            var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                k = c.toLowerCase(),
                p = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + c] = function(b) {
                return b === f ? p["inner" + c].call(this) : this.each(function() {
                    a(this).css(k, d(this, b) + "px")
                })
            };
            a.fn["outer" + c] = function(b, e) {
                return "number" !== typeof b ? p["outer" + c].call(this, b) : this.each(function() {
                    a(this).css(k, d(this, b, !0, e) + "px")
                })
            }
        });
        a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        });
        if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
            var k = a.fn.removeData;
            a.fn.removeData = function(b) {
                return arguments.length ? k.call(this, a.camelCase(b)) : k.call(this)
            }
        }
        a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        a.support.selectstart = "onselectstart" in document.createElement("div");
        a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        a.extend(a.ui, {
            plugin: {
                add: function(b, c, d) {
                    var g, b = a.ui[b].prototype;
                    for (g in d) b.plugins[g] = b.plugins[g] || [], b.plugins[g].push([c, d[g]])
                },
                call: function(a, b, c) {
                    var d = a.plugins[b];
                    if (d && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                        for (b = 0; b < d.length; b++) a.options[d[b][0]] && d[b][1].apply(a.element, c)
                }
            },
            hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    g = !1;
                if (0 < b[d]) return !0;
                b[d] = 1;
                g = 0 < b[d];
                b[d] = 0;
                return g
            }
        })
    })(jQuery);
    (function(a, f) {
        var c = 0,
            b = Array.prototype.slice,
            d = a.cleanData;
        a.cleanData = function(b) {
            for (var c = 0, e; null != (e = b[c]); c++) try {
                a(e).triggerHandler("remove")
            } catch (h) {}
            d(b)
        };
        a.widget = function(b, c, e) {
            var d, f, m, n, p = {},
                q = b.split(".")[0],
                b = b.split(".")[1];
            d = q + "-" + b;
            e || (e = c, c = a.Widget);
            a.expr[":"][d.toLowerCase()] = function(b) {
                return !!a.data(b, d)
            };
            a[q] = a[q] || {};
            f = a[q][b];
            m = a[q][b] = function(a, b) {
                if (!this._createWidget) return new m(a, b);
                arguments.length && this._createWidget(a, b)
            };
            a.extend(m, f, {
                version: e.version,
                _proto: a.extend({}, e),
                _childConstructors: []
            });
            n = new c;
            n.options = a.widget.extend({}, n.options);
            a.each(e, function(b, e) {
                if (a.isFunction(e)) {
                    var d = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        h = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    p[b] = function() {
                        var a = this._super,
                            b = this._superApply,
                            c;
                        this._super = d;
                        this._superApply = h;
                        c = e.apply(this, arguments);
                        this._super = a;
                        this._superApply = b;
                        return c
                    }
                } else p[b] = e
            });
            m.prototype = a.widget.extend(n, {
                widgetEventPrefix: f ? n.widgetEventPrefix : b
            }, p, {
                constructor: m,
                namespace: q,
                widgetName: b,
                widgetFullName: d
            });
            f ? (a.each(f._childConstructors, function(b, e) {
                var c = e.prototype;
                a.widget(c.namespace + "." + c.widgetName, m, e._proto)
            }), delete f._childConstructors) : c._childConstructors.push(m);
            a.widget.bridge(b, m)
        };
        a.widget.extend = function(c) {
            for (var d = b.call(arguments, 1), e = 0, h = d.length, l, m; e < h; e++)
                for (l in d[e]) m = d[e][l], d[e].hasOwnProperty(l) && m !== f && (c[l] = a.isPlainObject(m) ? a.isPlainObject(c[l]) ? a.widget.extend({}, c[l], m) : a.widget.extend({}, m) : m);
            return c
        };
        a.widget.bridge =
            function(c, d) {
                var e = d.prototype.widgetFullName || c;
                a.fn[c] = function(h) {
                    var l = "string" === typeof h,
                        m = b.call(arguments, 1),
                        n = this,
                        h = !l && m.length ? a.widget.extend.apply(null, [h].concat(m)) : h;
                    l ? this.each(function() {
                        var b, d = a.data(this, e);
                        if (!d) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + h + "'");
                        if (!a.isFunction(d[h]) || "_" === h.charAt(0)) return a.error("no such method '" + h + "' for " + c + " widget instance");
                        b = d[h].apply(d, m);
                        if (b !== d && b !== f) return n = b && b.jquery ?
                            n.pushStack(b.get()) : b, !1
                    }) : this.each(function() {
                        var b = a.data(this, e);
                        b ? b.option(h || {})._init() : a.data(this, e, new d(h, this))
                    });
                    return n
                }
            };
        a.Widget = function() {};
        a.Widget._childConstructors = [];
        a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0];
                this.element = a(d);
                this.uuid = c++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.options = a.widget.extend({}, this.options,
                    this._getCreateOptions(), b);
                this.bindings = a();
                this.hoverable = a();
                this.focusable = a();
                d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
                this._create();
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var e = b,
                    d, l, m;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" === typeof b)
                    if (e = {}, d = b.split("."), b = d.shift(), d.length) {
                        l = e[b] = a.widget.extend({}, this.options[b]);
                        for (m = 0; m < d.length - 1; m++) l[d[m]] = l[d[m]] || {}, l = l[d[m]];
                        b = d.pop();
                        if (c === f) return l[b] === f ? null : l[b];
                        l[b] = c
                    } else {
                        if (c === f) return this.options[b] === f ? null : this.options[b];
                        e[b] = c
                    }
                this._setOptions(e);
                return this
            },
            _setOptions: function(a) {
                for (var b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a,
                b) {
                this.options[a] = b;
                "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
                return this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(b, c, e) {
                var d, f = this;
                "boolean" !== typeof b && (e = c, c = b, b = !1);
                e ? (c = d = a(c), this.bindings = this.bindings.add(c)) : (e = c, c = this.element, d =
                    this.widget());
                a.each(e, function(e, n) {
                    function p() {
                        if (b || !(!0 === f.options.disabled || a(this).hasClass("ui-state-disabled"))) return ("string" === typeof n ? f[n] : n).apply(f, arguments)
                    }
                    "string" !== typeof n && (p.guid = n.guid = n.guid || p.guid || a.guid++);
                    var q = e.match(/^(\w+)\s*(.*)$/),
                        r = q[1] + f.eventNamespace;
                    (q = q[2]) ? d.delegate(q, r, p): c.bind(r, p)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                var e = this;
                return setTimeout(function() {
                    return ("string" ===
                        typeof a ? e[a] : a).apply(e, arguments)
                }, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b);
                this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b);
                this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, e) {
                var d,
                    f = this.options[b],
                    e = e || {},
                    c = a.Event(c);
                c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
                c.target = this.element[0];
                if (b = c.originalEvent)
                    for (d in b) d in c || (c[d] = b[d]);
                this.element.trigger(c, e);
                return !(a.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(e)) || c.isDefaultPrevented())
            }
        };
        a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(e, d, f) {
                "string" === typeof d && (d = {
                    effect: d
                });
                var m, n = !d ? b : !0 === d || "number" === typeof d ? c : d.effect || c,
                    d =
                    d || {};
                "number" === typeof d && (d = {
                    duration: d
                });
                m = !a.isEmptyObject(d);
                d.complete = f;
                d.delay && e.delay(d.delay);
                if (m && a.effects && a.effects.effect[n]) e[b](d);
                else if (n !== b && e[n]) e[n](d.duration, d.easing, f);
                else e.queue(function(c) {
                    a(this)[b]();
                    f && f.call(e[0]);
                    c()
                })
            }
        })
    })(jQuery);
    (function(a) {
        var f = !1;
        a(document).mouseup(function() {
            f = !1
        });
        a.widget("ui.mouse", {
            version: "1.10.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var c = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return c._mouseDown(a)
                }).bind("click." + this.widgetName, function(b) {
                    if (!0 === a.data(b.target, c.widgetName + ".preventClickEvent")) return a.removeData(b.target, c.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
                });
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName);
                this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(c) {
                if (!f) {
                    this._mouseStarted && this._mouseUp(c);
                    this._mouseDownEvent = c;
                    var b = this,
                        d = 1 === c.which,
                        g = "string" === typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                    if (!d || g || !this._mouseCapture(c)) return !0;
                    this.mouseDelayMet = !this.options.delay;
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        b.mouseDelayMet = !0
                    }, this.options.delay));
                    if (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = !1 !== this._mouseStart(c), !this._mouseStarted)) return c.preventDefault(), !0;
                    !0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent");
                    this._mouseMoveDelegate = function(a) {
                        return b._mouseMove(a)
                    };
                    this._mouseUpDelegate = function(a) {
                        return b._mouseUp(a)
                    };
                    a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                    c.preventDefault();
                    return f = !0
                }
            },
            _mouseMove: function(c) {
                if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button) return this._mouseUp(c);
                if (this._mouseStarted) return this._mouseDrag(c), c.preventDefault();
                this._mouseDistanceMet(c) && this._mouseDelayMet(c) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, c)) ? this._mouseDrag(c) : this._mouseUp(c));
                return !this._mouseStarted
            },
            _mouseUp: function(c) {
                a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c));
                return !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    })(jQuery);
    (function(a, f) {
        function c(a, b, e) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? e / 100 : 1)]
        }
        a.ui = a.ui || {};
        var b, d = Math.max,
            g = Math.abs,
            k = Math.round,
            e = /left|center|right/,
            h = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/,
            m = /^\w+/,
            n = /%$/,
            p = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (b !== f) return b;
                var e, c, d = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                c = d.children()[0];
                a("body").append(d);
                e = c.offsetWidth;
                d.css("overflow", "scroll");
                c = c.offsetWidth;
                e === c && (c = d[0].clientWidth);
                d.remove();
                return b = e - c
            },
            getScrollInfo: function(b) {
                var e = b.isWindow ? "" : b.element.css("overflow-x"),
                    c = b.isWindow ? "" : b.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && b.width < b.element[0].scrollWidth;
                return {
                    width: "scroll" === c || "auto" === c && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                    height: e ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(b) {
                var b = a(b || window),
                    e = a.isWindow(b[0]);
                return {
                    element: b,
                    isWindow: e,
                    offset: b.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: b.scrollLeft(),
                    scrollTop: b.scrollTop(),
                    width: e ? b.width() : b.outerWidth(),
                    height: e ? b.height() : b.outerHeight()
                }
            }
        };
        a.fn.position = function(b) {
            if (!b || !b.of) return p.apply(this, arguments);
            var b = a.extend({}, b),
                f, n, s, y, q, r, t = a(b.of),
                v = a.position.getWithinInfo(b.within),
                w = a.position.getScrollInfo(v),
                L = (b.collision || "flip").split(" "),
                F = {};
            r = t;
            var Y = r[0];
            r = 9 === Y.nodeType ? {
                width: r.width(),
                height: r.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(Y) ? {
                width: r.width(),
                height: r.height(),
                offset: {
                    top: r.scrollTop(),
                    left: r.scrollLeft()
                }
            } : Y.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: Y.pageY,
                    left: Y.pageX
                }
            } : {
                width: r.outerWidth(),
                height: r.outerHeight(),
                offset: r.offset()
            };
            t[0].preventDefault && (b.at = "left top");
            n = r.width;
            s = r.height;
            y = r.offset;
            q = a.extend({}, y);
            a.each(["my", "at"], function() {
                var a = (b[this] || "").split(" "),
                    c, d;
                1 === a.length && (a = e.test(a[0]) ? a.concat(["center"]) : h.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = e.test(a[0]) ? a[0] : "center";
                a[1] = h.test(a[1]) ?
                    a[1] : "center";
                c = l.exec(a[0]);
                d = l.exec(a[1]);
                F[this] = [c ? c[0] : 0, d ? d[0] : 0];
                b[this] = [m.exec(a[0])[0], m.exec(a[1])[0]]
            });
            1 === L.length && (L[1] = L[0]);
            "right" === b.at[0] ? q.left += n : "center" === b.at[0] && (q.left += n / 2);
            "bottom" === b.at[1] ? q.top += s : "center" === b.at[1] && (q.top += s / 2);
            f = c(F.at, n, s);
            q.left += f[0];
            q.top += f[1];
            return this.each(function() {
                var e, h, l = a(this),
                    m = l.outerWidth(),
                    p = l.outerHeight(),
                    r = parseInt(a.css(this, "marginLeft"), 10) || 0,
                    I = parseInt(a.css(this, "marginTop"), 10) || 0,
                    Y = m + r + (parseInt(a.css(this, "marginRight"),
                        10) || 0) + w.width,
                    A = p + I + (parseInt(a.css(this, "marginBottom"), 10) || 0) + w.height,
                    H = a.extend({}, q),
                    aa = c(F.my, l.outerWidth(), l.outerHeight());
                "right" === b.my[0] ? H.left -= m : "center" === b.my[0] && (H.left -= m / 2);
                "bottom" === b.my[1] ? H.top -= p : "center" === b.my[1] && (H.top -= p / 2);
                H.left += aa[0];
                H.top += aa[1];
                a.support.offsetFractions || (H.left = k(H.left), H.top = k(H.top));
                e = {
                    marginLeft: r,
                    marginTop: I
                };
                a.each(["left", "top"], function(c, d) {
                    if (a.ui.position[L[c]]) a.ui.position[L[c]][d](H, {
                        targetWidth: n,
                        targetHeight: s,
                        elemWidth: m,
                        elemHeight: p,
                        collisionPosition: e,
                        collisionWidth: Y,
                        collisionHeight: A,
                        offset: [f[0] + aa[0], f[1] + aa[1]],
                        my: b.my,
                        at: b.at,
                        within: v,
                        elem: l
                    })
                });
                b.using && (h = function(a) {
                    var e = y.left - H.left,
                        c = e + n - m,
                        h = y.top - H.top,
                        f = h + s - p,
                        k = {
                            target: {
                                element: t,
                                left: y.left,
                                top: y.top,
                                width: n,
                                height: s
                            },
                            element: {
                                element: l,
                                left: H.left,
                                top: H.top,
                                width: m,
                                height: p
                            },
                            horizontal: 0 > c ? "left" : 0 < e ? "right" : "center",
                            vertical: 0 > f ? "top" : 0 < h ? "bottom" : "middle"
                        };
                    n < m && g(e + c) < n && (k.horizontal = "center");
                    s < p && g(h + f) < s && (k.vertical = "middle");
                    k.important =
                        d(g(e), g(c)) > d(g(h), g(f)) ? "horizontal" : "vertical";
                    b.using.call(this, a, k)
                });
                l.offset(a.extend(H, {
                    using: h
                }))
            })
        };
        a.ui.position = {
            fit: {
                left: function(a, b) {
                    var e = b.within,
                        c = e.isWindow ? e.scrollLeft : e.offset.left,
                        h = e.width,
                        g = a.left - b.collisionPosition.marginLeft,
                        e = c - g,
                        f = g + b.collisionWidth - h - c;
                    b.collisionWidth > h ? 0 < e && 0 >= f ? (c = a.left + e + b.collisionWidth - h - c, a.left += e - c) : a.left = 0 < f && 0 >= e ? c : e > f ? c + h - b.collisionWidth : c : a.left = 0 < e ? a.left + e : 0 < f ? a.left - f : d(a.left - g, a.left)
                },
                top: function(a, b) {
                    var e = b.within,
                        c = e.isWindow ?
                        e.scrollTop : e.offset.top,
                        h = b.within.height,
                        g = a.top - b.collisionPosition.marginTop,
                        e = c - g,
                        f = g + b.collisionHeight - h - c;
                    b.collisionHeight > h ? 0 < e && 0 >= f ? (c = a.top + e + b.collisionHeight - h - c, a.top += e - c) : a.top = 0 < f && 0 >= e ? c : e > f ? c + h - b.collisionHeight : c : a.top = 0 < e ? a.top + e : 0 < f ? a.top - f : d(a.top - g, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var e = b.within,
                        c = e.offset.left + e.scrollLeft,
                        d = e.width,
                        h = e.isWindow ? e.scrollLeft : e.offset.left,
                        f = a.left - b.collisionPosition.marginLeft,
                        e = f - h,
                        l = f + b.collisionWidth - d - h,
                        f = "left" === b.my[0] ? -b.elemWidth :
                        "right" === b.my[0] ? b.elemWidth : 0,
                        k = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        m = -2 * b.offset[0];
                    if (0 > e) {
                        if (c = a.left + f + k + m + b.collisionWidth - d - c, 0 > c || c < g(e)) a.left += f + k + m
                    } else if (0 < l && (c = a.left - b.collisionPosition.marginLeft + f + k + m - h, 0 < c || g(c) < l)) a.left += f + k + m
                },
                top: function(a, b) {
                    var e = b.within,
                        c = e.offset.top + e.scrollTop,
                        d = e.height,
                        h = e.isWindow ? e.scrollTop : e.offset.top,
                        f = a.top - b.collisionPosition.marginTop,
                        e = f - h,
                        l = f + b.collisionHeight - d - h,
                        f = "top" === b.my[1] ? -b.elemHeight : "bottom" ===
                        b.my[1] ? b.elemHeight : 0,
                        k = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        m = -2 * b.offset[1];
                    if (0 > e) {
                        if (c = a.top + f + k + m + b.collisionHeight - d - c, a.top + f + k + m > e && (0 > c || c < g(e))) a.top += f + k + m
                    } else if (0 < l && (c = a.top - b.collisionPosition.marginTop + f + k + m - h, a.top + f + k + m > l && (0 < c || g(c) < l))) a.top += f + k + m
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this,
                        arguments)
                }
            }
        };
        var q, r, v, t, w = document.getElementsByTagName("body")[0];
        v = document.createElement("div");
        q = document.createElement(w ? "div" : "body");
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        w && a.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (t in r) q.style[t] = r[t];
        q.appendChild(v);
        r = w || document.documentElement;
        r.insertBefore(q, r.firstChild);
        v.style.cssText = "position: absolute; left: 10.7432222px;";
        v = a(v).offset().left;
        a.support.offsetFractions = 10 < v &&
            11 > v;
        q.innerHTML = "";
        r.removeChild(q)
    })(jQuery);
    (function(a) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper &&
                    !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative");
                this.options.addClasses && this.element.addClass("ui-draggable");
                this.options.disabled && this.element.addClass("ui-draggable-disabled");
                this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy()
            },
            _mouseCapture: function(f) {
                var c = this.options;
                if (this.helper || c.disabled || 0 < a(f.target).closest(".ui-resizable-handle").length) return !1;
                this.handle = this._getHandle(f);
                if (!this.handle) return !1;
                a(!0 === c.iframeFix ? "iframe" : c.iframeFix).each(function() {
                    a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1E3
                    }).css(a(this).offset()).appendTo("body")
                });
                return !0
            },
            _mouseStart: function(f) {
                var c = this.options;
                this.helper = this._createHelper(f);
                this.helper.addClass("ui-draggable-dragging");
                this._cacheHelperProportions();
                a.ui.ddmanager && (a.ui.ddmanager.current = this);
                this._cacheMargins();
                this.cssPosition = this.helper.css("position");
                this.scrollParent = this.helper.scrollParent();
                this.offset = this.positionAbs = this.element.offset();
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                };
                a.extend(this.offset, {
                    click: {
                        left: f.pageX - this.offset.left,
                        top: f.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                });
                this.originalPosition = this.position = this._generatePosition(f);
                this.originalPageX = f.pageX;
                this.originalPageY = f.pageY;
                c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
                c.containment && this._setContainment();
                if (!1 === this._trigger("start", f)) return this._clear(), !1;
                this._cacheHelperProportions();
                a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, f);
                this._mouseDrag(f, !0);
                a.ui.ddmanager && a.ui.ddmanager.dragStart(this, f);
                return !0
            },
            _mouseDrag: function(f, c) {
                this.position = this._generatePosition(f);
                this.positionAbs = this._convertPositionTo("absolute");
                if (!c) {
                    var b = this._uiHash();
                    if (!1 === this._trigger("drag", f, b)) return this._mouseUp({}), !1;
                    this.position = b.position
                }
                if (!this.options.axis || "y" !== this.options.axis) this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || "x" !== this.options.axis) this.helper[0].style.top = this.position.top + "px";
                a.ui.ddmanager && a.ui.ddmanager.drag(this, f);
                return !1
            },
            _mouseStop: function(f) {
                var c, b = this,
                    d = !1,
                    g = !1;
                a.ui.ddmanager && !this.options.dropBehaviour && (g = a.ui.ddmanager.drop(this, f));
                this.dropped && (g =
                    this.dropped, this.dropped = !1);
                for (c = this.element[0]; c && (c = c.parentNode);) c === document && (d = !0);
                if (!d && "original" === this.options.helper) return !1;
                "invalid" === this.options.revert && !g || "valid" === this.options.revert && g || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, g) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== b._trigger("stop", f) && b._clear()
                }) : !1 !== this._trigger("stop", f) && this._clear();
                return !1
            },
            _mouseUp: function(f) {
                a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                });
                a.ui.ddmanager && a.ui.ddmanager.dragStop(this, f);
                return a.ui.mouse.prototype._mouseUp.call(this, f)
            },
            cancel: function() {
                this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
                return this
            },
            _getHandle: function(f) {
                return this.options.handle ? !!a(f.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(f) {
                var c = this.options,
                    f = a.isFunction(c.helper) ?
                    a(c.helper.apply(this.element[0], [f])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                f.parents("body").length || f.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo);
                f[0] !== this.element[0] && !/(fixed|absolute)/.test(f.css("position")) && f.css("position", "absolute");
                return f
            },
            _adjustOffsetFromHelper: function(f) {
                "string" === typeof f && (f = f.split(" "));
                a.isArray(f) && (f = {
                    left: +f[0],
                    top: +f[1] || 0
                });
                "left" in f && (this.offset.click.left = f.left + this.margins.left);
                "right" in
                f && (this.offset.click.left = this.helperProportions.width - f.right + this.margins.left);
                "top" in f && (this.offset.click.top = f.top + this.margins.top);
                "bottom" in f && (this.offset.click.top = this.helperProportions.height - f.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var f = this.offsetParent.offset();
                "absolute" === this.cssPosition && (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) && (f.left += this.scrollParent.scrollLeft(),
                    f.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) f = {
                    top: 0,
                    left: 0
                };
                return {
                    top: f.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: f.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var f,
                    c, b;
                f = this.options;
                "parent" === f.containment && (f.containment = this.helper[0].parentNode);
                if ("document" === f.containment || "window" === f.containment) this.containment = ["document" === f.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === f.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === f.containment ? 0 : a(window).scrollLeft()) + a("document" === f.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
                    ("document" === f.containment ? 0 : a(window).scrollTop()) + (a("document" === f.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
                if (!/^(document|window|parent)$/.test(f.containment) && f.containment.constructor !== Array) {
                    if (c = a(f.containment), b = c[0]) f = "hidden" !== a(b).css("overflow"), this.containment = [(parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0), (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"),
                        10) || 0), (f ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderRightWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderBottomWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
                } else f.containment.constructor === Array &&
                    (this.containment = f.containment)
            },
            _convertPositionTo: function(f, c) {
                c || (c = this.position);
                var b = "absolute" === f ? 1 : -1,
                    d = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    g = /(html|body)/i.test(d[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : d.scrollTop()) * b,
                    left: c.left + this.offset.relative.left * b + this.offset.parent.left *
                        b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : d.scrollLeft()) * b
                }
            },
            _generatePosition: function(f) {
                var c, b, d, g = this.options,
                    k = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    e = /(html|body)/i.test(k[0].tagName);
                d = f.pageX;
                b = f.pageY;
                this.originalPosition && (this.containment && (this.relative_container ? (c = this.relative_container.offset(), c = [this.containment[0] + c.left, this.containment[1] +
                    c.top, this.containment[2] + c.left, this.containment[3] + c.top
                ]) : c = this.containment, f.pageX - this.offset.click.left < c[0] && (d = c[0] + this.offset.click.left), f.pageY - this.offset.click.top < c[1] && (b = c[1] + this.offset.click.top), f.pageX - this.offset.click.left > c[2] && (d = c[2] + this.offset.click.left), f.pageY - this.offset.click.top > c[3] && (b = c[3] + this.offset.click.top)), g.grid && (b = g.grid[1] ? this.originalPageY + Math.round((b - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, b = c ? b - this.offset.click.top >= c[1] ||
                    b - this.offset.click.top > c[3] ? b : b - this.offset.click.top >= c[1] ? b - g.grid[1] : b + g.grid[1] : b, d = g.grid[0] ? this.originalPageX + Math.round((d - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, d = c ? d - this.offset.click.left >= c[0] || d - this.offset.click.left > c[2] ? d : d - this.offset.click.left >= c[0] ? d - g.grid[0] : d + g.grid[0] : d));
                return {
                    top: b - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : k.scrollTop()),
                    left: d - this.offset.click.left -
                        this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : k.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging");
                this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
                this.helper = null;
                this.cancelHelperRemoval = !1
            },
            _trigger: function(f, c, b) {
                b = b || this._uiHash();
                a.ui.plugin.call(this, f, [c, b]);
                "drag" === f && (this.positionAbs = this._convertPositionTo("absolute"));
                return a.Widget.prototype._trigger.call(this,
                    f, c, b)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        });
        a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(f, c) {
                var b = a(this).data("ui-draggable"),
                    d = b.options,
                    g = a.extend({}, c, {
                        item: b.element
                    });
                b.sortables = [];
                a(d.connectToSortable).each(function() {
                    var c = a.data(this, "ui-sortable");
                    c && !c.options.disabled && (b.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate",
                        f, g))
                })
            },
            stop: function(f, c) {
                var b = a(this).data("ui-draggable"),
                    d = a.extend({}, c, {
                        item: b.element
                    });
                a.each(b.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, b.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(f), this.instance.options.helper = this.instance.options._helper, "original" === b.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", f, d))
                })
            },
            drag: function(f, c) {
                var b = a(this).data("ui-draggable"),
                    d = this;
                a.each(b.sortables, function() {
                    var g = !1,
                        k = this;
                    this.instance.positionAbs = b.positionAbs;
                    this.instance.helperProportions = b.helperProportions;
                    this.instance.offset.click = b.offset.click;
                    this.instance._intersectsWith(this.instance.containerCache) && (g = !0, a.each(b.sortables, function() {
                        this.instance.positionAbs = b.positionAbs;
                        this.instance.helperProportions = b.helperProportions;
                        this.instance.offset.click =
                            b.offset.click;
                        this !== k && (this.instance._intersectsWith(this.instance.containerCache) && a.contains(k.instance.element[0], this.instance.element[0])) && (g = !1);
                        return g
                    }));
                    g ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                            return c.helper[0]
                        }, f.target = this.instance.currentItem[0], this.instance._mouseCapture(f, !0), this.instance._mouseStart(f, !0, !0), this.instance.offset.click.top = b.offset.click.top, this.instance.offset.click.left = b.offset.click.left, this.instance.offset.parent.left -= b.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= b.offset.parent.top - this.instance.offset.parent.top, b._trigger("toSortable", f), b.dropped = this.instance.element, b.currentItem = b.element, this.instance.fromOutside = b), this.instance.currentItem && this.instance._mouseDrag(f)) : this.instance.isOver &&
                        (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", f, this.instance._uiHash(this.instance)), this.instance._mouseStop(f, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), b._trigger("fromSortable", f), b.dropped = !1)
                })
            }
        });
        a.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var f = a("body"),
                    c = a(this).data("ui-draggable").options;
                f.css("cursor") && (c._cursor = f.css("cursor"));
                f.css("cursor", c.cursor)
            },
            stop: function() {
                try {
                    var f = a(this).data("ui-draggable").options;
                    f._cursor && a("body").css("cursor", f._cursor)
                } catch (c) {
                    a("body").css("cursor", "")
                }
            }
        });
        a.ui.plugin.add("draggable", "opacity", {
            start: function(f, c) {
                var b = a(c.helper),
                    d = a(this).data("ui-draggable").options;
                b.css("opacity") && (d._opacity = b.css("opacity"));
                b.css("opacity", d.opacity)
            },
            stop: function(f, c) {
                var b = a(this).data("ui-draggable").options;
                b._opacity && a(c.helper).css("opacity",
                    b._opacity)
            }
        });
        a.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var f = a(this).data("ui-draggable");
                f.scrollParent[0] !== document && "HTML" !== f.scrollParent[0].tagName && (f.overflowOffset = f.scrollParent.offset())
            },
            drag: function(f) {
                var c = a(this).data("ui-draggable"),
                    b = c.options,
                    d = !1;
                if (c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName) {
                    if (!b.axis || "x" !== b.axis) c.overflowOffset.top + c.scrollParent[0].offsetHeight - f.pageY < b.scrollSensitivity ? c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop +
                        b.scrollSpeed : f.pageY - c.overflowOffset.top < b.scrollSensitivity && (c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop - b.scrollSpeed);
                    if (!b.axis || "y" !== b.axis) c.overflowOffset.left + c.scrollParent[0].offsetWidth - f.pageX < b.scrollSensitivity ? c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft + b.scrollSpeed : f.pageX - c.overflowOffset.left < b.scrollSensitivity && (c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft - b.scrollSpeed)
                } else {
                    if (!b.axis || "x" !== b.axis) f.pageY - a(document).scrollTop() <
                        b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (f.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed));
                    if (!b.axis || "y" !== b.axis) f.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (f.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed))
                }!1 !==
                    d && (a.ui.ddmanager && !b.dropBehaviour) && a.ui.ddmanager.prepareOffsets(c, f)
            }
        });
        a.ui.plugin.add("draggable", "snap", {
            start: function() {
                var f = a(this).data("ui-draggable"),
                    c = f.options;
                f.snapElements = [];
                a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                    var b = a(this),
                        c = b.offset();
                    this !== f.element[0] && f.snapElements.push({
                        item: this,
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        top: c.top,
                        left: c.left
                    })
                })
            },
            drag: function(f, c) {
                var b, d, g, k, e, h, l, m, n, p, q = a(this).data("ui-draggable"),
                    r = q.options,
                    v = r.snapTolerance,
                    t = c.offset.left,
                    w = t + q.helperProportions.width,
                    x = c.offset.top,
                    z = x + q.helperProportions.height;
                for (n = q.snapElements.length - 1; 0 <= n; n--) e = q.snapElements[n].left, h = e + q.snapElements[n].width, l = q.snapElements[n].top, m = l + q.snapElements[n].height, e - v < t && t < h + v && l - v < x && x < m + v || e - v < t && t < h + v && l - v < z && z < m + v || e - v < w && w < h + v && l - v < x && x < m + v || e - v < w && w < h + v && l - v < z && z < m + v ? ("inner" !== r.snapMode && (b = Math.abs(l - z) <= v, d = Math.abs(m - x) <= v, g = Math.abs(e - w) <= v, k = Math.abs(h - t) <= v, b && (c.position.top = q._convertPositionTo("relative", {
                        top: l - q.helperProportions.height,
                        left: 0
                    }).top - q.margins.top), d && (c.position.top = q._convertPositionTo("relative", {
                        top: m,
                        left: 0
                    }).top - q.margins.top), g && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: e - q.helperProportions.width
                    }).left - q.margins.left), k && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - q.margins.left)), p = b || d || g || k, "outer" !== r.snapMode && (b = Math.abs(l - x) <= v, d = Math.abs(m - z) <= v, g = Math.abs(e - t) <= v, k = Math.abs(h - w) <= v, b && (c.position.top = q._convertPositionTo("relative", {
                        top: l,
                        left: 0
                    }).top - q.margins.top), d && (c.position.top = q._convertPositionTo("relative", {
                        top: m - q.helperProportions.height,
                        left: 0
                    }).top - q.margins.top), g && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: e
                    }).left - q.margins.left), k && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: h - q.helperProportions.width
                    }).left - q.margins.left)), !q.snapElements[n].snapping && (b || d || g || k || p) && q.options.snap.snap && q.options.snap.snap.call(q.element, f, a.extend(q._uiHash(), {
                        snapItem: q.snapElements[n].item
                    })),
                    q.snapElements[n].snapping = b || d || g || k || p) : (q.snapElements[n].snapping && q.options.snap.release && q.options.snap.release.call(q.element, f, a.extend(q._uiHash(), {
                    snapItem: q.snapElements[n].item
                })), q.snapElements[n].snapping = !1)
            }
        });
        a.ui.plugin.add("draggable", "stack", {
            start: function() {
                var f, c = this.data("ui-draggable").options,
                    c = a.makeArray(a(c.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                c.length && (f = parseInt(a(c[0]).css("zIndex"), 10) || 0, a(c).each(function(b) {
                    a(this).css("zIndex",
                        f + b)
                }), this.css("zIndex", f + c.length))
            }
        });
        a.ui.plugin.add("draggable", "zIndex", {
            start: function(f, c) {
                var b = a(c.helper),
                    d = a(this).data("ui-draggable").options;
                b.css("zIndex") && (d._zIndex = b.css("zIndex"));
                b.css("zIndex", d.zIndex)
            },
            stop: function(f, c) {
                var b = a(this).data("ui-draggable").options;
                b._zIndex && a(c.helper).css("zIndex", b._zIndex)
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.droppable", {
            version: "1.10.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var f = this.options,
                    c = f.accept;
                this.isover = !1;
                this.isout = !0;
                this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                };
                this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
                a.ui.ddmanager.droppables[f.scope] =
                    a.ui.ddmanager.droppables[f.scope] || [];
                a.ui.ddmanager.droppables[f.scope].push(this);
                f.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var f = 0, c = a.ui.ddmanager.droppables[this.options.scope]; f < c.length; f++) c[f] === this && c.splice(f, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(f, c) {
                "accept" === f && (this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                });
                a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(f) {
                var c =
                    a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass);
                c && this._trigger("activate", f, this.ui(c))
            },
            _deactivate: function(f) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                c && this._trigger("deactivate", f, this.ui(c))
            },
            _over: function(f) {
                var c = a.ui.ddmanager.current;
                if (c && (c.currentItem || c.element)[0] !== this.element[0])
                    if (this.accept.call(this.element[0], c.currentItem || c.element)) this.options.hoverClass &&
                        this.element.addClass(this.options.hoverClass), this._trigger("over", f, this.ui(c))
            },
            _out: function(f) {
                var c = a.ui.ddmanager.current;
                if (c && (c.currentItem || c.element)[0] !== this.element[0])
                    if (this.accept.call(this.element[0], c.currentItem || c.element)) this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", f, this.ui(c))
            },
            _drop: function(f, c) {
                var b = c || a.ui.ddmanager.current,
                    d = !1;
                if (!b || (b.currentItem || b.element)[0] === this.element[0]) return !1;
                this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var c =
                        a.data(this, "ui-droppable");
                    if (c.options.greedy && !c.options.disabled && c.options.scope === b.options.scope && c.accept.call(c.element[0], b.currentItem || b.element) && a.ui.intersect(b, a.extend(c, {
                            offset: c.element.offset()
                        }), c.options.tolerance)) return d = !0, !1
                });
                return d ? !1 : this.accept.call(this.element[0], b.currentItem || b.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", f,
                    this.ui(b)), this.element) : !1
            },
            ui: function(a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        });
        a.ui.intersect = function(a, c, b) {
            if (!c.offset) return !1;
            var d = (a.positionAbs || a.position.absolute).left,
                g = d + a.helperProportions.width,
                k = (a.positionAbs || a.position.absolute).top,
                e = k + a.helperProportions.height,
                h = c.offset.left,
                l = h + c.proportions.width,
                m = c.offset.top,
                n = m + c.proportions.height;
            switch (b) {
                case "fit":
                    return h <= d && g <= l && m <= k && e <= n;
                case "intersect":
                    return h <
                        d + a.helperProportions.width / 2 && g - a.helperProportions.width / 2 < l && m < k + a.helperProportions.height / 2 && e - a.helperProportions.height / 2 < n;
                case "pointer":
                    return b = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, a = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, a > m && a < m + c.proportions.height && b > h && b < h + c.proportions.width;
                case "touch":
                    return (k >= m && k <= n || e >= m && e <= n || k < m && e > n) && (d >= h && d <= l || g >= h && g <= l || d < h && g > l);
                default:
                    return !1
            }
        };
        a.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(f, c) {
                var b, d, g = a.ui.ddmanager.droppables[f.options.scope] || [],
                    k = c ? c.type : null,
                    e = (f.currentItem || f.element).find(":data(ui-droppable)").addBack();
                b = 0;
                a: for (; b < g.length; b++)
                    if (!(g[b].options.disabled || f && !g[b].accept.call(g[b].element[0], f.currentItem || f.element))) {
                        for (d = 0; d < e.length; d++)
                            if (e[d] === g[b].element[0]) {
                                g[b].proportions.height = 0;
                                continue a
                            }
                        g[b].visible = "none" !== g[b].element.css("display");
                        g[b].visible && ("mousedown" === k && g[b]._activate.call(g[b],
                            c), g[b].offset = g[b].element.offset(), g[b].proportions = {
                            width: g[b].element[0].offsetWidth,
                            height: g[b].element[0].offsetHeight
                        })
                    }
            },
            drop: function(f, c) {
                var b = !1;
                a.each((a.ui.ddmanager.droppables[f.options.scope] || []).slice(), function() {
                    if (this.options && (!this.options.disabled && (this.visible && a.ui.intersect(f, this, this.options.tolerance)) && (b = this._drop.call(this, c) || b), !this.options.disabled && this.visible && this.accept.call(this.element[0], f.currentItem || f.element))) this.isout = !0, this.isover = !1, this._deactivate.call(this,
                        c)
                });
                return b
            },
            dragStart: function(f, c) {
                f.element.parentsUntil("body").bind("scroll.droppable", function() {
                    f.options.refreshPositions || a.ui.ddmanager.prepareOffsets(f, c)
                })
            },
            drag: function(f, c) {
                f.options.refreshPositions && a.ui.ddmanager.prepareOffsets(f, c);
                a.each(a.ui.ddmanager.droppables[f.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var b, d, g;
                        g = a.ui.intersect(f, this, this.options.tolerance);
                        var k = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        k && (this.options.greedy &&
                            (d = this.options.scope, g = this.element.parents(":data(ui-droppable)").filter(function() {
                                return a.data(this, "ui-droppable").options.scope === d
                            }), g.length && (b = a.data(g[0], "ui-droppable"), b.greedyChild = "isover" === k)), b && "isover" === k && (b.isover = !1, b.isout = !0, b._out.call(b, c)), this[k] = !0, this["isout" === k ? "isover" : "isout"] = !1, this["isover" === k ? "_over" : "_out"].call(this, c), b && "isout" === k && (b.isout = !1, b.isover = !0, b._over.call(b, c)))
                    }
                })
            },
            dragStop: function(f, c) {
                f.element.parentsUntil("body").unbind("scroll.droppable");
                f.options.refreshPositions || a.ui.ddmanager.prepareOffsets(f, c)
            }
        }
    })(jQuery);
    (function(a) {
        function f(a) {
            return parseInt(a, 10) || 0
        }

        function c(a) {
            return !isNaN(parseInt(a, 10))
        }
        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var b, c, g, f, e, h = this,
                    l = this.options;
                this.element.addClass("ui-resizable");
                a.extend(this, {
                    _aspectRatio: !!l.aspectRatio,
                    aspectRatio: l.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
                });
                this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"),
                    this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize());
                this.handles = l.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                });
                if (this.handles.constructor === String) {
                    "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    b = this.handles.split(",");
                    this.handles = {};
                    for (c = 0; c < b.length; c++) g = a.trim(b[c]), e = "ui-resizable-" + g, f = a("<div class='ui-resizable-handle " + e + "'></div>"), f.css({
                        zIndex: l.zIndex
                    }), "se" === g && f.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[g] = ".ui-resizable-" + g, this.element.append(f)
                }
                this._renderAxis = function(b) {
                    var e, c, d, b = b || this.element;
                    for (e in this.handles) this.handles[e].constructor ===
                        String && (this.handles[e] = a(this.handles[e], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (c = a(this.handles[e], this.element), d = /sw|ne|nw|se|n|s/.test(e) ? c.outerHeight() : c.outerWidth(), c = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), b.css(c, d), this._proportionallyResize()), a(this.handles[e])
                };
                this._renderAxis(this.element);
                this._handles = a(".ui-resizable-handle", this.element).disableSelection();
                this._handles.mouseover(function() {
                    h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = f && f[1] ? f[1] : "se")
                });
                l.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    l.disabled || (a(this).removeClass("ui-resizable-autohide"), h._handles.show())
                }).mouseleave(function() {
                    !l.disabled && !h.resizing && (a(this).addClass("ui-resizable-autohide"), h._handles.hide())
                }));
                this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove());
                this.originalElement.css("resize", this.originalResizeStyle);
                c(this.originalElement);
                return this
            },
            _mouseCapture: function(b) {
                var c, g, f = !1;
                for (c in this.handles)
                    if (g = a(this.handles[c])[0], g === b.target || a.contains(g, b.target)) f = !0;
                return !this.options.disabled && f
            },
            _mouseStart: function(b) {
                var c, g, k;
                k = this.options;
                c = this.element.position();
                var e = this.element;
                this.resizing = !0;
                /absolute/.test(e.css("position")) ? e.css({
                    position: "absolute",
                    top: e.css("top"),
                    left: e.css("left")
                }) : e.is(".ui-draggable") && e.css({
                    position: "absolute",
                    top: c.top,
                    left: c.left
                });
                this._renderProxy();
                c = f(this.helper.css("left"));
                g = f(this.helper.css("top"));
                k.containment && (c += a(k.containment).scrollLeft() || 0, g += a(k.containment).scrollTop() || 0);
                this.offset = this.helper.offset();
                this.position = {
                    left: c,
                    top: g
                };
                this.size = this._helper ? {
                    width: e.outerWidth(),
                    height: e.outerHeight()
                } : {
                    width: e.width(),
                    height: e.height()
                };
                this.originalSize = this._helper ? {
                    width: e.outerWidth(),
                    height: e.outerHeight()
                } : {
                    width: e.width(),
                    height: e.height()
                };
                this.originalPosition = {
                    left: c,
                    top: g
                };
                this.sizeDiff = {
                    width: e.outerWidth() - e.width(),
                    height: e.outerHeight() -
                        e.height()
                };
                this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                };
                this.aspectRatio = "number" === typeof k.aspectRatio ? k.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                k = a(".ui-resizable-" + this.axis).css("cursor");
                a("body").css("cursor", "auto" === k ? this.axis + "-resize" : k);
                e.addClass("ui-resizable-resizing");
                this._propagate("start", b);
                return !0
            },
            _mouseDrag: function(b) {
                var c, g = this.helper,
                    f = {};
                c = this.originalMousePosition;
                var e = this.position.top,
                    h = this.position.left,
                    l = this.size.width,
                    m = this.size.height,
                    n = this._change[this.axis];
                if (!n) return !1;
                c = n.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
                this._updateVirtualBoundaries(b.shiftKey);
                if (this._aspectRatio || b.shiftKey) c = this._updateRatio(c, b);
                c = this._respectSize(c, b);
                this._updateCache(c);
                this._propagate("resize", b);
                this.position.top !== e && (f.top = this.position.top + "px");
                this.position.left !== h && (f.left = this.position.left + "px");
                this.size.width !== l && (f.width = this.size.width + "px");
                this.size.height !== m && (f.height = this.size.height + "px");
                g.css(f);
                !this._helper &&
                    this._proportionallyResizeElements.length && this._proportionallyResize();
                a.isEmptyObject(f) || this._trigger("resize", b, this.ui());
                return !1
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, g, f, e = this.options;
                this._helper && (c = this._proportionallyResizeElements, c = (g = c.length && /textarea/i.test(c[0].nodeName)) && a.ui.hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, g = g ? 0 : this.sizeDiff.width, g = {
                    width: this.helper.width() - g,
                    height: this.helper.height() - c
                }, c = parseInt(this.element.css("left"), 10) + (this.position.left -
                    this.originalPosition.left) || null, f = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, e.animate || this.element.css(a.extend(g, {
                    top: f,
                    left: c
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !e.animate && this._proportionallyResize());
                a("body").css("cursor", "auto");
                this.element.removeClass("ui-resizable-resizing");
                this._propagate("stop", b);
                this._helper && this.helper.remove();
                return !1
            },
            _updateVirtualBoundaries: function(a) {
                var d,
                    g, f, e;
                e = this.options;
                e = {
                    minWidth: c(e.minWidth) ? e.minWidth : 0,
                    maxWidth: c(e.maxWidth) ? e.maxWidth : Infinity,
                    minHeight: c(e.minHeight) ? e.minHeight : 0,
                    maxHeight: c(e.maxHeight) ? e.maxHeight : Infinity
                };
                if (this._aspectRatio || a) a = e.minHeight * this.aspectRatio, g = e.minWidth / this.aspectRatio, d = e.maxHeight * this.aspectRatio, f = e.maxWidth / this.aspectRatio, a > e.minWidth && (e.minWidth = a), g > e.minHeight && (e.minHeight = g), d < e.maxWidth && (e.maxWidth = d), f < e.maxHeight && (e.maxHeight = f);
                this._vBoundaries = e
            },
            _updateCache: function(a) {
                this.offset =
                    this.helper.offset();
                c(a.left) && (this.position.left = a.left);
                c(a.top) && (this.position.top = a.top);
                c(a.height) && (this.size.height = a.height);
                c(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var d = this.position,
                    g = this.size,
                    f = this.axis;
                c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio);
                "sw" === f && (a.left = d.left + (g.width - a.width), a.top = null);
                "nw" === f && (a.top = d.top + (g.height - a.height), a.left = d.left + (g.width - a.width));
                return a
            },
            _respectSize: function(a) {
                var d =
                    this._vBoundaries,
                    g = this.axis,
                    f = c(a.width) && d.maxWidth && d.maxWidth < a.width,
                    e = c(a.height) && d.maxHeight && d.maxHeight < a.height,
                    h = c(a.width) && d.minWidth && d.minWidth > a.width,
                    l = c(a.height) && d.minHeight && d.minHeight > a.height,
                    m = this.originalPosition.left + this.originalSize.width,
                    n = this.position.top + this.size.height,
                    p = /sw|nw|w/.test(g),
                    g = /nw|ne|n/.test(g);
                h && (a.width = d.minWidth);
                l && (a.height = d.minHeight);
                f && (a.width = d.maxWidth);
                e && (a.height = d.maxHeight);
                h && p && (a.left = m - d.minWidth);
                f && p && (a.left = m - d.maxWidth);
                l && g && (a.top = n - d.minHeight);
                e && g && (a.top = n - d.maxHeight);
                !a.width && !a.height && !a.left && a.top ? a.top = null : !a.width && (!a.height && !a.top && a.left) && (a.left = null);
                return a
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var a, c, g, f, e, h = this.helper || this.element;
                    for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                        e = this._proportionallyResizeElements[a];
                        if (!this.borderDif) {
                            this.borderDif = [];
                            g = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"),
                                e.css("borderLeftWidth")
                            ];
                            f = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                            for (c = 0; c < g.length; c++) this.borderDif[c] = (parseInt(g[c], 10) || 0) + (parseInt(f[c], 10) || 0)
                        }
                        e.css({
                            height: h.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: h.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var b = this.options;
                this.elementOffset = this.element.offset();
                this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() -
                        1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++b.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, c) {
                    return {
                        width: this.originalSize.width + c
                    }
                },
                w: function(a, c) {
                    return {
                        left: this.originalPosition.left + c,
                        width: this.originalSize.width - c
                    }
                },
                n: function(a, c, g) {
                    return {
                        top: this.originalPosition.top + g,
                        height: this.originalSize.height - g
                    }
                },
                s: function(a, c, g) {
                    return {
                        height: this.originalSize.height +
                            g
                    }
                },
                se: function(b, c, g) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, g]))
                },
                sw: function(b, c, g) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, g]))
                },
                ne: function(b, c, g) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, g]))
                },
                nw: function(b, c, g) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, g]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]);
                "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        });
        a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).data("ui-resizable"),
                    g = c.options,
                    f = c._proportionallyResizeElements,
                    e = f.length && /textarea/i.test(f[0].nodeName),
                    h = e && a.ui.hasScroll(f[0], "left") ? 0 : c.sizeDiff.height,
                    e = {
                        width: c.size.width - (e ? 0 : c.sizeDiff.width),
                        height: c.size.height - h
                    },
                    h = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(e, l && h ? {
                    top: l,
                    left: h
                } : {}), {
                    duration: g.animateDuration,
                    easing: g.animateEasing,
                    step: function() {
                        var e = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"),
                                10)
                        };
                        f && f.length && a(f[0]).css({
                            width: e.width,
                            height: e.height
                        });
                        c._updateCache(e);
                        c._propagate("resize", b)
                    }
                })
            }
        });
        a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var b, c, g, k, e, h = a(this).data("ui-resizable"),
                    l = h.element;
                g = h.options.containment;
                if (l = g instanceof a ? g.get(0) : /parent/.test(g) ? l.parent().get(0) : g) h.containerElement = a(l), /document/.test(g) || g === document ? (h.containerOffset = {
                    left: 0,
                    top: 0
                }, h.containerPosition = {
                    left: 0,
                    top: 0
                }, h.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(l), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, e) {
                    c[a] = f(b.css("padding" + e))
                }), h.containerOffset = b.offset(), h.containerPosition = b.position(), h.containerSize = {
                    height: b.innerHeight() - c[3],
                    width: b.innerWidth() - c[1]
                }, g = h.containerOffset, k = h.containerSize.height, e = h.containerSize.width, e = a.ui.hasScroll(l, "left") ? l.scrollWidth : e, k = a.ui.hasScroll(l) ? l.scrollHeight : k, h.parentData = {
                    element: l,
                    left: g.left,
                    top: g.top,
                    width: e,
                    height: k
                })
            },
            resize: function(b) {
                var c, g, f, e, h = a(this).data("ui-resizable");
                c = h.options;
                g = h.containerOffset;
                f = h.position;
                b = h._aspectRatio || b.shiftKey;
                e = {
                    top: 0,
                    left: 0
                };
                var l = h.containerElement;
                l[0] !== document && /static/.test(l.css("position")) && (e = g);
                if (f.left < (h._helper ? g.left : 0)) h.size.width += h._helper ? h.position.left - g.left : h.position.left - e.left, b && (h.size.height = h.size.width / h.aspectRatio), h.position.left = c.helper ? g.left : 0;
                if (f.top < (h._helper ? g.top : 0)) h.size.height += h._helper ? h.position.top - g.top :
                    h.position.top, b && (h.size.width = h.size.height * h.aspectRatio), h.position.top = h._helper ? g.top : 0;
                h.offset.left = h.parentData.left + h.position.left;
                h.offset.top = h.parentData.top + h.position.top;
                c = Math.abs(h.offset.left - e.left + h.sizeDiff.width);
                g = Math.abs((h._helper ? h.offset.top - e.top : h.offset.top - g.top) + h.sizeDiff.height);
                f = h.containerElement.get(0) === h.element.parent().get(0);
                e = /relative|absolute/.test(h.containerElement.css("position"));
                f && e && (c -= h.parentData.left);
                c + h.size.width >= h.parentData.width &&
                    (h.size.width = h.parentData.width - c, b && (h.size.height = h.size.width / h.aspectRatio));
                g + h.size.height >= h.parentData.height && (h.size.height = h.parentData.height - g, b && (h.size.width = h.size.height * h.aspectRatio))
            },
            stop: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.containerOffset,
                    f = b.containerPosition,
                    e = b.containerElement,
                    h = a(b.helper),
                    l = h.offset(),
                    m = h.outerWidth() - b.sizeDiff.width,
                    h = h.outerHeight() - b.sizeDiff.height;
                b._helper && (!c.animate && /relative/.test(e.css("position"))) && a(this).css({
                    left: l.left -
                        f.left - g.left,
                    width: m,
                    height: h
                });
                b._helper && (!c.animate && /static/.test(e.css("position"))) && a(this).css({
                    left: l.left - f.left - g.left,
                    width: m,
                    height: h
                })
            }
        });
        a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).data("ui-resizable").options,
                    c = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" === typeof b.alsoResize && !b.alsoResize.parentNode ?
                    b.alsoResize.length ? (b.alsoResize = b.alsoResize[0], c(b.alsoResize)) : a.each(b.alsoResize, function(a) {
                        c(a)
                    }) : c(b.alsoResize)
            },
            resize: function(b, c) {
                var g = a(this).data("ui-resizable"),
                    f = g.options,
                    e = g.originalSize,
                    h = g.originalPosition,
                    l = {
                        height: g.size.height - e.height || 0,
                        width: g.size.width - e.width || 0,
                        top: g.position.top - h.top || 0,
                        left: g.position.left - h.left || 0
                    },
                    m = function(b, e) {
                        a(b).each(function() {
                            var b = a(this),
                                h = a(this).data("ui-resizable-alsoresize"),
                                g = {},
                                f = e && e.length ? e : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(f, function(a, b) {
                                var e = (h[b] || 0) + (l[b] || 0);
                                e && 0 <= e && (g[b] = e || null)
                            });
                            b.css(g)
                        })
                    };
                "object" === typeof f.alsoResize && !f.alsoResize.nodeType ? a.each(f.alsoResize, function(a, b) {
                    m(a, b)
                }) : m(f.alsoResize)
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        });
        a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.size;
                b.ghost = b.originalElement.clone();
                b.ghost.css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: g.height,
                    width: g.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" === typeof c.ghost ? c.ghost : "");
                b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        });
        a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.size,
                    f = b.originalSize,
                    e = b.originalPosition,
                    h = b.axis,
                    l = "number" === typeof c.grid ? [c.grid, c.grid] : c.grid,
                    m = l[0] || 1,
                    n = l[1] || 1,
                    p = Math.round((g.width - f.width) / m) * m,
                    g = Math.round((g.height - f.height) / n) * n,
                    q = f.width + p,
                    f = f.height + g,
                    r = c.maxWidth && c.maxWidth < q,
                    v = c.maxHeight && c.maxHeight < f,
                    t = c.minWidth && c.minWidth > q,
                    w = c.minHeight && c.minHeight > f;
                c.grid = l;
                t && (q += m);
                w && (f += n);
                r && (q -= m);
                v && (f -= n);
                /^(se|s|e)$/.test(h) ? (b.size.width = q, b.size.height = f) : /^(ne)$/.test(h) ? (b.size.width = q, b.size.height = f,
                    b.position.top = e.top - g) : (/^(sw)$/.test(h) ? (b.size.width = q, b.size.height = f) : (b.size.width = q, b.size.height = f, b.position.top = e.top - g), b.position.left = e.left - p)
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var f, c = this;
                this.element.addClass("ui-selectable");
                this.dragged = !1;
                this.refresh = function() {
                    f = a(c.options.filter, c.element[0]);
                    f.addClass("ui-selectee");
                    f.each(function() {
                        var b = a(this),
                            c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                };
                this.refresh();
                this.selectees = f.addClass("ui-selectee");
                this._mouseInit();
                this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item");
                this.element.removeClass("ui-selectable ui-selectable-disabled");
                this._mouseDestroy()
            },
            _mouseStart: function(f) {
                var c = this,
                    b = this.options;
                this.opos = [f.pageX, f.pageY];
                this.options.disabled || (this.selectees = a(b.filter, this.element[0]), this._trigger("start", f), a(b.appendTo).append(this.helper), this.helper.css({
                    left: f.pageX,
                    top: f.pageY,
                    width: 0,
                    height: 0
                }), b.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var b = a.data(this, "selectable-item");
                    b.startselected = !0;
                    !f.metaKey && !f.ctrlKey && (b.$element.removeClass("ui-selected"), b.selected = !1, b.$element.addClass("ui-unselecting"), b.unselecting = !0, c._trigger("unselecting", f, {
                        unselecting: b.element
                    }))
                }), a(f.target).parents().addBack().each(function() {
                    var b, g = a.data(this, "selectable-item");
                    if (g) return b = !f.metaKey && !f.ctrlKey || !g.$element.hasClass("ui-selected"), g.$element.removeClass(b ? "ui-unselecting" : "ui-selected").addClass(b ? "ui-selecting" : "ui-unselecting"), g.unselecting = !b, g.selecting = b, (g.selected = b) ? c._trigger("selecting", f, {
                        selecting: g.element
                    }) : c._trigger("unselecting", f, {
                        unselecting: g.element
                    }), !1
                }))
            },
            _mouseDrag: function(f) {
                this.dragged = !0;
                if (!this.options.disabled) {
                    var c, b = this,
                        d = this.options,
                        g = this.opos[0],
                        k = this.opos[1],
                        e = f.pageX,
                        h = f.pageY;
                    g > e && (c = e, e = g, g = c);
                    k > h && (c = h, h = k, k = c);
                    this.helper.css({
                        left: g,
                        top: k,
                        width: e - g,
                        height: h - k
                    });
                    this.selectees.each(function() {
                        var c = a.data(this, "selectable-item"),
                            m = !1;
                        c && c.element !== b.element[0] && ("touch" === d.tolerance ? m = !(c.left > e || c.right < g || c.top > h || c.bottom < k) : "fit" === d.tolerance && (m = c.left > g && c.right < e && c.top > k && c.bottom < h), m ? (c.selected && (c.$element.removeClass("ui-selected"),
                            c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, b._trigger("selecting", f, {
                            selecting: c.element
                        }))) : (c.selecting && ((f.metaKey || f.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), b._trigger("unselecting",
                            f, {
                                unselecting: c.element
                            }))), c.selected && (!f.metaKey && !f.ctrlKey && !c.startselected) && (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, b._trigger("unselecting", f, {
                            unselecting: c.element
                        }))))
                    });
                    return !1
                }
            },
            _mouseStop: function(f) {
                var c = this;
                this.dragged = !1;
                a(".ui-unselecting", this.element[0]).each(function() {
                    var b = a.data(this, "selectable-item");
                    b.$element.removeClass("ui-unselecting");
                    b.unselecting = !1;
                    b.startselected = !1;
                    c._trigger("unselected",
                        f, {
                            unselected: b.element
                        })
                });
                a(".ui-selecting", this.element[0]).each(function() {
                    var b = a.data(this, "selectable-item");
                    b.$element.removeClass("ui-selecting").addClass("ui-selected");
                    b.selecting = !1;
                    b.selected = !0;
                    b.startselected = !0;
                    c._trigger("selected", f, {
                        selected: b.element
                    })
                });
                this._trigger("stop", f);
                this.helper.remove();
                return !1
            }
        })
    })(jQuery);
    (function(a) {
        function f(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }
        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1E3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var a = this.options;
                this.containerCache = {};
                this.element.addClass("ui-sortable");
                this.refresh();
                this.floating = this.items.length ? "x" === a.axis || f(this.items[0].item) : !1;
                this.offset = this.element.offset();
                this._mouseInit();
                this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled");
                this._mouseDestroy();
                for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(c, b) {
                "disabled" === c ? (this.options[c] = b, this.widget().toggleClass("ui-sortable-disabled", !!b)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(c, b) {
                var d = null,
                    g = !1,
                    f = this;
                if (this.reverting || this.options.disabled || "static" === this.options.type) return !1;
                this._refreshItems(c);
                a(c.target).parents().each(function() {
                    if (a.data(this, f.widgetName + "-item") ===
                        f) return d = a(this), !1
                });
                a.data(c.target, f.widgetName + "-item") === f && (d = a(c.target));
                if (!d || this.options.handle && !b && (a(this.options.handle, d).find("*").addBack().each(function() {
                        this === c.target && (g = !0)
                    }), !g)) return !1;
                this.currentItem = d;
                this._removeCurrentsFromItems();
                return !0
            },
            _mouseStart: function(c, b, d) {
                var g, b = this.options;
                this.currentContainer = this;
                this.refreshPositions();
                this.helper = this._createHelper(c);
                this._cacheHelperProportions();
                this._cacheMargins();
                this.scrollParent = this.helper.scrollParent();
                this.offset = this.currentItem.offset();
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                };
                a.extend(this.offset, {
                    click: {
                        left: c.pageX - this.offset.left,
                        top: c.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                });
                this.helper.css("position", "absolute");
                this.cssPosition = this.helper.css("position");
                this.originalPosition = this._generatePosition(c);
                this.originalPageX = c.pageX;
                this.originalPageY = c.pageY;
                b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
                this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                };
                this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
                this._createPlaceholder();
                b.containment && this._setContainment();
                b.cursor && "auto" !== b.cursor && (g = this.document.find("body"), this.storedCursor = g.css("cursor"), g.css("cursor", b.cursor), this.storedStylesheet = a("<style>*{ cursor: " + b.cursor + " !important; }</style>").appendTo(g));
                b.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                    this.helper.css("opacity", b.opacity));
                b.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", b.zIndex));
                this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
                this._trigger("start", c, this._uiHash());
                this._preserveHelperProportions || this._cacheHelperProportions();
                if (!d)
                    for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate", c, this._uiHash(this));
                a.ui.ddmanager &&
                    (a.ui.ddmanager.current = this);
                a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c);
                this.dragging = !0;
                this.helper.addClass("ui-sortable-helper");
                this._mouseDrag(c);
                return !0
            },
            _mouseDrag: function(c) {
                var b, d, g, f;
                b = this.options;
                d = !1;
                this.position = this._generatePosition(c);
                this.positionAbs = this._convertPositionTo("absolute");
                this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
                this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight - c.pageY < b.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + b.scrollSpeed : c.pageY - this.overflowOffset.top < b.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - b.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - c.pageX < b.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + b.scrollSpeed : c.pageX - this.overflowOffset.left < b.scrollSensitivity && (this.scrollParent[0].scrollLeft =
                        d = this.scrollParent[0].scrollLeft - b.scrollSpeed)) : (c.pageY - a(document).scrollTop() < b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (c.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed)), c.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (c.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() +
                    b.scrollSpeed))), !1 !== d && (a.ui.ddmanager && !b.dropBehaviour) && a.ui.ddmanager.prepareOffsets(this, c));
                this.positionAbs = this._convertPositionTo("absolute");
                if (!this.options.axis || "y" !== this.options.axis) this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || "x" !== this.options.axis) this.helper[0].style.top = this.position.top + "px";
                for (b = this.items.length - 1; 0 <= b; b--)
                    if (d = this.items[b], g = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && g !== this.currentItem[0] &&
                        this.placeholder[1 === f ? "next" : "prev"]()[0] !== g && !a.contains(this.placeholder[0], g) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], g) : 1)) {
                        this.direction = 1 === f ? "down" : "up";
                        if ("pointer" === this.options.tolerance || this._intersectsWithSides(d)) this._rearrange(c, d);
                        else break;
                        this._trigger("change", c, this._uiHash());
                        break
                    }
                this._contactContainers(c);
                a.ui.ddmanager && a.ui.ddmanager.drag(this, c);
                this._trigger("sort", c, this._uiHash());
                this.lastPositionAbs = this.positionAbs;
                return !1
            },
            _mouseStop: function(c,
                b) {
                if (c) {
                    a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, c);
                    if (this.options.revert) {
                        var d = this,
                            g = this.placeholder.offset(),
                            f = this.options.axis,
                            e = {};
                        if (!f || "x" === f) e.left = g.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
                        if (!f || "y" === f) e.top = g.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
                        this.reverting = !0;
                        a(this.helper).animate(e, parseInt(this.options.revert,
                            10) || 500, function() {
                            d._clear(c)
                        })
                    } else this._clear(c, b);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    });
                    "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var c = this.containers.length - 1; 0 <= c; c--) this.containers[c]._trigger("deactivate", null, this._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, this._uiHash(this)), this.containers[c].containerCache.over =
                        0)
                }
                this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && (this.helper && this.helper[0].parentNode) && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem));
                return this
            },
            serialize: function(c) {
                var b = this._getItemsAsjQuery(c && c.connected),
                    d = [],
                    c = c || {};
                a(b).each(function() {
                    var b = (a(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[\-=_](.+)/);
                    b && d.push((c.key || b[1] + "[]") + "=" + (c.key && c.expression ? b[1] : b[2]))
                });
                !d.length && c.key && d.push(c.key + "=");
                return d.join("&")
            },
            toArray: function(c) {
                var b = this._getItemsAsjQuery(c && c.connected),
                    d = [],
                    c = c || {};
                b.each(function() {
                    d.push(a(c.item || this).attr(c.attribute || "id") || "")
                });
                return d
            },
            _intersectsWith: function(a) {
                var b = this.positionAbs.left,
                    d = b + this.helperProportions.width,
                    g = this.positionAbs.top,
                    f = g + this.helperProportions.height,
                    e = a.left,
                    h = e + a.width,
                    l = a.top,
                    m = l + a.height,
                    n = this.offset.click.top,
                    p = this.offset.click.left;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? g + n > l && g + n < m && b + p > e && b + p < h : e < b + this.helperProportions.width / 2 && d - this.helperProportions.width / 2 < h && l < g + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 <
                    m
            },
            _intersectsWithPointer: function(a) {
                var b = "y" === this.options.axis || this.positionAbs.left + this.offset.click.left > a.left && this.positionAbs.left + this.offset.click.left < a.left + a.width,
                    a = ("x" === this.options.axis || this.positionAbs.top + this.offset.click.top > a.top && this.positionAbs.top + this.offset.click.top < a.top + a.height) && b,
                    b = this._getDragVerticalDirection(),
                    d = this._getDragHorizontalDirection();
                return !a ? !1 : this.floating ? d && "right" === d || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1)
            },
            _intersectsWithSides: function(a) {
                var b =
                    this.positionAbs.top + this.offset.click.top > a.top + a.height / 2 && this.positionAbs.top + this.offset.click.top < a.top + a.height / 2 + a.height,
                    a = this.positionAbs.left + this.offset.click.left > a.left + a.width / 2 && this.positionAbs.left + this.offset.click.left < a.left + a.width / 2 + a.width,
                    d = this._getDragVerticalDirection(),
                    g = this._getDragHorizontalDirection();
                return this.floating && g ? "right" === g && a || "left" === g && !a : d && ("down" === d && b || "up" === d && !b)
            },
            _getDragVerticalDirection: function() {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== a && (0 < a ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== a && (0 < a ? "right" : "left")
            },
            refresh: function(a) {
                this._refreshItems(a);
                this.refreshPositions();
                return this
            },
            _connectWith: function() {
                var a = this.options;
                return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function(c) {
                var b, d, g, f = [],
                    e = [],
                    h = this._connectWith();
                if (h && c)
                    for (c = h.length - 1; 0 <= c; c--) {
                        d = a(h[c]);
                        for (b = d.length - 1; 0 <= b; b--)(g =
                            a.data(d[b], this.widgetFullName)) && (g !== this && !g.options.disabled) && e.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g])
                    }
                e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                for (c = e.length - 1; 0 <= c; c--) e[c][0].each(function() {
                    f.push(this)
                });
                return a(f)
            },
            _removeCurrentsFromItems: function() {
                var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function(a) {
                    for (var d = 0; d < c.length; d++)
                        if (c[d] === a.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(c) {
                this.items = [];
                this.containers = [this];
                var b, d, g, f, e, h = this.items,
                    l = [
                        [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
                            item: this.currentItem
                        }) : a(this.options.items, this.element), this]
                    ];
                if ((e = this._connectWith()) && this.ready)
                    for (b =
                        e.length - 1; 0 <= b; b--) {
                        g = a(e[b]);
                        for (d = g.length - 1; 0 <= d; d--)
                            if ((f = a.data(g[d], this.widgetFullName)) && f !== this && !f.options.disabled) l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], c, {
                                item: this.currentItem
                            }) : a(f.options.items, f.element), f]), this.containers.push(f)
                    }
                for (b = l.length - 1; 0 <= b; b--) {
                    c = l[b][1];
                    g = l[b][0];
                    d = 0;
                    for (e = g.length; d < e; d++) f = a(g[d]), f.data(this.widgetName + "-item", c), h.push({
                        item: f,
                        instance: c,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            },
            refreshPositions: function(c) {
                this.offsetParent &&
                    this.helper && (this.offset.parent = this._getParentOffset());
                var b, d, g;
                for (b = this.items.length - 1; 0 <= b; b--) d = this.items[b], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (g = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, c || (d.width = g.outerWidth(), d.height = g.outerHeight()), g = g.offset(), d.left = g.left, d.top = g.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (b =
                        this.containers.length - 1; 0 <= b; b--) g = this.containers[b].element.offset(), this.containers[b].containerCache.left = g.left, this.containers[b].containerCache.top = g.top, this.containers[b].containerCache.width = this.containers[b].element.outerWidth(), this.containers[b].containerCache.height = this.containers[b].element.outerHeight();
                return this
            },
            _createPlaceholder: function(c) {
                var c = c || this,
                    b, d = c.options;
                if (!d.placeholder || d.placeholder.constructor === String) b = d.placeholder, d.placeholder = {
                    element: function() {
                        var d =
                            c.currentItem[0].nodeName.toLowerCase(),
                            f = a(c.document[0].createElement(d)).addClass(b || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        "tr" === d ? f.append("<td colspan='99'>&#160;</td>") : "img" === d && f.attr("src", c.currentItem.attr("src"));
                        b || f.css("visibility", "hidden");
                        return f
                    },
                    update: function(a, f) {
                        if (!b || d.forcePlaceholderSize) f.height() || f.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") ||
                            0, 10)), f.width() || f.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
                    }
                };
                c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem));
                c.currentItem.after(c.placeholder);
                d.placeholder.update(c, c.placeholder)
            },
            _contactContainers: function(c) {
                var b, d, g, k, e, h, l, m, n, p = d = null;
                for (b = this.containers.length - 1; 0 <= b; b--)
                    if (!a.contains(this.currentItem[0], this.containers[b].element[0]))
                        if (this._intersectsWith(this.containers[b].containerCache)) {
                            if (!d ||
                                !a.contains(this.containers[b].element[0], d.element[0])) d = this.containers[b], p = b
                        } else this.containers[b].containerCache.over && (this.containers[b]._trigger("out", c, this._uiHash(this)), this.containers[b].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", c, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        b = 1E4;
                        g = null;
                        k = (n = d.floating || f(this.currentItem)) ? "left" : "top";
                        e = n ? "width" : "height";
                        h = this.positionAbs[k] +
                            this.offset.click[k];
                        for (d = this.items.length - 1; 0 <= d; d--)
                            if (a.contains(this.containers[p].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (!n || this.positionAbs.top + this.offset.click.top > this.items[d].top && this.positionAbs.top + this.offset.click.top < this.items[d].top + this.items[d].height)) l = this.items[d].item.offset()[k], m = !1, Math.abs(l - h) > Math.abs(l + this.items[d][e] - h) && (m = !0, l += this.items[d][e]), Math.abs(l - h) < b && (b = Math.abs(l - h), g = this.items[d], this.direction = m ? "up" :
                                "down");
                        if ((g || this.options.dropOnEmpty) && this.currentContainer !== this.containers[p]) g ? this._rearrange(c, g, null, !0) : this._rearrange(c, null, this.containers[p].element, !0), this._trigger("change", c, this._uiHash()), this.containers[p]._trigger("change", c, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", c, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(c) {
                var b =
                    this.options,
                    c = a.isFunction(b.helper) ? a(b.helper.apply(this.element[0], [c, this.currentItem])) : "clone" === b.helper ? this.currentItem.clone() : this.currentItem;
                c.parents("body").length || a("parent" !== b.appendTo ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0]);
                c[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                });
                (!c[0].style.width || b.forceHelperSize) && c.width(this.currentItem.width());
                (!c[0].style.height || b.forceHelperSize) && c.height(this.currentItem.height());
                return c
            },
            _adjustOffsetFromHelper: function(c) {
                "string" === typeof c && (c = c.split(" "));
                a.isArray(c) && (c = {
                    left: +c[0],
                    top: +c[1] || 0
                });
                "left" in c && (this.offset.click.left = c.left + this.margins.left);
                "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left);
                "top" in c && (this.offset.click.top = c.top + this.margins.top);
                "bottom" in
                c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var c = this.offsetParent.offset();
                "absolute" === this.cssPosition && (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() &&
                    a.ui.ie) c = {
                    top: 0,
                    left: 0
                };
                return {
                    top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var c, b, d;
                b = this.options;
                "parent" === b.containment && (b.containment = this.helper[0].parentNode);
                if ("document" === b.containment || "window" === b.containment) this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top -
                    this.offset.parent.top, a("document" === b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
                /^(document|window|parent)$/.test(b.containment) || (c = a(b.containment)[0], b = a(b.containment).offset(), d = "hidden" !== a(c).css("overflow"), this.containment = [b.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"),
                        10) || 0) - this.margins.left, b.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                    this.margins.top
                ])
            },
            _convertPositionTo: function(c, b) {
                b || (b = this.position);
                var d = "absolute" === c ? 1 : -1,
                    f = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    k = /(html|body)/i.test(f[0].tagName);
                return {
                    top: b.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : k ? 0 : f.scrollTop()) * d,
                    left: b.left + this.offset.relative.left * d + this.offset.parent.left *
                        d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : k ? 0 : f.scrollLeft()) * d
                }
            },
            _generatePosition: function(c) {
                var b, d, f = this.options;
                d = c.pageX;
                b = c.pageY;
                var k = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    e = /(html|body)/i.test(k[0].tagName);
                "relative" === this.cssPosition && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
                this.originalPosition && (this.containment && (c.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left), c.pageY - this.offset.click.top < this.containment[1] && (b = this.containment[1] + this.offset.click.top), c.pageX - this.offset.click.left > this.containment[2] && (d = this.containment[2] + this.offset.click.left), c.pageY - this.offset.click.top > this.containment[3] && (b = this.containment[3] + this.offset.click.top)), f.grid && (b = this.originalPageY + Math.round((b - this.originalPageY) / f.grid[1]) *
                    f.grid[1], b = this.containment ? b - this.offset.click.top >= this.containment[1] && b - this.offset.click.top <= this.containment[3] ? b : b - this.offset.click.top >= this.containment[1] ? b - f.grid[1] : b + f.grid[1] : b, d = this.originalPageX + Math.round((d - this.originalPageX) / f.grid[0]) * f.grid[0], d = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - f.grid[0] : d + f.grid[0] : d));
                return {
                    top: b - this.offset.click.top - this.offset.relative.top -
                        this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : k.scrollTop()),
                    left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : k.scrollLeft())
                }
            },
            _rearrange: function(a, b, d, f) {
                d ? d[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
                var k = this.counter = this.counter ? ++this.counter : 1;
                this._delay(function() {
                    k ===
                        this.counter && this.refreshPositions(!f)
                })
            },
            _clear: function(a, b) {
                this.reverting = !1;
                var d, f = [];
                !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
                this._noFinalSort = null;
                if (this.helper[0] === this.currentItem[0]) {
                    for (d in this._storedCSS)
                        if ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) this._storedCSS[d] = "";
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                this.fromOutside && !b && f.push(function(a) {
                    this._trigger("receive",
                        a, this._uiHash(this.fromOutside))
                });
                (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !b && f.push(function(a) {
                    this._trigger("update", a, this._uiHash())
                });
                this !== this.currentContainer && !b && (f.push(function(a) {
                    this._trigger("remove", a, this._uiHash())
                }), f.push(function(a) {
                    return function(b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), f.push(function(a) {
                    return function(b) {
                        a._trigger("update",
                            b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)));
                for (d = this.containers.length - 1; 0 <= d; d--) b || f.push(function(a) {
                    return function(b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over && (f.push(function(a) {
                    return function(b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
                this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove());
                this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
                this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
                this.dragging = !1;
                if (this.cancelHelperRemoval) {
                    if (!b) {
                        this._trigger("beforeStop", a, this._uiHash());
                        for (d = 0; d < f.length; d++) f[d].call(this, a);
                        this._trigger("stop", a, this._uiHash())
                    }
                    return this.fromOutside = !1
                }
                b || this._trigger("beforeStop", a, this._uiHash());
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.helper[0] !== this.currentItem[0] &&
                    this.helper.remove();
                this.helper = null;
                if (!b) {
                    for (d = 0; d < f.length; d++) f[d].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                this.fromOutside = !1;
                return !0
            },
            _trigger: function() {
                !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(c) {
                var b = c || this;
                return {
                    helper: b.helper,
                    placeholder: b.placeholder || a([]),
                    position: b.position,
                    originalPosition: b.originalPosition,
                    offset: b.positionAbs,
                    item: b.currentItem,
                    sender: c ? c.element : null
                }
            }
        })
    })(jQuery);
    (function(a) {
        var f = 0,
            c = {},
            b = {};
        c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
        b.height = b.paddingTop = b.paddingBottom = b.borderTopWidth = b.borderBottomWidth = "show";
        a.widget("ui.accordion", {
            version: "1.10.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var b = this.options;
                this.prevShow = this.prevHide = a();
                this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
                if (!b.collapsible && (!1 === b.active || null == b.active)) b.active = 0;
                this._processPanels();
                0 > b.active && (b.active += this.headers.length);
                this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: !this.active.length ? a() : this.active.next(),
                    content: !this.active.length ? a() : this.active.next()
                }
            },
            _createIcons: function() {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " +
                    b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
                this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) &&
                        this.removeAttribute("id")
                });
                this._destroyIcons();
                a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                });
                "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function(a, b) {
                "active" === a ? this._activate(b) :
                    ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" === a && (!b && !1 === this.options.active) && this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))
            },
            _keydown: function(b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode,
                        f = this.headers.length,
                        e = this.headers.index(b.target),
                        h = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            h =
                                this.headers[(e + 1) % f];
                            break;
                        case c.LEFT:
                        case c.UP:
                            h = this.headers[(e - 1 + f) % f];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            h = this.headers[0];
                            break;
                        case c.END:
                            h = this.headers[f - 1]
                    }
                    h && (a(b.target).attr("tabIndex", -1), a(h).attr("tabIndex", 0), h.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function(b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function() {
                var b = this.options;
                this._processPanels();
                if (!1 === b.active && !0 === b.collapsible || !this.headers.length) b.active = !1, this.active = a();
                !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active);
                this._destroyIcons();
                this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
                this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var b, c = this.options,
                    k = c.heightStyle,
                    e = this.element.parent(),
                    h = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++f);
                this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
                this.active.next().addClass("ui-accordion-content-active").show();
                this.headers.attr("role", "tab").each(function(b) {
                    var e = a(this),
                        c = e.attr("id"),
                        d = e.next(),
                        f = d.attr("id");
                    c || (c = h + "-header-" + b, e.attr("id", c));
                    f || (f = h + "-panel-" +
                        b, d.attr("id", f));
                    e.attr("aria-controls", f);
                    d.attr("aria-labelledby", c)
                }).next().attr("role", "tabpanel");
                this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide();
                this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0);
                this._createIcons();
                this._setupEvents(c.event);
                "fill" === k ? (b = e.height(), this.element.siblings(":visible").each(function() {
                    var e =
                        a(this),
                        c = e.css("position");
                    "absolute" === c || "fixed" === c || (b -= e.outerHeight(!0))
                }), this.headers.each(function() {
                    b -= a(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === k && (b = 0, this.headers.next().each(function() {
                    b = Math.max(b, a(this).css("height", "").height())
                }).height(b))
            },
            _activate: function(b) {
                b = this._findActive(b)[0];
                b !== this.active[0] && (b = b || this.active[0], this._eventHandler({
                    target: b,
                    currentTarget: b,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return "number" === typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function(b) {
                var c = {
                    keydown: "_keydown"
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                });
                this._off(this.headers.add(this.headers.next()));
                this._on(this.headers, c);
                this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                });
                this._hoverable(this.headers);
                this._focusable(this.headers)
            },
            _eventHandler: function(b) {
                var c = this.options,
                    f = this.active,
                    e = a(b.currentTarget),
                    h =
                    e[0] === f[0],
                    l = h && c.collapsible,
                    m = l ? a() : e.next(),
                    n = f.next(),
                    m = {
                        oldHeader: f,
                        oldPanel: n,
                        newHeader: l ? a() : e,
                        newPanel: m
                    };
                b.preventDefault();
                h && !c.collapsible || !1 === this._trigger("beforeActivate", b, m) || (c.active = l ? !1 : this.headers.index(e), this.active = h ? a() : e, this._toggle(m), f.removeClass("ui-accordion-header-active ui-state-active"), c.icons && f.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), h || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
                    c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(b) {
                var c = b.newPanel,
                    f = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0);
                this.prevShow = c;
                this.prevHide = f;
                this.options.animate ? this._animate(c, f, b) : (f.hide(), c.show(), this._toggleComplete(b));
                f.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                f.prev().attr("aria-selected", "false");
                c.length && f.length ? f.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1);
                c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(a, f, k) {
                var e, h, l, m = this,
                    n = 0,
                    p = a.length && (!f.length || a.index() < f.index()),
                    q = this.options.animate || {},
                    p = p && q.down || q,
                    r = function() {
                        m._toggleComplete(k)
                    };
                "number" === typeof p && (l = p);
                "string" === typeof p && (h = p);
                h = h || p.easing || q.easing;
                l = l ||
                    p.duration || q.duration;
                if (!f.length) return a.animate(b, l, h, r);
                if (!a.length) return f.animate(c, l, h, r);
                e = a.show().outerHeight();
                f.animate(c, {
                    duration: l,
                    easing: h,
                    step: function(a, b) {
                        b.now = Math.round(a)
                    }
                });
                a.hide().animate(b, {
                    duration: l,
                    easing: h,
                    complete: r,
                    step: function(a, b) {
                        b.now = Math.round(a);
                        "height" !== b.prop ? n += b.now : "content" !== m.options.heightStyle && (b.now = Math.round(e - f.outerHeight() - n), n = 0)
                    }
                })
            },
            _toggleComplete: function(a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
                b.length && (b.parent()[0].className = b.parent()[0].className);
                this._trigger("activate", null, a)
            }
        })
    })(jQuery);
    (function(a) {
        var f = 0;
        a.widget("ui.autocomplete", {
            version: "1.10.2",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var c, b, d, f = this.element[0].nodeName.toLowerCase(),
                    k = "textarea" === f,
                    f = "input" === f;
                this.isMultiLine = k ? !0 : f ? !1 : this.element.prop("isContentEditable");
                this.valueMethod = this.element[k ||
                    f ? "val" : "text"];
                this.isNewMenu = !0;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) b = d = c = !0;
                        else {
                            b = d = c = !1;
                            var h = a.ui.keyCode;
                            switch (e.keyCode) {
                                case h.PAGE_UP:
                                    c = !0;
                                    this._move("previousPage", e);
                                    break;
                                case h.PAGE_DOWN:
                                    c = !0;
                                    this._move("nextPage", e);
                                    break;
                                case h.UP:
                                    c = !0;
                                    this._keyEvent("previous", e);
                                    break;
                                case h.DOWN:
                                    c = !0;
                                    this._keyEvent("next", e);
                                    break;
                                case h.ENTER:
                                case h.NUMPAD_ENTER:
                                    this.menu.active &&
                                        (c = !0, e.preventDefault(), this.menu.select(e));
                                    break;
                                case h.TAB:
                                    this.menu.active && this.menu.select(e);
                                    break;
                                case h.ESCAPE:
                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                    break;
                                default:
                                    b = !0, this._searchTimeout(e)
                            }
                        }
                    },
                    keypress: function(e) {
                        if (c) c = !1, e.preventDefault();
                        else if (!b) {
                            var d = a.ui.keyCode;
                            switch (e.keyCode) {
                                case d.PAGE_UP:
                                    this._move("previousPage", e);
                                    break;
                                case d.PAGE_DOWN:
                                    this._move("nextPage", e);
                                    break;
                                case d.UP:
                                    this._keyEvent("previous", e);
                                    break;
                                case d.DOWN:
                                    this._keyEvent("next",
                                        e)
                            }
                        }
                    },
                    input: function(a) {
                        d ? (d = !1, a.preventDefault()) : this._searchTimeout(a)
                    },
                    focus: function() {
                        this.selectedItem = null;
                        this.previous = this._value()
                    },
                    blur: function(a) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                    }
                });
                this._initSource();
                this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    input: a(),
                    role: null
                }).hide().data("ui-menu");
                this._on(this.menu.element, {
                    mousedown: function(b) {
                        b.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function() {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                            var b = this;
                            this.document.one("mousedown", function(e) {
                                e.target !== b.element[0] && (e.target !== c && !a.contains(c, e.target)) && b.close()
                            })
                        })
                    },
                    menufocus: function(b, c) {
                        if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(b.target).trigger(b.originalEvent)
                            });
                            return
                        }
                        var d =
                            c.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", b, {
                            item: d
                        }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                    },
                    menuselect: function(a, b) {
                        var c = b.item.data("ui-autocomplete-item"),
                            d = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d;
                            this.selectedItem = c
                        }));
                        !1 !== this._trigger("select", a, {
                            item: c
                        }) && this._value(c.value);
                        this.term = this._value();
                        this.close(a);
                        this.selectedItem = c
                    }
                });
                this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching);
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function(a, b) {
                this._super(a, b);
                "source" === a && this._initSource();
                "appendTo" ===
                a && this.menu.element.appendTo(this._appendTo());
                "disabled" === a && (b && this.xhr) && this.xhr.abort()
            },
            _appendTo: function() {
                var c = this.options.appendTo;
                c && (c = c.jquery || c.nodeType ? a(c) : this.document.find(c).eq(0));
                c || (c = this.element.closest(".ui-front"));
                c.length || (c = this.document[0].body);
                return c
            },
            _initSource: function() {
                var c, b, d = this;
                a.isArray(this.options.source) ? (c = this.options.source, this.source = function(b, d) {
                    d(a.ui.autocomplete.filter(c, b.term))
                }) : "string" === typeof this.options.source ? (b = this.options.source,
                    this.source = function(c, f) {
                        d.xhr && d.xhr.abort();
                        d.xhr = a.ajax({
                            url: b,
                            data: c,
                            dataType: "json",
                            success: function(a) {
                                f(a)
                            },
                            error: function() {
                                f([])
                            }
                        })
                    }) : this.source = this.options.source
            },
            _searchTimeout: function(a) {
                clearTimeout(this.searching);
                this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function(a, b) {
                a = null != a ? a : this._value();
                this.term = this._value();
                if (a.length < this.options.minLength) return this.close(b);
                if (!1 !== this._trigger("search",
                        b)) return this._search(a)
            },
            _search: function(a) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({
                    term: a
                }, this._response())
            },
            _response: function() {
                var a = this,
                    b = ++f;
                return function(d) {
                    b === f && a.__response(d);
                    a.pending--;
                    a.pending || a.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(a) {
                a && (a = this._normalize(a));
                this._trigger("response", null, {
                    content: a
                });
                !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) :
                    this._close()
            },
            close: function(a) {
                this.cancelSearch = !0;
                this._close(a)
            },
            _close: function(a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this._value() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(c) {
                return c.length && c[0].label && c[0].value ? c : a.map(c, function(b) {
                    return "string" === typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(c) {
                var b = this.menu.element.empty();
                this._renderMenu(b, c);
                this.isNewMenu = !0;
                this.menu.refresh();
                b.show();
                this._resizeMenu();
                b.position(a.extend({ of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(c, b) {
                var d = this;
                a.each(b, function(a, b) {
                    d._renderItemData(c, b)
                })
            },
            _renderItemData: function(a, b) {
                return this._renderItem(a,
                    b).data("ui-autocomplete-item", b)
            },
            _renderItem: function(c, b) {
                return a("<li>").append(a("<a>").text(b.label)).appendTo(c)
            },
            _move: function(a, b) {
                if (this.menu.element.is(":visible"))
                    if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this._value(this.term), this.menu.blur();
                    else this.menu[a](b);
                else this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(a, b) {
                if (!this.isMultiLine ||
                    this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
            }
        });
        a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(c, b) {
                var d = RegExp(a.ui.autocomplete.escapeRegex(b), "i");
                return a.grep(c, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        });
        a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(a) {
                var b;
                this._superApply(arguments);
                !this.options.disabled && !this.cancelSearch && (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
            }
        })
    })(jQuery);
    (function(a) {
        var f, c, b, d, g = function() {
                var b = a(this).find(":ui-button");
                setTimeout(function() {
                    b.button("refresh")
                }, 1)
            },
            k = function(b) {
                var c = b.name,
                    d = b.form,
                    f = a([]);
                c && (c = c.replace(/'/g, "\\'"), f = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
                    return !this.form
                }));
                return f
            };
        a.widget("ui.button", {
            version: "1.10.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" +
                    this.eventNamespace).bind("reset" + this.eventNamespace, g);
                "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    h = this.options,
                    l = "checkbox" === this.type || "radio" === this.type,
                    m = !l ? "ui-state-active" : "";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
                this._hoverable(this.buttonElement);
                this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    h.disabled || this === f && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    h.disabled || a(this).removeClass(m)
                }).bind("click" + this.eventNamespace, function(a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                });
                this.element.bind("focus" + this.eventNamespace, function() {
                    e.buttonElement.addClass("ui-state-focus")
                }).bind("blur" +
                    this.eventNamespace,
                    function() {
                        e.buttonElement.removeClass("ui-state-focus")
                    });
                l && (this.element.bind("change" + this.eventNamespace, function() {
                    d || e.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
                    h.disabled || (d = !1, c = a.pageX, b = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function(a) {
                    if (!h.disabled && (c !== a.pageX || b !== a.pageY)) d = !0
                }));
                "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (h.disabled || d) return !1
                }) : "radio" === this.type ? this.buttonElement.bind("click" +
                    this.eventNamespace,
                    function() {
                        if (h.disabled || d) return !1;
                        a(this).addClass("ui-state-active");
                        e.buttonElement.attr("aria-pressed", "true");
                        var b = e.element[0];
                        k(b).not(b).map(function() {
                            return a(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    if (h.disabled) return !1;
                    a(this).addClass("ui-state-active");
                    f = this;
                    e.document.one("mouseup", function() {
                        f = null
                    })
                }).bind("mouseup" + this.eventNamespace, function() {
                    if (h.disabled) return !1;
                    a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(b) {
                    if (h.disabled) return !1;
                    (b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active")
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                }));
                this._setOption("disabled", h.disabled);
                this._resetButton()
            },
            _determineButtonType: function() {
                var a, b;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
                "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"),
                    (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", a)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                this._super(a, b);
                "disabled" === a ? b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1) : this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b);
                "radio" === this.type ? k(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
                        "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) this.options.label && this.element.val(this.options.label);
                else {
                    var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                        c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                        d = this.options.icons,
                        f = d.primary && d.secondary,
                        g = [];
                    d.primary || d.secondary ? (this.options.text && g.push("ui-button-text-icon" + (f ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (g.push(f ? "ui-button-icons-only" :
                        "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : g.push("ui-button-text-only");
                    b.addClass(g.join(" "))
                }
            }
        });
        a.widget("ui.buttonset", {
            version: "1.10.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                "disabled" === a && this.buttons.button("option", a, b);
                this._super(a, b)
            },
            refresh: function() {
                var b =
                    "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    })(jQuery);
    (function(a, f) {
        function c() {
            this._curInst = null;
            this._keyEvent = !1;
            this._disabledInputs = [];
            this._inDialog = this._datepickerShowing = !1;
            this._mainDivId = "ui-datepicker-div";
            this._inlineClass = "ui-datepicker-inline";
            this._appendClass = "ui-datepicker-append";
            this._triggerClass = "ui-datepicker-trigger";
            this._dialogClass = "ui-datepicker-dialog";
            this._disableClass = "ui-datepicker-disabled";
            this._unselectableClass = "ui-datepicker-unselectable";
            this._currentClass = "ui-datepicker-current-day";
            this._dayOverClass = "ui-datepicker-days-cell-over";
            this.regional = [];
            this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: "January February March April May June July August September October November December".split(" "),
                monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            };
            a.extend(this._defaults, this.regional[""]);
            this.dpDiv = b(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function b(b) {
            return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
                a(this).removeClass("ui-state-hover"); -
                1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", function() {
                if (!a.datepicker._isDisabledDatepicker(k.inline ? b.parent()[0] : k.input[0])) a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover")
            })
        }

        function d(b, c) {
            a.extend(b, c);
            for (var d in c) null == c[d] && (b[d] = c[d]);
            return b
        }
        a.extend(a.ui, {
            datepicker: {
                version: "1.10.2"
            }
        });
        var g = (new Date).getTime(),
            k;
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                d(this._defaults,
                    a || {});
                return this
            },
            _attachDatepicker: function(b, c) {
                var d, f, g;
                d = b.nodeName.toLowerCase();
                f = "div" === d || "span" === d;
                b.id || (this.uuid += 1, b.id = "dp" + this.uuid);
                g = this._newInst(a(b), f);
                g.settings = a.extend({}, c || {});
                "input" === d ? this._connectDatepicker(b, g) : f && this._inlineDatepicker(b, g)
            },
            _newInst: function(c, d) {
                return {
                    id: c[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: c,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: d,
                    dpDiv: !d ? this.dpDiv : b(a("<div class='" + this._inlineClass +
                        " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
                }
            },
            _connectDatepicker: function(b, c) {
                var d = a(b);
                c.append = a([]);
                c.trigger = a([]);
                d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function(b, c) {
                var d, f;
                d = this._get(c, "appendText");
                var g = this._get(c,
                    "isRTL");
                c.append && c.append.remove();
                d && (c.append = a("<span class='" + this._appendClass + "'>" + d + "</span>"), b[g ? "before" : "after"](c.append));
                b.unbind("focus", this._showDatepicker);
                c.trigger && c.trigger.remove();
                d = this._get(c, "showOn");
                ("focus" === d || "both" === d) && b.focus(this._showDatepicker);
                if ("button" === d || "both" === d) d = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: d,
                    title: d
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!f ?
                    d : a("<img/>").attr({
                        src: f,
                        alt: d,
                        title: d
                    }))), b[g ? "before" : "after"](c.trigger), c.trigger.click(function() {
                    a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : (a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] && a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0]));
                    return !1
                })
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, f, g = new Date(2009, 11, 20),
                        k = this._get(a, "dateFormat");
                    k.match(/[DM]/) && (b = function(a) {
                        for (f =
                            d = c = 0; f < a.length; f++) a[f].length > c && (c = a[f].length, d = f);
                        return d
                    }, g.setMonth(b(this._get(a, k.match(/MM/) ? "monthNames" : "monthNamesShort"))), g.setDate(b(this._get(a, k.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - g.getDay()));
                    a.input.attr("size", this._formatDate(a, g).length)
                }
            },
            _inlineDatepicker: function(b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c),
                    c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(b, c, f, g, k) {
                var p, b = this._dialogInst;
                b || (this.uuid += 1, b = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + b + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), b = this._dialogInst = this._newInst(this._dialogInput, !1), b.settings = {}, a.data(this._dialogInput[0], "datepicker", b));
                d(b.settings, g || {});
                c =
                    c && c.constructor === Date ? this._formatDate(b, c) : c;
                this._dialogInput.val(c);
                this._pos = k ? k.length ? k : [k.pageX, k.pageY] : null;
                this._pos || (c = document.documentElement.clientWidth, g = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, p = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + k, g / 2 - 150 + p]);
                this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
                b.settings.onSelect = f;
                this._inDialog = !0;
                this.dpDiv.addClass(this._dialogClass);
                this._showDatepicker(this._dialogInput[0]);
                a.blockUI && a.blockUI(this.dpDiv);
                a.data(this._dialogInput[0], "datepicker", b);
                return this
            },
            _destroyDatepicker: function(b) {
                var c, d = a(b),
                    f = a.data(b, "datepicker");
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (f.append.remove(), f.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
                    this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(b) {
                var c, d = a(b),
                    f = a.data(b, "datepicker");
                if (d.hasClass(this.markerClassName)) {
                    c = b.nodeName.toLowerCase();
                    if ("input" === c) b.disabled = !1, f.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" === c || "span" === c) c = d.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                    this._disabledInputs = a.map(this._disabledInputs, function(a) {
                        return a === b ? null : a
                    })
                }
            },
            _disableDatepicker: function(b) {
                var c, d = a(b),
                    f = a.data(b, "datepicker");
                if (d.hasClass(this.markerClassName)) {
                    c = b.nodeName.toLowerCase();
                    if ("input" === c) b.disabled = !0, f.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" === c || "span" === c) c = d.children("." + this._inlineClass), c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                    this._disabledInputs = a.map(this._disabledInputs, function(a) {
                        return a === b ? null : a
                    });
                    this._disabledInputs[this._disabledInputs.length] = b
                }
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1
            },
            _getInst: function(b) {
                try {
                    return a.data(b, "datepicker")
                } catch (c) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(b, c, g) {
                var k, n, p, q, r = this._getInst(b);
                if (2 === arguments.length && "string" ===
                    typeof c) return "defaults" === c ? a.extend({}, a.datepicker._defaults) : r ? "all" === c ? a.extend({}, r.settings) : this._get(r, c) : null;
                k = c || {};
                "string" === typeof c && (k = {}, k[c] = g);
                r && (this._curInst === r && this._hideDatepicker(), n = this._getDateDatepicker(b, !0), p = this._getMinMaxDate(r, "min"), q = this._getMinMaxDate(r, "max"), d(r.settings, k), null !== p && (k.dateFormat !== f && k.minDate === f) && (r.settings.minDate = this._formatDate(r, p)), null !== q && (k.dateFormat !== f && k.maxDate === f) && (r.settings.maxDate = this._formatDate(r, q)), "disabled" in
                    k && (k.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), r), this._autoSize(r), this._setDate(r, n), this._updateAlternate(r), this._updateDatepicker(r))
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                (a = this._getInst(a)) && this._updateDatepicker(a)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c =
                    this._getInst(a);
                c && !c.inline && this._setDateFromField(c, b);
                return c ? this._getDate(c) : null
            },
            _doKeyDown: function(b) {
                var c, d = a.datepicker._getInst(b.target);
                c = !0;
                var f = d.dpDiv.is(".ui-datepicker-rtl");
                d._keyEvent = !0;
                if (a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker();
                        c = !1;
                        break;
                    case 13:
                        return c = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", d.dpDiv), c[0] && a.datepicker._selectDay(b.target, d.selectedMonth, d.selectedYear, c[0]), (b = a.datepicker._get(d,
                            "onSelect")) ? (c = a.datepicker._formatDate(d), b.apply(d.input ? d.input[0] : null, [c, d])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, "stepBigMonths") : -a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, "stepBigMonths") : +a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target);
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target);
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, f ? 1 : -1, "D");
                        c = b.ctrlKey || b.metaKey;
                        b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, "stepBigMonths") : -a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D");
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        if (b.ctrlKey ||
                            b.metaKey) a.datepicker._adjustDate(b.target, f ? -1 : 1, "D");
                        c = b.ctrlKey || b.metaKey;
                        b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, "stepBigMonths") : +a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D");
                        c = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        c = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : c = !1;
                c && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function(b) {
                var c, d;
                c = a.datepicker._getInst(b.target);
                if (a.datepicker._get(c, "constrainInput")) return c = a.datepicker._possibleChars(a.datepicker._get(c, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || -1 < c.indexOf(d)
            },
            _doKeyUp: function(b) {
                var c, b = a.datepicker._getInst(b.target);
                if (b.input.val() !== b.lastVal) try {
                    if (c = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b))) a.datepicker._setDateFromField(b), a.datepicker._updateAlternate(b),
                        a.datepicker._updateDatepicker(b)
                } catch (d) {}
                return !0
            },
            _showDatepicker: function(b) {
                b = b.target || b;
                "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]);
                if (!(a.datepicker._isDisabledDatepicker(b) || a.datepicker._lastInput === b)) {
                    var c, f, g, k;
                    c = a.datepicker._getInst(b);
                    a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]));
                    f = (f = a.datepicker._get(c, "beforeShow")) ?
                        f.apply(b, [b, c]) : {};
                    if (!1 !== f && (d(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                                g |= "fixed" === a(this).css("position");
                                return !g
                            }), f = {
                                left: a.datepicker._pos[0],
                                top: a.datepicker._pos[1]
                            }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }),
                            a.datepicker._updateDatepicker(c), f = a.datepicker._checkOffset(c, f, g), c.dpDiv.css({
                                position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                                display: "none",
                                left: f.left + "px",
                                top: f.top + "px"
                            }), !c.inline)) {
                        f = a.datepicker._get(c, "showAnim");
                        k = a.datepicker._get(c, "duration");
                        c.dpDiv.zIndex(a(b).zIndex() + 1);
                        a.datepicker._datepickerShowing = !0;
                        if (a.effects && a.effects.effect[f]) c.dpDiv.show(f, a.datepicker._get(c, "showOptions"), k);
                        else c.dpDiv[f || "show"](f ? k : null);
                        c.input.is(":visible") && !c.input.is(":disabled") &&
                            c.input.focus();
                        a.datepicker._curInst = c
                    }
                }
            },
            _updateDatepicker: function(b) {
                this.maxRows = 4;
                k = b;
                b.dpDiv.empty().append(this._generateHTML(b));
                this._attachHandlers(b);
                b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var c, d = this._getNumberOfMonths(b),
                    f = d[1];
                b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                1 < f && b.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
                b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                b === a.datepicker._curInst && (a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") && b.input[0] !== document.activeElement) && b.input.focus();
                b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
                    c = b.yearshtml = null
                }, 0))
            },
            _getBorders: function(a) {
                var b = function(a) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] ||
                    a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function(b, c, d) {
                var f = b.dpDiv.outerWidth(),
                    g = b.dpDiv.outerHeight(),
                    k = b.input ? b.input.outerWidth() : 0,
                    q = b.input ? b.input.outerHeight() : 0,
                    r = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    v = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                c.left -= this._get(b, "isRTL") ? f - k : 0;
                c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0;
                c.top -= d && c.top ===
                    b.input.offset().top + q ? a(document).scrollTop() : 0;
                c.left -= Math.min(c.left, c.left + f > r && r > f ? Math.abs(c.left + f - r) : 0);
                c.top -= Math.min(c.top, c.top + g > v && v > g ? Math.abs(g + q) : 0);
                return c
            },
            _findPos: function(b) {
                for (var c = this._getInst(b), c = this._get(c, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[c ? "previousSibling" : "nextSibling"];
                b = a(b).offset();
                return [b.left, b.top]
            },
            _hideDatepicker: function(b) {
                var c, d, f = this._curInst;
                if (f && !(b && f !== a.data(b, "datepicker")) && this._datepickerShowing) {
                    b =
                        this._get(f, "showAnim");
                    c = this._get(f, "duration");
                    d = function() {
                        a.datepicker._tidyDialog(f)
                    };
                    if (a.effects && (a.effects.effect[b] || a.effects[b])) f.dpDiv.hide(b, a.datepicker._get(f, "showOptions"), c, d);
                    else f.dpDiv["slideDown" === b ? "slideUp" : "fadeIn" === b ? "fadeOut" : "hide"](b ? c : null, d);
                    b || d();
                    this._datepickerShowing = !1;
                    (b = this._get(f, "onClose")) && b.apply(f.input ? f.input[0] : null, [f.input ? f.input.val() : "", f]);
                    this._lastInput = null;
                    this._inDialog && (this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        }),
                        a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv)));
                    this._inDialog = !1
                }
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(b) {
                if (a.datepicker._curInst) {
                    var b = a(b.target),
                        c = a.datepicker._getInst(b[0]);
                    (b[0].id !== a.datepicker._mainDivId && 0 === b.parents("#" + a.datepicker._mainDivId).length && !b.hasClass(a.datepicker.markerClassName) && !b.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog ||
                        !a.blockUI) || b.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== c) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(b, c, d) {
                var b = a(b),
                    f = this._getInst(b[0]);
                this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
            },
            _gotoToday: function(b) {
                var c = a(b),
                    d = this._getInst(c[0]);
                this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear =
                    d.currentYear) : (b = new Date, d.selectedDay = b.getDate(), d.drawMonth = d.selectedMonth = b.getMonth(), d.drawYear = d.selectedYear = b.getFullYear());
                this._notifyChange(d);
                this._adjustDate(c)
            },
            _selectMonthYear: function(b, c, d) {
                var b = a(b),
                    f = this._getInst(b[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
                this._notifyChange(f);
                this._adjustDate(b)
            },
            _selectDay: function(b, c, d, f) {
                var g;
                g = a(b);
                !a(f).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(g[0]) &&
                    (g = this._getInst(g[0]), g.selectedDay = g.currentDay = a("a", f).html(), g.selectedMonth = g.currentMonth = c, g.selectedYear = g.currentYear = d, this._selectDate(b, this._formatDate(g, g.currentDay, g.currentMonth, g.currentYear)))
            },
            _clearDate: function(b) {
                b = a(b);
                this._selectDate(b, "")
            },
            _selectDate: function(b, c) {
                var d;
                d = a(b);
                var f = this._getInst(d[0]),
                    c = null != c ? c : this._formatDate(f);
                f.input && f.input.val(c);
                this._updateAlternate(f);
                (d = this._get(f, "onSelect")) ? d.apply(f.input ? f.input[0] : null, [c, f]): f.input && f.input.trigger("change");
                f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" !== typeof f.input[0] && f.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(b) {
                var c, d, f, g = this._get(b, "altField");
                g && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), f = this.formatDate(c, d, this._getFormatConfig(b)), a(g).each(function() {
                    a(this).val(f)
                }))
            },
            noWeekends: function(a) {
                a = a.getDay();
                return [0 < a && 6 > a, ""]
            },
            iso8601Week: function(a) {
                var b = new Date(a.getTime());
                b.setDate(b.getDate() +
                    4 - (b.getDay() || 7));
                a = b.getTime();
                b.setMonth(0);
                b.setDate(1);
                return Math.floor(Math.round((a - b) / 864E5) / 7) + 1
            },
            parseDate: function(b, c, d) {
                if (null == b || null == c) throw "Invalid arguments";
                c = "object" === typeof c ? c.toString() : c + "";
                if ("" === c) return null;
                var f, g, k, q = 0;
                g = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                g = "string" !== typeof g ? g : (new Date).getFullYear() % 100 + parseInt(g, 10);
                k = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort;
                var r = (d ? d.dayNames : null) || this._defaults.dayNames,
                    v = (d ? d.monthNamesShort :
                        null) || this._defaults.monthNamesShort,
                    t = (d ? d.monthNames : null) || this._defaults.monthNames,
                    w = d = -1,
                    x = -1,
                    z = -1,
                    D = !1,
                    s, y = function(a) {
                        (a = f + 1 < b.length && b.charAt(f + 1) === a) && f++;
                        return a
                    },
                    M = function(a) {
                        var b = y(a),
                            a = RegExp("^\\d{1," + ("@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2) + "}"),
                            a = c.substring(q).match(a);
                        if (!a) throw "Missing number at position " + q;
                        q += a[0].length;
                        return parseInt(a[0], 10)
                    },
                    I = function(b, e, d) {
                        var f = -1,
                            b = a.map(y(b) ? d : e, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            });
                        a.each(b, function(a, b) {
                            var e = b[1];
                            if (c.substr(q, e.length).toLowerCase() === e.toLowerCase()) return f = b[0], q += e.length, !1
                        });
                        if (-1 !== f) return f + 1;
                        throw "Unknown name at position " + q;
                    },
                    U = function() {
                        if (c.charAt(q) !== b.charAt(f)) throw "Unexpected literal at position " + q;
                        q++
                    };
                for (f = 0; f < b.length; f++)
                    if (D) "'" === b.charAt(f) && !y("'") ? D = !1 : U();
                    else switch (b.charAt(f)) {
                        case "d":
                            x = M("d");
                            break;
                        case "D":
                            I("D", k, r);
                            break;
                        case "o":
                            z = M("o");
                            break;
                        case "m":
                            w = M("m");
                            break;
                        case "M":
                            w = I("M", v, t);
                            break;
                        case "y":
                            d = M("y");
                            break;
                        case "@":
                            s = new Date(M("@"));
                            d = s.getFullYear();
                            w = s.getMonth() + 1;
                            x = s.getDate();
                            break;
                        case "!":
                            s = new Date((M("!") - this._ticksTo1970) / 1E4);
                            d = s.getFullYear();
                            w = s.getMonth() + 1;
                            x = s.getDate();
                            break;
                        case "'":
                            y("'") ? U() : D = !0;
                            break;
                        default:
                            U()
                    }
                if (q < c.length && (k = c.substr(q), !/^\s+/.test(k))) throw "Extra/unparsed characters found in date: " + k; - 1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= g ? 0 : -100));
                if (-1 < z) {
                    w = 1;
                    x = z;
                    do {
                        g = this._getDaysInMonth(d, w - 1);
                        if (x <=
                            g) break;
                        w++;
                        x -= g
                    } while (1)
                }
                s = this._daylightSavingAdjust(new Date(d, w - 1, x));
                if (s.getFullYear() !== d || s.getMonth() + 1 !== w || s.getDate() !== x) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d,
                    f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    g = (c ? c.dayNames : null) || this._defaults.dayNames,
                    k = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    c = (c ? c.monthNames : null) || this._defaults.monthNames,
                    r = function(b) {
                        (b = d + 1 < a.length && a.charAt(d + 1) === b) && d++;
                        return b
                    },
                    v = function(a, b, c) {
                        b = "" + b;
                        if (r(a))
                            for (; b.length < c;) b = "0" + b;
                        return b
                    },
                    t = "",
                    w = !1;
                if (b)
                    for (d = 0; d < a.length; d++)
                        if (w) "'" === a.charAt(d) && !r("'") ? w = !1 : t += a.charAt(d);
                        else switch (a.charAt(d)) {
                            case "d":
                                t += v("d", b.getDate(), 2);
                                break;
                            case "D":
                                var x;
                                x = b.getDay();
                                var z = f,
                                    D = g;
                                x = r("D") ? D[x] : z[x];
                                t += x;
                                break;
                            case "o":
                                t += v("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                                break;
                            case "m":
                                t += v("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                x = b.getMonth();
                                z = k;
                                D = c;
                                x = r("M") ? D[x] : z[x];
                                t += x;
                                break;
                            case "y":
                                t += r("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                t += b.getTime();
                                break;
                            case "!":
                                t += 1E4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                r("'") ?
                                    t += "'" : w = !0;
                                break;
                            default:
                                t += a.charAt(d)
                        }
                return t
            },
            _possibleChars: function(a) {
                var b, c = "",
                    d = !1,
                    f = function(c) {
                        (c = b + 1 < a.length && a.charAt(b + 1) === c) && b++;
                        return c
                    };
                for (b = 0; b < a.length; b++)
                    if (d) "'" === a.charAt(b) && !f("'") ? d = !1 : c += a.charAt(b);
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            f("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += a.charAt(b)
                    }
                return c
            },
            _get: function(a, b) {
                return a.settings[b] !== f ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function(a,
                b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        f = this._getDefaultDate(a),
                        g = f,
                        k = this._getFormatConfig(a);
                    try {
                        g = this.parseDate(c, d, k) || f
                    } catch (r) {
                        d = b ? "" : d
                    }
                    a.selectedDay = g.getDate();
                    a.drawMonth = a.selectedMonth = g.getMonth();
                    a.drawYear = a.selectedYear = g.getFullYear();
                    a.currentDay = d ? g.getDate() : 0;
                    a.currentMonth = d ? g.getMonth() : 0;
                    a.currentYear = d ? g.getFullYear() : 0;
                    this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a,
                    this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(b, c, d) {
                if (null == c || "" === c) c = d;
                else {
                    var f;
                    if ("string" === typeof c) a: {
                        try {
                            f = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                            break a
                        } catch (g) {}
                        var k = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date,
                            b = k.getFullYear();f = k.getMonth();
                        for (var k = k.getDate(), q = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = q.exec(c); r;) {
                            switch (r[2] || "d") {
                                case "d":
                                case "D":
                                    k += parseInt(r[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    k +=
                                        7 * parseInt(r[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    f += parseInt(r[1], 10);
                                    k = Math.min(k, a.datepicker._getDaysInMonth(b, f));
                                    break;
                                case "y":
                                case "Y":
                                    b += parseInt(r[1], 10), k = Math.min(k, a.datepicker._getDaysInMonth(b, f))
                            }
                            r = q.exec(c)
                        }
                        f = new Date(b, f, k)
                    }
                    else "number" === typeof c ? isNaN(c) ? c = d : (b = new Date, b.setDate(b.getDate() + c), c = b) : c = new Date(c.getTime()), f = c;
                    c = f
                }
                if (c = c && "Invalid Date" === c.toString() ? d : c) c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0);
                return this._daylightSavingAdjust(c)
            },
            _daylightSavingAdjust: function(a) {
                if (!a) return null;
                a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
                return a
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    f = a.selectedMonth,
                    g = a.selectedYear,
                    b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = b.getDate();
                a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
                a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
                (f !== a.selectedMonth || g !== a.selectedYear) && !c && this._notifyChange(a);
                this._adjustInstDate(a);
                a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                return !a.currentYear ||
                    a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
            },
            _attachHandlers: function(b) {
                var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() {
                    a(this).bind(this.getAttribute("data-event"), {
                        prev: function() {
                            window["DP_jQuery_" + g].datepicker._adjustDate(d, -c, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + g].datepicker._adjustDate(d, +c, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + g].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + g].datepicker._gotoToday(d)
                        },
                        selectDay: function() {
                            window["DP_jQuery_" + g].datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                            return !1
                        },
                        selectMonth: function() {
                            window["DP_jQuery_" + g].datepicker._selectMonthYear(d, this, "M");
                            return !1
                        },
                        selectYear: function() {
                            window["DP_jQuery_" + g].datepicker._selectMonthYear(d, this, "Y");
                            return !1
                        }
                    }[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b, c, d, f, g, k, r, v, t, w, x, z, D,
                    s, y, M, I, U, ea, J, L, F, Y, ta, na, N, ka, ha = new Date,
                    ha = this._daylightSavingAdjust(new Date(ha.getFullYear(), ha.getMonth(), ha.getDate())),
                    W = this._get(a, "isRTL");
                k = this._get(a, "showButtonPanel");
                d = this._get(a, "hideIfNoPrevNext");
                g = this._get(a, "navigationAsDateFormat");
                var Z = this._getNumberOfMonths(a),
                    C = this._get(a, "showCurrentAtPos");
                f = this._get(a, "stepMonths");
                var A = 1 !== Z[0] || 1 !== Z[1],
                    H = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)),
                    aa = this._getMinMaxDate(a,
                        "min"),
                    la = this._getMinMaxDate(a, "max"),
                    C = a.drawMonth - C,
                    P = a.drawYear;
                0 > C && (C += 12, P--);
                if (la) {
                    b = this._daylightSavingAdjust(new Date(la.getFullYear(), la.getMonth() - Z[0] * Z[1] + 1, la.getDate()));
                    for (b = aa && b < aa ? aa : b; this._daylightSavingAdjust(new Date(P, C, 1)) > b;) C--, 0 > C && (C = 11, P--)
                }
                a.drawMonth = C;
                a.drawYear = P;
                b = this._get(a, "prevText");
                b = !g ? b : this.formatDate(b, this._daylightSavingAdjust(new Date(P, C - f, 1)), this._getFormatConfig(a));
                b = this._canAdjustMonth(a, -1, P, C) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                    b + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + b + "</span></a>" : d ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + b + "</span></a>";
                c = this._get(a, "nextText");
                c = !g ? c : this.formatDate(c, this._daylightSavingAdjust(new Date(P, C + f, 1)), this._getFormatConfig(a));
                d = this._canAdjustMonth(a, 1, P, C) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" +
                    (W ? "w" : "e") + "'>" + c + "</span></a>" : d ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + c + "</span></a>";
                f = this._get(a, "currentText");
                c = this._get(a, "gotoCurrent") && a.currentDay ? H : ha;
                f = !g ? f : this.formatDate(f, c, this._getFormatConfig(a));
                g = !a.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") +
                    "</button>" : "";
                k = k ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? g : "") + (this._isInRange(a, c) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + f + "</button>" : "") + (W ? "" : g) + "</div>" : "";
                g = parseInt(this._get(a, "firstDay"), 10);
                g = isNaN(g) ? 0 : g;
                f = this._get(a, "showWeek");
                c = this._get(a, "dayNames");
                r = this._get(a, "dayNamesMin");
                v = this._get(a, "monthNames");
                t = this._get(a, "monthNamesShort");
                w = this._get(a,
                    "beforeShowDay");
                x = this._get(a, "showOtherMonths");
                z = this._get(a, "selectOtherMonths");
                D = this._getDefaultDate(a);
                s = "";
                y;
                for (M = 0; M < Z[0]; M++) {
                    I = "";
                    this.maxRows = 4;
                    for (U = 0; U < Z[1]; U++) {
                        ea = this._daylightSavingAdjust(new Date(P, C, a.selectedDay));
                        y = " ui-corner-all";
                        J = "";
                        if (A) {
                            J += "<div class='ui-datepicker-group";
                            if (1 < Z[1]) switch (U) {
                                case 0:
                                    J += " ui-datepicker-group-first";
                                    y = " ui-corner-" + (W ? "right" : "left");
                                    break;
                                case Z[1] - 1:
                                    J += " ui-datepicker-group-last";
                                    y = " ui-corner-" + (W ? "left" : "right");
                                    break;
                                default:
                                    J += " ui-datepicker-group-middle",
                                        y = ""
                            }
                            J += "'>"
                        }
                        J += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + y + "'>" + (/all|left/.test(y) && 0 === M ? W ? d : b : "") + (/all|right/.test(y) && 0 === M ? W ? b : d : "") + this._generateMonthYearHeader(a, C, P, aa, la, 0 < M || 0 < U, v, t) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                        L = f ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                        for (y = 0; 7 > y; y++) F = (y + g) % 7, L += "<th" + (5 <= (y + g + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + c[F] + "'>" + r[F] + "</span></th>";
                        J += L +
                            "</tr></thead><tbody>";
                        L = this._getDaysInMonth(P, C);
                        P === a.selectedYear && C === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, L));
                        y = (this._getFirstDayOfMonth(P, C) - g + 7) % 7;
                        L = Math.ceil((y + L) / 7);
                        this.maxRows = L = A ? this.maxRows > L ? this.maxRows : L : L;
                        F = this._daylightSavingAdjust(new Date(P, C, 1 - y));
                        for (Y = 0; Y < L; Y++) {
                            J += "<tr>";
                            ta = !f ? "" : "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(F) + "</td>";
                            for (y = 0; 7 > y; y++) na = w ? w.apply(a.input ? a.input[0] : null, [F]) : [!0, ""], ka = (N = F.getMonth() !== C) && !z ||
                                !na[0] || aa && F < aa || la && F > la, ta += "<td class='" + (5 <= (y + g + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (F.getTime() === ea.getTime() && C === a.selectedMonth && a._keyEvent || D.getTime() === F.getTime() && D.getTime() === ea.getTime() ? " " + this._dayOverClass : "") + (ka ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !x ? "" : " " + na[1] + (F.getTime() === H.getTime() ? " " + this._currentClass : "") + (F.getTime() === ha.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!N || x) && na[2] ? " title='" + na[2].replace(/'/g,
                                    "&#39;") + "'" : "") + (ka ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (N && !x ? "&#xa0;" : ka ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === ha.getTime() ? " ui-state-highlight" : "") + (F.getTime() === H.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                            J += ta + "</tr>"
                        }
                        C++;
                        11 < C &&
                            (C = 0, P++);
                        J += "</tbody></table>" + (A ? "</div>" + (0 < Z[0] && U === Z[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                        I += J
                    }
                    s += I
                }
                a._keyEvent = !1;
                return s + k
            },
            _generateMonthYearHeader: function(a, b, c, d, f, g, k, r) {
                var v, t, w, x = this._get(a, "changeMonth"),
                    z = this._get(a, "changeYear"),
                    D = this._get(a, "showMonthAfterYear"),
                    s = "<div class='ui-datepicker-title'>",
                    y = "";
                if (g || !x) y += "<span class='ui-datepicker-month'>" + k[b] + "</span>";
                else {
                    k = d && d.getFullYear() === c;
                    v = f && f.getFullYear() === c;
                    y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                    for (t = 0; 12 > t; t++)
                        if ((!k || t >= d.getMonth()) && (!v || t <= f.getMonth())) y += "<option value='" + t + "'" + (t === b ? " selected='selected'" : "") + ">" + r[t] + "</option>";
                    y += "</select>"
                }
                D || (s += y + (g || !x || !z ? "&#xa0;" : ""));
                if (!a.yearshtml)
                    if (a.yearshtml = "", g || !z) s += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else {
                        r = this._get(a, "yearRange").split(":");
                        w = (new Date).getFullYear();
                        k = function(a) {
                            a = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? w + parseInt(a, 10) : parseInt(a, 10);
                            return isNaN(a) ? w : a
                        };
                        b = k(r[0]);
                        r = Math.max(b, k(r[1] || ""));
                        b = d ? Math.max(b, d.getFullYear()) : b;
                        r = f ? Math.min(r, f.getFullYear()) : r;
                        for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; b <= r; b++) a.yearshtml += "<option value='" + b + "'" + (b === c ? " selected='selected'" : "") + ">" + b + "</option>";
                        a.yearshtml += "</select>";
                        s += a.yearshtml;
                        a.yearshtml = null
                    }
                s += this._get(a, "yearSuffix");
                D && (s += (g || !x || !z ? "&#xa0;" : "") + y);
                return s + "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0),
                    f = a.drawMonth +
                    ("M" === c ? b : 0),
                    b = Math.min(a.selectedDay, this._getDaysInMonth(d, f)) + ("D" === c ? b : 0),
                    d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, f, b)));
                a.selectedDay = d.getDate();
                a.drawMonth = a.selectedMonth = d.getMonth();
                a.drawYear = a.selectedYear = d.getFullYear();
                ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    c = c && b < c ? c : b;
                return d && c > d ? d : c
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ?
                    a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                a = this._get(a, "numberOfMonths");
                return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return (new Date(a, b, 1)).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var f = this._getNumberOfMonths(a),
                    c = this._daylightSavingAdjust(new Date(c,
                        d + (0 > b ? b : f[0] * f[1]), 1));
                0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
                return this._isInRange(a, c)
            },
            _isInRange: function(a, b) {
                var c, d, f = this._getMinMaxDate(a, "min"),
                    g = this._getMinMaxDate(a, "max"),
                    k = null,
                    r = null;
                if (c = this._get(a, "yearRange")) c = c.split(":"), d = (new Date).getFullYear(), k = parseInt(c[0], 10), r = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (k += d), c[1].match(/[+\-].*/) && (r += d);
                return (!f || b.getTime() >= f.getTime()) && (!g || b.getTime() <= g.getTime()) && (!k || b.getFullYear() >= k) && (!r ||
                    b.getFullYear() <= r)
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff"),
                    b = "string" !== typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
                return {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                b = b ? "object" === typeof b ? b : this._daylightSavingAdjust(new Date(d,
                    c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
            }
        });
        a.fn.datepicker = function(b) {
            if (!this.length) return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0);
            0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" === typeof b && ("isDisabled" ===
                b || "getDate" === b || "widget" === b) || "option" === b && 2 === arguments.length && "string" === typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" === typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            })
        };
        a.datepicker = new c;
        a.datepicker.initialized = !1;
        a.datepicker.uuid = (new Date).getTime();
        a.datepicker.version = "1.10.2";
        window["DP_jQuery_" + g] = a
    })(jQuery);
    (function(a) {
        var f = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            c = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        a.widget("ui.dialog", {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                };
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                };
                this.originalTitle = this.element.attr("title");
                this.options.title = this.options.title || this.originalTitle;
                this._createWrapper();
                this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
                this._createTitlebar();
                this._createButtonPane();
                this.options.draggable && a.fn.draggable && this._makeDraggable();
                this.options.resizable && a.fn.resizable && this._makeResizable();
                this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var b =
                    this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function() {
                var a, c = this.originalPosition;
                this._destroyOverlay();
                this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
                this.uiDialog.stop(!0, !0).remove();
                this.originalTitle && this.element.attr("title", this.originalTitle);
                a = c.parent.children().eq(c.index);
                a.length && a[0] !== this.element[0] ? a.before(this.element) : c.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function(b) {
                var c = this;
                this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                    c._trigger("close", b)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(a, c) {
                var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                f && !c && this._trigger("focus", a);
                return f
            },
            open: function() {
                var b = this;
                this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    b._focusTabbable();
                    b._trigger("focus")
                }), this._trigger("open"))
            },
            _focusTabbable: function() {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable"));
                a.length ||
                    (a = this.uiDialogButtonPane.find(":tabbable"));
                a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
                a.length || (a = this.uiDialog);
                a.eq(0).focus()
            },
            _keepFocus: function(b) {
                function c() {
                    var b = this.document[0].activeElement;
                    this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable()
                }
                b.preventDefault();
                c.call(this);
                this._delay(c)
            },
            _createWrapper: function() {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo());
                this._on(this.uiDialog, {
                    keydown: function(b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) b.preventDefault(), this.close(b);
                        else if (b.keyCode === a.ui.keyCode.TAB) {
                            var c = this.uiDialog.find(":tabbable"),
                                f = c.filter(":first"),
                                c = c.filter(":last");
                            if ((b.target === c[0] || b.target === this.uiDialog[0]) && !b.shiftKey) f.focus(1), b.preventDefault();
                            else if ((b.target === f[0] || b.target === this.uiDialog[0]) && b.shiftKey) c.focus(1),
                                b.preventDefault()
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                });
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(b) {
                        a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                });
                this.uiDialogTitlebarClose = a("<button></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
                this._on(this.uiDialogTitlebarClose, {
                    click: function(a) {
                        a.preventDefault();
                        this.close(a)
                    }
                });
                b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
                this._title(b);
                this.uiDialog.attr({
                    "aria-labelledby": b.attr("id")
                })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;");
                a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
                this._createButtons()
            },
            _createButtons: function() {
                var b = this,
                    c = this.options.buttons;
                this.uiDialogButtonPane.remove();
                this.uiButtonSet.empty();
                a.isEmptyObject(c) || a.isArray(c) && !c.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c,
                    d) {
                    var e, f, d = a.isFunction(d) ? {
                            click: d,
                            text: c
                        } : d,
                        d = a.extend({
                            type: "button"
                        }, d);
                    e = d.click;
                    d.click = function() {
                        e.apply(b.element[0], arguments)
                    };
                    f = {
                        icons: d.icons,
                        text: d.showText
                    };
                    delete d.icons;
                    delete d.showText;
                    a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c = this,
                    f = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(f, e) {
                        a(this).addClass("ui-dialog-dragging");
                        c._blockFrames();
                        c._trigger("dragStart", f, b(e))
                    },
                    drag: function(a, e) {
                        c._trigger("drag", a, b(e))
                    },
                    stop: function(k, e) {
                        f.position = [e.position.left - c.document.scrollLeft(), e.position.top - c.document.scrollTop()];
                        a(this).removeClass("ui-dialog-dragging");
                        c._unblockFrames();
                        c._trigger("dragStop", k, b(e))
                    }
                })
            },
            _makeResizable: function() {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var c = this,
                    f = this.options,
                    k = f.resizable,
                    e = this.uiDialog.css("position"),
                    k = "string" === typeof k ? k : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: f.maxWidth,
                    maxHeight: f.maxHeight,
                    minWidth: f.minWidth,
                    minHeight: this._minHeight(),
                    handles: k,
                    start: function(e, f) {
                        a(this).addClass("ui-dialog-resizing");
                        c._blockFrames();
                        c._trigger("resizeStart", e, b(f))
                    },
                    resize: function(a, e) {
                        c._trigger("resize",
                            a, b(e))
                    },
                    stop: function(e, k) {
                        f.height = a(this).height();
                        f.width = a(this).width();
                        a(this).removeClass("ui-dialog-resizing");
                        c._unblockFrames();
                        c._trigger("resizeStop", e, b(k))
                    }
                }).css("position", e)
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show();
                this.uiDialog.position(this.options.position);
                a || this.uiDialog.hide()
            },
            _setOptions: function(b) {
                var d = this,
                    g = !1,
                    k = {};
                a.each(b,
                    function(a, b) {
                        d._setOption(a, b);
                        a in f && (g = !0);
                        a in c && (k[a] = b)
                    });
                g && (this._size(), this._position());
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", k)
            },
            _setOption: function(a, c) {
                var f, k = this.uiDialog;
                "dialogClass" === a && k.removeClass(this.options.dialogClass).addClass(c);
                "disabled" !== a && (this._super(a, c), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                        label: "" + c
                    }), "draggable" ===
                    a && ((f = k.is(":data(ui-draggable)")) && !c && k.draggable("destroy"), !f && c && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && ((f = k.is(":data(ui-resizable)")) && !c && k.resizable("destroy"), f && "string" === typeof c && k.resizable("option", "handles", c), !f && !1 !== c && this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, c, f, k = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                });
                k.minWidth >
                    k.width && (k.width = k.minWidth);
                a = this.uiDialog.css({
                    height: "auto",
                    width: k.width
                }).outerHeight();
                c = Math.max(0, k.minHeight - a);
                f = "number" === typeof k.maxHeight ? Math.max(0, k.maxHeight - a) : "none";
                "auto" === k.height ? this.element.css({
                    minHeight: c,
                    maxHeight: f,
                    height: "auto"
                }) : this.element.height(Math.max(0, k.height - a));
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var b =
                        a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(b) {
                return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var b = this,
                        c = this.widgetFullName;
                    a.ui.dialog.overlayInstances || this._delay(function() {
                        a.ui.dialog.overlayInstances &&
                            this.document.bind("focusin.dialog", function(f) {
                                b._allowInteraction(f) || (f.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())
                            })
                    });
                    this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                    this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    });
                    a.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
                    this.overlay.remove(), this.overlay = null)
            }
        });
        a.ui.dialog.overlayInstances = 0;
        !1 !== a.uiBackCompat && a.widget("ui.dialog", a.ui.dialog, {
            _position: function() {
                var b = this.options.position,
                    c = [],
                    f = [0, 0],
                    k;
                if (b) {
                    if ("string" === typeof b || "object" === typeof b && "0" in b) c = b.split ? b.split(" ") : [b[0], b[1]], 1 === c.length && (c[1] = c[0]), a.each(["left", "top"], function(a, b) {
                        +c[a] === c[a] && (f[a] = c[a], c[a] = b)
                    }), b = {
                        my: c[0] + (0 > f[0] ? f[0] : "+" + f[0]) + " " + c[1] + (0 > f[1] ? f[1] : "+" + f[1]),
                        at: c.join(" ")
                    };
                    b = a.extend({}, a.ui.dialog.prototype.options.position,
                        b)
                } else b = a.ui.dialog.prototype.options.position;
                (k = this.uiDialog.is(":visible")) || this.uiDialog.show();
                this.uiDialog.position(b);
                k || this.uiDialog.hide()
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.menu", {
            version: "1.10.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" +
                    this.eventNamespace, a.proxy(function(a) {
                        this.options.disabled && a.preventDefault()
                    }, this));
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                this._on({
                    "mousedown .ui-menu-item > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(f) {
                        var c = a(f.target).closest(".ui-menu-item");
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(f), c.has(".ui-menu").length ?
                            this.expand(f) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(f) {
                        var c = a(f.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active");
                        this.focus(f, c)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(a, c) {
                        var b = this.active || this.element.children(".ui-menu-item").eq(0);
                        c || this.focus(a, b)
                    },
                    blur: function(f) {
                        this._delay(function() {
                            a.contains(this.element[0],
                                this.document[0].activeElement) || this.collapseAll(f)
                        })
                    },
                    keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function(f) {
                        a(f.target).closest(".ui-menu").length || this.collapseAll(f);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var f = a(this);
                    f.data("ui-menu-submenu-carat") && f.remove()
                });
                this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(f) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                        "\\$&")
                }
                var b, d, g, k, e = !0;
                switch (f.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(f);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(f);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", f);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", f);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(f);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(f);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(f);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(f);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(f);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(f);
                        break;
                    default:
                        e = !1, b = this.previousFilter || "", d = String.fromCharCode(f.keyCode), g = !1, clearTimeout(this.filterTimer), d === b ? g = !0 : d = b + d, k = RegExp("^" + c(d), "i"), b = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return k.test(a(this).children("a").text())
                            }), b = g && -1 !== b.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : b, b.length || (d = String.fromCharCode(f.keyCode), k = RegExp("^" + c(d), "i"), b = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return k.test(a(this).children("a").text())
                            })),
                            b.length ? (this.focus(f, b), 1 < b.length ? (this.previousFilter = d, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
                }
                e && f.preventDefault()
            },
            _activate: function(a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function() {
                var f, c = this.options.icons.submenu;
                f = this.element.find(this.options.menus);
                f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var b = a(this),
                        d = b.prev("a"),
                        f = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    d.attr("aria-haspopup", "true").prepend(f);
                    b.attr("aria-labelledby", d.attr("id"))
                });
                f = f.add(this.element);
                f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                f.children(":not(.ui-menu-item)").each(function() {
                    var b =
                        a(this);
                    /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                });
                f.children(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(a, c) {
                "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu);
                this._super(a, c)
            },
            focus: function(a, c) {
                var b;
                this.blur(a, a &&
                    "focus" === a.type);
                this._scrollIntoView(c);
                this.active = c.first();
                b = this.active.children("a").addClass("ui-state-focus");
                this.options.role && this.element.attr("aria-activedescendant", b.attr("id"));
                this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
                a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay);
                b = c.children(".ui-menu");
                b.length && /^mouse/.test(a.type) && this._startOpening(b);
                this.activeMenu = c.parent();
                this._trigger("focus",
                    a, {
                        item: c
                    })
            },
            _scrollIntoView: function(f) {
                var c, b, d;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, b = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, c = f.offset().top - this.activeMenu.offset().top - c - b, b = this.activeMenu.scrollTop(), d = this.activeMenu.height(), f = f.height(), 0 > c ? this.activeMenu.scrollTop(b + c) : c + f > d && this.activeMenu.scrollTop(b + c - d + f))
            },
            blur: function(a, c) {
                c || clearTimeout(this.timer);
                this.active && (this.active.children("a").removeClass("ui-state-focus"),
                    this.active = null, this._trigger("blur", a, {
                        item: this.active
                    }))
            },
            _startOpening: function(a) {
                clearTimeout(this.timer);
                "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close();
                    this._open(a)
                }, this.delay))
            },
            _open: function(f) {
                var c = a.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(f.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                f.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function(f,
                c) {
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    var b = c ? this.element : a(f && f.target).closest(this.element.find(".ui-menu"));
                    b.length || (b = this.element);
                    this._close(b);
                    this.blur(f);
                    this.activeMenu = b
                }, this.delay)
            },
            _close: function(a) {
                a || (a = this.active ? this.active.parent() : this.element);
                a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(a) {
                var c = this.active && this.active.parent().closest(".ui-menu-item",
                    this.element);
                c && c.length && (this._close(), this.focus(a, c))
            },
            expand: function(a) {
                var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                c && c.length && (this._open(c.parent()), this._delay(function() {
                    this.focus(a, c)
                }))
            },
            next: function(a) {
                this._move("next", "first", a)
            },
            previous: function(a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(a, c, b) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
                if (!d || !d.length || !this.active) d = this.activeMenu.children(".ui-menu-item")[c]();
                this.focus(b, d)
            },
            nextPage: function(f) {
                var c, b, d;
                this.active ? this.isLastItem() || (this._hasScroll() ? (b = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    c = a(this);
                    return 0 > c.offset().top - b -
                        d
                }), this.focus(f, c)) : this.focus(f, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())) : this.next(f)
            },
            previousPage: function(f) {
                var c, b, d;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (b = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    c = a(this);
                    return 0 < c.offset().top - b + d
                }), this.focus(f, c)) : this.focus(f, this.activeMenu.children(".ui-menu-item").first())) : this.next(f)
            },
            _hasScroll: function() {
                return this.element.outerHeight() <
                    this.element.prop("scrollHeight")
            },
            select: function(f) {
                this.active = this.active || a(f.target).closest(".ui-menu-item");
                var c = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(f, !0);
                this._trigger("select", f, c)
            }
        })
    })(jQuery);
    (function(a, f) {
        a.widget("ui.progressbar", {
            version: "1.10.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue();
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                });
                this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
                this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove()
            },
            value: function(a) {
                if (a === f) return this.options.value;
                this.options.value = this._constrainedValue(a);
                this._refreshValue()
            },
            _constrainedValue: function(a) {
                a === f && (a = this.options.value);
                this.indeterminate = !1 === a;
                "number" !== typeof a && (a = 0);
                return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
            },
            _setOptions: function(a) {
                var b = a.value;
                delete a.value;
                this._super(a);
                this.options.value = this._constrainedValue(b);
                this._refreshValue()
            },
            _setOption: function(a, b) {
                "max" ===
                a && (b = Math.max(this.min, b));
                this._super(a, b)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var c = this.options.value,
                    b = this._percentage();
                this.valueDiv.toggle(this.indeterminate || c > this.min).toggleClass("ui-corner-right", c === this.options.max).width(b.toFixed(0) + "%");
                this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv ||
                    (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": c
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
                this.oldValue !== c && (this.oldValue = c, this._trigger("change"));
                c === this.options.max && this._trigger("complete")
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._mouseSliding = this._keySliding = !1;
                this._animateOff = !0;
                this._handleIndex = null;
                this._detectOrientation();
                this._mouseInit();
                this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
                this._refresh();
                this._setOption("disabled", this.options.disabled);
                this._animateOff = !1
            },
            _refresh: function() {
                this._createRange();
                this._createHandles();
                this._setupEvents();
                this._refreshValue()
            },
            _createHandles: function() {
                var f, c;
                f = this.options;
                var b = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    d = [];
                c = f.values && f.values.length || 1;
                b.length > c && (b.slice(c).remove(), b = b.slice(0, c));
                for (f = b.length; f < c; f++) d.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = b.add(a(d.join("")).appendTo(this.element));
                this.handle = this.handles.eq(0);
                this.handles.each(function(b) {
                    a(this).data("ui-slider-handle-index", b)
                })
            },
            _createRange: function() {
                var f = this.options,
                    c = "";
                f.range ? (!0 === f.range && (f.values ? f.values.length && 2 !== f.values.length ? f.values = [f.values[0], f.values[0]] : a.isArray(f.values) && (f.values = f.values.slice(0)) : f.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all") :
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }), this.range.addClass(c + ("min" === f.range || "max" === f.range ? " ui-slider-range-" + f.range : ""))) : this.range = a([])
            },
            _setupEvents: function() {
                var a = this.handles.add(this.range).filter("a");
                this._off(a);
                this._on(a, this._handleEvents);
                this._hoverable(a);
                this._focusable(a)
            },
            _destroy: function() {
                this.handles.remove();
                this.range.remove();
                this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
                this._mouseDestroy()
            },
            _mouseCapture: function(f) {
                var c, b, d, g, k, e = this,
                    h = this.options;
                if (h.disabled) return !1;
                this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                };
                this.elementOffset = this.element.offset();
                c = this._normValueFromMouse({
                    x: f.pageX,
                    y: f.pageY
                });
                b = this._valueMax() - this._valueMin() + 1;
                this.handles.each(function(f) {
                    var k = Math.abs(c - e.values(f));
                    if (b > k || b === k && (f === e._lastChangedValue || e.values(f) === h.min)) b = k, d = a(this), g = f
                });
                if (!1 === this._start(f, g)) return !1;
                this._mouseSliding = !0;
                this._handleIndex = g;
                d.addClass("ui-state-active").focus();
                k = d.offset();
                this._clickOffset = !a(f.target).parents().addBack().is(".ui-slider-handle") ? {
                    left: 0,
                    top: 0
                } : {
                    left: f.pageX - k.left - d.width() / 2,
                    top: f.pageY - k.top - d.height() / 2 - (parseInt(d.css("borderTopWidth"), 10) || 0) - (parseInt(d.css("borderBottomWidth"), 10) || 0) + (parseInt(d.css("marginTop"), 10) || 0)
                };
                this.handles.hasClass("ui-state-hover") || this._slide(f, g, c);
                return this._animateOff = !0
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(a) {
                var c =
                    this._normValueFromMouse({
                        x: a.pageX,
                        y: a.pageY
                    });
                this._slide(a, this._handleIndex, c);
                return !1
            },
            _mouseStop: function(a) {
                this.handles.removeClass("ui-state-active");
                this._mouseSliding = !1;
                this._stop(a, this._handleIndex);
                this._change(a, this._handleIndex);
                this._clickOffset = this._handleIndex = null;
                return this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var c;
                "horizontal" === this.orientation ? (c = this.elementSize.width,
                    a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
                c = a / c;
                1 < c && (c = 1);
                0 > c && (c = 0);
                "vertical" === this.orientation && (c = 1 - c);
                a = this._valueMax() - this._valueMin();
                c = this._valueMin() + c * a;
                return this._trimAlignValue(c)
            },
            _start: function(a, c) {
                var b = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                return this._trigger("start", a, b)
            },
            _slide: function(a, c, b) {
                var d;
                if (this.options.values && this.options.values.length) {
                    d = this.values(c ? 0 : 1);
                    if (2 === this.options.values.length && !0 === this.options.range && (0 === c && b > d || 1 === c && b < d)) b = d;
                    b !== this.values(c) && (d = this.values(), d[c] = b, a = this._trigger("slide", a, {
                        handle: this.handles[c],
                        value: b,
                        values: d
                    }), this.values(c ? 0 : 1), !1 !== a && this.values(c, b, !0))
                } else b !== this.value() && (a = this._trigger("slide", a, {
                    handle: this.handles[c],
                    value: b
                }), !1 !== a && this.value(b))
            },
            _stop: function(a,
                c) {
                var b = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                this._trigger("stop", a, b)
            },
            _change: function(a, c) {
                if (!this._keySliding && !this._mouseSliding) {
                    var b = {
                        handle: this.handles[c],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                    this._lastChangedValue = c;
                    this._trigger("change", a, b)
                }
            },
            value: function(a) {
                if (arguments.length) this.options.value =
                    this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
                else return this._value()
            },
            values: function(f, c) {
                var b, d, g;
                if (1 < arguments.length) this.options.values[f] = this._trimAlignValue(c), this._refreshValue(), this._change(null, f);
                else if (arguments.length)
                    if (a.isArray(arguments[0])) {
                        b = this.options.values;
                        d = arguments[0];
                        for (g = 0; g < b.length; g += 1) b[g] = this._trimAlignValue(d[g]), this._change(null, g);
                        this._refreshValue()
                    } else return this.options.values && this.options.values.length ? this._values(f) : this.value();
                else return this._values()
            },
            _setOption: function(f, c) {
                var b, d = 0;
                "range" === f && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
                a.isArray(this.options.values) && (d = this.options.values.length);
                a.Widget.prototype._setOption.apply(this, arguments);
                switch (f) {
                    case "orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" +
                            this.orientation);
                        this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = !1;
                        break;
                    case "values":
                        this._animateOff = !0;
                        this._refreshValue();
                        for (b = 0; b < d; b += 1) this._change(null, b);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(a) {
                var c, b;
                if (arguments.length) return c = this.options.values[a], c = this._trimAlignValue(c);
                if (this.options.values && this.options.values.length) {
                    c = this.options.values.slice();
                    for (b = 0; b < c.length; b += 1) c[b] = this._trimAlignValue(c[b]);
                    return c
                }
                return []
            },
            _trimAlignValue: function(a) {
                if (a <= this._valueMin()) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var c = 0 < this.options.step ? this.options.step : 1,
                    b = (a - this._valueMin()) % c,
                    a = a - b;
                2 * Math.abs(b) >= c && (a += 0 < b ? c : -c);
                return parseFloat(a.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var f, c, b, d, g, k = this.options.range,
                    e = this.options,
                    h = this,
                    l = !this._animateOff ? e.animate : !1,
                    m = {};
                if (this.options.values && this.options.values.length) this.handles.each(function(b) {
                    c = 100 * ((h.values(b) - h._valueMin()) / (h._valueMax() - h._valueMin()));
                    m["horizontal" === h.orientation ? "left" : "bottom"] = c + "%";
                    a(this).stop(1, 1)[l ? "animate" : "css"](m, e.animate);
                    if (!0 === h.options.range)
                        if ("horizontal" ===
                            h.orientation) {
                            if (0 === b) h.range.stop(1, 1)[l ? "animate" : "css"]({
                                left: c + "%"
                            }, e.animate);
                            if (1 === b) h.range[l ? "animate" : "css"]({
                                width: c - f + "%"
                            }, {
                                queue: !1,
                                duration: e.animate
                            })
                        } else {
                            if (0 === b) h.range.stop(1, 1)[l ? "animate" : "css"]({
                                bottom: c + "%"
                            }, e.animate);
                            if (1 === b) h.range[l ? "animate" : "css"]({
                                height: c - f + "%"
                            }, {
                                queue: !1,
                                duration: e.animate
                            })
                        }
                    f = c
                });
                else {
                    b = this.value();
                    d = this._valueMin();
                    g = this._valueMax();
                    c = g !== d ? 100 * ((b - d) / (g - d)) : 0;
                    m["horizontal" === this.orientation ? "left" : "bottom"] = c + "%";
                    this.handle.stop(1, 1)[l ?
                        "animate" : "css"](m, e.animate);
                    if ("min" === k && "horizontal" === this.orientation) this.range.stop(1, 1)[l ? "animate" : "css"]({
                        width: c + "%"
                    }, e.animate);
                    if ("max" === k && "horizontal" === this.orientation) this.range[l ? "animate" : "css"]({
                        width: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: e.animate
                    });
                    if ("min" === k && "vertical" === this.orientation) this.range.stop(1, 1)[l ? "animate" : "css"]({
                        height: c + "%"
                    }, e.animate);
                    if ("max" === k && "vertical" === this.orientation) this.range[l ? "animate" : "css"]({
                        height: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: e.animate
                    })
                }
            },
            _handleEvents: {
                keydown: function(f) {
                    var c, b, d, g = a(f.target).data("ui-slider-handle-index");
                    switch (f.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (f.preventDefault(), !this._keySliding && (this._keySliding = !0, a(f.target).addClass("ui-state-active"), c = this._start(f, g), !1 === c)) return
                    }
                    d = this.options.step;
                    c = this.options.values && this.options.values.length ?
                        b = this.values(g) : b = this.value();
                    switch (f.keyCode) {
                        case a.ui.keyCode.HOME:
                            b = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            b = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            b = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            b = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (c === this._valueMax()) return;
                            b = this._trimAlignValue(c + d);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (c ===
                                this._valueMin()) return;
                            b = this._trimAlignValue(c - d)
                    }
                    this._slide(f, g, b)
                },
                click: function(a) {
                    a.preventDefault()
                },
                keyup: function(f) {
                    var c = a(f.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(f, c), this._change(f, c), a(f.target).removeClass("ui-state-active"))
                }
            }
        })
    })(jQuery);
    (function(a) {
        function f(a) {
            return function() {
                var b = this.element.val();
                a.apply(this, arguments);
                this._refresh();
                b !== this.element.val() && this._trigger("change")
            }
        }
        a.widget("ui.spinner", {
            version: "1.10.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max);
                this._setOption("min", this.options.min);
                this._setOption("step", this.options.step);
                this._value(this.element.val(), !0);
                this._draw();
                this._on(this._events);
                this._refresh();
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var c = {},
                    b = this.element;
                a.each(["min", "max", "step"], function(a, f) {
                    var k = b.attr(f);
                    void 0 !== k && k.length && (c[f] = k)
                });
                return c
            },
            _events: {
                keydown: function(a) {
                    this._start(a) && this._keydown(a) && a.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(a) {
                    this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a))
                },
                mousewheel: function(a, b) {
                    if (b) {
                        if (!this.spinning && !this._start(a)) return !1;
                        this._spin((0 < b ? 1 : -1) * this.options.step, a);
                        clearTimeout(this.mousewheelTimer);
                        this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(a)
                        }, 100);
                        a.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(c) {
                    function b() {
                        this.element[0] !==
                            this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                                this.previous = d
                            }))
                    }
                    var d;
                    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                    c.preventDefault();
                    b.call(this);
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur;
                        b.call(this)
                    });
                    !1 !== this._start(c) && this._repeat(null, a(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(c) {
                    if (a(c.currentTarget).hasClass("ui-state-active")) {
                        if (!1 ===
                            this._start(c)) return !1;
                        this._repeat(null, a(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
                    }
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton");
                this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
                this.buttons.height() > Math.ceil(0.5 * a.height()) && 0 < a.height() &&
                    a.height(a.height());
                this.options.disabled && this.disable()
            },
            _keydown: function(c) {
                var b = this.options,
                    d = a.ui.keyCode;
                switch (c.keyCode) {
                    case d.UP:
                        return this._repeat(null, 1, c), !0;
                    case d.DOWN:
                        return this._repeat(null, -1, c), !0;
                    case d.PAGE_UP:
                        return this._repeat(null, b.page, c), !0;
                    case d.PAGE_DOWN:
                        return this._repeat(null, -b.page, c), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
                    this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(a) {
                if (!this.spinning && !1 === this._trigger("start", a)) return !1;
                this.counter || (this.counter = 1);
                return this.spinning = !0
            },
            _repeat: function(a, b, d) {
                a = a || 500;
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    this._repeat(40, b, d)
                }, a);
                this._spin(b * this.options.step, d)
            },
            _spin: function(a, b) {
                var d = this.value() || 0;
                this.counter ||
                    (this.counter = 1);
                d = this._adjustValue(d + a * this._increment(this.counter));
                if (!this.spinning || !1 !== this._trigger("spin", b, {
                        value: d
                    })) this._value(d), this.counter++
            },
            _increment: function(c) {
                var b = this.options.incremental;
                return b ? a.isFunction(b) ? b(c) : Math.floor(c * c * c / 5E4 - c * c / 500 + 17 * c / 200 + 1) : 1
            },
            _precision: function() {
                var a = this._precisionOf(this.options.step);
                null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
                return a
            },
            _precisionOf: function(a) {
                var a = a.toString(),
                    b = a.indexOf(".");
                return -1 === b ? 0 : a.length - b - 1
            },
            _adjustValue: function(a) {
                var b, d = this.options;
                b = null !== d.min ? d.min : 0;
                a = Math.round((a - b) / d.step) * d.step;
                a = b + a;
                a = parseFloat(a.toFixed(this._precision()));
                return null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
            },
            _stop: function(a) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
            },
            _setOption: function(a, b) {
                if ("culture" === a || "numberFormat" === a) {
                    var d = this._parse(this.element.val());
                    this.options[a] =
                        b;
                    this.element.val(this._format(d))
                } else {
                    if ("max" === a || "min" === a || "step" === a) "string" === typeof b && (b = this._parse(b));
                    "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down));
                    this._super(a, b);
                    "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
                }
            },
            _setOptions: f(function(a) {
                this._super(a);
                this._value(this.element.val())
            }),
            _parse: function(a) {
                "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a);
                return "" === a || isNaN(a) ? null : a
            },
            _format: function(a) {
                return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(a, b) {
                var d;
                "" !== a && (d = this._parse(a), null !== d && (b || (d = this._adjustValue(d)), a = this._format(d)));
                this.element.val(a);
                this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.uiSpinner.replaceWith(this.element)
            },
            stepUp: f(function(a) {
                this._stepUp(a)
            }),
            _stepUp: function(a) {
                this._start() && (this._spin((a || 1) * this.options.step),
                    this._stop())
            },
            stepDown: f(function(a) {
                this._stepDown(a)
            }),
            _stepDown: function(a) {
                this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
            },
            pageUp: f(function(a) {
                this._stepUp((a || 1) * this.options.page)
            }),
            pageDown: f(function(a) {
                this._stepDown((a || 1) * this.options.page)
            }),
            value: function(a) {
                if (!arguments.length) return this._parse(this.element.val());
                f(this._value).call(this, a)
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    })(jQuery);
    (function(a, f) {
        function c(a) {
            return 1 < a.hash.length && decodeURIComponent(a.href.replace(d, "")) === decodeURIComponent(location.href.replace(d, ""))
        }
        var b = 0,
            d = /#.*$/;
        a.widget("ui.tabs", {
            version: "1.10.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                this.running = !1;
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",
                    c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                });
                this._processTabs();
                c.active = this._initialActive();
                a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }))).sort());
                this.active = !1 !== this.options.active &&
                    this.anchors.length ? this._findActive(c.active) : a();
                this._refresh();
                this.active.length && this.load(c.active)
            },
            _initialActive: function() {
                var b = this.options.active,
                    c = this.options.collapsible,
                    d = location.hash.substring(1);
                if (null === b && (d && this.tabs.each(function(c, f) {
                        if (a(f).attr("aria-controls") === d) return b = c, !1
                    }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null === b || -1 === b)) b = this.tabs.length ? 0 : !1;
                !1 !== b && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0));
                !c && (!1 === b && this.anchors.length) &&
                    (b = 0);
                return b
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: !this.active.length ? a() : this._getPanelForTab(this.active)
                }
            },
            _tabKeydown: function(b) {
                var c = a(this.document[0].activeElement).closest("li"),
                    d = this.tabs.index(c),
                    f = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            d++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            f = !1;
                            d--;
                            break;
                        case a.ui.keyCode.END:
                            d = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            d = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            b.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(d);
                            return;
                        case a.ui.keyCode.ENTER:
                            b.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(d === this.options.active ? !1 : d);
                            return;
                        default:
                            return
                    }
                    b.preventDefault();
                    clearTimeout(this.activating);
                    d = this._focusNextTab(d, f);
                    b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function(b) {
                !this._handlePageNav(b) && (b.ctrlKey &&
                    b.keyCode === a.ui.keyCode.UP) && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(b) {
                if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
                if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
            },
            _findNextTab: function(b, c) {
                function d() {
                    b > f && (b = 0);
                    0 > b && (b = f);
                    return b
                }
                for (var f = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                a = this._findNextTab(a, b);
                this.tabs.eq(a).focus();
                return a
            },
            _setOption: function(a, b) {
                "active" === a ? this._activate(b) : "disabled" === a ? this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), !b && !1 === this.options.active && this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b))
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + ++b
            },
            _sanitizeSelector: function(a) {
                return a ?
                    a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                    return c.index(a)
                });
                this._processTabs();
                !1 === b.active || !this.anchors.length ? (b.active = !1, this.active = a()) : this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active =
                    this.tabs.index(this.active);
                this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled);
                this._setupEvents(this.options.event);
                this._setupHeightStyle(this.options.heightStyle);
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                });
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                });
                this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                });
                this.panels =
                    a();
                this.anchors.each(function(d, e) {
                    var f, l, m, n = a(e).uniqueId().attr("id"),
                        p = a(e).closest("li"),
                        q = p.attr("aria-controls");
                    c(e) ? (f = e.hash, l = b.element.find(b._sanitizeSelector(f))) : (m = b._tabId(p), f = "#" + m, l = b.element.find(f), l.length || (l = b._createPanel(m), l.insertAfter(b.panels[d - 1] || b.tablist)), l.attr("aria-live", "polite"));
                    l.length && (b.panels = b.panels.add(l));
                    q && p.data("ui-tabs-aria-controls", q);
                    p.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": n
                    });
                    l.attr("aria-labelledby", n)
                });
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role",
                    "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c = 0, d; d = this.tabs[c]; c++) !0 === b || -1 !== a.inArray(c, b) ? a(d).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var c = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                });
                this._off(this.anchors.add(this.tabs).add(this.panels));
                this._on(this.anchors, c);
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                });
                this._on(this.panels, {
                    keydown: "_panelKeydown"
                });
                this._focusable(this.tabs);
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(),
                    this.element.siblings(":visible").each(function() {
                        var b = a(this),
                            d = b.css("position");
                        "absolute" === d || "fixed" === d || (c -= b.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        c -= a(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                    }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    f = a(b.currentTarget).closest("li"),
                    l = f[0] === d[0],
                    m = l && c.collapsible,
                    n = m ? a() : this._getPanelForTab(f),
                    p = !d.length ? a() : this._getPanelForTab(d),
                    d = {
                        oldTab: d,
                        oldPanel: p,
                        newTab: m ? a() : f,
                        newPanel: n
                    };
                b.preventDefault();
                if (!f.hasClass("ui-state-disabled") && !f.hasClass("ui-tabs-loading") && !this.running && !(l && !c.collapsible || !1 === this._trigger("beforeActivate", b, d))) c.active = m ? !1 : this.tabs.index(f), this.active = l ? a() : f, this.xhr && this.xhr.abort(), !p.length && !n.length && a.error("jQuery UI Tabs: Mismatching fragment identifier."),
                    n.length && this.load(this.tabs.index(f), b), this._toggle(b, d)
            },
            _toggle: function(b, c) {
                function d() {
                    l.running = !1;
                    l._trigger("activate", b, c)
                }

                function f() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    m.length && l.options.show ? l._show(m, l.options.show, d) : (m.show(), d())
                }
                var l = this,
                    m = c.newPanel,
                    n = c.oldPanel;
                this.running = !0;
                n.length && this.options.hide ? this._hide(n, this.options.hide, function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    f()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                    n.hide(), f());
                n.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                c.oldTab.attr("aria-selected", "false");
                m.length && n.length ? c.oldTab.attr("tabIndex", -1) : m.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1);
                m.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                });
                c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                b = this._findActive(b);
                b[0] !== this.active[0] && (b.length || (b = this.active), b = b.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: b,
                    currentTarget: b,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return !1 === b ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']")));
                return a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort();
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                });
                this.tabs.each(function() {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                });
                this.panels.show();
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(b) {
                var c = this.options.disabled;
                !1 !== c && (b === f ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                    return a !== b ? a : null
                }) : a.map(this.tabs, function(a, c) {
                    return c !== b ? c : null
                })), this._setupDisabled(c))
            },
            disable: function(b) {
                var c = this.options.disabled;
                if (!0 !== c) {
                    if (b === f) c = !0;
                    else {
                        b = this._getIndex(b);
                        if (-1 !== a.inArray(b, c)) return;
                        c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                    }
                    this._setupDisabled(c)
                }
            },
            load: function(b, d) {
                var b = this._getIndex(b),
                    e = this,
                    f = this.tabs.eq(b),
                    l = f.find(".ui-tabs-anchor"),
                    m = this._getPanelForTab(f),
                    n = {
                        tab: f,
                        panel: m
                    };
                if (!c(l[0]) && (this.xhr = a.ajax(this._ajaxSettings(l, d, n))) && "canceled" !== this.xhr.statusText) f.addClass("ui-tabs-loading"), m.attr("aria-busy", "true"), this.xhr.success(function(a) {
                    setTimeout(function() {
                        m.html(a);
                        e._trigger("load", d, n)
                    }, 1)
                }).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" ===
                        b && e.panels.stop(!1, !0);
                        f.removeClass("ui-tabs-loading");
                        m.removeAttr("aria-busy");
                        a === e.xhr && delete e.xhr
                    }, 1)
                })
            },
            _ajaxSettings: function(b, c, d) {
                var f = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, g) {
                        return f._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: g
                        }, d))
                    }
                }
            },
            _getPanelForTab: function(b) {
                b = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + b))
            }
        })
    })(jQuery);
    (function(a) {
        var f = 0;
        a.widget("ui.tooltip", {
            version: "1.10.2",
            options: {
                content: function() {
                    var c = a(this).attr("title") || "";
                    return a("<a>").text(c).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                });
                this.tooltips = {};
                this.parents = {};
                this.options.disabled && this._disable()
            },
            _setOption: function(c, b) {
                var d = this;
                "disabled" ===
                c ? (this[b ? "_disable" : "_enable"](), this.options[c] = b) : (this._super(c, b), "content" === c && a.each(this.tooltips, function(a, b) {
                    d._updateContent(b)
                }))
            },
            _disable: function() {
                var c = this;
                a.each(this.tooltips, function(b, d) {
                    var f = a.Event("blur");
                    f.target = f.currentTarget = d[0];
                    c.close(f, !0)
                });
                this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var c =
                        a(this);
                    c.data("ui-tooltip-title") && c.attr("title", c.data("ui-tooltip-title"))
                })
            },
            open: function(c) {
                var b = this,
                    d = a(c ? c.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), c && "mouseover" === c.type && d.parents().each(function() {
                    var c = a(this),
                        d;
                    c.data("ui-tooltip-open") && (d = a.Event("blur"), d.target = d.currentTarget = this, b.close(d, !0));
                    c.attr("title") && (c.uniqueId(), b.parents[this.id] = {
                        element: this,
                        title: c.attr("title")
                    }, c.attr("title", ""))
                }), this._updateContent(d, c))
            },
            _updateContent: function(a, b) {
                var d;
                d = this.options.content;
                var f = this,
                    k = b ? b.type : null;
                if ("string" === typeof d) return this._open(b, a, d);
                (d = d.call(a[0], function(d) {
                    a.data("ui-tooltip-open") && f._delay(function() {
                        b && (b.type = k);
                        this._open(b, a, d)
                    })
                })) && this._open(b, a, d)
            },
            _open: function(c, b, d) {
                function f(a) {
                    h.of = a;
                    k.is(":hidden") || k.position(h)
                }
                var k, e, h = a.extend({}, this.options.position);
                if (d)
                    if (k = this._find(b), k.length) k.find(".ui-tooltip-content").html(d);
                    else {
                        b.is("[title]") && (c && "mouseover" === c.type ? b.attr("title", "") : b.removeAttr("title"));
                        k = this._tooltip(b);
                        var l = k.attr("id"),
                            m = (b.attr("aria-describedby") || "").split(/\s+/);
                        m.push(l);
                        b.data("ui-tooltip-id", l).attr("aria-describedby", a.trim(m.join(" ")));
                        k.find(".ui-tooltip-content").html(d);
                        this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                            mousemove: f
                        }), f(c)) : k.position(a.extend({ of: b
                        }, this.options.position));
                        k.hide();
                        this._show(k, this.options.show);
                        this.options.show && this.options.show.delay &&
                            (e = this.delayedShow = setInterval(function() {
                                k.is(":visible") && (f(h.of), clearInterval(e))
                            }, a.fx.interval));
                        this._trigger("open", c, {
                            tooltip: k
                        });
                        d = {
                            keyup: function(c) {
                                c.keyCode === a.ui.keyCode.ESCAPE && (c = a.Event(c), c.currentTarget = b[0], this.close(c, !0))
                            },
                            remove: function() {
                                this._removeTooltip(k)
                            }
                        };
                        if (!c || "mouseover" === c.type) d.mouseleave = "close";
                        if (!c || "focusin" === c.type) d.focusout = "close";
                        this._on(!0, b, d)
                    }
            },
            close: function(c) {
                var b = this,
                    d = a(c ? c.currentTarget : this.element),
                    f = this._find(d);
                if (!this.closing) {
                    clearInterval(this.delayedShow);
                    d.data("ui-tooltip-title") && d.attr("title", d.data("ui-tooltip-title"));
                    var k = d.data("ui-tooltip-id"),
                        e = (d.attr("aria-describedby") || "").split(/\s+/),
                        k = a.inArray(k, e); - 1 !== k && e.splice(k, 1);
                    d.removeData("ui-tooltip-id");
                    (e = a.trim(e.join(" "))) ? d.attr("aria-describedby", e): d.removeAttr("aria-describedby");
                    f.stop(!0);
                    this._hide(f, this.options.hide, function() {
                        b._removeTooltip(a(this))
                    });
                    d.removeData("ui-tooltip-open");
                    this._off(d, "mouseleave focusout keyup");
                    d[0] !== this.element[0] && this._off(d, "remove");
                    this._off(this.document, "mousemove");
                    c && "mouseleave" === c.type && a.each(this.parents, function(c, d) {
                        a(d.element).attr("title", d.title);
                        delete b.parents[c]
                    });
                    this.closing = !0;
                    this._trigger("close", c, {
                        tooltip: f
                    });
                    this.closing = !1
                }
            },
            _tooltip: function(c) {
                var b = "ui-tooltip-" + f++,
                    d = a("<div>").attr({
                        id: b,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                a("<div>").addClass("ui-tooltip-content").appendTo(d);
                d.appendTo(this.document[0].body);
                this.tooltips[b] =
                    c;
                return d
            },
            _find: function(c) {
                return (c = c.data("ui-tooltip-id")) ? a("#" + c) : a()
            },
            _removeTooltip: function(a) {
                a.remove();
                delete this.tooltips[a.attr("id")]
            },
            _destroy: function() {
                var c = this;
                a.each(this.tooltips, function(b, d) {
                    var f = a.Event("blur");
                    f.target = f.currentTarget = d[0];
                    c.close(f, !0);
                    a("#" + b).remove();
                    d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    })(jQuery);
    (function(a, f) {
        a.effects = {
            effect: {}
        };
        var c = jQuery,
            b = function(a, b, c) {
                var d = m[b.type] || {};
                if (null == a) return c || !b.def ? null : b.def;
                a = d.floor ? ~~a : parseFloat(a);
                return isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a
            },
            d = function(a) {
                var b = h(),
                    d = b._rgba = [],
                    a = a.toLowerCase();
                r(e, function(c, e) {
                    var f, g = e.re.exec(a);
                    f = g && e.parse(g);
                    g = e.space || "rgba";
                    if (f) return f = b[g](f), b[l[g].cache] = f[l[g].cache], d = b._rgba = f._rgba, !1
                });
                return d.length ? ("0,0,0,0" === d.join() && c.extend(d, q.transparent), b) : q[a]
            },
            g = function(a,
                b, c) {
                c = (c + 1) % 1;
                return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
            },
            k = /^([\-+])=\s*(\d+\.?\d*)/,
            e = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(a) {
                    return [parseInt(a[1],
                        16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }],
            h = c.Color = function(a, b, d, e) {
                return new c.Color.fn.parse(a, b, d, e)
            },
            l = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            m = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            n = h.support = {},
            p = c("<p>")[0],
            q, r = c.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)";
        n.rgba = -1 < p.style.backgroundColor.indexOf("rgba");
        r(l, function(a, b) {
            b.cache = "_" + a;
            b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        h.fn = c.extend(h.prototype, {
            parse: function(a, e, f, g) {
                if (void 0 === a) return this._rgba = [null,
                    null, null, null
                ], this;
                if (a.jquery || a.nodeType) a = c(a).css(e), e = void 0;
                var k = this,
                    m = c.type(a),
                    n = this._rgba = [];
                void 0 !== e && (a = [a, e, f, g], m = "array");
                if ("string" === m) return this.parse(d(a) || q._default);
                if ("array" === m) return r(l.rgba.props, function(c, d) {
                    n[d.idx] = b(a[d.idx], d)
                }), this;
                if ("object" === m) return a instanceof h ? r(l, function(b, c) {
                    a[c.cache] && (k[c.cache] = a[c.cache].slice())
                }) : r(l, function(d, e) {
                    var f = e.cache;
                    r(e.props, function(c, d) {
                        if (!k[f] && e.to) {
                            if ("alpha" === c || null == a[c]) return;
                            k[f] = e.to(k._rgba)
                        }
                        k[f][d.idx] =
                            b(a[c], d, !0)
                    });
                    k[f] && 0 > c.inArray(null, k[f].slice(0, 3)) && (k[f][3] = 1, e.from && (k._rgba = e.from(k[f])))
                }), this
            },
            is: function(a) {
                var b = h(a),
                    c = !0,
                    d = this;
                r(l, function(a, e) {
                    var f, g = b[e.cache];
                    g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], r(e.props, function(a, b) {
                        if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
                    }));
                    return c
                });
                return c
            },
            _space: function() {
                var a = [],
                    b = this;
                r(l, function(c, d) {
                    b[d.cache] && a.push(c)
                });
                return a.pop()
            },
            transition: function(a, c) {
                var d = h(a),
                    e = d._space(),
                    f = l[e],
                    g = 0 === this.alpha() ? h("transparent") :
                    this,
                    k = g[f.cache] || f.to(g._rgba),
                    n = k.slice(),
                    d = d[f.cache];
                r(f.props, function(a, e) {
                    var f = e.idx,
                        g = k[f],
                        h = d[f],
                        l = m[e.type] || {};
                    null !== h && (null === g ? n[f] = h : (l.mod && (h - g > l.mod / 2 ? g += l.mod : g - h > l.mod / 2 && (g -= l.mod)), n[f] = b((h - g) * c + g, e)))
                });
                return this[e](n)
            },
            blend: function(a) {
                if (1 === this._rgba[3]) return this;
                var b = this._rgba.slice(),
                    d = b.pop(),
                    e = h(a)._rgba;
                return h(c.map(b, function(a, b) {
                    return (1 - d) * e[b] + d * a
                }))
            },
            toRgbaString: function() {
                var a = "rgba(",
                    b = c.map(this._rgba, function(a, b) {
                        return null == a ? 2 < b ? 1 : 0 : a
                    });
                1 === b[3] && (b.pop(), a = "rgb(");
                return a + b.join() + ")"
            },
            toHslaString: function() {
                var a = "hsla(",
                    b = c.map(this.hsla(), function(a, b) {
                        null == a && (a = 2 < b ? 1 : 0);
                        b && 3 > b && (a = Math.round(100 * a) + "%");
                        return a
                    });
                1 === b[3] && (b.pop(), a = "hsl(");
                return a + b.join() + ")"
            },
            toHexString: function(a) {
                var b = this._rgba.slice(),
                    d = b.pop();
                a && b.push(~~(255 * d));
                return "#" + c.map(b, function(a) {
                    a = (a || 0).toString(16);
                    return 1 === a.length ? "0" + a : a
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        h.fn.parse.prototype =
            h.fn;
        l.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 255,
                c = a[1] / 255,
                d = a[2] / 255,
                a = a[3],
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g = e - f,
                h = e + f,
                k = 0.5 * h;
            return [Math.round(f === e ? 0 : b === e ? 60 * (c - d) / g + 360 : c === e ? 60 * (d - b) / g + 120 : 60 * (b - c) / g + 240) % 360, 0 === g ? 0 : 0.5 >= k ? g / h : g / (2 - h), k, null == a ? 1 : a]
        };
        l.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360,
                c = a[1],
                d = a[2],
                a = a[3],
                c = 0.5 >= d ? d * (1 + c) : d + c - d * c,
                d = 2 * d - c;
            return [Math.round(255 *
                g(d, c, b + 1 / 3)), Math.round(255 * g(d, c, b)), Math.round(255 * g(d, c, b - 1 / 3)), a]
        };
        r(l, function(a, d) {
            var e = d.props,
                f = d.cache,
                g = d.to,
                l = d.from;
            h.fn[a] = function(a) {
                g && !this[f] && (this[f] = g(this._rgba));
                if (void 0 === a) return this[f].slice();
                var d, k = c.type(a),
                    m = "array" === k || "object" === k ? a : arguments,
                    n = this[f].slice();
                r(e, function(a, c) {
                    var d = m["object" === k ? a : c.idx];
                    null == d && (d = n[c.idx]);
                    n[c.idx] = b(d, c)
                });
                return l ? (d = h(l(n)), d[f] = n, d) : h(n)
            };
            r(e, function(b, d) {
                h.fn[b] || (h.fn[b] = function(e) {
                    var f = c.type(e),
                        g = "alpha" === b ?
                        this._hsla ? "hsla" : "rgba" : a,
                        h = this[g](),
                        l = h[d.idx];
                    if ("undefined" === f) return l;
                    "function" === f && (e = e.call(this, l), f = c.type(e));
                    if (null == e && d.empty) return this;
                    "string" === f && (f = k.exec(e)) && (e = l + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1));
                    h[d.idx] = e;
                    return this[g](h)
                })
            })
        });
        h.hook = function(a) {
            a = a.split(" ");
            r(a, function(a, b) {
                c.cssHooks[b] = {
                    set: function(a, e) {
                        var f, g = "";
                        if ("transparent" !== e && ("string" !== c.type(e) || (f = d(e)))) {
                            e = h(f || e);
                            if (!n.rgba && 1 !== e._rgba[3]) {
                                for (f = "backgroundColor" === b ? a.parentNode : a;
                                    ("" ===
                                        g || "transparent" === g) && f && f.style;) try {
                                    g = c.css(f, "backgroundColor"), f = f.parentNode
                                } catch (k) {}
                                e = e.blend(g && "transparent" !== g ? g : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            a.style[b] = e
                        } catch (l) {}
                    }
                };
                c.fx.step[b] = function(a) {
                    a.colorInit || (a.start = h(a.elem, b), a.end = h(a.end), a.colorInit = !0);
                    c.cssHooks[b].set(a.elem, a.start.transition(a.end, a.pos))
                }
            })
        };
        h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        c.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                r(["Top", "Right", "Bottom", "Left"], function(c, d) {
                    b["border" + d + "Color"] = a
                });
                return b
            }
        };
        q = c.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        };
        var v = function(b) {
                var c, d = b.ownerDocument.defaultView ?
                    b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                    e = {};
                if (d && d.length && d[0] && d[d[0]])
                    for (b = d.length; b--;) c = d[b], "string" === typeof d[c] && (e[a.camelCase(c)] = d[c]);
                else
                    for (c in d) "string" === typeof d[c] && (e[c] = d[c]);
                return e
            },
            t = ["add", "remove", "toggle"],
            w = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
            a.fx.step[c] = function(a) {
                if ("none" !==
                    a.end && !a.setAttr || 1 === a.pos && !a.setAttr) jQuery.style(a.elem, c, a.end), a.setAttr = !0
            }
        });
        a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        });
        a.effects.animateClass = function(b, c, d, e) {
            var f = a.speed(c, d, e);
            return this.queue(function() {
                var c = a(this),
                    d = c.attr("class") || "",
                    e, g = f.children ? c.find("*").addBack() : c,
                    g = g.map(function() {
                        return {
                            el: a(this),
                            start: v(this)
                        }
                    });
                e = function() {
                    a.each(t, function(a, d) {
                        if (b[d]) c[d + "Class"](b[d])
                    })
                };
                e();
                g = g.map(function() {
                    this.end =
                        v(this.el[0]);
                    var b = this.start,
                        c = this.end,
                        d = {},
                        e, f;
                    for (e in c)
                        if (f = c[e], b[e] !== f && !w[e] && (a.fx.step[e] || !isNaN(parseFloat(f)))) d[e] = f;
                    this.diff = d;
                    return this
                });
                c.attr("class", d);
                g = g.map(function() {
                    var b = this,
                        c = a.Deferred(),
                        d = a.extend({}, f, {
                            queue: !1,
                            complete: function() {
                                c.resolve(b)
                            }
                        });
                    this.el.animate(this.diff, d);
                    return c.promise()
                });
                a.when.apply(a, g.get()).done(function() {
                    e();
                    a.each(arguments, function() {
                        var b = this.el;
                        a.each(this.diff, function(a) {
                            b.css(a, "")
                        })
                    });
                    f.complete.call(c[0])
                })
            })
        };
        a.fn.extend({
            addClass: function(b) {
                return function(c,
                    d, e, f) {
                    return d ? a.effects.animateClass.call(this, {
                        add: c
                    }, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.addClass),
            removeClass: function(b) {
                return function(c, d, e, f) {
                    return 1 < arguments.length ? a.effects.animateClass.call(this, {
                        remove: c
                    }, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.removeClass),
            toggleClass: function(b) {
                return function(c, d, e, g, h) {
                    return "boolean" === typeof d || d === f ? e ? a.effects.animateClass.call(this, d ? {
                        add: c
                    } : {
                        remove: c
                    }, e, g, h) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                        toggle: c
                    }, d, e, g)
                }
            }(a.fn.toggleClass),
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f)
            }
        });
        var x = function(b, c, d, e) {
                a.isPlainObject(b) && (c = b, b = b.effect);
                b = {
                    effect: b
                };
                null == c && (c = {});
                a.isFunction(c) && (e = c, d = null, c = {});
                if ("number" === typeof c || a.fx.speeds[c]) e = d, d = c, c = {};
                a.isFunction(d) && (e = d, d = null);
                c && a.extend(b, c);
                d = d || c.duration;
                b.duration = a.fx.off ? 0 : "number" === typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default;
                b.complete = e || c.complete;
                return b
            },
            z = function(b) {
                return !b || ("number" ===
                    typeof b || a.fx.speeds[b]) || "string" === typeof b && !a.effects.effect[b] || a.isFunction(b) || "object" === typeof b && !b.effect ? !0 : !1
            };
        a.extend(a.effects, {
            version: "1.10.2",
            save: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                var c, d;
                for (d = 0; d < b.length; d++) null !== b[d] && (c = a.data("ui-effects-" + b[d]), c === f && (c = ""), a.css(b[d], c))
            },
            setMode: function(a, b) {
                "toggle" === b && (b = a.is(":hidden") ? "show" : "hide");
                return b
            },
            getBaseline: function(a, b) {
                var c,
                    d;
                switch (a[0]) {
                    case "top":
                        c = 0;
                        break;
                    case "middle":
                        c = 0.5;
                        break;
                    case "bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case "left":
                        d = 0;
                        break;
                    case "center":
                        d = 0.5;
                        break;
                    case "right":
                        d = 1;
                        break;
                    default:
                        d = a[1] / b.width
                }
                return {
                    x: d,
                    y: c
                }
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                        width: b.outerWidth(!0),
                        height: b.outerHeight(!0),
                        "float": b.css("float")
                    },
                    d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    e = {
                        width: b.width(),
                        height: b.height()
                    },
                    f = document.activeElement;
                try {
                    f.id
                } catch (g) {
                    f = document.body
                }
                b.wrap(d);
                (b[0] === f || a.contains(b[0], f)) && a(f).focus();
                d = b.parent();
                "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                    c[d] = b.css(d);
                    isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                }));
                b.css(e);
                return d.css(c).show()
            },
            removeWrapper: function(b) {
                var c = document.activeElement;
                b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus());
                return b
            },
            setTransition: function(b, c, d, e) {
                e = e || {};
                a.each(c, function(a, c) {
                    var f = b.cssUnit(c);
                    0 < f[0] && (e[c] = f[0] * d + f[1])
                });
                return e
            }
        });
        a.fn.extend({
            effect: function() {
                function b(d) {
                    function e() {
                        a.isFunction(h) && h.call(g[0]);
                        a.isFunction(d) && d()
                    }
                    var g = a(this),
                        h = c.complete,
                        k = c.mode;
                    (g.is(":hidden") ?
                        "hide" === k : "show" === k) ? (g[k](), e()) : f.call(g[0], c, e)
                }
                var c = x.apply(this, arguments),
                    d = c.mode,
                    e = c.queue,
                    f = a.effects.effect[c.effect];
                return a.fx.off || !f ? d ? this[d](c.duration, c.complete) : this.each(function() {
                    c.complete && c.complete.call(this)
                }) : !1 === e ? this.each(b) : this.queue(e || "fx", b)
            },
            show: function(a) {
                return function(b) {
                    if (z(b)) return a.apply(this, arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "show";
                    return this.effect.call(this, c)
                }
            }(a.fn.show),
            hide: function(a) {
                return function(b) {
                    if (z(b)) return a.apply(this,
                        arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "hide";
                    return this.effect.call(this, c)
                }
            }(a.fn.hide),
            toggle: function(a) {
                return function(b) {
                    if (z(b) || "boolean" === typeof b) return a.apply(this, arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "toggle";
                    return this.effect.call(this, c)
                }
            }(a.fn.toggle),
            cssUnit: function(b) {
                var c = this.css(b),
                    d = [];
                a.each(["em", "px", "%", "pt"], function(a, b) {
                    0 < c.indexOf(b) && (d = [parseFloat(c), b])
                });
                return d
            }
        });
        var D = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, b) {
            D[b] =
                function(b) {
                    return Math.pow(b, a + 2)
                }
        });
        a.extend(D, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(a) {
                return a * a * (3 * a - 2)
            },
            Bounce: function(a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        });
        a.each(D, function(b, c) {
            a.easing["easeIn" + b] = c;
            a.easing["easeOut" + b] = function(a) {
                return 1 - c(1 - a)
            };
            a.easing["easeInOut" + b] = function(a) {
                return 0.5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    })(jQuery);
    (function(a) {
        var f = /up|down|vertical/,
            c = /up|left|vertical|horizontal/;
        a.effects.effect.blind = function(b, d) {
            var g = a(this),
                k = "position top bottom left right height width".split(" "),
                e = a.effects.setMode(g, b.mode || "hide"),
                h = b.direction || "up",
                l = f.test(h),
                m = l ? "height" : "width",
                n = l ? "top" : "left",
                h = c.test(h),
                p = {},
                q = "show" === e,
                r, v, t;
            g.parent().is(".ui-effects-wrapper") ? a.effects.save(g.parent(), k) : a.effects.save(g, k);
            g.show();
            r = a.effects.createWrapper(g).css({
                overflow: "hidden"
            });
            v = r[m]();
            t = parseFloat(r.css(n)) ||
                0;
            p[m] = q ? v : 0;
            h || (g.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
                position: "absolute"
            }), p[n] = q ? t : v + t);
            q && (r.css(m, 0), h || r.css(n, t + v));
            r.animate(p, {
                duration: b.duration,
                easing: b.easing,
                queue: !1,
                complete: function() {
                    "hide" === e && g.hide();
                    a.effects.restore(g, k);
                    a.effects.removeWrapper(g);
                    d()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.bounce = function(f, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, f.mode || "effect"),
                k = "hide" === g,
                e = "show" === g,
                h = f.direction || "up",
                g = f.distance,
                l = f.times || 5,
                m = 2 * l + (e || k ? 1 : 0),
                n = f.duration / m,
                p = f.easing,
                q = "up" === h || "down" === h ? "top" : "left",
                h = "up" === h || "left" === h,
                r, v, t = b.queue(),
                w = t.length;
            (e || k) && d.push("opacity");
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            g || (g = b["top" === q ? "outerHeight" : "outerWidth"]() / 3);
            e &&
                (v = {
                    opacity: 1
                }, v[q] = 0, b.css("opacity", 0).css(q, h ? 2 * -g : 2 * g).animate(v, n, p));
            k && (g /= Math.pow(2, l - 1));
            v = {};
            for (e = v[q] = 0; e < l; e++) r = {}, r[q] = (h ? "-=" : "+=") + g, b.animate(r, n, p).animate(v, n, p), g = k ? 2 * g : g / 2;
            k && (r = {
                opacity: 0
            }, r[q] = (h ? "-=" : "+=") + g, b.animate(r, n, p));
            b.queue(function() {
                k && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            });
            1 < w && t.splice.apply(t, [1, 0].concat(t.splice(w, m + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.clip = function(f, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = "show" === a.effects.setMode(b, f.mode || "hide"),
                k = "vertical" === (f.direction || "vertical"),
                e = k ? "height" : "width",
                k = k ? "top" : "left",
                h = {},
                l, m;
            a.effects.save(b, d);
            b.show();
            l = a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            l = "IMG" === b[0].tagName ? l : b;
            m = l[e]();
            g && (l.css(e, 0), l.css(k, m / 2));
            h[e] = g ? m : 0;
            h[k] = g ? 0 : m / 2;
            l.animate(h, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: function() {
                    g ||
                        b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.drop = function(f, c) {
            var b = a(this),
                d = "position top bottom left right opacity height width".split(" "),
                g = a.effects.setMode(b, f.mode || "hide"),
                k = "show" === g,
                e = f.direction || "left",
                h = "up" === e || "down" === e ? "top" : "left",
                e = "up" === e || "left" === e ? "pos" : "neg",
                l = {
                    opacity: k ? 1 : 0
                },
                m;
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            m = f.distance || b["top" === h ? "outerHeight" : "outerWidth"](!0) / 2;
            k && b.css("opacity", 0).css(h, "pos" === e ? -m : m);
            l[h] = (k ? "pos" === e ? "+=" : "-=" : "pos" === e ? "-=" : "+=") +
                m;
            b.animate(l, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.explode = function(f, c) {
            function b() {
                n.push(this);
                n.length === d * g && (k.css({
                    visibility: "visible"
                }), a(n).remove(), e || k.hide(), c())
            }
            var d = f.pieces ? Math.round(Math.sqrt(f.pieces)) : 3,
                g = d,
                k = a(this),
                e = "show" === a.effects.setMode(k, f.mode || "hide"),
                h = k.show().css("visibility", "hidden").offset(),
                l = Math.ceil(k.outerWidth() / g),
                m = Math.ceil(k.outerHeight() / d),
                n = [],
                p, q, r, v, t, w;
            for (p = 0; p < d; p++) {
                v = h.top + p * m;
                w = p - (d - 1) / 2;
                for (q = 0; q < g; q++) r = h.left + q * l, t = q - (g - 1) / 2, k.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -q * l,
                    top: -p * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: l,
                    height: m,
                    left: r + (e ? t * l : 0),
                    top: v + (e ? w * m : 0),
                    opacity: e ? 0 : 1
                }).animate({
                    left: r + (e ? 0 : t * l),
                    top: v + (e ? 0 : w * m),
                    opacity: e ? 1 : 0
                }, f.duration || 500, f.easing, b)
            }
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.fade = function(f, c) {
            var b = a(this),
                d = a.effects.setMode(b, f.mode || "toggle");
            b.animate({
                opacity: d
            }, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: c
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.fold = function(f, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, f.mode || "hide"),
                k = "show" === g,
                e = "hide" === g,
                g = f.size || 15,
                h = /([0-9]+)%/.exec(g),
                l = !!f.horizFirst,
                m = k !== l,
                n = m ? ["width", "height"] : ["height", "width"],
                p = f.duration / 2,
                q, r = {},
                v = {};
            a.effects.save(b, d);
            b.show();
            q = a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            m = m ? [q.width(), q.height()] : [q.height(), q.width()];
            h && (g = parseInt(h[1], 10) / 100 * m[e ? 0 : 1]);
            k && q.css(l ? {
                height: 0,
                width: g
            } : {
                height: g,
                width: 0
            });
            r[n[0]] = k ? m[0] : g;
            v[n[1]] = k ? m[1] : 0;
            q.animate(r, p, f.easing).animate(v, p, f.easing, function() {
                e && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.highlight = function(f, c) {
            var b = a(this),
                d = ["backgroundImage", "backgroundColor", "opacity"],
                g = a.effects.setMode(b, f.mode || "show"),
                k = {
                    backgroundColor: b.css("backgroundColor")
                };
            "hide" === g && (k.opacity = 0);
            a.effects.save(b, d);
            b.show().css({
                backgroundImage: "none",
                backgroundColor: f.color || "#ffff99"
            }).animate(k, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.pulsate = function(f, c) {
            var b = a(this),
                d = a.effects.setMode(b, f.mode || "show"),
                g = "show" === d,
                k = "hide" === d,
                d = 2 * (f.times || 5) + (g || "hide" === d ? 1 : 0),
                e = f.duration / d,
                h = 0,
                l = b.queue(),
                m = l.length;
            if (g || !b.is(":visible")) b.css("opacity", 0).show(), h = 1;
            for (g = 1; g < d; g++) b.animate({
                opacity: h
            }, e, f.easing), h = 1 - h;
            b.animate({
                opacity: h
            }, e, f.easing);
            b.queue(function() {
                k && b.hide();
                c()
            });
            1 < m && l.splice.apply(l, [1, 0].concat(l.splice(m, d + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.puff = function(f, c) {
            var b = a(this),
                d = a.effects.setMode(b, f.mode || "hide"),
                g = "hide" === d,
                k = parseInt(f.percent, 10) || 150,
                e = k / 100,
                h = {
                    height: b.height(),
                    width: b.width(),
                    outerHeight: b.outerHeight(),
                    outerWidth: b.outerWidth()
                };
            a.extend(f, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: d,
                complete: c,
                percent: g ? k : 100,
                from: g ? h : {
                    height: h.height * e,
                    width: h.width * e,
                    outerHeight: h.outerHeight * e,
                    outerWidth: h.outerWidth * e
                }
            });
            b.effect(f)
        };
        a.effects.effect.scale = function(f, c) {
            var b = a(this),
                d = a.extend(!0, {}, f),
                g = a.effects.setMode(b, f.mode || "effect"),
                k = parseInt(f.percent, 10) || (0 === parseInt(f.percent, 10) ? 0 : "hide" === g ? 0 : 100),
                e = f.direction || "both",
                h = f.origin,
                l = {
                    height: b.height(),
                    width: b.width(),
                    outerHeight: b.outerHeight(),
                    outerWidth: b.outerWidth()
                },
                m = "horizontal" !== e ? k / 100 : 1,
                k = "vertical" !== e ? k / 100 : 1;
            d.effect = "size";
            d.queue = !1;
            d.complete = c;
            "effect" !== g && (d.origin = h || ["middle", "center"], d.restore = !0);
            d.from = f.from || ("show" === g ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : l);
            d.to = {
                height: l.height * m,
                width: l.width *
                    k,
                outerHeight: l.outerHeight * m,
                outerWidth: l.outerWidth * k
            };
            d.fade && ("show" === g && (d.from.opacity = 0, d.to.opacity = 1), "hide" === g && (d.from.opacity = 1, d.to.opacity = 0));
            b.effect(d)
        };
        a.effects.effect.size = function(f, c) {
            var b, d, g, k, e, h, l = a(this),
                m = "position top bottom left right width height overflow opacity".split(" ");
            e = "position top bottom left right overflow opacity".split(" ");
            var n = ["width", "height", "overflow"],
                p = ["fontSize"],
                q = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                r = ["borderLeftWidth",
                    "borderRightWidth", "paddingLeft", "paddingRight"
                ],
                v = a.effects.setMode(l, f.mode || "effect"),
                t = f.restore || "effect" !== v,
                w = f.scale || "both";
            h = f.origin || ["middle", "center"];
            var x = l.css("position"),
                z = t ? m : e,
                D = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === v && l.show();
            e = {
                height: l.height(),
                width: l.width(),
                outerHeight: l.outerHeight(),
                outerWidth: l.outerWidth()
            };
            "toggle" === f.mode && "show" === v ? (l.from = f.to || D, l.to = f.from || e) : (l.from = f.from || ("show" === v ? D : e), l.to = f.to || ("hide" === v ? D : e));
            g = l.from.height / e.height;
            k = l.from.width / e.width;
            b = l.to.height / e.height;
            d = l.to.width / e.width;
            if ("box" === w || "both" === w) g !== b && (z = z.concat(q), l.from = a.effects.setTransition(l, q, g, l.from), l.to = a.effects.setTransition(l, q, b, l.to)), k !== d && (z = z.concat(r), l.from = a.effects.setTransition(l, r, k, l.from), l.to = a.effects.setTransition(l, r, d, l.to));
            if (("content" === w || "both" === w) && g !== b) z = z.concat(p).concat(n), l.from = a.effects.setTransition(l, p, g, l.from), l.to = a.effects.setTransition(l, p, b, l.to);
            a.effects.save(l, z);
            l.show();
            a.effects.createWrapper(l);
            l.css("overflow", "hidden").css(l.from);
            h && (h = a.effects.getBaseline(h, e), l.from.top = (e.outerHeight - l.outerHeight()) * h.y, l.from.left = (e.outerWidth - l.outerWidth()) * h.x, l.to.top = (e.outerHeight - l.to.outerHeight) * h.y, l.to.left = (e.outerWidth - l.to.outerWidth) * h.x);
            l.css(l.from);
            if ("content" === w || "both" === w) q = q.concat(["marginTop", "marginBottom"]).concat(p), r = r.concat(["marginLeft", "marginRight"]), n = m.concat(q).concat(r), l.find("*[width]").each(function() {
                var c = a(this),
                    e = c.height(),
                    h = c.width(),
                    l = c.outerHeight(),
                    m = c.outerWidth();
                t && a.effects.save(c, n);
                c.from = {
                    height: e * g,
                    width: h * k,
                    outerHeight: l * g,
                    outerWidth: m * k
                };
                c.to = {
                    height: e * b,
                    width: h * d,
                    outerHeight: e * b,
                    outerWidth: h * d
                };
                g !== b && (c.from = a.effects.setTransition(c, q, g, c.from), c.to = a.effects.setTransition(c, q, b, c.to));
                k !== d && (c.from = a.effects.setTransition(c, r, k, c.from), c.to = a.effects.setTransition(c, r, d, c.to));
                c.css(c.from);
                c.animate(c.to, f.duration, f.easing, function() {
                    t && a.effects.restore(c, n)
                })
            });
            l.animate(l.to, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: function() {
                    0 === l.to.opacity && l.css("opacity", l.from.opacity);
                    "hide" === v && l.hide();
                    a.effects.restore(l, z);
                    t || ("static" === x ? l.css({
                        position: "relative",
                        top: l.to.top,
                        left: l.to.left
                    }) : a.each(["top", "left"], function(a, b) {
                        l.css(b, function(b, c) {
                            var d = parseInt(c, 10),
                                e = a ? l.to.left : l.to.top;
                            return "auto" === c ? e + "px" : d + e + "px"
                        })
                    }));
                    a.effects.removeWrapper(l);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.shake = function(f, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, f.mode || "effect"),
                k = f.direction || "left",
                e = f.distance || 20,
                h = f.times || 3,
                l = 2 * h + 1,
                m = Math.round(f.duration / l),
                n = "up" === k || "down" === k ? "top" : "left",
                p = "up" === k || "left" === k,
                k = {},
                q = {},
                r = {},
                v = b.queue(),
                t = v.length;
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            k[n] = (p ? "-=" : "+=") + e;
            q[n] = (p ? "+=" : "-=") + 2 * e;
            r[n] = (p ? "-=" : "+=") + 2 * e;
            b.animate(k, m, f.easing);
            for (e = 1; e <
                h; e++) b.animate(q, m, f.easing).animate(r, m, f.easing);
            b.animate(q, m, f.easing).animate(k, m / 2, f.easing).queue(function() {
                "hide" === g && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            });
            1 < t && v.splice.apply(v, [1, 0].concat(v.splice(t, l + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.slide = function(f, c) {
            var b = a(this),
                d = "position top bottom left right width height".split(" "),
                g = a.effects.setMode(b, f.mode || "show"),
                k = "show" === g,
                e = f.direction || "left",
                h = "up" === e || "down" === e ? "top" : "left",
                e = "up" === e || "left" === e,
                l, m = {};
            a.effects.save(b, d);
            b.show();
            l = f.distance || b["top" === h ? "outerHeight" : "outerWidth"](!0);
            a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            k && b.css(h, e ? isNaN(l) ? "-" + l : -l : l);
            m[h] = (k ? e ? "+=" : "-=" : e ? "-=" : "+=") + l;
            b.animate(m, {
                queue: !1,
                duration: f.duration,
                easing: f.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.transfer = function(f, c) {
            var b = a(this),
                d = a(f.to),
                g = "fixed" === d.css("position"),
                k = a("body"),
                e = g ? k.scrollTop() : 0,
                k = g ? k.scrollLeft() : 0,
                h = d.offset(),
                d = {
                    top: h.top - e,
                    left: h.left - k,
                    height: d.innerHeight(),
                    width: d.innerWidth()
                },
                h = b.offset(),
                l = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(f.className).css({
                    top: h.top - e,
                    left: h.left - k,
                    height: b.innerHeight(),
                    width: b.innerWidth(),
                    position: g ? "fixed" : "absolute"
                }).animate(d, f.duration, f.easing, function() {
                    l.remove();
                    c()
                })
        }
    })(jQuery);
    (function(a) {
        var f = navigator.userAgent || navigator.vendor || window.opera;
        a.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(f) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(f.substr(0,
            4));
        a.isIPhone = /iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera);
        a.fn.disableSelection = function() {
            return this.attr("unselectable", "on").css("user-select", "none").on("selectstart", !1)
        };
        a.fn.editable = function(b, c) {
            for (var b = b || 1, d = [], f = 0; f < b; ++f) d.push("\n");
            d = d.join("");
            if (c) {
                var g = a(this).addClass("yumprint-editor");
                a("#yumprint-dialog").bind("resize", function() {
                    p()
                })
            } else g = a(this).addClass("editor black-text"), a(window).bind("resize", function() {
                p()
            });
            var n = [];
            g.each(function() {
                for (var b =
                        this; null != b && !a(b).hasClass("yumprint-dialog-recipe") && !a(b).hasClass("yumprint-dialog-post-save") && b !== document.body;) b = b.parentNode;
                n.push({
                    parent: b,
                    element: this
                })
            });
            var p = function() {
                    for (var b = 0; b < n.length; ++b) {
                        var d = n[b];
                        if ("INPUT" !== d.element.nodeName) {
                            var f = a(d.parent).scrollTop();
                            d.element.style.height = "0px";
                            d.element.style.height = c ? d.element.scrollHeight + "px" : d.element.scrollHeight + 5 + "px";
                            a(d.parent).scrollTop(f)
                        }
                    }
                },
                q = function() {
                    for (var b = 0; b < n.length; ++b) {
                        var c = n[b];
                        if (a(c.element).val() &&
                            !c.element.scrollHeight) {
                            setTimeout(q, 10);
                            return
                        }
                    }
                    g.each(function() {
                        a(this).val(a(this).val().replace(/\r/g, "").replace(/\n+/g, d).trim())
                    });
                    p()
                };
            a(this).bind("input", function(b) {
                if (27 === b.which) return a(this).blur(), !1;
                p()
            }).bind("blur", function() {
                a(this).val(a(this).val().replace(/\r/g, "").replace(/\n+/g, d).trim());
                p()
            });
            document.documentMode && 9 >= document.documentMode ? a(this).bind("focus", function() {
                c ? a(this).addClass("yumprint-editor-focus") : a(this).addClass("editor-focus")
            }).bind("blur", function() {
                c ?
                    a(this).removeClass("yumprint-editor-focus") : a(this).removeClass("editor-focus")
            }) : q();
            return this
        };
        a.cookie = function(b, c, d) {
            if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(c)) || null === c || void 0 === c)) {
                d = a.extend({}, d);
                if (null === c || void 0 === c) d.expires = -1;
                if ("number" === typeof d.expires) {
                    var f = d.expires,
                        g = d.expires = new Date;
                    g.setDate(g.getDate() + f)
                }
                c = String(c);
                document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() :
                    "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""
                ].join("");
                return document.cookie
            }
            for (var d = c || {}, f = d.raw ? function(a) {
                    return a
                } : decodeURIComponent, g = document.cookie.split("; "), n = 0, p; p = g[n] && g[n].split("="); n++)
                if (f(p[0]) === b) return f(p[1] || "");
            return null
        };
        var c = function(a) {
            return (Math.cos(Math.PI * (1 + a)) + 1) / 2
        };
        a.scrollPosition = function() {
            var a = {
                top: 0,
                left: 0
            };
            if (window.pageXOffset || window.pageYOffset) a.top = window.pageYOffset, a.left = window.pageXOffset;
            else if (document.documentElement &&
                (document.documentElement.scrollTop || document.documentElement.scrollLeft)) a.top = document.documentElement.scrollTop, a.left = document.documentElement.scrollLeft;
            else if (!document.documentElement && document.body && (document.body.scrollTop || document.body.scrollLeft)) a.top = document.body.scrollTop, a.left = document.body.scrollLeft;
            return a
        };
        a.transition = function(a, b, d) {
            var f = new Date,
                g = function() {
                    var d = c(Math.min(1, (new Date - f) / a));
                    b(d);
                    return d
                };
            g();
            rectimer(20, function(a) {
                1 > g() ? a(20) : d && d()
            })
        };
        a.scrollTo =
            function(b, c, d, f) {
                var g = a.scrollPosition(),
                    n = c - g.left,
                    p = d - g.top;
                a.transition(b, function(a) {
                    window.scrollTo(g.left + n * a, g.top + p * a)
                }, f)
            };
        a.parseQueryString = function() {
            var a = window.location.search.substr(1).split("&");
            if ("" == a) return {};
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = a[c].split("=");
                2 == d.length && (b[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " ")))
            }
            return b
        };
        a.QueryString = a.parseQueryString();
        a.windowSize = function() {
            var a = window.innerWidth,
                b = window.innerHeight;
            a || (a = document.documentElement.clientWidth);
            b || (b = document.documentElement.clientHeight);
            return {
                width: a,
                height: b
            }
        };
        var b = function(a) {
                return ["rgba(", a.r, ",", a.g, ",", a.b, ",", a.a, ")"].join("")
            },
            d = function(a) {
                a = Math.floor(a).toString(16);
                return 2 > a.length ? "0" + a : a
            },
            g = function(a) {
                return ["#", d(255 * a.a), d(a.r), d(a.g), d(a.b)].join("").toUpperCase()
            };
        a.fn.highlight = function(d, e, f, l) {
            var m = a(this);
            m.css("background-color", b(e));
            var n = f.r - e.r,
                p = f.g - e.g,
                q = f.b - e.b,
                r = f.a - e.a,
                v = new Date;
            rectimer(20, function(a) {
                var f = c(Math.min(1, (new Date - v) / d)),
                    h = {
                        r: e.r +
                            n * f,
                        g: e.g + p * f,
                        b: e.b + q * f,
                        a: e.a + r * f
                    };
                if (!document.documentMode || 9 <= document.documentMode) m.css("background-color", b(h));
                else if (8 <= document.documentMode) {
                    var z = g(h);
                    m.each(function() {
                        var a = this.filters("DXImageTransform.Microsoft.gradient");
                        a.StartColorStr = z;
                        a.EndColorStr = z
                    })
                } else z = g(h), h = ["progid:DXImageTransform.Microsoft.gradient(startColorstr='", z, "',endColorstr='", z, "')"].join(""), m.css({
                    filter: h,
                    zoom: 1
                });
                1 > f ? a(20) : l && l()
            })
        };
        a.fn.bounds = function(b) {
            var c = {},
                d = a(this),
                f = 0,
                g = function() {
                    for (var a =
                            new Date;;) {
                        if (10 < new Date - a) {
                            setTimeout(g, 0);
                            break
                        }
                        if (f >= d.length) {
                            c.right && c.left && (c.width = c.right - c.left + 1);
                            c.top && c.bottom && (c.height = c.bottom - c.top + 1);
                            b(c);
                            break
                        }
                        var p = d.eq(f),
                            q = p.offset(),
                            r = p.width(),
                            v = p.height(),
                            p = c,
                            t = q.top,
                            w = q.left,
                            v = q.top + v,
                            q = q.left + r;
                        if (void 0 === p.top || t < p.top) p.top = t;
                        if (void 0 === p.left || w < p.left) p.left = w;
                        if (void 0 === p.right || q > p.right) p.right = q;
                        if (void 0 === p.bottom || v > p.bottom) p.bottom = v;
                        f++
                    }
                };
            g()
        }
    })(jQuery);
    (function() {
        function a(a, c, b, d) {
            if (a.addEventListener) return a.addEventListener(c, b, d), {
                destroy: function() {
                    a.removeEventListener(c, b, d)
                }
            };
            var g = function() {
                b.handleEvent(window.event, b)
            };
            a.attachEvent("on" + c, g);
            return {
                destroy: function() {
                    a.detachEvent("on" + c, g)
                }
            }
        }
        this.FastButton = function(f, c, b) {
            this.events = [];
            this.touchEvents = [];
            this.element = f;
            this.handler = c;
            this.useCapture = b;
            TOUCH && this.events.push(a(f, "touchstart", this, this.useCapture));
            this.events.push(a(f, "click", this, this.useCapture))
        };
        this.FastButton.prototype.destroy =
            function() {
                for (i = this.events.length - 1; 0 <= i; i -= 1) this.events[i].destroy();
                this.events = this.touchEvents = this.element = this.handler = this.fastButton = null
            };
        this.FastButton.prototype.handleEvent = function(a) {
            switch (a.type) {
                case "touchstart":
                    this.onTouchStart(a);
                    break;
                case "touchmove":
                    this.onTouchMove(a);
                    break;
                case "touchend":
                    this.onClick(a);
                    break;
                case "click":
                    this.onClick(a)
            }
        };
        this.FastButton.prototype.onTouchStart = function(f) {
            f.stopPropagation ? f.stopPropagation() : f.cancelBubble = !0;
            this.touchEvents.push(a(this.element,
                "touchend", this, this.useCapture));
            this.touchEvents.push(a(document.body, "touchmove", this, this.useCapture));
            this.startX = f.touches[0].clientX;
            this.startY = f.touches[0].clientY
        };
        this.FastButton.prototype.onTouchMove = function(a) {
            (10 < Math.abs(a.touches[0].clientX - this.startX) || 10 < Math.abs(a.touches[0].clientY - this.startY)) && this.reset()
        };
        this.FastButton.prototype.onClick = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            this.reset();
            var c = this.handler.call(this.element, a);
            "touchend" ==
            a.type && clickbuster.preventGhostClick(this.startX, this.startY);
            return c
        };
        this.FastButton.prototype.reset = function() {
            for (i = this.touchEvents.length - 1; 0 <= i; i -= 1) this.touchEvents[i].destroy();
            this.touchEvents = []
        };
        this.clickbuster = function() {};
        this.clickbuster.preventGhostClick = function(a, c) {
            clickbuster.coordinates.push(a, c);
            window.setTimeout(clickbuster.pop, 2500)
        };
        this.clickbuster.pop = function() {
            clickbuster.coordinates.splice(0, 2)
        };
        this.clickbuster.onClick = function(a) {
            for (var c = 0; c < clickbuster.coordinates.length; c +=
                2) {
                var b = clickbuster.coordinates[c + 1];
                25 > Math.abs(a.clientX - clickbuster.coordinates[c]) && 25 > Math.abs(a.clientY - b) && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            }
        };
        TOUCH && (document.addEventListener("click", clickbuster.onClick, !0), clickbuster.coordinates = [])
    })(this);
    (function(a) {
        a.event.special.fastClick = {
            setup: function() {
                a(this).data("fastClick", new FastButton(this, a.event.special.fastClick.handler))
            },
            teardown: function() {
                a(this).data("fastClick").destroy();
                a(this).removeData("fastClick")
            },
            handler: function(f) {
                f = a.event.fix(f);
                f.type = "fastClick";
                a.event.dispatch.apply(this, arguments)
            }
        };
        a.fn.fastClick = function(f) {
            return a(this).each(function() {
                return f ? a(this).bind("fastClick", f) : a(this).trigger("fastClick")
            })
        }
    })(jQuery);
    var JSON;
    JSON || (JSON = {});
    (function() {
        function a(a) {
            return 10 > a ? "0" + a : a
        }

        function f(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = e[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function c(a, b) {
            var d, e, q, r, v = g,
                t, w = b[a];
            w && ("object" === typeof w && "function" === typeof w.toJSON) && (w = w.toJSON(a));
            "function" === typeof h && (w = h.call(b, a, w));
            switch (typeof w) {
                case "string":
                    return f(w);
                case "number":
                    return isFinite(w) ? String(w) : "null";
                case "boolean":
                case "null":
                    return String(w);
                case "object":
                    if (!w) return "null";
                    g += k;
                    t = [];
                    if ("[object Array]" === Object.prototype.toString.apply(w)) {
                        r = w.length;
                        for (d = 0; d < r; d += 1) t[d] = c(d, w) || "null";
                        q = 0 === t.length ? "[]" : g ? "[\n" + g + t.join(",\n" + g) + "\n" + v + "]" : "[" + t.join(",") + "]";
                        g = v;
                        return q
                    }
                    if (h && "object" === typeof h) {
                        r = h.length;
                        for (d = 0; d < r; d += 1) "string" === typeof h[d] && (e = h[d], (q = c(e, w)) && t.push(f(e) + (g ? ": " : ":") + q))
                    } else
                        for (e in w) Object.prototype.hasOwnProperty.call(w, e) && (q = c(e, w)) && t.push(f(e) + (g ? ": " : ":") + q);
                    q = 0 === t.length ? "{}" : g ? "{\n" + g + t.join(",\n" + g) + "\n" + v + "}" : "{" + t.join(",") +
                        "}";
                    g = v;
                    return q
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            g, k, e = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            h;
        "function" !== typeof JSON.stringify && (JSON.stringify = function(a, b, d) {
            var e;
            k = g = "";
            if ("number" === typeof d)
                for (e = 0; e < d; e += 1) k += " ";
            else "string" === typeof d && (k = d);
            if ((h = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
            return c("", {
                "": a
            })
        });
        "function" !== typeof JSON.parse && (JSON.parse = function(a, c) {
            function d(a, b) {
                var e, f, g = a[b];
                if (g && "object" === typeof g)
                    for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), void 0 !== f ? g[e] = f : delete g[e]);
                return c.call(a, b, g)
            }
            var e, a = String(a);
            b.lastIndex = 0;
            b.test(a) && (a = a.replace(b, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse");
        })
    })();

    function rec(a) {
        var f;
        return f = function() {
            a(f)
        }
    }

    function timer(a, f) {
        var c = setTimeout(f, a);
        return function() {
            clearTimeout(c)
        }
    }

    function rectimer(a, f) {
        var c = [],
            b = function(a) {
                c.push(timer(a, function() {
                    f(b)
                }))
            };
        b(a);
        return function() {
            for (var a = 0; a < c.length; ++a) c[a]();
            c = []
        }
    }
    var async = function() {
        var a = {},
            f, c = [];
        a.await = function(a) {
            c ? c.push(a) : a(f)
        };
        a.set = function(a) {
            if (c) {
                f = a;
                for (a = 0; a < c.length; ++a) c[a](f);
                c = void 0
            }
        };
        return a
    };
    async.whenAny = function() {
        for (var a = async(), f = !1, c = 0; c < arguments.length; ++c)(function(b, c) {
            b.await(function(g) {
                f || (f = !0, a.set({
                    index: c,
                    async: b,
                    result: g
                }))
            })
        })(arguments[c], c);
        return a
    };
    async.whenAll = function() {
        for (var a = async(), f = Array(arguments.length), c = 0, b = 0; b < f.length; ++b)(function(b, g) {
            b.await(function(b) {
                c++;
                f[g] = b;
                c == f.length && a.set(f)
            })
        })(arguments[b], b);
        return a
    };
    var api = function() {
        var a = ("api.yumprint.com" === window.location.host || "testapi.yumprint.com" === window.location.host) && "/proxy" === window.location.pathname,
            f = function(a) {
                return function(b) {
                    return function() {
                        for (var c, d, e = b, f = 0; f < arguments.length; ++f) {
                            var h = typeof arguments[f];
                            if ("function" === h) {
                                d = arguments[f];
                                break
                            }
                            if (!c && "object" === h) c = arguments[f];
                            else if (c) break;
                            else e = e.replace(RegExp("\\$" + f, "g"), arguments[f])
                        }
                        c = c || {};
                        for (var j in c) c[j] = JSON.stringify(c[j]);
                        g ? g(e, a, c, function(a) {
                            d && d(a)
                        }) : $.ajax({
                            url: e,
                            type: a,
                            async: !0,
                            dataType: "json",
                            data: c,
                            success: function(a) {
                                d && d(a)
                            },
                            error: function() {
                                d && d(!1)
                            }
                        })
                    }
                }
            },
            c = f("POST"),
            b = f("GET"),
            d = {},
            g;
        if (!("withCredentials" in new XMLHttpRequest) && !a) {
            if (!window.addEventListener) return;
            var k;
            $(function() {
                k = $("<iframe class='hide-it'></iframe>").attr("src", SECURE_API_HOST + "/proxy").appendTo("body").get(0)
            });
            var e = 1,
                h = [],
                l = async();
            window.addEventListener("message", function(a) {
                if (a.origin === SECURE_API_HOST)
                    if ("yumprint-proxy-ready" === a.data) l.set();
                    else try {
                        var b = JSON.parse(a.data),
                            c = b.id;
                        if (c) {
                            var d = h[c];
                            delete h[c];
                            d && d(b.data)
                        }
                    } catch (e) {}
            });
            g = function(a, b, c, d) {
                l.await(function() {
                    var f = e++;
                    h[f] = d;
                    k.contentWindow.postMessage(JSON.stringify({
                        id: f,
                        url: a,
                        method: b,
                        data: c
                    }), SECURE_API_HOST)
                })
            }
        }
        var m = function(a) {
                return function(b) {
                    a && (b.success ? "result" in b ? a(b.result) : a(!0) : a(!1))
                }
            },
            n = function(a) {
                if ("object" === typeof a) {
                    if ("start" in a) {
                        var c = a.start,
                            d = b(c);
                        a.start = function(a) {
                            d(p(a))
                        };
                        a.startUrl = c
                    }
                    if ("next" in a) {
                        var c = a.next,
                            e = b(c);
                        a.next = function(a) {
                            var b;
                            b = m(function(b) {
                                n(b);
                                a && a(b)
                            });
                            e(b)
                        };
                        a.nextUrl = c
                    }
                }
            },
            p = function(a) {
                return m(function(b) {
                    if (b && b.feeds && b.feeds.length)
                        for (var c = 0; c < b.feeds.length; ++c) n(b.feeds[c]);
                    a && a(b)
                })
            },
            q = c(SECURE_API_HOST + "/user/$0/token/create/");
        d.createTemporaryToken = function(a, b) {
            q(a, {}, m(b))
        };
        var r = b(SECURE_API_HOST + "/user/$0/token/");
        d.getUserWithTemporaryToken = function(a, b) {
            r(a, {}, m(b))
        };
        var v = b(SECURE_API_HOST + "/feeds/$0/");
        d.feeds = function(a, b, c, d) {
            c = c || {};
            c.user_token = b || null;
            v(a, c, p(d))
        };
        var t = b(SECURE_API_HOST + "/ping/");
        d.ping = function(a) {
            t({},
                m(a))
        };
        var w = b(SECURE_API_HOST + "/user/$0/friends/facebook/");
        d.friendsFacebook = function(a, b, c, d) {
            w(a, {
                access_token: b,
                facebook_token: c
            }, m(d))
        };
        var x = b(SECURE_API_HOST + "/user/$0/friends/gmail/");
        d.friendsGmail = function(a, b, c) {
            x(a, {
                access_token: b
            }, m(c))
        };
        var z = c(SECURE_API_HOST + "/user/request/");
        d.request = function(a, b) {
            z({
                email: a
            }, m(b))
        };
        var D = c(SECURE_API_HOST + "/user/$0/object/$1/view/");
        d.viewObject = function(a, b, c) {
            D(a, b, m(c))
        };
        var s = c(SECURE_API_HOST + "/user/$0/object/$1/dmca/");
        d.markAsDmca = function(a,
            b, c) {
            s(a, b, m(c))
        };
        var y = c(SECURE_API_HOST + "/log/");
        d.log = function(a, b, c, d, e) {
            y({
                cookie: a,
                session: b,
                user_id: c,
                action: d
            }, m(e))
        };
        var M = c(SECURE_API_HOST + "/log-batch/");
        d.logBatch = function(a, b) {
            M({
                logs: a
            }, m(b))
        };
        var I = c(SECURE_API_HOST + "/user/$0/object/$1/link/");
        d.addObject = function(a, b, c, d) {
            I(a, b, {
                container_id: c
            }, m(d))
        };
        var U = c(SECURE_API_HOST + "/user/$0/object/$1/remove/");
        d.removeObject = function(a, b, c, d) {
            U(a, b, {
                container_id: c
            }, m(d))
        };
        var ea = c(SECURE_API_HOST + "/user/$0/object/$1/title/");
        d.changeObjectTitle =
            function(a, b, c, d) {
                ea(a, b, {
                    title: c
                }, m(d))
            };
        var J = c(SECURE_API_HOST + "/user/$0/object/$1/image/");
        d.changeObjectImageWithUrl = function(a, b, c, d) {
            J(a, b, {
                url: c
            }, m(d))
        };
        var L = c(SECURE_API_HOST + "/user/$0/object/$1/image/");
        d.changeObjectImageWithId = function(a, b, c, d) {
            L(a, b, {
                image_id: c
            }, m(d))
        };
        var F = b(SECURE_API_HOST + "/object/$0/images/");
        d.imagesInCookbook = function(a, b) {
            F(a, {}, m(b))
        };
        var Y = c(SECURE_API_HOST + "/user/$0/collection/add/");
        d.createCollection = function(a, b, c, d, e) {
            "function" == typeof c ? (e = c, d = c = null) :
                "function" == typeof d && (e = d, d = null);
            Y(a, {
                title: b,
                container_id: c,
                image_url: d
            }, m(e))
        };
        var ta = c(SECURE_API_HOST + "/recipe/info/");
        d.recipeInfo = function(a, b, c) {
            "function" == typeof b && (c = b, b = null);
            ta({
                recipe_data: a,
                location_ids: b
            }, m(c))
        };
        var na = c(SECURE_API_HOST + "/user/$0/recipe/add/");
        d.createRecipe = function(a, b, c, d) {
            "function" == typeof c && (d = c, c = null);
            na(a, {
                recipeData: b,
                container_id: c
            }, m(d))
        };
        var N = c(SECURE_API_HOST + "/widget/recipe/");
        d.createWidgetRecipe = function(a, b) {
            N({
                recipeData: a
            }, m(b))
        };
        var ka = b(SECURE_API_HOST +
            "/user/$0/object/$1/replace/");
        d.canReplace = function(a, b, c) {
            ka(a, b, {}, m(c))
        };
        var ha = b(SECURE_API_HOST + "/user/$0/");
        d.userInfo = function(a, b) {
            ha(a, {}, m(b))
        };
        var W = b(SECURE_API_HOST + "/user/login/facebook/");
        d.loginFacebook = function(a, b) {
            W({
                token: a
            }, m(b))
        };
        var Z = c(SECURE_API_HOST + "/user/login/yumprint/");
        d.loginYumprint = function(a, b, c) {
            Z({
                email: a,
                password: b
            }, m(c))
        };
        var C = c(SECURE_API_HOST + "/user/reset/yumprint/");
        d.resetYumprint = function(a, b) {
            C({
                email: a
            }, m(b))
        };
        var A = c(SECURE_API_HOST + "/user/$0/follow/$1/");
        d.follow = function(a, b, c) {
            A(a, b, {}, m(c))
        };
        var H = c(SECURE_API_HOST + "/user/$0/unfollow/$1/");
        d.unfollow = function(a, b, c) {
            H(a, b, {}, m(c))
        };
        var aa = c(SECURE_API_HOST + "/user/register/facebook/");
        d.registerFacebook = function(a, b, c) {
            "function" === typeof b && (c = b, b = null);
            b = b || {};
            aa({
                token: a,
                type: b.type || null,
                value: b.value || null
            }, m(c))
        };
        var la = c(SECURE_API_HOST + "/user/register/yumprint/");
        d.registerYumprint = function(a, b) {
            a.type = a.type || null;
            a.value = a.value || null;
            la({
                email_address: a.email,
                password: a.password,
                first_name: a.firstName,
                last_name: a.lastName,
                gender: a.gender,
                photo: a.photo,
                type: a.type,
                value: a.value
            }, m(b))
        };
        var P = b(SECURE_API_HOST + "/query/top/$0/");
        d.top = function(a, b, c) {
            "function" === typeof b && (c = b, b = null);
            P(a, {
                user_id: b || null
            }, m(c))
        };
        var wa = b(SECURE_API_HOST + "/user/$0/collection/list/");
        d.getCollections = function(a, b) {
            wa(a, m(b))
        };
        var lb = c(SECURE_API_HOST + "/user/$0/quest/");
        d.completeQuest = function(a, b, c) {
            lb(a, {
                quest_name: b
            }, m(c))
        };
        var Xa = b(SECURE_API_HOST + "/user/$0/quest/list/");
        d.quests = function(a, b) {
            Xa(a, {}, m(b))
        };
        var ua = b(SECURE_API_HOST + "/user/$0/collection/all/");
        d.getAll = function(a, b) {
            ua(a, m(b))
        };
        var mb = b(SECURE_API_HOST + "/recipe/$0/review/");
        d.getReview = function(a, b) {
            mb(a, {}, m(b))
        };
        var Jb = c(SECURE_API_HOST + "/user/$0/recipe/$1/cook/");
        d.cook = function(a, b, c, d, e, f, g) {
            "function" === typeof d ? (g = d, e = d = null) : "function" === typeof e ? (g = e, e = null) : "function" === typeof f && (g = f, f = null);
            Jb(a, b, {
                date: c,
                rating: d,
                review_text: e,
                share: f
            }, m(g))
        };
        var Fa = b(SECURE_API_HOST + "/user/$0/recipe/$1/review/");
        d.getCook = function(a, b, c) {
            Fa(a,
                b, {}, m(c))
        };
        var Ya = c(SECURE_API_HOST + "/admin/$0/email/");
        d.sendEmail = function(a, b, c) {
            Ya(a, b, m(c))
        };
        var j = c(SECURE_API_HOST + "/user/$0/invite/");
        d.sendInvite = function(a, b, c, d) {
            j(a, {
                emails: b,
                message: c
            }, m(d))
        };
        var Ja = b(SECURE_API_HOST + "/query/stats/");
        d.stats = function(a) {
            Ja({}, m(a))
        };
        var ja = b(SECURE_API_HOST + "/person/$0/following/");
        d.getFollowing = function(a, b, c) {
            ja(a, {
                user_token: b || null
            }, p(c))
        };
        var Kb = b(SECURE_API_HOST + "/person/$0/");
        d.person = function(a, b) {
            Kb(a, {}, m(b))
        };
        var Lb = b(SECURE_API_HOST + "/person/$0/followers/");
        d.getFollowers = function(a, b, c) {
            Lb(a, {
                user_token: b || null
            }, p(c))
        };
        var nb = b(SECURE_API_HOST + "/person/$0/schedule/");
        d.getSchedule = function(a, b, c) {
            nb(a, {
                days: b
            }, m(c))
        };
        var Mb = b(SECURE_API_HOST + "/person/$0/day/");
        d.getDay = function(a, b, c, d) {
            Mb(a, {
                day: b,
                user_token: c || null
            }, m(d))
        };
        var Nb = c(SECURE_API_HOST + "/user/$0/schedule/$1/");
        d.schedule = function(a, b, c, d, e) {
            Nb(a, b, {
                day: c,
                try_soon_id: d
            }, m(e))
        };
        var Ob = c(SECURE_API_HOST + "/user/$0/schedule/$1/position/");
        d.positionSchedule = function(a, b, c, d) {
            Ob(a, b, {
                    position: c
                },
                m(d))
        };
        var Pb = c(SECURE_API_HOST + "/user/$0/schedule/$1/remove/");
        d.removeSchedule = function(a, b, c) {
            Pb(a, b, m(c))
        };
        var Qb = c(SECURE_API_HOST + "/user/$0/schedule/$1/move/");
        d.moveSchedule = function(a, b, c, d) {
            Qb(a, b, {
                day: c
            }, m(d))
        };
        var Rb = c(SECURE_API_HOST + "/user/$0/try-soon/$1/add/");
        d.trySoon = function(a, b, c) {
            Rb(a, b, {}, m(c))
        };
        var Sb = c(SECURE_API_HOST + "/user/$0/try-soon/$1/remove/");
        d.removeTrySoon = function(a, b, c) {
            Sb(a, b, {}, m(c))
        };
        var oa = b(SECURE_API_HOST + "/user/$0/try-soon/summary/");
        d.trySoonSummary = function(a,
            b) {
            oa(a, {}, m(b))
        };
        var ob = b(SECURE_API_HOST + "/user/$0/person/$1/info/");
        d.personInfo = function(a, b, c) {
            ob(a, b, {}, m(c))
        };
        var pb = c(SECURE_API_HOST + "/user/$0/try-soon/schedule/$1/");
        d.trySoonFromSchedule = function(a, b, c) {
            pb(a, b, m(c))
        };
        var Tb = b(SECURE_API_HOST + "/user/$0/nutrition/");
        d.nutrition = function(a, b) {
            Tb(a, {}, m(b))
        };
        var Za = c(SECURE_API_HOST + "/user/$0/nutrition/recipes/");
        d.recipesNutrition = function(a, b, c) {
            Za(a, {
                ids: b
            }, m(c))
        };
        var O = b(SECURE_API_HOST + "/nutrition/recipe/$0/");
        d.recipeNutrition = function(a,
            b, c) {
            O(b, {
                user_token: a || null
            }, m(c))
        };
        var Ka = b(SECURE_API_HOST + "/user/available/");
        d.emailAvailable = function(a, b) {
            Ka({
                email: a
            }, m(b))
        };
        var pa = c(SECURE_API_HOST + "/user/password/reset/");
        d.resetPassword = function(a, b, c) {
            pa({
                token: a,
                password: b
            }, m(c))
        };
        var X = b(SECURE_API_HOST + "/user/$0/settings/");
        d.getSettings = function(a, b) {
            X(a, {}, m(b))
        };
        var La = c(SECURE_API_HOST + "/user/$0/settings/change/");
        d.setSettings = function(a, b, c) {
            La(a, {
                settings: b
            }, m(c))
        };
        var Ma = c(SECURE_API_HOST + "/user/$0/password/change/");
        d.changePassword =
            function(a, b, c, d) {
                Ma(a, {
                    old: b,
                    password: c
                }, m(d))
            };
        var Na = c(SECURE_API_HOST + "/user/$0/password/set/");
        d.setPassword = function(a, b, c) {
            Na(a, {
                password: b
            }, m(c))
        };
        var $a = b(SECURE_API_HOST + "/search/");
        d.search = function(a, b, c) {
            $a({
                user_token: a || null,
                text: b
            }, m(c))
        };
        var qb = b(SECURE_API_HOST + "/search/summary/");
        d.searchSummary = function(a, b, c) {
            qb({
                user_token: a || null,
                text: b
            }, p(c))
        };
        d.searchRecipes = function(a, b, c) {
            d.feeds("search-recipes", a, {
                text: b
            }, c)
        };
        d.searchMyRecipes = function(a, b, c) {
            d.feeds("search-cookbook",
                a, {
                    text: b
                }, c)
        };
        d.searchFriendsRecipes = function(a, b, c) {
            d.feeds("search-friends", a, {
                text: b
            }, c)
        };
        d.searchPeople = function(a, b, c) {
            d.feeds("search-people", a, {
                text: b
            }, c)
        };
        var ab = b(SECURE_API_HOST + "/user/$0/shopping/");
        d.getShoppingList = function(a, b) {
            ab(a || null, {}, m(b))
        };
        var B = c(SECURE_API_HOST + "/user/$0/shopping/add/recipe/");
        d.addRecipeToShoppingList = function(a, b, c) {
            B(a || null, {
                object_id: b
            }, m(c))
        };
        var uc = c(SECURE_API_HOST + "/user/$0/shopping/clear/");
        d.clearShoppingList = function(a, b) {
            uc(a || null, {}, m(b))
        };
        var Gb = c(SECURE_API_HOST + "/user/$0/shopping/check/");
        d.checkAllShoppingList = function(a, b) {
            Gb(a || null, {}, m(b))
        };
        var Fb = c(SECURE_API_HOST + "/user/$0/shopping/item/check/");
        d.checkShoppingListItem = function(a, b, c) {
            Fb(a || null, {
                item_id: b
            }, m(c))
        };
        var xa = c(SECURE_API_HOST + "/user/$0/shopping/item/undo/");
        d.undoShoppingListItem = function(a, b, c) {
            xa(a || null, {
                item_id: b
            }, m(c))
        };
        var rb = c(SECURE_API_HOST + "/user/$0/shopping/clear/remove/");
        d.clearRemoveShoppingList = function(a, b) {
            rb(a || null, {}, m(b))
        };
        var bb = c(SECURE_API_HOST +
            "/user/$0/shopping/item/remove/");
        d.removeShoppingListItem = function(a, b, c) {
            bb(a || null, {
                item_id: b
            }, m(c))
        };
        var Ub = c(SECURE_API_HOST + "/user/$0/shopping/item/undo/remove/");
        d.undoRemoveShoppingListItem = function(a, b, c) {
            Ub(a || null, {
                item_id: b
            }, m(c))
        };
        var Vb = b(SECURE_API_HOST + "/shopping/category/");
        d.getShoppingListCategories = function(a) {
            Vb({}, m(a))
        };
        var Wb = c(SECURE_API_HOST + "/user/$0/shopping/subitem/category/");
        d.setShoppingListSubItemCategory = function(a, b, c, d) {
            Wb(a || null, {
                sub_item_id: b,
                category: c
            }, m(d))
        };
        var sb = c(SECURE_API_HOST + "/user/$0/shopping/item/name/");
        d.setShoppingListItemName = function(a, b, c, d) {
            sb(a || null, {
                item_id: b,
                name: c
            }, m(d))
        };
        var cb = c(SECURE_API_HOST + "/user/$0/shopping/item/amount/");
        d.setShoppingListItemAmount = function(a, b, c, d) {
            cb(a || null, {
                item_id: b,
                amount: c
            }, m(d))
        };
        var va = c(SECURE_API_HOST + "/user/$0/shopping/group/remove/");
        d.removeShoppingListGroup = function(a, b, c) {
            va(a || null, {
                group_id: b
            }, m(c))
        };
        var db = c(SECURE_API_HOST + "/user/$0/shopping/add/ingredient/");
        d.addIngredientToShoppingList =
            function(a, b, c) {
                db(a || null, {
                    text: b
                }, m(c))
            };
        var eb = c(SECURE_API_HOST + "/user/$0/shopping/add/sale/");
        d.addSaleToShoppingList = function(a, b, c) {
            eb(a || null, {
                sale_id: b
            }, m(c))
        };
        var Xb = c(SECURE_API_HOST + "/user/$0/shopping/add/menu/");
        d.addMenuToShoppingList = function(a, b) {
            Xb(a || null, {}, m(b))
        };
        var Yb = c(SECURE_API_HOST + "/user/$0/shopping/add/menu-item/");
        d.addScheduleToShoppingList = function(a, b, c) {
            Yb(a || null, {
                schedule_id: b
            }, m(c))
        };
        var tb = c(SECURE_API_HOST + "/user/$0/shopping/share/email/");
        d.emailShoppingList =
            function(a, b, c, d) {
                "function" === typeof b ? (d = b, c = b = null) : "function" === typeof c && (d = c, c = null);
                tb(a || null, {
                    email: b || null,
                    text: c || null
                }, m(d))
            };
        var ub = c(SECURE_API_HOST + "/user/$0/pin/mark/");
        d.markPins = function(a, b, c) {
            ub(a, {
                pins: b
            }, m(c))
        };
        var fb = c(SECURE_API_HOST + "/user/$0/pin/marked/");
        d.markedPins = function(a, b) {
            fb(a, m(b))
        };
        var gb = b(SECURE_API_HOST + "/user/$0/pin/proxy/");
        d.proxy = function(a, b, c, d) {
            gb(a, {
                url: b,
                timeout: c
            }, m(d))
        };
        var fa = b(SECURE_API_HOST + "/webrequest/");
        d.webRequest = function(a, b, c) {
            fa({
                url: a,
                timeout: b
            }, m(c))
        };
        var qa = b(SECURE_API_HOST + "/webrequests/");
        d.webRequests = function(a, b, c) {
            qa({
                urls: a,
                timeout: b
            }, m(c))
        };
        var G = b(SECURE_API_HOST + "/feed/home/"),
            xb = b(SECURE_API_HOST + "/user/$0/feed/home/");
        d.home = function(a, b) {
            a ? "function" === typeof a ? G(p(a)) : xb(a, p(b)) : G(p(b))
        };
        var ac = b(SECURE_API_HOST + "/feed/object/$0/");
        d.getObject = function(a, b, c) {
            ac(b, {
                user_token: a || null
            }, p(c))
        };
        var bc = b(SECURE_API_HOST + "/feed/person/$0/try-soon/");
        d.getTrySoon = function(a, b, c) {
            bc(a, {
                user_token: b || null
            }, p(c))
        };
        DEBUG &&
            (window.yumprintApi = d);
        return d
    }();
    var user, log = function() {
        var a;
        a = function() {
            for (var a = [], b = 0; 64 > b; ++b) a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-" [Math.floor(64 * Math.random())]);
            return a.join("")
        };
        var f;
        try {
            window.localStorage ? (f = window.localStorage.yumprintUniqueId, f || (f = a(), window.localStorage.yumprintUniqueId = f)) : (f = $.cookie("yumprintUniqueId"), f || (f = a(), $.cookie("yumprintUniqueId", f, {
                expires: 365,
                path: "/"
            })))
        } catch (c) {
            f = a()
        }
        var b = a(),
            d = null,
            g = [];
        $(window).unload(function() {
            if (d) {
                clearTimeout(d);
                var a =
                    g;
                g = [];
                api.logBatch(a)
            }
        });
        return function(a, c) {
            if (c) {
                d && (clearTimeout(d), d = null);
                g.push({
                    cookie: f,
                    session: b,
                    user: user && user.id || localStorage.id || null,
                    action: a
                });
                var h = g;
                g = [];
                api.logBatch(h, c)
            } else d || (d = setTimeout(function() {
                d = null;
                var a = g;
                g = [];
                api.logBatch(a)
            }, 5E3)), g.push({
                cookie: f,
                session: b,
                user: user && user.id || localStorage.id || null,
                action: a
            })
        }
    }();
    (function(a) {
        function f(b) {
            this.input = b;
            "password" == b.attr("type") && this.handlePassword();
            a(b[0].form).submit(function() {
                b.hasClass("placeholder") && b[0].value == b.attr("placeholder") && (b[0].value = "")
            })
        }
        f.prototype = {
            show: function(a) {
                if ("" === this.input[0].value || a && this.valueIsPlaceholder()) {
                    if (this.isPassword) try {
                        this.input[0].setAttribute("type", "text")
                    } catch (b) {
                        this.input.before(this.fakePassword.show()).hide()
                    }
                    this.input.addClass("placeholder");
                    this.input[0].value = this.input.attr("placeholder")
                }
            },
            hide: function() {
                if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                    try {
                        this.input[0].setAttribute("type", "password")
                    } catch (a) {}
                    this.input.show();
                    this.input[0].focus()
                }
            },
            valueIsPlaceholder: function() {
                return this.input[0].value == this.input.attr("placeholder")
            },
            handlePassword: function() {
                this.input.attr("realType", "password");
                this.isPassword = !0
            }
        };
        var c = !!("placeholder" in document.createElement("input"));
        if (!c) {
            var b =
                a.fn.val;
            a.fn.val = function() {
                for (var c = [], f = 0; f < arguments.length; ++f) c.push(arguments[f]);
                return a(this).hasClass("placeholder") && !c.length ? (c = b.apply(this, c), c === a(this).attr("placeholder") ? "" : c) : b.apply(this, c)
            }
        }
        a.fn.placeholder = function() {
            return c ? this : this.each(function() {
                var b = a(this),
                    c = new f(b);
                c.show(!0);
                b.focus(function() {
                    c.hide()
                });
                b.blur(function() {
                    c.show(!1)
                });
                document.documentMode && 9 >= document.documentMode && (a(window).load(function() {
                        b.val() && b.removeClass("placeholder");
                        c.show(!0)
                    }),
                    b.focus(function() {
                        if ("" == this.value) {
                            var a = this.createTextRange();
                            a.collapse(!0);
                            a.moveStart("character", 0);
                            a.select()
                        }
                    }))
            })
        }
    })(jQuery);
    String.prototype.overflow = function(a) {
        if (this.length <= a) return this;
        for (var f = a; 0 < f; --f)
            if (/\s/.test(this.charAt(f))) return this.substring(0, f) + "...";
        return this.substring(0, a) + "..."
    };
    String.prototype.lineSplit = function() {
        return this.replace(/\r/g, "").split("\n")
    };
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    };
    String.prototype.hash = function() {
        for (var a = 7643, f = 0; f < this.length; ++f) a = 5689 * a + this.charCodeAt(f), a &= 4294967295;
        return a
    };
    String.prototype.plural = function(a) {
        return 1 == a ? this : this + "s"
    };
    var messenger = function(a) {
        a = a || {};
        a.isWebWorker = a.isWebWorker || !1;
        a.origin = a.origin || "*";
        a.target = a.target || (a.isWebWorker ? self : window.parent);
        var f = [],
            c = Math.round(1E9 * Math.random()) % 1E9,
            b = function(b) {
                if (a.isWebWorker || !("*" !== a.origin && a.origin !== b.origin)) try {
                    var c = JSON.parse(b.data),
                        g = c.type,
                        l = c.data,
                        m = c.id;
                    if ("yumprint messenger" === c.protocol) {
                        var n = f[g];
                        if (n) {
                            var p = a.isWebWorker ? a.target : b.source;
                            n(l, function(a, b) {
                                d(p, "callback", {
                                    id: m,
                                    data: a
                                }, b)
                            })
                        }
                    }
                } catch (q) {}
            };
        a.isWebWorker ? a.target.addEventListener("message",
            b, !1) : window.addEventListener("message", b);
        var d = function(b, d, f, l) {
                var m = c;
                c = (c + 1) % 1E9;
                "function" === typeof f && (l = f, f = null);
                void 0 === f && (f = null);
                d = {
                    id: m,
                    type: d,
                    data: f,
                    protocol: "yumprint messenger",
                    version: 1
                };
                l && (g[m] = l);
                a.isWebWorker ? b.postMessage(JSON.stringify(d)) : b.postMessage(JSON.stringify(d), a.origin)
            },
            g = {};
        f.callback = function(a, b) {
            var c = g[a.id];
            c && (delete g[a.id], c(a.data, b))
        };
        return {
            postMessage: function(b, c, f) {
                d(a.target, b, c, f)
            },
            addHandler: function(a, b) {
                "callback" !== a && ("string" === typeof a &&
                    "function" === typeof b) && (f[a] = b)
            },
            close: function() {
                a.isWebWorker ? (a.target.removeEventListener("message", b), a.target.terminate()) : window.removeEventListener("message", b);
                f = []
            }
        }
    };
    var recipeInfo = null,
        messages = messenger(),
        theImage = null;

    function getSections(a) {
        for (var f = [], c, a = a.lineSplit(), b = 0; b < a.length; ++b) {
            var d = a[b].trim();
            if (d) {
                var g = /^(.*):$/.exec(d);
                g ? (c = {
                    title: g[1],
                    lines: []
                }, f.push(c)) : (c || (c = {
                    title: null,
                    lines: []
                }, f.push(c)), c.lines.push(d))
            }
        }
        return f
    }

    function nullIfEmpty(a) {
        return a ? a : null
    }

    function parseTime(a) {
        if (!a) return null;
        var f = /^(\d*):(\d+)$/.exec(a);
        return f ? 60 * nullIfEmpty(parseInt(f[1]) || 0) + parseInt(f[2]) : (f = /^\d+$/.exec(a)) ? nullIfEmpty(parseInt(a)) : (f = /^(\d*)\s+(\d+)$/.exec(a)) ? 60 * nullIfEmpty(parseInt(f[1]) || 0) + parseInt(f[2]) : (f = /^((\d+)\s*(h\.?|hours?|hrs?\.?))\s*((\d+)\s*(m\.?|mins?\.?|minutes?))$/i.exec(a)) ? 60 * nullIfEmpty(parseInt(f[2]) || 0) + parseInt(f[5]) : (f = /^((\d+)\s*(m\.?|mins?\.?|minutes?))\s+((\d+)\s*(h\.?|hours?))$/i.exec(a)) ? nullIfEmpty(parseInt(f[2]) || 0) + 60 * parseInt(f[5]) :
            (f = /^((\d+)\s*(m\.?|mins?\.?|minutes?))$/i.exec(a)) ? nullIfEmpty(parseInt(f[2])) : (f = /^((\d+)\s*(h\.?|hours?|hrs?\.?))$/i.exec(a)) ? nullIfEmpty(60 * parseInt(f[2])) : null
    }

    function parseAmount(a) {
        a = a.trim();
        if (!a) return null;
        try {
            return nullIfEmpty(parseInt(a))
        } catch (f) {
            return null
        }
    }

    function save() {
        var a = nullIfEmpty($("#title").val()),
            f = nullIfEmpty($("#author").val()),
            c = nullIfEmpty($("#adapted").val()),
            b = nullIfEmpty($("#adapted-link").val()),
            d = nullIfEmpty($("#summary").val()),
            g = parseTime($("#prep-time").val()),
            k = parseTime($("#cook-time").val()),
            e = parseTime($("#total-time").val()),
            h = parseAmount($("#servings").val()),
            l = parseAmount($("#yields").val()),
            m = getSections($("#ingredients").val()),
            n = getSections($("#directions").val()),
            p = getSections($("#notes").val());
        $(".error-ul").find("li").hide();
        $(".error").removeClass("error");
        a || ($("#title").addClass("error"), $(".error-title").show());
        m.length || ($("#ingredients").addClass("error"), $(".error-ingredients").show());
        void 0 === g && ($("#prep-time").addClass("error"), $(".error-prep-time").show());
        void 0 === k && ($("#cook-time").addClass("error"), $(".error-cook-time").show());
        void 0 === e && ($("#total-time").addClass("error"), $(".error-total-time").show());
        void 0 === h && ($("#servings").addClass("error"), $(".error-servings").show());
        void 0 === l && ($("#yields").addClass("error"),
            $(".error-yields").show());
        b && !/((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(b) && ($("#adapted-link").addClass("error"), $(".error-adapted-link").show());
        if ($(".error").length) $(".error-list,.error-data").show();
        else {
            $(".error-list,.error-data").hide();
            var q = {
                    title: a,
                    image: theImage,
                    author: f,
                    adapted: c,
                    adaptedLink: b,
                    summary: d,
                    prepTime: g,
                    cookTime: k,
                    totalTime: e,
                    servings: h,
                    yields: l,
                    ingredients: m,
                    directions: n,
                    notes: p
                },
                a = {
                    widget: !0,
                    title: a,
                    source: recipeInfo.source,
                    link: recipeInfo.link,
                    key: recipeInfo.key,
                    sections: m.map(function(a) {
                        return {
                            title: a.title || "Ingredients:",
                            type: "ingredient",
                            items: a.lines
                        }
                    }).concat(n.map(function(a) {
                        return {
                            title: a.title || "Directions:",
                            type: "method",
                            items: a.lines
                        }
                    }))
                };
            /^data:image\/(png|jpg|jpeg);base64,/.test(theImage) ? a.imageBlob = theImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, "") : a.image = theImage;
            recipeInfo.id && (a.adapted = recipeInfo.id);
            api.createWidgetRecipe(a, function(a) {
                a ? messages.postMessage("save", {
                    recipe: q,
                    yumprintId: a.id,
                    nutrition: a.nutrition,
                    yumprintKey: a.key
                }) : (alert("Recipe Card could not save the recipe. Please contact support@yumprint.com for help."), $(".working").hide(), $("#save,#cancel").show())
            });
            $("#save,#cancel").hide();
            $(".working").show()
        }
    }

    function section2text(a) {
        return !a ? "" : a.map(function(a) {
            return (a.title ? [a.title + ":"] : []).concat(a.lines).join("\n")
        }).join("\n\n")
    }

    function time2text(a) {
        var f = parseInt(a),
            a = Math.floor(f / 60),
            f = f % 60,
            c = [];
        a && c.push(a + "h");
        f && c.push(f + "m");
        return c.join(" ")
    }
    $(function() {
        $("body").show("fade", ANIMATION_TIME);
        $(".close").click(function() {
            messages.postMessage("close")
        });
        $("#cancel").click(function() {
            messages.postMessage("close")
        });
        $("#save").click(function() {
            save()
        });
        $("#picture").click(function() {
            messages.postMessage("image", function(a) {
                theImage = a;
                $(".picture").css("background-image", "url(" + a + ")")
            })
        });
        $(".error-title").click(function() {
            $("#title").focus()
        });
        $(".error-prep-time").click(function() {
            $("#prep-time").focus()
        });
        $(".error-cook-time").click(function() {
            $("#cook-time").focus()
        });
        $(".error-total-time").click(function() {
            $("#total-time").focus()
        });
        $(".error-servings").click(function() {
            $("#servings").focus()
        });
        $(".error-yields").click(function() {
            $("#yields").focus()
        });
        $(".error-ingredients").click(function() {
            $("#ingredients").focus()
        });
        $(".error-adapted-link").click(function() {
            $("#adapted-link").focus()
        });
        $("input,textarea").focus(function() {
            $(this).removeClass("error")
        });
        messages.postMessage("loaded", function(a) {
            if (a) {
                recipeInfo = a.info;
                var f = a.recipe;
                a.recipe && (f.title && $("#title").val(f.title),
                    f.author && $("#author").val(f.author), f.adapted && $("#adapted").val(f.adapted), f.adaptedLink && $("#adapted-link").val(f.adaptedLink), f.summary && $("#summary").val(f.summary), f.prepTime && $("#prep-time").val(time2text(f.prepTime)), f.cookTime && $("#cook-time").val(time2text(f.cookTime)), f.totalTime && $("#total-time").val(time2text(f.totalTime)), f.servings && $("#servings").val(f.servings), f.yields && $("#yields").val(f.yields), f.ingredients && $("#ingredients").val(section2text(f.ingredients)), f.directions && $("#directions").val(section2text(f.directions)),
                    f.notes && $("#notes").val(section2text(f.notes)), theImage = f.image || null, f.image && $(".picture").css("background-image", "url(" + f.image + ")"))
            }
        });
        $("input,textarea").placeholder();
        $(".working").hide()
    });
})();