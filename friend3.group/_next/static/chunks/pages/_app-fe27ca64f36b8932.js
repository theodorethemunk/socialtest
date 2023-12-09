(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(9758)
            }])
        },
        1551: function(e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = (o = r(7294)) && o.__esModule ? o : {
                    default: o
                },
                s = r(1003),
                l = r(880),
                c = r(9246);

            function f(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var u = {};

            function d(e, t, r, n) {
                if (e && s.isLocalURL(t)) {
                    e.prefetch(t, r, n).catch((function(e) {
                        0
                    }));
                    var i = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    u[t + "%" + r + (i ? "%" + i : "")] = !0
                }
            }
            var m = a.default.forwardRef((function(e, t) {
                var r, n = e.legacyBehavior,
                    o = void 0 === n ? !0 !== Boolean(!1) : n,
                    m = e.href,
                    p = e.as,
                    h = e.children,
                    g = e.prefetch,
                    b = e.passHref,
                    x = e.replace,
                    v = e.shallow,
                    y = e.scroll,
                    j = e.locale,
                    w = e.onClick,
                    O = e.onMouseEnter,
                    k = f(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter"]);
                r = h, o && "string" === typeof r && (r = a.default.createElement("a", null, r));
                var N, E = !1 !== g,
                    C = l.useRouter(),
                    _ = a.default.useMemo((function() {
                        var e = i(s.resolveHref(C, m, !0), 2),
                            t = e[0],
                            r = e[1];
                        return {
                            href: t,
                            as: p ? s.resolveHref(C, p) : r || t
                        }
                    }), [C, m, p]),
                    S = _.href,
                    P = _.as,
                    A = a.default.useRef(S),
                    T = a.default.useRef(P);
                o && (N = a.default.Children.only(r));
                var I = o ? N && "object" === typeof N && N.ref : t,
                    M = i(c.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    L = M[0],
                    R = M[1],
                    F = M[2],
                    D = a.default.useCallback((function(e) {
                        T.current === P && A.current === S || (F(), T.current = P, A.current = S), L(e), I && ("function" === typeof I ? I(e) : "object" === typeof I && (I.current = e))
                    }), [P, I, S, F, L]);
                a.default.useEffect((function() {
                    var e = R && E && s.isLocalURL(S),
                        t = "undefined" !== typeof j ? j : C && C.locale,
                        r = u[S + "%" + P + (t ? "%" + t : "")];
                    e && !r && d(C, S, P, {
                        locale: t
                    })
                }), [P, S, R, j, E, C]);
                var H = {
                    ref: D,
                    onClick: function(e) {
                        o || "function" !== typeof w || w(e), o && N.props && "function" === typeof N.props.onClick && N.props.onClick(e), e.defaultPrevented || function(e, t, r, n, i, o, a, l) {
                            ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && s.isLocalURL(r)) && (e.preventDefault(), t[i ? "replace" : "push"](r, n, {
                                shallow: o,
                                locale: l,
                                scroll: a
                            }))
                        }(e, C, S, P, x, v, y, j)
                    },
                    onMouseEnter: function(e) {
                        o || "function" !== typeof O || O(e), o && N.props && "function" === typeof N.props.onMouseEnter && N.props.onMouseEnter(e), s.isLocalURL(S) && d(C, S, P, {
                            priority: !0
                        })
                    }
                };
                if (!o || b || "a" === N.type && !("href" in N.props)) {
                    var U = "undefined" !== typeof j ? j : C && C.locale,
                        W = C && C.isLocaleDomain && s.getDomainLocale(P, U, C && C.locales, C && C.domainLocales);
                    H.href = W || s.addBasePath(s.addLocale(P, U, C && C.defaultLocale))
                }
                return o ? a.default.cloneElement(N, H) : a.default.createElement("a", Object.assign({}, k, H), r)
            }));
            t.default = m, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function(e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    r = e.rootMargin,
                    n = e.disabled || !s,
                    f = o.useRef(),
                    u = i(o.useState(!1), 2),
                    d = u[0],
                    m = u[1],
                    p = i(o.useState(t ? t.current : null), 2),
                    h = p[0],
                    g = p[1],
                    b = o.useCallback((function(e) {
                        f.current && (f.current(), f.current = void 0), n || d || e && e.tagName && (f.current = function(e, t, r) {
                            var n = function(e) {
                                    var t, r = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = c.find((function(e) {
                                            return e.root === r.root && e.margin === r.margin
                                        }));
                                    n ? t = l.get(n) : (t = l.get(r), c.push(r));
                                    if (t) return t;
                                    var i = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = i.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            }))
                                        }), e);
                                    return l.set(r, t = {
                                        id: r,
                                        observer: o,
                                        elements: i
                                    }), t
                                }(r),
                                i = n.id,
                                o = n.observer,
                                a = n.elements;
                            return a.set(e, t), o.observe(e),
                                function() {
                                    if (a.delete(e), o.unobserve(e), 0 === a.size) {
                                        o.disconnect(), l.delete(i);
                                        var t = c.findIndex((function(e) {
                                            return e.root === i.root && e.margin === i.margin
                                        }));
                                        t > -1 && c.splice(t, 1)
                                    }
                                }
                        }(e, (function(e) {
                            return e && m(e)
                        }), {
                            root: h,
                            rootMargin: r
                        }))
                    }), [n, h, r, d]),
                    x = o.useCallback((function() {
                        m(!1)
                    }), []);
                return o.useEffect((function() {
                    if (!s && !d) {
                        var e = a.requestIdleCallback((function() {
                            return m(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [d]), o.useEffect((function() {
                    t && g(t.current)
                }), [t]), [b, d, x]
            };
            var o = r(7294),
                a = r(4686),
                s = "undefined" !== typeof IntersectionObserver;
            var l = new Map,
                c = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        8445: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(5893),
                i = r(1664),
                o = r.n(i),
                a = r(5697),
                s = r.n(a);

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        l(e, t, r[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var u = r(7294).forwardRef((function(e, t) {
                var r = e.as,
                    i = void 0 === r ? "div" : r,
                    o = f(e, ["as"]);
                return (0, n.jsx)(i, c({}, o, {
                    ref: t,
                    className: "relative inline-flex h-9 items-center justify-center rounded-full bg-[#9326E9] px-3 text-center text-sm md:text-base font-medium uppercase text-white transition duration-300 before:absolute before:left-1/2 before:-bottom-1 before:-z-10 before:block before:h-1 before:w-4/5 before:-translate-x-1/2 before:blur-lg hover:bg-opacity-80 xs:text-sm md:h-10 lg:h-12 lg:min-w-[180px] xs:min-w-[150px]",
                    children: e.children
                }))
            }));

            function d(e) {
                var t = e.type,
                    r = void 0 === t ? "button" : t,
                    i = e.children,
                    a = f(e, ["type", "children"]);
                switch (r) {
                    case "button":
                        return (0, n.jsx)(u, c({
                            as: "button"
                        }, a, {
                            children: i
                        }));
                    case "link-external":
                        return (0, n.jsx)(u, c({
                            as: "a"
                        }, a, {
                            children: i
                        }));
                    case "link-internal":
                        return (0, n.jsx)(o(), c({}, a, {
                            passHref: !0,
                            children: (0, n.jsx)(u, {
                                as: "a",
                                children: i
                            })
                        }))
                }
            }
            d.propTypes = {
                type: s().oneOf(["button", "link-internal", "link-external"]).isRequired
            }
        },
        9758: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var n = r(5893),
                i = (r(7107), r(1540), r(1664)),
                o = r.n(i),
                a = [{
                    title: "About",
                    links: [{
                        title: "Docs",
                        href: "https://docs.friend3.group/",
                        icon: "../images/footer/collab.svg"
                    }, {
                        title: "Collab",
                        href: "https://forms.gle/Y2eXZupgd256i3Wz8",
                        icon: "../images/footer/collab.svg"
                    }, {
                        title: "FAQ",
                        href: "https://docs.friend3.group/faq",
                        icon: "../images/footer/faq.svg"
                    }, {
                        title: "Media Kit",
                        href: "/media-kit",
                        icon: "../images/footer/brand.svg"
                    }, {
                        title: "Verify",
                        href: "/verification",
                        icon: "../images/footer/verify.svg"
                    }, {
                        title: "Disclaimer",
                        href: "https://docs.friend3.group/disclaimer",
                        icon: "../images/footer/disclaimer.svg"
                    }]
                }, {
                    title: "Contact",
                    links: [{
                        title: "X",
                        href: "https://twitter.com/Friend3AI",
                        icon: "../images/footer/twitter.svg"
                    }, {
                        title: "Telegram (News)",
                        href: "https://t.me/friend3group",
                        icon: "../images/footer/telegram.svg"
                    }, {
                        title: "Telegram (Chat)",
                        href: "https://t.me/friend3fam",
                        icon: "../images/footer/telegram.svg"
                    }, {
                        title: "Github",
                        href: "https://github.com/Friend3-Group",
                        icon: "../images/footer/github.svg"
                    }, {
                        title: "Email",
                        href: "mailto:hello@friend3.group",
                        icon: "../images/footer/mail.svg"
                    }]
                }, {
                    title: "Track Data",
                    links: [{
                        title: "",
                        href: "https://defillama.com/protocol/friend3",
                        image: "../images/footer/defillama.png"
                    }, {
                        title: "",
                        href: "https://dune.com/tk-research/friend3",
                        image: "../images/footer/dune.svg"
                    }, {
                        title: "",
                        href: "https://dappradar.com/dapp/friend3",
                        image: "../images/footer/dappradar.png"
                    }, {
                        title: "",
                        href: "https://dappbay.bnbchain.org/detail/friend3",
                        image: "../images/footer/dappbay.png"
                    }]
                }];

            function s() {
                return (0, n.jsxs)("footer", {
                    children: [(0, n.jsx)("img", {
                        src: "/images/footer-wave.svg",
                        alt: "",
                        className: "w-full min-w-0 object-contain"
                    }), (0, n.jsxs)("div", {
                        className: "bg-[#944EEC]",
                        children: [(0, n.jsx)("div", {
                            className: "site-container ",
                            children: (0, n.jsxs)("div", {
                                className: "justify-between pt-8 pb-10 md:flex",
                                children: [(0, n.jsxs)("div", {
                                    className: "md:w-1/4",
                                    children: [(0, n.jsx)(o(), {
                                        passHref: !0,
                                        href: "/",
                                        children: (0, n.jsx)("a", {
                                            children: (0, n.jsx)("img", {
                                                src: "/images/friend3-logo-w.svg",
                                                alt: "",
                                                className: "mb-5 w-36 min-w-0 object-contain md:w-48"
                                            })
                                        })
                                    }), (0, n.jsxs)("span", {
                                        className: "mt-5 font-semibold text-white",
                                        children: ["A social dApp where you can make friends and profits in Web3.", (0, n.jsx)("br", {})]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "mt-6 grid flex-1 grid-cols-2 gap-6 md:mt-0 md:w-2/3 md:grid-cols-3 md:gap-0",
                                    children: a.map((function(e) {
                                        return (0, n.jsx)("ul", {
                                            children: (0, n.jsxs)("li", {
                                                children: [e.image ? (0, n.jsx)("img", {
                                                    src: e.image,
                                                    alt: e.title,
                                                    className: "h-24 w-24"
                                                }) : e.icon ? (0, n.jsx)("img", {
                                                    src: e.icon,
                                                    alt: e.title,
                                                    className: "h-24 w-24"
                                                }) : (0, n.jsx)("h3", {
                                                    className: "text-lg font-bold text-white",
                                                    children: e.title
                                                }), (0, n.jsx)("ul", {
                                                    className: "mt-5",
                                                    children: e.links.map((function(e) {
                                                        return (0, n.jsx)("li", {
                                                            className: "text-md mt-1 text-neutral-300",
                                                            children: (0, n.jsxs)("a", {
                                                                href: e.href,
                                                                className: "text-md font-regular text-white hover:font-bold",
                                                                children: [e.image && (0, n.jsx)("img", {
                                                                    src: e.image,
                                                                    alt: e.title,
                                                                    className: " mt-3 h-9"
                                                                }), (0, n.jsx)("div", {
                                                                    children: (0, n.jsxs)("div", {
                                                                        className: "flex items-center",
                                                                        children: [(0, n.jsx)("img", {
                                                                            src: e.icon,
                                                                            alt: e.title,
                                                                            className: " w-10"
                                                                        }), (0, n.jsx)("span", {
                                                                            className: "ml-1",
                                                                            children: e.title
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }, e.title)
                                                    }))
                                                })]
                                            })
                                        }, e.title)
                                    }))
                                })]
                            })
                        }), (0, n.jsx)("p", {
                            className: "mt-5 bg-[#944EEC] text-center text-sm text-white",
                            children: "\xa9 2023 Friend3. All rights reserved."
                        })]
                    })]
                })
            }
            var l = r(7294),
                c = r(8445);
            var f = l.forwardRef((function(e, t) {
                return l.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), l.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                }))
            }));

            function u() {
                var e = (0, l.useState)(!1),
                    t = e[0],
                    r = e[1],
                    i = "will be uploaded soon";
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: "bg-[#9326E9] xl:block",
                        children: (0, n.jsx)("div", {
                            className: "flex justify-center items-center min-h-[40px] py-1 w-full site-container",
                            children: (0, n.jsxs)("div", {
                                className: "flex justify-center items-center flex-wrap w-full -my-0.5 -mx-2",
                                children: [(0, n.jsx)("span", {
                                    className: "text-sm sm:text-sm font-medium text-[#FFFFFF] whitespace-nowrap py-0.5 px-2",
                                    children: "Contract Address:"
                                }), (0, n.jsx)("span", {
                                    className: "text-sm sm:text-sm font-bold text-white break-all py-0.5 px-2",
                                    children: i
                                }), (0, n.jsx)("button", {
                                    onClick: function() {
                                        navigator.clipboard.writeText(i).then((function() {
                                            r(!0), setTimeout((function() {
                                                return r(!1)
                                            }), 2e3)
                                        }))
                                    },
                                    className: "p-1 rounded hover:bg-gray-200 ml-2",
                                    children: (0, n.jsx)(f, {
                                        className: "h-5 w-5 text-white"
                                    })
                                }), t && (0, n.jsx)("span", {
                                    className: "text-white",
                                    children: "Copied!"
                                })]
                            })
                        })
                    }), (0, n.jsx)("header", {
                        className: "bg-white",
                        children: (0, n.jsxs)("div", {
                            className: "flex py-4 md:h-28 items-center site-container",
                            children: [(0, n.jsx)(o(), {
                                href: "/",
                                passHref: !0,
                                children: (0, n.jsx)("a", {
                                    className: "shrink-0",
                                    children: (0, n.jsx)("img", {
                                        src: "/images/friend3-logo.svg",
                                        alt: "Friend3 Logo",
                                        className: "h-9 sm:h-9 w-auto md:h-[60px] shrink-0 object-contain lg:h-[85px]"
                                    })
                                })
                            }), (0, n.jsx)("ul", {
                                className: "ml-10 hidden space-x-6 md:flex"
                            }), (0, n.jsx)("div", {
                                className: "flex-1"
                            }), (0, n.jsxs)("div", {
                                className: "items-center space-x-3 flex",
                                children: [(0, n.jsx)("a", {
                                    href: "https://coinmarketcap.com/currencies/friend3/",
                                    children: (0, n.jsx)("img", {
                                        src: "/icons/coinmarketcap.svg",
                                        className: "w-8 h-8 text-indigo-500"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "https://www.coingecko.com/en/coins/friend3",
                                    children: (0, n.jsx)("img", {
                                        src: "/icons/coingecko.svg",
                                        className: "w-8 h-8 text-indigo-500"
                                    })
                                }), (0, n.jsx)(c.Z, {
                                    type: "link-external",
                                    href: "https://opbnb.friend3.group/",
                                    children: "Launch App"
                                }), (0, n.jsx)(c.Z, {
                                    type: "link-external",
                                    href: "https://stake.friend3.group",
                                    children: "Stake"
                                })]
                            })]
                        })
                    })]
                })
            }

            function d(e) {
                var t = e.children;
                return (0, n.jsxs)("div", {
                    className: "flex min-h-screen flex-col",
                    children: [(0, n.jsx)("div", {
                        children: (0, n.jsx)(u, {})
                    }), (0, n.jsx)("main", {
                        children: t
                    }), (0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(s, {})]
                })
            }

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        m(e, t, r[t])
                    }))
                }
                return e
            }
            var h = function(e) {
                var t = e.Component,
                    r = e.pageProps;
                return (0, n.jsx)(d, {
                    children: (0, n.jsx)(t, p({}, r))
                })
            }
        },
        7107: function() {},
        1540: function() {},
        1664: function(e, t, r) {
            e.exports = r(1551)
        },
        2703: function(e, t, r) {
            "use strict";
            var n = r(414);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, r, i, o, a) {
                    if (a !== n) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return r.PropTypes = r, r
            }
        },
        5697: function(e, t, r) {
            e.exports = r(2703)()
        },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function() {
            return t(1118), t(880)
        }));
        var r = e.O();
        _N_E = r
    }
]);