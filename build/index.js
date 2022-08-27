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
var import_remix4 = __toESM(require_remix());

// app/components/navbar.tsx
init_react();
var import_remix3 = __toESM(require_remix());
var import_react2 = __toESM(require("react"));
var import_react_instantsearch_hooks2 = require("react-instantsearch-hooks");

// app/components/Search.tsx
init_react();
var import_react = require("react");
var import_react_instantsearch_hooks = require("react-instantsearch-hooks");
var import_remix2 = __toESM(require_remix());
function Hits({ hitComponent: Hit2 }, props) {
  const { query } = (0, import_react_instantsearch_hooks.useSearchBox)(props);
  const { hits } = (0, import_react_instantsearch_hooks.useHits)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 absolute"
  }, /* @__PURE__ */ React.createElement("ol", null, query.length > 0 && hits.map((hit) => /* @__PURE__ */ React.createElement("li", {
    key: hit.objectID,
    className: "text-sm\r\n						py-2\r\n						px-4\r\n						font-normal\r\n						block\r\n						w-full\r\n						rounded-lg\r\n						whitespace-nowrap\r\n						bg-transparent\r\n						text-gray-700\r\n						hover:bg-gray-200"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: `garden/${hit.objectID}`
  }, /* @__PURE__ */ React.createElement(Hit2, {
    hit
  }))))));
}
function Hit({ hit }) {
  return /* @__PURE__ */ React.createElement("h1", null, hit.title);
}
function SearchBox(props) {
  const { query, refine } = (0, import_react_instantsearch_hooks.useSearchBox)(props);
  const [inputValue, setInputValue] = (0, import_react.useState)("");
  const inputRef = (0, import_react.useRef)(null);
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
  return /* @__PURE__ */ React.createElement("input", {
    ref: inputRef,
    className: "block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder: "Search...",
    spellCheck: false,
    maxLength: 511,
    type: "search",
    value: inputValue,
    onChange: (event) => setInputValue(event.currentTarget.value)
  });
}

// app/components/navbar.tsx
var import_lite = __toESM(require("algoliasearch/lite"));
function Navbar() {
  const searchClient = (0, import_lite.default)("GC617R2XGC", "f7e9fa99847d55da0f06182f82281ba3");
  return /* @__PURE__ */ import_react2.default.createElement(import_react_instantsearch_hooks2.InstantSearch, {
    searchClient,
    indexName: "Blog"
  }, /* @__PURE__ */ import_react2.default.createElement("nav", {
    className: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-md dark:bg-gray-800"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container flex flex-wrap items-center justify-between mx-auto"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/",
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white"
  }, "NHeinDev")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex md:order-2"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative hidden mr-3 md:mr-0 md:block"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "w-5 h-5 text-gray-500",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ import_react2.default.createElement(SearchBox, null), /* @__PURE__ */ import_react2.default.createElement(Hits, {
    hitComponent: Hit
  })), /* @__PURE__ */ import_react2.default.createElement("button", {
    "data-collapse-toggle": "mobile-menu-3",
    type: "button",
    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "mobile-menu-3",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "hidden w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
    id: "mobile-menu-3"
  }, /* @__PURE__ */ import_react2.default.createElement("ul", {
    className: "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
  }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/garden",
    className: "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    "aria-current": "page"
  }, "Garden")))))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SVQU2OXF.css";

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
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\garden.tsx
var garden_exports = {};
__export(garden_exports, {
  default: () => Blog,
  links: () => links2
});
init_react();
var import_agate = __toESM(require_agate());
var import_remix5 = __toESM(require_remix());
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
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\garden\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => PostSlug,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix6 = __toESM(require_remix());
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

// route:C:\Users\Noah\dev\blog\app\routes\garden\$slug.tsx
var meta2 = ({ data }) => {
  var _a;
  return { title: ((_a = data == null ? void 0 : data.frontmatter) == null ? void 0 : _a.title) || "Probably a 404" };
};
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
  const { code, frontmatter } = (0, import_remix6.useLoaderData)();
  const Component = React3.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("header", null, /* @__PURE__ */ React3.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React3.createElement("p", null, frontmatter.description)), /* @__PURE__ */ React3.createElement("main", null, /* @__PURE__ */ React3.createElement(Component, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React3.createElement("html", null, /* @__PURE__ */ React3.createElement("head", null, /* @__PURE__ */ React3.createElement("title", null, "Oh no!"), /* @__PURE__ */ React3.createElement(import_remix6.Meta, null), /* @__PURE__ */ React3.createElement(import_remix6.Links, null)), /* @__PURE__ */ React3.createElement("body", null, /* @__PURE__ */ React3.createElement("h1", null, "Whoops! Looks like you found an error. Sorry about that :("), /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("strong", null, "Error message:"), " ", error.message)), /* @__PURE__ */ React3.createElement(import_remix6.Scripts, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\garden\index.tsx
var garden_exports2 = {};
__export(garden_exports2, {
  default: () => BlogIndex,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());

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

// route:C:\Users\Noah\dev\blog\app\routes\garden\index.tsx
var import_remove_markdown = __toESM(require("remove-markdown"));
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
    const content = (0, import_remove_markdown.default)(fs.readFileSync(PathToMDX, "utf8"));
    saveObjectInAlgolia(__spreadValues({
      objectID: postTitle,
      content
    }, result.frontmatter));
    return __spreadProps(__spreadValues({}, result.frontmatter), { slug: postTitle });
  });
  return Promise.all(postFrontmatter);
};
function BlogIndex() {
  const posts = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: post.slug
  }, post.title)))));
}

