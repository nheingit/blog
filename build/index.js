var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/highlight.js/styles/agate.css
var require_agate = __commonJS({
  "node_modules/highlight.js/styles/agate.css"(exports, module2) {
    module2.exports = "/build/_assets/agate-PBUQM6R2.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Noah\dev\blog\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/navbar.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var import_react = __toESM(require("react"));
var import_react_instantsearch_hooks2 = require("react-instantsearch-hooks");

// app/components/Hit.tsx
init_react();
var import_react_instantsearch_hooks = require("react-instantsearch-hooks");
function Hits({ hitComponent: Hit2 }) {
  const { hits } = (0, import_react_instantsearch_hooks.useHits)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "ais-Hits"
  }, /* @__PURE__ */ React.createElement("ol", {
    className: "ais-Hits-list"
  }, hits.map((hit) => /* @__PURE__ */ React.createElement("li", {
    key: hit.objectID,
    className: "ais-Hits-item"
  }, /* @__PURE__ */ React.createElement(Hit2, {
    hit: hit.title
  })))));
}
function Hit({ hit }) {
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h1", null, hit.title), /* @__PURE__ */ React.createElement("p", null, hit.description));
}

// app/components/navbar.tsx
var import_lite = __toESM(require("algoliasearch/lite"));
function SearchBox(props) {
  const { query, refine, isSearchStalled } = (0, import_react_instantsearch_hooks2.useSearchBox)(props);
  const [inputValue, setInputValue] = (0, import_react.useState)(query);
  const inputRef = (0, import_react.useRef)(null);
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }
  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  (0, import_react.useEffect)(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
  }, [inputValue, refine]);
  (0, import_react.useEffect)(() => {
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
  }, [query]);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "ais-SearchBox"
  }, /* @__PURE__ */ import_react.default.createElement("form", {
    action: "",
    className: "ais-SearchBox-form",
    noValidate: true,
    onSubmit: handleSubmit,
    onReset: handleReset
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    ref: inputRef,
    className: "ais-SearchBox-input",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder: "...search",
    spellCheck: false,
    maxLength: 512,
    type: "search",
    value: inputValue,
    onChange: (event) => setInputValue(event.currentTarget.value)
  })));
}
function Navbar() {
  const searchClient = (0, import_lite.default)("GC617R2XGC", "f7e9fa99847d55da0f06182f82281ba3");
  return /* @__PURE__ */ import_react.default.createElement(import_react_instantsearch_hooks2.InstantSearch, {
    searchClient,
    indexName: "Blog"
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-md dark:bg-gray-800"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container flex flex-wrap items-center justify-between mx-auto"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, {
    to: "/",
    className: "flex"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white"
  }, "NHeinDev")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex md:order-2"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative hidden mr-3 md:mr-0 md:block"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    className: "w-5 h-5 text-gray-500",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ import_react.default.createElement(SearchBox, null), /* @__PURE__ */ import_react.default.createElement(Hits, {
    hitComponent: Hit
  }), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    id: "email-adress-icon",
    className: "block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Search..."
  })), /* @__PURE__ */ import_react.default.createElement("button", {
    "data-collapse-toggle": "mobile-menu-3",
    type: "button",
    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "mobile-menu-3",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react.default.createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ import_react.default.createElement("svg", {
    className: "hidden w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
    id: "mobile-menu-3"
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
  }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, {
    to: "/blog",
    className: "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    "aria-current": "page"
  }, "Blog")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, {
    to: "/about",
    className: "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }, "About")))))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PFJSJGQ4.css";

// route:C:\Users\Noah\dev\blog\app\root.tsx
var meta = () => {
  return { title: "Noah's blog" };
};
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Noah's Blog"));
}

// route:C:\Users\Noah\dev\blog\app\routes\blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links2
});
init_react();
var import_agate = __toESM(require_agate());
var import_remix4 = __toESM(require_remix());
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: import_agate.default
    }
  ];
};
function Blog() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-10 prose lg:prose-xl"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\blog\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => PostSlug,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var React3 = __toESM(require("react"));

// app/utils/path.server.ts
init_react();
var path = require("path");
var fs = require("fs");

// app/utils/compile-mdx.server.ts
init_react();
var import_mdx_bundler = require("mdx-bundler");
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));

// node_modules/rehype-slug/index.js
init_react();
var import_github_slugger = __toESM(require("github-slugger"), 1);

// node_modules/hast-util-has-property/index.js
init_react();
var own = {}.hasOwnProperty;
function hasProperty(node, name) {
  var value = name && node && typeof node === "object" && node.type === "element" && node.properties && own.call(node.properties, name) && node.properties[name];
  return value !== null && value !== void 0 && value !== false;
}

// node_modules/hast-util-heading-rank/index.js
init_react();
function headingRank(node) {
  var name = node && node.type === "element" && node.tagName.toLowerCase() || "";
  var code = name.length === 2 && name.charCodeAt(0) === 104 ? name.charCodeAt(1) : 0;
  return code > 48 && code < 55 ? code - 48 : null;
}

// node_modules/rehype-slug/node_modules/hast-util-to-string/index.js
init_react();
function toString(node) {
  if ("children" in node) {
    return all(node);
  }
  return "value" in node ? node.value : "";
}
function one(node) {
  if (node.type === "text") {
    return node.value;
  }
  return "children" in node ? all(node) : "";
}
function all(node) {
  let index2 = -1;
  const result = [];
  while (++index2 < node.children.length) {
    result[index2] = one(node.children[index2]);
  }
  return result.join("");
}

// node_modules/rehype-slug/node_modules/unist-util-visit/index.js
init_react();

// node_modules/unist-util-visit-parents/index.js
init_react();

// node_modules/unist-util-is/index.js
init_react();
var convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all2);
  function all2(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}

// node_modules/unist-util-visit-parents/color.js
init_react();
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/index.js
var CONTINUE = true;
var SKIP = "skip";
var EXIT = false;
var visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit5, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit5;
    function visit5() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}

// node_modules/rehype-slug/node_modules/unist-util-visit/index.js
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/rehype-slug/index.js
var slugs = new import_github_slugger.default();
function rehypeSlug() {
  return (tree) => {
    slugs.reset();
    visit(tree, "element", (node) => {
      if (headingRank(node) && node.properties && !hasProperty(node, "id")) {
        node.properties.id = slugs.slug(toString(node));
      }
    });
  };
}

// node_modules/rehype-code-titles/index.js
init_react();

// node_modules/rehype-code-titles/node_modules/unist-util-visit/index.js
init_react();

// node_modules/rehype-code-titles/node_modules/unist-util-visit-parents/index.js
init_react();

// node_modules/rehype-code-titles/node_modules/unist-util-visit-parents/color.js
init_react();
function color2(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/rehype-code-titles/node_modules/unist-util-visit-parents/index.js
var CONTINUE2 = true;
var SKIP2 = "skip";
var EXIT2 = false;
var visitParents2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit5, "name", {
        value: "node (" + color2(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit5;
    function visit5() {
      var result = [];
      var subresult;
      var offset;
      var grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult2(visitor(node, parents));
        if (result[0] === EXIT2) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP2) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT2) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE2, value];
  }
  return [value];
}

// node_modules/rehype-code-titles/node_modules/unist-util-visit/index.js
var visit2 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents2(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/rehype-code-titles/index.js
function rehypeCodeTitles() {
  return (tree) => visit2(tree, "element", visitor);
  function visitor(node, index2, parent) {
    if (!parent || node.tagName !== "pre") {
      return;
    }
    const pre = node;
    const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;
    const className = code.properties.className || [];
    const updatedClassName = className.reduce((acc, cls) => {
      if (cls.includes(":")) {
        const [langClassName, title] = cls.split(":");
        parent.children.splice(index2, 0, {
          children: [{ type: "text", value: title }],
          properties: { className: ["rehype-code-title"] },
          tagName: "div",
          type: "element"
        });
        acc.push(langClassName);
        return acc;
      }
      if (cls.slice(0, 9) === "language-") {
        acc.push(cls);
        return acc;
      }
      return acc;
    }, []);
    pre.children = [__spreadProps(__spreadValues({}, code), { properties: { className: updatedClassName } })];
  }
}
var rehype_code_titles_default = rehypeCodeTitles;

// node_modules/rehype-autolink-headings/index.js
init_react();

// node_modules/rehype-autolink-headings/lib/index.js
init_react();
var import_extend = __toESM(require("extend"), 1);

// node_modules/hast-util-is-element/index.js
init_react();
var convertElement = function(test) {
  if (test === void 0 || test === null) {
    return element;
  }
  if (typeof test === "string") {
    return tagNameFactory(test);
  }
  if (typeof test === "object") {
    return anyFactory2(test);
  }
  if (typeof test === "function") {
    return castFactory2(test);
  }
  throw new Error("Expected function, string, or array as test");
};
function anyFactory2(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convertElement(tests[index2]);
  }
  return castFactory2(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters)) {
        return true;
      }
    }
    return false;
  }
}
function tagNameFactory(check) {
  return tagName;
  function tagName(node) {
    return element(node) && node.tagName === check;
  }
}
function castFactory2(check) {
  return assertion;
  function assertion(node, ...parameters) {
    return element(node) && Boolean(check.call(this, node, ...parameters));
  }
}
function element(node) {
  return Boolean(node && typeof node === "object" && node.type === "element" && typeof node.tagName === "string");
}

// node_modules/rehype-autolink-headings/node_modules/unist-util-visit/index.js
init_react();
var visit3 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/rehype-autolink-headings/lib/index.js
var contentDefaults = {
  type: "element",
  tagName: "span",
  properties: { className: ["icon", "icon-link"] },
  children: []
};
function rehypeAutolinkHeadings(options = {}) {
  let props = options.properties;
  const behavior = options.behaviour || options.behavior || "prepend";
  const content = options.content || contentDefaults;
  const group = options.group;
  const is = convertElement(options.test);
  let method;
  if (behavior === "wrap") {
    method = wrap;
  } else if (behavior === "before" || behavior === "after") {
    method = around;
  } else {
    if (!props) {
      props = { ariaHidden: "true", tabIndex: -1 };
    }
    method = inject;
  }
  return (tree) => {
    visit3(tree, "element", (node, index2, parent) => {
      if (headingRank(node) && hasProperty(node, "id") && is(node, index2, parent)) {
        return method(node, index2, parent);
      }
    });
  };
  function inject(node) {
    node.children[behavior === "prepend" ? "unshift" : "push"](create2(node, (0, import_extend.default)(true, {}, props), toChildren(content, node)));
    return [SKIP];
  }
  function around(node, index2, parent) {
    if (typeof index2 !== "number" || !parent)
      return;
    const link = create2(node, (0, import_extend.default)(true, {}, props), toChildren(content, node));
    let nodes = behavior === "before" ? [link, node] : [node, link];
    if (group) {
      const grouping = toNode(group, node);
      if (grouping && !Array.isArray(grouping) && grouping.type === "element") {
        grouping.children = nodes;
        nodes = [grouping];
      }
    }
    parent.children.splice(index2, 1, ...nodes);
    return [SKIP, index2 + nodes.length];
  }
  function wrap(node) {
    node.children = [create2(node, (0, import_extend.default)(true, {}, props), node.children)];
    return [SKIP];
  }
  function toChildren(value, node) {
    const result = toNode(value, node);
    return Array.isArray(result) ? result : [result];
  }
  function toNode(value, node) {
    if (typeof value === "function")
      return value(node);
    return (0, import_extend.default)(true, Array.isArray(value) ? [] : {}, value);
  }
  function create2(node, props2, children) {
    return {
      type: "element",
      tagName: "a",
      properties: Object.assign({}, props2, {
        href: "#" + (node.properties || {}).id
      }),
      children
    };
  }
}

// node_modules/rehype-highlight/index.js
init_react();

// node_modules/rehype-highlight/lib/index.js
init_react();

// node_modules/lowlight/index.js
init_react();

// node_modules/lowlight/lib/common.js
init_react();
var import_arduino = __toESM(require("highlight.js/lib/languages/arduino"), 1);
var import_bash = __toESM(require("highlight.js/lib/languages/bash"), 1);
var import_c = __toESM(require("highlight.js/lib/languages/c"), 1);
var import_cpp = __toESM(require("highlight.js/lib/languages/cpp"), 1);
var import_csharp = __toESM(require("highlight.js/lib/languages/csharp"), 1);
var import_css = __toESM(require("highlight.js/lib/languages/css"), 1);
var import_diff = __toESM(require("highlight.js/lib/languages/diff"), 1);
var import_go = __toESM(require("highlight.js/lib/languages/go"), 1);
var import_ini = __toESM(require("highlight.js/lib/languages/ini"), 1);
var import_java = __toESM(require("highlight.js/lib/languages/java"), 1);
var import_javascript = __toESM(require("highlight.js/lib/languages/javascript"), 1);
var import_json = __toESM(require("highlight.js/lib/languages/json"), 1);
var import_kotlin = __toESM(require("highlight.js/lib/languages/kotlin"), 1);
var import_less = __toESM(require("highlight.js/lib/languages/less"), 1);
var import_lua = __toESM(require("highlight.js/lib/languages/lua"), 1);
var import_makefile = __toESM(require("highlight.js/lib/languages/makefile"), 1);
var import_markdown = __toESM(require("highlight.js/lib/languages/markdown"), 1);
var import_objectivec = __toESM(require("highlight.js/lib/languages/objectivec"), 1);
var import_perl = __toESM(require("highlight.js/lib/languages/perl"), 1);
var import_php = __toESM(require("highlight.js/lib/languages/php"), 1);
var import_php_template = __toESM(require("highlight.js/lib/languages/php-template"), 1);
var import_plaintext = __toESM(require("highlight.js/lib/languages/plaintext"), 1);
var import_python = __toESM(require("highlight.js/lib/languages/python"), 1);
var import_python_repl = __toESM(require("highlight.js/lib/languages/python-repl"), 1);
var import_r = __toESM(require("highlight.js/lib/languages/r"), 1);
var import_ruby = __toESM(require("highlight.js/lib/languages/ruby"), 1);
var import_rust = __toESM(require("highlight.js/lib/languages/rust"), 1);
var import_scss = __toESM(require("highlight.js/lib/languages/scss"), 1);
var import_shell = __toESM(require("highlight.js/lib/languages/shell"), 1);
var import_sql = __toESM(require("highlight.js/lib/languages/sql"), 1);
var import_swift = __toESM(require("highlight.js/lib/languages/swift"), 1);
var import_typescript = __toESM(require("highlight.js/lib/languages/typescript"), 1);
var import_vbnet = __toESM(require("highlight.js/lib/languages/vbnet"), 1);
var import_xml = __toESM(require("highlight.js/lib/languages/xml"), 1);
var import_yaml = __toESM(require("highlight.js/lib/languages/yaml"), 1);

// node_modules/lowlight/lib/core.js
init_react();
var import_core = __toESM(require("highlight.js/lib/core"), 1);

// node_modules/fault/index.js
init_react();
var import_format = __toESM(require("format"), 1);
var fault = Object.assign(create(Error), {
  eval: create(EvalError),
  range: create(RangeError),
  reference: create(ReferenceError),
  syntax: create(SyntaxError),
  type: create(TypeError),
  uri: create(URIError)
});
function create(Constructor) {
  FormattedError.displayName = Constructor.displayName || Constructor.name;
  return FormattedError;
  function FormattedError(format, ...values) {
    const reason = format ? (0, import_format.default)(format, ...values) : format;
    return new Constructor(reason);
  }
}

// node_modules/lowlight/lib/core.js
var own2 = {}.hasOwnProperty;
var defaultPrefix = "hljs-";
function highlight(language2, value, options = {}) {
  let prefix = options.prefix;
  if (typeof language2 !== "string") {
    throw fault("Expected `string` for name, got `%s`", language2);
  }
  if (!import_core.default.getLanguage(language2)) {
    throw fault("Unknown language: `%s` is not registered", language2);
  }
  if (typeof value !== "string") {
    throw fault("Expected `string` for value, got `%s`", value);
  }
  if (prefix === null || prefix === void 0) {
    prefix = defaultPrefix;
  }
  import_core.default.configure({ __emitter: HastEmitter, classPrefix: prefix });
  const result = import_core.default.highlight(value, { language: language2, ignoreIllegals: true });
  import_core.default.configure({});
  if (result.errorRaised) {
    throw result.errorRaised;
  }
  result._emitter.root.data.language = result.language;
  result._emitter.root.data.relevance = result.relevance;
  return result._emitter.root;
}
function highlightAuto(value, options = {}) {
  const subset = options.subset || import_core.default.listLanguages();
  let prefix = options.prefix;
  let index2 = -1;
  let result = {
    type: "root",
    data: { language: null, relevance: 0 },
    children: []
  };
  if (prefix === null || prefix === void 0) {
    prefix = defaultPrefix;
  }
  if (typeof value !== "string") {
    throw fault("Expected `string` for value, got `%s`", value);
  }
  while (++index2 < subset.length) {
    const name = subset[index2];
    if (!import_core.default.getLanguage(name))
      continue;
    const current = highlight(name, value, options);
    if (current.data.relevance > result.data.relevance)
      result = current;
  }
  return result;
}
function registerLanguage(language2, syntax) {
  import_core.default.registerLanguage(language2, syntax);
}
var registerAlias = function(language2, alias) {
  if (typeof language2 === "string") {
    import_core.default.registerAliases(alias, { languageName: language2 });
  } else {
    let key;
    for (key in language2) {
      if (own2.call(language2, key)) {
        import_core.default.registerAliases(language2[key], { languageName: key });
      }
    }
  }
};
function registered(aliasOrLanguage) {
  return Boolean(import_core.default.getLanguage(aliasOrLanguage));
}
function listLanguages() {
  return import_core.default.listLanguages();
}
var HastEmitter = class {
  constructor(options) {
    this.options = options;
    this.root = {
      type: "root",
      data: { language: null, relevance: 0 },
      children: []
    };
    this.stack = [this.root];
  }
  addText(value) {
    if (value === "")
      return;
    const current = this.stack[this.stack.length - 1];
    const tail = current.children[current.children.length - 1];
    if (tail && tail.type === "text") {
      tail.value += value;
    } else {
      current.children.push({ type: "text", value });
    }
  }
  addKeyword(value, name) {
    this.openNode(name);
    this.addText(value);
    this.closeNode();
  }
  addSublanguage(other, name) {
    const current = this.stack[this.stack.length - 1];
    const results = other.root.children;
    if (name) {
      current.children.push({
        type: "element",
        tagName: "span",
        properties: { className: [name] },
        children: results
      });
    } else {
      current.children.push(...results);
    }
  }
  openNode(name) {
    const className = name.split(".").map((d) => this.options.classPrefix + d);
    const current = this.stack[this.stack.length - 1];
    const child = {
      type: "element",
      tagName: "span",
      properties: { className },
      children: []
    };
    current.children.push(child);
    this.stack.push(child);
  }
  closeNode() {
    this.stack.pop();
  }
  closeAllNodes() {
  }
  finalize() {
  }
  toHTML() {
    return "";
  }
};
var lowlight = {
  highlight,
  highlightAuto,
  registerLanguage,
  registered,
  listLanguages,
  registerAlias
};

