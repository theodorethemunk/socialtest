(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(928)
            }])
        },
        928: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            });
            var a = r(5893),
                i = r(9669),
                n = r.n(i),
                s = r(3758),
                l = r(1664),
                c = r.n(l),
                o = r(7294);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, i, n = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (a = r.next()).done) && (n.push(a.value), !t || n.length !== t); s = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = [{
                title: "Security First: Encrypted data, code audits, no API abuse.",
                img: "/images/cards/card-1.png"
            }, {
                title: "Earn Passively: Ticket holders earn from donations and transactions.",
                img: "/images/cards/card-2.png"
            }, {
                title: "Seamless Chatting: Share text, emojis, voices, images, and videos.",
                img: "/images/cards/card-3.png"
            }, {
                title: "Monetize Networking: Create Web3 groups, capitalize on influence.",
                img: "/images/cards/card-4.png"
            }, {
                title: "Custom Pricing: Tailor your groups rate to your needs.",
                img: "/images/cards/card-5.png"
            }, {
                title: "Assetize Groups: Inject liquidity into your tickets and trade them.",
                img: "/images/cards/card-6.png"
            }];

            function u() {
                var e = o.useRef(),
                    t = o.useRef(),
                    r = m(o.useState(1 / 0), 2),
                    i = r[0],
                    n = r[1];
                return o.useEffect((function() {
                    var r = t.current.querySelectorAll("li"),
                        a = 1 / 0;
                    window.addEventListener("scroll", (function() {
                        var t = a,
                            i = 1 / 0;
                        r.forEach((function(r, a) {
                            var n = r.getBoundingClientRect(),
                                s = n.top,
                                l = n.height,
                                c = e.current.getBoundingClientRect(),
                                o = c.top,
                                d = c.height,
                                m = window.innerHeight / 2,
                                g = Math.abs(o) > d - window.innerHeight;
                            if (o <= 0 && !g) {
                                var u = s + l / 2,
                                    x = Math.abs(u - m);
                                x < i && (i = x, t = a)
                            }
                        })), t !== a && n(t), i === 1 / 0 && n(1 / 0)
                    }))
                }), []), (0, a.jsx)("div", {
                    className: "site-container",
                    children: (0, a.jsxs)("div", {
                        ref: e,
                        className: "section-feature-list",
                        children: [(0, a.jsx)("div", {
                            className: "feature-list-left",
                            children: (0, a.jsx)("ul", {
                                ref: t,
                                className: "feature-list-list",
                                children: g.map((function(e, t) {
                                    var r = e.title;
                                    return (0, a.jsx)("li", {
                                        className: "feature-list-item py-12 first:pt-0 last:pb-0 ".concat(i === t ? "active" : ""),
                                        children: (0, a.jsx)("h3", {
                                            className: "text-4xl font-extrabold !leading-normal",
                                            children: r
                                        })
                                    }, t)
                                }))
                            })
                        }), (0, a.jsx)("div", {
                            className: "feature-list-right",
                            children: (0, a.jsx)("div", {
                                className: "feature-list-img-wrapper",
                                children: g.map((function(e, t) {
                                    var r = e.img,
                                        n = e.title;
                                    return (0, a.jsx)("img", {
                                        src: r,
                                        alt: n,
                                        width: 408,
                                        height: 408,
                                        className: "feature-list-img ".concat(i === t ? "active" : "")
                                    }, t)
                                }))
                            })
                        })]
                    })
                })
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, i, n = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (a = r.next()).done) && (n.push(a.value), !t || n.length !== t); s = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || h(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || h(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                if (e) {
                    if ("string" === typeof e) return x(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? x(e, t) : void 0
                }
            }
            var b = [{
                id: 1,
                imgSrc: "https://pbs.twimg.com/profile_images/1702401347541409792/4mp3Phsq_400x400.jpg",
                title: "Buy Ticket",
                date: "today at 2:24 AM",
                name: "Joesph Crypto",
                color: "rgb(255, 245, 229)",
                link: "https://app.friend3.group/groups/06f4211d-f84b-47ce-b4a5-eae5204897f5"
            }, {
                id: 2,
                imgSrc: "https://pbs.twimg.com/profile_images/1690299090654081024/6INdTg17_400x400.jpg",
                title: "Sell Ticket",
                date: "today at 2:09 AM",
                name: "Seraphina",
                color: "rgb(241, 243, 244)",
                link: "https://app.friend3.group/groups/7347e465-886c-4321-a176-8288d87b18b2"
            }, {
                id: 3,
                imgSrc: "https://pbs.twimg.com/profile_images/1708533860273664000/pIYWBsxK_400x400.png",
                title: "Group Chatting",
                date: "today at 7:05 AM",
                name: "Tudor\ud83d\udd36Krypt\u2122\ufe0f",
                color: "rgb(254, 237, 230)",
                link: "https://app.friend3.group/groups/4a6ed389-0798-424a-a530-a4e9ae47fe43"
            }, {
                id: 4,
                imgSrc: "https://pbs.twimg.com/profile_images/1681463692041256961/Lucdcv2a_400x400.jpg",
                title: "Receive Donations",
                date: "today at 9:55 PM",
                name: "Nadia_CryptoSis",
                color: "rgb(255, 247, 230)",
                link: "https://app.friend3.group/groups/face4afb-6997-4be4-ad74-36ed09b3ba74"
            }, {
                id: 5,
                imgSrc: "https://pbs.twimg.com/profile_images/1667162354457497606/KHF67Qqc_400x400.jpg",
                title: "Donate to Creators",
                date: "today at 2:54 AM",
                name: "\xdcstad Splinter",
                color: "rgb(241, 248, 237)",
                link: "https://app.friend3.group/groups/5ad09518-c919-4f46-9525-2579a574a9e6"
            }, {
                id: 6,
                imgSrc: "https://pbs.twimg.com/profile_images/1655909290878574594/q_YIA1bU_400x400.jpg",
                title: "Invite Friends",
                date: "today at 2:18 PM",
                name: "Udy Highs",
                color: "rgb(251, 233, 236)",
                link: "https://app.friend3.group/groups/0dae7ce5-8810-44c9-a4fe-6fbd24d59036"
            }, {
                id: 7,
                imgSrc: "https://pbs.twimg.com/profile_images/1687017833207918592/TOytLk8U_400x400.png",
                title: "Earn Trading Fees ",
                date: "today at 2:18 PM",
                name: "Ox 102 \ud83d\udc2e",
                color: "rgb(251, 233, 236)",
                link: "https://app.friend3.group/groups/e105b4df-8195-42c1-ab06-46c2ba983487"
            }];

            function y() {
                var e = p(o.useState([]), 2),
                    t = e[0],
                    r = e[1],
                    i = p(o.useState(b[0]), 2),
                    n = (i[0], i[1]),
                    s = o.useRef(0),
                    l = function() {
                        var e = b[s.current % b.length];
                        n(e), r((function(t) {
                            return [e].concat(f(t.slice(0, 5)))
                        })), s.current++
                    };
                return o.useEffect((function() {
                    l();
                    var e = setInterval(l, 1350);
                    return function() {
                        return clearInterval(e)
                    }
                }), []), (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsxs)("div", {
                        className: "site-container ",
                        children: [(0, a.jsxs)("div", {
                            id: "desoc",
                            className: "mx-auto md:max-w-4xl",
                            children: [(0, a.jsx)("div", {
                                className: "flex justify-center"
                            }), (0, a.jsxs)("h2", {
                                className: "text-center text-[50px] font-semibold text-[#9326E9] md:text-3xl lg:text-4xl xl:text-5xl mt-10 ",
                                children: ["Highlights", (0, a.jsx)("br", {})]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "-mx-3 mt-10 flex flex-wrap justify-center ",
                            children: [(0, a.jsx)("div", {
                                className: "grid w-full transform p-5 transition-all duration-300 hover:scale-[1.02] sm:w-1/2 md:w-2/5",
                                children: (0, a.jsxs)("div", {
                                    className: "grid overflow-hidden rounded-xl border border-[#dedde2] bg-[#FFECFE]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "p-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-4 ",
                                            children: (0, a.jsx)("span", {
                                                className: "bg-text-gradient-desoc bg-black bg-clip-text text-xs font-semibold uppercase text-transparent "
                                            })
                                        }), (0, a.jsx)("h4", {
                                            className: " mb-4 text-center text-[30px] font-semibold text-black",
                                            children: "Seamless User Experience"
                                        }), (0, a.jsx)("p", {
                                            className: "text-md text-center text-[#8E8E93] ",
                                            children: "Smooth, intuitive, and empowering for every Friend3 user.                "
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "container mx-auto flex h-[400px] items-center justify-center px-5 ",
                                        children: (0, a.jsx)("div", {
                                            className: "card-list",
                                            children: t.map((function(e, t) {
                                                var r = e.imgSrc,
                                                    i = e.date,
                                                    n = e.title,
                                                    s = e.name,
                                                    l = e.color,
                                                    c = e.id,
                                                    o = e.link;
                                                return (0, a.jsx)("div", {
                                                    className: "card",
                                                    style: {
                                                        "--i": t
                                                    },
                                                    children: (0, a.jsxs)("div", {
                                                        className: "card-wrp",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "card-left",
                                                            children: (0, a.jsx)("div", {
                                                                className: "card-icon",
                                                                style: {
                                                                    backgroundColor: l
                                                                },
                                                                children: (0, a.jsx)("img", {
                                                                    src: r,
                                                                    width: "72",
                                                                    height: "72",
                                                                    className: "card-emoji"
                                                                })
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "card-right",
                                                            children: [(0, a.jsx)("p", {
                                                                className: "card-title",
                                                                children: n
                                                            }), (0, a.jsxs)("div", {
                                                                className: "card-info ",
                                                                children: [(0, a.jsx)("a", {
                                                                    href: o,
                                                                    children: (0, a.jsx)("p", {
                                                                        className: "card-name ",
                                                                        children: s
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "card-info-separator"
                                                                }), (0, a.jsx)("p", {
                                                                    className: "card-date",
                                                                    children: i
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }, c)
                                            }))
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "grid w-full transform p-5 transition-all duration-300 hover:scale-[1.02] sm:w-1/2 md:w-2/5",
                                children: (0, a.jsxs)("div", {
                                    className: "grid overflow-hidden rounded-xl border border-[#dedde2] bg-[#FFECFE]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "p-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-4 ",
                                            children: (0, a.jsx)("span", {
                                                className: "bg-text-gradient-desoc bg-black bg-clip-text text-xs font-semibold uppercase text-transparent "
                                            })
                                        }), (0, a.jsx)("h4", {
                                            className: " mb-4 text-center text-[30px] font-semibold text-black",
                                            children: "Decentralized Pricing Formula"
                                        }), (0, a.jsx)("p", {
                                            className: "text-md text-center text-[#8E8E93] ",
                                            children: "Monetize groups and protect members more than ever."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "",
                                        children: (0, a.jsx)("img", {
                                            src: "images/card-2.png",
                                            alt: "",
                                            className: "mx-auto mt-auto block object-contain",
                                            style: {
                                                position: "relative",
                                                top: -20,
                                                left: 0
                                            }
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "grid w-full transform p-5 transition-all duration-300 hover:scale-[1.02] sm:w-1/2 md:w-2/5",
                                children: (0, a.jsxs)("div", {
                                    className: "grid overflow-hidden rounded-xl border border-[#dedde2] bg-[#FFECFE]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "mt-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-2 ",
                                            children: (0, a.jsx)("span", {
                                                className: "bg-text-gradient-desoc bg-black bg-clip-text text-xs font-semibold uppercase text-transparent "
                                            })
                                        }), (0, a.jsx)("h4", {
                                            className: " mb-4 text-center text-[30px] font-semibold text-black",
                                            children: "Donation Token Listing"
                                        }), (0, a.jsx)("p", {
                                            className: "text-md text-center text-[#8E8E93] ",
                                            children: "Extend token utility to power creator incentives."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "",
                                        children: (0, a.jsx)("img", {
                                            src: "images/card-3.png",
                                            alt: "",
                                            className: "mx-auto mx-auto block object-contain"
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "grid w-full transform p-5 transition-all duration-300 hover:scale-[1.02] sm:w-1/2 md:w-2/5",
                                children: (0, a.jsxs)("div", {
                                    className: "grid overflow-hidden rounded-xl border border-[#dedde2] bg-[#FFECFE]",
                                    children: [(0, a.jsxs)("div", {
                                        className: "mt-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-2 ",
                                            children: (0, a.jsx)("span", {
                                                className: "bg-text-gradient-desoc bg-black bg-clip-text text-xs font-semibold uppercase text-transparent "
                                            })
                                        }), (0, a.jsx)("h4", {
                                            className: " mb-4 text-center text-[30px] font-semibold text-black",
                                            children: "Passive Income Mechanism"
                                        }), (0, a.jsx)("p", {
                                            className: "text-md text-center text-[#8E8E93] ",
                                            children: "Earn effortlessly from group interactions and transactions."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "",
                                        children: (0, a.jsx)("img", {
                                            src: "images/card-4.png",
                                            alt: "",
                                            className: "mx-auto mx-auto mt-5 block object-contain"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            var v = JSON.parse('[{"index":1,"img":"/images/circle-1.png","gridArea":"1 / 1","x":1.5,"y":-0.1,"url":"/"},{"index":2,"img":"/images/circle-2.png","gridArea":"1 / 2","x":4,"y":0.4,"url":"/"},{"index":3,"img":"/images/circle-3.png","gridArea":"1 / 3","x":6.1,"y":1.2,"url":"/"},{"index":4,"img":"/images/circle-4.png","gridArea":"2 / 1","x":-3,"y":2.6,"url":"/"},{"index":5,"img":"/images/circle-5.png","gridArea":"2 / 2","x":-2,"y":5,"url":"/"},{"index":6,"img":"/images/circle-3.png","gridArea":"2 / 3","x":-1,"y":6,"url":"/"},{"index":7,"img":"/images/circle-1.png","gridArea":"3 / 1","x":0,"y":6.5,"url":"/"},{"index":8,"img":"/images/circle-2.png","gridArea":"3 / 2","x":-1,"y":10,"url":"/"},{"index":9,"img":"/images/circle-6.png","gridArea":"3 / 3","x":1,"y":8,"url":"/"},{"index":10,"img":"/images/circle-1.png","gridArea":"4 / 1","x":-4,"y":11,"url":"/"},{"index":11,"img":"/images/circle-2.png","gridArea":"4 / 2","x":-4,"y":14,"url":"/"},{"index":12,"img":"/images/circle-3.png","gridArea":"4 / 3","x":-4,"y":12,"url":"/"},{"index":13,"img":"/images/circle-4.png","gridArea":"4 / 4","x":-24,"y":21,"url":"/"},{"index":14,"img":"/images/circle-5.png","gridArea":"5 / 1","x":11,"y":15,"url":"/"},{"index":15,"img":"/images/circle-1.png","gridArea":"5 / 2","x":12,"y":5,"url":"/"},{"index":16,"img":"/images/circle-1.png","gridArea":"1 / 10","x":-1,"y":1.2,"url":"/"},{"index":17,"img":"/images/circle-2.png","gridArea":"1 / 11","x":0,"y":0.6,"url":"/"},{"index":18,"img":"/images/circle-6.png","gridArea":"1 / 12","x":1,"y":0,"url":"/"},{"index":19,"img":"/images/circle-6.png","gridArea":"2 / 10","x":0,"y":3,"url":"/"},{"index":20,"img":"/images/circle-6.png","gridArea":"2 / 11","x":2,"y":4,"url":"/"},{"index":21,"img":"/images/circle-6.png","gridArea":"2 / 12","x":5,"y":2,"url":"/"},{"index":22,"img":"/images/circle-6.png","gridArea":"3 / 10","x":3,"y":5,"url":"/"},{"index":23,"img":"/images/circle-6.png","gridArea":"3 / 11","x":2,"y":8,"url":"/"},{"index":24,"img":"/images/circle-6.png","gridArea":"3 / 12","x":3,"y":3,"url":"/"},{"index":26,"img":"/images/circle-6.png","gridArea":"4 / 11","x":-1,"y":9,"url":"/"},{"index":27,"img":"/images/circle-6.png","gridArea":"4 / 12","x":1.5,"y":10,"url":"/"},{"index":28,"img":"/images/circle-6.png","gridArea":"5 / 11","x":1,"y":10,"url":"/"},{"index":29,"img":"/images/circle-6.png","gridArea":"5 / 12","x":3,"y":12,"url":"/"}]'),
                j = r(5697),
                w = r.n(j);

            function N(e) {
                var t = e.img,
                    r = e.url;
                return (0, a.jsx)("div", {
                    className: "relative w-full max-w-[100px] overflow-hidden rounded-xl bg-[#9654FC] before:block before:pb-[100%]",
                    children: (0, a.jsx)("div", {
                        className: "absolute left-0 top-0 h-full w-full p-[5%]",
                        children: (0, a.jsx)(s.E.a, {
                            href: r,
                            target: "_blank",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: .98
                            },
                            transition: {
                                scale: {
                                    type: "spring",
                                    stiffness: 250
                                },
                                default: {
                                    duration: .5
                                }
                            },
                            className: "relative block h-full w-full overflow-hidden rounded-xl",
                            children: (0, a.jsx)("img", {
                                src: t,
                                alt: "",
                                className: "absolute left-0 top-0 h-full w-full min-w-0 object-contain"
                            })
                        })
                    })
                })
            }
            N.propTypes = {
                img: w().string.isRequired
            };

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, i, n = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (a = r.next()).done) && (n.push(a.value), !t || n.length !== t); s = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || E(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                if (e) {
                    if ("string" === typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? A(e, t) : void 0
                }
            }
            var F, _ = function(e) {
                for (var t, r = e.length; 0 != r;) {
                    var a;
                    t = Math.floor(Math.random() * r), r--, a = [e[t], e[r]], e[r] = a[0], e[t] = a[1]
                }
                return e
            }((F = Array(v.length).keys(), function(e) {
                if (Array.isArray(e)) return A(e)
            }(F) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(F) || E(F) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).map((function(e) {
                return e / 10
            })));

            function I() {
                var e = S(o.useState([]), 2),
                    t = e[0],
                    r = e[1],
                    i = S(o.useState([]), 2),
                    l = i[0],
                    c = i[1];
                return o.useEffect((function() {
                    n().get("https://opbnb.friend3.group/api/group/top?type=future").then((function(e) {
                        c(e.data.data), console.log(e.data.data)
                    })).catch((function(e) {
                        console.log(e)
                    }))
                }), []), o.useEffect((function() {
                    r((function() {
                        return v.map((function(e, t) {
                            var r = l[t % l.length];
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(r);
                                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    })))), a.forEach((function(t) {
                                        k(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e, {
                                img: r && r.future.twitterAvatar ? r.future.twitterAvatar : "",
                                url: r && r.id ? r.id : ""
                            })
                        }))
                    }))
                }), [l]), (0, a.jsx)(s.E.div, {
                    className: "grid max-h-[720px] w-full grid-cols-[repeat(12,2fr)] grid-rows-[repeat(7,minmax(0,1fr))] gap-5 pt-5",
                    children: t.map((function(e, t) {
                        return (0, a.jsx)(s.E.div, {
                            index: e.index,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: e.opacity || 1
                            },
                            transition: {
                                type: "spring",
                                delay: _[t],
                                opacity: {
                                    duration: .5,
                                    ease: "easeIn"
                                }
                            },
                            style: {
                                gridArea: e.gridArea,
                                transform: "translate(\n              ".concat(e.x, "vw, \n              ").concat(e.y, "vw\n            )")
                            },
                            children: (0, a.jsx)(N, {
                                img: e.img,
                                url: "https://opbnb.friend3.group/groups/".concat(e.url)
                            })
                        }, t)
                    }))
                })
            }
            var C = r(9287);

            function P() {
                var e = o.useRef(null);
                return o.useEffect((function() {
                    (0, C.A)((function(t) {
                        var r = t.y,
                            a = parseFloat(r.progress.toFixed(2));
                        e.current.style.setProperty("--p", 1 - a)
                    }), {
                        axis: "y",
                        target: e.current,
                        offset: ["start 40%", "end 85%"]
                    })
                }), []), (0, a.jsx)("div", {
                    className: "sp-section-containerx",
                    children: (0, a.jsxs)("div", {
                        ref: e,
                        className: "sp-screenx",
                        children: [(0, a.jsxs)("div", {
                            className: "sp-gridx",
                            children: [(0, a.jsx)("img", {
                                className: "sp-card-imagex",
                                src: "/images/post-1.png",
                                alt: "",
                                style: {
                                    "--x": -346,
                                    "--y": -320,
                                    "--s": -.25,
                                    "--r": 0
                                }
                            }), (0, a.jsx)("img", {
                                className: "sp-card-imagex",
                                src: "/images/post-2.png",
                                alt: "",
                                style: {
                                    "--x": 308,
                                    "--y": -302,
                                    "--s": .2,
                                    "--r": 0
                                }
                            }), (0, a.jsx)("img", {
                                className: "sp-card-imagex",
                                src: "/images/post-3.png",
                                alt: "",
                                style: {
                                    "--x": -425,
                                    "--y": -15,
                                    "--s": .3,
                                    "--r": 0
                                }
                            }), (0, a.jsx)("img", {
                                className: "sp-card-imagex",
                                src: "/images/post-4.png",
                                alt: "",
                                style: {
                                    "--x": 288,
                                    "--y": -262,
                                    "--s": 0,
                                    "--r": 0
                                }
                            }), (0, a.jsx)("img", {
                                className: "sp-card-imagex",
                                src: "/images/post-5.png",
                                alt: "",
                                style: {
                                    "--x": -452,
                                    "--y": -409,
                                    "--s": .2,
                                    "--r": 0
                                }
                            })]
                        }), (0, a.jsx)("img", {
                            className: "sp-screen-imgx",
                            src: "/images/screen-post.png",
                            alt: "",
                            width: 781,
                            height: 1600
                        })]
                    })
                })
            }

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, i, n = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (a = r.next()).done) && (n.push(a.value), !t || n.length !== t); s = !0);
                        } catch (c) {
                            l = !0, i = c
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M() {
                var e = O(o.useState([]), 2),
                    t = e[0],
                    r = e[1];
                return o.useEffect((function() {
                    n().get("/partners.json").then((function(e) {
                        r(e.data.BSC)
                    })).catch((function(e) {
                        console.log(e)
                    }))
                }), []), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: "relative grid overflow-y-visible py-2 site-container-xxl",
                            children: [(0, a.jsx)("div", {
                                className: "hidden [grid-area:1/1] lg:block",
                                children: (0, a.jsx)(I, {})
                            }), (0, a.jsx)("div", {
                                className: "site-container [grid-area:1/1]",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col items-center xl:mt-[20px] ",
                                    children: [(0, a.jsx)("img", {
                                        src: "/images/friend3icon.svg",
                                        alt: "audited by certik",
                                        className: "sm:mt-50 md:mt-50 xl:mt-50 lg:mt-50 block w-48 min-w-0 object-contain slide-up-down"
                                    }), (0, a.jsxs)("h1", {
                                        className: "mt-2 mb-2 text-center text-4xl font-bold text-[#9326E9] xs:text-5xl md:text-5xl lg:text-4xl xl:text-[46px]",
                                        children: [(0, a.jsx)("br", {}), "Post. Chat. Trade. Donate. Earn. ", (0, a.jsx)("br", {})]
                                    }), (0, a.jsx)("span", {
                                        className: " text-3xl font-bold text-black xs:text-4xl md:text-5xl lg:text-4xl xl:text-[40px]",
                                        children: "All in Friend3"
                                    }), (0, a.jsx)("div", {
                                        className: "text-center mt-0"
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-10 text-center font-secondary font-semibold text-black md:text-lg lg:text-xl",
                                        children: ["Live on", (0, a.jsxs)("div", {
                                            className: "text-center mt-3",
                                            children: [(0, a.jsx)("img", {
                                                src: "/images/opbnb-chain-logo.svg",
                                                alt: "opBNB Logo",
                                                className: "w-52 min-w-0 object-contain inline-block "
                                            }), (0, a.jsx)("img", {
                                                src: "/images/bnb-chain-logo.svg",
                                                alt: "BNBCHAIN Logo",
                                                className: "w-52 min-w-0 object-contain inline-block "
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-10 text-center font-secondary font-semibold text-black md:text-lg lg:text-xl",
                                        children: ["Listed on", (0, a.jsxs)("div", {
                                            className: "mt-3 flex space-x-5 items-center",
                                            children: [(0, a.jsxs)("a", {
                                                href: "https://www.gate.io/tr/trade/F3_USDT",
                                                className: "relative group",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/images/gate-icon.svg",
                                                    alt: "Gate",
                                                    className: "w-25 min-w-0 object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "block absolute w-max p-2 border rounded bg-white top-full translate-y-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 text-sm",
                                                    children: "Gate.io"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://www.mexc.com/exchange/F3_USDT?_from=market",
                                                className: "relative group",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/images/mexc-icon.svg",
                                                    alt: "Mexc",
                                                    className: "w-26 min-w-0 object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "block absolute w-max p-2 border rounded bg-white top-full translate-y-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 text-sm",
                                                    children: "Mexc"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://www.bitget.com/tr/spot/F3USDT",
                                                className: "relative group",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/images/bg-icon.svg",
                                                    alt: "Bitget",
                                                    className: "w-25 h-12 min-w-0 object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "block absolute w-max p-2 border rounded bg-white top-full translate-y-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 text-sm",
                                                    children: "Bitget"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://pancakeswap.finance/swap?outputCurrency=0x9e57E83Ad79Ac5312Ba82940bA037ED30600e167&inputCurrency=0x55d398326f99059fF775485246999027B3197955",
                                                className: "relative group",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/images/pcs-icon.svg",
                                                    alt: "Pancakeswap",
                                                    className: "w-27 h-12 min-w-0 object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "block absolute w-max p-2 border rounded bg-white top-full translate-y-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 text-sm",
                                                    children: "Pancake"
                                                })]
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-12 text-center font-secondary font-semibold text-black md:text-lg lg:text-xl",
                                        children: ["Audited by", (0, a.jsxs)("div", {
                                            className: "mt-3 flex space-x-5",
                                            children: [(0, a.jsx)("a", {
                                                href: "https://github.com/Friend3-Group/PeckShield-Audit-Report-Friend3/blob/main/PeckShield-Audit-Report-Friend3.pdf",
                                                children: (0, a.jsx)("img", {
                                                    src: "/images/audited-by-peckshield.svg",
                                                    alt: "Peckshield",
                                                    className: "w-48 h-16 min-w-0 object-contain"
                                                })
                                            }), (0, a.jsx)("a", {
                                                href: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20Friend3%20Token%20-%20v1.0.pdf",
                                                children: (0, a.jsx)("img", {
                                                    src: "/images/verichains.svg",
                                                    alt: "Peckshield",
                                                    className: "w-44 min-w-0 object-contain"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: " textreveal-font justify-center ",
                            children: "Meet Friend3"
                        }), (0, a.jsx)("p", {
                            className: " textreveal-fontx ",
                            children: "Friend3 is a leading social dApp where anyone can make friends and profits in Web3. On Friend3, content creators receive direct financial incentives, marking the seamless integration of the creator economy with Web3."
                        }), (0, a.jsx)(P, {}), (0, a.jsx)(u, {}), (0, a.jsx)(y, {}), (0, a.jsx)("div", {
                            className: "site-container mt-10",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto md:max-w-5xl ",
                                children: [(0, a.jsx)("div", {
                                    className: "flex justify-center"
                                }), (0, a.jsxs)("h2", {
                                    className: "text-center text-[50px] font-semibold text-[#9326E9] md:text-3xl lg:text-4xl xl:text-5xl mt-10 ",
                                    children: ["Featured Partners", (0, a.jsx)("br", {})]
                                }), (0, a.jsx)("div", {
                                    className: " mt-10 grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]",
                                    children: t.map((function(e, t) {
                                        return (0, a.jsx)(c(), {
                                            passHref: !0,
                                            href: "/#",
                                            children: (0, a.jsx)(s.E.a, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 200
                                                },
                                                className: "flex flex-col items-center rounded-lg bg-purple-500 p-6",
                                                children: (0, a.jsx)("img", {
                                                    src: e.logoUrl,
                                                    alt: e.spaceName,
                                                    className: "block min-w-0 overflow-hidden rounded-full object-contain sm:h-30 sm:w-30"
                                                })
                                            })
                                        }, t)
                                    }))
                                })]
                            })
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [650, 287, 774, 888, 179], (function() {
            return t = 5557, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);