// route:C:\Users\Noah\dev\blog\app\routes\admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links3
});
init_react();
var import_agate2 = __toESM(require_agate());
var import_remix8 = __toESM(require_remix());
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: import_agate2.default
    }
  ];
};
function Admin() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid prose grid-cols-4 p-4 ridjustify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement("h1", null, " gm admin "), /* @__PURE__ */ React.createElement("ul", {
    className: "ml-2 list-disc"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "create"
  }, "create post")), /* @__PURE__ */ React.createElement("li", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "delete"
  }, "delete post")), /* @__PURE__ */ React.createElement("li", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "update"
  }, "update post")))), /* @__PURE__ */ React.createElement("div", {
    className: "py-10 col-span-3 prose lg:prose-xl"
  }, /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)));
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

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c487c117", "entry": { "module": "/build/entry.client-YS4P43IM.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-WTUJHYHL.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-55XH7JIN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-S4RQ76VT.js", "imports": ["/build/_shared/chunk-ALYWDE44.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/garden": { "id": "routes/garden", "parentId": "root", "path": "garden", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/garden-CPIXT2GP.js", "imports": ["/build/_shared/chunk-ALYWDE44.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/garden/$slug": { "id": "routes/garden/$slug", "parentId": "routes/garden", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/garden/$slug-QNKHZDOD.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/garden/index": { "id": "routes/garden/index", "parentId": "routes/garden", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/garden/index-DHYVTUQM.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VDFEUDBY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C487C117.js" };

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
  "routes/garden": {
    id: "routes/garden",
    parentId: "root",
    path: "garden",
    index: void 0,
    caseSensitive: void 0,
    module: garden_exports
  },
  "routes/garden/$slug": {
    id: "routes/garden/$slug",
    parentId: "routes/garden",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/garden/index": {
    id: "routes/garden/index",
    parentId: "routes/garden",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: garden_exports2
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcTm9haFxcZGV2XFxibG9nXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VhcmNoLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGdhcmRlbi50c3giLCAicm91dGU6QzpcXFVzZXJzXFxOb2FoXFxkZXZcXGJsb2dcXGFwcFxccm91dGVzXFxnYXJkZW5cXCRzbHVnLnRzeCIsICIuLi9hcHAvdXRpbHMvcGF0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlci50cyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLXNsdWcvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oYXMtcHJvcGVydHkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oZWFkaW5nLXJhbmsvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1zbHVnL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tc3RyaW5nL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtc2x1Zy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1jb2RlLXRpdGxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtY29kZS10aXRsZXMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2xpZ2h0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29tbW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29yZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmF1bHQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by10ZXh0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWZpbmQtYWZ0ZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1oaWdobGlnaHQvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCAicm91dGU6QzpcXFVzZXJzXFxOb2FoXFxkZXZcXGJsb2dcXGFwcFxccm91dGVzXFxnYXJkZW5cXGluZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvYWxnb2xpYS50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGFkbWluLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGdhcmRlbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGdhcmRlblxcXFwkc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGdhcmRlblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGFkbWluLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxOb2FoXFxcXGRldlxcXFxibG9nXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9nYXJkZW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2dhcmRlblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJnYXJkZW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2dhcmRlbi8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ2FyZGVuLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZ2FyZGVuXCIsXG4gICAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9nYXJkZW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2dhcmRlbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2dhcmRlblwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2FkbWluXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZG1pblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMaW5rc0Z1bmN0aW9uLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7IEluc3RhbnRTZWFyY2ggfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWhvb2tzJztcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHsgdGl0bGU6IFwiTm9haCdzIGJsb2dcIiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiBbIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9IF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuXHRcdFx0XHQ8TWV0YSAvPlxyXG5cdFx0XHRcdDxMaW5rcyAvPlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0XHQ8T3V0bGV0IC8+XHJcblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcblx0XHRcdFx0PFNjcmlwdHMgLz5cclxuXHRcdFx0XHR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XHJcblx0XHRcdDwvYm9keT5cclxuXHRcdDwvaHRtbD5cclxuXHQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBJbnN0YW50U2VhcmNoLFxyXG59IGZyb20gXCJyZWFjdC1pbnN0YW50c2VhcmNoLWhvb2tzXCI7XHJcblxyXG5pbXBvcnQgeyBIaXRzLCBIaXQsIFNlYXJjaEJveCB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tIFwiYWxnb2xpYXNlYXJjaC9saXRlXCI7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3Qgc2VhcmNoQ2xpZW50ID0gYWxnb2xpYXNlYXJjaChcclxuICAgIFwiR0M2MTdSMlhHQ1wiLFxyXG4gICAgXCJmN2U5ZmE5OTg0N2Q1NWRhMGYwNjE4MmY4MjI4MWJhM1wiXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEluc3RhbnRTZWFyY2ggc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9IGluZGV4TmFtZT1cIkJsb2dcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgcHgtMiBzbTpweC00IHB5LTIuNSByb3VuZGVkLWItbWQgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgTkhlaW5EZXZcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOm9yZGVyLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbXItMyBtZDptci0wIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8U2VhcmNoQm94IC8+XHJcbiAgICAgICAgICAgICAgPEhpdHMgaGl0Q29tcG9uZW50PXtIaXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgZGF0YS1jb2xsYXBzZS10b2dnbGU9XCJtb2JpbGUtbWVudS0zXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIG1sLTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudS0zXCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiXHJcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiB3LTYgaC02XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIlxyXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gdy1mdWxsIG1kOmZsZXggbWQ6dy1hdXRvIG1kOm9yZGVyLTFcIlxyXG4gICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51LTNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC00IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOnRleHQtc20gbWQ6Zm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz1cIi9nYXJkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweS0yIHBsLTMgcHItNCB0ZXh0LWdyYXktNzAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTUwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIG1kOmRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHYXJkZW5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9JbnN0YW50U2VhcmNoPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE5hdmJhciB9O1xyXG4iLCAiaW1wb3J0IHsgSGl0IGFzIEFsZ29saWFIaXQgfSBmcm9tIFwiQGFsZ29saWEvY2xpZW50LXNlYXJjaFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1c2VIaXRzLFxyXG4gIFVzZUhpdHNQcm9wcyxcclxuICB1c2VTZWFyY2hCb3gsXHJcbiAgVXNlU2VhcmNoQm94UHJvcHMsXHJcbn0gZnJvbSBcInJlYWN0LWluc3RhbnRzZWFyY2gtaG9va3NcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQm94UHJvcHMgPSBVc2VTZWFyY2hCb3hQcm9wcztcclxuXHJcbmV4cG9ydCB0eXBlIEhpdHNQcm9wczxUSGl0PiA9IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICZcclxuICBVc2VIaXRzUHJvcHMgJiB7XHJcbiAgICBoaXRDb21wb25lbnQ6IChwcm9wczogeyBoaXQ6IFRIaXQgfSkgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIaXRzPFRIaXQgZXh0ZW5kcyBBbGdvbGlhSGl0PFJlY29yZDxzdHJpbmcsIHVua25vd24+Pj4oXHJcbiAgeyBoaXRDb21wb25lbnQ6IEhpdCB9OiBIaXRzUHJvcHM8VEhpdD4sXHJcbiAgcHJvcHM6IFNlYXJjaEJveFByb3BzXHJcbikge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVNlYXJjaEJveChwcm9wcyk7XHJcbiAgY29uc3QgeyBoaXRzIH0gPSB1c2VIaXRzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBzbTp0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgYWJzb2x1dGVcIj5cclxuICAgICAgPG9sPlxyXG4gICAgICAgIHtxdWVyeS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBoaXRzLm1hcCgoaGl0KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17aGl0Lm9iamVjdElEfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc21cclxuXHRcdFx0XHRcdFx0cHktMlxyXG5cdFx0XHRcdFx0XHRweC00XHJcblx0XHRcdFx0XHRcdGZvbnQtbm9ybWFsXHJcblx0XHRcdFx0XHRcdGJsb2NrXHJcblx0XHRcdFx0XHRcdHctZnVsbFxyXG5cdFx0XHRcdFx0XHRyb3VuZGVkLWxnXHJcblx0XHRcdFx0XHRcdHdoaXRlc3BhY2Utbm93cmFwXHJcblx0XHRcdFx0XHRcdGJnLXRyYW5zcGFyZW50XHJcblx0XHRcdFx0XHRcdHRleHQtZ3JheS03MDBcclxuXHRcdFx0XHRcdFx0aG92ZXI6YmctZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89e2BnYXJkZW4vJHtoaXQub2JqZWN0SUR9YH0+XHJcbiAgICAgICAgICAgICAgICA8SGl0IGhpdD17aGl0IGFzIHVua25vd24gYXMgVEhpdH0gLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9vbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIaXQoeyBoaXQgfTogeyBoaXQ6IGFueSB9KSB7XHJcbiAgcmV0dXJuIDxoMT57aGl0LnRpdGxlfTwvaDE+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQm94KHByb3BzOiBTZWFyY2hCb3hQcm9wcykge1xyXG4gIGNvbnN0IHsgcXVlcnksIHJlZmluZSB9ID0gdXNlU2VhcmNoQm94KHByb3BzKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgLy8gVHJhY2sgd2hlbiB0aGUgdmFsdWUgY29taW5nIGZyb20gdGhlIFJlYWN0IHN0YXRlIGNoYW5nZXMgdG8gc3luY2hyb25pemVcclxuICAvLyBpdCB3aXRoIEluc3RhbnRTZWFyY2guXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChxdWVyeSAhPT0gaW5wdXRWYWx1ZSkge1xyXG4gICAgICByZWZpbmUoaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lucHV0VmFsdWUsIHJlZmluZV0pO1xyXG5cclxuICAvLyBUcmFjayB3aGVuIHRoZSBJbnN0YW50U2VhcmNoIHF1ZXJ5IGNoYW5nZXMgdG8gc3luY2hyb25pemUgaXQgd2l0aFxyXG4gIC8vIHRoZSBSZWFjdCBzdGF0ZS5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQnlwYXNzIHRoZSBzdGF0ZSB1cGRhdGUgaWYgdGhlIGlucHV0IGlzIGZvY3VzZWQgdG8gYXZvaWQgY29uY3VycmVudFxyXG4gICAgLy8gdXBkYXRlcyB3aGVuIHR5cGluZy5cclxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dFJlZi5jdXJyZW50ICYmIHF1ZXJ5ICE9PSBpbnB1dFZhbHVlKSB7XHJcbiAgICAgIHNldElucHV0VmFsdWUocXVlcnkpO1xyXG4gICAgfVxyXG4gIH0sIFtxdWVyeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTIgcGwtMTAgdGV4dC1ncmF5LTkwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBzbTp0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxyXG4gICAgICBhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XHJcbiAgICAgIG1heExlbmd0aD17NTExfVxyXG4gICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hZ2F0ZS5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBPdXRsZXQgfSBmcm9tICdyZW1peCc7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIFtcclxuXHRcdHtcclxuXHRcdFx0cmVsOiAnc3R5bGVzaGVldCcsXHJcblx0XHRcdGhyZWY6IHN0eWxlc1xyXG5cdFx0fVxyXG5cdF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0xMCBwcm9zZSBsZzpwcm9zZS14bFwiPlxyXG5cdFx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIExpbmtzLFxyXG4gIExvYWRlckZ1bmN0aW9uLFxyXG4gIE1ldGEsXHJcbiAgTWV0YUZ1bmN0aW9uLFxyXG4gIFNjcmlwdHMsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XHJcbmltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gXCJtZHgtYnVuZGxlci9jbGllbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHBhdGgsIGZzIH0gZnJvbSBcIn4vdXRpbHMvcGF0aC5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIn4vdXRpbHMvY29tcGlsZS1tZHguc2VydmVyXCI7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiO1xyXG5pbXBvcnQgcmVoeXBlQ29kZVRpdGxlcyBmcm9tIFwicmVoeXBlLWNvZGUtdGl0bGVzXCI7XHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIjtcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBkYXRhPy5mcm9udG1hdHRlcj8udGl0bGUgfHwgXCJQcm9iYWJseSBhIDQwNFwiIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xyXG4gIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcclxuICAgIHByb2Nlc3MuY3dkKCksXHJcbiAgICBcInBvc3RzXCIsXHJcbiAgICBgJHtwYXJhbXMuc2x1Z31gLFxyXG4gICAgXCJpbmRleC5tZHhcIlxyXG4gICk7XHJcbiAgY29uc3Qgcm9vdERpciA9IFBhdGhUb01EWC5yZXBsYWNlKC9pbmRleC5tZHg/JC8sIFwiXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBidW5kbGVNRFgoe1xyXG4gICAgICBzb3VyY2U6IGZzLnJlYWRGaWxlU3luYyhQYXRoVG9NRFgsIFwidXRmOFwiKSxcclxuICAgICAgY3dkOiByb290RGlyLFxyXG4gICAgICB4ZG1PcHRpb25zKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLnJlaHlwZVBsdWdpbnMgPSBbXHJcbiAgICAgICAgICAuLi4ob3B0aW9ucz8ucmVoeXBlUGx1Z2lucyA/PyBbXSksXHJcbiAgICAgICAgICByZWh5cGVIaWdobGlnaHQsXHJcbiAgICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgICAgcmVoeXBlQ29kZVRpdGxlcyxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogW1wiYW5jaG9yXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHsgY29kZSwgZnJvbnRtYXR0ZXIgfSA9IHJlc3VsdDtcclxuICAgIHJldHVybiB7IGNvZGUsIGZyb250bWF0dGVyIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgRGlkbid0IGZpbmQgYW55IGJsb2cgcG9zdCBhdCBibG9nLyR7cGFyYW1zLnNsdWd9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XHJcbiAgY29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUpLCBbY29kZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT57ZnJvbnRtYXR0ZXIudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57ZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWw+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDx0aXRsZT5PaCBubyE8L3RpdGxlPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPGgxPldob29wcyEgTG9va3MgbGlrZSB5b3UgZm91bmQgYW4gZXJyb3IuIFNvcnJ5IGFib3V0IHRoYXQgOig8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgbWVzc2FnZTo8L3N0cm9uZz4ge2Vycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmV4cG9ydCB7IHBhdGgsIGZzIH07XHJcbiIsICJpbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tIFwibWR4LWJ1bmRsZXJcIjtcclxudHlwZSBHaXRIdWJGaWxlID0geyBwYXRoOiBzdHJpbmcgfTtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XHJcbmltcG9ydCByZWh5cGVDb2RlVGl0bGVzIGZyb20gJ3JlaHlwZS1jb2RlLXRpdGxlcyc7XHJcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gJ3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncyc7XHJcbmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSBcInJlaHlwZS1oaWdobGlnaHRcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbXBpbGVNZHgoc2x1Zzogc3RyaW5nLCBnaXRodWJGaWxlczogQXJyYXk8R2l0SHViRmlsZT4pIHtcclxuICBjb25zdCBpbmRleFJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtzbHVnfVxcXFwvaW5kZXgubWR4PyRgKTtcclxuICBjb25zdCBpbmRleEZpbGUgPSBnaXRodWJGaWxlcy5maW5kKCh7IHBhdGggfSkgPT4gaW5kZXhSZWdleC50ZXN0KHBhdGgpKTtcclxuICBpZiAoIWluZGV4RmlsZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgcm9vdERpciA9IGluZGV4RmlsZS5wYXRoLnJlcGxhY2UoL2luZGV4Lm1keD8kLywgXCJcIik7XHJcbiAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGluZGV4RmlsZS5wYXRoLCBcInV0ZjhcIik7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSBcIndpbjMyXCIpIHtcclxuICAgICAgcHJvY2Vzcy5lbnYuRVNCVUlMRF9CSU5BUllfUEFUSCA9IHBhdGguam9pbihcclxuICAgICAgICBwcm9jZXNzLmN3ZCgpLFxyXG4gICAgICAgIFwibm9kZV9tb2R1bGVzXCIsXHJcbiAgICAgICAgXCJlc2J1aWxkXCIsXHJcbiAgICAgICAgXCJlc2J1aWxkLmV4ZVwiXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9jZXNzLmVudi5FU0JVSUxEX0JJTkFSWV9QQVRIID0gcGF0aC5qb2luKFxyXG4gICAgICAgIHByb2Nlc3MuY3dkKCksXHJcbiAgICAgICAgXCJub2RlX21vZHVsZXNcIixcclxuICAgICAgICBcImVzYnVpbGRcIixcclxuICAgICAgICBcImJpblwiLFxyXG4gICAgICAgIFwiZXNidWlsZFwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGZyb250bWF0dGVyLCBjb2RlIH0gPSBhd2FpdCBidW5kbGVNRFgoe1xyXG4gICAgICBzb3VyY2UsXHJcbiAgICAgIGN3ZDogcm9vdERpcixcclxuICAgICAgeGRtT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5yZWh5cGVQbHVnaW5zID0gW1xyXG4gICAgICAgICAgLi4uKG9wdGlvbnM/LnJlaHlwZVBsdWdpbnMgPz8gW10pLFxyXG4gICAgICAgICAgcmVoeXBlSGlnaGxpZ2h0LFxyXG4gICAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICAgIHJlaHlwZUNvZGVUaXRsZXMsXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFsnYW5jaG9yJ11cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBjb2RlLCBmcm9udG1hdHRlciB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBDb21waWxhdGlvbiBlcnJvciBmb3Igc2x1ZzogYCwgc2x1Zyk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBpbGVNZHggfTtcclxuZXhwb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCIiLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICovXG5cbmltcG9ydCBTbHVnZ2VyIGZyb20gJ2dpdGh1Yi1zbHVnZ2VyJ1xuaW1wb3J0IHtoYXNQcm9wZXJ0eX0gZnJvbSAnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eSdcbmltcG9ydCB7aGVhZGluZ1Jhbmt9IGZyb20gJ2hhc3QtdXRpbC1oZWFkaW5nLXJhbmsnXG5pbXBvcnQge3RvU3RyaW5nfSBmcm9tICdoYXN0LXV0aWwtdG8tc3RyaW5nJ1xuaW1wb3J0IHt2aXNpdH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcblxuY29uc3Qgc2x1Z3MgPSBuZXcgU2x1Z2dlcigpXG5cbi8qKlxuICogUGx1Z2luIHRvIGFkZCBgaWRgcyB0byBoZWFkaW5ncy5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPEFycmF5PHZvaWQ+LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlU2x1ZygpIHtcbiAgcmV0dXJuICh0cmVlKSA9PiB7XG4gICAgc2x1Z3MucmVzZXQoKVxuXG4gICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSkgPT4ge1xuICAgICAgaWYgKGhlYWRpbmdSYW5rKG5vZGUpICYmIG5vZGUucHJvcGVydGllcyAmJiAhaGFzUHJvcGVydHkobm9kZSwgJ2lkJykpIHtcbiAgICAgICAgbm9kZS5wcm9wZXJ0aWVzLmlkID0gc2x1Z3Muc2x1Zyh0b1N0cmluZyhub2RlKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCAidmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQ2hlY2sgaWYgYG5vZGVgIGhhcyBhIHNldCBgbmFtZWAgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIC8qKiBAdHlwZSB7dW5rbm93bn0gKi9cbiAgdmFyIHZhbHVlID1cbiAgICBuYW1lICYmXG4gICAgbm9kZSAmJlxuICAgIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhIG5vZGUuXG4gICAgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiZcbiAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICBub2RlLnByb3BlcnRpZXMgJiZcbiAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICBvd24uY2FsbChub2RlLnByb3BlcnRpZXMsIG5hbWUpICYmXG4gICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGFuIGVsZW1lbnQuXG4gICAgbm9kZS5wcm9wZXJ0aWVzW25hbWVdXG5cbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IGZhbHNlXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7Um9vdHxQYXJlbnRbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gTm9kZVxuICovXG5cbi8qKlxuICogUmFuayBvZiBhIGhlYWRpbmc6IEgxIC0+IDEsIEgyIC0+IDIsIGV0Yy5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRpbmdSYW5rKG5vZGUpIHtcbiAgdmFyIG5hbWUgPVxuICAgIChub2RlICYmIG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB8fCAnJ1xuICB2YXIgY29kZSA9XG4gICAgbmFtZS5sZW5ndGggPT09IDIgJiYgbmFtZS5jaGFyQ29kZUF0KDApID09PSAxMDQgLyogYGhgICovXG4gICAgICA/IG5hbWUuY2hhckNvZGVBdCgxKVxuICAgICAgOiAwXG4gIHJldHVybiBjb2RlID4gNDggLyogYDBgICovICYmIGNvZGUgPCA1NSAvKiBgN2AgKi8gPyBjb2RlIC0gNDggLyogYDBgICovIDogbnVsbFxufVxuIiwgIi8qKlxuICogQGZpbGVvdmVydmlld1xuICogICBHZXQgdGhlIHBsYWluLXRleHQgdmFsdWUgb2YgYSBoYXN0IG5vZGUuXG4gKiBAbG9uZ2Rlc2NyaXB0aW9uXG4gKiAgICMjIFVzZVxuICpcbiAqICAgYGBganNcbiAqICAgaW1wb3J0IHtofSBmcm9tICdoYXN0c2NyaXB0J1xuICogICBpbXBvcnQge3RvU3RyaW5nfSBmcm9tICdoYXN0LXV0aWwtdG8tc3RyaW5nJ1xuICpcbiAqICAgdG9TdHJpbmcoaCgncCcsICdBbHBoYScpKVxuICogICAvLz0+ICdBbHBoYSdcbiAqICAgdG9TdHJpbmcoaCgnZGl2JywgW2goJ2InLCAnQm9sZCcpLCAnIGFuZCAnLCBoKCdpJywgJ2l0YWxpYycpLCAnLiddKSlcbiAqICAgLy89PiAnQm9sZCBhbmQgaXRhbGljLidcbiAqICAgYGBgXG4gKlxuICogICAjIyBBUElcbiAqXG4gKiAgICMjIyBgdG9TdHJpbmcobm9kZSlgXG4gKlxuICogICBUcmFuc2Zvcm0gYSBub2RlIHRvIGEgc3RyaW5nLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7Um9vdHxSb290WydjaGlsZHJlbiddW251bWJlcl19IE5vZGVcbiAqL1xuXG4vKipcbiAqIEdldCB0aGUgcGxhaW4tdGV4dCB2YWx1ZSBvZiBhIGhhc3Qgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhub2RlKSB7XG4gIC8vIFx1MjAxQ1RoZSBjb25jYXRlbmF0aW9uIG9mIGRhdGEgb2YgYWxsIHRoZSBUZXh0IG5vZGUgZGVzY2VuZGFudHMgb2YgdGhlIGNvbnRleHRcbiAgLy8gb2JqZWN0LCBpbiB0cmVlIG9yZGVyLlx1MjAxRFxuICBpZiAoJ2NoaWxkcmVuJyBpbiBub2RlKSB7XG4gICAgcmV0dXJuIGFsbChub2RlKVxuICB9XG5cbiAgLy8gXHUyMDFDQ29udGV4dCBvYmplY3RcdTIwMTlzIGRhdGEuXHUyMDFEXG4gIHJldHVybiAndmFsdWUnIGluIG5vZGUgPyBub2RlLnZhbHVlIDogJydcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9uZShub2RlKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBub2RlLnZhbHVlXG4gIH1cblxuICByZXR1cm4gJ2NoaWxkcmVuJyBpbiBub2RlID8gYWxsKG5vZGUpIDogJydcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1Jvb3R8RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gYWxsKG5vZGUpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IG9uZShub2RlLmNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IFZpc2l0b3JcbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuLyoqXG4gKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gKlxuICogQHBhcmFtIHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICogQHBhcmFtIHRlc3QgVGVzdCwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlLCBDaGVjayBleHRlbmRzIFRlc3Q+KHRyZWU6IFRyZWUsIHRlc3Q6IENoZWNrLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZVxuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkFjdGlvbn0gQWN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5JbmRleH0gSW5kZXhcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkFjdGlvblR1cGxlfSBBY3Rpb25UdXBsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcbmltcG9ydCB7Y29sb3J9IGZyb20gJy4vY29sb3IuanMnXG5cbi8qKlxuICogQ29udGludWUgdHJhdmVyc2luZyBhcyBub3JtYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRJTlVFID0gdHJ1ZVxuLyoqXG4gKiBEbyBub3QgdHJhdmVyc2UgdGhpcyBub2RlXHUyMDE5cyBjaGlsZHJlblxuICovXG5leHBvcnQgY29uc3QgU0tJUCA9ICdza2lwJ1xuLyoqXG4gKiBTdG9wIHRyYXZlcnNpbmcgaW1tZWRpYXRlbHlcbiAqL1xuZXhwb3J0IGNvbnN0IEVYSVQgPSBmYWxzZVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0IG5vZGUsIG9wdGlvbmFsXG4gKiBAcGFyYW0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICogQHBhcmFtIHJldmVyc2UgVmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSBvcmRlciwgZGVmYXVsdHMgdG8gZmFsc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHZpc2l0UGFyZW50cyA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3I8Tm9kZT59IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBubyB2aXNpdG9yIGdpdmVuLCBzbyBgdmlzaXRvcmAgaXMgdGVzdC5cbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXMgPSBjb252ZXJ0KHRlc3QpXG4gICAgICBjb25zdCBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuXG4gICAgICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge251bWJlcj99IGluZGV4XG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGh1c2hcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPT0gbnVsbCA/IG5vZGUgOiB7fVxuICAgICAgICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXG4gICAgICAgIGxldCBuYW1lXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG5hbWUgPVxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWUudGFnTmFtZVxuICAgICAgICAgICAgICA6IHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2aXNpdCwgJ25hbWUnLCB7XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgJ25vZGUgKCcgK1xuICAgICAgICAgICAgICBjb2xvcih2YWx1ZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArXG4gICAgICAgICAgICAgICcpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlzaXRcblxuICAgICAgICBmdW5jdGlvbiB2aXNpdCgpIHtcbiAgICAgICAgICAvKiogQHR5cGUge0FjdGlvblR1cGxlfSAqL1xuICAgICAgICAgIGxldCByZXN1bHQgPSBbXVxuICAgICAgICAgIC8qKiBAdHlwZSB7QWN0aW9uVHVwbGV9ICovXG4gICAgICAgICAgbGV0IHN1YnJlc3VsdFxuICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgIGxldCBvZmZzZXRcbiAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQYXJlbnQ+fSAqL1xuICAgICAgICAgIGxldCBncmFuZHBhcmVudHNcblxuICAgICAgICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IG51bGwpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcblxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShub2RlLmNoaWxkcmVuW29mZnNldF0sIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJyZXN1bHRcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHN1YnJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyBzdWJyZXN1bHRbMV0gOiBvZmZzZXQgKyBzdGVwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICApXG5cbi8qKlxuICogQHBhcmFtIHtWaXNpdG9yUmVzdWx0fSB2YWx1ZVxuICogQHJldHVybnMge0FjdGlvblR1cGxlfVxuICovXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKlxuICogQHR5cGVkZWYge3N0cmluZ30gVHlwZVxuICogQHR5cGVkZWYge09iamVjdDxzdHJpbmcsIHVua25vd24+fSBQcm9wc1xuICpcbiAqIEB0eXBlZGVmIHtudWxsfHVuZGVmaW5lZHxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nfEFycmF5LjxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gVGVzdFxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3RcbiAqXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2Jvb2xlYW58dm9pZH1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gWFxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvblByZWRpY2F0ZVxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBYfVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEFzc2VydEFueXRoaW5nXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IFlcbiAqIEBjYWxsYmFjayBBc3NlcnRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBZfVxuICovXG5cbmV4cG9ydCBjb25zdCBpcyA9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAgICogV2hlbiBhIGBwYXJlbnRgIG5vZGUgaXMga25vd24gdGhlIGBpbmRleGAgb2Ygbm9kZSBzaG91bGQgYWxzbyBiZSBnaXZlbi5cbiAgICpcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFQgZXh0ZW5kcyBOb2RlPihub2RlOiB1bmtub3duLCB0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj4sIGluZGV4PzogbnVtYmVyfG51bGx8dW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnR8bnVsbHx1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIFQpICZcbiAgICogICAoKG5vZGU/OiB1bmtub3duLCB0ZXN0PzogVGVzdCwgaW5kZXg/OiBudW1iZXJ8bnVsbHx1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudHxudWxsfHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3QuXG4gICAgICogV2hlbiBhIGBwYXJlbnRgIG5vZGUgaXMga25vd24gdGhlIGBpbmRleGAgb2Ygbm9kZSBzaG91bGQgYWxzbyBiZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdIE5vZGUgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICAgICAqIFdoZW4gYGFycmF5YCwgY2hlY2tzIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF0gUG9zaXRpb24gb2YgYG5vZGVgIGluIGBwYXJlbnRgXG4gICAgICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdIFBhcmVudCBvZiBgbm9kZWBcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtjb250ZXh0XSBDb250ZXh0IG9iamVjdCB0byBpbnZva2UgYHRlc3RgIHdpdGhcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0ZXN0IHBhc3NlZCBhbmQgYG5vZGVgIGlzIGEgYE5vZGVgIChvYmplY3Qgd2l0aCBgdHlwZWAgc2V0IHRvIG5vbi1lbXB0eSBgc3RyaW5nYCkuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgICBmdW5jdGlvbiBpcyhub2RlLCB0ZXN0LCBpbmRleCwgcGFyZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBjaGVjayA9IGNvbnZlcnQodGVzdClcblxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGluZGV4ICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgaW5kZXggPCAwIHx8XG4gICAgICAgICAgaW5kZXggPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIGZpbml0ZSBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICghaXMocGFyZW50KSB8fCAhcGFyZW50LmNoaWxkcmVuKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcGFyZW50IG5vZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwYXJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXJlbnQgPT09IG51bGwpICE9PVxuICAgICAgICAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGJvdGggcGFyZW50IGFuZCBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTG9va3MgbGlrZSBhIG5vZGUuXG4gICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgJiYgdHlwZW9mIG5vZGUudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBCb29sZWFuKGNoZWNrLmNhbGwoY29udGV4dCwgbm9kZSwgaW5kZXgsIHBhcmVudCkpXG4gICAgICAgIDogZmFsc2VcbiAgICB9XG4gIClcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFQgZXh0ZW5kcyBOb2RlPih0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4pID0+IEFzc2VydFByZWRpY2F0ZTxUPikgJlxuICAgKiAgICgodGVzdD86IFRlc3QpID0+IEFzc2VydEFueXRoaW5nKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIGFzc2VydGlvbiBmcm9tIGEgY2hlY2suXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBXaGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gICAgICogV2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGBmdW5jdGlvbiAobm9kZSkge3JldHVybiBub2RlLnR5cGUgPT09IHRlc3R9YC5cbiAgICAgKiBXaGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICAgICAqIFdoZW4gYG9iamVjdGAsIGNoZWNrcyB0aGF0IGFsbCBrZXlzIGluIHRlc3QgYXJlIGluIG5vZGUsIGFuZCB0aGF0IHRoZXkgaGF2ZSAoc3RyaWN0bHkpIGVxdWFsIHZhbHVlcy5cbiAgICAgKiBXaGVuIGBhcnJheWAsIGNoZWNrcyBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICAgICAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGVzdCkge1xuICAgICAgaWYgKHRlc3QgPT09IHVuZGVmaW5lZCB8fCB0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBva1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRlc3QpID8gYW55RmFjdG9yeSh0ZXN0KSA6IHByb3BzRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNhc3RGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxuICAgIH1cbiAgKVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gdGVzdHNcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICAvKiogQHR5cGUge0FycmF5LjxBc3NlcnRBbnl0aGluZz59ICovXG4gIGNvbnN0IGNoZWNrcyA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYW55KVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHt1bmtub3duW119IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbnkoLi4ucGFyYW1ldGVycykge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmNhbGwodGhpcywgLi4ucGFyYW1ldGVycykpIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4gKiB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7UHJvcHN9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHByb3BzRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkoYWxsKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbGwobm9kZSkge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBrZXlcblxuICAgIGZvciAoa2V5IGluIGNoZWNrKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBodXNoLCBpdCBzdXJlIHdvcmtzIGFzIGFuIGluZGV4LlxuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gY2hlY2tba2V5XSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZVx1MjAxOXMgdHlwZVxuICogZm9yIHNhaWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7VHlwZX0gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gdHlwZUZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGNhc3RGYWN0b3J5KHR5cGUpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlID09PSBjaGVja1xuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2RlXHUyMDE5cyB0eXBlXG4gKiBmb3Igc2FpZCBzdHJpbmcuXG4gKiBAcGFyYW0ge1Rlc3RGdW5jdGlvbkFueXRoaW5nfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBjYXN0RmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gYXNzZXJ0aW9uXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge0FycmF5Ljx1bmtub3duPn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydGlvbiguLi5wYXJhbWV0ZXJzKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogc3ByZWFkaW5nIGlzIGZpbmUuXG4gICAgcmV0dXJuIEJvb2xlYW4oY2hlY2suY2FsbCh0aGlzLCAuLi5wYXJhbWV0ZXJzKSlcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iLCAiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yKGQpIHtcbiAgcmV0dXJuICdcXHUwMDFCWzMzbScgKyBkICsgJ1xcdTAwMUJbMzltJ1xufVxuIiwgImltcG9ydCB7IHZpc2l0IH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCc7XG5mdW5jdGlvbiByZWh5cGVDb2RlVGl0bGVzKCkge1xuICAgIHJldHVybiAodHJlZSkgPT4gdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCB2aXNpdG9yKTtcbiAgICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgbm9kZS50YWdOYW1lICE9PSAncHJlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZSA9IG5vZGU7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBBcnJheS5pc0FycmF5KHByZS5jaGlsZHJlbikgPyBwcmUuY2hpbGRyZW5bMF0gOiBwcmUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvZGUucHJvcGVydGllcy5jbGFzc05hbWUgfHwgW107XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDbGFzc05hbWUgPSBjbGFzc05hbWUucmVkdWNlKChhY2MsIGNscykgPT4ge1xuICAgICAgICAgICAgLy8gSWYgY2xzIGlzIHNvbWV0aGluZyBsaWtlLi4uXG4gICAgICAgICAgICAvLyBpLmUuIGxhbmd1YWdlLXR5cGVzY3JpcHQ6bGliL21keC50c1xuICAgICAgICAgICAgaWYgKGNscy5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3BsaXQgb24gdGhlICc6J1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYW5nQ2xhc3NOYW1lLCB0aXRsZV0gPSBjbHMuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRpdGxlIGJsb2NrIHRvIHRoZSB0cmVlIGF0IHRoZSBpbmRleCBwcmlvclxuICAgICAgICAgICAgICAgIC8vIHRvIHRoZSA8cHJlIC8+IHdpdGggdGhlIHRpdGxlIHdlIGZvdW5kLlxuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFt7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHRpdGxlIH1dLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IGNsYXNzTmFtZTogWydyZWh5cGUtY29kZS10aXRsZSddIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2gobGFuZ0NsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbHMuc2xpY2UoMCwgOSkgPT09ICdsYW5ndWFnZS0nKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goY2xzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBwcmUuY2hpbGRyZW4gPSBbeyAuLi5jb2RlLCBwcm9wZXJ0aWVzOiB7IGNsYXNzTmFtZTogdXBkYXRlZENsYXNzTmFtZSB9IH1dO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHJlaHlwZUNvZGVUaXRsZXM7XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKi9cblxuLyoqXG4gKiBJbnZva2VkIHdoZW4gYSBub2RlIChtYXRjaGluZyB0ZXN0LCBpZiBnaXZlbikgaXMgZm91bmQuXG4gKiBWaXNpdG9ycyBhcmUgZnJlZSB0byB0cmFuc2Zvcm0gbm9kZS5cbiAqIFRoZXkgY2FuIGFsc28gdHJhbnNmb3JtIHRoZSBwYXJlbnQgb2Ygbm9kZSAodGhlIGxhc3Qgb2YgYW5jZXN0b3JzKS5cbiAqIFJlcGxhY2luZyBub2RlIGl0c2VsZiwgaWYgYFNLSVBgIGlzIG5vdCByZXR1cm5lZCwgc3RpbGwgY2F1c2VzIGl0cyBkZXNjZW5kYW50cyB0byBiZSB2aXNpdGVkLlxuICogSWYgYWRkaW5nIG9yIHJlbW92aW5nIHByZXZpb3VzIHNpYmxpbmdzIChvciBuZXh0IHNpYmxpbmdzLCBpbiBjYXNlIG9mIHJldmVyc2UpIG9mIG5vZGUsXG4gKiB2aXNpdG9yIHNob3VsZCByZXR1cm4gYSBuZXcgaW5kZXggKG51bWJlcikgdG8gc3BlY2lmeSB0aGUgc2libGluZyB0byB0cmF2ZXJzZSBhZnRlciBub2RlIGlzIHRyYXZlcnNlZC5cbiAqIEFkZGluZyBvciByZW1vdmluZyBuZXh0IHNpYmxpbmdzIG9mIG5vZGUgKG9yIHByZXZpb3VzIHNpYmxpbmdzLCBpbiBjYXNlIG9mIHJldmVyc2UpXG4gKiBpcyBoYW5kbGVkIGFzIGV4cGVjdGVkIHdpdGhvdXQgbmVlZGluZyB0byByZXR1cm4gYSBuZXcgaW5kZXguXG4gKiBSZW1vdmluZyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgb2YgYW4gYW5jZXN0b3Igc3RpbGwgcmVzdWx0cyBpbiB0aGVtIGJlaW5nIHRyYXZlcnNlZC5cbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IFZcbiAqIEBjYWxsYmFjayBWaXNpdG9yXG4gKiBAcGFyYW0ge1Z9IG5vZGUgRm91bmQgbm9kZVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gaW5kZXggUG9zaXRpb24gb2YgYG5vZGVgIGluIGBwYXJlbnRgXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfSBwYXJlbnQgUGFyZW50IG9mIGBub2RlYFxuICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHMsIENPTlRJTlVFLCBTS0lQLCBFWElUfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbmV4cG9ydCB7Q09OVElOVUUsIFNLSVAsIEVYSVR9XG5cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KHRyZWU6IE5vZGUsIHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+PiwgdmlzaXRvcjogVmlzaXRvcjxUPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHRlc3Q6IFRlc3QsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKCh0cmVlOiBOb2RlLCB2aXNpdG9yOiBWaXNpdG9yPE5vZGU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdCB0ZXN0IFRlc3Qgbm9kZVxuICAgICAqIEBwYXJhbSB7VmlzaXRvcjxOb2RlPn0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0NPTlRJTlVFfFNLSVB8RVhJVH0gQWN0aW9uIFVuaW9uIG9mIHRoZSBhY3Rpb24gdHlwZXNcbiAqIEB0eXBlZGVmIHtudW1iZXJ9IEluZGV4IE1vdmUgdG8gdGhlIHNpYmxpbmcgYXQgaW5kZXggbmV4dCAoYWZ0ZXIgbm9kZSBpdHNlbGYgaXMgY29tcGxldGVseSB0cmF2ZXJzZWQpLiBVc2VmdWwgaWYgbXV0YXRpbmcgdGhlIHRyZWUsIHN1Y2ggYXMgcmVtb3ZpbmcgdGhlIG5vZGUgdGhlIHZpc2l0b3IgaXMgY3VycmVudGx5IG9uLCBvciBhbnkgb2YgaXRzIHByZXZpb3VzIHNpYmxpbmdzIChvciBuZXh0IHNpYmxpbmdzLCBpbiBjYXNlIG9mIHJldmVyc2UpIFJlc3VsdHMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGNoaWxkcmVuLmxlbmd0aCBzdG9wIHRyYXZlcnNpbmcgdGhlIHBhcmVudFxuICogQHR5cGVkZWYge1soQWN0aW9ufG51bGx8dW5kZWZpbmVkfHZvaWQpPywgKEluZGV4fG51bGx8dW5kZWZpbmVkKT9dfSBBY3Rpb25UdXBsZSBMaXN0IHdpdGggb25lIG9yIHR3byB2YWx1ZXMsIHRoZSBmaXJzdCBhbiBhY3Rpb24sIHRoZSBzZWNvbmQgYW4gaW5kZXguXG4gKiBAdHlwZWRlZiB7bnVsbHx1bmRlZmluZWR8QWN0aW9ufEluZGV4fEFjdGlvblR1cGxlfHZvaWR9IFZpc2l0b3JSZXN1bHQgQW55IHZhbHVlIHRoYXQgY2FuIGJlIHJldHVybmVkIGZyb20gYSB2aXNpdG9yXG4gKi9cblxuLyoqXG4gKiBJbnZva2VkIHdoZW4gYSBub2RlIChtYXRjaGluZyB0ZXN0LCBpZiBnaXZlbikgaXMgZm91bmQuXG4gKiBWaXNpdG9ycyBhcmUgZnJlZSB0byB0cmFuc2Zvcm0gbm9kZS5cbiAqIFRoZXkgY2FuIGFsc28gdHJhbnNmb3JtIHRoZSBwYXJlbnQgb2Ygbm9kZSAodGhlIGxhc3Qgb2YgYW5jZXN0b3JzKS5cbiAqIFJlcGxhY2luZyBub2RlIGl0c2VsZiwgaWYgYFNLSVBgIGlzIG5vdCByZXR1cm5lZCwgc3RpbGwgY2F1c2VzIGl0cyBkZXNjZW5kYW50cyB0byBiZSB2aXNpdGVkLlxuICogSWYgYWRkaW5nIG9yIHJlbW92aW5nIHByZXZpb3VzIHNpYmxpbmdzIChvciBuZXh0IHNpYmxpbmdzLCBpbiBjYXNlIG9mIHJldmVyc2UpIG9mIG5vZGUsXG4gKiB2aXNpdG9yIHNob3VsZCByZXR1cm4gYSBuZXcgaW5kZXggKG51bWJlcikgdG8gc3BlY2lmeSB0aGUgc2libGluZyB0byB0cmF2ZXJzZSBhZnRlciBub2RlIGlzIHRyYXZlcnNlZC5cbiAqIEFkZGluZyBvciByZW1vdmluZyBuZXh0IHNpYmxpbmdzIG9mIG5vZGUgKG9yIHByZXZpb3VzIHNpYmxpbmdzLCBpbiBjYXNlIG9mIHJldmVyc2UpXG4gKiBpcyBoYW5kbGVkIGFzIGV4cGVjdGVkIHdpdGhvdXQgbmVlZGluZyB0byByZXR1cm4gYSBuZXcgaW5kZXguXG4gKiBSZW1vdmluZyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgb2YgYW4gYW5jZXN0b3Igc3RpbGwgcmVzdWx0cyBpbiB0aGVtIGJlaW5nIHRyYXZlcnNlZC5cbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IFZcbiAqIEBjYWxsYmFjayBWaXNpdG9yXG4gKiBAcGFyYW0ge1Z9IG5vZGUgRm91bmQgbm9kZVxuICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gYW5jZXN0b3JzIEFuY2VzdG9ycyBvZiBub2RlXG4gKiBAcmV0dXJucyB7VmlzaXRvclJlc3VsdH1cbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5pbXBvcnQge2NvbG9yfSBmcm9tICcuL2NvbG9yLmpzJ1xuXG4vKipcbiAqIENvbnRpbnVlIHRyYXZlcnNpbmcgYXMgbm9ybWFsXG4gKi9cbmV4cG9ydCBjb25zdCBDT05USU5VRSA9IHRydWVcbi8qKlxuICogRG8gbm90IHRyYXZlcnNlIHRoaXMgbm9kZVx1MjAxOXMgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFNLSVAgPSAnc2tpcCdcbi8qKlxuICogU3RvcCB0cmF2ZXJzaW5nIGltbWVkaWF0ZWx5XG4gKi9cbmV4cG9ydCBjb25zdCBFWElUID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IHZpc2l0UGFyZW50cyA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KHRyZWU6IE5vZGUsIHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+PiwgdmlzaXRvcjogVmlzaXRvcjxUPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHRlc3Q6IFRlc3QsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKCh0cmVlOiBOb2RlLCB2aXNpdG9yOiBWaXNpdG9yPE5vZGU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdCB0ZXN0IFRlc3Qgbm9kZVxuICAgICAqIEBwYXJhbSB7VmlzaXRvcjxOb2RlPn0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICAvLyBAdHMtaWdub3JlIG5vIHZpc2l0b3IgZ2l2ZW4sIHNvIGB2aXNpdG9yYCBpcyB0ZXN0LlxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2YXIgaXMgPSBjb252ZXJ0KHRlc3QpXG4gICAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICAgICAgZmFjdG9yeSh0cmVlLCBudWxsLCBbXSkoKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtudW1iZXI/fSBpbmRleFxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBmYWN0b3J5KG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPT0gbnVsbCA/IG5vZGUgOiB7fVxuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgdmFyIG5hbWVcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgICAgIDogdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZpc2l0LCAnbmFtZScsIHtcbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAnbm9kZSAoJyArXG4gICAgICAgICAgICAgIGNvbG9yKHZhbHVlLnR5cGUgKyAobmFtZSA/ICc8JyArIG5hbWUgKyAnPicgOiAnJykpICtcbiAgICAgICAgICAgICAgJyknXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aXNpdFxuXG4gICAgICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7QWN0aW9uVHVwbGV9ICovXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICB2YXIgc3VicmVzdWx0XG4gICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgdmFyIG9mZnNldFxuICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBhcmVudD59ICovXG4gICAgICAgICAgdmFyIGdyYW5kcGFyZW50c1xuXG4gICAgICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgb2Zmc2V0ID0gKHJldmVyc2UgPyBub2RlLmNoaWxkcmVuLmxlbmd0aCA6IC0xKSArIHN0ZXBcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGUpXG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICBzdWJyZXN1bHQgPSBmYWN0b3J5KG5vZGUuY2hpbGRyZW5bb2Zmc2V0XSwgb2Zmc2V0LCBncmFuZHBhcmVudHMpKClcblxuICAgICAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBAcGFyYW0ge1Zpc2l0b3JSZXN1bHR9IHZhbHVlXG4gKiBAcmV0dXJucyB7QWN0aW9uVHVwbGV9XG4gKi9cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iLCAiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yKGQpIHtcbiAgcmV0dXJuICdcXHUwMDFCWzMzbScgKyBkICsgJ1xcdTAwMUJbMzltJ1xufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvaW5kZXguanMnKS5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL2xpYi9pbmRleC5qcydcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7RWxlbWVudFsnY2hpbGRyZW4nXVtudW1iZXJdfSBFbGVtZW50Q2hpbGRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Qcm9wZXJ0aWVzfSBQcm9wZXJ0aWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpLlRlc3R9IFRlc3RcbiAqXG4gKiBAdHlwZWRlZiB7J3ByZXBlbmQnfCdhcHBlbmQnfCd3cmFwJ3wnYmVmb3JlJ3wnYWZ0ZXInfSBCZWhhdmlvclxuICpcbiAqIEBjYWxsYmFjayBCdWlsZFxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfVxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QmVoYXZpb3J9IFtiZWhhdmlvcj0ncHJlcGVuZCddXG4gKiAgIEhvdyB0byBjcmVhdGUgbGlua3MuXG4gKiBAcHJvcGVydHkge0JlaGF2aW9yfSBbYmVoYXZpb3VyXVxuICogICBQbGVhc2UgdXNlIGBiZWhhdmlvcmAgaW5zdGVhZFxuICogQHByb3BlcnR5IHtQcm9wZXJ0aWVzfSBbcHJvcGVydGllc11cbiAqICAgRXh0cmEgcHJvcGVydGllcyB0byBzZXQgb24gdGhlIGxpbmsgd2hlbiBpbmplY3RpbmcuXG4gKiAgIERlZmF1bHRzIHRvIGB7YXJpYUhpZGRlbjogdHJ1ZSwgdGFiSW5kZXg6IC0xfWAgd2hlbiBgJ3ByZXBlbmQnYCBvclxuICogICBgJ2FwcGVuZCdgLlxuICogQHByb3BlcnR5IHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW118QnVpbGR9IFtjb250ZW50PXt0eXBlOiAnZWxlbWVudCcsIHRhZ05hbWU6ICdzcGFuJywgcHJvcGVydGllczoge2NsYXNzTmFtZTogWydpY29uJywgJ2ljb24tbGluayddfSwgY2hpbGRyZW46IFtdfV1cbiAqICAgaGFzdCBub2RlcyB0byBpbnNlcnQgaW4gdGhlIGxpbmsuXG4gKiBAcHJvcGVydHkge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXXxCdWlsZH0gW2dyb3VwXVxuICogICBoYXN0IG5vZGUgdG8gd3JhcCB0aGUgaGVhZGluZyBhbmQgbGluayB3aXRoLCBpZiBgYmVoYXZpb3JgIGlzIGAnYmVmb3JlJ2Agb3JcbiAqICAgYCdhZnRlcidgLlxuICogICBUaGVyZSBpcyBubyBkZWZhdWx0LlxuICogQHByb3BlcnR5IHtUZXN0fSBbdGVzdF1cbiAqICAgVGVzdCB0byBkZWZpbmUgd2hpY2ggaGVhZGluZyBlbGVtZW50cyBhcmUgbGlua2VkLlxuICogICBBbnkgdGVzdCB0aGF0IGNhbiBiZSBnaXZlbiB0byBgaGFzdC11dGlsLWlzLWVsZW1lbnRgIGlzIHN1cHBvcnRlZC5cbiAqICAgVGhlIGRlZmF1bHQgKG5vIHRlc3QpIGlzIHRvIGxpbmsgYWxsIGhlYWRpbmdzLlxuICogICBDYW4gYmUgdXNlZCB0byBsaW5rIG9ubHkgaDEtaDMsIG9yIGZvciBleGFtcGxlIGFsbCBleGNlcHQgaDEuXG4gKi9cblxuaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnXG5pbXBvcnQge2hhc1Byb3BlcnR5fSBmcm9tICdoYXN0LXV0aWwtaGFzLXByb3BlcnR5J1xuaW1wb3J0IHtoZWFkaW5nUmFua30gZnJvbSAnaGFzdC11dGlsLWhlYWRpbmctcmFuaydcbmltcG9ydCB7Y29udmVydEVsZW1lbnR9IGZyb20gJ2hhc3QtdXRpbC1pcy1lbGVtZW50J1xuaW1wb3J0IHt2aXNpdCwgU0tJUH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcblxuLyoqIEB0eXBlIHtFbGVtZW50fSAqL1xuY29uc3QgY29udGVudERlZmF1bHRzID0ge1xuICB0eXBlOiAnZWxlbWVudCcsXG4gIHRhZ05hbWU6ICdzcGFuJyxcbiAgcHJvcGVydGllczoge2NsYXNzTmFtZTogWydpY29uJywgJ2ljb24tbGluayddfSxcbiAgY2hpbGRyZW46IFtdXG59XG5cbi8qKlxuICogUGx1Z2luIHRvIGF1dG9tYXRpY2FsbHkgYWRkIGxpbmtzIHRvIGhlYWRpbmdzIChoMS1oNikuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dfHZvaWRbXSwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlaHlwZUF1dG9saW5rSGVhZGluZ3Mob3B0aW9ucyA9IHt9KSB7XG4gIGxldCBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllc1xuICBjb25zdCBiZWhhdmlvciA9IG9wdGlvbnMuYmVoYXZpb3VyIHx8IG9wdGlvbnMuYmVoYXZpb3IgfHwgJ3ByZXBlbmQnXG4gIGNvbnN0IGNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQgfHwgY29udGVudERlZmF1bHRzXG4gIGNvbnN0IGdyb3VwID0gb3B0aW9ucy5ncm91cFxuICBjb25zdCBpcyA9IGNvbnZlcnRFbGVtZW50KG9wdGlvbnMudGVzdClcblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgbGV0IG1ldGhvZFxuXG4gIGlmIChiZWhhdmlvciA9PT0gJ3dyYXAnKSB7XG4gICAgbWV0aG9kID0gd3JhcFxuICB9IGVsc2UgaWYgKGJlaGF2aW9yID09PSAnYmVmb3JlJyB8fCBiZWhhdmlvciA9PT0gJ2FmdGVyJykge1xuICAgIG1ldGhvZCA9IGFyb3VuZFxuICB9IGVsc2Uge1xuICAgIGlmICghcHJvcHMpIHtcbiAgICAgIHByb3BzID0ge2FyaWFIaWRkZW46ICd0cnVlJywgdGFiSW5kZXg6IC0xfVxuICAgIH1cblxuICAgIG1ldGhvZCA9IGluamVjdFxuICB9XG5cbiAgcmV0dXJuICh0cmVlKSA9PiB7XG4gICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBoZWFkaW5nUmFuayhub2RlKSAmJlxuICAgICAgICBoYXNQcm9wZXJ0eShub2RlLCAnaWQnKSAmJlxuICAgICAgICBpcyhub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBtZXRob2Qobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQvY29tcGxleC10eXBlcycpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIGluamVjdChub2RlKSB7XG4gICAgbm9kZS5jaGlsZHJlbltiZWhhdmlvciA9PT0gJ3ByZXBlbmQnID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXShcbiAgICAgIGNyZWF0ZShub2RlLCBleHRlbmQodHJ1ZSwge30sIHByb3BzKSwgdG9DaGlsZHJlbihjb250ZW50LCBub2RlKSlcbiAgICApXG5cbiAgICByZXR1cm4gW1NLSVBdXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgZnVuY3Rpb24gYXJvdW5kKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICAvLyBVbmNvbW1vbi5cbiAgICAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8ICFwYXJlbnQpIHJldHVyblxuXG4gICAgY29uc3QgbGluayA9IGNyZWF0ZShcbiAgICAgIG5vZGUsXG4gICAgICBleHRlbmQodHJ1ZSwge30sIHByb3BzKSxcbiAgICAgIHRvQ2hpbGRyZW4oY29udGVudCwgbm9kZSlcbiAgICApXG4gICAgbGV0IG5vZGVzID0gYmVoYXZpb3IgPT09ICdiZWZvcmUnID8gW2xpbmssIG5vZGVdIDogW25vZGUsIGxpbmtdXG5cbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGdyb3VwaW5nID0gdG9Ob2RlKGdyb3VwLCBub2RlKVxuXG4gICAgICBpZiAoZ3JvdXBpbmcgJiYgIUFycmF5LmlzQXJyYXkoZ3JvdXBpbmcpICYmIGdyb3VwaW5nLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgICBncm91cGluZy5jaGlsZHJlbiA9IG5vZGVzXG4gICAgICAgIG5vZGVzID0gW2dyb3VwaW5nXVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGVzKVxuXG4gICAgcmV0dXJuIFtTS0lQLCBpbmRleCArIG5vZGVzLmxlbmd0aF1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBmdW5jdGlvbiB3cmFwKG5vZGUpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gW2NyZWF0ZShub2RlLCBleHRlbmQodHJ1ZSwge30sIHByb3BzKSwgbm9kZS5jaGlsZHJlbildXG4gICAgcmV0dXJuIFtTS0lQXVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0VsZW1lbnRDaGlsZFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9DaGlsZHJlbih2YWx1ZSwgbm9kZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRvTm9kZSh2YWx1ZSwgbm9kZSlcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogW3Jlc3VsdF1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXXxCdWlsZH0gdmFsdWVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm5zIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW119XG4gICAqL1xuICBmdW5jdGlvbiB0b05vZGUodmFsdWUsIG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWUobm9kZSlcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIEFycmF5LmlzQXJyYXkodmFsdWUpID8gW10gOiB7fSwgdmFsdWUpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcHNcbiAgICogQHBhcmFtIHtFbGVtZW50Q2hpbGRbXX0gY2hpbGRyZW5cbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGUobm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6ICdhJyxcbiAgICAgIHByb3BlcnRpZXM6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIC8vIEZpeCBoYXN0IHR5cGVzIGFuZCBtYWtlIHRoZW0gcmVxdWlyZWQuXG4gICAgICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGhyZWY6ICcjJyArIChub2RlLnByb3BlcnRpZXMgfHwge30pLmlkXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKlxuICogQHR5cGVkZWYge3N0cmluZ30gVGFnTmFtZVxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfFRhZ05hbWV8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXkuPFRhZ05hbWV8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSBUZXN0XG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge0VsZW1lbnR9IFRcbiAqIEB0eXBlZGVmIHtudWxsfHVuZGVmaW5lZHxUWyd0YWdOYW1lJ118VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0YWdOYW1lJ118VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+Pn0gUHJlZGljYXRlVGVzdFxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBwYXNzZXMgYSB0ZXN0XG4gKlxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvbkFueXRoaW5nXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtib29sZWFufHZvaWR9XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtFbGVtZW50fSBYXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uUHJlZGljYXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtlbGVtZW50IGlzIFh9XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgaXMgYW4gZWxlbWVudCBhbmQgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAY2FsbGJhY2sgQXNzZXJ0QW55dGhpbmdcbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhbiBlbGVtZW50IGFuZCBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEB0ZW1wbGF0ZSB7RWxlbWVudH0gWVxuICogQGNhbGxiYWNrIEFzc2VydFByZWRpY2F0ZVxuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtub2RlIGlzIFl9XG4gKi9cblxuLy8gQ2hlY2sgaWYgYG5vZGVgIGlzIGFuIGBlbGVtZW50YCBhbmQgd2hldGhlciBpdCBwYXNzZXMgdGhlIGdpdmVuIHRlc3QuXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgbm9kZSBpcyBhbiBlbGVtZW50IGFuZCBwYXNzZXMgYSB0ZXN0LlxuICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICgoKSA9PiBmYWxzZSkgJlxuICAgKiAgICg8VCBleHRlbmRzIEVsZW1lbnQgPSBFbGVtZW50Pihub2RlOiB1bmtub3duLCB0ZXN0PzogUHJlZGljYXRlVGVzdDxUPiwgaW5kZXg/OiBudW1iZXIsIHBhcmVudD86IFBhcmVudCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgVCkgJlxuICAgKiAgICgobm9kZTogdW5rbm93biwgdGVzdDogVGVzdCwgaW5kZXg/OiBudW1iZXIsIHBhcmVudD86IFBhcmVudCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3QuXG4gICAgICogV2hlbiBhIGBwYXJlbnRgIG5vZGUgaXMga25vd24gdGhlIGBpbmRleGAgb2Ygbm9kZSBzaG91bGQgYWxzbyBiZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdIE5vZGUgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XSBXaGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gICAgICogV2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGBmdW5jdGlvbiAobm9kZSkge3JldHVybiBub2RlLnR5cGUgPT09IHRlc3R9YC5cbiAgICAgKiBXaGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICAgICAqIFdoZW4gYGFycmF5YCwgY2hlY2tzIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gUG9zaXRpb24gb2YgYG5vZGVgIGluIGBwYXJlbnRgXG4gICAgICogQHBhcmFtIHtQYXJlbnR9IFtwYXJlbnRdIFBhcmVudCBvZiBgbm9kZWBcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtjb250ZXh0XSBDb250ZXh0IG9iamVjdCB0byBpbnZva2UgYHRlc3RgIHdpdGhcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0ZXN0IHBhc3NlZCBhbmQgYG5vZGVgIGlzIGFuIGBFbGVtZW50YCAob2JqZWN0IHdpdGggYHR5cGVgIHNldCB0byBgZWxlbWVudGAgYW5kIGB0YWdOYW1lYCBzZXQgdG8gYSBub24tZW1wdHkgc3RyaW5nKS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIChub2RlLCB0ZXN0LCBpbmRleCwgcGFyZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBjaGVjayA9IGNvbnZlcnRFbGVtZW50KHRlc3QpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBpbmRleCAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIGluZGV4IDwgMCB8fFxuICAgICAgICAgIGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgaW5kZXggZm9yIGNoaWxkIG5vZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHBhcmVudCAhPT0gbnVsbCAmJlxuICAgICAgICAoIXBhcmVudC50eXBlIHx8ICFwYXJlbnQuY2hpbGRyZW4pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTG9va3MgbGlrZSBhIG5vZGUuXG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUudHlwZSB8fCB0eXBlb2Ygbm9kZS50eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocGFyZW50ID09PSB1bmRlZmluZWQgfHwgcGFyZW50ID09PSBudWxsKSAhPT1cbiAgICAgICAgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBib3RoIHBhcmVudCBhbmQgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hlY2suY2FsbChjb250ZXh0LCBub2RlLCBpbmRleCwgcGFyZW50KVxuICAgIH1cbiAgKVxuXG5leHBvcnQgY29uc3QgY29udmVydEVsZW1lbnQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFQgZXh0ZW5kcyBFbGVtZW50Pih0ZXN0OiBUWyd0YWdOYW1lJ118VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+KSA9PiBBc3NlcnRQcmVkaWNhdGU8VD4pICZcbiAgICogICAoKHRlc3Q/OiBUZXN0KSA9PiBBc3NlcnRBbnl0aGluZylcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiBhc3NlcnRpb24gZnJvbSBhIGNoZWNrLlxuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogV2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICAgICAqIFdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgZnVuY3Rpb24gKG5vZGUpIHtyZXR1cm4gbm9kZS50eXBlID09PSB0ZXN0fWAuXG4gICAgICogV2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgIGlmICh0ZXN0ID09PSB1bmRlZmluZWQgfHwgdGVzdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lRmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBhbnlGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBhcnJheSBhcyB0ZXN0JylcbiAgICB9XG4gIClcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxUYWdOYW1lfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gdGVzdHNcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICAvKiogQHR5cGUge0FycmF5LjxBc3NlcnRBbnl0aGluZz59ICovXG4gIGNvbnN0IGNoZWNrcyA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydEVsZW1lbnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFueSlcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7dW5rbm93bltdfSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYW55KC4uLnBhcmFtZXRlcnMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGVja3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5jYWxsKHRoaXMsIC4uLnBhcmFtZXRlcnMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGVcdTIwMTlzIHRhZ1xuICogbmFtZSBmb3Igc2FpZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtUYWdOYW1lfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiB0YWdOYW1lRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gdGFnTmFtZVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiB0YWdOYW1lKG5vZGUpIHtcbiAgICByZXR1cm4gZWxlbWVudChub2RlKSAmJiBub2RlLnRhZ05hbWUgPT09IGNoZWNrXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1Rlc3RGdW5jdGlvbkFueXRoaW5nfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBjYXN0RmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gYXNzZXJ0aW9uXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAgICogQHBhcmFtIHtBcnJheS48dW5rbm93bj59IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhc3NlcnRpb24obm9kZSwgLi4ucGFyYW1ldGVycykge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGZpbmUuXG4gICAgcmV0dXJuIGVsZW1lbnQobm9kZSkgJiYgQm9vbGVhbihjaGVjay5jYWxsKHRoaXMsIG5vZGUsIC4uLnBhcmFtZXRlcnMpKVxuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byByZXR1cm4gdHJ1ZSBpZiB0aGlzIGlzIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAqIEByZXR1cm5zIHtub2RlIGlzIEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnQobm9kZSkge1xuICByZXR1cm4gQm9vbGVhbihcbiAgICBub2RlICYmXG4gICAgICB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTG9va3MgbGlrZSBhIG5vZGUuXG4gICAgICBub2RlLnR5cGUgPT09ICdlbGVtZW50JyAmJlxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGFuIGVsZW1lbnQuXG4gICAgICB0eXBlb2Ygbm9kZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICApXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSBWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHMsIENPTlRJTlVFLCBTS0lQLCBFWElUfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbmV4cG9ydCB7Q09OVElOVUUsIFNLSVAsIEVYSVR9XG5cbi8qKlxuICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICpcbiAqIEBwYXJhbSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAqIEBwYXJhbSB0ZXN0IFRlc3QsIG9wdGlvbmFsXG4gKiBAcGFyYW0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICogQHBhcmFtIHJldmVyc2UgRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gdmlzaXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHJldHVybiB2aXNpdG9yKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsLFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICApXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9pbmRleC5qcycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vbGliL2luZGV4LmpzJ1xuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbG93bGlnaHQnKS5Sb290fSBMb3dsaWdodFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2xvd2xpZ2h0L2xpYi9jb3JlLmpzJykuSGlnaGxpZ2h0U3ludGF4fSBIaWdobGlnaHRTeW50YXhcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge1Jvb3R8Um9vdFsnY2hpbGRyZW4nXVtudW1iZXJdfSBOb2RlXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3ByZWZpeD0naGxqcy0nXVxuICogICBQcmVmaXggdG8gdXNlIGJlZm9yZSBjbGFzc2VzLlxuICogQHByb3BlcnR5IHtib29sZWFufEFycmF5PHN0cmluZz59IFtzdWJzZXRdXG4gKiAgIFNjb3BlIG9mIGxhbmd1YWdlcyB0byBjaGVjayB3aGVuIGF1dG8tZGV0ZWN0aW5nIChkZWZhdWx0OiBhbGwgbGFuZ3VhZ2VzKS5cbiAqICAgUGFzcyBgZmFsc2VgIHRvIG5vdCBoaWdobGlnaHQgY29kZSB3aXRob3V0IGxhbmd1YWdlIGNsYXNzZXMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpZ25vcmVNaXNzaW5nPWZhbHNlXVxuICogICBTd2FsbG93IGVycm9ycyBmb3IgbWlzc2luZyBsYW5ndWFnZXMuXG4gKiAgIEJ5IGRlZmF1bHQsIHVucmVnaXN0ZXJlZCBzeW50YXhlcyB0aHJvdyBhbiBlcnJvciB3aGVuIHRoZXkgYXJlIHVzZWQuXG4gKiAgIFBhc3MgYHRydWVgIHRvIHN3YWxsb3cgdGhvc2UgZXJyb3JzIGFuZCB0aHVzIGlnbm9yZSBjb2RlIHdpdGggdW5rbm93biBjb2RlXG4gKiAgIGxhbmd1YWdlcy5cbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gW3BsYWluVGV4dD1bXV1cbiAqICAgTGlzdCBvZiBwbGFpbi10ZXh0IGxhbmd1YWdlcy5cbiAqICAgUGFzcyBhbnkgbGFuZ3VhZ2VzIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGtlcHQgYXMgcGxhaW4tdGV4dCBpbnN0ZWFkIG9mXG4gKiAgIGdldHRpbmcgaGlnaGxpZ2h0ZWQuXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsIHN0cmluZ3xBcnJheTxzdHJpbmc+Pn0gW2FsaWFzZXM9e31dXG4gKiAgIFJlZ2lzdGVyIG1vcmUgYWxpYXNlcy5cbiAqICAgUGFzc2VkIHRvIGBsb3dsaWdodC5yZWdpc3RlckFsaWFzYC5cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZywgSGlnaGxpZ2h0U3ludGF4Pn0gW2xhbmd1YWdlcz17fV1cbiAqICAgUmVnaXN0ZXIgbW9yZSBsYW5ndWFnZXMuXG4gKiAgIEVhY2gga2V5L3ZhbHVlIHBhaXIgcGFzc2VkIGFzIGFyZ3VtZW50cyB0byBgbG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZWAuXG4gKi9cblxuaW1wb3J0IHtsb3dsaWdodH0gZnJvbSAnbG93bGlnaHQnXG5pbXBvcnQge3RvVGV4dH0gZnJvbSAnaGFzdC11dGlsLXRvLXRleHQnXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIFBsdWdpbiB0byBoaWdobGlnaHQgdGhlIHN5bnRheCBvZiBjb2RlIHdpdGggbG93bGlnaHQgKGBoaWdobGlnaHQuanNgKS5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP10gfCBBcnJheTx2b2lkPiwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlaHlwZUhpZ2hsaWdodChvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge2FsaWFzZXMsIGxhbmd1YWdlcywgcHJlZml4LCBwbGFpblRleHQsIGlnbm9yZU1pc3NpbmcsIHN1YnNldH0gPSBvcHRpb25zXG4gIGxldCBuYW1lID0gJ2hsanMnXG5cbiAgaWYgKGFsaWFzZXMpIHtcbiAgICBsb3dsaWdodC5yZWdpc3RlckFsaWFzKGFsaWFzZXMpXG4gIH1cblxuICBpZiAobGFuZ3VhZ2VzKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGtleVxuXG4gICAgZm9yIChrZXkgaW4gbGFuZ3VhZ2VzKSB7XG4gICAgICBpZiAob3duLmNhbGwobGFuZ3VhZ2VzLCBrZXkpKSB7XG4gICAgICAgIGxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2Uoa2V5LCBsYW5ndWFnZXNba2V5XSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJlZml4KSB7XG4gICAgY29uc3QgcG9zID0gcHJlZml4LmluZGV4T2YoJy0nKVxuICAgIG5hbWUgPSBwb3MgPiAtMSA/IHByZWZpeC5zbGljZSgwLCBwb3MpIDogcHJlZml4XG4gIH1cblxuICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIHZpc2l0KHRyZWUsICdlbGVtZW50JywgKG5vZGUsIF8sIGdpdmVuUGFyZW50KSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnQgPSAvKiogQHR5cGUge05vZGU/fSAqLyAoZ2l2ZW5QYXJlbnQpXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXBhcmVudCB8fFxuICAgICAgICAhKCd0YWdOYW1lJyBpbiBwYXJlbnQpIHx8XG4gICAgICAgIHBhcmVudC50YWdOYW1lICE9PSAncHJlJyB8fFxuICAgICAgICBub2RlLnRhZ05hbWUgIT09ICdjb2RlJyB8fFxuICAgICAgICAhbm9kZS5wcm9wZXJ0aWVzXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxhbmcgPSBsYW5ndWFnZShub2RlKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGxhbmcgPT09IGZhbHNlIHx8XG4gICAgICAgICghbGFuZyAmJiBzdWJzZXQgPT09IGZhbHNlKSB8fFxuICAgICAgICAobGFuZyAmJiBwbGFpblRleHQgJiYgcGxhaW5UZXh0LmluY2x1ZGVzKGxhbmcpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSA9IFtdXG4gICAgICB9XG5cbiAgICAgIGlmICghbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lLnVuc2hpZnQobmFtZSlcbiAgICAgIH1cblxuICAgICAgLyoqIEB0eXBlIHtMb3dsaWdodFJvb3R9ICovXG4gICAgICBsZXQgcmVzdWx0XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGxhbmdcbiAgICAgICAgICA/IGxvd2xpZ2h0LmhpZ2hsaWdodChsYW5nLCB0b1RleHQocGFyZW50KSwge3ByZWZpeH0pXG4gICAgICAgICAgOiAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBjaGVja2VkIHRoYXQgYHN1YnNldGAgaXMgbm90IGEgYm9vbGVhbi5cbiAgICAgICAgICAgIGxvd2xpZ2h0LmhpZ2hsaWdodEF1dG8odG9UZXh0KHBhcmVudCksIHtwcmVmaXgsIHN1YnNldH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBleGNlcHRpb24gPSAvKiogQHR5cGUge0Vycm9yfSAqLyAoZXJyb3IpXG4gICAgICAgIGlmICghaWdub3JlTWlzc2luZyB8fCAhL1Vua25vd24gbGFuZ3VhZ2UvLnRlc3QoZXhjZXB0aW9uLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWxhbmcgJiYgcmVzdWx0LmRhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5wdXNoKCdsYW5ndWFnZS0nICsgcmVzdWx0LmRhdGEubGFuZ3VhZ2UpXG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdC5jaGlsZHJlbikgJiYgcmVzdWx0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHJlc3VsdC5jaGlsZHJlblxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlIG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtmYWxzZXxzdHJpbmd8dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBsYW5ndWFnZShub2RlKSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUucHJvcGVydGllcyAmJiBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2xhc3NOYW1lLmxlbmd0aCkge1xuICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKGNsYXNzTmFtZVtpbmRleF0pXG5cbiAgICBpZiAodmFsdWUgPT09ICduby1oaWdobGlnaHQnIHx8IHZhbHVlID09PSAnbm9oaWdobGlnaHQnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuc2xpY2UoMCwgNSkgPT09ICdsYW5nLScpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zbGljZSg1KVxuICAgIH1cblxuICAgIGlmICh2YWx1ZS5zbGljZSgwLCA5KSA9PT0gJ2xhbmd1YWdlLScpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zbGljZSg5KVxuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvY29yZS5qcycpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2NvcmUuanMnKS5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9jb3JlLmpzJykuQXV0b09wdGlvbnN9IEF1dG9PcHRpb25zXG4gKi9cblxuZXhwb3J0IHtsb3dsaWdodH0gZnJvbSAnLi9saWIvY29tbW9uLmpzJ1xuIiwgImltcG9ydCBhcmR1aW5vIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FyZHVpbm8nXG5pbXBvcnQgYmFzaCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9iYXNoJ1xuaW1wb3J0IGMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYydcbmltcG9ydCBjcHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3BwJ1xuaW1wb3J0IGNzaGFycCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc2hhcnAnXG5pbXBvcnQgY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzcydcbmltcG9ydCBkaWZmIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RpZmYnXG5pbXBvcnQgZ28gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ28nXG5pbXBvcnQgaW5pIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2luaSdcbmltcG9ydCBqYXZhIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmEnXG5pbXBvcnQgamF2YXNjcmlwdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0J1xuaW1wb3J0IGpzb24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbidcbmltcG9ydCBrb3RsaW4gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMva290bGluJ1xuaW1wb3J0IGxlc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGVzcydcbmltcG9ydCBsdWEgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbHVhJ1xuaW1wb3J0IG1ha2VmaWxlIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21ha2VmaWxlJ1xuaW1wb3J0IG1hcmtkb3duIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21hcmtkb3duJ1xuaW1wb3J0IG9iamVjdGl2ZWMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb2JqZWN0aXZlYydcbmltcG9ydCBwZXJsIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BlcmwnXG5pbXBvcnQgcGhwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocCdcbmltcG9ydCBwaHBUZW1wbGF0ZSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAtdGVtcGxhdGUnXG5pbXBvcnQgcGxhaW50ZXh0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BsYWludGV4dCdcbmltcG9ydCBweXRob24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHl0aG9uJ1xuaW1wb3J0IHB5dGhvblJlcGwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHl0aG9uLXJlcGwnXG5pbXBvcnQgciBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9yJ1xuaW1wb3J0IHJ1YnkgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVieSdcbmltcG9ydCBydXN0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1c3QnXG5pbXBvcnQgc2NzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zY3NzJ1xuaW1wb3J0IHNoZWxsIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NoZWxsJ1xuaW1wb3J0IHNxbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zcWwnXG5pbXBvcnQgc3dpZnQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3dpZnQnXG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90eXBlc2NyaXB0J1xuaW1wb3J0IHZibmV0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZibmV0J1xuaW1wb3J0IHhtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwnXG5pbXBvcnQgeWFtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sJ1xuaW1wb3J0IHtsb3dsaWdodH0gZnJvbSAnLi9jb3JlLmpzJ1xuXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdhcmR1aW5vJywgYXJkdWlubylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnYycsIGMpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdjcHAnLCBjcHApXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdjc2hhcnAnLCBjc2hhcnApXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdjc3MnLCBjc3MpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdkaWZmJywgZGlmZilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2dvJywgZ28pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdpbmknLCBpbmkpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhJywgamF2YSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmFzY3JpcHQnLCBqYXZhc2NyaXB0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnanNvbicsIGpzb24pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdrb3RsaW4nLCBrb3RsaW4pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdsZXNzJywgbGVzcylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2x1YScsIGx1YSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ21ha2VmaWxlJywgbWFrZWZpbGUpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdtYXJrZG93bicsIG1hcmtkb3duKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnb2JqZWN0aXZlYycsIG9iamVjdGl2ZWMpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdwZXJsJywgcGVybClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BocCcsIHBocClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BocC10ZW1wbGF0ZScsIHBocFRlbXBsYXRlKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGxhaW50ZXh0JywgcGxhaW50ZXh0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncHl0aG9uJywgcHl0aG9uKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncHl0aG9uLXJlcGwnLCBweXRob25SZXBsKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncicsIHIpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdydWJ5JywgcnVieSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3J1c3QnLCBydXN0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnc2NzcycsIHNjc3MpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzaGVsbCcsIHNoZWxsKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnc3FsJywgc3FsKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnc3dpZnQnLCBzd2lmdClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3R5cGVzY3JpcHQnLCB0eXBlc2NyaXB0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgndmJuZXQnLCB2Ym5ldClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3htbCcsIHhtbClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3lhbWwnLCB5YW1sKVxuXG5leHBvcnQge2xvd2xpZ2h0fSBmcm9tICcuL2NvcmUuanMnXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuVGV4dH0gVGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuSGlnaGxpZ2h0UmVzdWx0fSBIaWdobGlnaHRSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hpZ2hsaWdodC5qcycpLkhMSlNPcHRpb25zfSBIaWdobGlnaHRPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoaWdobGlnaHQuanMnKS5MYW5ndWFnZUZufSBIaWdobGlnaHRTeW50YXhcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hpZ2hsaWdodC5qcycpLkVtaXR0ZXJ9IEhpZ2hsaWdodEVtaXR0ZXJcbiAqXG4gKiBAdHlwZWRlZiB7e3R5cGU6ICdlbGVtZW50JywgdGFnTmFtZTogJ3NwYW4nLCBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBBcnJheTxzdHJpbmc+fSwgY2hpbGRyZW46IEFycmF5PFNwYW58VGV4dD59fSBTcGFuXG4gKiBAdHlwZWRlZiB7e3R5cGU6ICdyb290JywgZGF0YToge2xhbmd1YWdlOiBzdHJpbmd8bnVsbCwgcmVsZXZhbmNlOiBudW1iZXJ9LCBjaGlsZHJlbjogQXJyYXk8U3BhbnxUZXh0Pn19IFJvb3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFeHRyYU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gW3N1YnNldF1cbiAqICAgTGlzdCBvZiBhbGxvd2VkIGxhbmd1YWdlcywgZGVmYXVsdHMgdG8gYWxsIHJlZ2lzdGVyZWQgbGFuZ3VhZ2VzLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJlZml4PSdobGpzLSddXG4gKiAgIENsYXNzIHByZWZpeC5cbiAqXG4gKiBAdHlwZWRlZiB7T3B0aW9ucyAmIEV4dHJhT3B0aW9uc30gQXV0b09wdGlvbnNcbiAqL1xuXG5pbXBvcnQgaGlnaCBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnXG5pbXBvcnQge2ZhdWx0fSBmcm9tICdmYXVsdCdcblxuY29uc3Qgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuY29uc3QgZGVmYXVsdFByZWZpeCA9ICdobGpzLSdcblxuLyoqXG4gKiBIaWdobGlnaHQgYHZhbHVlYCAoY29kZSkgYXMgYGxhbmd1YWdlYCAobmFtZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gKiAgIFByb2dyYW1taW5nIGxhbmd1YWdlIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgQ29kZSB0byBoaWdobGlnaHQuXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zPXt9XVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge1Jvb3R9XG4gKiAgIEEgaGFzdCBgUm9vdGAgbm9kZS5cbiAqL1xuZnVuY3Rpb24gaGlnaGxpZ2h0KGxhbmd1YWdlLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBwcmVmaXggPSBvcHRpb25zLnByZWZpeFxuXG4gIGlmICh0eXBlb2YgbGFuZ3VhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgZmF1bHQoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciBuYW1lLCBnb3QgYCVzYCcsIGxhbmd1YWdlKVxuICB9XG5cbiAgaWYgKCFoaWdoLmdldExhbmd1YWdlKGxhbmd1YWdlKSkge1xuICAgIHRocm93IGZhdWx0KCdVbmtub3duIGxhbmd1YWdlOiBgJXNgIGlzIG5vdCByZWdpc3RlcmVkJywgbGFuZ3VhZ2UpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IGZhdWx0KCdFeHBlY3RlZCBgc3RyaW5nYCBmb3IgdmFsdWUsIGdvdCBgJXNgJywgdmFsdWUpXG4gIH1cblxuICBpZiAocHJlZml4ID09PSBudWxsIHx8IHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHJlZml4ID0gZGVmYXVsdFByZWZpeFxuICB9XG5cbiAgaGlnaC5jb25maWd1cmUoe19fZW1pdHRlcjogSGFzdEVtaXR0ZXIsIGNsYXNzUHJlZml4OiBwcmVmaXh9KVxuXG4gIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7SGlnaGxpZ2h0UmVzdWx0ICYge19lbWl0dGVyOiBIYXN0RW1pdHRlcn19ICovIChcbiAgICBoaWdoLmhpZ2hsaWdodCh2YWx1ZSwge2xhbmd1YWdlLCBpZ25vcmVJbGxlZ2FsczogdHJ1ZX0pXG4gIClcblxuICBoaWdoLmNvbmZpZ3VyZSh7fSlcblxuICAvLyBgaGlnaGxpZ2h0LmpzYCBzZWVtcyB0byB1c2UgdGhpcyAoY3VycmVudGx5KSBmb3IgYnJva2VuIGdyYW1tYXJzLCBzbyBsZXRcdTIwMTlzXG4gIC8vIGtlZXAgaXQgaW4gdGhlcmUganVzdCB0byBiZSBzdXJlLlxuICAvKiBjOCBpZ25vcmUgbmV4dCAzICovXG4gIGlmIChyZXN1bHQuZXJyb3JSYWlzZWQpIHtcbiAgICB0aHJvdyByZXN1bHQuZXJyb3JSYWlzZWRcbiAgfVxuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBsYW5ndWFnZWAgaXMgYWx3YXlzIGRlZmluZWQgaW4gYGhpZ2hsaWdodGAuXG4gIHJlc3VsdC5fZW1pdHRlci5yb290LmRhdGEubGFuZ3VhZ2UgPSByZXN1bHQubGFuZ3VhZ2VcbiAgcmVzdWx0Ll9lbWl0dGVyLnJvb3QuZGF0YS5yZWxldmFuY2UgPSByZXN1bHQucmVsZXZhbmNlXG5cbiAgcmV0dXJuIHJlc3VsdC5fZW1pdHRlci5yb290XG59XG5cbi8qKlxuICogSGlnaGxpZ2h0IGB2YWx1ZWAgKGNvZGUpIGFuZCBndWVzcyBpdHMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIENvZGUgdG8gaGlnaGxpZ2h0LlxuICogQHBhcmFtIHtBdXRvT3B0aW9uc30gW29wdGlvbnM9e31dXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7Um9vdH1cbiAqICAgQSBoYXN0IGBSb290YCBub2RlLlxuICovXG5mdW5jdGlvbiBoaWdobGlnaHRBdXRvKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgc3Vic2V0ID0gb3B0aW9ucy5zdWJzZXQgfHwgaGlnaC5saXN0TGFuZ3VhZ2VzKClcbiAgbGV0IHByZWZpeCA9IG9wdGlvbnMucHJlZml4XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7Um9vdH0gKi9cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiAncm9vdCcsXG4gICAgZGF0YToge2xhbmd1YWdlOiBudWxsLCByZWxldmFuY2U6IDB9LFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG5cbiAgaWYgKHByZWZpeCA9PT0gbnVsbCB8fCBwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgIHByZWZpeCA9IGRlZmF1bHRQcmVmaXhcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgZmF1bHQoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciB2YWx1ZSwgZ290IGAlc2AnLCB2YWx1ZSlcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgc3Vic2V0Lmxlbmd0aCkge1xuICAgIGNvbnN0IG5hbWUgPSBzdWJzZXRbaW5kZXhdXG5cbiAgICBpZiAoIWhpZ2guZ2V0TGFuZ3VhZ2UobmFtZSkpIGNvbnRpbnVlXG5cbiAgICBjb25zdCBjdXJyZW50ID0gaGlnaGxpZ2h0KG5hbWUsIHZhbHVlLCBvcHRpb25zKVxuXG4gICAgaWYgKGN1cnJlbnQuZGF0YS5yZWxldmFuY2UgPiByZXN1bHQuZGF0YS5yZWxldmFuY2UpIHJlc3VsdCA9IGN1cnJlbnRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICogICBQcm9ncmFtbWluZyBsYW5ndWFnZSBuYW1lLlxuICogQHBhcmFtIHtIaWdobGlnaHRTeW50YXh9IHN5bnRheFxuICogICBgaGlnaGxpZ2h0LmpzYCBsYW5ndWFnZSBzeW50YXguXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJMYW5ndWFnZShsYW5ndWFnZSwgc3ludGF4KSB7XG4gIGhpZ2gucmVnaXN0ZXJMYW5ndWFnZShsYW5ndWFnZSwgc3ludGF4KVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGFsaWFzZXMgZm9yIGFscmVhZHkgcmVnaXN0ZXJlZCBsYW5ndWFnZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8UmVjb3JkPHN0cmluZywgc3RyaW5nfEFycmF5PHN0cmluZz4+fSBsYW5ndWFnZVxuICogICBQcm9ncmFtbWluZyBsYW5ndWFnZSBuYW1lIG9yIGEgbWFwIG9mIGBsYW5ndWFnZWBzIHRvIGBhbGlhc2BlcyBvciBgbGlzdGBzXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBbYWxpYXNdXG4gKiAgIE5ldyBhbGlhc2VzIGZvciB0aGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgcmVnaXN0ZXJBbGlhcyA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICgobGFuZ3VhZ2U6IHN0cmluZywgYWxpYXM6IHN0cmluZ3xBcnJheTxzdHJpbmc+KSA9PiB2b2lkKSAmXG4gICAqICAgKChhbGlhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8UmVjb3JkPHN0cmluZywgc3RyaW5nfEFycmF5PHN0cmluZz4+fSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IFthbGlhc11cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobGFuZ3VhZ2UsIGFsaWFzKSB7XG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzaG91bGQgYmUgYSBzdHJpbmcgaW4gdGhpcyBvdmVybG9hZC5cbiAgICAgICAgaGlnaC5yZWdpc3RlckFsaWFzZXMoYWxpYXMsIHtsYW5ndWFnZU5hbWU6IGxhbmd1YWdlfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICBsZXQga2V5XG5cbiAgICAgICAgZm9yIChrZXkgaW4gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICBpZiAob3duLmNhbGwobGFuZ3VhZ2UsIGtleSkpIHtcbiAgICAgICAgICAgIGhpZ2gucmVnaXN0ZXJBbGlhc2VzKGxhbmd1YWdlW2tleV0sIHtsYW5ndWFnZU5hbWU6IGtleX0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICApXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBgYWxpYXNgIG9yIGBsYW5ndWFnZWAgaXMgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWxpYXNPckxhbmd1YWdlXG4gKiAgIE5hbWUgb2YgYSByZWdpc3RlcmVkIGxhbmd1YWdlIG9yIGFsaWFzLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYGFsaWFzT3JsYW5ndWFnZWAgaXMgcmVnaXN0ZXJlZC5cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJlZChhbGlhc09yTGFuZ3VhZ2UpIHtcbiAgcmV0dXJuIEJvb2xlYW4oaGlnaC5nZXRMYW5ndWFnZShhbGlhc09yTGFuZ3VhZ2UpKVxufVxuXG4vKipcbiAqIExpc3QgcmVnaXN0ZXJlZCBsYW5ndWFnZXMuXG4gKlxuICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gKiAgIE5hbWVzIG9mIHJlZ2lzdGVyZWQgbGFuZ3VhZ2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RMYW5ndWFnZXMoKSB7XG4gIHJldHVybiBoaWdoLmxpc3RMYW5ndWFnZXMoKVxufVxuXG4vKiogQHR5cGUge0hpZ2hsaWdodEVtaXR0ZXJ9ICovXG5jbGFzcyBIYXN0RW1pdHRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodE9wdGlvbnN9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAvKiogQHR5cGUge0hpZ2hsaWdodE9wdGlvbnN9ICovXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIC8qKiBAdHlwZSB7Um9vdH0gKi9cbiAgICB0aGlzLnJvb3QgPSB7XG4gICAgICB0eXBlOiAncm9vdCcsXG4gICAgICBkYXRhOiB7bGFuZ3VhZ2U6IG51bGwsIHJlbGV2YW5jZTogMH0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gICAgLyoqIEB0eXBlIHtbUm9vdCwgLi4uU3BhbltdXX0gKi9cbiAgICB0aGlzLnN0YWNrID0gW3RoaXMucm9vdF1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIGFkZFRleHQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm5cblxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBjb25zdCB0YWlsID0gY3VycmVudC5jaGlsZHJlbltjdXJyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAodGFpbCAmJiB0YWlsLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgdGFpbC52YWx1ZSArPSB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50LmNoaWxkcmVuLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGFkZEtleXdvcmQodmFsdWUsIG5hbWUpIHtcbiAgICB0aGlzLm9wZW5Ob2RlKG5hbWUpXG4gICAgdGhpcy5hZGRUZXh0KHZhbHVlKVxuICAgIHRoaXMuY2xvc2VOb2RlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hhc3RFbWl0dGVyfSBvdGhlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgYWRkU3VibGFuZ3VhZ2Uob3RoZXIsIG5hbWUpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgcmVzdWx0cyA9IG90aGVyLnJvb3QuY2hpbGRyZW5cblxuICAgIGlmIChuYW1lKSB7XG4gICAgICBjdXJyZW50LmNoaWxkcmVuLnB1c2goe1xuICAgICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgcHJvcGVydGllczoge2NsYXNzTmFtZTogW25hbWVdfSxcbiAgICAgICAgY2hpbGRyZW46IHJlc3VsdHNcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaCguLi5yZXN1bHRzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgb3Blbk5vZGUobmFtZSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5hbWUuc3BsaXQoJy4nKS5tYXAoKGQpID0+IHRoaXMub3B0aW9ucy5jbGFzc1ByZWZpeCArIGQpXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIC8qKiBAdHlwZSB7U3Bhbn0gKi9cbiAgICBjb25zdCBjaGlsZCA9IHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWV9LFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuXG4gICAgY3VycmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIHRoaXMuc3RhY2sucHVzaChjaGlsZClcbiAgfVxuXG4gIC8qKlxuICAgKi9cbiAgY2xvc2VOb2RlKCkge1xuICAgIHRoaXMuc3RhY2sucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKi9cbiAgY2xvc2VBbGxOb2RlcygpIHt9XG5cbiAgLyoqXG4gICAqL1xuICBmaW5hbGl6ZSgpIHt9XG5cbiAgLyoqXG4gICAqL1xuICB0b0hUTUwoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvd2xpZ2h0ID0ge1xuICBoaWdobGlnaHQsXG4gIGhpZ2hsaWdodEF1dG8sXG4gIHJlZ2lzdGVyTGFuZ3VhZ2UsXG4gIHJlZ2lzdGVyZWQsXG4gIGxpc3RMYW5ndWFnZXMsXG4gIHJlZ2lzdGVyQWxpYXNcbn1cbiIsICIvLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgZm9ybWF0dGVyIGZyb20gJ2Zvcm1hdCdcblxuZXhwb3J0IGNvbnN0IGZhdWx0ID0gT2JqZWN0LmFzc2lnbihjcmVhdGUoRXJyb3IpLCB7XG4gIGV2YWw6IGNyZWF0ZShFdmFsRXJyb3IpLFxuICByYW5nZTogY3JlYXRlKFJhbmdlRXJyb3IpLFxuICByZWZlcmVuY2U6IGNyZWF0ZShSZWZlcmVuY2VFcnJvciksXG4gIHN5bnRheDogY3JlYXRlKFN5bnRheEVycm9yKSxcbiAgdHlwZTogY3JlYXRlKFR5cGVFcnJvciksXG4gIHVyaTogY3JlYXRlKFVSSUVycm9yKVxufSlcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYEVDb25zdHJ1Y3RvcmAsIHdpdGggdGhlIGZvcm1hdHRlZCBgZm9ybWF0YCBhcyBhIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIEB0ZW1wbGF0ZSB7RXJyb3J9IEZhdWx0XG4gKiBAdGVtcGxhdGUge25ldyAocmVhc29uOiBzdHJpbmcpID0+IEZhdWx0fSBDbGFzc1xuICogQHBhcmFtIHtDbGFzc30gQ29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShDb25zdHJ1Y3Rvcikge1xuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBGb3JtYXR0ZWRFcnJvci5kaXNwbGF5TmFtZSA9IENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IENvbnN0cnVjdG9yLm5hbWVcblxuICByZXR1cm4gRm9ybWF0dGVkRXJyb3JcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGVycm9yIHdpdGggYSBwcmludGYtbGlrZSBmb3JtYXR0ZWQgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gW2Zvcm1hdF1cbiAgICogICBUZW1wbGF0ZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7Li4udW5rbm93bn0gdmFsdWVzXG4gICAqICAgVmFsdWVzIHRvIHJlbmRlciBpbiBgZm9ybWF0YC5cbiAgICogQHJldHVybnMge0ZhdWx0fVxuICAgKi9cbiAgZnVuY3Rpb24gRm9ybWF0dGVkRXJyb3IoZm9ybWF0LCAuLi52YWx1ZXMpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBjb25zdCByZWFzb24gPSBmb3JtYXQgPyBmb3JtYXR0ZXIoZm9ybWF0LCAuLi52YWx1ZXMpIDogZm9ybWF0XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihyZWFzb24pXG4gIH1cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JykuVGVzdEZ1bmN0aW9uQW55dGhpbmd9IFRlc3RGdW5jdGlvbkFueXRoaW5nXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUGFyZW50WydjaGlsZHJlbiddW251bWJlcl19IEhhc3RDaGlsZFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlRleHR9IEhhc3RUZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuQ29tbWVudH0gSGFzdENvbW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBIYXN0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEhhc3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUHJvcGVydGllc30gSGFzdFByb3BlcnRpZXNcbiAqIEB0eXBlZGVmIHtIYXN0Q2hpbGR8SGFzdFJvb3R9IEhhc3ROb2RlXG4gKiBAdHlwZWRlZiB7SGFzdFJvb3R8SGFzdEVsZW1lbnR9IEhhc3RQYXJlbnRcbiAqXG4gKiBAdHlwZWRlZiB7J25vcm1hbCd8J3ByZSd8J25vd3JhcCd8J3ByZS13cmFwJ30gV2hpdGVzcGFjZVxuICogQHR5cGVkZWYge2Jvb2xlYW59IEJyZWFrVmFsdWVcbiAqIEB0eXBlZGVmIHsxfDJ9IEJyZWFrTnVtYmVyXG4gKiBAdHlwZWRlZiB7J1xcbid9IEJyZWFrRm9yY2VcbiAqIEB0eXBlZGVmIHtCcmVha1ZhbHVlfEJyZWFrTnVtYmVyfHVuZGVmaW5lZH0gQnJlYWtCZWZvcmVcbiAqIEB0eXBlZGVmIHtCcmVha1ZhbHVlfEJyZWFrTnVtYmVyfEJyZWFrRm9yY2V8dW5kZWZpbmVkfSBCcmVha0FmdGVyXG4gKlxuICogQHR5cGVkZWYgQ29sbGVjdGlvbk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7V2hpdGVzcGFjZX0gd2hpdGVzcGFjZVxuICogQHByb3BlcnR5IHtCcmVha0JlZm9yZX0gYnJlYWtCZWZvcmVcbiAqIEBwcm9wZXJ0eSB7QnJlYWtBZnRlcn0gYnJlYWtBZnRlclxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7V2hpdGVzcGFjZX0gW3doaXRlc3BhY2U9J25vcm1hbCddXG4gKiAgIEluaXRpYWwgQ1NTIHdoaXRlc3BhY2Ugc2V0dGluZyB0byB1c2UuXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0RWxlbWVudH0gZnJvbSAnaGFzdC11dGlsLWlzLWVsZW1lbnQnXG5pbXBvcnQge2ZpbmRBZnRlcn0gZnJvbSAndW5pc3QtdXRpbC1maW5kLWFmdGVyJ1xuXG5jb25zdCBzZWFyY2hMaW5lRmVlZHMgPSAvXFxuL2dcbmNvbnN0IHNlYXJjaFRhYk9yU3BhY2VzID0gL1tcXHQgXSsvZ1xuXG5jb25zdCBiciA9IGNvbnZlcnRFbGVtZW50KCdicicpXG5jb25zdCBwID0gY29udmVydEVsZW1lbnQoJ3AnKVxuY29uc3QgY2VsbCA9IGNvbnZlcnRFbGVtZW50KFsndGgnLCAndGQnXSlcbmNvbnN0IHJvdyA9IGNvbnZlcnRFbGVtZW50KCd0cicpXG5cbi8vIE5vdGUgdGhhdCB3ZSBkb25cdTIwMTl0IG5lZWQgdG8gaW5jbHVkZSB2b2lkIGVsZW1lbnRzIGhlcmUgYXMgdGhleSBkb25cdTIwMTl0IGhhdmUgdGV4dC5cbi8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vaHRtbC12b2lkLWVsZW1lbnRzPlxuY29uc3Qgbm90UmVuZGVyZWQgPSBjb252ZXJ0RWxlbWVudChbXG4gIC8vIExpc3QgZnJvbTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50cz5cbiAgJ2RhdGFsaXN0JyxcbiAgJ2hlYWQnLFxuICAnbm9lbWJlZCcsXG4gICdub2ZyYW1lcycsXG4gICdub3NjcmlwdCcsIC8vIEFjdCBhcyBpZiB3ZSBzdXBwb3J0IHNjcmlwdGluZy5cbiAgJ3JwJyxcbiAgJ3NjcmlwdCcsXG4gICdzdHlsZScsXG4gICd0ZW1wbGF0ZScsXG4gICd0aXRsZScsXG4gIC8vIEhpZGRlbiBhdHRyaWJ1dGUuXG4gIGhpZGRlbixcbiAgLy8gRnJvbTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zPlxuICBjbG9zZWREaWFsb2dcbl0pXG5cbi8vIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1jc3MtdXNlci1hZ2VudC1zdHlsZS1zaGVldC1hbmQtcHJlc2VudGF0aW9uYWwtaGludHM+XG5jb25zdCBibG9ja09yQ2FwdGlvbiA9IGNvbnZlcnRFbGVtZW50KFtcbiAgJ2FkZHJlc3MnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2FydGljbGUnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2FzaWRlJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdibG9ja3F1b3RlJywgLy8gRmxvdyBjb250ZW50XG4gICdib2R5JywgLy8gUGFnZVxuICAnY2FwdGlvbicsIC8vIGB0YWJsZS1jYXB0aW9uYFxuICAnY2VudGVyJywgLy8gRmxvdyBjb250ZW50IChsZWdhY3kpXG4gICdkZCcsIC8vIExpc3RzXG4gICdkaWFsb2cnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2RpcicsIC8vIExpc3RzIChsZWdhY3kpXG4gICdkbCcsIC8vIExpc3RzXG4gICdkdCcsIC8vIExpc3RzXG4gICdkaXYnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2ZpZ3VyZScsIC8vIEZsb3cgY29udGVudFxuICAnZmlnY2FwdGlvbicsIC8vIEZsb3cgY29udGVudFxuICAnZm9vdGVyJywgLy8gRmxvdyBjb250ZW50XG4gICdmb3JtLCcsIC8vIEZsb3cgY29udGVudFxuICAnaDEnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2gyJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoMycsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDQnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2g1JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoNicsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaGVhZGVyJywgLy8gRmxvdyBjb250ZW50XG4gICdoZ3JvdXAnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2hyJywgLy8gRmxvdyBjb250ZW50XG4gICdodG1sJywgLy8gUGFnZVxuICAnbGVnZW5kJywgLy8gRmxvdyBjb250ZW50XG4gICdsaXN0aW5nJywgLy8gRmxvdyBjb250ZW50IChsZWdhY3kpXG4gICdtYWluJywgLy8gRmxvdyBjb250ZW50XG4gICdtZW51JywgLy8gTGlzdHNcbiAgJ25hdicsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnb2wnLCAvLyBMaXN0c1xuICAncCcsIC8vIEZsb3cgY29udGVudFxuICAncGxhaW50ZXh0JywgLy8gRmxvdyBjb250ZW50IChsZWdhY3kpXG4gICdwcmUnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ3NlY3Rpb24nLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ3VsJywgLy8gTGlzdHNcbiAgJ3htcCcgLy8gRmxvdyBjb250ZW50IChsZWdhY3kpXG5dKVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBgaW5uZXJUZXh0YCBnZXR0ZXI6XG4gKiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWlubmVydGV4dC1pZGwtYXR0cmlidXRlPlxuICogTm90ZSB0aGF0IHdlIGFjdCBhcyBpZiBgbm9kZWAgaXMgYmVpbmcgcmVuZGVyZWQsIGFuZCBhcyBpZiB3ZVx1MjAxOXJlIGFcbiAqIENTUy1zdXBwb3J0aW5nIHVzZXIgYWdlbnQuXG4gKlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RleHQobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPEhhc3RDaGlsZD59ICovXG4gIC8vIEB0cy1pZ25vcmUgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdXG4gIGNvbnN0IGJsb2NrID0gYmxvY2tPckNhcHRpb24obm9kZSlcbiAgY29uc3Qgd2hpdGVzcGFjZSA9IGluZmVyV2hpdGVzcGFjZShub2RlLCB7XG4gICAgd2hpdGVzcGFjZTogb3B0aW9ucy53aGl0ZXNwYWNlIHx8ICdub3JtYWwnLFxuICAgIGJyZWFrQmVmb3JlOiBmYWxzZSxcbiAgICBicmVha0FmdGVyOiBmYWxzZVxuICB9KVxuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmd8QnJlYWtOdW1iZXI+fSAqL1xuICBsZXQgcmVzdWx0c1xuICAvKiogQHR5cGUge3N0cmluZ3xCcmVha051bWJlcn0gKi9cbiAgbGV0IHZhbHVlXG4gIC8qKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH0gKi9cbiAgbGV0IGNvdW50XG5cbiAgLy8gVHJlYXQgYHRleHRgIGFuZCBgY29tbWVudGAgYXMgaGF2aW5nIG5vcm1hbCB3aGl0ZS1zcGFjZS5cbiAgLy8gVGhpcyBkZXZpYXRlcyBmcm9tIHRoZSBzcGVjIGFzIGluIHRoZSBET00gdGhlIG5vZGVcdTIwMTlzIGAuZGF0YWAgaGFzIHRvIGJlXG4gIC8vIHJldHVybmVkLlxuICAvLyBJZiB5b3Ugd2FudCB0aGF0IGJlaGF2aW9yIHVzZSBgaGFzdC11dGlsLXRvLXN0cmluZ2AuXG4gIC8vIEFsbCBvdGhlciBub2RlcyBhcmUgbGF0ZXIgaGFuZGxlZCBhcyBpZiB0aGV5IGFyZSBgZWxlbWVudGBzIChzbyB0aGVcbiAgLy8gYWxnb3JpdGhtIGFsc28gd29ya3Mgb24gYSBgcm9vdGApLlxuICAvLyBOb2RlcyB3aXRob3V0IGNoaWxkcmVuIGFyZSB0cmVhdGVkIGFzIGEgdm9pZCBlbGVtZW50LCBzbyBgZG9jdHlwZWAgaXMgdGh1c1xuICAvLyBpZ25vcmVkLlxuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcgfHwgbm9kZS50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICByZXR1cm4gY29sbGVjdFRleHQobm9kZSwge3doaXRlc3BhY2UsIGJyZWFrQmVmb3JlOiB0cnVlLCBicmVha0FmdGVyOiB0cnVlfSlcbiAgfVxuXG4gIC8vIDEuICBJZiB0aGlzIGVsZW1lbnQgaXMgbm90IGJlaW5nIHJlbmRlcmVkLCBvciBpZiB0aGUgdXNlciBhZ2VudCBpcyBhXG4gIC8vICAgICBub24tQ1NTIHVzZXIgYWdlbnQsIHRoZW4gcmV0dXJuIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSB0ZXh0Q29udGVudCBJRExcbiAgLy8gICAgIGF0dHJpYnV0ZSBvbiB0aGlzIGVsZW1lbnQuXG4gIC8vXG4gIC8vICAgICBOb3RlOiB3ZVx1MjAxOXJlIG5vdCBzdXBwb3J0aW5nIHN0eWxlc2hlZXRzIHNvIHdlXHUyMDE5cmUgYWN0aW5nIGFzIGlmIHRoZSBub2RlXG4gIC8vICAgICBpcyByZW5kZXJlZC5cbiAgLy9cbiAgLy8gICAgIElmIHlvdSB3YW50IHRoYXQgYmVoYXZpb3IgdXNlIGBoYXN0LXV0aWwtdG8tc3RyaW5nYC5cbiAgLy8gICAgIEltcG9ydGFudDogd2VcdTIwMTlsbCBoYXZlIHRvIGFjY291bnQgZm9yIHRoaXMgbGF0ZXIgdGhvdWdoLlxuXG4gIC8vIDIuICBMZXQgcmVzdWx0cyBiZSBhIG5ldyBlbXB0eSBsaXN0LlxuICByZXN1bHRzID0gW11cblxuICAvLyAzLiAgRm9yIGVhY2ggY2hpbGQgbm9kZSBub2RlIG9mIHRoaXMgZWxlbWVudDpcbiAgd2hpbGUgKCsraW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAvLyAzLjEuIExldCBjdXJyZW50IGJlIHRoZSBsaXN0IHJlc3VsdGluZyBpbiBydW5uaW5nIHRoZSBpbm5lciB0ZXh0XG4gICAgLy8gICAgICBjb2xsZWN0aW9uIHN0ZXBzIHdpdGggbm9kZS5cbiAgICAvLyAgICAgIEVhY2ggaXRlbSBpbiByZXN1bHRzIHdpbGwgZWl0aGVyIGJlIGEgSmF2YVNjcmlwdCBzdHJpbmcgb3IgYVxuICAgIC8vICAgICAgcG9zaXRpdmUgaW50ZWdlciAoYSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50KS5cbiAgICAvLyAzLjIuIEZvciBlYWNoIGl0ZW0gaXRlbSBpbiBjdXJyZW50LCBhcHBlbmQgaXRlbSB0byByZXN1bHRzLlxuICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcbiAgICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgIGlubmVyVGV4dENvbGxlY3Rpb24oY2hpbGRyZW5baW5kZXhdLCBub2RlLCB7XG4gICAgICAgIHdoaXRlc3BhY2UsXG4gICAgICAgIGJyZWFrQmVmb3JlOiBpbmRleCA/IG51bGwgOiBibG9jayxcbiAgICAgICAgYnJlYWtBZnRlcjpcbiAgICAgICAgICBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCAtIDEgPyBicihjaGlsZHJlbltpbmRleCArIDFdKSA6IGJsb2NrXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIC8vIDQuICBSZW1vdmUgYW55IGl0ZW1zIGZyb20gcmVzdWx0cyB0aGF0IGFyZSB0aGUgZW1wdHkgc3RyaW5nLlxuICAvLyA1LiAgUmVtb3ZlIGFueSBydW5zIG9mIGNvbnNlY3V0aXZlIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQgaXRlbXMgYXQgdGhlXG4gIC8vICAgICBzdGFydCBvciBlbmQgb2YgcmVzdWx0cy5cbiAgLy8gNi4gIFJlcGxhY2UgZWFjaCByZW1haW5pbmcgcnVuIG9mIGNvbnNlY3V0aXZlIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnRcbiAgLy8gICAgIGl0ZW1zIHdpdGggYSBzdHJpbmcgY29uc2lzdGluZyBvZiBhcyBtYW55IFUrMDAwQSBMSU5FIEZFRUQgKExGKVxuICAvLyAgICAgY2hhcmFjdGVycyBhcyB0aGUgbWF4aW11bSBvZiB0aGUgdmFsdWVzIGluIHRoZSByZXF1aXJlZCBsaW5lIGJyZWFrXG4gIC8vICAgICBjb3VudCBpdGVtcy5cbiAgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmc+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgcmVzdWx0cy5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHJlc3VsdHNbaW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgPiBjb3VudCkgY291bnQgPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChjb3VudCkgcmVzdWx0LnB1c2goJ1xcbicucmVwZWF0KGNvdW50KSlcbiAgICAgIGNvdW50ID0gMFxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgLy8gNy4gIFJldHVybiB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgc3RyaW5nIGl0ZW1zIGluIHJlc3VsdHMuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cblxuLyoqXG4gKiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jaW5uZXItdGV4dC1jb2xsZWN0aW9uLXN0ZXBzPlxuICpcbiAqIEBwYXJhbSB7SGFzdE5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7SGFzdFBhcmVudH0gcGFyZW50XG4gKiBAcGFyYW0ge0NvbGxlY3Rpb25PcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7QXJyYXkuPHN0cmluZ3xCcmVha051bWJlcj59XG4gKi9cbmZ1bmN0aW9uIGlubmVyVGV4dENvbGxlY3Rpb24obm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIHJldHVybiBjb2xsZWN0RWxlbWVudChub2RlLCBwYXJlbnQsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3B0aW9ucy53aGl0ZXNwYWNlID09PSAnbm9ybWFsJ1xuICAgICAgICA/IGNvbGxlY3RUZXh0KG5vZGUsIG9wdGlvbnMpXG4gICAgICAgIDogY29sbGVjdFByZVRleHQobm9kZSlcbiAgICBdXG4gIH1cblxuICByZXR1cm4gW11cbn1cblxuLyoqXG4gKiBDb2xsZWN0IGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIYXN0RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtIYXN0UGFyZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY29sbGVjdEVsZW1lbnQobm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gIC8vIEZpcnN0IHdlIGluZmVyIHRoZSBgd2hpdGUtc3BhY2VgIHByb3BlcnR5LlxuICBjb25zdCB3aGl0ZXNwYWNlID0gaW5mZXJXaGl0ZXNwYWNlKG5vZGUsIG9wdGlvbnMpXG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiB8fCBbXVxuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmd8QnJlYWtOdW1iZXI+fSAqL1xuICBsZXQgaXRlbXMgPSBbXVxuICAvKiogQHR5cGUge0JyZWFrTnVtYmVyfHVuZGVmaW5lZH0gKi9cbiAgbGV0IHByZWZpeFxuICAvKiogQHR5cGUge0JyZWFrTnVtYmVyfEJyZWFrRm9yY2V8dW5kZWZpbmVkfSAqL1xuICBsZXQgc3VmZml4XG5cbiAgLy8gV2VcdTIwMTlyZSBpZ25vcmluZyBwb2ludCAzLCBhbmQgZXhpdGluZyB3aXRob3V0IGFueSBjb250ZW50IGhlcmUsIGJlY2F1c2Ugd2VcbiAgLy8gZGV2aWF0ZWQgZnJvbSB0aGUgc3BlYyBpbiBgdG9UZXh0YCBhdCBzdGVwIDMuXG4gIGlmIChub3RSZW5kZXJlZChub2RlKSkge1xuICAgIHJldHVybiBpdGVtc1xuICB9XG5cbiAgLy8gTm90ZTogd2UgZmlyc3QgZGV0ZWN0IGlmIHRoZXJlIGlzIGdvaW5nIHRvIGJlIGEgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIHRoZVxuICAvLyBjb250ZW50cywgYXMgdGhhdCBjaGFuZ2VzIHRoZSB3aGl0ZS1zcGFjZSBoYW5kbGluZy5cblxuICAvLyAyLiAgSWYgbm9kZVx1MjAxOXMgY29tcHV0ZWQgdmFsdWUgb2YgYHZpc2liaWxpdHlgIGlzIG5vdCBgdmlzaWJsZWAsIHRoZW4gcmV0dXJuXG4gIC8vICAgICBpdGVtcy5cbiAgLy9cbiAgLy8gICAgIE5vdGU6IElnbm9yZWQsIGFzIGV2ZXJ5dGhpbmcgaXMgdmlzaWJsZSBieSBkZWZhdWx0IHVzZXIgYWdlbnQgc3R5bGVzLlxuXG4gIC8vIDMuICBJZiBub2RlIGlzIG5vdCBiZWluZyByZW5kZXJlZCwgdGhlbiByZXR1cm4gaXRlbXMuIFsuLi5dXG4gIC8vXG4gIC8vICAgICBOb3RlOiBXZSBhbHJlYWR5IGRpZCB0aGlzIGFib3ZlLlxuXG4gIC8vIFNlZSBgY29sbGVjdFRleHRgIGZvciBzdGVwIDQuXG5cbiAgLy8gNS4gIElmIG5vZGUgaXMgYSBgPGJyPmAgZWxlbWVudCwgdGhlbiBhcHBlbmQgYSBzdHJpbmcgY29udGFpbmluZyBhIHNpbmdsZVxuICAvLyAgICAgVSswMDBBIExJTkUgRkVFRCAoTEYpIGNoYXJhY3RlciB0byBpdGVtcy5cbiAgaWYgKGJyKG5vZGUpKSB7XG4gICAgc3VmZml4ID0gJ1xcbidcbiAgfVxuXG4gIC8vIDcuICBJZiBub2RlXHUyMDE5cyBjb21wdXRlZCB2YWx1ZSBvZiBgZGlzcGxheWAgaXMgYHRhYmxlLXJvd2AsIGFuZCBub2RlXHUyMDE5cyBDU1NcbiAgLy8gICAgIGJveCBpcyBub3QgdGhlIGxhc3QgYHRhYmxlLXJvd2AgYm94IG9mIHRoZSBuZWFyZXN0IGFuY2VzdG9yIGB0YWJsZWBcbiAgLy8gICAgIGJveCwgdGhlbiBhcHBlbmQgYSBzdHJpbmcgY29udGFpbmluZyBhIHNpbmdsZSBVKzAwMEEgTElORSBGRUVEIChMRilcbiAgLy8gICAgIGNoYXJhY3RlciB0byBpdGVtcy5cbiAgLy9cbiAgLy8gICAgIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RhYmxlcy0yPlxuICAvLyAgICAgTm90ZTogbmVlZHMgZnVydGhlciBpbnZlc3RpZ2F0aW9uIGFzIHRoaXMgZG9lcyBub3QgYWNjb3VudCBmb3IgaW1wbGljaXRcbiAgLy8gICAgIHJvd3MuXG4gIGVsc2UgaWYgKHJvdyhub2RlKSAmJiBmaW5kQWZ0ZXIocGFyZW50LCBub2RlLCByb3cpKSB7XG4gICAgc3VmZml4ID0gJ1xcbidcbiAgfVxuXG4gIC8vIDguICBJZiBub2RlIGlzIGEgYDxwPmAgZWxlbWVudCwgdGhlbiBhcHBlbmQgMiAoYSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50KVxuICAvLyAgICAgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGl0ZW1zLlxuICBlbHNlIGlmIChwKG5vZGUpKSB7XG4gICAgcHJlZml4ID0gMlxuICAgIHN1ZmZpeCA9IDJcbiAgfVxuXG4gIC8vIDkuICBJZiBub2RlXHUyMDE5cyB1c2VkIHZhbHVlIG9mIGBkaXNwbGF5YCBpcyBibG9jay1sZXZlbCBvciBgdGFibGUtY2FwdGlvbmAsXG4gIC8vICAgICB0aGVuIGFwcGVuZCAxIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpIGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZlxuICAvLyAgICAgaXRlbXMuXG4gIGVsc2UgaWYgKGJsb2NrT3JDYXB0aW9uKG5vZGUpKSB7XG4gICAgcHJlZml4ID0gMVxuICAgIHN1ZmZpeCA9IDFcbiAgfVxuXG4gIC8vIDEuICBMZXQgaXRlbXMgYmUgdGhlIHJlc3VsdCBvZiBydW5uaW5nIHRoZSBpbm5lciB0ZXh0IGNvbGxlY3Rpb24gc3RlcHMgd2l0aFxuICAvLyAgICAgZWFjaCBjaGlsZCBub2RlIG9mIG5vZGUgaW4gdHJlZSBvcmRlciwgYW5kIHRoZW4gY29uY2F0ZW5hdGluZyB0aGVcbiAgLy8gICAgIHJlc3VsdHMgdG8gYSBzaW5nbGUgbGlzdC5cbiAgd2hpbGUgKCsraW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgICAgIGlubmVyVGV4dENvbGxlY3Rpb24oY2hpbGRyZW5baW5kZXhdLCBub2RlLCB7XG4gICAgICAgIHdoaXRlc3BhY2UsXG4gICAgICAgIGJyZWFrQmVmb3JlOiBpbmRleCA/IHVuZGVmaW5lZCA6IHByZWZpeCxcbiAgICAgICAgYnJlYWtBZnRlcjpcbiAgICAgICAgICBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCAtIDEgPyBicihjaGlsZHJlbltpbmRleCArIDFdKSA6IHN1ZmZpeFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICAvLyA2LiAgSWYgbm9kZVx1MjAxOXMgY29tcHV0ZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGB0YWJsZS1jZWxsYCwgYW5kIG5vZGVcdTIwMTlzIENTU1xuICAvLyAgICAgYm94IGlzIG5vdCB0aGUgbGFzdCBgdGFibGUtY2VsbGAgYm94IG9mIGl0cyBlbmNsb3NpbmcgYHRhYmxlLXJvd2AgYm94LFxuICAvLyAgICAgdGhlbiBhcHBlbmQgYSBzdHJpbmcgY29udGFpbmluZyBhIHNpbmdsZSBVKzAwMDkgQ0hBUkFDVEVSIFRBQlVMQVRJT05cbiAgLy8gICAgICh0YWIpIGNoYXJhY3RlciB0byBpdGVtcy5cbiAgLy9cbiAgLy8gICAgIFNlZTogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RhYmxlcy0yPlxuICBpZiAoY2VsbChub2RlKSAmJiBmaW5kQWZ0ZXIocGFyZW50LCBub2RlLCBjZWxsKSkge1xuICAgIGl0ZW1zLnB1c2goJ1xcdCcpXG4gIH1cblxuICAvLyBBZGQgdGhlIHByZS0gYW5kIHN1ZmZpeC5cbiAgaWYgKHByZWZpeCkgaXRlbXMudW5zaGlmdChwcmVmaXgpXG4gIGlmIChzdWZmaXgpIGl0ZW1zLnB1c2goc3VmZml4KVxuXG4gIHJldHVybiBpdGVtc1xufVxuXG4vKipcbiAqIDQuICBJZiBub2RlIGlzIGEgVGV4dCBub2RlLCB0aGVuIGZvciBlYWNoIENTUyB0ZXh0IGJveCBwcm9kdWNlZCBieSBub2RlLFxuICogICAgIGluIGNvbnRlbnQgb3JkZXIsIGNvbXB1dGUgdGhlIHRleHQgb2YgdGhlIGJveCBhZnRlciBhcHBsaWNhdGlvbiBvZiB0aGVcbiAqICAgICBDU1MgYHdoaXRlLXNwYWNlYCBwcm9jZXNzaW5nIHJ1bGVzIGFuZCBgdGV4dC10cmFuc2Zvcm1gIHJ1bGVzLCBzZXRcbiAqICAgICBpdGVtcyB0byB0aGUgbGlzdCBvZiB0aGUgcmVzdWx0aW5nIHN0cmluZ3MsIGFuZCByZXR1cm4gaXRlbXMuXG4gKiAgICAgVGhlIENTUyBgd2hpdGUtc3BhY2VgIHByb2Nlc3NpbmcgcnVsZXMgYXJlIHNsaWdodGx5IG1vZGlmaWVkOlxuICogICAgIGNvbGxhcHNpYmxlIHNwYWNlcyBhdCB0aGUgZW5kIG9mIGxpbmVzIGFyZSBhbHdheXMgY29sbGFwc2VkLCBidXQgdGhleVxuICogICAgIGFyZSBvbmx5IHJlbW92ZWQgaWYgdGhlIGxpbmUgaXMgdGhlIGxhc3QgbGluZSBvZiB0aGUgYmxvY2ssIG9yIGl0IGVuZHNcbiAqICAgICB3aXRoIGEgYnIgZWxlbWVudC5cbiAqICAgICBTb2Z0IGh5cGhlbnMgc2hvdWxkIGJlIHByZXNlcnZlZC5cbiAqXG4gKiAgICAgTm90ZTogU2VlIGBjb2xsZWN0VGV4dGAgYW5kIGBjb2xsZWN0UHJlVGV4dGAuXG4gKiAgICAgTm90ZTogd2UgZG9uXHUyMDE5dCBkZWFsIHdpdGggYHRleHQtdHJhbnNmb3JtYCwgbm8gZWxlbWVudCBoYXMgdGhhdCBieVxuICogICAgIGRlZmF1bHQuXG4gKlxuICogU2VlOiA8aHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy10ZXh0LyN3aGl0ZS1zcGFjZS1waGFzZS0xPlxuICpcbiAqIEBwYXJhbSB7SGFzdFRleHR8SGFzdENvbW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RUZXh0KG5vZGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgdmFsdWUgPSBTdHJpbmcobm9kZS52YWx1ZSlcbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nPn0gKi9cbiAgY29uc3QgbGluZXMgPSBbXVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmc+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7UmVnRXhwTWF0Y2hBcnJheXxudWxsfSAqL1xuICBsZXQgbWF0Y2hcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBlbmRcbiAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xuICBsZXQgam9pblxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaExpbmVGZWVkcy5sYXN0SW5kZXggPSBzdGFydFxuICAgIG1hdGNoID0gc2VhcmNoTGluZUZlZWRzLmV4ZWModmFsdWUpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGluZGV4YCBpcyBzZXQuXG4gICAgZW5kID0gbWF0Y2ggPyBtYXRjaC5pbmRleCA6IHZhbHVlLmxlbmd0aFxuXG4gICAgbGluZXMucHVzaChcbiAgICAgIC8vIEFueSBzZXF1ZW5jZSBvZiBjb2xsYXBzaWJsZSBzcGFjZXMgYW5kIHRhYnMgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIG9yXG4gICAgICAvLyBmb2xsb3dpbmcgYSBzZWdtZW50IGJyZWFrIGlzIHJlbW92ZWQuXG4gICAgICB0cmltQW5kQ29sbGFwc2VTcGFjZXNBbmRUYWJzKFxuICAgICAgICAvLyBbLi4uXSBpZ25vcmluZyBiaWRpIGZvcm1hdHRpbmcgY2hhcmFjdGVycyAoY2hhcmFjdGVycyB3aXRoIHRoZVxuICAgICAgICAvLyBCaWRpX0NvbnRyb2wgcHJvcGVydHkgW1VBWDldOiBBTE0sIExUUiwgUlRMLCBMUkUtUkxPLCBMUkktUERJKSBhcyBpZlxuICAgICAgICAvLyB0aGV5IHdlcmUgbm90IHRoZXJlLlxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDYxQ1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXFx1MjA2Ni1cXHUyMDY5XS9nLCAnJyksXG4gICAgICAgIG9wdGlvbnMuYnJlYWtCZWZvcmUsXG4gICAgICAgIG9wdGlvbnMuYnJlYWtBZnRlclxuICAgICAgKVxuICAgIClcblxuICAgIHN0YXJ0ID0gZW5kICsgMVxuICB9XG5cbiAgLy8gQ29sbGFwc2libGUgc2VnbWVudCBicmVha3MgYXJlIHRyYW5zZm9ybWVkIGZvciByZW5kZXJpbmcgYWNjb3JkaW5nIHRvIHRoZVxuICAvLyBzZWdtZW50IGJyZWFrIHRyYW5zZm9ybWF0aW9uIHJ1bGVzLlxuICAvLyBTbyBoZXJlIHdlIGp1bXAgdG8gNC4xLjIgb2YgW0NTU1RFWFRdOlxuICAvLyBBbnkgY29sbGFwc2libGUgc2VnbWVudCBicmVhayBpbW1lZGlhdGVseSBmb2xsb3dpbmcgYW5vdGhlciBjb2xsYXBzaWJsZVxuICAvLyBzZWdtZW50IGJyZWFrIGlzIHJlbW92ZWRcbiAgd2hpbGUgKCsraW5kZXggPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAvLyAqICAgSWYgdGhlIGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgb3IgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNlZ21lbnRcbiAgICAvLyAgICAgYnJlYWsgaXMgdGhlIHplcm8td2lkdGggc3BhY2UgY2hhcmFjdGVyIChVKzIwMEIpLCB0aGVuIHRoZSBicmVhayBpc1xuICAgIC8vICAgICByZW1vdmVkLCBsZWF2aW5nIGJlaGluZCB0aGUgemVyby13aWR0aCBzcGFjZS5cbiAgICBpZiAoXG4gICAgICBsaW5lc1tpbmRleF0uY2hhckNvZGVBdChsaW5lc1tpbmRleF0ubGVuZ3RoIC0gMSkgPT09IDB4MjAwYiAvKiBaV1NQICovIHx8XG4gICAgICAoaW5kZXggPCBsaW5lcy5sZW5ndGggLSAxICYmXG4gICAgICAgIGxpbmVzW2luZGV4ICsgMV0uY2hhckNvZGVBdCgwKSA9PT0gMHgyMDBiKSAvKiBaV1NQICovXG4gICAgKSB7XG4gICAgICByZXN1bHQucHVzaChsaW5lc1tpbmRleF0pXG4gICAgICBqb2luID0gJydcbiAgICB9XG5cbiAgICAvLyAqICAgT3RoZXJ3aXNlLCBpZiB0aGUgRWFzdCBBc2lhbiBXaWR0aCBwcm9wZXJ0eSBbVUFYMTFdIG9mIGJvdGggdGhlXG4gICAgLy8gICAgIGNoYXJhY3RlciBiZWZvcmUgYW5kIGFmdGVyIHRoZSBzZWdtZW50IGJyZWFrIGlzIEZ1bGx3aWR0aCwgV2lkZSwgb3JcbiAgICAvLyAgICAgSGFsZndpZHRoIChub3QgQW1iaWd1b3VzKSwgYW5kIG5laXRoZXIgc2lkZSBpcyBIYW5ndWwsIHRoZW4gdGhlXG4gICAgLy8gICAgIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZC5cbiAgICAvL1xuICAgIC8vICAgICBOb3RlOiBpZ25vcmVkLlxuICAgIC8vICogICBPdGhlcndpc2UsIGlmIHRoZSB3cml0aW5nIHN5c3RlbSBvZiB0aGUgc2VnbWVudCBicmVhayBpcyBDaGluZXNlLFxuICAgIC8vICAgICBKYXBhbmVzZSwgb3IgWWksIGFuZCB0aGUgY2hhcmFjdGVyIGJlZm9yZSBvciBhZnRlciB0aGUgc2VnbWVudCBicmVha1xuICAgIC8vICAgICBpcyBwdW5jdHVhdGlvbiBvciBhIHN5bWJvbCAoVW5pY29kZSBnZW5lcmFsIGNhdGVnb3J5IFAqIG9yIFMqKSBhbmRcbiAgICAvLyAgICAgaGFzIGFuIEVhc3QgQXNpYW4gV2lkdGggcHJvcGVydHkgb2YgQW1iaWd1b3VzLCBhbmQgdGhlIGNoYXJhY3RlciBvblxuICAgIC8vICAgICB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgc2VnbWVudCBicmVhayBpcyBGdWxsd2lkdGgsIFdpZGUsIG9yIEhhbGZ3aWR0aCxcbiAgICAvLyAgICAgYW5kIG5vdCBIYW5ndWwsIHRoZW4gdGhlIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZC5cbiAgICAvL1xuICAgIC8vICAgICBOb3RlOiBpZ25vcmVkLlxuXG4gICAgLy8gKiAgIE90aGVyd2lzZSwgdGhlIHNlZ21lbnQgYnJlYWsgaXMgY29udmVydGVkIHRvIGEgc3BhY2UgKFUrMDAyMCkuXG4gICAgZWxzZSBpZiAobGluZXNbaW5kZXhdKSB7XG4gICAgICBpZiAoam9pbikgcmVzdWx0LnB1c2goam9pbilcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmVzW2luZGV4XSlcbiAgICAgIGpvaW4gPSAnICdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG5cbi8qKlxuICogQHBhcmFtIHtIYXN0VGV4dHxIYXN0Q29tbWVudH0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29sbGVjdFByZVRleHQobm9kZSkge1xuICByZXR1cm4gU3RyaW5nKG5vZGUudmFsdWUpXG59XG5cbi8qKlxuICogMy4gIEV2ZXJ5IGNvbGxhcHNpYmxlIHRhYiBpcyBjb252ZXJ0ZWQgdG8gYSBjb2xsYXBzaWJsZSBzcGFjZSAoVSswMDIwKS5cbiAqIDQuICBBbnkgY29sbGFwc2libGUgc3BhY2UgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGFub3RoZXIgY29sbGFwc2libGVcbiAqICAgICBzcGFjZVx1MjAxNGV2ZW4gb25lIG91dHNpZGUgdGhlIGJvdW5kYXJ5IG9mIHRoZSBpbmxpbmUgY29udGFpbmluZyB0aGF0XG4gKiAgICAgc3BhY2UsIHByb3ZpZGVkIGJvdGggc3BhY2VzIGFyZSB3aXRoaW4gdGhlIHNhbWUgaW5saW5lIGZvcm1hdHRpbmdcbiAqICAgICBjb250ZXh0XHUyMDE0aXMgY29sbGFwc2VkIHRvIGhhdmUgemVybyBhZHZhbmNlIHdpZHRoLiAoSXQgaXMgaW52aXNpYmxlLFxuICogICAgIGJ1dCByZXRhaW5zIGl0cyBzb2Z0IHdyYXAgb3Bwb3J0dW5pdHksIGlmIGFueS4pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0JyZWFrQmVmb3JlfSBicmVha0JlZm9yZVxuICogQHBhcmFtIHtCcmVha0FmdGVyfSBicmVha0FmdGVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0cmltQW5kQ29sbGFwc2VTcGFjZXNBbmRUYWJzKHZhbHVlLCBicmVha0JlZm9yZSwgYnJlYWtBZnRlcikge1xuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmc+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgc3RhcnQgPSAwXG4gIC8qKiBAdHlwZSB7UmVnRXhwTWF0Y2hBcnJheXxudWxsfSAqL1xuICBsZXQgbWF0Y2hcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIGxldCBlbmRcblxuICB3aGlsZSAoc3RhcnQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICBzZWFyY2hUYWJPclNwYWNlcy5sYXN0SW5kZXggPSBzdGFydFxuICAgIG1hdGNoID0gc2VhcmNoVGFiT3JTcGFjZXMuZXhlYyh2YWx1ZSlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgaW5kZXhgIGlzIHNldC5cbiAgICBlbmQgPSBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG5cbiAgICAvLyBJZiB3ZVx1MjAxOXJlIG5vdCBkaXJlY3RseSBhZnRlciBhIHNlZ21lbnQgYnJlYWssIGJ1dCB0aGVyZSB3YXMgd2hpdGUgc3BhY2UsXG4gICAgLy8gYWRkIGFuIGVtcHR5IHZhbHVlIHRoYXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIHNwYWNlLlxuICAgIGlmICghc3RhcnQgJiYgIWVuZCAmJiBtYXRjaCAmJiAhYnJlYWtCZWZvcmUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKCcnKVxuICAgIH1cblxuICAgIGlmIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZS5zbGljZShzdGFydCwgZW5kKSlcbiAgICB9XG5cbiAgICBzdGFydCA9IG1hdGNoID8gZW5kICsgbWF0Y2hbMF0ubGVuZ3RoIDogZW5kXG4gIH1cblxuICAvLyBJZiB3ZSByZWFjaGVkIHRoZSBlbmQsIHRoZXJlIHdhcyB0cmFpbGluZyB3aGl0ZSBzcGFjZSwgYW5kIHRoZXJlXHUyMDE5cyBub1xuICAvLyBzZWdtZW50IGJyZWFrIGFmdGVyIHRoaXMgbm9kZSwgYWRkIGFuIGVtcHR5IHZhbHVlIHRoYXQgd2lsbCBiZSB0dXJuZWRcbiAgLy8gaW50byBhIHNwYWNlLlxuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgZW5kYCBpcyBkZWZpbmVkLlxuICBpZiAoc3RhcnQgIT09IGVuZCAmJiAhYnJlYWtBZnRlcikge1xuICAgIHJlc3VsdC5wdXNoKCcnKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJylcbn1cblxuLyoqXG4gKiBXZSBkb25cdTIwMTl0IHN1cHBvcnQgdm9pZCBlbGVtZW50cyBoZXJlIChzbyBgbm9iciB3YnJgIC0+IGBub3JtYWxgIGlzIGlnbm9yZWQpLlxuICpcbiAqIEBwYXJhbSB7SGFzdE5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtXaGl0ZXNwYWNlfVxuICovXG5mdW5jdGlvbiBpbmZlcldoaXRlc3BhY2Uobm9kZSwgb3B0aW9ucykge1xuICAvKiogQHR5cGUge0hhc3RQcm9wZXJ0aWVzfSAqL1xuICBsZXQgcHJvcHNcblxuICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICBwcm9wcyA9IG5vZGUucHJvcGVydGllcyB8fCB7fVxuICAgIHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XG4gICAgICBjYXNlICdsaXN0aW5nJzpcbiAgICAgIGNhc2UgJ3BsYWludGV4dCc6XG4gICAgICBjYXNlICd4bXAnOlxuICAgICAgICByZXR1cm4gJ3ByZSdcbiAgICAgIGNhc2UgJ25vYnInOlxuICAgICAgICByZXR1cm4gJ25vd3JhcCdcbiAgICAgIGNhc2UgJ3ByZSc6XG4gICAgICAgIHJldHVybiBwcm9wcy53cmFwID8gJ3ByZS13cmFwJyA6ICdwcmUnXG4gICAgICBjYXNlICd0ZCc6XG4gICAgICBjYXNlICd0aCc6XG4gICAgICAgIHJldHVybiBwcm9wcy5ub1dyYXAgPyAnbm93cmFwJyA6IG9wdGlvbnMud2hpdGVzcGFjZVxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICByZXR1cm4gJ3ByZS13cmFwJ1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy53aGl0ZXNwYWNlXG59XG5cbi8qKiBAdHlwZSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9ICovXG5mdW5jdGlvbiBoaWRkZW4obm9kZSkge1xuICByZXR1cm4gQm9vbGVhbigobm9kZS5wcm9wZXJ0aWVzIHx8IHt9KS5oaWRkZW4pXG59XG5cbi8qKiBAdHlwZSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9ICovXG5mdW5jdGlvbiBjbG9zZWREaWFsb2cobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnZGlhbG9nJyAmJiAhKG5vZGUucHJvcGVydGllcyB8fCB7fSkub3BlblxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlR5cGV9IFR5cGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5Qcm9wc30gUHJvcHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25Bbnl0aGluZ30gVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5cbmV4cG9ydCB2YXIgZmluZEFmdGVyID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAoPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBQYXJlbnQsIGluZGV4OiBOb2RlfG51bWJlciwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+KSA9PiBUfG51bGwpICZcbiAgICogICgobm9kZTogUGFyZW50LCBpbmRleDogTm9kZXxudW1iZXIsIHRlc3Q/OiBudWxsfHVuZGVmaW5lZHxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nfEFycmF5PFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+KSA9PiBOb2RlfG51bGwpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQYXJlbnR9IHBhcmVudCBQYXJlbnQgbm9kZVxuICAgICAqIEBwYXJhbSB7Tm9kZXxudW1iZXJ9IGluZGV4IENoaWxkIG9mIGBwYXJlbnRgLCBvciBpdFx1MjAxOXMgaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bGx8dW5kZWZpbmVkfFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXk8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZz59IFt0ZXN0XSBpcy1jb21wYXRpYmxlIHRlc3QgKHN1Y2ggYXMgYSB0eXBlKVxuICAgICAqIEByZXR1cm5zIHtOb2RlfG51bGx9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmVudCwgaW5kZXgsIHRlc3QpIHtcbiAgICAgIHZhciBpcyA9IGNvbnZlcnQodGVzdClcblxuICAgICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC50eXBlIHx8ICFwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIG51bWJlciBhcyBpbmRleCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoaW5kZXgpXG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hpbGQgbm9kZSBvciBpbmRleCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpcyhwYXJlbnQuY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50KSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnQuY2hpbGRyZW5baW5kZXhdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIClcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IFZpc2l0b3JcbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuLyoqXG4gKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gKlxuICogQHBhcmFtIHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICogQHBhcmFtIHRlc3QgVGVzdCwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlLCBDaGVjayBleHRlbmRzIFRlc3Q+KHRyZWU6IFRyZWUsIHRlc3Q6IENoZWNrLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZVxuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBwYXRoLCBmcyB9IGZyb20gXCJ+L3V0aWxzL3BhdGguc2VydmVyXCI7XHJcbmltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJ+L3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlclwiO1xyXG5pbXBvcnQgeyBzYXZlT2JqZWN0SW5BbGdvbGlhIH0gZnJvbSBcIn4vdXRpbHMvYWxnb2xpYVwiO1xyXG5pbXBvcnQgcmVtb3ZlTWQgZnJvbSBcInJlbW92ZS1tYXJrZG93blwiO1xyXG5cclxudHlwZSByZW1vdmVNZCA9IHN0cmluZztcclxuXHJcbnR5cGUgRnJvbnRtYXR0ZXIgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaXNoZWQ6IERhdGU7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXREaXJlY3RvcmllcyA9IChzb3VyY2U6IGFueSkgPT5cclxuICBmc1xyXG4gICAgLnJlYWRkaXJTeW5jKHNvdXJjZSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXHJcbiAgICAuZmlsdGVyKChkaXJlbnQ6IGFueSkgPT4gZGlyZW50LmlzRGlyZWN0b3J5KCkpXHJcbiAgICAubWFwKChkaXJlbnQ6IGFueSkgPT4gZGlyZW50Lm5hbWUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgUGF0aFRvUG9zdHMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwb3N0c1wiKTtcclxuICBjb25zdCBwb3N0RGlycyA9IGF3YWl0IGdldERpcmVjdG9yaWVzKFBhdGhUb1Bvc3RzKTtcclxuICBjb25zdCBwb3N0RnJvbnRtYXR0ZXI6IEFycmF5PHt9PiA9IHBvc3REaXJzLm1hcChhc3luYyAocG9zdFRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcclxuICAgICAgcHJvY2Vzcy5jd2QoKSxcclxuICAgICAgXCJwb3N0c1wiLFxyXG4gICAgICBgJHtwb3N0VGl0bGV9YCxcclxuICAgICAgXCJpbmRleC5tZHhcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJvb3REaXIgPSBQYXRoVG9NRFgucmVwbGFjZSgvaW5kZXgubWR4PyQvLCBcIlwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XHJcbiAgICAgIHNvdXJjZTogZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgXCJ1dGY4XCIpLFxyXG4gICAgICBjd2Q6IHJvb3REaXIsXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGNvbnRlbnQ6IHJlbW92ZU1kID0gcmVtb3ZlTWQoZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgXCJ1dGY4XCIpKTtcclxuICAgIHNhdmVPYmplY3RJbkFsZ29saWEoe1xyXG4gICAgICBvYmplY3RJRDogcG9zdFRpdGxlLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgICAuLi5yZXN1bHQuZnJvbnRtYXR0ZXIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IC4uLnJlc3VsdC5mcm9udG1hdHRlciwgc2x1ZzogcG9zdFRpdGxlIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKHBvc3RGcm9udG1hdHRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXgoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSB1c2VMb2FkZXJEYXRhPEZyb250bWF0dGVyW10+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Qb3N0czwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0OiBGcm9udG1hdHRlcikgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgPExpbmsgdG89e3Bvc3Quc2x1Z30+e3Bvc3QudGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnO1xyXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdHQzYxN1IyWEdDJywgJzNmYWE5NzFhNDE1NTA4MzUwOWQxYmI5OTFkZjdkNTE0Jyk7XHJcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgnQmxvZycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVPYmplY3RJbkFsZ29saWEob2JqOiBPYmplY3QpIHtcclxuICBpZiAoIShcIm9iamVjdElEXCIgaW4gb2JqKSkgcmV0dXJuIG51bGxcclxuICBpbmRleC5zYXZlT2JqZWN0KG9iailcclxufSIsICJpbXBvcnQgc3R5bGVzIGZyb20gJ2hpZ2hsaWdodC5qcy9zdHlsZXMvYWdhdGUuY3NzJztcclxuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgT3V0bGV0LCBMaW5rIH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiBbXHJcblx0XHR7XHJcblx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnLFxyXG5cdFx0XHRocmVmOiBzdHlsZXNcclxuXHRcdH1cclxuXHRdO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHByb3NlIGdyaWQtY29scy00IHAtNCByaWRqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTEnPlxyXG4gICAgICA8aDE+IGdtIGFkbWluIDwvaDE+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J21sLTIgbGlzdC1kaXNjJz5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdteS0yJz5cclxuICAgICAgICAgIDxMaW5rIHRvPSdjcmVhdGUnPlxyXG4gICAgICAgICAgICBjcmVhdGUgcG9zdFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXktMic+XHJcbiAgICAgICAgICA8TGluayB0bz0nZGVsZXRlJz5cclxuICAgICAgICAgICAgZGVsZXRlIHBvc3RcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J215LTInPlxyXG4gICAgICAgICAgPExpbmsgdG89J3VwZGF0ZSc+XHJcbiAgICAgICAgICAgIHVwZGF0ZSBwb3N0XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBjb2wtc3Bhbi0zIHByb3NlIGxnOnByb3NlLXhsXCI+XHJcbiAgICAgIDxPdXRsZXQvPlxyXG4gICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxyXG4gICAgICA8aDE+Tm9haCdzIEJsb2c8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYzQ4N2MxMTcnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVlTNFA0M0lNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LUk9aT0dTUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdUVUpIWUhMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTU1WEg3SklOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4nOnsnaWQnOidyb3V0ZXMvYWRtaW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4tUzRSUTc2VlQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFMWVdERTQ0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9nYXJkZW4nOnsnaWQnOidyb3V0ZXMvZ2FyZGVuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2dhcmRlbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9nYXJkZW4tQ1BJWFQyR1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFMWVdERTQ0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9nYXJkZW4vJHNsdWcnOnsnaWQnOidyb3V0ZXMvZ2FyZGVuLyRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvZ2FyZGVuJywncGF0aCc6JzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2dhcmRlbi8kc2x1Zy1RTktIWkRPRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1c2NDZKNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9nYXJkZW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvZ2FyZGVuL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZ2FyZGVuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2dhcmRlbi9pbmRleC1ESFlWVFVRTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1c2NDZKNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVkRGRVVEQlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQzQ4N0MxMTcuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEs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