// node_modules/lowlight/lib/common.js
lowlight.registerLanguage("arduino", import_arduino.default);
lowlight.registerLanguage("bash", import_bash.default);
lowlight.registerLanguage("c", import_c.default);
lowlight.registerLanguage("cpp", import_cpp.default);
lowlight.registerLanguage("csharp", import_csharp.default);
lowlight.registerLanguage("css", import_css.default);
lowlight.registerLanguage("diff", import_diff.default);
lowlight.registerLanguage("go", import_go.default);
lowlight.registerLanguage("ini", import_ini.default);
lowlight.registerLanguage("java", import_java.default);
lowlight.registerLanguage("javascript", import_javascript.default);
lowlight.registerLanguage("json", import_json.default);
lowlight.registerLanguage("kotlin", import_kotlin.default);
lowlight.registerLanguage("less", import_less.default);
lowlight.registerLanguage("lua", import_lua.default);
lowlight.registerLanguage("makefile", import_makefile.default);
lowlight.registerLanguage("markdown", import_markdown.default);
lowlight.registerLanguage("objectivec", import_objectivec.default);
lowlight.registerLanguage("perl", import_perl.default);
lowlight.registerLanguage("php", import_php.default);
lowlight.registerLanguage("php-template", import_php_template.default);
lowlight.registerLanguage("plaintext", import_plaintext.default);
lowlight.registerLanguage("python", import_python.default);
lowlight.registerLanguage("python-repl", import_python_repl.default);
lowlight.registerLanguage("r", import_r.default);
lowlight.registerLanguage("ruby", import_ruby.default);
lowlight.registerLanguage("rust", import_rust.default);
lowlight.registerLanguage("scss", import_scss.default);
lowlight.registerLanguage("shell", import_shell.default);
lowlight.registerLanguage("sql", import_sql.default);
lowlight.registerLanguage("swift", import_swift.default);
lowlight.registerLanguage("typescript", import_typescript.default);
lowlight.registerLanguage("vbnet", import_vbnet.default);
lowlight.registerLanguage("xml", import_xml.default);
lowlight.registerLanguage("yaml", import_yaml.default);

// node_modules/hast-util-to-text/index.js
init_react();

// node_modules/unist-util-find-after/index.js
init_react();
var findAfter = function(parent, index2, test) {
  var is = convert(test);
  if (!parent || !parent.type || !parent.children) {
    throw new Error("Expected parent node");
  }
  if (typeof index2 === "number") {
    if (index2 < 0 || index2 === Number.POSITIVE_INFINITY) {
      throw new Error("Expected positive finite number as index");
    }
  } else {
    index2 = parent.children.indexOf(index2);
    if (index2 < 0) {
      throw new Error("Expected child node or index");
    }
  }
  while (++index2 < parent.children.length) {
    if (is(parent.children[index2], index2, parent)) {
      return parent.children[index2];
    }
  }
  return null;
};

// node_modules/hast-util-to-text/index.js
var searchLineFeeds = /\n/g;
var searchTabOrSpaces = /[\t ]+/g;
var br = convertElement("br");
var p = convertElement("p");
var cell = convertElement(["th", "td"]);
var row = convertElement("tr");
var notRendered = convertElement([
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  "rp",
  "script",
  "style",
  "template",
  "title",
  hidden,
  closedDialog
]);
var blockOrCaption = convertElement([
  "address",
  "article",
  "aside",
  "blockquote",
  "body",
  "caption",
  "center",
  "dd",
  "dialog",
  "dir",
  "dl",
  "dt",
  "div",
  "figure",
  "figcaption",
  "footer",
  "form,",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "html",
  "legend",
  "listing",
  "main",
  "menu",
  "nav",
  "ol",
  "p",
  "plaintext",
  "pre",
  "section",
  "ul",
  "xmp"
]);
function toText(node, options = {}) {
  const children = node.children || [];
  const block = blockOrCaption(node);
  const whitespace = inferWhitespace(node, {
    whitespace: options.whitespace || "normal",
    breakBefore: false,
    breakAfter: false
  });
  let index2 = -1;
  let results;
  let value;
  let count;
  if (node.type === "text" || node.type === "comment") {
    return collectText(node, { whitespace, breakBefore: true, breakAfter: true });
  }
  results = [];
  while (++index2 < children.length) {
    results = results.concat(innerTextCollection(children[index2], node, {
      whitespace,
      breakBefore: index2 ? null : block,
      breakAfter: index2 < children.length - 1 ? br(children[index2 + 1]) : block
    }));
  }
  index2 = -1;
  const result = [];
  while (++index2 < results.length) {
    value = results[index2];
    if (typeof value === "number") {
      if (count !== void 0 && value > count)
        count = value;
    } else if (value) {
      if (count)
        result.push("\n".repeat(count));
      count = 0;
      result.push(value);
    }
  }
  return result.join("");
}
function innerTextCollection(node, parent, options) {
  if (node.type === "element") {
    return collectElement(node, parent, options);
  }
  if (node.type === "text") {
    return [
      options.whitespace === "normal" ? collectText(node, options) : collectPreText(node)
    ];
  }
  return [];
}
function collectElement(node, parent, options) {
  const whitespace = inferWhitespace(node, options);
  const children = node.children || [];
  let index2 = -1;
  let items = [];
  let prefix;
  let suffix;
  if (notRendered(node)) {
    return items;
  }
  if (br(node)) {
    suffix = "\n";
  } else if (row(node) && findAfter(parent, node, row)) {
    suffix = "\n";
  } else if (p(node)) {
    prefix = 2;
    suffix = 2;
  } else if (blockOrCaption(node)) {
    prefix = 1;
    suffix = 1;
  }
  while (++index2 < children.length) {
    items = items.concat(innerTextCollection(children[index2], node, {
      whitespace,
      breakBefore: index2 ? void 0 : prefix,
      breakAfter: index2 < children.length - 1 ? br(children[index2 + 1]) : suffix
    }));
  }
  if (cell(node) && findAfter(parent, node, cell)) {
    items.push("	");
  }
  if (prefix)
    items.unshift(prefix);
  if (suffix)
    items.push(suffix);
  return items;
}
function collectText(node, options) {
  const value = String(node.value);
  const lines = [];
  const result = [];
  let start = 0;
  let index2 = -1;
  let match;
  let end;
  let join;
  while (start < value.length) {
    searchLineFeeds.lastIndex = start;
    match = searchLineFeeds.exec(value);
    end = match ? match.index : value.length;
    lines.push(trimAndCollapseSpacesAndTabs(value.slice(start, end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), options.breakBefore, options.breakAfter));
    start = end + 1;
  }
  while (++index2 < lines.length) {
    if (lines[index2].charCodeAt(lines[index2].length - 1) === 8203 || index2 < lines.length - 1 && lines[index2 + 1].charCodeAt(0) === 8203) {
      result.push(lines[index2]);
      join = "";
    } else if (lines[index2]) {
      if (join)
        result.push(join);
      result.push(lines[index2]);
      join = " ";
    }
  }
  return result.join("");
}
function collectPreText(node) {
  return String(node.value);
}
function trimAndCollapseSpacesAndTabs(value, breakBefore, breakAfter) {
  const result = [];
  let start = 0;
  let match;
  let end;
  while (start < value.length) {
    searchTabOrSpaces.lastIndex = start;
    match = searchTabOrSpaces.exec(value);
    end = match ? match.index : value.length;
    if (!start && !end && match && !breakBefore) {
      result.push("");
    }
    if (start !== end) {
      result.push(value.slice(start, end));
    }
    start = match ? end + match[0].length : end;
  }
  if (start !== end && !breakAfter) {
    result.push("");
  }
  return result.join(" ");
}
function inferWhitespace(node, options) {
  let props;
  if (node.type === "element") {
    props = node.properties || {};
    switch (node.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return props.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return props.noWrap ? "nowrap" : options.whitespace;
      case "textarea":
        return "pre-wrap";
      default:
    }
  }
  return options.whitespace;
}
function hidden(node) {
  return Boolean((node.properties || {}).hidden);
}
function closedDialog(node) {
  return node.tagName === "dialog" && !(node.properties || {}).open;
}

// node_modules/rehype-highlight/node_modules/unist-util-visit/index.js
init_react();
var visit4 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/rehype-highlight/lib/index.js
var own3 = {}.hasOwnProperty;
function rehypeHighlight(options = {}) {
  const { aliases, languages, prefix, plainText, ignoreMissing, subset } = options;
  let name = "hljs";
  if (aliases) {
    lowlight.registerAlias(aliases);
  }
  if (languages) {
    let key;
    for (key in languages) {
      if (own3.call(languages, key)) {
        lowlight.registerLanguage(key, languages[key]);
      }
    }
  }
  if (prefix) {
    const pos = prefix.indexOf("-");
    name = pos > -1 ? prefix.slice(0, pos) : prefix;
  }
  return (tree) => {
    visit4(tree, "element", (node, _, givenParent) => {
      const parent = givenParent;
      if (!parent || !("tagName" in parent) || parent.tagName !== "pre" || node.tagName !== "code" || !node.properties) {
        return;
      }
      const lang = language(node);
      if (lang === false || !lang && subset === false || lang && plainText && plainText.includes(lang)) {
        return;
      }
      if (!Array.isArray(node.properties.className)) {
        node.properties.className = [];
      }
      if (!node.properties.className.includes(name)) {
        node.properties.className.unshift(name);
      }
      let result;
      try {
        result = lang ? lowlight.highlight(lang, toText(parent), { prefix }) : lowlight.highlightAuto(toText(parent), { prefix, subset });
      } catch (error) {
        const exception = error;
        if (!ignoreMissing || !/Unknown language/.test(exception.message)) {
          throw error;
        }
        return;
      }
      if (!lang && result.data.language) {
        node.properties.className.push("language-" + result.data.language);
      }
      if (Array.isArray(result.children) && result.children.length > 0) {
        node.children = result.children;
      }
    });
  };
}
function language(node) {
  const className = node.properties && node.properties.className;
  let index2 = -1;
  if (!Array.isArray(className)) {
    return;
  }
  while (++index2 < className.length) {
    const value = String(className[index2]);
    if (value === "no-highlight" || value === "nohighlight") {
      return false;
    }
    if (value.slice(0, 5) === "lang-") {
      return value.slice(5);
    }
    if (value.slice(0, 9) === "language-") {
      return value.slice(9);
    }
  }
}

// app/utils/compile-mdx.server.ts
var import_mdx_bundler2 = require("mdx-bundler");

