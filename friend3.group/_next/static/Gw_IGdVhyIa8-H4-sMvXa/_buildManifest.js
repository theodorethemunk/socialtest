self.__BUILD_MANIFEST = function(s, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/",
                destination: "/en"
            }, {
                source: "/space",
                destination: "/en/space"
            }, {
                source: "/space-detail",
                destination: "/en/space-detail"
            }],
            fallback: []
        },
        "/": [s, "static/chunks/287-49593b86fa5ede87.js", "static/chunks/pages/index-ab8b4a61b9ca5649.js"],
        "/_error": ["static/chunks/pages/_error-0a004b8b8498208d.js"],
        "/media-kit": [s, "static/chunks/pages/media-kit-7f6b19fc24252bfb.js"],
        "/partners": [s, "static/chunks/pages/partners-6b6873a4f38c48a1.js"],
        "/tutorial": ["static/chunks/pages/tutorial-2fd1f9893f889e81.js"],
        "/tutorial-epoch": ["static/chunks/pages/tutorial-epoch-96c1ba099790844e.js"],
        "/tutorial-investors": ["static/chunks/pages/tutorial-investors-ea404801dc1cd4ba.js"],
        "/verification": ["static/chunks/pages/verification-33a5bf25fa46429e.js"],
        sortedPages: ["/", "/_app", "/_error", "/media-kit", "/partners", "/tutorial", "/tutorial-epoch", "/tutorial-investors", "/verification"]
    }
}("static/chunks/650-b35ad4c7a46590ff.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();