// route:C:\Users\Noah\dev\blog\app\routes\blog\$slug.tsx
var loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  const PathToMDX = path.join(process.cwd(), "posts", `${params.slug}`, "index.mdx");
  const rootDir = PathToMDX.replace(/index.mdx?$/, "");
  try {
    const result = await (0, import_mdx_bundler2.bundleMDX)({
      source: fs.readFileSync(PathToMDX, "utf8"),
      cwd: rootDir,
      xdmOptions(options) {
        options.rehypePlugins = [
          ...(options == null ? void 0 : options.rehypePlugins) ?? [],
          rehypeHighlight,
          rehypeSlug,
          rehype_code_titles_default,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"]
              }
            }
          ]
        ];
        return options;
      }
    });
    if (!result)
      return null;
    const { code, frontmatter } = result;
    return { code, frontmatter };
  } catch (error) {
    throw new Error(`Didn't find any blog post at blog/${params.slug}`);
  }
};
function PostSlug() {
  const { code, frontmatter } = (0, import_remix5.useLoaderData)();
  const Component = React3.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("header", null, /* @__PURE__ */ React3.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React3.createElement("p", null, frontmatter.description)), /* @__PURE__ */ React3.createElement("main", null, /* @__PURE__ */ React3.createElement(Component, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React3.createElement("html", null, /* @__PURE__ */ React3.createElement("head", null, /* @__PURE__ */ React3.createElement("title", null, "Oh no!"), /* @__PURE__ */ React3.createElement(import_remix5.Meta, null), /* @__PURE__ */ React3.createElement(import_remix5.Links, null)), /* @__PURE__ */ React3.createElement("body", null, /* @__PURE__ */ React3.createElement("h1", null, "Whoops! Looks like you found an error. Sorry about that :("), /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("strong", null, "Error message:"), " ", error.message)), /* @__PURE__ */ React3.createElement(import_remix5.Scripts, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\blog\index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/utils/algolia.ts
init_react();
var import_algoliasearch = __toESM(require("algoliasearch"));
var client = (0, import_algoliasearch.default)("GC617R2XGC", "3faa971a4155083509d1bb991df7d514");
var index = client.initIndex("Blog");
function saveObjectInAlgolia(obj) {
  if (!("objectID" in obj))
    return null;
  index.saveObject(obj);
}

// route:C:\Users\Noah\dev\blog\app\routes\blog\index.tsx
var getDirectories = (source) => fs.readdirSync(source, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
var loader2 = async () => {
  const PathToPosts = path.join(process.cwd(), "posts");
  const postDirs = await getDirectories(PathToPosts);
  const postFrontmatter = postDirs.map(async (postTitle) => {
    const PathToMDX = path.join(process.cwd(), "posts", `${postTitle}`, "index.mdx");
    const rootDir = PathToMDX.replace(/index.mdx?$/, "");
    const result = await (0, import_mdx_bundler2.bundleMDX)({
      source: fs.readFileSync(PathToMDX, "utf8"),
      cwd: rootDir
    });
    if (!result)
      return null;
    saveObjectInAlgolia(__spreadProps(__spreadValues({ objectID: postTitle }, result.frontmatter), { content: result.matter.content }));
    return __spreadProps(__spreadValues({}, result.frontmatter), { slug: postTitle });
  });
  return Promise.all(postFrontmatter);
};
function BlogIndex() {
  const posts = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: post.slug
  }, post.title)))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9a401a5b", "entry": { "module": "/build/entry.client-LOUXGTIO.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-A6EN5P3A.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YZB5ILPF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-XY6F3DYL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "routes/blog", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-AE3OWMLC.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-T7VDJKWM.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VDFEUDBY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9A401A5B.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcTm9haFxcZGV2XFxibG9nXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGl0LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGJsb2cudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcTm9haFxcZGV2XFxibG9nXFxhcHBcXHJvdXRlc1xcYmxvZ1xcJHNsdWcudHN4IiwgIi4uL2FwcC91dGlscy9wYXRoLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvY29tcGlsZS1tZHguc2VydmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtc2x1Zy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhlYWRpbmctcmFuay9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLXNsdWcvbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1zbHVnL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb2xvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtY29kZS10aXRsZXMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1jb2RlLXRpdGxlcy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtY29kZS10aXRsZXMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb2xvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaXMtZWxlbWVudC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtaGlnaGxpZ2h0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtaGlnaGxpZ2h0L2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG93bGlnaHQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2xpZ2h0L2xpYi9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2xpZ2h0L2xpYi9jb3JlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9mYXVsdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLXRleHQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtZmluZC1hZnRlci9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGJsb2dcXGluZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvYWxnb2xpYS50cyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxOb2FoXFxcXGRldlxcXFxibG9nXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYmxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGJsb2dcXFxcJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXHJvdXRlc1xcXFxibG9nXFxcXGluZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGlua3MsIExpbmtzRnVuY3Rpb24sIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgSW5zdGFudFNlYXJjaCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtaG9va3MnO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWlsd2luZC5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4geyB0aXRsZTogXCJOb2FoJ3MgYmxvZ1wiIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIFsgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0gXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XHJcblx0XHRcdDxoZWFkPlxyXG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG5cdFx0XHRcdDxNZXRhIC8+XHJcblx0XHRcdFx0PExpbmtzIC8+XHJcblx0XHRcdDwvaGVhZD5cclxuXHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0PE5hdmJhciAvPlxyXG5cdFx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxyXG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdCk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEluc3RhbnRTZWFyY2gsIHVzZVNlYXJjaEJveCwgVXNlU2VhcmNoQm94UHJvcHMgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWhvb2tzJztcclxuXHJcbmltcG9ydCB7IEhpdHMsIEhpdCB9IGZyb20gJy4vSGl0JztcclxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaEJveFByb3BzID0gVXNlU2VhcmNoQm94UHJvcHM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQm94KHByb3BzOiBTZWFyY2hCb3hQcm9wcykge1xyXG5cdGNvbnN0IHsgcXVlcnksIHJlZmluZSwgaXNTZWFyY2hTdGFsbGVkIH0gPSB1c2VTZWFyY2hCb3gocHJvcHMpO1xyXG5cdGNvbnN0IFsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSBdID0gdXNlU3RhdGUocXVlcnkpO1xyXG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XHJcblx0XHRcdGlucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlUmVzZXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdHNldElucHV0VmFsdWUoJycpO1xyXG5cclxuXHRcdGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XHJcblx0XHRcdGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFRyYWNrIHdoZW4gdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSBSZWFjdCBzdGF0ZSBjaGFuZ2VzIHRvIHN5bmNocm9uaXplXHJcblx0Ly8gaXQgd2l0aCBJbnN0YW50U2VhcmNoLlxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSBpbnB1dFZhbHVlKSB7XHJcblx0XHRcdFx0cmVmaW5lKGlucHV0VmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0WyBpbnB1dFZhbHVlLCByZWZpbmUgXVxyXG5cdCk7XHJcblxyXG5cdC8vIFRyYWNrIHdoZW4gdGhlIEluc3RhbnRTZWFyY2ggcXVlcnkgY2hhbmdlcyB0byBzeW5jaHJvbml6ZSBpdCB3aXRoXHJcblx0Ly8gdGhlIFJlYWN0IHN0YXRlLlxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0Ly8gQnlwYXNzIHRoZSBzdGF0ZSB1cGRhdGUgaWYgdGhlIGlucHV0IGlzIGZvY3VzZWQgdG8gYXZvaWQgY29uY3VycmVudFxyXG5cdFx0XHQvLyB1cGRhdGVzIHdoZW4gdHlwaW5nLlxyXG5cdFx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRSZWYuY3VycmVudCAmJiBxdWVyeSAhPT0gaW5wdXRWYWx1ZSkge1xyXG5cdFx0XHRcdHNldElucHV0VmFsdWUocXVlcnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0WyBxdWVyeSBdXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYWlzLVNlYXJjaEJveFwiPlxyXG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJhaXMtU2VhcmNoQm94LWZvcm1cIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG9uUmVzZXQ9e2hhbmRsZVJlc2V0fT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHJlZj17aW5wdXRSZWZ9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhaXMtU2VhcmNoQm94LWlucHV0XCJcclxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Jy4uLnNlYXJjaCd9XHJcblx0XHRcdFx0XHRzcGVsbENoZWNrPXtmYWxzZX1cclxuXHRcdFx0XHRcdG1heExlbmd0aD17NTEyfVxyXG5cdFx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRWYWx1ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cdGNvbnN0IHNlYXJjaENsaWVudCA9IGFsZ29saWFzZWFyY2goJ0dDNjE3UjJYR0MnLCAnZjdlOWZhOTk4NDdkNTVkYTBmMDYxODJmODIyODFiYTMnKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEluc3RhbnRTZWFyY2ggc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9IGluZGV4TmFtZT1cIkJsb2dcIj5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgcHgtMiBzbTpweC00IHB5LTIuNSByb3VuZGVkLWItbWQgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0b1wiPlxyXG5cdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0TkhlaW5EZXZcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOm9yZGVyLTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbXItMyBtZDptci0wIG1kOmJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN2Z1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8U2VhcmNoQm94IC8+XHJcblx0XHRcdFx0XHRcdFx0PEhpdHMgaGl0Q29tcG9uZW50PXtIaXR9IC8+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cImVtYWlsLWFkcmVzcy1pY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTIgcGwtMTAgdGV4dC1ncmF5LTkwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBzbTp0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGRhdGEtY29sbGFwc2UtdG9nZ2xlPVwibW9iaWxlLW1lbnUtM1wiXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCByb3VuZGVkLWxnIG1kOmhpZGRlbiBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCJcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnUtM1wiXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiXHJcblx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoaWRkZW4gdy02IGgtNlwiXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHctZnVsbCBtZDpmbGV4IG1kOnctYXV0byBtZDpvcmRlci0xXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJtb2JpbGUtbWVudS0zXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggbWQ6bXQtMCBtZDp0ZXh0LXNtIG1kOmZvbnQtbWVkaXVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCIvYmxvZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcGwtMyBwci00IHRleHQtZ3JheS03MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNTAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgbWQ6ZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEJsb2dcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwiL2Fib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgdGV4dC1ncmF5LTcwMCBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgaG92ZXI6YmctZ3JheS01MCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBtZDpkYXJrOmhvdmVyOnRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBYm91dFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQ8L0luc3RhbnRTZWFyY2g+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgTmF2YmFyIH07XHJcbiIsICJpbXBvcnQgeyBIaXQgYXMgQWxnb2xpYUhpdCB9IGZyb20gJ0BhbGdvbGlhL2NsaWVudC1zZWFyY2gnO1xyXG5pbXBvcnQgeyB1c2VIaXRzLCBVc2VIaXRzUHJvcHMgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWhvb2tzJztcclxuXHJcbmV4cG9ydCB0eXBlIEhpdHNQcm9wczxUSGl0PiA9IFJlYWN0LkNvbXBvbmVudFByb3BzPCdkaXYnPiAmXHJcblx0VXNlSGl0c1Byb3BzICYge1xyXG5cdFx0aGl0Q29tcG9uZW50OiAocHJvcHM6IHsgaGl0OiBUSGl0IH0pID0+IEpTWC5FbGVtZW50O1xyXG5cdH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGl0czxUSGl0IGV4dGVuZHMgQWxnb2xpYUhpdDxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4+KHsgaGl0Q29tcG9uZW50OiBIaXQgfTogSGl0c1Byb3BzPFRIaXQ+KSB7XHJcblx0Y29uc3QgeyBoaXRzIH0gPSB1c2VIaXRzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFpcy1IaXRzXCI+XHJcblx0XHRcdDxvbCBjbGFzc05hbWU9XCJhaXMtSGl0cy1saXN0XCI+XHJcblx0XHRcdFx0e2hpdHMubWFwKChoaXQpID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e2hpdC5vYmplY3RJRH0gY2xhc3NOYW1lPVwiYWlzLUhpdHMtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8SGl0IGhpdD17KGhpdC50aXRsZSBhcyB1bmtub3duKSBhcyBUSGl0fSAvPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9vbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIaXQoeyBoaXQgfTogeyBoaXQ6IGFueSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxhcnRpY2xlPlxyXG5cdFx0XHQ8aDE+e2hpdC50aXRsZX08L2gxPlxyXG5cdFx0XHQ8cD57aGl0LmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdDwvYXJ0aWNsZT5cclxuXHQpO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxyXG4gICAgICA8aDE+Tm9haCdzIEJsb2c8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICdoaWdobGlnaHQuanMvc3R5bGVzL2FnYXRlLmNzcyc7XHJcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE91dGxldCB9IGZyb20gJ3JlbWl4JztcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0e1xyXG5cdFx0XHRyZWw6ICdzdHlsZXNoZWV0JyxcclxuXHRcdFx0aHJlZjogc3R5bGVzXHJcblx0XHR9XHJcblx0XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHByb3NlIGxnOnByb3NlLXhsXCI+XHJcblx0XHRcdFx0PE91dGxldCAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMb2FkZXJGdW5jdGlvbiwgTWV0YSwgU2NyaXB0cywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xyXG5pbXBvcnQgeyBnZXRNRFhDb21wb25lbnQgfSBmcm9tIFwibWR4LWJ1bmRsZXIvY2xpZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXRoLCBmcyB9IGZyb20gXCJ+L3V0aWxzL3BhdGguc2VydmVyXCI7XHJcbmltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJ+L3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlclwiO1xyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tIFwicmVoeXBlLXNsdWdcIjtcclxuaW1wb3J0IHJlaHlwZUNvZGVUaXRsZXMgZnJvbSBcInJlaHlwZS1jb2RlLXRpdGxlc1wiO1xyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tIFwicmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzXCI7XHJcbmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSBcInJlaHlwZS1oaWdobGlnaHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XHJcbiAgY29uc3QgUGF0aFRvTURYID0gcGF0aC5qb2luKFxyXG4gICAgcHJvY2Vzcy5jd2QoKSxcclxuICAgIFwicG9zdHNcIixcclxuICAgIGAke3BhcmFtcy5zbHVnfWAsXHJcbiAgICBcImluZGV4Lm1keFwiXHJcbiAgKTtcclxuICBjb25zdCByb290RGlyID0gUGF0aFRvTURYLnJlcGxhY2UoL2luZGV4Lm1keD8kLywgXCJcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XHJcbiAgICAgIHNvdXJjZTogZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgXCJ1dGY4XCIpLFxyXG4gICAgICBjd2Q6IHJvb3REaXIsXHJcbiAgICAgIHhkbU9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMucmVoeXBlUGx1Z2lucyA9IFtcclxuICAgICAgICAgIC4uLihvcHRpb25zPy5yZWh5cGVQbHVnaW5zID8/IFtdKSxcclxuICAgICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcclxuICAgICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgICByZWh5cGVDb2RlVGl0bGVzLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICByZWh5cGVBdXRvbGlua0hlYWRpbmdzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXCJhbmNob3JcIl0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gcmVzdWx0O1xyXG4gICAgcmV0dXJuIHsgY29kZSwgZnJvbnRtYXR0ZXIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBEaWRuJ3QgZmluZCBhbnkgYmxvZyBwb3N0IGF0IGJsb2cvJHtwYXJhbXMuc2x1Z31gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcclxuICBjb25zdCB7IGNvZGUsIGZyb250bWF0dGVyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRNRFhDb21wb25lbnQoY29kZSksIFtjb2RlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntmcm9udG1hdHRlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbD5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk9oIG5vITwvdGl0bGU+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8aDE+V2hvb3BzISBMb29rcyBsaWtlIHlvdSBmb3VuZCBhbiBlcnJvci4gU29ycnkgYWJvdXQgdGhhdCA6KDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz5FcnJvciBtZXNzYWdlOjwvc3Ryb25nPiB7ZXJyb3IubWVzc2FnZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG4iLCAiY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuZXhwb3J0IHsgcGF0aCwgZnMgfTtcclxuIiwgImltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJtZHgtYnVuZGxlclwiO1xyXG50eXBlIEdpdEh1YkZpbGUgPSB7IHBhdGg6IHN0cmluZyB9O1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcclxuaW1wb3J0IHJlaHlwZUNvZGVUaXRsZXMgZnJvbSAncmVoeXBlLWNvZGUtdGl0bGVzJztcclxuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJztcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29tcGlsZU1keChzbHVnOiBzdHJpbmcsIGdpdGh1YkZpbGVzOiBBcnJheTxHaXRIdWJGaWxlPikge1xyXG4gIGNvbnN0IGluZGV4UmVnZXggPSBuZXcgUmVnRXhwKGAke3NsdWd9XFxcXC9pbmRleC5tZHg/JGApO1xyXG4gIGNvbnN0IGluZGV4RmlsZSA9IGdpdGh1YkZpbGVzLmZpbmQoKHsgcGF0aCB9KSA9PiBpbmRleFJlZ2V4LnRlc3QocGF0aCkpO1xyXG4gIGlmICghaW5kZXhGaWxlKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCByb290RGlyID0gaW5kZXhGaWxlLnBhdGgucmVwbGFjZSgvaW5kZXgubWR4PyQvLCBcIlwiKTtcclxuICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoaW5kZXhGaWxlLnBhdGgsIFwidXRmOFwiKTtcclxuICB0cnkge1xyXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIikge1xyXG4gICAgICBwcm9jZXNzLmVudi5FU0JVSUxEX0JJTkFSWV9QQVRIID0gcGF0aC5qb2luKFxyXG4gICAgICAgIHByb2Nlc3MuY3dkKCksXHJcbiAgICAgICAgXCJub2RlX21vZHVsZXNcIixcclxuICAgICAgICBcImVzYnVpbGRcIixcclxuICAgICAgICBcImVzYnVpbGQuZXhlXCJcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb2Nlc3MuZW52LkVTQlVJTERfQklOQVJZX1BBVEggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgcHJvY2Vzcy5jd2QoKSxcclxuICAgICAgICBcIm5vZGVfbW9kdWxlc1wiLFxyXG4gICAgICAgIFwiZXNidWlsZFwiLFxyXG4gICAgICAgIFwiYmluXCIsXHJcbiAgICAgICAgXCJlc2J1aWxkXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZnJvbnRtYXR0ZXIsIGNvZGUgfSA9IGF3YWl0IGJ1bmRsZU1EWCh7XHJcbiAgICAgIHNvdXJjZSxcclxuICAgICAgY3dkOiByb290RGlyLFxyXG4gICAgICB4ZG1PcHRpb25zKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLnJlaHlwZVBsdWdpbnMgPSBbXHJcbiAgICAgICAgICAuLi4ob3B0aW9ucz8ucmVoeXBlUGx1Z2lucyA/PyBbXSksXHJcbiAgICAgICAgICByZWh5cGVIaWdobGlnaHQsXHJcbiAgICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgICAgcmVoeXBlQ29kZVRpdGxlcyxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogWydhbmNob3InXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IGNvZGUsIGZyb250bWF0dGVyIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYENvbXBpbGF0aW9uIGVycm9yIGZvciBzbHVnOiBgLCBzbHVnKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY29tcGlsZU1keCB9O1xyXG5leHBvcnQgeyBidW5kbGVNRFggfSBmcm9tIFwibWR4LWJ1bmRsZXJcIiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKi9cblxuaW1wb3J0IFNsdWdnZXIgZnJvbSAnZ2l0aHViLXNsdWdnZXInXG5pbXBvcnQge2hhc1Byb3BlcnR5fSBmcm9tICdoYXN0LXV0aWwtaGFzLXByb3BlcnR5J1xuaW1wb3J0IHtoZWFkaW5nUmFua30gZnJvbSAnaGFzdC11dGlsLWhlYWRpbmctcmFuaydcbmltcG9ydCB7dG9TdHJpbmd9IGZyb20gJ2hhc3QtdXRpbC10by1zdHJpbmcnXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG5jb25zdCBzbHVncyA9IG5ldyBTbHVnZ2VyKClcblxuLyoqXG4gKiBQbHVnaW4gdG8gYWRkIGBpZGBzIHRvIGhlYWRpbmdzLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48QXJyYXk8dm9pZD4sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVTbHVnKCkge1xuICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICBzbHVncy5yZXNldCgpXG5cbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlKSA9PiB7XG4gICAgICBpZiAoaGVhZGluZ1Jhbmsobm9kZSkgJiYgbm9kZS5wcm9wZXJ0aWVzICYmICFoYXNQcm9wZXJ0eShub2RlLCAnaWQnKSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuaWQgPSBzbHVncy5zbHVnKHRvU3RyaW5nKG5vZGUpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsICJ2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBDaGVjayBpZiBgbm9kZWAgaGFzIGEgc2V0IGBuYW1lYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgLyoqIEB0eXBlIHt1bmtub3dufSAqL1xuICB2YXIgdmFsdWUgPVxuICAgIG5hbWUgJiZcbiAgICBub2RlICYmXG4gICAgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmXG4gICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICBub2RlLnR5cGUgPT09ICdlbGVtZW50JyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgIG5vZGUucHJvcGVydGllcyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgIG93bi5jYWxsKG5vZGUucHJvcGVydGllcywgbmFtZSkgJiZcbiAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICBub2RlLnByb3BlcnRpZXNbbmFtZV1cblxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gZmFsc2Vcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtSb290fFBhcmVudFsnY2hpbGRyZW4nXVtudW1iZXJdfSBOb2RlXG4gKi9cblxuLyoqXG4gKiBSYW5rIG9mIGEgaGVhZGluZzogSDEgLT4gMSwgSDIgLT4gMiwgZXRjLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZGluZ1Jhbmsobm9kZSkge1xuICB2YXIgbmFtZSA9XG4gICAgKG5vZGUgJiYgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHx8ICcnXG4gIHZhciBjb2RlID1cbiAgICBuYW1lLmxlbmd0aCA9PT0gMiAmJiBuYW1lLmNoYXJDb2RlQXQoMCkgPT09IDEwNCAvKiBgaGAgKi9cbiAgICAgID8gbmFtZS5jaGFyQ29kZUF0KDEpXG4gICAgICA6IDBcbiAgcmV0dXJuIGNvZGUgPiA0OCAvKiBgMGAgKi8gJiYgY29kZSA8IDU1IC8qIGA3YCAqLyA/IGNvZGUgLSA0OCAvKiBgMGAgKi8gOiBudWxsXG59XG4iLCAiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAgIEdldCB0aGUgcGxhaW4tdGV4dCB2YWx1ZSBvZiBhIGhhc3Qgbm9kZS5cbiAqIEBsb25nZGVzY3JpcHRpb25cbiAqICAgIyMgVXNlXG4gKlxuICogICBgYGBqc1xuICogICBpbXBvcnQge2h9IGZyb20gJ2hhc3RzY3JpcHQnXG4gKiAgIGltcG9ydCB7dG9TdHJpbmd9IGZyb20gJ2hhc3QtdXRpbC10by1zdHJpbmcnXG4gKlxuICogICB0b1N0cmluZyhoKCdwJywgJ0FscGhhJykpXG4gKiAgIC8vPT4gJ0FscGhhJ1xuICogICB0b1N0cmluZyhoKCdkaXYnLCBbaCgnYicsICdCb2xkJyksICcgYW5kICcsIGgoJ2knLCAnaXRhbGljJyksICcuJ10pKVxuICogICAvLz0+ICdCb2xkIGFuZCBpdGFsaWMuJ1xuICogICBgYGBcbiAqXG4gKiAgICMjIEFQSVxuICpcbiAqICAgIyMjIGB0b1N0cmluZyhub2RlKWBcbiAqXG4gKiAgIFRyYW5zZm9ybSBhIG5vZGUgdG8gYSBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtSb290fFJvb3RbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gTm9kZVxuICovXG5cbi8qKlxuICogR2V0IHRoZSBwbGFpbi10ZXh0IHZhbHVlIG9mIGEgaGFzdCBub2RlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgLy8gXHUyMDFDVGhlIGNvbmNhdGVuYXRpb24gb2YgZGF0YSBvZiBhbGwgdGhlIFRleHQgbm9kZSBkZXNjZW5kYW50cyBvZiB0aGUgY29udGV4dFxuICAvLyBvYmplY3QsIGluIHRyZWUgb3JkZXIuXHUyMDFEXG4gIGlmICgnY2hpbGRyZW4nIGluIG5vZGUpIHtcbiAgICByZXR1cm4gYWxsKG5vZGUpXG4gIH1cblxuICAvLyBcdTIwMUNDb250ZXh0IG9iamVjdFx1MjAxOXMgZGF0YS5cdTIwMURcbiAgcmV0dXJuICd2YWx1ZScgaW4gbm9kZSA/IG5vZGUudmFsdWUgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25lKG5vZGUpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIHJldHVybiAnY2hpbGRyZW4nIGluIG5vZGUgPyBhbGwobm9kZSkgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Um9vdHxFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBhbGwobm9kZSkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gb25lKG5vZGUuY2hpbGRyZW5baW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0LCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQWN0aW9ufSBBY3Rpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkluZGV4fSBJbmRleFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQWN0aW9uVHVwbGV9IEFjdGlvblR1cGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSBWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuaW1wb3J0IHtjb2xvcn0gZnJvbSAnLi9jb2xvci5qcydcblxuLyoqXG4gKiBDb250aW51ZSB0cmF2ZXJzaW5nIGFzIG5vcm1hbFxuICovXG5leHBvcnQgY29uc3QgQ09OVElOVUUgPSB0cnVlXG4vKipcbiAqIERvIG5vdCB0cmF2ZXJzZSB0aGlzIG5vZGVcdTIwMTlzIGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBjb25zdCBTS0lQID0gJ3NraXAnXG4vKipcbiAqIFN0b3AgdHJhdmVyc2luZyBpbW1lZGlhdGVseVxuICovXG5leHBvcnQgY29uc3QgRVhJVCA9IGZhbHNlXG5cbi8qKlxuICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICpcbiAqIEBwYXJhbSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAqIEBwYXJhbSB0ZXN0IFRlc3Qgbm9kZSwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBWaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlIG9yZGVyLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXRQYXJlbnRzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxOb2RlPn0gdmlzaXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIG5vIHZpc2l0b3IgZ2l2ZW4sIHNvIGB2aXNpdG9yYCBpcyB0ZXN0LlxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpcyA9IGNvbnZlcnQodGVzdClcbiAgICAgIGNvbnN0IHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgICAgIGZhY3RvcnkodHJlZSwgbnVsbCwgW10pKClcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyP30gaW5kZXhcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogaHVzaFxuICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgICAgICAgbGV0IG5hbWVcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgICAgIDogdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZpc2l0LCAnbmFtZScsIHtcbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAnbm9kZSAoJyArXG4gICAgICAgICAgICAgIGNvbG9yKHZhbHVlLnR5cGUgKyAobmFtZSA/ICc8JyArIG5hbWUgKyAnPicgOiAnJykpICtcbiAgICAgICAgICAgICAgJyknXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aXNpdFxuXG4gICAgICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7QWN0aW9uVHVwbGV9ICovXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICBsZXQgc3VicmVzdWx0XG4gICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgbGV0IG9mZnNldFxuICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBhcmVudD59ICovXG4gICAgICAgICAgbGV0IGdyYW5kcGFyZW50c1xuXG4gICAgICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBncmFuZHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChub2RlKVxuXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgICBzdWJyZXN1bHQgPSBmYWN0b3J5KG5vZGUuY2hpbGRyZW5bb2Zmc2V0XSwgb2Zmc2V0LCBncmFuZHBhcmVudHMpKClcblxuICAgICAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBAcGFyYW0ge1Zpc2l0b3JSZXN1bHR9IHZhbHVlXG4gKiBAcmV0dXJucyB7QWN0aW9uVHVwbGV9XG4gKi9cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBUeXBlXG4gKiBAdHlwZWRlZiB7T2JqZWN0PHN0cmluZywgdW5rbm93bj59IFByb3BzXG4gKlxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXkuPFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSBUZXN0XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdFxuICpcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnx2b2lkfVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBYXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uUHJlZGljYXRlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtub2RlIGlzIFh9XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQXNzZXJ0QW55dGhpbmdcbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gWVxuICogQGNhbGxiYWNrIEFzc2VydFByZWRpY2F0ZVxuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtub2RlIGlzIFl9XG4gKi9cblxuZXhwb3J0IGNvbnN0IGlzID1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0LlxuICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KG5vZGU6IHVua25vd24sIHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndHlwZSddfFBhcnRpYWw8VD58VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+PiwgaW5kZXg/OiBudW1iZXJ8bnVsbHx1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudHxudWxsfHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgVCkgJlxuICAgKiAgICgobm9kZT86IHVua25vd24sIHRlc3Q/OiBUZXN0LCBpbmRleD86IG51bWJlcnxudWxsfHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50fG51bGx8dW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbilcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAgICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV0gTm9kZSB0byBjaGVja1xuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogV2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICAgICAqIFdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgZnVuY3Rpb24gKG5vZGUpIHtyZXR1cm4gbm9kZS50eXBlID09PSB0ZXN0fWAuXG4gICAgICogV2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XSBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAgICAgKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF0gUGFyZW50IG9mIGBub2RlYFxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW2NvbnRleHRdIENvbnRleHQgb2JqZWN0IHRvIGludm9rZSBgdGVzdGAgd2l0aFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRlc3QgcGFzc2VkIGFuZCBgbm9kZWAgaXMgYSBgTm9kZWAgKG9iamVjdCB3aXRoIGB0eXBlYCBzZXQgdG8gbm9uLWVtcHR5IGBzdHJpbmdgKS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIGlzKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICBpbmRleCA8IDAgfHxcbiAgICAgICAgICBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgKCFpcyhwYXJlbnQpIHx8ICFwYXJlbnQuY2hpbGRyZW4pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHBhcmVudCA9PT0gbnVsbCkgIT09XG4gICAgICAgIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYm90aCBwYXJlbnQgYW5kIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IEJvb2xlYW4oY2hlY2suY2FsbChjb250ZXh0LCBub2RlLCBpbmRleCwgcGFyZW50KSlcbiAgICAgICAgOiBmYWxzZVxuICAgIH1cbiAgKVxuXG5leHBvcnQgY29uc3QgY29udmVydCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPikgPT4gQXNzZXJ0UHJlZGljYXRlPFQ+KSAmXG4gICAqICAgKCh0ZXN0PzogVGVzdCkgPT4gQXNzZXJ0QW55dGhpbmcpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gYXNzZXJ0aW9uIGZyb20gYSBjaGVjay5cbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICAgICAqIFdoZW4gYGFycmF5YCwgY2hlY2tzIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gICAgICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICBpZiAodGVzdCA9PT0gdW5kZWZpbmVkIHx8IHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9rXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGVzdCkgPyBhbnlGYWN0b3J5KHRlc3QpIDogcHJvcHNGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG4gICAgfVxuICApXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSB0ZXN0c1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPEFzc2VydEFueXRoaW5nPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbnkpXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge3Vua25vd25bXX0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFueSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uY2FsbCh0aGlzLCAuLi5wYXJhbWV0ZXJzKSkgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbiAqIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtQcm9wc30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gcHJvcHNGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeShhbGwpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGtleVxuXG4gICAgZm9yIChrZXkgaW4gY2hlY2spIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGh1c2gsIGl0IHN1cmUgd29ya3MgYXMgYW4gaW5kZXguXG4gICAgICBpZiAobm9kZVtrZXldICE9PSBjaGVja1trZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2RlXHUyMDE5cyB0eXBlXG4gKiBmb3Igc2FpZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtUeXBlfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiB0eXBlRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkodHlwZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09IGNoZWNrXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGVcdTIwMTlzIHR5cGVcbiAqIGZvciBzYWlkIHN0cmluZy5cbiAqIEBwYXJhbSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhc3RGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBhc3NlcnRpb25cblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7QXJyYXkuPHVua25vd24+fSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYXNzZXJ0aW9uKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzcHJlYWRpbmcgaXMgZmluZS5cbiAgICByZXR1cm4gQm9vbGVhbihjaGVjay5jYWxsKHRoaXMsIC4uLnBhcmFtZXRlcnMpKVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsICIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iLCAiaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcbmZ1bmN0aW9uIHJlaHlwZUNvZGVUaXRsZXMoKSB7XG4gICAgcmV0dXJuICh0cmVlKSA9PiB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIHZpc2l0b3IpO1xuICAgIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgICAgICBpZiAoIXBhcmVudCB8fCBub2RlLnRhZ05hbWUgIT09ICdwcmUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlID0gbm9kZTtcbiAgICAgICAgY29uc3QgY29kZSA9IEFycmF5LmlzQXJyYXkocHJlLmNoaWxkcmVuKSA/IHByZS5jaGlsZHJlblswXSA6IHByZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSB8fCBbXTtcbiAgICAgICAgY29uc3QgdXBkYXRlZENsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZWR1Y2UoKGFjYywgY2xzKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBjbHMgaXMgc29tZXRoaW5nIGxpa2UuLi5cbiAgICAgICAgICAgIC8vIGkuZS4gbGFuZ3VhZ2UtdHlwZXNjcmlwdDpsaWIvbWR4LnRzXG4gICAgICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgICAgICAvLyBTcGxpdCBvbiB0aGUgJzonXG4gICAgICAgICAgICAgICAgY29uc3QgW2xhbmdDbGFzc05hbWUsIHRpdGxlXSA9IGNscy5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGl0bGUgYmxvY2sgdG8gdGhlIHRyZWUgYXQgdGhlIGluZGV4IHByaW9yXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIDxwcmUgLz4gd2l0aCB0aGUgdGl0bGUgd2UgZm91bmQuXG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3sgdHlwZTogJ3RleHQnLCB2YWx1ZTogdGl0bGUgfV0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgY2xhc3NOYW1lOiBbJ3JlaHlwZS1jb2RlLXRpdGxlJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChsYW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNscy5zbGljZSgwLCA5KSA9PT0gJ2xhbmd1YWdlLScpIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChjbHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHByZS5jaGlsZHJlbiA9IFt7IC4uLmNvZGUsIHByb3BlcnRpZXM6IHsgY2xhc3NOYW1lOiB1cGRhdGVkQ2xhc3NOYW1lIH0gfV07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVoeXBlQ29kZVRpdGxlcztcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqL1xuXG4vKipcbiAqIEludm9rZWQgd2hlbiBhIG5vZGUgKG1hdGNoaW5nIHRlc3QsIGlmIGdpdmVuKSBpcyBmb3VuZC5cbiAqIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBub2RlLlxuICogVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gdGhlIHBhcmVudCBvZiBub2RlICh0aGUgbGFzdCBvZiBhbmNlc3RvcnMpLlxuICogUmVwbGFjaW5nIG5vZGUgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzIGRlc2NlbmRhbnRzIHRvIGJlIHZpc2l0ZWQuXG4gKiBJZiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgb2Ygbm9kZSxcbiAqIHZpc2l0b3Igc2hvdWxkIHJldHVybiBhIG5ldyBpbmRleCAobnVtYmVyKSB0byBzcGVjaWZ5IHRoZSBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIG5vZGUgaXMgdHJhdmVyc2VkLlxuICogQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2Ygbm9kZSAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSlcbiAqIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBpbmRleC5cbiAqIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBhbiBhbmNlc3RvciBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmcgdHJhdmVyc2VkLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gVlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqIEBwYXJhbSB7Vn0gbm9kZSBGb3VuZCBub2RlXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfSBpbmRleCBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAqIEBwYXJhbSB7UGFyZW50fG51bGx9IHBhcmVudCBQYXJlbnQgb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7VmlzaXRvclJlc3VsdH1cbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4odHJlZTogTm9kZSwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+LCB2aXNpdG9yOiBWaXNpdG9yPFQ+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdGVzdDogVGVzdCwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0IHRlc3QgVGVzdCBub2RlXG4gICAgICogQHBhcmFtIHtWaXNpdG9yPE5vZGU+fSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV0gRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHJldHVybiB2aXNpdG9yKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsLFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICApXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7Q09OVElOVUV8U0tJUHxFWElUfSBBY3Rpb24gVW5pb24gb2YgdGhlIGFjdGlvbiB0eXBlc1xuICogQHR5cGVkZWYge251bWJlcn0gSW5kZXggTW92ZSB0byB0aGUgc2libGluZyBhdCBpbmRleCBuZXh0IChhZnRlciBub2RlIGl0c2VsZiBpcyBjb21wbGV0ZWx5IHRyYXZlcnNlZCkuIFVzZWZ1bCBpZiBtdXRhdGluZyB0aGUgdHJlZSwgc3VjaCBhcyByZW1vdmluZyB0aGUgbm9kZSB0aGUgdmlzaXRvciBpcyBjdXJyZW50bHkgb24sIG9yIGFueSBvZiBpdHMgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgUmVzdWx0cyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gY2hpbGRyZW4ubGVuZ3RoIHN0b3AgdHJhdmVyc2luZyB0aGUgcGFyZW50XG4gKiBAdHlwZWRlZiB7WyhBY3Rpb258bnVsbHx1bmRlZmluZWR8dm9pZCk/LCAoSW5kZXh8bnVsbHx1bmRlZmluZWQpP119IEFjdGlvblR1cGxlIExpc3Qgd2l0aCBvbmUgb3IgdHdvIHZhbHVlcywgdGhlIGZpcnN0IGFuIGFjdGlvbiwgdGhlIHNlY29uZCBhbiBpbmRleC5cbiAqIEB0eXBlZGVmIHtudWxsfHVuZGVmaW5lZHxBY3Rpb258SW5kZXh8QWN0aW9uVHVwbGV8dm9pZH0gVmlzaXRvclJlc3VsdCBBbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBhIHZpc2l0b3JcbiAqL1xuXG4vKipcbiAqIEludm9rZWQgd2hlbiBhIG5vZGUgKG1hdGNoaW5nIHRlc3QsIGlmIGdpdmVuKSBpcyBmb3VuZC5cbiAqIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBub2RlLlxuICogVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gdGhlIHBhcmVudCBvZiBub2RlICh0aGUgbGFzdCBvZiBhbmNlc3RvcnMpLlxuICogUmVwbGFjaW5nIG5vZGUgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzIGRlc2NlbmRhbnRzIHRvIGJlIHZpc2l0ZWQuXG4gKiBJZiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgb2Ygbm9kZSxcbiAqIHZpc2l0b3Igc2hvdWxkIHJldHVybiBhIG5ldyBpbmRleCAobnVtYmVyKSB0byBzcGVjaWZ5IHRoZSBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIG5vZGUgaXMgdHJhdmVyc2VkLlxuICogQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2Ygbm9kZSAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSlcbiAqIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBpbmRleC5cbiAqIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBhbiBhbmNlc3RvciBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmcgdHJhdmVyc2VkLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gVlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqIEBwYXJhbSB7Vn0gbm9kZSBGb3VuZCBub2RlXG4gKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBhbmNlc3RvcnMgQW5jZXN0b3JzIG9mIG5vZGVcbiAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcbmltcG9ydCB7Y29sb3J9IGZyb20gJy4vY29sb3IuanMnXG5cbi8qKlxuICogQ29udGludWUgdHJhdmVyc2luZyBhcyBub3JtYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRJTlVFID0gdHJ1ZVxuLyoqXG4gKiBEbyBub3QgdHJhdmVyc2UgdGhpcyBub2RlXHUyMDE5cyBjaGlsZHJlblxuICovXG5leHBvcnQgY29uc3QgU0tJUCA9ICdza2lwJ1xuLyoqXG4gKiBTdG9wIHRyYXZlcnNpbmcgaW1tZWRpYXRlbHlcbiAqL1xuZXhwb3J0IGNvbnN0IEVYSVQgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgdmlzaXRQYXJlbnRzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4odHJlZTogTm9kZSwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+LCB2aXNpdG9yOiBWaXNpdG9yPFQ+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdGVzdDogVGVzdCwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0IHRlc3QgVGVzdCBub2RlXG4gICAgICogQHBhcmFtIHtWaXNpdG9yPE5vZGU+fSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV0gRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbm8gdmlzaXRvciBnaXZlbiwgc28gYHZpc2l0b3JgIGlzIHRlc3QuXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZhciBpcyA9IGNvbnZlcnQodGVzdClcbiAgICAgIHZhciBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuXG4gICAgICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge251bWJlcj99IGluZGV4XG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB2YXIgbmFtZVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmlzaXQsICduYW1lJywge1xuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICdub2RlICgnICtcbiAgICAgICAgICAgICAgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgK1xuICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpc2l0XG5cbiAgICAgICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgICAgICAvKiogQHR5cGUge0FjdGlvblR1cGxlfSAqL1xuICAgICAgICAgIHZhciBzdWJyZXN1bHRcbiAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICB2YXIgb2Zmc2V0XG4gICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGFyZW50Pn0gKi9cbiAgICAgICAgICB2YXIgZ3JhbmRwYXJlbnRzXG5cbiAgICAgICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgICAgIGlmIChzdWJyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7VmlzaXRvclJlc3VsdH0gdmFsdWVcbiAqIEByZXR1cm5zIHtBY3Rpb25UdXBsZX1cbiAqL1xuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsICIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9pbmRleC5qcycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vbGliL2luZGV4LmpzJ1xuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtFbGVtZW50WydjaGlsZHJlbiddW251bWJlcl19IEVsZW1lbnRDaGlsZFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IFByb3BlcnRpZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JykuVGVzdH0gVGVzdFxuICpcbiAqIEB0eXBlZGVmIHsncHJlcGVuZCd8J2FwcGVuZCd8J3dyYXAnfCdiZWZvcmUnfCdhZnRlcid9IEJlaGF2aW9yXG4gKlxuICogQGNhbGxiYWNrIEJ1aWxkXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW119XG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtCZWhhdmlvcn0gW2JlaGF2aW9yPSdwcmVwZW5kJ11cbiAqICAgSG93IHRvIGNyZWF0ZSBsaW5rcy5cbiAqIEBwcm9wZXJ0eSB7QmVoYXZpb3J9IFtiZWhhdmlvdXJdXG4gKiAgIFBsZWFzZSB1c2UgYGJlaGF2aW9yYCBpbnN0ZWFkXG4gKiBAcHJvcGVydHkge1Byb3BlcnRpZXN9IFtwcm9wZXJ0aWVzXVxuICogICBFeHRyYSBwcm9wZXJ0aWVzIHRvIHNldCBvbiB0aGUgbGluayB3aGVuIGluamVjdGluZy5cbiAqICAgRGVmYXVsdHMgdG8gYHthcmlhSGlkZGVuOiB0cnVlLCB0YWJJbmRleDogLTF9YCB3aGVuIGAncHJlcGVuZCdgIG9yXG4gKiAgIGAnYXBwZW5kJ2AuXG4gKiBAcHJvcGVydHkge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXXxCdWlsZH0gW2NvbnRlbnQ9e3R5cGU6ICdlbGVtZW50JywgdGFnTmFtZTogJ3NwYW4nLCBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2ljb24nLCAnaWNvbi1saW5rJ119LCBjaGlsZHJlbjogW119XVxuICogICBoYXN0IG5vZGVzIHRvIGluc2VydCBpbiB0aGUgbGluay5cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSBbZ3JvdXBdXG4gKiAgIGhhc3Qgbm9kZSB0byB3cmFwIHRoZSBoZWFkaW5nIGFuZCBsaW5rIHdpdGgsIGlmIGBiZWhhdmlvcmAgaXMgYCdiZWZvcmUnYCBvclxuICogICBgJ2FmdGVyJ2AuXG4gKiAgIFRoZXJlIGlzIG5vIGRlZmF1bHQuXG4gKiBAcHJvcGVydHkge1Rlc3R9IFt0ZXN0XVxuICogICBUZXN0IHRvIGRlZmluZSB3aGljaCBoZWFkaW5nIGVsZW1lbnRzIGFyZSBsaW5rZWQuXG4gKiAgIEFueSB0ZXN0IHRoYXQgY2FuIGJlIGdpdmVuIHRvIGBoYXN0LXV0aWwtaXMtZWxlbWVudGAgaXMgc3VwcG9ydGVkLlxuICogICBUaGUgZGVmYXVsdCAobm8gdGVzdCkgaXMgdG8gbGluayBhbGwgaGVhZGluZ3MuXG4gKiAgIENhbiBiZSB1c2VkIHRvIGxpbmsgb25seSBoMS1oMywgb3IgZm9yIGV4YW1wbGUgYWxsIGV4Y2VwdCBoMS5cbiAqL1xuXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2V4dGVuZCdcbmltcG9ydCB7aGFzUHJvcGVydHl9IGZyb20gJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknXG5pbXBvcnQge2hlYWRpbmdSYW5rfSBmcm9tICdoYXN0LXV0aWwtaGVhZGluZy1yYW5rJ1xuaW1wb3J0IHtjb252ZXJ0RWxlbWVudH0gZnJvbSAnaGFzdC11dGlsLWlzLWVsZW1lbnQnXG5pbXBvcnQge3Zpc2l0LCBTS0lQfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG4vKiogQHR5cGUge0VsZW1lbnR9ICovXG5jb25zdCBjb250ZW50RGVmYXVsdHMgPSB7XG4gIHR5cGU6ICdlbGVtZW50JyxcbiAgdGFnTmFtZTogJ3NwYW4nLFxuICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2ljb24nLCAnaWNvbi1saW5rJ119LFxuICBjaGlsZHJlbjogW11cbn1cblxuLyoqXG4gKiBQbHVnaW4gdG8gYXV0b21hdGljYWxseSBhZGQgbGlua3MgdG8gaGVhZGluZ3MgKGgxLWg2KS5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyhvcHRpb25zID0ge30pIHtcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wZXJ0aWVzXG4gIGNvbnN0IGJlaGF2aW9yID0gb3B0aW9ucy5iZWhhdmlvdXIgfHwgb3B0aW9ucy5iZWhhdmlvciB8fCAncHJlcGVuZCdcbiAgY29uc3QgY29udGVudCA9IG9wdGlvbnMuY29udGVudCB8fCBjb250ZW50RGVmYXVsdHNcbiAgY29uc3QgZ3JvdXAgPSBvcHRpb25zLmdyb3VwXG4gIGNvbnN0IGlzID0gY29udmVydEVsZW1lbnQob3B0aW9ucy50ZXN0KVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBsZXQgbWV0aG9kXG5cbiAgaWYgKGJlaGF2aW9yID09PSAnd3JhcCcpIHtcbiAgICBtZXRob2QgPSB3cmFwXG4gIH0gZWxzZSBpZiAoYmVoYXZpb3IgPT09ICdiZWZvcmUnIHx8IGJlaGF2aW9yID09PSAnYWZ0ZXInKSB7XG4gICAgbWV0aG9kID0gYXJvdW5kXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgcHJvcHMgPSB7YXJpYUhpZGRlbjogJ3RydWUnLCB0YWJJbmRleDogLTF9XG4gICAgfVxuXG4gICAgbWV0aG9kID0gaW5qZWN0XG4gIH1cblxuICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBpbmRleCwgcGFyZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGhlYWRpbmdSYW5rKG5vZGUpICYmXG4gICAgICAgIGhhc1Byb3BlcnR5KG5vZGUsICdpZCcpICYmXG4gICAgICAgIGlzKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgZnVuY3Rpb24gaW5qZWN0KG5vZGUpIHtcbiAgICBub2RlLmNoaWxkcmVuW2JlaGF2aW9yID09PSAncHJlcGVuZCcgPyAndW5zaGlmdCcgOiAncHVzaCddKFxuICAgICAgY3JlYXRlKG5vZGUsIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLCB0b0NoaWxkcmVuKGNvbnRlbnQsIG5vZGUpKVxuICAgIClcblxuICAgIHJldHVybiBbU0tJUF1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBmdW5jdGlvbiBhcm91bmQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIC8vIFVuY29tbW9uLlxuICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHwgIXBhcmVudCkgcmV0dXJuXG5cbiAgICBjb25zdCBsaW5rID0gY3JlYXRlKFxuICAgICAgbm9kZSxcbiAgICAgIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLFxuICAgICAgdG9DaGlsZHJlbihjb250ZW50LCBub2RlKVxuICAgIClcbiAgICBsZXQgbm9kZXMgPSBiZWhhdmlvciA9PT0gJ2JlZm9yZScgPyBbbGluaywgbm9kZV0gOiBbbm9kZSwgbGlua11cblxuICAgIGlmIChncm91cCkge1xuICAgICAgY29uc3QgZ3JvdXBpbmcgPSB0b05vZGUoZ3JvdXAsIG5vZGUpXG5cbiAgICAgIGlmIChncm91cGluZyAmJiAhQXJyYXkuaXNBcnJheShncm91cGluZykgJiYgZ3JvdXBpbmcudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgIGdyb3VwaW5nLmNoaWxkcmVuID0gbm9kZXNcbiAgICAgICAgbm9kZXMgPSBbZ3JvdXBpbmddXG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSwgLi4ubm9kZXMpXG5cbiAgICByZXR1cm4gW1NLSVAsIGluZGV4ICsgbm9kZXMubGVuZ3RoXVxuICB9XG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQvY29tcGxleC10eXBlcycpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIHdyYXAobm9kZSkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSBbY3JlYXRlKG5vZGUsIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLCBub2RlLmNoaWxkcmVuKV1cbiAgICByZXR1cm4gW1NLSVBdXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW118QnVpbGR9IHZhbHVlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudENoaWxkW119XG4gICAqL1xuICBmdW5jdGlvbiB0b0NoaWxkcmVuKHZhbHVlLCBub2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9Ob2RlKHZhbHVlLCBub2RlKVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiBbcmVzdWx0XVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZShub2RlKVxuICAgIHJldHVybiBleHRlbmQodHJ1ZSwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBbXSA6IHt9LCB2YWx1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wc1xuICAgKiBAcGFyYW0ge0VsZW1lbnRDaGlsZFtdfSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZShub2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ2EnLFxuICAgICAgcHJvcGVydGllczogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgLy8gRml4IGhhc3QgdHlwZXMgYW5kIG1ha2UgdGhlbSByZXF1aXJlZC5cbiAgICAgICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgaHJlZjogJyMnICsgKG5vZGUucHJvcGVydGllcyB8fCB7fSkuaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBUYWdOYW1lXG4gKiBAdHlwZWRlZiB7bnVsbHx1bmRlZmluZWR8VGFnTmFtZXxUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheS48VGFnTmFtZXxUZXN0RnVuY3Rpb25Bbnl0aGluZz59IFRlc3RcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7RWxlbWVudH0gVFxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+fSBQcmVkaWNhdGVUZXN0XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IHBhc3NlcyBhIHRlc3RcbiAqXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2Jvb2xlYW58dm9pZH1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAdGVtcGxhdGUge0VsZW1lbnR9IFhcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25QcmVkaWNhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2VsZW1lbnQgaXMgWH1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhbiBlbGVtZW50IGFuZCBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEBjYWxsYmFjayBBc3NlcnRBbnl0aGluZ1xuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGFuIGVsZW1lbnQgYW5kIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtFbGVtZW50fSBZXG4gKiBAY2FsbGJhY2sgQXNzZXJ0UHJlZGljYXRlXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge25vZGUgaXMgWX1cbiAqL1xuXG4vLyBDaGVjayBpZiBgbm9kZWAgaXMgYW4gYGVsZW1lbnRgIGFuZCB3aGV0aGVyIGl0IHBhc3NlcyB0aGUgZ2l2ZW4gdGVzdC5cbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPVxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBub2RlIGlzIGFuIGVsZW1lbnQgYW5kIHBhc3NlcyBhIHRlc3QuXG4gICAqIFdoZW4gYSBgcGFyZW50YCBub2RlIGlzIGtub3duIHRoZSBgaW5kZXhgIG9mIG5vZGUgc2hvdWxkIGFsc28gYmUgZ2l2ZW4uXG4gICAqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKCgpID0+IGZhbHNlKSAmXG4gICAqICAgKDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KG5vZGU6IHVua25vd24sIHRlc3Q/OiBQcmVkaWNhdGVUZXN0PFQ+LCBpbmRleD86IG51bWJlciwgcGFyZW50PzogUGFyZW50LCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBUKSAmXG4gICAqICAgKChub2RlOiB1bmtub3duLCB0ZXN0OiBUZXN0LCBpbmRleD86IG51bWJlciwgcGFyZW50PzogUGFyZW50LCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbilcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAgICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV0gTm9kZSB0byBjaGVja1xuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAgICAgKiBAcGFyYW0ge1BhcmVudH0gW3BhcmVudF0gUGFyZW50IG9mIGBub2RlYFxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW2NvbnRleHRdIENvbnRleHQgb2JqZWN0IHRvIGludm9rZSBgdGVzdGAgd2l0aFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRlc3QgcGFzc2VkIGFuZCBgbm9kZWAgaXMgYW4gYEVsZW1lbnRgIChvYmplY3Qgd2l0aCBgdHlwZWAgc2V0IHRvIGBlbGVtZW50YCBhbmQgYHRhZ05hbWVgIHNldCB0byBhIG5vbi1lbXB0eSBzdHJpbmcpLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gICAgZnVuY3Rpb24gKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydEVsZW1lbnQodGVzdClcblxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGluZGV4ICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgaW5kZXggPCAwIHx8XG4gICAgICAgICAgaW5kZXggPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIGZpbml0ZSBpbmRleCBmb3IgY2hpbGQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICghcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIGlmICghbm9kZSB8fCAhbm9kZS50eXBlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwYXJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXJlbnQgPT09IG51bGwpICE9PVxuICAgICAgICAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGJvdGggcGFyZW50IGFuZCBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGVjay5jYWxsKGNvbnRleHQsIG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgfVxuICApXG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RWxlbWVudCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIEVsZW1lbnQ+KHRlc3Q6IFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4pID0+IEFzc2VydFByZWRpY2F0ZTxUPikgJlxuICAgKiAgICgodGVzdD86IFRlc3QpID0+IEFzc2VydEFueXRoaW5nKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIGFzc2VydGlvbiBmcm9tIGEgY2hlY2suXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBXaGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gICAgICogV2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGBmdW5jdGlvbiAobm9kZSkge3JldHVybiBub2RlLnR5cGUgPT09IHRlc3R9YC5cbiAgICAgKiBXaGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICAgICAqIFdoZW4gYG9iamVjdGAsIGNoZWNrcyB0aGF0IGFsbCBrZXlzIGluIHRlc3QgYXJlIGluIG5vZGUsIGFuZCB0aGF0IHRoZXkgaGF2ZSAoc3RyaWN0bHkpIGVxdWFsIHZhbHVlcy5cbiAgICAgKiBXaGVuIGBhcnJheWAsIGNoZWNrcyBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICAgICAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGVzdCkge1xuICAgICAgaWYgKHRlc3QgPT09IHVuZGVmaW5lZCB8fCB0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGFueUZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYXN0RmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIGFycmF5IGFzIHRlc3QnKVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFRhZ05hbWV8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSB0ZXN0c1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPEFzc2VydEFueXRoaW5nPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0RWxlbWVudCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYW55KVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHt1bmtub3duW119IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbnkoLi4ucGFyYW1ldGVycykge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmNhbGwodGhpcywgLi4ucGFyYW1ldGVycykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZVx1MjAxOXMgdGFnXG4gKiBuYW1lIGZvciBzYWlkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1RhZ05hbWV9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHRhZ05hbWVGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiB0YWdOYW1lXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ05hbWUobm9kZSkge1xuICAgIHJldHVybiBlbGVtZW50KG5vZGUpICYmIG5vZGUudGFnTmFtZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhc3RGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBhc3NlcnRpb25cblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICAgKiBAcGFyYW0ge0FycmF5Ljx1bmtub3duPn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydGlvbihub2RlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogZmluZS5cbiAgICByZXR1cm4gZWxlbWVudChub2RlKSAmJiBCb29sZWFuKGNoZWNrLmNhbGwodGhpcywgbm9kZSwgLi4ucGFyYW1ldGVycykpXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIHJldHVybiB0cnVlIGlmIHRoaXMgaXMgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICogQHJldHVybnMge25vZGUgaXMgRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudChub2RlKSB7XG4gIHJldHVybiBCb29sZWFuKFxuICAgIG5vZGUgJiZcbiAgICAgIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJlxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICAgIHR5cGVvZiBub2RlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gIClcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IFZpc2l0b3JcbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuLyoqXG4gKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gKlxuICogQHBhcmFtIHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICogQHBhcmFtIHRlc3QgVGVzdCwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlLCBDaGVjayBleHRlbmRzIFRlc3Q+KHRyZWU6IFRyZWUsIHRlc3Q6IENoZWNrLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZVxuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2luZGV4LmpzJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9saWIvaW5kZXguanMnXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdsb3dsaWdodCcpLlJvb3R9IExvd2xpZ2h0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbG93bGlnaHQvbGliL2NvcmUuanMnKS5IaWdobGlnaHRTeW50YXh9IEhpZ2hsaWdodFN5bnRheFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7Um9vdHxSb290WydjaGlsZHJlbiddW251bWJlcl19IE5vZGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJlZml4PSdobGpzLSddXG4gKiAgIFByZWZpeCB0byB1c2UgYmVmb3JlIGNsYXNzZXMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW58QXJyYXk8c3RyaW5nPn0gW3N1YnNldF1cbiAqICAgU2NvcGUgb2YgbGFuZ3VhZ2VzIHRvIGNoZWNrIHdoZW4gYXV0by1kZXRlY3RpbmcgKGRlZmF1bHQ6IGFsbCBsYW5ndWFnZXMpLlxuICogICBQYXNzIGBmYWxzZWAgdG8gbm90IGhpZ2hsaWdodCBjb2RlIHdpdGhvdXQgbGFuZ3VhZ2UgY2xhc3Nlcy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2lnbm9yZU1pc3Npbmc9ZmFsc2VdXG4gKiAgIFN3YWxsb3cgZXJyb3JzIGZvciBtaXNzaW5nIGxhbmd1YWdlcy5cbiAqICAgQnkgZGVmYXVsdCwgdW5yZWdpc3RlcmVkIHN5bnRheGVzIHRocm93IGFuIGVycm9yIHdoZW4gdGhleSBhcmUgdXNlZC5cbiAqICAgUGFzcyBgdHJ1ZWAgdG8gc3dhbGxvdyB0aG9zZSBlcnJvcnMgYW5kIHRodXMgaWdub3JlIGNvZGUgd2l0aCB1bmtub3duIGNvZGVcbiAqICAgbGFuZ3VhZ2VzLlxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbcGxhaW5UZXh0PVtdXVxuICogICBMaXN0IG9mIHBsYWluLXRleHQgbGFuZ3VhZ2VzLlxuICogICBQYXNzIGFueSBsYW5ndWFnZXMgeW91IHdvdWxkIGxpa2UgdG8gYmUga2VwdCBhcyBwbGFpbi10ZXh0IGluc3RlYWQgb2ZcbiAqICAgZ2V0dGluZyBoaWdobGlnaHRlZC5cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZywgc3RyaW5nfEFycmF5PHN0cmluZz4+fSBbYWxpYXNlcz17fV1cbiAqICAgUmVnaXN0ZXIgbW9yZSBhbGlhc2VzLlxuICogICBQYXNzZWQgdG8gYGxvd2xpZ2h0LnJlZ2lzdGVyQWxpYXNgLlxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBIaWdobGlnaHRTeW50YXg+fSBbbGFuZ3VhZ2VzPXt9XVxuICogICBSZWdpc3RlciBtb3JlIGxhbmd1YWdlcy5cbiAqICAgRWFjaCBrZXkvdmFsdWUgcGFpciBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIGBsb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlYC5cbiAqL1xuXG5pbXBvcnQge2xvd2xpZ2h0fSBmcm9tICdsb3dsaWdodCdcbmltcG9ydCB7dG9UZXh0fSBmcm9tICdoYXN0LXV0aWwtdG8tdGV4dCdcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCB0aGUgc3ludGF4IG9mIGNvZGUgd2l0aCBsb3dsaWdodCAoYGhpZ2hsaWdodC5qc2ApLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IEFycmF5PHZvaWQ+LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlSGlnaGxpZ2h0KG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7YWxpYXNlcywgbGFuZ3VhZ2VzLCBwcmVmaXgsIHBsYWluVGV4dCwgaWdub3JlTWlzc2luZywgc3Vic2V0fSA9IG9wdGlvbnNcbiAgbGV0IG5hbWUgPSAnaGxqcydcblxuICBpZiAoYWxpYXNlcykge1xuICAgIGxvd2xpZ2h0LnJlZ2lzdGVyQWxpYXMoYWxpYXNlcylcbiAgfVxuXG4gIGlmIChsYW5ndWFnZXMpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQga2V5XG5cbiAgICBmb3IgKGtleSBpbiBsYW5ndWFnZXMpIHtcbiAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZXMsIGtleSkpIHtcbiAgICAgICAgbG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZShrZXksIGxhbmd1YWdlc1trZXldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcmVmaXgpIHtcbiAgICBjb25zdCBwb3MgPSBwcmVmaXguaW5kZXhPZignLScpXG4gICAgbmFtZSA9IHBvcyA+IC0xID8gcHJlZml4LnNsaWNlKDAsIHBvcykgOiBwcmVmaXhcbiAgfVxuXG4gIHJldHVybiAodHJlZSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSwgXywgZ2l2ZW5QYXJlbnQpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IC8qKiBAdHlwZSB7Tm9kZT99ICovIChnaXZlblBhcmVudClcblxuICAgICAgaWYgKFxuICAgICAgICAhcGFyZW50IHx8XG4gICAgICAgICEoJ3RhZ05hbWUnIGluIHBhcmVudCkgfHxcbiAgICAgICAgcGFyZW50LnRhZ05hbWUgIT09ICdwcmUnIHx8XG4gICAgICAgIG5vZGUudGFnTmFtZSAhPT0gJ2NvZGUnIHx8XG4gICAgICAgICFub2RlLnByb3BlcnRpZXNcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFuZyA9IGxhbmd1YWdlKG5vZGUpXG5cbiAgICAgIGlmIChcbiAgICAgICAgbGFuZyA9PT0gZmFsc2UgfHxcbiAgICAgICAgKCFsYW5nICYmIHN1YnNldCA9PT0gZmFsc2UpIHx8XG4gICAgICAgIChsYW5nICYmIHBsYWluVGV4dCAmJiBwbGFpblRleHQuaW5jbHVkZXMobGFuZykpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lID0gW11cbiAgICAgIH1cblxuICAgICAgaWYgKCFub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWUudW5zaGlmdChuYW1lKVxuICAgICAgfVxuXG4gICAgICAvKiogQHR5cGUge0xvd2xpZ2h0Um9vdH0gKi9cbiAgICAgIGxldCByZXN1bHRcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gbGFuZ1xuICAgICAgICAgID8gbG93bGlnaHQuaGlnaGxpZ2h0KGxhbmcsIHRvVGV4dChwYXJlbnQpLCB7cHJlZml4fSlcbiAgICAgICAgICA6IC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlIGNoZWNrZWQgdGhhdCBgc3Vic2V0YCBpcyBub3QgYSBib29sZWFuLlxuICAgICAgICAgICAgbG93bGlnaHQuaGlnaGxpZ2h0QXV0byh0b1RleHQocGFyZW50KSwge3ByZWZpeCwgc3Vic2V0fSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VwdGlvbiA9IC8qKiBAdHlwZSB7RXJyb3J9ICovIChlcnJvcilcbiAgICAgICAgaWYgKCFpZ25vcmVNaXNzaW5nIHx8ICEvVW5rbm93biBsYW5ndWFnZS8udGVzdChleGNlcHRpb24ubWVzc2FnZSkpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghbGFuZyAmJiByZXN1bHQuZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lLnB1c2goJ2xhbmd1YWdlLScgKyByZXN1bHQuZGF0YS5sYW5ndWFnZSlcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0LmNoaWxkcmVuKSAmJiByZXN1bHQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gcmVzdWx0LmNoaWxkcmVuXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge2ZhbHNlfHN0cmluZ3x1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIGxhbmd1YWdlKG5vZGUpIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS5wcm9wZXJ0aWVzICYmIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWVcbiAgbGV0IGluZGV4ID0gLTFcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBjbGFzc05hbWUubGVuZ3RoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcoY2xhc3NOYW1lW2luZGV4XSlcblxuICAgIGlmICh2YWx1ZSA9PT0gJ25vLWhpZ2hsaWdodCcgfHwgdmFsdWUgPT09ICdub2hpZ2hsaWdodCcpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh2YWx1ZS5zbGljZSgwLCA1KSA9PT0gJ2xhbmctJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDUpXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLnNsaWNlKDAsIDkpID09PSAnbGFuZ3VhZ2UtJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDkpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9jb3JlLmpzJykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvY29yZS5qcycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2NvcmUuanMnKS5BdXRvT3B0aW9uc30gQXV0b09wdGlvbnNcbiAqL1xuXG5leHBvcnQge2xvd2xpZ2h0fSBmcm9tICcuL2xpYi9jb21tb24uanMnXG4iLCAiaW1wb3J0IGFyZHVpbm8gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXJkdWlubydcbmltcG9ydCBiYXNoIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2gnXG5pbXBvcnQgYyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jJ1xuaW1wb3J0IGNwcCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jcHAnXG5pbXBvcnQgY3NoYXJwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycCdcbmltcG9ydCBjc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzJ1xuaW1wb3J0IGRpZmYgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGlmZidcbmltcG9ydCBnbyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9nbydcbmltcG9ydCBpbmkgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaW5pJ1xuaW1wb3J0IGphdmEgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YSdcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnXG5pbXBvcnQganNvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uJ1xuaW1wb3J0IGtvdGxpbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9rb3RsaW4nXG5pbXBvcnQgbGVzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sZXNzJ1xuaW1wb3J0IGx1YSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sdWEnXG5pbXBvcnQgbWFrZWZpbGUgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWFrZWZpbGUnXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWFya2Rvd24nXG5pbXBvcnQgb2JqZWN0aXZlYyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9vYmplY3RpdmVjJ1xuaW1wb3J0IHBlcmwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGVybCdcbmltcG9ydCBwaHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwJ1xuaW1wb3J0IHBocFRlbXBsYXRlIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC10ZW1wbGF0ZSdcbmltcG9ydCBwbGFpbnRleHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGxhaW50ZXh0J1xuaW1wb3J0IHB5dGhvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9weXRob24nXG5pbXBvcnQgcHl0aG9uUmVwbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9weXRob24tcmVwbCdcbmltcG9ydCByIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3InXG5pbXBvcnQgcnVieSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9ydWJ5J1xuaW1wb3J0IHJ1c3QgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVzdCdcbmltcG9ydCBzY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Njc3MnXG5pbXBvcnQgc2hlbGwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2hlbGwnXG5pbXBvcnQgc3FsIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NxbCdcbmltcG9ydCBzd2lmdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zd2lmdCdcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQnXG5pbXBvcnQgdmJuZXQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmJuZXQnXG5pbXBvcnQgeG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCdcbmltcG9ydCB5YW1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3lhbWwnXG5pbXBvcnQge2xvd2xpZ2h0fSBmcm9tICcuL2NvcmUuanMnXG5cbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2FyZHVpbm8nLCBhcmR1aW5vKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnYmFzaCcsIGJhc2gpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdjJywgYylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NwcCcsIGNwcClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzaGFycCcsIGNzaGFycClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzcycsIGNzcylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2RpZmYnLCBkaWZmKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnZ28nLCBnbylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2luaScsIGluaSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmEnLCBqYXZhKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdqc29uJywganNvbilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2tvdGxpbicsIGtvdGxpbilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2xlc3MnLCBsZXNzKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbHVhJywgbHVhKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbWFrZWZpbGUnLCBtYWtlZmlsZSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ21hcmtkb3duJywgbWFya2Rvd24pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdvYmplY3RpdmVjJywgb2JqZWN0aXZlYylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BlcmwnLCBwZXJsKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGhwLXRlbXBsYXRlJywgcGhwVGVtcGxhdGUpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdwbGFpbnRleHQnLCBwbGFpbnRleHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdweXRob24nLCBweXRob24pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdweXRob24tcmVwbCcsIHB5dGhvblJlcGwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdyJywgcilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3J1YnknLCBydWJ5KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncnVzdCcsIHJ1c3QpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzY3NzJywgc2Nzcylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3NoZWxsJywgc2hlbGwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzcWwnLCBzcWwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzd2lmdCcsIHN3aWZ0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgndHlwZXNjcmlwdCcsIHR5cGVzY3JpcHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCd2Ym5ldCcsIHZibmV0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgneWFtbCcsIHlhbWwpXG5cbmV4cG9ydCB7bG93bGlnaHR9IGZyb20gJy4vY29yZS5qcydcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5UZXh0fSBUZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoaWdobGlnaHQuanMnKS5IaWdobGlnaHRSZXN1bHR9IEhpZ2hsaWdodFJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuSExKU09wdGlvbnN9IEhpZ2hsaWdodE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hpZ2hsaWdodC5qcycpLkxhbmd1YWdlRm59IEhpZ2hsaWdodFN5bnRheFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuRW1pdHRlcn0gSGlnaGxpZ2h0RW1pdHRlclxuICpcbiAqIEB0eXBlZGVmIHt7dHlwZTogJ2VsZW1lbnQnLCB0YWdOYW1lOiAnc3BhbicsIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IEFycmF5PHN0cmluZz59LCBjaGlsZHJlbjogQXJyYXk8U3BhbnxUZXh0Pn19IFNwYW5cbiAqIEB0eXBlZGVmIHt7dHlwZTogJ3Jvb3QnLCBkYXRhOiB7bGFuZ3VhZ2U6IHN0cmluZ3xudWxsLCByZWxldmFuY2U6IG51bWJlcn0sIGNoaWxkcmVuOiBBcnJheTxTcGFufFRleHQ+fX0gUm9vdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV4dHJhT3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbc3Vic2V0XVxuICogICBMaXN0IG9mIGFsbG93ZWQgbGFuZ3VhZ2VzLCBkZWZhdWx0cyB0byBhbGwgcmVnaXN0ZXJlZCBsYW5ndWFnZXMuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtwcmVmaXg9J2hsanMtJ11cbiAqICAgQ2xhc3MgcHJlZml4LlxuICpcbiAqIEB0eXBlZGVmIHtPcHRpb25zICYgRXh0cmFPcHRpb25zfSBBdXRvT3B0aW9uc1xuICovXG5cbmltcG9ydCBoaWdoIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSdcbmltcG9ydCB7ZmF1bHR9IGZyb20gJ2ZhdWx0J1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5jb25zdCBkZWZhdWx0UHJlZml4ID0gJ2hsanMtJ1xuXG4vKipcbiAqIEhpZ2hsaWdodCBgdmFsdWVgIChjb2RlKSBhcyBgbGFuZ3VhZ2VgIChuYW1lKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqICAgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBDb2RlIHRvIGhpZ2hsaWdodC5cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnM9e31dXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7Um9vdH1cbiAqICAgQSBoYXN0IGBSb290YCBub2RlLlxuICovXG5mdW5jdGlvbiBoaWdobGlnaHQobGFuZ3VhZ2UsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHByZWZpeCA9IG9wdGlvbnMucHJlZml4XG5cbiAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBmYXVsdCgnRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIG5hbWUsIGdvdCBgJXNgJywgbGFuZ3VhZ2UpXG4gIH1cblxuICBpZiAoIWhpZ2guZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKSB7XG4gICAgdGhyb3cgZmF1bHQoJ1Vua25vd24gbGFuZ3VhZ2U6IGAlc2AgaXMgbm90IHJlZ2lzdGVyZWQnLCBsYW5ndWFnZSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgZmF1bHQoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciB2YWx1ZSwgZ290IGAlc2AnLCB2YWx1ZSlcbiAgfVxuXG4gIGlmIChwcmVmaXggPT09IG51bGwgfHwgcHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmVmaXggPSBkZWZhdWx0UHJlZml4XG4gIH1cblxuICBoaWdoLmNvbmZpZ3VyZSh7X19lbWl0dGVyOiBIYXN0RW1pdHRlciwgY2xhc3NQcmVmaXg6IHByZWZpeH0pXG5cbiAgY29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHtIaWdobGlnaHRSZXN1bHQgJiB7X2VtaXR0ZXI6IEhhc3RFbWl0dGVyfX0gKi8gKFxuICAgIGhpZ2guaGlnaGxpZ2h0KHZhbHVlLCB7bGFuZ3VhZ2UsIGlnbm9yZUlsbGVnYWxzOiB0cnVlfSlcbiAgKVxuXG4gIGhpZ2guY29uZmlndXJlKHt9KVxuXG4gIC8vIGBoaWdobGlnaHQuanNgIHNlZW1zIHRvIHVzZSB0aGlzIChjdXJyZW50bHkpIGZvciBicm9rZW4gZ3JhbW1hcnMsIHNvIGxldFx1MjAxOXNcbiAgLy8ga2VlcCBpdCBpbiB0aGVyZSBqdXN0IHRvIGJlIHN1cmUuXG4gIC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cbiAgaWYgKHJlc3VsdC5lcnJvclJhaXNlZCkge1xuICAgIHRocm93IHJlc3VsdC5lcnJvclJhaXNlZFxuICB9XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGxhbmd1YWdlYCBpcyBhbHdheXMgZGVmaW5lZCBpbiBgaGlnaGxpZ2h0YC5cbiAgcmVzdWx0Ll9lbWl0dGVyLnJvb3QuZGF0YS5sYW5ndWFnZSA9IHJlc3VsdC5sYW5ndWFnZVxuICByZXN1bHQuX2VtaXR0ZXIucm9vdC5kYXRhLnJlbGV2YW5jZSA9IHJlc3VsdC5yZWxldmFuY2VcblxuICByZXR1cm4gcmVzdWx0Ll9lbWl0dGVyLnJvb3Rcbn1cblxuLyoqXG4gKiBIaWdobGlnaHQgYHZhbHVlYCAoY29kZSkgYW5kIGd1ZXNzIGl0cyBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgQ29kZSB0byBoaWdobGlnaHQuXG4gKiBAcGFyYW0ge0F1dG9PcHRpb25zfSBbb3B0aW9ucz17fV1cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtSb290fVxuICogICBBIGhhc3QgYFJvb3RgIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodEF1dG8odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBzdWJzZXQgPSBvcHRpb25zLnN1YnNldCB8fCBoaWdoLmxpc3RMYW5ndWFnZXMoKVxuICBsZXQgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXhcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtSb290fSAqL1xuICBsZXQgcmVzdWx0ID0ge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBkYXRhOiB7bGFuZ3VhZ2U6IG51bGwsIHJlbGV2YW5jZTogMH0sXG4gICAgY2hpbGRyZW46IFtdXG4gIH1cblxuICBpZiAocHJlZml4ID09PSBudWxsIHx8IHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHJlZml4ID0gZGVmYXVsdFByZWZpeFxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBmYXVsdCgnRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIHZhbHVlLCBnb3QgYCVzYCcsIHZhbHVlKVxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBzdWJzZXQubGVuZ3RoKSB7XG4gICAgY29uc3QgbmFtZSA9IHN1YnNldFtpbmRleF1cblxuICAgIGlmICghaGlnaC5nZXRMYW5ndWFnZShuYW1lKSkgY29udGludWVcblxuICAgIGNvbnN0IGN1cnJlbnQgPSBoaWdobGlnaHQobmFtZSwgdmFsdWUsIG9wdGlvbnMpXG5cbiAgICBpZiAoY3VycmVudC5kYXRhLnJlbGV2YW5jZSA+IHJlc3VsdC5kYXRhLnJlbGV2YW5jZSkgcmVzdWx0ID0gY3VycmVudFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gKiAgIFByb2dyYW1taW5nIGxhbmd1YWdlIG5hbWUuXG4gKiBAcGFyYW0ge0hpZ2hsaWdodFN5bnRheH0gc3ludGF4XG4gKiAgIGBoaWdobGlnaHQuanNgIGxhbmd1YWdlIHN5bnRheC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlLCBzeW50YXgpIHtcbiAgaGlnaC5yZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlLCBzeW50YXgpXG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYWxpYXNlcyBmb3IgYWxyZWFkeSByZWdpc3RlcmVkIGxhbmd1YWdlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj59IGxhbmd1YWdlXG4gKiAgIFByb2dyYW1taW5nIGxhbmd1YWdlIG5hbWUgb3IgYSBtYXAgb2YgYGxhbmd1YWdlYHMgdG8gYGFsaWFzYGVzIG9yIGBsaXN0YHNcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IFthbGlhc11cbiAqICAgTmV3IGFsaWFzZXMgZm9yIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCByZWdpc3RlckFsaWFzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKChsYW5ndWFnZTogc3RyaW5nLCBhbGlhczogc3RyaW5nfEFycmF5PHN0cmluZz4pID0+IHZvaWQpICZcbiAgICogICAoKGFsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ3xBcnJheTxzdHJpbmc+PikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj59IGxhbmd1YWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gW2FsaWFzXVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChsYW5ndWFnZSwgYWxpYXMpIHtcbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHNob3VsZCBiZSBhIHN0cmluZyBpbiB0aGlzIG92ZXJsb2FkLlxuICAgICAgICBoaWdoLnJlZ2lzdGVyQWxpYXNlcyhhbGlhcywge2xhbmd1YWdlTmFtZTogbGFuZ3VhZ2V9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIGxldCBrZXlcblxuICAgICAgICBmb3IgKGtleSBpbiBsYW5ndWFnZSkge1xuICAgICAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZSwga2V5KSkge1xuICAgICAgICAgICAgaGlnaC5yZWdpc3RlckFsaWFzZXMobGFuZ3VhZ2Vba2V5XSwge2xhbmd1YWdlTmFtZToga2V5fSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIGBhbGlhc2Agb3IgYGxhbmd1YWdlYCBpcyByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhc09yTGFuZ3VhZ2VcbiAqICAgTmFtZSBvZiBhIHJlZ2lzdGVyZWQgbGFuZ3VhZ2Ugb3IgYWxpYXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgYWxpYXNPcmxhbmd1YWdlYCBpcyByZWdpc3RlcmVkLlxuICovXG5mdW5jdGlvbiByZWdpc3RlcmVkKGFsaWFzT3JMYW5ndWFnZSkge1xuICByZXR1cm4gQm9vbGVhbihoaWdoLmdldExhbmd1YWdlKGFsaWFzT3JMYW5ndWFnZSkpXG59XG5cbi8qKlxuICogTGlzdCByZWdpc3RlcmVkIGxhbmd1YWdlcy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqICAgTmFtZXMgb2YgcmVnaXN0ZXJlZCBsYW5ndWFnZS5cbiAqL1xuZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgcmV0dXJuIGhpZ2gubGlzdExhbmd1YWdlcygpXG59XG5cbi8qKiBAdHlwZSB7SGlnaGxpZ2h0RW1pdHRlcn0gKi9cbmNsYXNzIEhhc3RFbWl0dGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0T3B0aW9uc30gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8qKiBAdHlwZSB7SGlnaGxpZ2h0T3B0aW9uc30gKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgLyoqIEB0eXBlIHtSb290fSAqL1xuICAgIHRoaXMucm9vdCA9IHtcbiAgICAgIHR5cGU6ICdyb290JyxcbiAgICAgIGRhdGE6IHtsYW5ndWFnZTogbnVsbCwgcmVsZXZhbmNlOiAwfSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgICAvKiogQHR5cGUge1tSb290LCAuLi5TcGFuW11dfSAqL1xuICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5yb290XVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgYWRkVGV4dCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHJldHVyblxuXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGNvbnN0IHRhaWwgPSBjdXJyZW50LmNoaWxkcmVuW2N1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0YWlsLnZhbHVlICs9IHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgYWRkS2V5d29yZCh2YWx1ZSwgbmFtZSkge1xuICAgIHRoaXMub3Blbk5vZGUobmFtZSlcbiAgICB0aGlzLmFkZFRleHQodmFsdWUpXG4gICAgdGhpcy5jbG9zZU5vZGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SGFzdEVtaXR0ZXJ9IG90aGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBhZGRTdWJsYW5ndWFnZShvdGhlciwgbmFtZSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBjb25zdCByZXN1bHRzID0gb3RoZXIucm9vdC5jaGlsZHJlblxuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbbmFtZV19LFxuICAgICAgICBjaGlsZHJlbjogcmVzdWx0c1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5jaGlsZHJlbi5wdXNoKC4uLnJlc3VsdHMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBvcGVuTm9kZShuYW1lKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gbmFtZS5zcGxpdCgnLicpLm1hcCgoZCkgPT4gdGhpcy5vcHRpb25zLmNsYXNzUHJlZml4ICsgZClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgLyoqIEB0eXBlIHtTcGFufSAqL1xuICAgIGNvbnN0IGNoaWxkID0ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgcHJvcGVydGllczoge2NsYXNzTmFtZX0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG5cbiAgICBjdXJyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgdGhpcy5zdGFjay5wdXNoKGNoaWxkKVxuICB9XG5cbiAgLyoqXG4gICAqL1xuICBjbG9zZU5vZGUoKSB7XG4gICAgdGhpcy5zdGFjay5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqL1xuICBjbG9zZUFsbE5vZGVzKCkge31cblxuICAvKipcbiAgICovXG4gIGZpbmFsaXplKCkge31cblxuICAvKipcbiAgICovXG4gIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG93bGlnaHQgPSB7XG4gIGhpZ2hsaWdodCxcbiAgaGlnaGxpZ2h0QXV0byxcbiAgcmVnaXN0ZXJMYW5ndWFnZSxcbiAgcmVnaXN0ZXJlZCxcbiAgbGlzdExhbmd1YWdlcyxcbiAgcmVnaXN0ZXJBbGlhc1xufVxuIiwgIi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBmb3JtYXR0ZXIgZnJvbSAnZm9ybWF0J1xuXG5leHBvcnQgY29uc3QgZmF1bHQgPSBPYmplY3QuYXNzaWduKGNyZWF0ZShFcnJvciksIHtcbiAgZXZhbDogY3JlYXRlKEV2YWxFcnJvciksXG4gIHJhbmdlOiBjcmVhdGUoUmFuZ2VFcnJvciksXG4gIHJlZmVyZW5jZTogY3JlYXRlKFJlZmVyZW5jZUVycm9yKSxcbiAgc3ludGF4OiBjcmVhdGUoU3ludGF4RXJyb3IpLFxuICB0eXBlOiBjcmVhdGUoVHlwZUVycm9yKSxcbiAgdXJpOiBjcmVhdGUoVVJJRXJyb3IpXG59KVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBgRUNvbnN0cnVjdG9yYCwgd2l0aCB0aGUgZm9ybWF0dGVkIGBmb3JtYXRgIGFzIGEgZmlyc3QgYXJndW1lbnQuXG4gKlxuICogQHRlbXBsYXRlIHtFcnJvcn0gRmF1bHRcbiAqIEB0ZW1wbGF0ZSB7bmV3IChyZWFzb246IHN0cmluZykgPT4gRmF1bHR9IENsYXNzXG4gKiBAcGFyYW0ge0NsYXNzfSBDb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKENvbnN0cnVjdG9yKSB7XG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIEZvcm1hdHRlZEVycm9yLmRpc3BsYXlOYW1lID0gQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgQ29uc3RydWN0b3IubmFtZVxuXG4gIHJldHVybiBGb3JtYXR0ZWRFcnJvclxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXJyb3Igd2l0aCBhIHByaW50Zi1saWtlIGZvcm1hdHRlZCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBbZm9ybWF0XVxuICAgKiAgIFRlbXBsYXRlIHN0cmluZy5cbiAgICogQHBhcmFtIHsuLi51bmtub3dufSB2YWx1ZXNcbiAgICogICBWYWx1ZXMgdG8gcmVuZGVyIGluIGBmb3JtYXRgLlxuICAgKiBAcmV0dXJucyB7RmF1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBGb3JtYXR0ZWRFcnJvcihmb3JtYXQsIC4uLnZhbHVlcykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGNvbnN0IHJlYXNvbiA9IGZvcm1hdCA/IGZvcm1hdHRlcihmb3JtYXQsIC4uLnZhbHVlcykgOiBmb3JtYXRcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHJlYXNvbilcbiAgfVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKS5UZXN0RnVuY3Rpb25Bbnl0aGluZ30gVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnRbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gSGFzdENoaWxkXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuVGV4dH0gSGFzdFRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Db21tZW50fSBIYXN0Q29tbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IEhhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gSGFzdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Qcm9wZXJ0aWVzfSBIYXN0UHJvcGVydGllc1xuICogQHR5cGVkZWYge0hhc3RDaGlsZHxIYXN0Um9vdH0gSGFzdE5vZGVcbiAqIEB0eXBlZGVmIHtIYXN0Um9vdHxIYXN0RWxlbWVudH0gSGFzdFBhcmVudFxuICpcbiAqIEB0eXBlZGVmIHsnbm9ybWFsJ3wncHJlJ3wnbm93cmFwJ3wncHJlLXdyYXAnfSBXaGl0ZXNwYWNlXG4gKiBAdHlwZWRlZiB7Ym9vbGVhbn0gQnJlYWtWYWx1ZVxuICogQHR5cGVkZWYgezF8Mn0gQnJlYWtOdW1iZXJcbiAqIEB0eXBlZGVmIHsnXFxuJ30gQnJlYWtGb3JjZVxuICogQHR5cGVkZWYge0JyZWFrVmFsdWV8QnJlYWtOdW1iZXJ8dW5kZWZpbmVkfSBCcmVha0JlZm9yZVxuICogQHR5cGVkZWYge0JyZWFrVmFsdWV8QnJlYWtOdW1iZXJ8QnJlYWtGb3JjZXx1bmRlZmluZWR9IEJyZWFrQWZ0ZXJcbiAqXG4gKiBAdHlwZWRlZiBDb2xsZWN0aW9uT3B0aW9uc1xuICogQHByb3BlcnR5IHtXaGl0ZXNwYWNlfSB3aGl0ZXNwYWNlXG4gKiBAcHJvcGVydHkge0JyZWFrQmVmb3JlfSBicmVha0JlZm9yZVxuICogQHByb3BlcnR5IHtCcmVha0FmdGVyfSBicmVha0FmdGVyXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtXaGl0ZXNwYWNlfSBbd2hpdGVzcGFjZT0nbm9ybWFsJ11cbiAqICAgSW5pdGlhbCBDU1Mgd2hpdGVzcGFjZSBzZXR0aW5nIHRvIHVzZS5cbiAqL1xuXG5pbXBvcnQge2NvbnZlcnRFbGVtZW50fSBmcm9tICdoYXN0LXV0aWwtaXMtZWxlbWVudCdcbmltcG9ydCB7ZmluZEFmdGVyfSBmcm9tICd1bmlzdC11dGlsLWZpbmQtYWZ0ZXInXG5cbmNvbnN0IHNlYXJjaExpbmVGZWVkcyA9IC9cXG4vZ1xuY29uc3Qgc2VhcmNoVGFiT3JTcGFjZXMgPSAvW1xcdCBdKy9nXG5cbmNvbnN0IGJyID0gY29udmVydEVsZW1lbnQoJ2JyJylcbmNvbnN0IHAgPSBjb252ZXJ0RWxlbWVudCgncCcpXG5jb25zdCBjZWxsID0gY29udmVydEVsZW1lbnQoWyd0aCcsICd0ZCddKVxuY29uc3Qgcm93ID0gY29udmVydEVsZW1lbnQoJ3RyJylcblxuLy8gTm90ZSB0aGF0IHdlIGRvblx1MjAxOXQgbmVlZCB0byBpbmNsdWRlIHZvaWQgZWxlbWVudHMgaGVyZSBhcyB0aGV5IGRvblx1MjAxOXQgaGF2ZSB0ZXh0LlxuLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9odG1sLXZvaWQtZWxlbWVudHM+XG5jb25zdCBub3RSZW5kZXJlZCA9IGNvbnZlcnRFbGVtZW50KFtcbiAgLy8gTGlzdCBmcm9tOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jaGlkZGVuLWVsZW1lbnRzPlxuICAnZGF0YWxpc3QnLFxuICAnaGVhZCcsXG4gICdub2VtYmVkJyxcbiAgJ25vZnJhbWVzJyxcbiAgJ25vc2NyaXB0JywgLy8gQWN0IGFzIGlmIHdlIHN1cHBvcnQgc2NyaXB0aW5nLlxuICAncnAnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RpdGxlJyxcbiAgLy8gSGlkZGVuIGF0dHJpYnV0ZS5cbiAgaGlkZGVuLFxuICAvLyBGcm9tOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTM+XG4gIGNsb3NlZERpYWxvZ1xuXSlcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWNzcy11c2VyLWFnZW50LXN0eWxlLXNoZWV0LWFuZC1wcmVzZW50YXRpb25hbC1oaW50cz5cbmNvbnN0IGJsb2NrT3JDYXB0aW9uID0gY29udmVydEVsZW1lbnQoW1xuICAnYWRkcmVzcycsIC8vIEZsb3cgY29udGVudFxuICAnYXJ0aWNsZScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnYXNpZGUnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2Jsb2NrcXVvdGUnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2JvZHknLCAvLyBQYWdlXG4gICdjYXB0aW9uJywgLy8gYHRhYmxlLWNhcHRpb25gXG4gICdjZW50ZXInLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ2RkJywgLy8gTGlzdHNcbiAgJ2RpYWxvZycsIC8vIEZsb3cgY29udGVudFxuICAnZGlyJywgLy8gTGlzdHMgKGxlZ2FjeSlcbiAgJ2RsJywgLy8gTGlzdHNcbiAgJ2R0JywgLy8gTGlzdHNcbiAgJ2RpdicsIC8vIEZsb3cgY29udGVudFxuICAnZmlndXJlJywgLy8gRmxvdyBjb250ZW50XG4gICdmaWdjYXB0aW9uJywgLy8gRmxvdyBjb250ZW50XG4gICdmb290ZXInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2Zvcm0sJywgLy8gRmxvdyBjb250ZW50XG4gICdoMScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDInLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2gzJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoNCcsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDUnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2g2JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoZWFkZXInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2hncm91cCcsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaHInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2h0bWwnLCAvLyBQYWdlXG4gICdsZWdlbmQnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2xpc3RpbmcnLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ21haW4nLCAvLyBGbG93IGNvbnRlbnRcbiAgJ21lbnUnLCAvLyBMaXN0c1xuICAnbmF2JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdvbCcsIC8vIExpc3RzXG4gICdwJywgLy8gRmxvdyBjb250ZW50XG4gICdwbGFpbnRleHQnLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ3ByZScsIC8vIEZsb3cgY29udGVudFxuICAnc2VjdGlvbicsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAndWwnLCAvLyBMaXN0c1xuICAneG1wJyAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbl0pXG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGBpbm5lclRleHRgIGdldHRlcjpcbiAqIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaW5uZXJ0ZXh0LWlkbC1hdHRyaWJ1dGU+XG4gKiBOb3RlIHRoYXQgd2UgYWN0IGFzIGlmIGBub2RlYCBpcyBiZWluZyByZW5kZXJlZCwgYW5kIGFzIGlmIHdlXHUyMDE5cmUgYVxuICogQ1NTLXN1cHBvcnRpbmcgdXNlciBhZ2VudC5cbiAqXG4gKiBAcGFyYW0ge0hhc3ROb2RlfSBub2RlXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dChub2RlLCBvcHRpb25zID0ge30pIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48SGFzdENoaWxkPn0gKi9cbiAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW11cbiAgY29uc3QgYmxvY2sgPSBibG9ja09yQ2FwdGlvbihub2RlKVxuICBjb25zdCB3aGl0ZXNwYWNlID0gaW5mZXJXaGl0ZXNwYWNlKG5vZGUsIHtcbiAgICB3aGl0ZXNwYWNlOiBvcHRpb25zLndoaXRlc3BhY2UgfHwgJ25vcm1hbCcsXG4gICAgYnJlYWtCZWZvcmU6IGZhbHNlLFxuICAgIGJyZWFrQWZ0ZXI6IGZhbHNlXG4gIH0pXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZ3xCcmVha051bWJlcj59ICovXG4gIGxldCByZXN1bHRzXG4gIC8qKiBAdHlwZSB7c3RyaW5nfEJyZWFrTnVtYmVyfSAqL1xuICBsZXQgdmFsdWVcbiAgLyoqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfSAqL1xuICBsZXQgY291bnRcblxuICAvLyBUcmVhdCBgdGV4dGAgYW5kIGBjb21tZW50YCBhcyBoYXZpbmcgbm9ybWFsIHdoaXRlLXNwYWNlLlxuICAvLyBUaGlzIGRldmlhdGVzIGZyb20gdGhlIHNwZWMgYXMgaW4gdGhlIERPTSB0aGUgbm9kZVx1MjAxOXMgYC5kYXRhYCBoYXMgdG8gYmVcbiAgLy8gcmV0dXJuZWQuXG4gIC8vIElmIHlvdSB3YW50IHRoYXQgYmVoYXZpb3IgdXNlIGBoYXN0LXV0aWwtdG8tc3RyaW5nYC5cbiAgLy8gQWxsIG90aGVyIG5vZGVzIGFyZSBsYXRlciBoYW5kbGVkIGFzIGlmIHRoZXkgYXJlIGBlbGVtZW50YHMgKHNvIHRoZVxuICAvLyBhbGdvcml0aG0gYWxzbyB3b3JrcyBvbiBhIGByb290YCkuXG4gIC8vIE5vZGVzIHdpdGhvdXQgY2hpbGRyZW4gYXJlIHRyZWF0ZWQgYXMgYSB2b2lkIGVsZW1lbnQsIHNvIGBkb2N0eXBlYCBpcyB0aHVzXG4gIC8vIGlnbm9yZWQuXG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0JyB8fCBub2RlLnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgIHJldHVybiBjb2xsZWN0VGV4dChub2RlLCB7d2hpdGVzcGFjZSwgYnJlYWtCZWZvcmU6IHRydWUsIGJyZWFrQWZ0ZXI6IHRydWV9KVxuICB9XG5cbiAgLy8gMS4gIElmIHRoaXMgZWxlbWVudCBpcyBub3QgYmVpbmcgcmVuZGVyZWQsIG9yIGlmIHRoZSB1c2VyIGFnZW50IGlzIGFcbiAgLy8gICAgIG5vbi1DU1MgdXNlciBhZ2VudCwgdGhlbiByZXR1cm4gdGhlIHNhbWUgdmFsdWUgYXMgdGhlIHRleHRDb250ZW50IElETFxuICAvLyAgICAgYXR0cmlidXRlIG9uIHRoaXMgZWxlbWVudC5cbiAgLy9cbiAgLy8gICAgIE5vdGU6IHdlXHUyMDE5cmUgbm90IHN1cHBvcnRpbmcgc3R5bGVzaGVldHMgc28gd2VcdTIwMTlyZSBhY3RpbmcgYXMgaWYgdGhlIG5vZGVcbiAgLy8gICAgIGlzIHJlbmRlcmVkLlxuICAvL1xuICAvLyAgICAgSWYgeW91IHdhbnQgdGhhdCBiZWhhdmlvciB1c2UgYGhhc3QtdXRpbC10by1zdHJpbmdgLlxuICAvLyAgICAgSW1wb3J0YW50OiB3ZVx1MjAxOWxsIGhhdmUgdG8gYWNjb3VudCBmb3IgdGhpcyBsYXRlciB0aG91Z2guXG5cbiAgLy8gMi4gIExldCByZXN1bHRzIGJlIGEgbmV3IGVtcHR5IGxpc3QuXG4gIHJlc3VsdHMgPSBbXVxuXG4gIC8vIDMuICBGb3IgZWFjaCBjaGlsZCBub2RlIG5vZGUgb2YgdGhpcyBlbGVtZW50OlxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIC8vIDMuMS4gTGV0IGN1cnJlbnQgYmUgdGhlIGxpc3QgcmVzdWx0aW5nIGluIHJ1bm5pbmcgdGhlIGlubmVyIHRleHRcbiAgICAvLyAgICAgIGNvbGxlY3Rpb24gc3RlcHMgd2l0aCBub2RlLlxuICAgIC8vICAgICAgRWFjaCBpdGVtIGluIHJlc3VsdHMgd2lsbCBlaXRoZXIgYmUgYSBKYXZhU2NyaXB0IHN0cmluZyBvciBhXG4gICAgLy8gICAgICBwb3NpdGl2ZSBpbnRlZ2VyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpLlxuICAgIC8vIDMuMi4gRm9yIGVhY2ggaXRlbSBpdGVtIGluIGN1cnJlbnQsIGFwcGVuZCBpdGVtIHRvIHJlc3VsdHMuXG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgaW5uZXJUZXh0Q29sbGVjdGlvbihjaGlsZHJlbltpbmRleF0sIG5vZGUsIHtcbiAgICAgICAgd2hpdGVzcGFjZSxcbiAgICAgICAgYnJlYWtCZWZvcmU6IGluZGV4ID8gbnVsbCA6IGJsb2NrLFxuICAgICAgICBicmVha0FmdGVyOlxuICAgICAgICAgIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IGJyKGNoaWxkcmVuW2luZGV4ICsgMV0pIDogYmxvY2tcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLy8gNC4gIFJlbW92ZSBhbnkgaXRlbXMgZnJvbSByZXN1bHRzIHRoYXQgYXJlIHRoZSBlbXB0eSBzdHJpbmcuXG4gIC8vIDUuICBSZW1vdmUgYW55IHJ1bnMgb2YgY29uc2VjdXRpdmUgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCBpdGVtcyBhdCB0aGVcbiAgLy8gICAgIHN0YXJ0IG9yIGVuZCBvZiByZXN1bHRzLlxuICAvLyA2LiAgUmVwbGFjZSBlYWNoIHJlbWFpbmluZyBydW4gb2YgY29uc2VjdXRpdmUgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudFxuICAvLyAgICAgaXRlbXMgd2l0aCBhIHN0cmluZyBjb25zaXN0aW5nIG9mIGFzIG1hbnkgVSswMDBBIExJTkUgRkVFRCAoTEYpXG4gIC8vICAgICBjaGFyYWN0ZXJzIGFzIHRoZSBtYXhpbXVtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHJlcXVpcmVkIGxpbmUgYnJlYWtcbiAgLy8gICAgIGNvdW50IGl0ZW1zLlxuICBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCByZXN1bHRzLmxlbmd0aCkge1xuICAgIHZhbHVlID0gcmVzdWx0c1tpbmRleF1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoY291bnQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+IGNvdW50KSBjb3VudCA9IHZhbHVlXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGNvdW50KSByZXN1bHQucHVzaCgnXFxuJy5yZXBlYXQoY291bnQpKVxuICAgICAgY291bnQgPSAwXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICAvLyA3LiAgUmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzdHJpbmcgaXRlbXMgaW4gcmVzdWx0cy5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vKipcbiAqIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNpbm5lci10ZXh0LWNvbGxlY3Rpb24tc3RlcHM+XG4gKlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtIYXN0UGFyZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48c3RyaW5nfEJyZWFrTnVtYmVyPn1cbiAqL1xuZnVuY3Rpb24gaW5uZXJUZXh0Q29sbGVjdGlvbihub2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3RFbGVtZW50KG5vZGUsIHBhcmVudCwgb3B0aW9ucylcbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBbXG4gICAgICBvcHRpb25zLndoaXRlc3BhY2UgPT09ICdub3JtYWwnXG4gICAgICAgID8gY29sbGVjdFRleHQobm9kZSwgb3B0aW9ucylcbiAgICAgICAgOiBjb2xsZWN0UHJlVGV4dChub2RlKVxuICAgIF1cbiAgfVxuXG4gIHJldHVybiBbXVxufVxuXG4vKipcbiAqIENvbGxlY3QgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hhc3RFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0hhc3RQYXJlbnR9IHBhcmVudFxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjb2xsZWN0RWxlbWVudChub2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgLy8gRmlyc3Qgd2UgaW5mZXIgdGhlIGB3aGl0ZS1zcGFjZWAgcHJvcGVydHkuXG4gIGNvbnN0IHdoaXRlc3BhY2UgPSBpbmZlcldoaXRlc3BhY2Uobm9kZSwgb3B0aW9ucylcbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZ3xCcmVha051bWJlcj59ICovXG4gIGxldCBpdGVtcyA9IFtdXG4gIC8qKiBAdHlwZSB7QnJlYWtOdW1iZXJ8dW5kZWZpbmVkfSAqL1xuICBsZXQgcHJlZml4XG4gIC8qKiBAdHlwZSB7QnJlYWtOdW1iZXJ8QnJlYWtGb3JjZXx1bmRlZmluZWR9ICovXG4gIGxldCBzdWZmaXhcblxuICAvLyBXZVx1MjAxOXJlIGlnbm9yaW5nIHBvaW50IDMsIGFuZCBleGl0aW5nIHdpdGhvdXQgYW55IGNvbnRlbnQgaGVyZSwgYmVjYXVzZSB3ZVxuICAvLyBkZXZpYXRlZCBmcm9tIHRoZSBzcGVjIGluIGB0b1RleHRgIGF0IHN0ZXAgMy5cbiAgaWYgKG5vdFJlbmRlcmVkKG5vZGUpKSB7XG4gICAgcmV0dXJuIGl0ZW1zXG4gIH1cblxuICAvLyBOb3RlOiB3ZSBmaXJzdCBkZXRlY3QgaWYgdGhlcmUgaXMgZ29pbmcgdG8gYmUgYSBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgdGhlXG4gIC8vIGNvbnRlbnRzLCBhcyB0aGF0IGNoYW5nZXMgdGhlIHdoaXRlLXNwYWNlIGhhbmRsaW5nLlxuXG4gIC8vIDIuICBJZiBub2RlXHUyMDE5cyBjb21wdXRlZCB2YWx1ZSBvZiBgdmlzaWJpbGl0eWAgaXMgbm90IGB2aXNpYmxlYCwgdGhlbiByZXR1cm5cbiAgLy8gICAgIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgTm90ZTogSWdub3JlZCwgYXMgZXZlcnl0aGluZyBpcyB2aXNpYmxlIGJ5IGRlZmF1bHQgdXNlciBhZ2VudCBzdHlsZXMuXG5cbiAgLy8gMy4gIElmIG5vZGUgaXMgbm90IGJlaW5nIHJlbmRlcmVkLCB0aGVuIHJldHVybiBpdGVtcy4gWy4uLl1cbiAgLy9cbiAgLy8gICAgIE5vdGU6IFdlIGFscmVhZHkgZGlkIHRoaXMgYWJvdmUuXG5cbiAgLy8gU2VlIGBjb2xsZWN0VGV4dGAgZm9yIHN0ZXAgNC5cblxuICAvLyA1LiAgSWYgbm9kZSBpcyBhIGA8YnI+YCBlbGVtZW50LCB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlXG4gIC8vICAgICBVKzAwMEEgTElORSBGRUVEIChMRikgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICBpZiAoYnIobm9kZSkpIHtcbiAgICBzdWZmaXggPSAnXFxuJ1xuICB9XG5cbiAgLy8gNy4gIElmIG5vZGVcdTIwMTlzIGNvbXB1dGVkIHZhbHVlIG9mIGBkaXNwbGF5YCBpcyBgdGFibGUtcm93YCwgYW5kIG5vZGVcdTIwMTlzIENTU1xuICAvLyAgICAgYm94IGlzIG5vdCB0aGUgbGFzdCBgdGFibGUtcm93YCBib3ggb2YgdGhlIG5lYXJlc3QgYW5jZXN0b3IgYHRhYmxlYFxuICAvLyAgICAgYm94LCB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlIFUrMDAwQSBMSU5FIEZFRUQgKExGKVxuICAvLyAgICAgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGFibGVzLTI+XG4gIC8vICAgICBOb3RlOiBuZWVkcyBmdXJ0aGVyIGludmVzdGlnYXRpb24gYXMgdGhpcyBkb2VzIG5vdCBhY2NvdW50IGZvciBpbXBsaWNpdFxuICAvLyAgICAgcm93cy5cbiAgZWxzZSBpZiAocm93KG5vZGUpICYmIGZpbmRBZnRlcihwYXJlbnQsIG5vZGUsIHJvdykpIHtcbiAgICBzdWZmaXggPSAnXFxuJ1xuICB9XG5cbiAgLy8gOC4gIElmIG5vZGUgaXMgYSBgPHA+YCBlbGVtZW50LCB0aGVuIGFwcGVuZCAyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpXG4gIC8vICAgICBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaXRlbXMuXG4gIGVsc2UgaWYgKHAobm9kZSkpIHtcbiAgICBwcmVmaXggPSAyXG4gICAgc3VmZml4ID0gMlxuICB9XG5cbiAgLy8gOS4gIElmIG5vZGVcdTIwMTlzIHVzZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGJsb2NrLWxldmVsIG9yIGB0YWJsZS1jYXB0aW9uYCxcbiAgLy8gICAgIHRoZW4gYXBwZW5kIDEgKGEgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCkgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mXG4gIC8vICAgICBpdGVtcy5cbiAgZWxzZSBpZiAoYmxvY2tPckNhcHRpb24obm9kZSkpIHtcbiAgICBwcmVmaXggPSAxXG4gICAgc3VmZml4ID0gMVxuICB9XG5cbiAgLy8gMS4gIExldCBpdGVtcyBiZSB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgdGhlIGlubmVyIHRleHQgY29sbGVjdGlvbiBzdGVwcyB3aXRoXG4gIC8vICAgICBlYWNoIGNoaWxkIG5vZGUgb2Ygbm9kZSBpbiB0cmVlIG9yZGVyLCBhbmQgdGhlbiBjb25jYXRlbmF0aW5nIHRoZVxuICAvLyAgICAgcmVzdWx0cyB0byBhIHNpbmdsZSBsaXN0LlxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KFxuICAgICAgaW5uZXJUZXh0Q29sbGVjdGlvbihjaGlsZHJlbltpbmRleF0sIG5vZGUsIHtcbiAgICAgICAgd2hpdGVzcGFjZSxcbiAgICAgICAgYnJlYWtCZWZvcmU6IGluZGV4ID8gdW5kZWZpbmVkIDogcHJlZml4LFxuICAgICAgICBicmVha0FmdGVyOlxuICAgICAgICAgIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IGJyKGNoaWxkcmVuW2luZGV4ICsgMV0pIDogc3VmZml4XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIC8vIDYuICBJZiBub2RlXHUyMDE5cyBjb21wdXRlZCB2YWx1ZSBvZiBgZGlzcGxheWAgaXMgYHRhYmxlLWNlbGxgLCBhbmQgbm9kZVx1MjAxOXMgQ1NTXG4gIC8vICAgICBib3ggaXMgbm90IHRoZSBsYXN0IGB0YWJsZS1jZWxsYCBib3ggb2YgaXRzIGVuY2xvc2luZyBgdGFibGUtcm93YCBib3gsXG4gIC8vICAgICB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTlxuICAvLyAgICAgKHRhYikgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGFibGVzLTI+XG4gIGlmIChjZWxsKG5vZGUpICYmIGZpbmRBZnRlcihwYXJlbnQsIG5vZGUsIGNlbGwpKSB7XG4gICAgaXRlbXMucHVzaCgnXFx0JylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgcHJlLSBhbmQgc3VmZml4LlxuICBpZiAocHJlZml4KSBpdGVtcy51bnNoaWZ0KHByZWZpeClcbiAgaWYgKHN1ZmZpeCkgaXRlbXMucHVzaChzdWZmaXgpXG5cbiAgcmV0dXJuIGl0ZW1zXG59XG5cbi8qKlxuICogNC4gIElmIG5vZGUgaXMgYSBUZXh0IG5vZGUsIHRoZW4gZm9yIGVhY2ggQ1NTIHRleHQgYm94IHByb2R1Y2VkIGJ5IG5vZGUsXG4gKiAgICAgaW4gY29udGVudCBvcmRlciwgY29tcHV0ZSB0aGUgdGV4dCBvZiB0aGUgYm94IGFmdGVyIGFwcGxpY2F0aW9uIG9mIHRoZVxuICogICAgIENTUyBgd2hpdGUtc3BhY2VgIHByb2Nlc3NpbmcgcnVsZXMgYW5kIGB0ZXh0LXRyYW5zZm9ybWAgcnVsZXMsIHNldFxuICogICAgIGl0ZW1zIHRvIHRoZSBsaXN0IG9mIHRoZSByZXN1bHRpbmcgc3RyaW5ncywgYW5kIHJldHVybiBpdGVtcy5cbiAqICAgICBUaGUgQ1NTIGB3aGl0ZS1zcGFjZWAgcHJvY2Vzc2luZyBydWxlcyBhcmUgc2xpZ2h0bHkgbW9kaWZpZWQ6XG4gKiAgICAgY29sbGFwc2libGUgc3BhY2VzIGF0IHRoZSBlbmQgb2YgbGluZXMgYXJlIGFsd2F5cyBjb2xsYXBzZWQsIGJ1dCB0aGV5XG4gKiAgICAgYXJlIG9ubHkgcmVtb3ZlZCBpZiB0aGUgbGluZSBpcyB0aGUgbGFzdCBsaW5lIG9mIHRoZSBibG9jaywgb3IgaXQgZW5kc1xuICogICAgIHdpdGggYSBiciBlbGVtZW50LlxuICogICAgIFNvZnQgaHlwaGVucyBzaG91bGQgYmUgcHJlc2VydmVkLlxuICpcbiAqICAgICBOb3RlOiBTZWUgYGNvbGxlY3RUZXh0YCBhbmQgYGNvbGxlY3RQcmVUZXh0YC5cbiAqICAgICBOb3RlOiB3ZSBkb25cdTIwMTl0IGRlYWwgd2l0aCBgdGV4dC10cmFuc2Zvcm1gLCBubyBlbGVtZW50IGhhcyB0aGF0IGJ5XG4gKiAgICAgZGVmYXVsdC5cbiAqXG4gKiBTZWU6IDxodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXRleHQvI3doaXRlLXNwYWNlLXBoYXNlLTE+XG4gKlxuICogQHBhcmFtIHtIYXN0VGV4dHxIYXN0Q29tbWVudH0gbm9kZVxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29sbGVjdFRleHQobm9kZSwgb3B0aW9ucykge1xuICBjb25zdCB2YWx1ZSA9IFN0cmluZyhub2RlLnZhbHVlKVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmc+fSAqL1xuICBjb25zdCBsaW5lcyA9IFtdXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaEFycmF5fG51bGx9ICovXG4gIGxldCBtYXRjaFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IGVuZFxuICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXG4gIGxldCBqb2luXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoTGluZUZlZWRzLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2hMaW5lRmVlZHMuZXhlYyh2YWx1ZSlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgaW5kZXhgIGlzIHNldC5cbiAgICBlbmQgPSBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG5cbiAgICBsaW5lcy5wdXNoKFxuICAgICAgLy8gQW55IHNlcXVlbmNlIG9mIGNvbGxhcHNpYmxlIHNwYWNlcyBhbmQgdGFicyBpbW1lZGlhdGVseSBwcmVjZWRpbmcgb3JcbiAgICAgIC8vIGZvbGxvd2luZyBhIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZC5cbiAgICAgIHRyaW1BbmRDb2xsYXBzZVNwYWNlc0FuZFRhYnMoXG4gICAgICAgIC8vIFsuLi5dIGlnbm9yaW5nIGJpZGkgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIChjaGFyYWN0ZXJzIHdpdGggdGhlXG4gICAgICAgIC8vIEJpZGlfQ29udHJvbCBwcm9wZXJ0eSBbVUFYOV06IEFMTSwgTFRSLCBSVEwsIExSRS1STE8sIExSSS1QREkpIGFzIGlmXG4gICAgICAgIC8vIHRoZXkgd2VyZSBub3QgdGhlcmUuXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwNjFDXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVcXHUyMDY2LVxcdTIwNjldL2csICcnKSxcbiAgICAgICAgb3B0aW9ucy5icmVha0JlZm9yZSxcbiAgICAgICAgb3B0aW9ucy5icmVha0FmdGVyXG4gICAgICApXG4gICAgKVxuXG4gICAgc3RhcnQgPSBlbmQgKyAxXG4gIH1cblxuICAvLyBDb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrcyBhcmUgdHJhbnNmb3JtZWQgZm9yIHJlbmRlcmluZyBhY2NvcmRpbmcgdG8gdGhlXG4gIC8vIHNlZ21lbnQgYnJlYWsgdHJhbnNmb3JtYXRpb24gcnVsZXMuXG4gIC8vIFNvIGhlcmUgd2UganVtcCB0byA0LjEuMiBvZiBbQ1NTVEVYVF06XG4gIC8vIEFueSBjb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBhbm90aGVyIGNvbGxhcHNpYmxlXG4gIC8vIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZFxuICB3aGlsZSAoKytpbmRleCA8IGxpbmVzLmxlbmd0aCkge1xuICAgIC8vICogICBJZiB0aGUgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSBvciBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2VnbWVudFxuICAgIC8vICAgICBicmVhayBpcyB0aGUgemVyby13aWR0aCBzcGFjZSBjaGFyYWN0ZXIgKFUrMjAwQiksIHRoZW4gdGhlIGJyZWFrIGlzXG4gICAgLy8gICAgIHJlbW92ZWQsIGxlYXZpbmcgYmVoaW5kIHRoZSB6ZXJvLXdpZHRoIHNwYWNlLlxuICAgIGlmIChcbiAgICAgIGxpbmVzW2luZGV4XS5jaGFyQ29kZUF0KGxpbmVzW2luZGV4XS5sZW5ndGggLSAxKSA9PT0gMHgyMDBiIC8qIFpXU1AgKi8gfHxcbiAgICAgIChpbmRleCA8IGxpbmVzLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgbGluZXNbaW5kZXggKyAxXS5jaGFyQ29kZUF0KDApID09PSAweDIwMGIpIC8qIFpXU1AgKi9cbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmVzW2luZGV4XSlcbiAgICAgIGpvaW4gPSAnJ1xuICAgIH1cblxuICAgIC8vICogICBPdGhlcndpc2UsIGlmIHRoZSBFYXN0IEFzaWFuIFdpZHRoIHByb3BlcnR5IFtVQVgxMV0gb2YgYm90aCB0aGVcbiAgICAvLyAgICAgY2hhcmFjdGVyIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlZ21lbnQgYnJlYWsgaXMgRnVsbHdpZHRoLCBXaWRlLCBvclxuICAgIC8vICAgICBIYWxmd2lkdGggKG5vdCBBbWJpZ3VvdXMpLCBhbmQgbmVpdGhlciBzaWRlIGlzIEhhbmd1bCwgdGhlbiB0aGVcbiAgICAvLyAgICAgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gICAgIE5vdGU6IGlnbm9yZWQuXG4gICAgLy8gKiAgIE90aGVyd2lzZSwgaWYgdGhlIHdyaXRpbmcgc3lzdGVtIG9mIHRoZSBzZWdtZW50IGJyZWFrIGlzIENoaW5lc2UsXG4gICAgLy8gICAgIEphcGFuZXNlLCBvciBZaSwgYW5kIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSBzZWdtZW50IGJyZWFrXG4gICAgLy8gICAgIGlzIHB1bmN0dWF0aW9uIG9yIGEgc3ltYm9sIChVbmljb2RlIGdlbmVyYWwgY2F0ZWdvcnkgUCogb3IgUyopIGFuZFxuICAgIC8vICAgICBoYXMgYW4gRWFzdCBBc2lhbiBXaWR0aCBwcm9wZXJ0eSBvZiBBbWJpZ3VvdXMsIGFuZCB0aGUgY2hhcmFjdGVyIG9uXG4gICAgLy8gICAgIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBzZWdtZW50IGJyZWFrIGlzIEZ1bGx3aWR0aCwgV2lkZSwgb3IgSGFsZndpZHRoLFxuICAgIC8vICAgICBhbmQgbm90IEhhbmd1bCwgdGhlbiB0aGUgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gICAgIE5vdGU6IGlnbm9yZWQuXG5cbiAgICAvLyAqICAgT3RoZXJ3aXNlLCB0aGUgc2VnbWVudCBicmVhayBpcyBjb252ZXJ0ZWQgdG8gYSBzcGFjZSAoVSswMDIwKS5cbiAgICBlbHNlIGlmIChsaW5lc1tpbmRleF0pIHtcbiAgICAgIGlmIChqb2luKSByZXN1bHQucHVzaChqb2luKVxuICAgICAgcmVzdWx0LnB1c2gobGluZXNbaW5kZXhdKVxuICAgICAgam9pbiA9ICcgJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hhc3RUZXh0fEhhc3RDb21tZW50fSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb2xsZWN0UHJlVGV4dChub2RlKSB7XG4gIHJldHVybiBTdHJpbmcobm9kZS52YWx1ZSlcbn1cblxuLyoqXG4gKiAzLiAgRXZlcnkgY29sbGFwc2libGUgdGFiIGlzIGNvbnZlcnRlZCB0byBhIGNvbGxhcHNpYmxlIHNwYWNlIChVKzAwMjApLlxuICogNC4gIEFueSBjb2xsYXBzaWJsZSBzcGFjZSBpbW1lZGlhdGVseSBmb2xsb3dpbmcgYW5vdGhlciBjb2xsYXBzaWJsZVxuICogICAgIHNwYWNlXHUyMDE0ZXZlbiBvbmUgb3V0c2lkZSB0aGUgYm91bmRhcnkgb2YgdGhlIGlubGluZSBjb250YWluaW5nIHRoYXRcbiAqICAgICBzcGFjZSwgcHJvdmlkZWQgYm90aCBzcGFjZXMgYXJlIHdpdGhpbiB0aGUgc2FtZSBpbmxpbmUgZm9ybWF0dGluZ1xuICogICAgIGNvbnRleHRcdTIwMTRpcyBjb2xsYXBzZWQgdG8gaGF2ZSB6ZXJvIGFkdmFuY2Ugd2lkdGguIChJdCBpcyBpbnZpc2libGUsXG4gKiAgICAgYnV0IHJldGFpbnMgaXRzIHNvZnQgd3JhcCBvcHBvcnR1bml0eSwgaWYgYW55LilcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QnJlYWtCZWZvcmV9IGJyZWFrQmVmb3JlXG4gKiBAcGFyYW0ge0JyZWFrQWZ0ZXJ9IGJyZWFrQWZ0ZXJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW1BbmRDb2xsYXBzZVNwYWNlc0FuZFRhYnModmFsdWUsIGJyZWFrQmVmb3JlLCBicmVha0FmdGVyKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaEFycmF5fG51bGx9ICovXG4gIGxldCBtYXRjaFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IGVuZFxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaFRhYk9yU3BhY2VzLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2hUYWJPclNwYWNlcy5leGVjKHZhbHVlKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBpbmRleGAgaXMgc2V0LlxuICAgIGVuZCA9IG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGhcblxuICAgIC8vIElmIHdlXHUyMDE5cmUgbm90IGRpcmVjdGx5IGFmdGVyIGEgc2VnbWVudCBicmVhaywgYnV0IHRoZXJlIHdhcyB3aGl0ZSBzcGFjZSxcbiAgICAvLyBhZGQgYW4gZW1wdHkgdmFsdWUgdGhhdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgc3BhY2UuXG4gICAgaWYgKCFzdGFydCAmJiAhZW5kICYmIG1hdGNoICYmICFicmVha0JlZm9yZSkge1xuICAgICAgcmVzdWx0LnB1c2goJycpXG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICAgIH1cblxuICAgIHN0YXJ0ID0gbWF0Y2ggPyBlbmQgKyBtYXRjaFswXS5sZW5ndGggOiBlbmRcbiAgfVxuXG4gIC8vIElmIHdlIHJlYWNoZWQgdGhlIGVuZCwgdGhlcmUgd2FzIHRyYWlsaW5nIHdoaXRlIHNwYWNlLCBhbmQgdGhlcmVcdTIwMTlzIG5vXG4gIC8vIHNlZ21lbnQgYnJlYWsgYWZ0ZXIgdGhpcyBub2RlLCBhZGQgYW4gZW1wdHkgdmFsdWUgdGhhdCB3aWxsIGJlIHR1cm5lZFxuICAvLyBpbnRvIGEgc3BhY2UuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBlbmRgIGlzIGRlZmluZWQuXG4gIGlmIChzdGFydCAhPT0gZW5kICYmICFicmVha0FmdGVyKSB7XG4gICAgcmVzdWx0LnB1c2goJycpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKVxufVxuXG4vKipcbiAqIFdlIGRvblx1MjAxOXQgc3VwcG9ydCB2b2lkIGVsZW1lbnRzIGhlcmUgKHNvIGBub2JyIHdicmAgLT4gYG5vcm1hbGAgaXMgaWdub3JlZCkuXG4gKlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge1doaXRlc3BhY2V9XG4gKi9cbmZ1bmN0aW9uIGluZmVyV2hpdGVzcGFjZShub2RlLCBvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7SGFzdFByb3BlcnRpZXN9ICovXG4gIGxldCBwcm9wc1xuXG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzIHx8IHt9XG4gICAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcbiAgICAgIGNhc2UgJ2xpc3RpbmcnOlxuICAgICAgY2FzZSAncGxhaW50ZXh0JzpcbiAgICAgIGNhc2UgJ3htcCc6XG4gICAgICAgIHJldHVybiAncHJlJ1xuICAgICAgY2FzZSAnbm9icic6XG4gICAgICAgIHJldHVybiAnbm93cmFwJ1xuICAgICAgY2FzZSAncHJlJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLndyYXAgPyAncHJlLXdyYXAnIDogJ3ByZSdcbiAgICAgIGNhc2UgJ3RkJzpcbiAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLm5vV3JhcCA/ICdub3dyYXAnIDogb3B0aW9ucy53aGl0ZXNwYWNlXG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIHJldHVybiAncHJlLXdyYXAnXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLndoaXRlc3BhY2Vcbn1cblxuLyoqIEB0eXBlIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gKi9cbmZ1bmN0aW9uIGhpZGRlbihub2RlKSB7XG4gIHJldHVybiBCb29sZWFuKChub2RlLnByb3BlcnRpZXMgfHwge30pLmhpZGRlbilcbn1cblxuLyoqIEB0eXBlIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gKi9cbmZ1bmN0aW9uIGNsb3NlZERpYWxvZyhub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdkaWFsb2cnICYmICEobm9kZS5wcm9wZXJ0aWVzIHx8IHt9KS5vcGVuXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVHlwZX0gVHlwZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlByb3BzfSBQcm9wc1xuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvbkFueXRoaW5nfSBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcblxuZXhwb3J0IHZhciBmaW5kQWZ0ZXIgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICg8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFBhcmVudCwgaW5kZXg6IE5vZGV8bnVtYmVyLCB0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj4pID0+IFR8bnVsbCkgJlxuICAgKiAgKChub2RlOiBQYXJlbnQsIGluZGV4OiBOb2RlfG51bWJlciwgdGVzdD86IG51bGx8dW5kZWZpbmVkfFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXk8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZz4pID0+IE5vZGV8bnVsbClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BhcmVudH0gcGFyZW50IFBhcmVudCBub2RlXG4gICAgICogQHBhcmFtIHtOb2RlfG51bWJlcn0gaW5kZXggQ2hpbGQgb2YgYHBhcmVudGAsIG9yIGl0XHUyMDE5cyBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVsbHx1bmRlZmluZWR8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheTxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gW3Rlc3RdIGlzLWNvbXBhdGlibGUgdGVzdCAoc3VjaCBhcyBhIHR5cGUpXG4gICAgICogQHJldHVybnMge05vZGV8bnVsbH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyZW50LCBpbmRleCwgdGVzdCkge1xuICAgICAgdmFyIGlzID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyIGFzIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihpbmRleClcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGlsZCBub2RlIG9yIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGlzKHBhcmVudC5jaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0LCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCBNZXRhLCBTY3JpcHRzLCBMaW5rcywgTGluayB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgcGF0aCwgZnMgfSBmcm9tICd+L3V0aWxzL3BhdGguc2VydmVyJztcclxuaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSAnfi91dGlscy9jb21waWxlLW1keC5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBzYXZlT2JqZWN0SW5BbGdvbGlhIH0gZnJvbSAnfi91dGlscy9hbGdvbGlhJztcclxuXHJcbnR5cGUgRnJvbnRtYXR0ZXIgPSB7XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRwdWJsaXNoZWQ6IERhdGU7XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHRzbHVnOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXREaXJlY3RvcmllcyA9IChzb3VyY2U6IGFueSkgPT5cclxuXHRmc1xyXG5cdFx0LnJlYWRkaXJTeW5jKHNvdXJjZSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXHJcblx0XHQuZmlsdGVyKChkaXJlbnQ6IGFueSkgPT4gZGlyZW50LmlzRGlyZWN0b3J5KCkpXHJcblx0XHQubWFwKChkaXJlbnQ6IGFueSkgPT4gZGlyZW50Lm5hbWUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgUGF0aFRvUG9zdHMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3RzJyk7XHJcblx0Y29uc3QgcG9zdERpcnMgPSBhd2FpdCBnZXREaXJlY3RvcmllcyhQYXRoVG9Qb3N0cyk7XHJcblx0Ly8gcG9zdERpcnMgPT0gWyAnZG91YmxlLXRlc3QnLCAndGVzdC1tZHgnIF1cclxuXHRjb25zdCBwb3N0RnJvbnRtYXR0ZXI6IEFycmF5PHt9PiA9IHBvc3REaXJzLm1hcChhc3luYyAocG9zdFRpdGxlOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncG9zdHMnLCBgJHtwb3N0VGl0bGV9YCwgJ2luZGV4Lm1keCcpO1xyXG5cdFx0Y29uc3Qgcm9vdERpciA9IFBhdGhUb01EWC5yZXBsYWNlKC9pbmRleC5tZHg/JC8sICcnKTtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XHJcblx0XHRcdHNvdXJjZTogZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgJ3V0ZjgnKSxcclxuXHRcdFx0Y3dkOiByb290RGlyXHJcblx0XHR9KTtcclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcclxuXHRcdHNhdmVPYmplY3RJbkFsZ29saWEoeyBvYmplY3RJRDogcG9zdFRpdGxlLCAuLi5yZXN1bHQuZnJvbnRtYXR0ZXIsIGNvbnRlbnQ6IHJlc3VsdC5tYXR0ZXIuY29udGVudCB9KTtcclxuXHRcdHJldHVybiB7IC4uLnJlc3VsdC5mcm9udG1hdHRlciwgc2x1ZzogcG9zdFRpdGxlIH07XHJcblx0fSk7XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKHBvc3RGcm9udG1hdHRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXgoKSB7XHJcblx0Y29uc3QgcG9zdHMgPSB1c2VMb2FkZXJEYXRhPEZyb250bWF0dGVyW10+KCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5Qb3N0czwvaDI+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7cG9zdHMubWFwKChwb3N0OiBGcm9udG1hdHRlcikgPT4gKFxyXG5cdFx0XHRcdFx0PGxpIGtleT17cG9zdC5zbHVnfT5cclxuXHRcdFx0XHRcdFx0PExpbmsgdG89e3Bvc3Quc2x1Z30+e3Bvc3QudGl0bGV9PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwgImltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnO1xyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdHQzYxN1IyWEdDJywgJzNmYWE5NzFhNDE1NTA4MzUwOWQxYmI5OTFkZjdkNTE0Jyk7XHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQmxvZycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVPYmplY3RJbkFsZ29saWEob2JqOiBPYmplY3QpIHtcclxuICBpZiAoIShcIm9iamVjdElEXCIgaW4gb2JqKSkgcmV0dXJuIG51bGxcclxuICBpbmRleC5zYXZlT2JqZWN0KG9iailcclxufSIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5YTQwMWE1YicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTE9VWEdUSU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtST1pPR1NRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQTZFTjVQM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWVpCNUlMUEYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nJzp7J2lkJzoncm91dGVzL2Jsb2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLVhZNkYzRFlMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9ibG9nLyRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOic6c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRzbHVnLUFFM09XTUxDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VzY0Nko2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9pbmRleC1UN1ZESktXTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1c2NDZKNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVkRGRVVEQlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOUE0MDFBNUIuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFB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
