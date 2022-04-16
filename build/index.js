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

// route:/Users/noahhein/Dev/blog/app/root.tsx
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
    className: "text-sm\n						py-2\n						px-4\n						font-normal\n						block\n						w-full\n						rounded-lg\n						whitespace-nowrap\n						bg-transparent\n						text-gray-700\n						hover:bg-gray-200"
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
var tailwind_default = "/build/_assets/tailwind-KODUXFT7.css";

// route:/Users/noahhein/Dev/blog/app/root.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/garden.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/garden/$slug.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/garden/$slug.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/garden/index.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/garden/index.tsx
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

// route:/Users/noahhein/Dev/blog/app/routes/index.tsx
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
var assets_manifest_default = { "version": "f8ee54bb", "entry": { "module": "/build/entry.client-NYUXXMLL.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-IZPXJGZB.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3QVXDLOP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/garden": { "id": "routes/garden", "parentId": "root", "path": "garden", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/garden-Q76M6ITK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/garden/$slug": { "id": "routes/garden/$slug", "parentId": "routes/garden", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/garden/$slug-JM4DTWO4.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/garden/index": { "id": "routes/garden/index", "parentId": "routes/garden", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/garden/index-K3AMDTK6.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ASKGKD2H.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F8EE54BB.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9ub2FoaGVpbi9EZXYvYmxvZy9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZWFyY2gudHN4IiwgInJvdXRlOi9Vc2Vycy9ub2FoaGVpbi9EZXYvYmxvZy9hcHAvcm91dGVzL2dhcmRlbi50c3giLCAicm91dGU6L1VzZXJzL25vYWhoZWluL0Rldi9ibG9nL2FwcC9yb3V0ZXMvZ2FyZGVuLyRzbHVnLnRzeCIsICIuLi9hcHAvdXRpbHMvcGF0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlci50cyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLXNsdWcvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oYXMtcHJvcGVydHkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oZWFkaW5nLXJhbmsvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1zbHVnL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tc3RyaW5nL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtc2x1Zy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1jb2RlLXRpdGxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtY29kZS10aXRsZXMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2xpZ2h0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29tbW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29yZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmF1bHQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by10ZXh0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWZpbmQtYWZ0ZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1oaWdobGlnaHQvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCAicm91dGU6L1VzZXJzL25vYWhoZWluL0Rldi9ibG9nL2FwcC9yb3V0ZXMvZ2FyZGVuL2luZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvYWxnb2xpYS50cyIsICJyb3V0ZTovVXNlcnMvbm9haGhlaW4vRGV2L2Jsb2cvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbm9haGhlaW4vRGV2L2Jsb2cvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL25vYWhoZWluL0Rldi9ibG9nL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbm9haGhlaW4vRGV2L2Jsb2cvYXBwL3JvdXRlcy9nYXJkZW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9ub2FoaGVpbi9EZXYvYmxvZy9hcHAvcm91dGVzL2dhcmRlbi8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL25vYWhoZWluL0Rldi9ibG9nL2FwcC9yb3V0ZXMvZ2FyZGVuL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbm9haGhlaW4vRGV2L2Jsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2dhcmRlblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ2FyZGVuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImdhcmRlblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZ2FyZGVuLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9nYXJkZW4vJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9nYXJkZW5cIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2dhcmRlbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ2FyZGVuL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZ2FyZGVuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaW5rc0Z1bmN0aW9uLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBJbnN0YW50U2VhcmNoIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1ob29rcyc7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhaWx3aW5kLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiB7IHRpdGxlOiBcIk5vYWgncyBibG9nXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIFsgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0gXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdDxOYXZiYXIgLz5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJbnN0YW50U2VhcmNoLFxuICB1c2VTZWFyY2hCb3gsXG4gIFVzZVNlYXJjaEJveFByb3BzLFxufSBmcm9tIFwicmVhY3QtaW5zdGFudHNlYXJjaC1ob29rc1wiO1xuXG5pbXBvcnQgeyBIaXRzLCBIaXQsIFNlYXJjaEJveCB9IGZyb20gXCIuL1NlYXJjaFwiO1xuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSBcImFsZ29saWFzZWFyY2gvbGl0ZVwiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHNlYXJjaENsaWVudCA9IGFsZ29saWFzZWFyY2goXG4gICAgXCJHQzYxN1IyWEdDXCIsXG4gICAgXCJmN2U5ZmE5OTg0N2Q1NWRhMGYwNjE4MmY4MjI4MWJhM1wiXG4gICk7XG4gIHJldHVybiAoXG4gICAgPEluc3RhbnRTZWFyY2ggc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9IGluZGV4TmFtZT1cIkJsb2dcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHB4LTIgc206cHgtNCBweS0yLjUgcm91bmRlZC1iLW1kIGRhcms6YmctZ3JheS04MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBOSGVpbkRldlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6b3JkZXItMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbXItMyBtZDptci0wIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCA0YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04ek0yIDhhNiA2IDAgMTExMC44OSAzLjQ3Nmw0LjgxNyA0LjgxN2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC44MTYtNC44MTZBNiA2IDAgMDEyIDh6XCJcbiAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8U2VhcmNoQm94IC8+XG4gICAgICAgICAgICAgIDxIaXRzIGhpdENvbXBvbmVudD17SGl0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPVwibW9iaWxlLW1lbnUtM1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIG1sLTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnUtM1wiXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIlxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiB3LTYgaC02XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhpZGRlbiB3LWZ1bGwgbWQ6ZmxleCBtZDp3LWF1dG8gbWQ6b3JkZXItMVwiXG4gICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51LTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IG1kOm10LTAgbWQ6dGV4dC1zbSBtZDpmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL2dhcmRlblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweS0yIHBsLTMgcHItNCB0ZXh0LWdyYXktNzAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTUwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIG1kOmRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHYXJkZW5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvSW5zdGFudFNlYXJjaD5cbiAgKTtcbn1cblxuZXhwb3J0IHsgTmF2YmFyIH07XG4iLCAiaW1wb3J0IHsgSGl0IGFzIEFsZ29saWFIaXQgfSBmcm9tIFwiQGFsZ29saWEvY2xpZW50LXNlYXJjaFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICB1c2VIaXRzLFxuICBVc2VIaXRzUHJvcHMsXG4gIHVzZVNlYXJjaEJveCxcbiAgVXNlU2VhcmNoQm94UHJvcHMsXG59IGZyb20gXCJyZWFjdC1pbnN0YW50c2VhcmNoLWhvb2tzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEJveFByb3BzID0gVXNlU2VhcmNoQm94UHJvcHM7XG5cbmV4cG9ydCB0eXBlIEhpdHNQcm9wczxUSGl0PiA9IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICZcbiAgVXNlSGl0c1Byb3BzICYge1xuICAgIGhpdENvbXBvbmVudDogKHByb3BzOiB7IGhpdDogVEhpdCB9KSA9PiBKU1guRWxlbWVudDtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIEhpdHM8VEhpdCBleHRlbmRzIEFsZ29saWFIaXQ8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+PihcbiAgeyBoaXRDb21wb25lbnQ6IEhpdCB9OiBIaXRzUHJvcHM8VEhpdD4sXG4gIHByb3BzOiBTZWFyY2hCb3hQcm9wc1xuKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVNlYXJjaEJveChwcm9wcyk7XG4gIGNvbnN0IHsgaGl0cyB9ID0gdXNlSGl0cygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBzbTp0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgYWJzb2x1dGVcIj5cbiAgICAgIDxvbD5cbiAgICAgICAge3F1ZXJ5Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBoaXRzLm1hcCgoaGl0KSA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtoaXQub2JqZWN0SUR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc21cblx0XHRcdFx0XHRcdHB5LTJcblx0XHRcdFx0XHRcdHB4LTRcblx0XHRcdFx0XHRcdGZvbnQtbm9ybWFsXG5cdFx0XHRcdFx0XHRibG9ja1xuXHRcdFx0XHRcdFx0dy1mdWxsXG5cdFx0XHRcdFx0XHRyb3VuZGVkLWxnXG5cdFx0XHRcdFx0XHR3aGl0ZXNwYWNlLW5vd3JhcFxuXHRcdFx0XHRcdFx0YmctdHJhbnNwYXJlbnRcblx0XHRcdFx0XHRcdHRleHQtZ3JheS03MDBcblx0XHRcdFx0XHRcdGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2BnYXJkZW4vJHtoaXQub2JqZWN0SUR9YH0+XG4gICAgICAgICAgICAgICAgPEhpdCBoaXQ9e2hpdCBhcyB1bmtub3duIGFzIFRIaXR9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGl0KHsgaGl0IH06IHsgaGl0OiBhbnkgfSkge1xuICByZXR1cm4gPGgxPntoaXQudGl0bGV9PC9oMT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCb3gocHJvcHM6IFNlYXJjaEJveFByb3BzKSB7XG4gIGNvbnN0IHsgcXVlcnksIHJlZmluZSB9ID0gdXNlU2VhcmNoQm94KHByb3BzKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIFRyYWNrIHdoZW4gdGhlIHZhbHVlIGNvbWluZyBmcm9tIHRoZSBSZWFjdCBzdGF0ZSBjaGFuZ2VzIHRvIHN5bmNocm9uaXplXG4gIC8vIGl0IHdpdGggSW5zdGFudFNlYXJjaC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgIT09IGlucHV0VmFsdWUpIHtcbiAgICAgIHJlZmluZShpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sIFtpbnB1dFZhbHVlLCByZWZpbmVdKTtcblxuICAvLyBUcmFjayB3aGVuIHRoZSBJbnN0YW50U2VhcmNoIHF1ZXJ5IGNoYW5nZXMgdG8gc3luY2hyb25pemUgaXQgd2l0aFxuICAvLyB0aGUgUmVhY3Qgc3RhdGUuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQnlwYXNzIHRoZSBzdGF0ZSB1cGRhdGUgaWYgdGhlIGlucHV0IGlzIGZvY3VzZWQgdG8gYXZvaWQgY29uY3VycmVudFxuICAgIC8vIHVwZGF0ZXMgd2hlbiB0eXBpbmcuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0UmVmLmN1cnJlbnQgJiYgcXVlcnkgIT09IGlucHV0VmFsdWUpIHtcbiAgICAgIHNldElucHV0VmFsdWUocXVlcnkpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcC0yIHBsLTEwIHRleHQtZ3JheS05MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGJnLWdyYXktNTAgc206dGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgYXV0b0NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxuICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICBtYXhMZW5ndGg9ezUxMX1cbiAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJbnB1dFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICdoaWdobGlnaHQuanMvc3R5bGVzL2FnYXRlLmNzcyc7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRyZWw6ICdzdHlsZXNoZWV0Jyxcblx0XHRcdGhyZWY6IHN0eWxlc1xuXHRcdH1cblx0XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHByb3NlIGxnOnByb3NlLXhsXCI+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgTWV0YUZ1bmN0aW9uLFxuICBTY3JpcHRzLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VQYXJhbXMsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gXCJtZHgtYnVuZGxlci9jbGllbnRcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcGF0aCwgZnMgfSBmcm9tIFwifi91dGlscy9wYXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIn4vdXRpbHMvY29tcGlsZS1tZHguc2VydmVyXCI7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tIFwicmVoeXBlLXNsdWdcIjtcbmltcG9ydCByZWh5cGVDb2RlVGl0bGVzIGZyb20gXCJyZWh5cGUtY29kZS10aXRsZXNcIjtcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gXCJyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3NcIjtcbmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSBcInJlaHlwZS1oaWdobGlnaHRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogZGF0YT8uZnJvbnRtYXR0ZXI/LnRpdGxlIHx8IFwiUHJvYmFibHkgYSA0MDRcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcbiAgICBwcm9jZXNzLmN3ZCgpLFxuICAgIFwicG9zdHNcIixcbiAgICBgJHtwYXJhbXMuc2x1Z31gLFxuICAgIFwiaW5kZXgubWR4XCJcbiAgKTtcbiAgY29uc3Qgcm9vdERpciA9IFBhdGhUb01EWC5yZXBsYWNlKC9pbmRleC5tZHg/JC8sIFwiXCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XG4gICAgICBzb3VyY2U6IGZzLnJlYWRGaWxlU3luYyhQYXRoVG9NRFgsIFwidXRmOFwiKSxcbiAgICAgIGN3ZDogcm9vdERpcixcbiAgICAgIHhkbU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnJlaHlwZVBsdWdpbnMgPSBbXG4gICAgICAgICAgLi4uKG9wdGlvbnM/LnJlaHlwZVBsdWdpbnMgPz8gW10pLFxuICAgICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcbiAgICAgICAgICByZWh5cGVTbHVnLFxuICAgICAgICAgIHJlaHlwZUNvZGVUaXRsZXMsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogW1wiYW5jaG9yXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgY29kZSwgZnJvbnRtYXR0ZXIgfSA9IHJlc3VsdDtcbiAgICByZXR1cm4geyBjb2RlLCBmcm9udG1hdHRlciB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRGlkbid0IGZpbmQgYW55IGJsb2cgcG9zdCBhdCBibG9nLyR7cGFyYW1zLnNsdWd9YCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IGNvZGUsIGZyb250bWF0dGVyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUpLCBbY29kZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPntmcm9udG1hdHRlci5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5PaCBubyE8L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8aDE+V2hvb3BzISBMb29rcyBsaWtlIHlvdSBmb3VuZCBhbiBlcnJvci4gU29ycnkgYWJvdXQgdGhhdCA6KDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5FcnJvciBtZXNzYWdlOjwvc3Ryb25nPiB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJjb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmV4cG9ydCB7IHBhdGgsIGZzIH07XG4iLCAiaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XG50eXBlIEdpdEh1YkZpbGUgPSB7IHBhdGg6IHN0cmluZyB9O1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcbmltcG9ydCByZWh5cGVDb2RlVGl0bGVzIGZyb20gJ3JlaHlwZS1jb2RlLXRpdGxlcyc7XG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnO1xuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiO1xuXG5hc3luYyBmdW5jdGlvbiBjb21waWxlTWR4KHNsdWc6IHN0cmluZywgZ2l0aHViRmlsZXM6IEFycmF5PEdpdEh1YkZpbGU+KSB7XG4gIGNvbnN0IGluZGV4UmVnZXggPSBuZXcgUmVnRXhwKGAke3NsdWd9XFxcXC9pbmRleC5tZHg/JGApO1xuICBjb25zdCBpbmRleEZpbGUgPSBnaXRodWJGaWxlcy5maW5kKCh7IHBhdGggfSkgPT4gaW5kZXhSZWdleC50ZXN0KHBhdGgpKTtcbiAgaWYgKCFpbmRleEZpbGUpIHJldHVybiBudWxsO1xuICBjb25zdCByb290RGlyID0gaW5kZXhGaWxlLnBhdGgucmVwbGFjZSgvaW5kZXgubWR4PyQvLCBcIlwiKTtcbiAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGluZGV4RmlsZS5wYXRoLCBcInV0ZjhcIik7XG4gIHRyeSB7XG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIikge1xuICAgICAgcHJvY2Vzcy5lbnYuRVNCVUlMRF9CSU5BUllfUEFUSCA9IHBhdGguam9pbihcbiAgICAgICAgcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgXCJub2RlX21vZHVsZXNcIixcbiAgICAgICAgXCJlc2J1aWxkXCIsXG4gICAgICAgIFwiZXNidWlsZC5leGVcIlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5lbnYuRVNCVUlMRF9CSU5BUllfUEFUSCA9IHBhdGguam9pbihcbiAgICAgICAgcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgXCJub2RlX21vZHVsZXNcIixcbiAgICAgICAgXCJlc2J1aWxkXCIsXG4gICAgICAgIFwiYmluXCIsXG4gICAgICAgIFwiZXNidWlsZFwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IGZyb250bWF0dGVyLCBjb2RlIH0gPSBhd2FpdCBidW5kbGVNRFgoe1xuICAgICAgc291cmNlLFxuICAgICAgY3dkOiByb290RGlyLFxuICAgICAgeGRtT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMucmVoeXBlUGx1Z2lucyA9IFtcbiAgICAgICAgICAuLi4ob3B0aW9ucz8ucmVoeXBlUGx1Z2lucyA/PyBbXSksXG4gICAgICAgICAgcmVoeXBlSGlnaGxpZ2h0LFxuICAgICAgICAgIHJlaHlwZVNsdWcsXG4gICAgICAgICAgcmVoeXBlQ29kZVRpdGxlcyxcbiAgICAgICAgICBbXG4gICAgICAgICAgICByZWh5cGVBdXRvbGlua0hlYWRpbmdzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ2FuY2hvciddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4geyBjb2RlLCBmcm9udG1hdHRlciB9O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoYENvbXBpbGF0aW9uIGVycm9yIGZvciBzbHVnOiBgLCBzbHVnKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgeyBjb21waWxlTWR4IH07XG5leHBvcnQgeyBidW5kbGVNRFggfSBmcm9tIFwibWR4LWJ1bmRsZXJcIiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKi9cblxuaW1wb3J0IFNsdWdnZXIgZnJvbSAnZ2l0aHViLXNsdWdnZXInXG5pbXBvcnQge2hhc1Byb3BlcnR5fSBmcm9tICdoYXN0LXV0aWwtaGFzLXByb3BlcnR5J1xuaW1wb3J0IHtoZWFkaW5nUmFua30gZnJvbSAnaGFzdC11dGlsLWhlYWRpbmctcmFuaydcbmltcG9ydCB7dG9TdHJpbmd9IGZyb20gJ2hhc3QtdXRpbC10by1zdHJpbmcnXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG5jb25zdCBzbHVncyA9IG5ldyBTbHVnZ2VyKClcblxuLyoqXG4gKiBQbHVnaW4gdG8gYWRkIGBpZGBzIHRvIGhlYWRpbmdzLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48QXJyYXk8dm9pZD4sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVTbHVnKCkge1xuICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICBzbHVncy5yZXNldCgpXG5cbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlKSA9PiB7XG4gICAgICBpZiAoaGVhZGluZ1Jhbmsobm9kZSkgJiYgbm9kZS5wcm9wZXJ0aWVzICYmICFoYXNQcm9wZXJ0eShub2RlLCAnaWQnKSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuaWQgPSBzbHVncy5zbHVnKHRvU3RyaW5nKG5vZGUpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsICJ2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBDaGVjayBpZiBgbm9kZWAgaGFzIGEgc2V0IGBuYW1lYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgLyoqIEB0eXBlIHt1bmtub3dufSAqL1xuICB2YXIgdmFsdWUgPVxuICAgIG5hbWUgJiZcbiAgICBub2RlICYmXG4gICAgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmXG4gICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICBub2RlLnR5cGUgPT09ICdlbGVtZW50JyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgIG5vZGUucHJvcGVydGllcyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgIG93bi5jYWxsKG5vZGUucHJvcGVydGllcywgbmFtZSkgJiZcbiAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICBub2RlLnByb3BlcnRpZXNbbmFtZV1cblxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gZmFsc2Vcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtSb290fFBhcmVudFsnY2hpbGRyZW4nXVtudW1iZXJdfSBOb2RlXG4gKi9cblxuLyoqXG4gKiBSYW5rIG9mIGEgaGVhZGluZzogSDEgLT4gMSwgSDIgLT4gMiwgZXRjLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZGluZ1Jhbmsobm9kZSkge1xuICB2YXIgbmFtZSA9XG4gICAgKG5vZGUgJiYgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHx8ICcnXG4gIHZhciBjb2RlID1cbiAgICBuYW1lLmxlbmd0aCA9PT0gMiAmJiBuYW1lLmNoYXJDb2RlQXQoMCkgPT09IDEwNCAvKiBgaGAgKi9cbiAgICAgID8gbmFtZS5jaGFyQ29kZUF0KDEpXG4gICAgICA6IDBcbiAgcmV0dXJuIGNvZGUgPiA0OCAvKiBgMGAgKi8gJiYgY29kZSA8IDU1IC8qIGA3YCAqLyA/IGNvZGUgLSA0OCAvKiBgMGAgKi8gOiBudWxsXG59XG4iLCAiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAgIEdldCB0aGUgcGxhaW4tdGV4dCB2YWx1ZSBvZiBhIGhhc3Qgbm9kZS5cbiAqIEBsb25nZGVzY3JpcHRpb25cbiAqICAgIyMgVXNlXG4gKlxuICogICBgYGBqc1xuICogICBpbXBvcnQge2h9IGZyb20gJ2hhc3RzY3JpcHQnXG4gKiAgIGltcG9ydCB7dG9TdHJpbmd9IGZyb20gJ2hhc3QtdXRpbC10by1zdHJpbmcnXG4gKlxuICogICB0b1N0cmluZyhoKCdwJywgJ0FscGhhJykpXG4gKiAgIC8vPT4gJ0FscGhhJ1xuICogICB0b1N0cmluZyhoKCdkaXYnLCBbaCgnYicsICdCb2xkJyksICcgYW5kICcsIGgoJ2knLCAnaXRhbGljJyksICcuJ10pKVxuICogICAvLz0+ICdCb2xkIGFuZCBpdGFsaWMuJ1xuICogICBgYGBcbiAqXG4gKiAgICMjIEFQSVxuICpcbiAqICAgIyMjIGB0b1N0cmluZyhub2RlKWBcbiAqXG4gKiAgIFRyYW5zZm9ybSBhIG5vZGUgdG8gYSBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtSb290fFJvb3RbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gTm9kZVxuICovXG5cbi8qKlxuICogR2V0IHRoZSBwbGFpbi10ZXh0IHZhbHVlIG9mIGEgaGFzdCBub2RlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgLy8gXHUyMDFDVGhlIGNvbmNhdGVuYXRpb24gb2YgZGF0YSBvZiBhbGwgdGhlIFRleHQgbm9kZSBkZXNjZW5kYW50cyBvZiB0aGUgY29udGV4dFxuICAvLyBvYmplY3QsIGluIHRyZWUgb3JkZXIuXHUyMDFEXG4gIGlmICgnY2hpbGRyZW4nIGluIG5vZGUpIHtcbiAgICByZXR1cm4gYWxsKG5vZGUpXG4gIH1cblxuICAvLyBcdTIwMUNDb250ZXh0IG9iamVjdFx1MjAxOXMgZGF0YS5cdTIwMURcbiAgcmV0dXJuICd2YWx1ZScgaW4gbm9kZSA/IG5vZGUudmFsdWUgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25lKG5vZGUpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIHJldHVybiAnY2hpbGRyZW4nIGluIG5vZGUgPyBhbGwobm9kZSkgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Um9vdHxFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBhbGwobm9kZSkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gb25lKG5vZGUuY2hpbGRyZW5baW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0LCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQWN0aW9ufSBBY3Rpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkluZGV4fSBJbmRleFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQWN0aW9uVHVwbGV9IEFjdGlvblR1cGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSBWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuaW1wb3J0IHtjb2xvcn0gZnJvbSAnLi9jb2xvci5qcydcblxuLyoqXG4gKiBDb250aW51ZSB0cmF2ZXJzaW5nIGFzIG5vcm1hbFxuICovXG5leHBvcnQgY29uc3QgQ09OVElOVUUgPSB0cnVlXG4vKipcbiAqIERvIG5vdCB0cmF2ZXJzZSB0aGlzIG5vZGVcdTIwMTlzIGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBjb25zdCBTS0lQID0gJ3NraXAnXG4vKipcbiAqIFN0b3AgdHJhdmVyc2luZyBpbW1lZGlhdGVseVxuICovXG5leHBvcnQgY29uc3QgRVhJVCA9IGZhbHNlXG5cbi8qKlxuICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICpcbiAqIEBwYXJhbSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAqIEBwYXJhbSB0ZXN0IFRlc3Qgbm9kZSwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBWaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlIG9yZGVyLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXRQYXJlbnRzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxOb2RlPn0gdmlzaXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIG5vIHZpc2l0b3IgZ2l2ZW4sIHNvIGB2aXNpdG9yYCBpcyB0ZXN0LlxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpcyA9IGNvbnZlcnQodGVzdClcbiAgICAgIGNvbnN0IHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgICAgIGZhY3RvcnkodHJlZSwgbnVsbCwgW10pKClcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyP30gaW5kZXhcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogaHVzaFxuICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgICAgICAgbGV0IG5hbWVcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgICAgIDogdHlwZW9mIHZhbHVlLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZpc2l0LCAnbmFtZScsIHtcbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAnbm9kZSAoJyArXG4gICAgICAgICAgICAgIGNvbG9yKHZhbHVlLnR5cGUgKyAobmFtZSA/ICc8JyArIG5hbWUgKyAnPicgOiAnJykpICtcbiAgICAgICAgICAgICAgJyknXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aXNpdFxuXG4gICAgICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7QWN0aW9uVHVwbGV9ICovXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICBsZXQgc3VicmVzdWx0XG4gICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgbGV0IG9mZnNldFxuICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBhcmVudD59ICovXG4gICAgICAgICAgbGV0IGdyYW5kcGFyZW50c1xuXG4gICAgICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBncmFuZHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChub2RlKVxuXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgICBzdWJyZXN1bHQgPSBmYWN0b3J5KG5vZGUuY2hpbGRyZW5bb2Zmc2V0XSwgb2Zmc2V0LCBncmFuZHBhcmVudHMpKClcblxuICAgICAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBAcGFyYW0ge1Zpc2l0b3JSZXN1bHR9IHZhbHVlXG4gKiBAcmV0dXJucyB7QWN0aW9uVHVwbGV9XG4gKi9cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiBbdmFsdWVdXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBUeXBlXG4gKiBAdHlwZWRlZiB7T2JqZWN0PHN0cmluZywgdW5rbm93bj59IFByb3BzXG4gKlxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXkuPFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSBUZXN0XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdFxuICpcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnx2b2lkfVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBYXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uUHJlZGljYXRlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtub2RlIGlzIFh9XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQXNzZXJ0QW55dGhpbmdcbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gWVxuICogQGNhbGxiYWNrIEFzc2VydFByZWRpY2F0ZVxuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtub2RlIGlzIFl9XG4gKi9cblxuZXhwb3J0IGNvbnN0IGlzID1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0LlxuICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KG5vZGU6IHVua25vd24sIHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndHlwZSddfFBhcnRpYWw8VD58VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+PiwgaW5kZXg/OiBudW1iZXJ8bnVsbHx1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudHxudWxsfHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgVCkgJlxuICAgKiAgICgobm9kZT86IHVua25vd24sIHRlc3Q/OiBUZXN0LCBpbmRleD86IG51bWJlcnxudWxsfHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50fG51bGx8dW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbilcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAgICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV0gTm9kZSB0byBjaGVja1xuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogV2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICAgICAqIFdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgZnVuY3Rpb24gKG5vZGUpIHtyZXR1cm4gbm9kZS50eXBlID09PSB0ZXN0fWAuXG4gICAgICogV2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XSBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAgICAgKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF0gUGFyZW50IG9mIGBub2RlYFxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW2NvbnRleHRdIENvbnRleHQgb2JqZWN0IHRvIGludm9rZSBgdGVzdGAgd2l0aFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRlc3QgcGFzc2VkIGFuZCBgbm9kZWAgaXMgYSBgTm9kZWAgKG9iamVjdCB3aXRoIGB0eXBlYCBzZXQgdG8gbm9uLWVtcHR5IGBzdHJpbmdgKS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICAgIGZ1bmN0aW9uIGlzKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICBpbmRleCA8IDAgfHxcbiAgICAgICAgICBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgKCFpcyhwYXJlbnQpIHx8ICFwYXJlbnQuY2hpbGRyZW4pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwYXJlbnQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHBhcmVudCA9PT0gbnVsbCkgIT09XG4gICAgICAgIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYm90aCBwYXJlbnQgYW5kIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IEJvb2xlYW4oY2hlY2suY2FsbChjb250ZXh0LCBub2RlLCBpbmRleCwgcGFyZW50KSlcbiAgICAgICAgOiBmYWxzZVxuICAgIH1cbiAgKVxuXG5leHBvcnQgY29uc3QgY29udmVydCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIE5vZGU+KHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPikgPT4gQXNzZXJ0UHJlZGljYXRlPFQ+KSAmXG4gICAqICAgKCh0ZXN0PzogVGVzdCkgPT4gQXNzZXJ0QW55dGhpbmcpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gYXNzZXJ0aW9uIGZyb20gYSBjaGVjay5cbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICAgICAqIFdoZW4gYGFycmF5YCwgY2hlY2tzIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gICAgICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICBpZiAodGVzdCA9PT0gdW5kZWZpbmVkIHx8IHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9rXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGVzdCkgPyBhbnlGYWN0b3J5KHRlc3QpIDogcHJvcHNGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG4gICAgfVxuICApXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSB0ZXN0c1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPEFzc2VydEFueXRoaW5nPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbnkpXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge3Vua25vd25bXX0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFueSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uY2FsbCh0aGlzLCAuLi5wYXJhbWV0ZXJzKSkgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbiAqIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtQcm9wc30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gcHJvcHNGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeShhbGwpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGtleVxuXG4gICAgZm9yIChrZXkgaW4gY2hlY2spIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGh1c2gsIGl0IHN1cmUgd29ya3MgYXMgYW4gaW5kZXguXG4gICAgICBpZiAobm9kZVtrZXldICE9PSBjaGVja1trZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2RlXHUyMDE5cyB0eXBlXG4gKiBmb3Igc2FpZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtUeXBlfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiB0eXBlRmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gY2FzdEZhY3RvcnkodHlwZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09IGNoZWNrXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGVcdTIwMTlzIHR5cGVcbiAqIGZvciBzYWlkIHN0cmluZy5cbiAqIEBwYXJhbSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhc3RGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBhc3NlcnRpb25cblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7QXJyYXkuPHVua25vd24+fSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYXNzZXJ0aW9uKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzcHJlYWRpbmcgaXMgZmluZS5cbiAgICByZXR1cm4gQm9vbGVhbihjaGVjay5jYWxsKHRoaXMsIC4uLnBhcmFtZXRlcnMpKVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsICIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iLCAiaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcbmZ1bmN0aW9uIHJlaHlwZUNvZGVUaXRsZXMoKSB7XG4gICAgcmV0dXJuICh0cmVlKSA9PiB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIHZpc2l0b3IpO1xuICAgIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgICAgICBpZiAoIXBhcmVudCB8fCBub2RlLnRhZ05hbWUgIT09ICdwcmUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlID0gbm9kZTtcbiAgICAgICAgY29uc3QgY29kZSA9IEFycmF5LmlzQXJyYXkocHJlLmNoaWxkcmVuKSA/IHByZS5jaGlsZHJlblswXSA6IHByZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZSB8fCBbXTtcbiAgICAgICAgY29uc3QgdXBkYXRlZENsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZWR1Y2UoKGFjYywgY2xzKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBjbHMgaXMgc29tZXRoaW5nIGxpa2UuLi5cbiAgICAgICAgICAgIC8vIGkuZS4gbGFuZ3VhZ2UtdHlwZXNjcmlwdDpsaWIvbWR4LnRzXG4gICAgICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgICAgICAvLyBTcGxpdCBvbiB0aGUgJzonXG4gICAgICAgICAgICAgICAgY29uc3QgW2xhbmdDbGFzc05hbWUsIHRpdGxlXSA9IGNscy5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGl0bGUgYmxvY2sgdG8gdGhlIHRyZWUgYXQgdGhlIGluZGV4IHByaW9yXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIDxwcmUgLz4gd2l0aCB0aGUgdGl0bGUgd2UgZm91bmQuXG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3sgdHlwZTogJ3RleHQnLCB2YWx1ZTogdGl0bGUgfV0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgY2xhc3NOYW1lOiBbJ3JlaHlwZS1jb2RlLXRpdGxlJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChsYW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNscy5zbGljZSgwLCA5KSA9PT0gJ2xhbmd1YWdlLScpIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChjbHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHByZS5jaGlsZHJlbiA9IFt7IC4uLmNvZGUsIHByb3BlcnRpZXM6IHsgY2xhc3NOYW1lOiB1cGRhdGVkQ2xhc3NOYW1lIH0gfV07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVoeXBlQ29kZVRpdGxlcztcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqL1xuXG4vKipcbiAqIEludm9rZWQgd2hlbiBhIG5vZGUgKG1hdGNoaW5nIHRlc3QsIGlmIGdpdmVuKSBpcyBmb3VuZC5cbiAqIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBub2RlLlxuICogVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gdGhlIHBhcmVudCBvZiBub2RlICh0aGUgbGFzdCBvZiBhbmNlc3RvcnMpLlxuICogUmVwbGFjaW5nIG5vZGUgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzIGRlc2NlbmRhbnRzIHRvIGJlIHZpc2l0ZWQuXG4gKiBJZiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgb2Ygbm9kZSxcbiAqIHZpc2l0b3Igc2hvdWxkIHJldHVybiBhIG5ldyBpbmRleCAobnVtYmVyKSB0byBzcGVjaWZ5IHRoZSBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIG5vZGUgaXMgdHJhdmVyc2VkLlxuICogQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2Ygbm9kZSAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSlcbiAqIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBpbmRleC5cbiAqIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBhbiBhbmNlc3RvciBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmcgdHJhdmVyc2VkLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gVlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqIEBwYXJhbSB7Vn0gbm9kZSBGb3VuZCBub2RlXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfSBpbmRleCBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAqIEBwYXJhbSB7UGFyZW50fG51bGx9IHBhcmVudCBQYXJlbnQgb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7VmlzaXRvclJlc3VsdH1cbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4odHJlZTogTm9kZSwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+LCB2aXNpdG9yOiBWaXNpdG9yPFQ+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdGVzdDogVGVzdCwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0IHRlc3QgVGVzdCBub2RlXG4gICAgICogQHBhcmFtIHtWaXNpdG9yPE5vZGU+fSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV0gRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHJldHVybiB2aXNpdG9yKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsLFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICApXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7Q09OVElOVUV8U0tJUHxFWElUfSBBY3Rpb24gVW5pb24gb2YgdGhlIGFjdGlvbiB0eXBlc1xuICogQHR5cGVkZWYge251bWJlcn0gSW5kZXggTW92ZSB0byB0aGUgc2libGluZyBhdCBpbmRleCBuZXh0IChhZnRlciBub2RlIGl0c2VsZiBpcyBjb21wbGV0ZWx5IHRyYXZlcnNlZCkuIFVzZWZ1bCBpZiBtdXRhdGluZyB0aGUgdHJlZSwgc3VjaCBhcyByZW1vdmluZyB0aGUgbm9kZSB0aGUgdmlzaXRvciBpcyBjdXJyZW50bHkgb24sIG9yIGFueSBvZiBpdHMgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgUmVzdWx0cyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gY2hpbGRyZW4ubGVuZ3RoIHN0b3AgdHJhdmVyc2luZyB0aGUgcGFyZW50XG4gKiBAdHlwZWRlZiB7WyhBY3Rpb258bnVsbHx1bmRlZmluZWR8dm9pZCk/LCAoSW5kZXh8bnVsbHx1bmRlZmluZWQpP119IEFjdGlvblR1cGxlIExpc3Qgd2l0aCBvbmUgb3IgdHdvIHZhbHVlcywgdGhlIGZpcnN0IGFuIGFjdGlvbiwgdGhlIHNlY29uZCBhbiBpbmRleC5cbiAqIEB0eXBlZGVmIHtudWxsfHVuZGVmaW5lZHxBY3Rpb258SW5kZXh8QWN0aW9uVHVwbGV8dm9pZH0gVmlzaXRvclJlc3VsdCBBbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBhIHZpc2l0b3JcbiAqL1xuXG4vKipcbiAqIEludm9rZWQgd2hlbiBhIG5vZGUgKG1hdGNoaW5nIHRlc3QsIGlmIGdpdmVuKSBpcyBmb3VuZC5cbiAqIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBub2RlLlxuICogVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gdGhlIHBhcmVudCBvZiBub2RlICh0aGUgbGFzdCBvZiBhbmNlc3RvcnMpLlxuICogUmVwbGFjaW5nIG5vZGUgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzIGRlc2NlbmRhbnRzIHRvIGJlIHZpc2l0ZWQuXG4gKiBJZiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3MgKG9yIG5leHQgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSkgb2Ygbm9kZSxcbiAqIHZpc2l0b3Igc2hvdWxkIHJldHVybiBhIG5ldyBpbmRleCAobnVtYmVyKSB0byBzcGVjaWZ5IHRoZSBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIG5vZGUgaXMgdHJhdmVyc2VkLlxuICogQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2Ygbm9kZSAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2Ugb2YgcmV2ZXJzZSlcbiAqIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBpbmRleC5cbiAqIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBhbiBhbmNlc3RvciBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmcgdHJhdmVyc2VkLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gVlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqIEBwYXJhbSB7Vn0gbm9kZSBGb3VuZCBub2RlXG4gKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBhbmNlc3RvcnMgQW5jZXN0b3JzIG9mIG5vZGVcbiAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcbmltcG9ydCB7Y29sb3J9IGZyb20gJy4vY29sb3IuanMnXG5cbi8qKlxuICogQ29udGludWUgdHJhdmVyc2luZyBhcyBub3JtYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRJTlVFID0gdHJ1ZVxuLyoqXG4gKiBEbyBub3QgdHJhdmVyc2UgdGhpcyBub2RlXHUyMDE5cyBjaGlsZHJlblxuICovXG5leHBvcnQgY29uc3QgU0tJUCA9ICdza2lwJ1xuLyoqXG4gKiBTdG9wIHRyYXZlcnNpbmcgaW1tZWRpYXRlbHlcbiAqL1xuZXhwb3J0IGNvbnN0IEVYSVQgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgdmlzaXRQYXJlbnRzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4odHJlZTogTm9kZSwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+LCB2aXNpdG9yOiBWaXNpdG9yPFQ+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdGVzdDogVGVzdCwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoKHRyZWU6IE5vZGUsIHZpc2l0b3I6IFZpc2l0b3I8Tm9kZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0IHRlc3QgVGVzdCBub2RlXG4gICAgICogQHBhcmFtIHtWaXNpdG9yPE5vZGU+fSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV0gRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbm8gdmlzaXRvciBnaXZlbiwgc28gYHZpc2l0b3JgIGlzIHRlc3QuXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZhciBpcyA9IGNvbnZlcnQodGVzdClcbiAgICAgIHZhciBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuXG4gICAgICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge251bWJlcj99IGluZGV4XG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB2YXIgbmFtZVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmlzaXQsICduYW1lJywge1xuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICdub2RlICgnICtcbiAgICAgICAgICAgICAgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgK1xuICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpc2l0XG5cbiAgICAgICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgICAgICAvKiogQHR5cGUge0FjdGlvblR1cGxlfSAqL1xuICAgICAgICAgIHZhciBzdWJyZXN1bHRcbiAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICB2YXIgb2Zmc2V0XG4gICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGFyZW50Pn0gKi9cbiAgICAgICAgICB2YXIgZ3JhbmRwYXJlbnRzXG5cbiAgICAgICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgICAgIGlmIChzdWJyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7VmlzaXRvclJlc3VsdH0gdmFsdWVcbiAqIEByZXR1cm5zIHtBY3Rpb25UdXBsZX1cbiAqL1xuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsICIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9pbmRleC5qcycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vbGliL2luZGV4LmpzJ1xuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtFbGVtZW50WydjaGlsZHJlbiddW251bWJlcl19IEVsZW1lbnRDaGlsZFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IFByb3BlcnRpZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC1pcy1lbGVtZW50JykuVGVzdH0gVGVzdFxuICpcbiAqIEB0eXBlZGVmIHsncHJlcGVuZCd8J2FwcGVuZCd8J3dyYXAnfCdiZWZvcmUnfCdhZnRlcid9IEJlaGF2aW9yXG4gKlxuICogQGNhbGxiYWNrIEJ1aWxkXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW119XG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtCZWhhdmlvcn0gW2JlaGF2aW9yPSdwcmVwZW5kJ11cbiAqICAgSG93IHRvIGNyZWF0ZSBsaW5rcy5cbiAqIEBwcm9wZXJ0eSB7QmVoYXZpb3J9IFtiZWhhdmlvdXJdXG4gKiAgIFBsZWFzZSB1c2UgYGJlaGF2aW9yYCBpbnN0ZWFkXG4gKiBAcHJvcGVydHkge1Byb3BlcnRpZXN9IFtwcm9wZXJ0aWVzXVxuICogICBFeHRyYSBwcm9wZXJ0aWVzIHRvIHNldCBvbiB0aGUgbGluayB3aGVuIGluamVjdGluZy5cbiAqICAgRGVmYXVsdHMgdG8gYHthcmlhSGlkZGVuOiB0cnVlLCB0YWJJbmRleDogLTF9YCB3aGVuIGAncHJlcGVuZCdgIG9yXG4gKiAgIGAnYXBwZW5kJ2AuXG4gKiBAcHJvcGVydHkge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXXxCdWlsZH0gW2NvbnRlbnQ9e3R5cGU6ICdlbGVtZW50JywgdGFnTmFtZTogJ3NwYW4nLCBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2ljb24nLCAnaWNvbi1saW5rJ119LCBjaGlsZHJlbjogW119XVxuICogICBoYXN0IG5vZGVzIHRvIGluc2VydCBpbiB0aGUgbGluay5cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSBbZ3JvdXBdXG4gKiAgIGhhc3Qgbm9kZSB0byB3cmFwIHRoZSBoZWFkaW5nIGFuZCBsaW5rIHdpdGgsIGlmIGBiZWhhdmlvcmAgaXMgYCdiZWZvcmUnYCBvclxuICogICBgJ2FmdGVyJ2AuXG4gKiAgIFRoZXJlIGlzIG5vIGRlZmF1bHQuXG4gKiBAcHJvcGVydHkge1Rlc3R9IFt0ZXN0XVxuICogICBUZXN0IHRvIGRlZmluZSB3aGljaCBoZWFkaW5nIGVsZW1lbnRzIGFyZSBsaW5rZWQuXG4gKiAgIEFueSB0ZXN0IHRoYXQgY2FuIGJlIGdpdmVuIHRvIGBoYXN0LXV0aWwtaXMtZWxlbWVudGAgaXMgc3VwcG9ydGVkLlxuICogICBUaGUgZGVmYXVsdCAobm8gdGVzdCkgaXMgdG8gbGluayBhbGwgaGVhZGluZ3MuXG4gKiAgIENhbiBiZSB1c2VkIHRvIGxpbmsgb25seSBoMS1oMywgb3IgZm9yIGV4YW1wbGUgYWxsIGV4Y2VwdCBoMS5cbiAqL1xuXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2V4dGVuZCdcbmltcG9ydCB7aGFzUHJvcGVydHl9IGZyb20gJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknXG5pbXBvcnQge2hlYWRpbmdSYW5rfSBmcm9tICdoYXN0LXV0aWwtaGVhZGluZy1yYW5rJ1xuaW1wb3J0IHtjb252ZXJ0RWxlbWVudH0gZnJvbSAnaGFzdC11dGlsLWlzLWVsZW1lbnQnXG5pbXBvcnQge3Zpc2l0LCBTS0lQfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG4vKiogQHR5cGUge0VsZW1lbnR9ICovXG5jb25zdCBjb250ZW50RGVmYXVsdHMgPSB7XG4gIHR5cGU6ICdlbGVtZW50JyxcbiAgdGFnTmFtZTogJ3NwYW4nLFxuICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2ljb24nLCAnaWNvbi1saW5rJ119LFxuICBjaGlsZHJlbjogW11cbn1cblxuLyoqXG4gKiBQbHVnaW4gdG8gYXV0b21hdGljYWxseSBhZGQgbGlua3MgdG8gaGVhZGluZ3MgKGgxLWg2KS5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyhvcHRpb25zID0ge30pIHtcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wZXJ0aWVzXG4gIGNvbnN0IGJlaGF2aW9yID0gb3B0aW9ucy5iZWhhdmlvdXIgfHwgb3B0aW9ucy5iZWhhdmlvciB8fCAncHJlcGVuZCdcbiAgY29uc3QgY29udGVudCA9IG9wdGlvbnMuY29udGVudCB8fCBjb250ZW50RGVmYXVsdHNcbiAgY29uc3QgZ3JvdXAgPSBvcHRpb25zLmdyb3VwXG4gIGNvbnN0IGlzID0gY29udmVydEVsZW1lbnQob3B0aW9ucy50ZXN0KVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBsZXQgbWV0aG9kXG5cbiAgaWYgKGJlaGF2aW9yID09PSAnd3JhcCcpIHtcbiAgICBtZXRob2QgPSB3cmFwXG4gIH0gZWxzZSBpZiAoYmVoYXZpb3IgPT09ICdiZWZvcmUnIHx8IGJlaGF2aW9yID09PSAnYWZ0ZXInKSB7XG4gICAgbWV0aG9kID0gYXJvdW5kXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgcHJvcHMgPSB7YXJpYUhpZGRlbjogJ3RydWUnLCB0YWJJbmRleDogLTF9XG4gICAgfVxuXG4gICAgbWV0aG9kID0gaW5qZWN0XG4gIH1cblxuICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBpbmRleCwgcGFyZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGhlYWRpbmdSYW5rKG5vZGUpICYmXG4gICAgICAgIGhhc1Byb3BlcnR5KG5vZGUsICdpZCcpICYmXG4gICAgICAgIGlzKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgZnVuY3Rpb24gaW5qZWN0KG5vZGUpIHtcbiAgICBub2RlLmNoaWxkcmVuW2JlaGF2aW9yID09PSAncHJlcGVuZCcgPyAndW5zaGlmdCcgOiAncHVzaCddKFxuICAgICAgY3JlYXRlKG5vZGUsIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLCB0b0NoaWxkcmVuKGNvbnRlbnQsIG5vZGUpKVxuICAgIClcblxuICAgIHJldHVybiBbU0tJUF1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBmdW5jdGlvbiBhcm91bmQobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIC8vIFVuY29tbW9uLlxuICAgIC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHwgIXBhcmVudCkgcmV0dXJuXG5cbiAgICBjb25zdCBsaW5rID0gY3JlYXRlKFxuICAgICAgbm9kZSxcbiAgICAgIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLFxuICAgICAgdG9DaGlsZHJlbihjb250ZW50LCBub2RlKVxuICAgIClcbiAgICBsZXQgbm9kZXMgPSBiZWhhdmlvciA9PT0gJ2JlZm9yZScgPyBbbGluaywgbm9kZV0gOiBbbm9kZSwgbGlua11cblxuICAgIGlmIChncm91cCkge1xuICAgICAgY29uc3QgZ3JvdXBpbmcgPSB0b05vZGUoZ3JvdXAsIG5vZGUpXG5cbiAgICAgIGlmIChncm91cGluZyAmJiAhQXJyYXkuaXNBcnJheShncm91cGluZykgJiYgZ3JvdXBpbmcudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgIGdyb3VwaW5nLmNoaWxkcmVuID0gbm9kZXNcbiAgICAgICAgbm9kZXMgPSBbZ3JvdXBpbmddXG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSwgLi4ubm9kZXMpXG5cbiAgICByZXR1cm4gW1NLSVAsIGluZGV4ICsgbm9kZXMubGVuZ3RoXVxuICB9XG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQvY29tcGxleC10eXBlcycpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIHdyYXAobm9kZSkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSBbY3JlYXRlKG5vZGUsIGV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpLCBub2RlLmNoaWxkcmVuKV1cbiAgICByZXR1cm4gW1NLSVBdXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW118QnVpbGR9IHZhbHVlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudENoaWxkW119XG4gICAqL1xuICBmdW5jdGlvbiB0b0NoaWxkcmVuKHZhbHVlLCBub2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9Ob2RlKHZhbHVlLCBub2RlKVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiBbcmVzdWx0XVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSB2YWx1ZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZShub2RlKVxuICAgIHJldHVybiBleHRlbmQodHJ1ZSwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBbXSA6IHt9LCB2YWx1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wc1xuICAgKiBAcGFyYW0ge0VsZW1lbnRDaGlsZFtdfSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZShub2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ2EnLFxuICAgICAgcHJvcGVydGllczogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgLy8gRml4IGhhc3QgdHlwZXMgYW5kIG1ha2UgdGhlbSByZXF1aXJlZC5cbiAgICAgICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgICAgaHJlZjogJyMnICsgKG5vZGUucHJvcGVydGllcyB8fCB7fSkuaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBUYWdOYW1lXG4gKiBAdHlwZWRlZiB7bnVsbHx1bmRlZmluZWR8VGFnTmFtZXxUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheS48VGFnTmFtZXxUZXN0RnVuY3Rpb25Bbnl0aGluZz59IFRlc3RcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7RWxlbWVudH0gVFxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+fSBQcmVkaWNhdGVUZXN0XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IHBhc3NlcyBhIHRlc3RcbiAqXG4gKiBAY2FsbGJhY2sgVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2Jvb2xlYW58dm9pZH1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAdGVtcGxhdGUge0VsZW1lbnR9IFhcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25QcmVkaWNhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2VsZW1lbnQgaXMgWH1cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhbiBlbGVtZW50IGFuZCBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEBjYWxsYmFjayBBc3NlcnRBbnl0aGluZ1xuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGFuIGVsZW1lbnQgYW5kIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtFbGVtZW50fSBZXG4gKiBAY2FsbGJhY2sgQXNzZXJ0UHJlZGljYXRlXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge25vZGUgaXMgWX1cbiAqL1xuXG4vLyBDaGVjayBpZiBgbm9kZWAgaXMgYW4gYGVsZW1lbnRgIGFuZCB3aGV0aGVyIGl0IHBhc3NlcyB0aGUgZ2l2ZW4gdGVzdC5cbmV4cG9ydCBjb25zdCBpc0VsZW1lbnQgPVxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBub2RlIGlzIGFuIGVsZW1lbnQgYW5kIHBhc3NlcyBhIHRlc3QuXG4gICAqIFdoZW4gYSBgcGFyZW50YCBub2RlIGlzIGtub3duIHRoZSBgaW5kZXhgIG9mIG5vZGUgc2hvdWxkIGFsc28gYmUgZ2l2ZW4uXG4gICAqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKCgpID0+IGZhbHNlKSAmXG4gICAqICAgKDxUIGV4dGVuZHMgRWxlbWVudCA9IEVsZW1lbnQ+KG5vZGU6IHVua25vd24sIHRlc3Q/OiBQcmVkaWNhdGVUZXN0PFQ+LCBpbmRleD86IG51bWJlciwgcGFyZW50PzogUGFyZW50LCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBUKSAmXG4gICAqICAgKChub2RlOiB1bmtub3duLCB0ZXN0OiBUZXN0LCBpbmRleD86IG51bWJlciwgcGFyZW50PzogUGFyZW50LCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbilcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAgICAgKiBXaGVuIGEgYHBhcmVudGAgbm9kZSBpcyBrbm93biB0aGUgYGluZGV4YCBvZiBub2RlIHNob3VsZCBhbHNvIGJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV0gTm9kZSB0byBjaGVja1xuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBQb3NpdGlvbiBvZiBgbm9kZWAgaW4gYHBhcmVudGBcbiAgICAgKiBAcGFyYW0ge1BhcmVudH0gW3BhcmVudF0gUGFyZW50IG9mIGBub2RlYFxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW2NvbnRleHRdIENvbnRleHQgb2JqZWN0IHRvIGludm9rZSBgdGVzdGAgd2l0aFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRlc3QgcGFzc2VkIGFuZCBgbm9kZWAgaXMgYW4gYEVsZW1lbnRgIChvYmplY3Qgd2l0aCBgdHlwZWAgc2V0IHRvIGBlbGVtZW50YCBhbmQgYHRhZ05hbWVgIHNldCB0byBhIG5vbi1lbXB0eSBzdHJpbmcpLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gICAgZnVuY3Rpb24gKG5vZGUsIHRlc3QsIGluZGV4LCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gY29udmVydEVsZW1lbnQodGVzdClcblxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGluZGV4ICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgaW5kZXggPCAwIHx8XG4gICAgICAgICAgaW5kZXggPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIGZpbml0ZSBpbmRleCBmb3IgY2hpbGQgbm9kZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICghcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIGlmICghbm9kZSB8fCAhbm9kZS50eXBlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwYXJlbnQgPT09IHVuZGVmaW5lZCB8fCBwYXJlbnQgPT09IG51bGwpICE9PVxuICAgICAgICAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGJvdGggcGFyZW50IGFuZCBpbmRleCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGVjay5jYWxsKGNvbnRleHQsIG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgfVxuICApXG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RWxlbWVudCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VCBleHRlbmRzIEVsZW1lbnQ+KHRlc3Q6IFRbJ3RhZ05hbWUnXXxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4pID0+IEFzc2VydFByZWRpY2F0ZTxUPikgJlxuICAgKiAgICgodGVzdD86IFRlc3QpID0+IEFzc2VydEFueXRoaW5nKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIGFzc2VydGlvbiBmcm9tIGEgY2hlY2suXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBXaGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gICAgICogV2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGBmdW5jdGlvbiAobm9kZSkge3JldHVybiBub2RlLnR5cGUgPT09IHRlc3R9YC5cbiAgICAgKiBXaGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICAgICAqIFdoZW4gYG9iamVjdGAsIGNoZWNrcyB0aGF0IGFsbCBrZXlzIGluIHRlc3QgYXJlIGluIG5vZGUsIGFuZCB0aGF0IHRoZXkgaGF2ZSAoc3RyaWN0bHkpIGVxdWFsIHZhbHVlcy5cbiAgICAgKiBXaGVuIGBhcnJheWAsIGNoZWNrcyBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICAgICAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodGVzdCkge1xuICAgICAgaWYgKHRlc3QgPT09IHVuZGVmaW5lZCB8fCB0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGFueUZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYXN0RmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIGFycmF5IGFzIHRlc3QnKVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFRhZ05hbWV8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSB0ZXN0c1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPEFzc2VydEFueXRoaW5nPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0RWxlbWVudCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYW55KVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHt1bmtub3duW119IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbnkoLi4ucGFyYW1ldGVycykge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmNhbGwodGhpcywgLi4ucGFyYW1ldGVycykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZVx1MjAxOXMgdGFnXG4gKiBuYW1lIGZvciBzYWlkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1RhZ05hbWV9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHRhZ05hbWVGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiB0YWdOYW1lXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHRhZ05hbWUobm9kZSkge1xuICAgIHJldHVybiBlbGVtZW50KG5vZGUpICYmIG5vZGUudGFnTmFtZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGVzdEZ1bmN0aW9uQW55dGhpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhc3RGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBhc3NlcnRpb25cblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICAgKiBAcGFyYW0ge0FycmF5Ljx1bmtub3duPn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydGlvbihub2RlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogZmluZS5cbiAgICByZXR1cm4gZWxlbWVudChub2RlKSAmJiBCb29sZWFuKGNoZWNrLmNhbGwodGhpcywgbm9kZSwgLi4ucGFyYW1ldGVycykpXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIHJldHVybiB0cnVlIGlmIHRoaXMgaXMgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICogQHJldHVybnMge25vZGUgaXMgRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudChub2RlKSB7XG4gIHJldHVybiBCb29sZWFuKFxuICAgIG5vZGUgJiZcbiAgICAgIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJlxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbm9kZS5cbiAgICAgIG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYW4gZWxlbWVudC5cbiAgICAgIHR5cGVvZiBub2RlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gIClcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IFZpc2l0b3JcbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50cywgQ09OVElOVUUsIFNLSVAsIEVYSVR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgU0tJUCwgRVhJVH1cblxuLyoqXG4gKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gKlxuICogQHBhcmFtIHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICogQHBhcmFtIHRlc3QgVGVzdCwgb3B0aW9uYWxcbiAqIEBwYXJhbSB2aXNpdG9yIEZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBub2RlXG4gKiBAcGFyYW0gcmV2ZXJzZSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgdmlzaXQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlLCBDaGVjayBleHRlbmRzIFRlc3Q+KHRyZWU6IFRyZWUsIHRlc3Q6IENoZWNrLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZVxuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2luZGV4LmpzJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9saWIvaW5kZXguanMnXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdsb3dsaWdodCcpLlJvb3R9IExvd2xpZ2h0Um9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbG93bGlnaHQvbGliL2NvcmUuanMnKS5IaWdobGlnaHRTeW50YXh9IEhpZ2hsaWdodFN5bnRheFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7Um9vdHxSb290WydjaGlsZHJlbiddW251bWJlcl19IE5vZGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJlZml4PSdobGpzLSddXG4gKiAgIFByZWZpeCB0byB1c2UgYmVmb3JlIGNsYXNzZXMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW58QXJyYXk8c3RyaW5nPn0gW3N1YnNldF1cbiAqICAgU2NvcGUgb2YgbGFuZ3VhZ2VzIHRvIGNoZWNrIHdoZW4gYXV0by1kZXRlY3RpbmcgKGRlZmF1bHQ6IGFsbCBsYW5ndWFnZXMpLlxuICogICBQYXNzIGBmYWxzZWAgdG8gbm90IGhpZ2hsaWdodCBjb2RlIHdpdGhvdXQgbGFuZ3VhZ2UgY2xhc3Nlcy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2lnbm9yZU1pc3Npbmc9ZmFsc2VdXG4gKiAgIFN3YWxsb3cgZXJyb3JzIGZvciBtaXNzaW5nIGxhbmd1YWdlcy5cbiAqICAgQnkgZGVmYXVsdCwgdW5yZWdpc3RlcmVkIHN5bnRheGVzIHRocm93IGFuIGVycm9yIHdoZW4gdGhleSBhcmUgdXNlZC5cbiAqICAgUGFzcyBgdHJ1ZWAgdG8gc3dhbGxvdyB0aG9zZSBlcnJvcnMgYW5kIHRodXMgaWdub3JlIGNvZGUgd2l0aCB1bmtub3duIGNvZGVcbiAqICAgbGFuZ3VhZ2VzLlxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbcGxhaW5UZXh0PVtdXVxuICogICBMaXN0IG9mIHBsYWluLXRleHQgbGFuZ3VhZ2VzLlxuICogICBQYXNzIGFueSBsYW5ndWFnZXMgeW91IHdvdWxkIGxpa2UgdG8gYmUga2VwdCBhcyBwbGFpbi10ZXh0IGluc3RlYWQgb2ZcbiAqICAgZ2V0dGluZyBoaWdobGlnaHRlZC5cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZywgc3RyaW5nfEFycmF5PHN0cmluZz4+fSBbYWxpYXNlcz17fV1cbiAqICAgUmVnaXN0ZXIgbW9yZSBhbGlhc2VzLlxuICogICBQYXNzZWQgdG8gYGxvd2xpZ2h0LnJlZ2lzdGVyQWxpYXNgLlxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBIaWdobGlnaHRTeW50YXg+fSBbbGFuZ3VhZ2VzPXt9XVxuICogICBSZWdpc3RlciBtb3JlIGxhbmd1YWdlcy5cbiAqICAgRWFjaCBrZXkvdmFsdWUgcGFpciBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIGBsb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlYC5cbiAqL1xuXG5pbXBvcnQge2xvd2xpZ2h0fSBmcm9tICdsb3dsaWdodCdcbmltcG9ydCB7dG9UZXh0fSBmcm9tICdoYXN0LXV0aWwtdG8tdGV4dCdcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCB0aGUgc3ludGF4IG9mIGNvZGUgd2l0aCBsb3dsaWdodCAoYGhpZ2hsaWdodC5qc2ApLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IEFycmF5PHZvaWQ+LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlSGlnaGxpZ2h0KG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7YWxpYXNlcywgbGFuZ3VhZ2VzLCBwcmVmaXgsIHBsYWluVGV4dCwgaWdub3JlTWlzc2luZywgc3Vic2V0fSA9IG9wdGlvbnNcbiAgbGV0IG5hbWUgPSAnaGxqcydcblxuICBpZiAoYWxpYXNlcykge1xuICAgIGxvd2xpZ2h0LnJlZ2lzdGVyQWxpYXMoYWxpYXNlcylcbiAgfVxuXG4gIGlmIChsYW5ndWFnZXMpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQga2V5XG5cbiAgICBmb3IgKGtleSBpbiBsYW5ndWFnZXMpIHtcbiAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZXMsIGtleSkpIHtcbiAgICAgICAgbG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZShrZXksIGxhbmd1YWdlc1trZXldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcmVmaXgpIHtcbiAgICBjb25zdCBwb3MgPSBwcmVmaXguaW5kZXhPZignLScpXG4gICAgbmFtZSA9IHBvcyA+IC0xID8gcHJlZml4LnNsaWNlKDAsIHBvcykgOiBwcmVmaXhcbiAgfVxuXG4gIHJldHVybiAodHJlZSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSwgXywgZ2l2ZW5QYXJlbnQpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IC8qKiBAdHlwZSB7Tm9kZT99ICovIChnaXZlblBhcmVudClcblxuICAgICAgaWYgKFxuICAgICAgICAhcGFyZW50IHx8XG4gICAgICAgICEoJ3RhZ05hbWUnIGluIHBhcmVudCkgfHxcbiAgICAgICAgcGFyZW50LnRhZ05hbWUgIT09ICdwcmUnIHx8XG4gICAgICAgIG5vZGUudGFnTmFtZSAhPT0gJ2NvZGUnIHx8XG4gICAgICAgICFub2RlLnByb3BlcnRpZXNcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFuZyA9IGxhbmd1YWdlKG5vZGUpXG5cbiAgICAgIGlmIChcbiAgICAgICAgbGFuZyA9PT0gZmFsc2UgfHxcbiAgICAgICAgKCFsYW5nICYmIHN1YnNldCA9PT0gZmFsc2UpIHx8XG4gICAgICAgIChsYW5nICYmIHBsYWluVGV4dCAmJiBwbGFpblRleHQuaW5jbHVkZXMobGFuZykpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lID0gW11cbiAgICAgIH1cblxuICAgICAgaWYgKCFub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWUudW5zaGlmdChuYW1lKVxuICAgICAgfVxuXG4gICAgICAvKiogQHR5cGUge0xvd2xpZ2h0Um9vdH0gKi9cbiAgICAgIGxldCByZXN1bHRcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gbGFuZ1xuICAgICAgICAgID8gbG93bGlnaHQuaGlnaGxpZ2h0KGxhbmcsIHRvVGV4dChwYXJlbnQpLCB7cHJlZml4fSlcbiAgICAgICAgICA6IC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlIGNoZWNrZWQgdGhhdCBgc3Vic2V0YCBpcyBub3QgYSBib29sZWFuLlxuICAgICAgICAgICAgbG93bGlnaHQuaGlnaGxpZ2h0QXV0byh0b1RleHQocGFyZW50KSwge3ByZWZpeCwgc3Vic2V0fSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VwdGlvbiA9IC8qKiBAdHlwZSB7RXJyb3J9ICovIChlcnJvcilcbiAgICAgICAgaWYgKCFpZ25vcmVNaXNzaW5nIHx8ICEvVW5rbm93biBsYW5ndWFnZS8udGVzdChleGNlcHRpb24ubWVzc2FnZSkpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghbGFuZyAmJiByZXN1bHQuZGF0YS5sYW5ndWFnZSkge1xuICAgICAgICBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lLnB1c2goJ2xhbmd1YWdlLScgKyByZXN1bHQuZGF0YS5sYW5ndWFnZSlcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0LmNoaWxkcmVuKSAmJiByZXN1bHQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gcmVzdWx0LmNoaWxkcmVuXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge2ZhbHNlfHN0cmluZ3x1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIGxhbmd1YWdlKG5vZGUpIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS5wcm9wZXJ0aWVzICYmIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWVcbiAgbGV0IGluZGV4ID0gLTFcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBjbGFzc05hbWUubGVuZ3RoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcoY2xhc3NOYW1lW2luZGV4XSlcblxuICAgIGlmICh2YWx1ZSA9PT0gJ25vLWhpZ2hsaWdodCcgfHwgdmFsdWUgPT09ICdub2hpZ2hsaWdodCcpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh2YWx1ZS5zbGljZSgwLCA1KSA9PT0gJ2xhbmctJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDUpXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLnNsaWNlKDAsIDkpID09PSAnbGFuZ3VhZ2UtJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDkpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9jb3JlLmpzJykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvY29yZS5qcycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2NvcmUuanMnKS5BdXRvT3B0aW9uc30gQXV0b09wdGlvbnNcbiAqL1xuXG5leHBvcnQge2xvd2xpZ2h0fSBmcm9tICcuL2xpYi9jb21tb24uanMnXG4iLCAiaW1wb3J0IGFyZHVpbm8gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXJkdWlubydcbmltcG9ydCBiYXNoIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2gnXG5pbXBvcnQgYyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jJ1xuaW1wb3J0IGNwcCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jcHAnXG5pbXBvcnQgY3NoYXJwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycCdcbmltcG9ydCBjc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzJ1xuaW1wb3J0IGRpZmYgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGlmZidcbmltcG9ydCBnbyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9nbydcbmltcG9ydCBpbmkgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaW5pJ1xuaW1wb3J0IGphdmEgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YSdcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnXG5pbXBvcnQganNvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uJ1xuaW1wb3J0IGtvdGxpbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9rb3RsaW4nXG5pbXBvcnQgbGVzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sZXNzJ1xuaW1wb3J0IGx1YSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sdWEnXG5pbXBvcnQgbWFrZWZpbGUgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWFrZWZpbGUnXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWFya2Rvd24nXG5pbXBvcnQgb2JqZWN0aXZlYyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9vYmplY3RpdmVjJ1xuaW1wb3J0IHBlcmwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGVybCdcbmltcG9ydCBwaHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwJ1xuaW1wb3J0IHBocFRlbXBsYXRlIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocC10ZW1wbGF0ZSdcbmltcG9ydCBwbGFpbnRleHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGxhaW50ZXh0J1xuaW1wb3J0IHB5dGhvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9weXRob24nXG5pbXBvcnQgcHl0aG9uUmVwbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9weXRob24tcmVwbCdcbmltcG9ydCByIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3InXG5pbXBvcnQgcnVieSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9ydWJ5J1xuaW1wb3J0IHJ1c3QgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVzdCdcbmltcG9ydCBzY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Njc3MnXG5pbXBvcnQgc2hlbGwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2hlbGwnXG5pbXBvcnQgc3FsIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NxbCdcbmltcG9ydCBzd2lmdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zd2lmdCdcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQnXG5pbXBvcnQgdmJuZXQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmJuZXQnXG5pbXBvcnQgeG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCdcbmltcG9ydCB5YW1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3lhbWwnXG5pbXBvcnQge2xvd2xpZ2h0fSBmcm9tICcuL2NvcmUuanMnXG5cbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2FyZHVpbm8nLCBhcmR1aW5vKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnYmFzaCcsIGJhc2gpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdjJywgYylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NwcCcsIGNwcClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzaGFycCcsIGNzaGFycClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzcycsIGNzcylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2RpZmYnLCBkaWZmKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnZ28nLCBnbylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2luaScsIGluaSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmEnLCBqYXZhKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdqc29uJywganNvbilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2tvdGxpbicsIGtvdGxpbilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2xlc3MnLCBsZXNzKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbHVhJywgbHVhKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbWFrZWZpbGUnLCBtYWtlZmlsZSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ21hcmtkb3duJywgbWFya2Rvd24pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdvYmplY3RpdmVjJywgb2JqZWN0aXZlYylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BlcmwnLCBwZXJsKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGhwLXRlbXBsYXRlJywgcGhwVGVtcGxhdGUpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdwbGFpbnRleHQnLCBwbGFpbnRleHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdweXRob24nLCBweXRob24pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdweXRob24tcmVwbCcsIHB5dGhvblJlcGwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdyJywgcilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3J1YnknLCBydWJ5KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncnVzdCcsIHJ1c3QpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzY3NzJywgc2Nzcylcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3NoZWxsJywgc2hlbGwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzcWwnLCBzcWwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdzd2lmdCcsIHN3aWZ0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgndHlwZXNjcmlwdCcsIHR5cGVzY3JpcHQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCd2Ym5ldCcsIHZibmV0KVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgneWFtbCcsIHlhbWwpXG5cbmV4cG9ydCB7bG93bGlnaHR9IGZyb20gJy4vY29yZS5qcydcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5UZXh0fSBUZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoaWdobGlnaHQuanMnKS5IaWdobGlnaHRSZXN1bHR9IEhpZ2hsaWdodFJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuSExKU09wdGlvbnN9IEhpZ2hsaWdodE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hpZ2hsaWdodC5qcycpLkxhbmd1YWdlRm59IEhpZ2hsaWdodFN5bnRheFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuRW1pdHRlcn0gSGlnaGxpZ2h0RW1pdHRlclxuICpcbiAqIEB0eXBlZGVmIHt7dHlwZTogJ2VsZW1lbnQnLCB0YWdOYW1lOiAnc3BhbicsIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IEFycmF5PHN0cmluZz59LCBjaGlsZHJlbjogQXJyYXk8U3BhbnxUZXh0Pn19IFNwYW5cbiAqIEB0eXBlZGVmIHt7dHlwZTogJ3Jvb3QnLCBkYXRhOiB7bGFuZ3VhZ2U6IHN0cmluZ3xudWxsLCByZWxldmFuY2U6IG51bWJlcn0sIGNoaWxkcmVuOiBBcnJheTxTcGFufFRleHQ+fX0gUm9vdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV4dHJhT3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbc3Vic2V0XVxuICogICBMaXN0IG9mIGFsbG93ZWQgbGFuZ3VhZ2VzLCBkZWZhdWx0cyB0byBhbGwgcmVnaXN0ZXJlZCBsYW5ndWFnZXMuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtwcmVmaXg9J2hsanMtJ11cbiAqICAgQ2xhc3MgcHJlZml4LlxuICpcbiAqIEB0eXBlZGVmIHtPcHRpb25zICYgRXh0cmFPcHRpb25zfSBBdXRvT3B0aW9uc1xuICovXG5cbmltcG9ydCBoaWdoIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSdcbmltcG9ydCB7ZmF1bHR9IGZyb20gJ2ZhdWx0J1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5jb25zdCBkZWZhdWx0UHJlZml4ID0gJ2hsanMtJ1xuXG4vKipcbiAqIEhpZ2hsaWdodCBgdmFsdWVgIChjb2RlKSBhcyBgbGFuZ3VhZ2VgIChuYW1lKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqICAgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBDb2RlIHRvIGhpZ2hsaWdodC5cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnM9e31dXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7Um9vdH1cbiAqICAgQSBoYXN0IGBSb290YCBub2RlLlxuICovXG5mdW5jdGlvbiBoaWdobGlnaHQobGFuZ3VhZ2UsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHByZWZpeCA9IG9wdGlvbnMucHJlZml4XG5cbiAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBmYXVsdCgnRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIG5hbWUsIGdvdCBgJXNgJywgbGFuZ3VhZ2UpXG4gIH1cblxuICBpZiAoIWhpZ2guZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKSB7XG4gICAgdGhyb3cgZmF1bHQoJ1Vua25vd24gbGFuZ3VhZ2U6IGAlc2AgaXMgbm90IHJlZ2lzdGVyZWQnLCBsYW5ndWFnZSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgZmF1bHQoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciB2YWx1ZSwgZ290IGAlc2AnLCB2YWx1ZSlcbiAgfVxuXG4gIGlmIChwcmVmaXggPT09IG51bGwgfHwgcHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmVmaXggPSBkZWZhdWx0UHJlZml4XG4gIH1cblxuICBoaWdoLmNvbmZpZ3VyZSh7X19lbWl0dGVyOiBIYXN0RW1pdHRlciwgY2xhc3NQcmVmaXg6IHByZWZpeH0pXG5cbiAgY29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHtIaWdobGlnaHRSZXN1bHQgJiB7X2VtaXR0ZXI6IEhhc3RFbWl0dGVyfX0gKi8gKFxuICAgIGhpZ2guaGlnaGxpZ2h0KHZhbHVlLCB7bGFuZ3VhZ2UsIGlnbm9yZUlsbGVnYWxzOiB0cnVlfSlcbiAgKVxuXG4gIGhpZ2guY29uZmlndXJlKHt9KVxuXG4gIC8vIGBoaWdobGlnaHQuanNgIHNlZW1zIHRvIHVzZSB0aGlzIChjdXJyZW50bHkpIGZvciBicm9rZW4gZ3JhbW1hcnMsIHNvIGxldFx1MjAxOXNcbiAgLy8ga2VlcCBpdCBpbiB0aGVyZSBqdXN0IHRvIGJlIHN1cmUuXG4gIC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cbiAgaWYgKHJlc3VsdC5lcnJvclJhaXNlZCkge1xuICAgIHRocm93IHJlc3VsdC5lcnJvclJhaXNlZFxuICB9XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGxhbmd1YWdlYCBpcyBhbHdheXMgZGVmaW5lZCBpbiBgaGlnaGxpZ2h0YC5cbiAgcmVzdWx0Ll9lbWl0dGVyLnJvb3QuZGF0YS5sYW5ndWFnZSA9IHJlc3VsdC5sYW5ndWFnZVxuICByZXN1bHQuX2VtaXR0ZXIucm9vdC5kYXRhLnJlbGV2YW5jZSA9IHJlc3VsdC5yZWxldmFuY2VcblxuICByZXR1cm4gcmVzdWx0Ll9lbWl0dGVyLnJvb3Rcbn1cblxuLyoqXG4gKiBIaWdobGlnaHQgYHZhbHVlYCAoY29kZSkgYW5kIGd1ZXNzIGl0cyBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgQ29kZSB0byBoaWdobGlnaHQuXG4gKiBAcGFyYW0ge0F1dG9PcHRpb25zfSBbb3B0aW9ucz17fV1cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtSb290fVxuICogICBBIGhhc3QgYFJvb3RgIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodEF1dG8odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBzdWJzZXQgPSBvcHRpb25zLnN1YnNldCB8fCBoaWdoLmxpc3RMYW5ndWFnZXMoKVxuICBsZXQgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXhcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtSb290fSAqL1xuICBsZXQgcmVzdWx0ID0ge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBkYXRhOiB7bGFuZ3VhZ2U6IG51bGwsIHJlbGV2YW5jZTogMH0sXG4gICAgY2hpbGRyZW46IFtdXG4gIH1cblxuICBpZiAocHJlZml4ID09PSBudWxsIHx8IHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHJlZml4ID0gZGVmYXVsdFByZWZpeFxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBmYXVsdCgnRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIHZhbHVlLCBnb3QgYCVzYCcsIHZhbHVlKVxuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBzdWJzZXQubGVuZ3RoKSB7XG4gICAgY29uc3QgbmFtZSA9IHN1YnNldFtpbmRleF1cblxuICAgIGlmICghaGlnaC5nZXRMYW5ndWFnZShuYW1lKSkgY29udGludWVcblxuICAgIGNvbnN0IGN1cnJlbnQgPSBoaWdobGlnaHQobmFtZSwgdmFsdWUsIG9wdGlvbnMpXG5cbiAgICBpZiAoY3VycmVudC5kYXRhLnJlbGV2YW5jZSA+IHJlc3VsdC5kYXRhLnJlbGV2YW5jZSkgcmVzdWx0ID0gY3VycmVudFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gKiAgIFByb2dyYW1taW5nIGxhbmd1YWdlIG5hbWUuXG4gKiBAcGFyYW0ge0hpZ2hsaWdodFN5bnRheH0gc3ludGF4XG4gKiAgIGBoaWdobGlnaHQuanNgIGxhbmd1YWdlIHN5bnRheC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlLCBzeW50YXgpIHtcbiAgaGlnaC5yZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlLCBzeW50YXgpXG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYWxpYXNlcyBmb3IgYWxyZWFkeSByZWdpc3RlcmVkIGxhbmd1YWdlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj59IGxhbmd1YWdlXG4gKiAgIFByb2dyYW1taW5nIGxhbmd1YWdlIG5hbWUgb3IgYSBtYXAgb2YgYGxhbmd1YWdlYHMgdG8gYGFsaWFzYGVzIG9yIGBsaXN0YHNcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IFthbGlhc11cbiAqICAgTmV3IGFsaWFzZXMgZm9yIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCByZWdpc3RlckFsaWFzID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKChsYW5ndWFnZTogc3RyaW5nLCBhbGlhczogc3RyaW5nfEFycmF5PHN0cmluZz4pID0+IHZvaWQpICZcbiAgICogICAoKGFsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ3xBcnJheTxzdHJpbmc+PikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj59IGxhbmd1YWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gW2FsaWFzXVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChsYW5ndWFnZSwgYWxpYXMpIHtcbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHNob3VsZCBiZSBhIHN0cmluZyBpbiB0aGlzIG92ZXJsb2FkLlxuICAgICAgICBoaWdoLnJlZ2lzdGVyQWxpYXNlcyhhbGlhcywge2xhbmd1YWdlTmFtZTogbGFuZ3VhZ2V9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIGxldCBrZXlcblxuICAgICAgICBmb3IgKGtleSBpbiBsYW5ndWFnZSkge1xuICAgICAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZSwga2V5KSkge1xuICAgICAgICAgICAgaGlnaC5yZWdpc3RlckFsaWFzZXMobGFuZ3VhZ2Vba2V5XSwge2xhbmd1YWdlTmFtZToga2V5fSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIClcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIGBhbGlhc2Agb3IgYGxhbmd1YWdlYCBpcyByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhc09yTGFuZ3VhZ2VcbiAqICAgTmFtZSBvZiBhIHJlZ2lzdGVyZWQgbGFuZ3VhZ2Ugb3IgYWxpYXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgYWxpYXNPcmxhbmd1YWdlYCBpcyByZWdpc3RlcmVkLlxuICovXG5mdW5jdGlvbiByZWdpc3RlcmVkKGFsaWFzT3JMYW5ndWFnZSkge1xuICByZXR1cm4gQm9vbGVhbihoaWdoLmdldExhbmd1YWdlKGFsaWFzT3JMYW5ndWFnZSkpXG59XG5cbi8qKlxuICogTGlzdCByZWdpc3RlcmVkIGxhbmd1YWdlcy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqICAgTmFtZXMgb2YgcmVnaXN0ZXJlZCBsYW5ndWFnZS5cbiAqL1xuZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgcmV0dXJuIGhpZ2gubGlzdExhbmd1YWdlcygpXG59XG5cbi8qKiBAdHlwZSB7SGlnaGxpZ2h0RW1pdHRlcn0gKi9cbmNsYXNzIEhhc3RFbWl0dGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0T3B0aW9uc30gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8qKiBAdHlwZSB7SGlnaGxpZ2h0T3B0aW9uc30gKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgLyoqIEB0eXBlIHtSb290fSAqL1xuICAgIHRoaXMucm9vdCA9IHtcbiAgICAgIHR5cGU6ICdyb290JyxcbiAgICAgIGRhdGE6IHtsYW5ndWFnZTogbnVsbCwgcmVsZXZhbmNlOiAwfSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgICAvKiogQHR5cGUge1tSb290LCAuLi5TcGFuW11dfSAqL1xuICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5yb290XVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgYWRkVGV4dCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHJldHVyblxuXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGNvbnN0IHRhaWwgPSBjdXJyZW50LmNoaWxkcmVuW2N1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0YWlsLnZhbHVlICs9IHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgYWRkS2V5d29yZCh2YWx1ZSwgbmFtZSkge1xuICAgIHRoaXMub3Blbk5vZGUobmFtZSlcbiAgICB0aGlzLmFkZFRleHQodmFsdWUpXG4gICAgdGhpcy5jbG9zZU5vZGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SGFzdEVtaXR0ZXJ9IG90aGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBhZGRTdWJsYW5ndWFnZShvdGhlciwgbmFtZSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBjb25zdCByZXN1bHRzID0gb3RoZXIucm9vdC5jaGlsZHJlblxuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbbmFtZV19LFxuICAgICAgICBjaGlsZHJlbjogcmVzdWx0c1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5jaGlsZHJlbi5wdXNoKC4uLnJlc3VsdHMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBvcGVuTm9kZShuYW1lKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gbmFtZS5zcGxpdCgnLicpLm1hcCgoZCkgPT4gdGhpcy5vcHRpb25zLmNsYXNzUHJlZml4ICsgZClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgLyoqIEB0eXBlIHtTcGFufSAqL1xuICAgIGNvbnN0IGNoaWxkID0ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgICAgcHJvcGVydGllczoge2NsYXNzTmFtZX0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG5cbiAgICBjdXJyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgdGhpcy5zdGFjay5wdXNoKGNoaWxkKVxuICB9XG5cbiAgLyoqXG4gICAqL1xuICBjbG9zZU5vZGUoKSB7XG4gICAgdGhpcy5zdGFjay5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqL1xuICBjbG9zZUFsbE5vZGVzKCkge31cblxuICAvKipcbiAgICovXG4gIGZpbmFsaXplKCkge31cblxuICAvKipcbiAgICovXG4gIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG93bGlnaHQgPSB7XG4gIGhpZ2hsaWdodCxcbiAgaGlnaGxpZ2h0QXV0byxcbiAgcmVnaXN0ZXJMYW5ndWFnZSxcbiAgcmVnaXN0ZXJlZCxcbiAgbGlzdExhbmd1YWdlcyxcbiAgcmVnaXN0ZXJBbGlhc1xufVxuIiwgIi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBmb3JtYXR0ZXIgZnJvbSAnZm9ybWF0J1xuXG5leHBvcnQgY29uc3QgZmF1bHQgPSBPYmplY3QuYXNzaWduKGNyZWF0ZShFcnJvciksIHtcbiAgZXZhbDogY3JlYXRlKEV2YWxFcnJvciksXG4gIHJhbmdlOiBjcmVhdGUoUmFuZ2VFcnJvciksXG4gIHJlZmVyZW5jZTogY3JlYXRlKFJlZmVyZW5jZUVycm9yKSxcbiAgc3ludGF4OiBjcmVhdGUoU3ludGF4RXJyb3IpLFxuICB0eXBlOiBjcmVhdGUoVHlwZUVycm9yKSxcbiAgdXJpOiBjcmVhdGUoVVJJRXJyb3IpXG59KVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBgRUNvbnN0cnVjdG9yYCwgd2l0aCB0aGUgZm9ybWF0dGVkIGBmb3JtYXRgIGFzIGEgZmlyc3QgYXJndW1lbnQuXG4gKlxuICogQHRlbXBsYXRlIHtFcnJvcn0gRmF1bHRcbiAqIEB0ZW1wbGF0ZSB7bmV3IChyZWFzb246IHN0cmluZykgPT4gRmF1bHR9IENsYXNzXG4gKiBAcGFyYW0ge0NsYXNzfSBDb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKENvbnN0cnVjdG9yKSB7XG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIEZvcm1hdHRlZEVycm9yLmRpc3BsYXlOYW1lID0gQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgQ29uc3RydWN0b3IubmFtZVxuXG4gIHJldHVybiBGb3JtYXR0ZWRFcnJvclxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXJyb3Igd2l0aCBhIHByaW50Zi1saWtlIGZvcm1hdHRlZCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBbZm9ybWF0XVxuICAgKiAgIFRlbXBsYXRlIHN0cmluZy5cbiAgICogQHBhcmFtIHsuLi51bmtub3dufSB2YWx1ZXNcbiAgICogICBWYWx1ZXMgdG8gcmVuZGVyIGluIGBmb3JtYXRgLlxuICAgKiBAcmV0dXJucyB7RmF1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBGb3JtYXR0ZWRFcnJvcihmb3JtYXQsIC4uLnZhbHVlcykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGNvbnN0IHJlYXNvbiA9IGZvcm1hdCA/IGZvcm1hdHRlcihmb3JtYXQsIC4uLnZhbHVlcykgOiBmb3JtYXRcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHJlYXNvbilcbiAgfVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKS5UZXN0RnVuY3Rpb25Bbnl0aGluZ30gVGVzdEZ1bmN0aW9uQW55dGhpbmdcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnRbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gSGFzdENoaWxkXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuVGV4dH0gSGFzdFRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Db21tZW50fSBIYXN0Q29tbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IEhhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gSGFzdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Qcm9wZXJ0aWVzfSBIYXN0UHJvcGVydGllc1xuICogQHR5cGVkZWYge0hhc3RDaGlsZHxIYXN0Um9vdH0gSGFzdE5vZGVcbiAqIEB0eXBlZGVmIHtIYXN0Um9vdHxIYXN0RWxlbWVudH0gSGFzdFBhcmVudFxuICpcbiAqIEB0eXBlZGVmIHsnbm9ybWFsJ3wncHJlJ3wnbm93cmFwJ3wncHJlLXdyYXAnfSBXaGl0ZXNwYWNlXG4gKiBAdHlwZWRlZiB7Ym9vbGVhbn0gQnJlYWtWYWx1ZVxuICogQHR5cGVkZWYgezF8Mn0gQnJlYWtOdW1iZXJcbiAqIEB0eXBlZGVmIHsnXFxuJ30gQnJlYWtGb3JjZVxuICogQHR5cGVkZWYge0JyZWFrVmFsdWV8QnJlYWtOdW1iZXJ8dW5kZWZpbmVkfSBCcmVha0JlZm9yZVxuICogQHR5cGVkZWYge0JyZWFrVmFsdWV8QnJlYWtOdW1iZXJ8QnJlYWtGb3JjZXx1bmRlZmluZWR9IEJyZWFrQWZ0ZXJcbiAqXG4gKiBAdHlwZWRlZiBDb2xsZWN0aW9uT3B0aW9uc1xuICogQHByb3BlcnR5IHtXaGl0ZXNwYWNlfSB3aGl0ZXNwYWNlXG4gKiBAcHJvcGVydHkge0JyZWFrQmVmb3JlfSBicmVha0JlZm9yZVxuICogQHByb3BlcnR5IHtCcmVha0FmdGVyfSBicmVha0FmdGVyXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtXaGl0ZXNwYWNlfSBbd2hpdGVzcGFjZT0nbm9ybWFsJ11cbiAqICAgSW5pdGlhbCBDU1Mgd2hpdGVzcGFjZSBzZXR0aW5nIHRvIHVzZS5cbiAqL1xuXG5pbXBvcnQge2NvbnZlcnRFbGVtZW50fSBmcm9tICdoYXN0LXV0aWwtaXMtZWxlbWVudCdcbmltcG9ydCB7ZmluZEFmdGVyfSBmcm9tICd1bmlzdC11dGlsLWZpbmQtYWZ0ZXInXG5cbmNvbnN0IHNlYXJjaExpbmVGZWVkcyA9IC9cXG4vZ1xuY29uc3Qgc2VhcmNoVGFiT3JTcGFjZXMgPSAvW1xcdCBdKy9nXG5cbmNvbnN0IGJyID0gY29udmVydEVsZW1lbnQoJ2JyJylcbmNvbnN0IHAgPSBjb252ZXJ0RWxlbWVudCgncCcpXG5jb25zdCBjZWxsID0gY29udmVydEVsZW1lbnQoWyd0aCcsICd0ZCddKVxuY29uc3Qgcm93ID0gY29udmVydEVsZW1lbnQoJ3RyJylcblxuLy8gTm90ZSB0aGF0IHdlIGRvblx1MjAxOXQgbmVlZCB0byBpbmNsdWRlIHZvaWQgZWxlbWVudHMgaGVyZSBhcyB0aGV5IGRvblx1MjAxOXQgaGF2ZSB0ZXh0LlxuLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9odG1sLXZvaWQtZWxlbWVudHM+XG5jb25zdCBub3RSZW5kZXJlZCA9IGNvbnZlcnRFbGVtZW50KFtcbiAgLy8gTGlzdCBmcm9tOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jaGlkZGVuLWVsZW1lbnRzPlxuICAnZGF0YWxpc3QnLFxuICAnaGVhZCcsXG4gICdub2VtYmVkJyxcbiAgJ25vZnJhbWVzJyxcbiAgJ25vc2NyaXB0JywgLy8gQWN0IGFzIGlmIHdlIHN1cHBvcnQgc2NyaXB0aW5nLlxuICAncnAnLFxuICAnc2NyaXB0JyxcbiAgJ3N0eWxlJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RpdGxlJyxcbiAgLy8gSGlkZGVuIGF0dHJpYnV0ZS5cbiAgaGlkZGVuLFxuICAvLyBGcm9tOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTM+XG4gIGNsb3NlZERpYWxvZ1xuXSlcblxuLy8gU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWNzcy11c2VyLWFnZW50LXN0eWxlLXNoZWV0LWFuZC1wcmVzZW50YXRpb25hbC1oaW50cz5cbmNvbnN0IGJsb2NrT3JDYXB0aW9uID0gY29udmVydEVsZW1lbnQoW1xuICAnYWRkcmVzcycsIC8vIEZsb3cgY29udGVudFxuICAnYXJ0aWNsZScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnYXNpZGUnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2Jsb2NrcXVvdGUnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2JvZHknLCAvLyBQYWdlXG4gICdjYXB0aW9uJywgLy8gYHRhYmxlLWNhcHRpb25gXG4gICdjZW50ZXInLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ2RkJywgLy8gTGlzdHNcbiAgJ2RpYWxvZycsIC8vIEZsb3cgY29udGVudFxuICAnZGlyJywgLy8gTGlzdHMgKGxlZ2FjeSlcbiAgJ2RsJywgLy8gTGlzdHNcbiAgJ2R0JywgLy8gTGlzdHNcbiAgJ2RpdicsIC8vIEZsb3cgY29udGVudFxuICAnZmlndXJlJywgLy8gRmxvdyBjb250ZW50XG4gICdmaWdjYXB0aW9uJywgLy8gRmxvdyBjb250ZW50XG4gICdmb290ZXInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2Zvcm0sJywgLy8gRmxvdyBjb250ZW50XG4gICdoMScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDInLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2gzJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoNCcsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDUnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2g2JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoZWFkZXInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2hncm91cCcsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaHInLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2h0bWwnLCAvLyBQYWdlXG4gICdsZWdlbmQnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2xpc3RpbmcnLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ21haW4nLCAvLyBGbG93IGNvbnRlbnRcbiAgJ21lbnUnLCAvLyBMaXN0c1xuICAnbmF2JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdvbCcsIC8vIExpc3RzXG4gICdwJywgLy8gRmxvdyBjb250ZW50XG4gICdwbGFpbnRleHQnLCAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbiAgJ3ByZScsIC8vIEZsb3cgY29udGVudFxuICAnc2VjdGlvbicsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAndWwnLCAvLyBMaXN0c1xuICAneG1wJyAvLyBGbG93IGNvbnRlbnQgKGxlZ2FjeSlcbl0pXG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGBpbm5lclRleHRgIGdldHRlcjpcbiAqIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaW5uZXJ0ZXh0LWlkbC1hdHRyaWJ1dGU+XG4gKiBOb3RlIHRoYXQgd2UgYWN0IGFzIGlmIGBub2RlYCBpcyBiZWluZyByZW5kZXJlZCwgYW5kIGFzIGlmIHdlXHUyMDE5cmUgYVxuICogQ1NTLXN1cHBvcnRpbmcgdXNlciBhZ2VudC5cbiAqXG4gKiBAcGFyYW0ge0hhc3ROb2RlfSBub2RlXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dChub2RlLCBvcHRpb25zID0ge30pIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48SGFzdENoaWxkPn0gKi9cbiAgLy8gQHRzLWlnbm9yZSBsb29rcyBsaWtlIGEgcGFyZW50LlxuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW11cbiAgY29uc3QgYmxvY2sgPSBibG9ja09yQ2FwdGlvbihub2RlKVxuICBjb25zdCB3aGl0ZXNwYWNlID0gaW5mZXJXaGl0ZXNwYWNlKG5vZGUsIHtcbiAgICB3aGl0ZXNwYWNlOiBvcHRpb25zLndoaXRlc3BhY2UgfHwgJ25vcm1hbCcsXG4gICAgYnJlYWtCZWZvcmU6IGZhbHNlLFxuICAgIGJyZWFrQWZ0ZXI6IGZhbHNlXG4gIH0pXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZ3xCcmVha051bWJlcj59ICovXG4gIGxldCByZXN1bHRzXG4gIC8qKiBAdHlwZSB7c3RyaW5nfEJyZWFrTnVtYmVyfSAqL1xuICBsZXQgdmFsdWVcbiAgLyoqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfSAqL1xuICBsZXQgY291bnRcblxuICAvLyBUcmVhdCBgdGV4dGAgYW5kIGBjb21tZW50YCBhcyBoYXZpbmcgbm9ybWFsIHdoaXRlLXNwYWNlLlxuICAvLyBUaGlzIGRldmlhdGVzIGZyb20gdGhlIHNwZWMgYXMgaW4gdGhlIERPTSB0aGUgbm9kZVx1MjAxOXMgYC5kYXRhYCBoYXMgdG8gYmVcbiAgLy8gcmV0dXJuZWQuXG4gIC8vIElmIHlvdSB3YW50IHRoYXQgYmVoYXZpb3IgdXNlIGBoYXN0LXV0aWwtdG8tc3RyaW5nYC5cbiAgLy8gQWxsIG90aGVyIG5vZGVzIGFyZSBsYXRlciBoYW5kbGVkIGFzIGlmIHRoZXkgYXJlIGBlbGVtZW50YHMgKHNvIHRoZVxuICAvLyBhbGdvcml0aG0gYWxzbyB3b3JrcyBvbiBhIGByb290YCkuXG4gIC8vIE5vZGVzIHdpdGhvdXQgY2hpbGRyZW4gYXJlIHRyZWF0ZWQgYXMgYSB2b2lkIGVsZW1lbnQsIHNvIGBkb2N0eXBlYCBpcyB0aHVzXG4gIC8vIGlnbm9yZWQuXG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0JyB8fCBub2RlLnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgIHJldHVybiBjb2xsZWN0VGV4dChub2RlLCB7d2hpdGVzcGFjZSwgYnJlYWtCZWZvcmU6IHRydWUsIGJyZWFrQWZ0ZXI6IHRydWV9KVxuICB9XG5cbiAgLy8gMS4gIElmIHRoaXMgZWxlbWVudCBpcyBub3QgYmVpbmcgcmVuZGVyZWQsIG9yIGlmIHRoZSB1c2VyIGFnZW50IGlzIGFcbiAgLy8gICAgIG5vbi1DU1MgdXNlciBhZ2VudCwgdGhlbiByZXR1cm4gdGhlIHNhbWUgdmFsdWUgYXMgdGhlIHRleHRDb250ZW50IElETFxuICAvLyAgICAgYXR0cmlidXRlIG9uIHRoaXMgZWxlbWVudC5cbiAgLy9cbiAgLy8gICAgIE5vdGU6IHdlXHUyMDE5cmUgbm90IHN1cHBvcnRpbmcgc3R5bGVzaGVldHMgc28gd2VcdTIwMTlyZSBhY3RpbmcgYXMgaWYgdGhlIG5vZGVcbiAgLy8gICAgIGlzIHJlbmRlcmVkLlxuICAvL1xuICAvLyAgICAgSWYgeW91IHdhbnQgdGhhdCBiZWhhdmlvciB1c2UgYGhhc3QtdXRpbC10by1zdHJpbmdgLlxuICAvLyAgICAgSW1wb3J0YW50OiB3ZVx1MjAxOWxsIGhhdmUgdG8gYWNjb3VudCBmb3IgdGhpcyBsYXRlciB0aG91Z2guXG5cbiAgLy8gMi4gIExldCByZXN1bHRzIGJlIGEgbmV3IGVtcHR5IGxpc3QuXG4gIHJlc3VsdHMgPSBbXVxuXG4gIC8vIDMuICBGb3IgZWFjaCBjaGlsZCBub2RlIG5vZGUgb2YgdGhpcyBlbGVtZW50OlxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIC8vIDMuMS4gTGV0IGN1cnJlbnQgYmUgdGhlIGxpc3QgcmVzdWx0aW5nIGluIHJ1bm5pbmcgdGhlIGlubmVyIHRleHRcbiAgICAvLyAgICAgIGNvbGxlY3Rpb24gc3RlcHMgd2l0aCBub2RlLlxuICAgIC8vICAgICAgRWFjaCBpdGVtIGluIHJlc3VsdHMgd2lsbCBlaXRoZXIgYmUgYSBKYXZhU2NyaXB0IHN0cmluZyBvciBhXG4gICAgLy8gICAgICBwb3NpdGl2ZSBpbnRlZ2VyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpLlxuICAgIC8vIDMuMi4gRm9yIGVhY2ggaXRlbSBpdGVtIGluIGN1cnJlbnQsIGFwcGVuZCBpdGVtIHRvIHJlc3VsdHMuXG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgaW5uZXJUZXh0Q29sbGVjdGlvbihjaGlsZHJlbltpbmRleF0sIG5vZGUsIHtcbiAgICAgICAgd2hpdGVzcGFjZSxcbiAgICAgICAgYnJlYWtCZWZvcmU6IGluZGV4ID8gbnVsbCA6IGJsb2NrLFxuICAgICAgICBicmVha0FmdGVyOlxuICAgICAgICAgIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IGJyKGNoaWxkcmVuW2luZGV4ICsgMV0pIDogYmxvY2tcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLy8gNC4gIFJlbW92ZSBhbnkgaXRlbXMgZnJvbSByZXN1bHRzIHRoYXQgYXJlIHRoZSBlbXB0eSBzdHJpbmcuXG4gIC8vIDUuICBSZW1vdmUgYW55IHJ1bnMgb2YgY29uc2VjdXRpdmUgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCBpdGVtcyBhdCB0aGVcbiAgLy8gICAgIHN0YXJ0IG9yIGVuZCBvZiByZXN1bHRzLlxuICAvLyA2LiAgUmVwbGFjZSBlYWNoIHJlbWFpbmluZyBydW4gb2YgY29uc2VjdXRpdmUgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudFxuICAvLyAgICAgaXRlbXMgd2l0aCBhIHN0cmluZyBjb25zaXN0aW5nIG9mIGFzIG1hbnkgVSswMDBBIExJTkUgRkVFRCAoTEYpXG4gIC8vICAgICBjaGFyYWN0ZXJzIGFzIHRoZSBtYXhpbXVtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHJlcXVpcmVkIGxpbmUgYnJlYWtcbiAgLy8gICAgIGNvdW50IGl0ZW1zLlxuICBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCByZXN1bHRzLmxlbmd0aCkge1xuICAgIHZhbHVlID0gcmVzdWx0c1tpbmRleF1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoY291bnQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+IGNvdW50KSBjb3VudCA9IHZhbHVlXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGNvdW50KSByZXN1bHQucHVzaCgnXFxuJy5yZXBlYXQoY291bnQpKVxuICAgICAgY291bnQgPSAwXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICAvLyA3LiAgUmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzdHJpbmcgaXRlbXMgaW4gcmVzdWx0cy5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vKipcbiAqIDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNpbm5lci10ZXh0LWNvbGxlY3Rpb24tc3RlcHM+XG4gKlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtIYXN0UGFyZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48c3RyaW5nfEJyZWFrTnVtYmVyPn1cbiAqL1xuZnVuY3Rpb24gaW5uZXJUZXh0Q29sbGVjdGlvbihub2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3RFbGVtZW50KG5vZGUsIHBhcmVudCwgb3B0aW9ucylcbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBbXG4gICAgICBvcHRpb25zLndoaXRlc3BhY2UgPT09ICdub3JtYWwnXG4gICAgICAgID8gY29sbGVjdFRleHQobm9kZSwgb3B0aW9ucylcbiAgICAgICAgOiBjb2xsZWN0UHJlVGV4dChub2RlKVxuICAgIF1cbiAgfVxuXG4gIHJldHVybiBbXVxufVxuXG4vKipcbiAqIENvbGxlY3QgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hhc3RFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0hhc3RQYXJlbnR9IHBhcmVudFxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjb2xsZWN0RWxlbWVudChub2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgLy8gRmlyc3Qgd2UgaW5mZXIgdGhlIGB3aGl0ZS1zcGFjZWAgcHJvcGVydHkuXG4gIGNvbnN0IHdoaXRlc3BhY2UgPSBpbmZlcldoaXRlc3BhY2Uobm9kZSwgb3B0aW9ucylcbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZ3xCcmVha051bWJlcj59ICovXG4gIGxldCBpdGVtcyA9IFtdXG4gIC8qKiBAdHlwZSB7QnJlYWtOdW1iZXJ8dW5kZWZpbmVkfSAqL1xuICBsZXQgcHJlZml4XG4gIC8qKiBAdHlwZSB7QnJlYWtOdW1iZXJ8QnJlYWtGb3JjZXx1bmRlZmluZWR9ICovXG4gIGxldCBzdWZmaXhcblxuICAvLyBXZVx1MjAxOXJlIGlnbm9yaW5nIHBvaW50IDMsIGFuZCBleGl0aW5nIHdpdGhvdXQgYW55IGNvbnRlbnQgaGVyZSwgYmVjYXVzZSB3ZVxuICAvLyBkZXZpYXRlZCBmcm9tIHRoZSBzcGVjIGluIGB0b1RleHRgIGF0IHN0ZXAgMy5cbiAgaWYgKG5vdFJlbmRlcmVkKG5vZGUpKSB7XG4gICAgcmV0dXJuIGl0ZW1zXG4gIH1cblxuICAvLyBOb3RlOiB3ZSBmaXJzdCBkZXRlY3QgaWYgdGhlcmUgaXMgZ29pbmcgdG8gYmUgYSBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgdGhlXG4gIC8vIGNvbnRlbnRzLCBhcyB0aGF0IGNoYW5nZXMgdGhlIHdoaXRlLXNwYWNlIGhhbmRsaW5nLlxuXG4gIC8vIDIuICBJZiBub2RlXHUyMDE5cyBjb21wdXRlZCB2YWx1ZSBvZiBgdmlzaWJpbGl0eWAgaXMgbm90IGB2aXNpYmxlYCwgdGhlbiByZXR1cm5cbiAgLy8gICAgIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgTm90ZTogSWdub3JlZCwgYXMgZXZlcnl0aGluZyBpcyB2aXNpYmxlIGJ5IGRlZmF1bHQgdXNlciBhZ2VudCBzdHlsZXMuXG5cbiAgLy8gMy4gIElmIG5vZGUgaXMgbm90IGJlaW5nIHJlbmRlcmVkLCB0aGVuIHJldHVybiBpdGVtcy4gWy4uLl1cbiAgLy9cbiAgLy8gICAgIE5vdGU6IFdlIGFscmVhZHkgZGlkIHRoaXMgYWJvdmUuXG5cbiAgLy8gU2VlIGBjb2xsZWN0VGV4dGAgZm9yIHN0ZXAgNC5cblxuICAvLyA1LiAgSWYgbm9kZSBpcyBhIGA8YnI+YCBlbGVtZW50LCB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlXG4gIC8vICAgICBVKzAwMEEgTElORSBGRUVEIChMRikgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICBpZiAoYnIobm9kZSkpIHtcbiAgICBzdWZmaXggPSAnXFxuJ1xuICB9XG5cbiAgLy8gNy4gIElmIG5vZGVcdTIwMTlzIGNvbXB1dGVkIHZhbHVlIG9mIGBkaXNwbGF5YCBpcyBgdGFibGUtcm93YCwgYW5kIG5vZGVcdTIwMTlzIENTU1xuICAvLyAgICAgYm94IGlzIG5vdCB0aGUgbGFzdCBgdGFibGUtcm93YCBib3ggb2YgdGhlIG5lYXJlc3QgYW5jZXN0b3IgYHRhYmxlYFxuICAvLyAgICAgYm94LCB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlIFUrMDAwQSBMSU5FIEZFRUQgKExGKVxuICAvLyAgICAgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGFibGVzLTI+XG4gIC8vICAgICBOb3RlOiBuZWVkcyBmdXJ0aGVyIGludmVzdGlnYXRpb24gYXMgdGhpcyBkb2VzIG5vdCBhY2NvdW50IGZvciBpbXBsaWNpdFxuICAvLyAgICAgcm93cy5cbiAgZWxzZSBpZiAocm93KG5vZGUpICYmIGZpbmRBZnRlcihwYXJlbnQsIG5vZGUsIHJvdykpIHtcbiAgICBzdWZmaXggPSAnXFxuJ1xuICB9XG5cbiAgLy8gOC4gIElmIG5vZGUgaXMgYSBgPHA+YCBlbGVtZW50LCB0aGVuIGFwcGVuZCAyIChhIHJlcXVpcmVkIGxpbmUgYnJlYWsgY291bnQpXG4gIC8vICAgICBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaXRlbXMuXG4gIGVsc2UgaWYgKHAobm9kZSkpIHtcbiAgICBwcmVmaXggPSAyXG4gICAgc3VmZml4ID0gMlxuICB9XG5cbiAgLy8gOS4gIElmIG5vZGVcdTIwMTlzIHVzZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGJsb2NrLWxldmVsIG9yIGB0YWJsZS1jYXB0aW9uYCxcbiAgLy8gICAgIHRoZW4gYXBwZW5kIDEgKGEgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCkgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mXG4gIC8vICAgICBpdGVtcy5cbiAgZWxzZSBpZiAoYmxvY2tPckNhcHRpb24obm9kZSkpIHtcbiAgICBwcmVmaXggPSAxXG4gICAgc3VmZml4ID0gMVxuICB9XG5cbiAgLy8gMS4gIExldCBpdGVtcyBiZSB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgdGhlIGlubmVyIHRleHQgY29sbGVjdGlvbiBzdGVwcyB3aXRoXG4gIC8vICAgICBlYWNoIGNoaWxkIG5vZGUgb2Ygbm9kZSBpbiB0cmVlIG9yZGVyLCBhbmQgdGhlbiBjb25jYXRlbmF0aW5nIHRoZVxuICAvLyAgICAgcmVzdWx0cyB0byBhIHNpbmdsZSBsaXN0LlxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KFxuICAgICAgaW5uZXJUZXh0Q29sbGVjdGlvbihjaGlsZHJlbltpbmRleF0sIG5vZGUsIHtcbiAgICAgICAgd2hpdGVzcGFjZSxcbiAgICAgICAgYnJlYWtCZWZvcmU6IGluZGV4ID8gdW5kZWZpbmVkIDogcHJlZml4LFxuICAgICAgICBicmVha0FmdGVyOlxuICAgICAgICAgIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IGJyKGNoaWxkcmVuW2luZGV4ICsgMV0pIDogc3VmZml4XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIC8vIDYuICBJZiBub2RlXHUyMDE5cyBjb21wdXRlZCB2YWx1ZSBvZiBgZGlzcGxheWAgaXMgYHRhYmxlLWNlbGxgLCBhbmQgbm9kZVx1MjAxOXMgQ1NTXG4gIC8vICAgICBib3ggaXMgbm90IHRoZSBsYXN0IGB0YWJsZS1jZWxsYCBib3ggb2YgaXRzIGVuY2xvc2luZyBgdGFibGUtcm93YCBib3gsXG4gIC8vICAgICB0aGVuIGFwcGVuZCBhIHN0cmluZyBjb250YWluaW5nIGEgc2luZ2xlIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTlxuICAvLyAgICAgKHRhYikgY2hhcmFjdGVyIHRvIGl0ZW1zLlxuICAvL1xuICAvLyAgICAgU2VlOiA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGFibGVzLTI+XG4gIGlmIChjZWxsKG5vZGUpICYmIGZpbmRBZnRlcihwYXJlbnQsIG5vZGUsIGNlbGwpKSB7XG4gICAgaXRlbXMucHVzaCgnXFx0JylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgcHJlLSBhbmQgc3VmZml4LlxuICBpZiAocHJlZml4KSBpdGVtcy51bnNoaWZ0KHByZWZpeClcbiAgaWYgKHN1ZmZpeCkgaXRlbXMucHVzaChzdWZmaXgpXG5cbiAgcmV0dXJuIGl0ZW1zXG59XG5cbi8qKlxuICogNC4gIElmIG5vZGUgaXMgYSBUZXh0IG5vZGUsIHRoZW4gZm9yIGVhY2ggQ1NTIHRleHQgYm94IHByb2R1Y2VkIGJ5IG5vZGUsXG4gKiAgICAgaW4gY29udGVudCBvcmRlciwgY29tcHV0ZSB0aGUgdGV4dCBvZiB0aGUgYm94IGFmdGVyIGFwcGxpY2F0aW9uIG9mIHRoZVxuICogICAgIENTUyBgd2hpdGUtc3BhY2VgIHByb2Nlc3NpbmcgcnVsZXMgYW5kIGB0ZXh0LXRyYW5zZm9ybWAgcnVsZXMsIHNldFxuICogICAgIGl0ZW1zIHRvIHRoZSBsaXN0IG9mIHRoZSByZXN1bHRpbmcgc3RyaW5ncywgYW5kIHJldHVybiBpdGVtcy5cbiAqICAgICBUaGUgQ1NTIGB3aGl0ZS1zcGFjZWAgcHJvY2Vzc2luZyBydWxlcyBhcmUgc2xpZ2h0bHkgbW9kaWZpZWQ6XG4gKiAgICAgY29sbGFwc2libGUgc3BhY2VzIGF0IHRoZSBlbmQgb2YgbGluZXMgYXJlIGFsd2F5cyBjb2xsYXBzZWQsIGJ1dCB0aGV5XG4gKiAgICAgYXJlIG9ubHkgcmVtb3ZlZCBpZiB0aGUgbGluZSBpcyB0aGUgbGFzdCBsaW5lIG9mIHRoZSBibG9jaywgb3IgaXQgZW5kc1xuICogICAgIHdpdGggYSBiciBlbGVtZW50LlxuICogICAgIFNvZnQgaHlwaGVucyBzaG91bGQgYmUgcHJlc2VydmVkLlxuICpcbiAqICAgICBOb3RlOiBTZWUgYGNvbGxlY3RUZXh0YCBhbmQgYGNvbGxlY3RQcmVUZXh0YC5cbiAqICAgICBOb3RlOiB3ZSBkb25cdTIwMTl0IGRlYWwgd2l0aCBgdGV4dC10cmFuc2Zvcm1gLCBubyBlbGVtZW50IGhhcyB0aGF0IGJ5XG4gKiAgICAgZGVmYXVsdC5cbiAqXG4gKiBTZWU6IDxodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXRleHQvI3doaXRlLXNwYWNlLXBoYXNlLTE+XG4gKlxuICogQHBhcmFtIHtIYXN0VGV4dHxIYXN0Q29tbWVudH0gbm9kZVxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29sbGVjdFRleHQobm9kZSwgb3B0aW9ucykge1xuICBjb25zdCB2YWx1ZSA9IFN0cmluZyhub2RlLnZhbHVlKVxuICAvKiogQHR5cGUge0FycmF5LjxzdHJpbmc+fSAqL1xuICBjb25zdCBsaW5lcyA9IFtdXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaEFycmF5fG51bGx9ICovXG4gIGxldCBtYXRjaFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IGVuZFxuICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXG4gIGxldCBqb2luXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoTGluZUZlZWRzLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2hMaW5lRmVlZHMuZXhlYyh2YWx1ZSlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgaW5kZXhgIGlzIHNldC5cbiAgICBlbmQgPSBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG5cbiAgICBsaW5lcy5wdXNoKFxuICAgICAgLy8gQW55IHNlcXVlbmNlIG9mIGNvbGxhcHNpYmxlIHNwYWNlcyBhbmQgdGFicyBpbW1lZGlhdGVseSBwcmVjZWRpbmcgb3JcbiAgICAgIC8vIGZvbGxvd2luZyBhIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZC5cbiAgICAgIHRyaW1BbmRDb2xsYXBzZVNwYWNlc0FuZFRhYnMoXG4gICAgICAgIC8vIFsuLi5dIGlnbm9yaW5nIGJpZGkgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIChjaGFyYWN0ZXJzIHdpdGggdGhlXG4gICAgICAgIC8vIEJpZGlfQ29udHJvbCBwcm9wZXJ0eSBbVUFYOV06IEFMTSwgTFRSLCBSVEwsIExSRS1STE8sIExSSS1QREkpIGFzIGlmXG4gICAgICAgIC8vIHRoZXkgd2VyZSBub3QgdGhlcmUuXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwNjFDXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVcXHUyMDY2LVxcdTIwNjldL2csICcnKSxcbiAgICAgICAgb3B0aW9ucy5icmVha0JlZm9yZSxcbiAgICAgICAgb3B0aW9ucy5icmVha0FmdGVyXG4gICAgICApXG4gICAgKVxuXG4gICAgc3RhcnQgPSBlbmQgKyAxXG4gIH1cblxuICAvLyBDb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrcyBhcmUgdHJhbnNmb3JtZWQgZm9yIHJlbmRlcmluZyBhY2NvcmRpbmcgdG8gdGhlXG4gIC8vIHNlZ21lbnQgYnJlYWsgdHJhbnNmb3JtYXRpb24gcnVsZXMuXG4gIC8vIFNvIGhlcmUgd2UganVtcCB0byA0LjEuMiBvZiBbQ1NTVEVYVF06XG4gIC8vIEFueSBjb2xsYXBzaWJsZSBzZWdtZW50IGJyZWFrIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBhbm90aGVyIGNvbGxhcHNpYmxlXG4gIC8vIHNlZ21lbnQgYnJlYWsgaXMgcmVtb3ZlZFxuICB3aGlsZSAoKytpbmRleCA8IGxpbmVzLmxlbmd0aCkge1xuICAgIC8vICogICBJZiB0aGUgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSBvciBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2VnbWVudFxuICAgIC8vICAgICBicmVhayBpcyB0aGUgemVyby13aWR0aCBzcGFjZSBjaGFyYWN0ZXIgKFUrMjAwQiksIHRoZW4gdGhlIGJyZWFrIGlzXG4gICAgLy8gICAgIHJlbW92ZWQsIGxlYXZpbmcgYmVoaW5kIHRoZSB6ZXJvLXdpZHRoIHNwYWNlLlxuICAgIGlmIChcbiAgICAgIGxpbmVzW2luZGV4XS5jaGFyQ29kZUF0KGxpbmVzW2luZGV4XS5sZW5ndGggLSAxKSA9PT0gMHgyMDBiIC8qIFpXU1AgKi8gfHxcbiAgICAgIChpbmRleCA8IGxpbmVzLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgbGluZXNbaW5kZXggKyAxXS5jaGFyQ29kZUF0KDApID09PSAweDIwMGIpIC8qIFpXU1AgKi9cbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmVzW2luZGV4XSlcbiAgICAgIGpvaW4gPSAnJ1xuICAgIH1cblxuICAgIC8vICogICBPdGhlcndpc2UsIGlmIHRoZSBFYXN0IEFzaWFuIFdpZHRoIHByb3BlcnR5IFtVQVgxMV0gb2YgYm90aCB0aGVcbiAgICAvLyAgICAgY2hhcmFjdGVyIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHNlZ21lbnQgYnJlYWsgaXMgRnVsbHdpZHRoLCBXaWRlLCBvclxuICAgIC8vICAgICBIYWxmd2lkdGggKG5vdCBBbWJpZ3VvdXMpLCBhbmQgbmVpdGhlciBzaWRlIGlzIEhhbmd1bCwgdGhlbiB0aGVcbiAgICAvLyAgICAgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gICAgIE5vdGU6IGlnbm9yZWQuXG4gICAgLy8gKiAgIE90aGVyd2lzZSwgaWYgdGhlIHdyaXRpbmcgc3lzdGVtIG9mIHRoZSBzZWdtZW50IGJyZWFrIGlzIENoaW5lc2UsXG4gICAgLy8gICAgIEphcGFuZXNlLCBvciBZaSwgYW5kIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSBzZWdtZW50IGJyZWFrXG4gICAgLy8gICAgIGlzIHB1bmN0dWF0aW9uIG9yIGEgc3ltYm9sIChVbmljb2RlIGdlbmVyYWwgY2F0ZWdvcnkgUCogb3IgUyopIGFuZFxuICAgIC8vICAgICBoYXMgYW4gRWFzdCBBc2lhbiBXaWR0aCBwcm9wZXJ0eSBvZiBBbWJpZ3VvdXMsIGFuZCB0aGUgY2hhcmFjdGVyIG9uXG4gICAgLy8gICAgIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBzZWdtZW50IGJyZWFrIGlzIEZ1bGx3aWR0aCwgV2lkZSwgb3IgSGFsZndpZHRoLFxuICAgIC8vICAgICBhbmQgbm90IEhhbmd1bCwgdGhlbiB0aGUgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gICAgIE5vdGU6IGlnbm9yZWQuXG5cbiAgICAvLyAqICAgT3RoZXJ3aXNlLCB0aGUgc2VnbWVudCBicmVhayBpcyBjb252ZXJ0ZWQgdG8gYSBzcGFjZSAoVSswMDIwKS5cbiAgICBlbHNlIGlmIChsaW5lc1tpbmRleF0pIHtcbiAgICAgIGlmIChqb2luKSByZXN1bHQucHVzaChqb2luKVxuICAgICAgcmVzdWx0LnB1c2gobGluZXNbaW5kZXhdKVxuICAgICAgam9pbiA9ICcgJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hhc3RUZXh0fEhhc3RDb21tZW50fSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb2xsZWN0UHJlVGV4dChub2RlKSB7XG4gIHJldHVybiBTdHJpbmcobm9kZS52YWx1ZSlcbn1cblxuLyoqXG4gKiAzLiAgRXZlcnkgY29sbGFwc2libGUgdGFiIGlzIGNvbnZlcnRlZCB0byBhIGNvbGxhcHNpYmxlIHNwYWNlIChVKzAwMjApLlxuICogNC4gIEFueSBjb2xsYXBzaWJsZSBzcGFjZSBpbW1lZGlhdGVseSBmb2xsb3dpbmcgYW5vdGhlciBjb2xsYXBzaWJsZVxuICogICAgIHNwYWNlXHUyMDE0ZXZlbiBvbmUgb3V0c2lkZSB0aGUgYm91bmRhcnkgb2YgdGhlIGlubGluZSBjb250YWluaW5nIHRoYXRcbiAqICAgICBzcGFjZSwgcHJvdmlkZWQgYm90aCBzcGFjZXMgYXJlIHdpdGhpbiB0aGUgc2FtZSBpbmxpbmUgZm9ybWF0dGluZ1xuICogICAgIGNvbnRleHRcdTIwMTRpcyBjb2xsYXBzZWQgdG8gaGF2ZSB6ZXJvIGFkdmFuY2Ugd2lkdGguIChJdCBpcyBpbnZpc2libGUsXG4gKiAgICAgYnV0IHJldGFpbnMgaXRzIHNvZnQgd3JhcCBvcHBvcnR1bml0eSwgaWYgYW55LilcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QnJlYWtCZWZvcmV9IGJyZWFrQmVmb3JlXG4gKiBAcGFyYW0ge0JyZWFrQWZ0ZXJ9IGJyZWFrQWZ0ZXJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW1BbmRDb2xsYXBzZVNwYWNlc0FuZFRhYnModmFsdWUsIGJyZWFrQmVmb3JlLCBicmVha0FmdGVyKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaEFycmF5fG51bGx9ICovXG4gIGxldCBtYXRjaFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IGVuZFxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaFRhYk9yU3BhY2VzLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2hUYWJPclNwYWNlcy5leGVjKHZhbHVlKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBpbmRleGAgaXMgc2V0LlxuICAgIGVuZCA9IG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGhcblxuICAgIC8vIElmIHdlXHUyMDE5cmUgbm90IGRpcmVjdGx5IGFmdGVyIGEgc2VnbWVudCBicmVhaywgYnV0IHRoZXJlIHdhcyB3aGl0ZSBzcGFjZSxcbiAgICAvLyBhZGQgYW4gZW1wdHkgdmFsdWUgdGhhdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgc3BhY2UuXG4gICAgaWYgKCFzdGFydCAmJiAhZW5kICYmIG1hdGNoICYmICFicmVha0JlZm9yZSkge1xuICAgICAgcmVzdWx0LnB1c2goJycpXG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICAgIH1cblxuICAgIHN0YXJ0ID0gbWF0Y2ggPyBlbmQgKyBtYXRjaFswXS5sZW5ndGggOiBlbmRcbiAgfVxuXG4gIC8vIElmIHdlIHJlYWNoZWQgdGhlIGVuZCwgdGhlcmUgd2FzIHRyYWlsaW5nIHdoaXRlIHNwYWNlLCBhbmQgdGhlcmVcdTIwMTlzIG5vXG4gIC8vIHNlZ21lbnQgYnJlYWsgYWZ0ZXIgdGhpcyBub2RlLCBhZGQgYW4gZW1wdHkgdmFsdWUgdGhhdCB3aWxsIGJlIHR1cm5lZFxuICAvLyBpbnRvIGEgc3BhY2UuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBlbmRgIGlzIGRlZmluZWQuXG4gIGlmIChzdGFydCAhPT0gZW5kICYmICFicmVha0FmdGVyKSB7XG4gICAgcmVzdWx0LnB1c2goJycpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKVxufVxuXG4vKipcbiAqIFdlIGRvblx1MjAxOXQgc3VwcG9ydCB2b2lkIGVsZW1lbnRzIGhlcmUgKHNvIGBub2JyIHdicmAgLT4gYG5vcm1hbGAgaXMgaWdub3JlZCkuXG4gKlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge1doaXRlc3BhY2V9XG4gKi9cbmZ1bmN0aW9uIGluZmVyV2hpdGVzcGFjZShub2RlLCBvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7SGFzdFByb3BlcnRpZXN9ICovXG4gIGxldCBwcm9wc1xuXG4gIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgIHByb3BzID0gbm9kZS5wcm9wZXJ0aWVzIHx8IHt9XG4gICAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcbiAgICAgIGNhc2UgJ2xpc3RpbmcnOlxuICAgICAgY2FzZSAncGxhaW50ZXh0JzpcbiAgICAgIGNhc2UgJ3htcCc6XG4gICAgICAgIHJldHVybiAncHJlJ1xuICAgICAgY2FzZSAnbm9icic6XG4gICAgICAgIHJldHVybiAnbm93cmFwJ1xuICAgICAgY2FzZSAncHJlJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLndyYXAgPyAncHJlLXdyYXAnIDogJ3ByZSdcbiAgICAgIGNhc2UgJ3RkJzpcbiAgICAgIGNhc2UgJ3RoJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLm5vV3JhcCA/ICdub3dyYXAnIDogb3B0aW9ucy53aGl0ZXNwYWNlXG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIHJldHVybiAncHJlLXdyYXAnXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLndoaXRlc3BhY2Vcbn1cblxuLyoqIEB0eXBlIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gKi9cbmZ1bmN0aW9uIGhpZGRlbihub2RlKSB7XG4gIHJldHVybiBCb29sZWFuKChub2RlLnByb3BlcnRpZXMgfHwge30pLmhpZGRlbilcbn1cblxuLyoqIEB0eXBlIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gKi9cbmZ1bmN0aW9uIGNsb3NlZERpYWxvZyhub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdkaWFsb2cnICYmICEobm9kZS5wcm9wZXJ0aWVzIHx8IHt9KS5vcGVuXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVHlwZX0gVHlwZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlByb3BzfSBQcm9wc1xuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvbkFueXRoaW5nfSBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcblxuZXhwb3J0IHZhciBmaW5kQWZ0ZXIgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICg8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFBhcmVudCwgaW5kZXg6IE5vZGV8bnVtYmVyLCB0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj4pID0+IFR8bnVsbCkgJlxuICAgKiAgKChub2RlOiBQYXJlbnQsIGluZGV4OiBOb2RlfG51bWJlciwgdGVzdD86IG51bGx8dW5kZWZpbmVkfFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmd8QXJyYXk8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZz4pID0+IE5vZGV8bnVsbClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BhcmVudH0gcGFyZW50IFBhcmVudCBub2RlXG4gICAgICogQHBhcmFtIHtOb2RlfG51bWJlcn0gaW5kZXggQ2hpbGQgb2YgYHBhcmVudGAsIG9yIGl0XHUyMDE5cyBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVsbHx1bmRlZmluZWR8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheTxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gW3Rlc3RdIGlzLWNvbXBhdGlibGUgdGVzdCAoc3VjaCBhcyBhIHR5cGUpXG4gICAgICogQHJldHVybnMge05vZGV8bnVsbH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyZW50LCBpbmRleCwgdGVzdCkge1xuICAgICAgdmFyIGlzID0gY29udmVydCh0ZXN0KVxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnR5cGUgfHwgIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgbnVtYmVyIGFzIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihpbmRleClcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGlsZCBub2RlIG9yIGluZGV4JylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGlzKHBhcmVudC5jaGlsZHJlbltpbmRleF0sIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0LCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBwYXRoLCBmcyB9IGZyb20gXCJ+L3V0aWxzL3BhdGguc2VydmVyXCI7XG5pbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tIFwifi91dGlscy9jb21waWxlLW1keC5zZXJ2ZXJcIjtcbmltcG9ydCB7IHNhdmVPYmplY3RJbkFsZ29saWEgfSBmcm9tIFwifi91dGlscy9hbGdvbGlhXCI7XG5pbXBvcnQgcmVtb3ZlTWQgZnJvbSBcInJlbW92ZS1tYXJrZG93blwiO1xuXG50eXBlIHJlbW92ZU1kID0gc3RyaW5nO1xuXG50eXBlIEZyb250bWF0dGVyID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBwdWJsaXNoZWQ6IERhdGU7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn07XG5cbmNvbnN0IGdldERpcmVjdG9yaWVzID0gKHNvdXJjZTogYW55KSA9PlxuICBmc1xuICAgIC5yZWFkZGlyU3luYyhzb3VyY2UsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgIC5maWx0ZXIoKGRpcmVudDogYW55KSA9PiBkaXJlbnQuaXNEaXJlY3RvcnkoKSlcbiAgICAubWFwKChkaXJlbnQ6IGFueSkgPT4gZGlyZW50Lm5hbWUpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgUGF0aFRvUG9zdHMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwb3N0c1wiKTtcbiAgY29uc3QgcG9zdERpcnMgPSBhd2FpdCBnZXREaXJlY3RvcmllcyhQYXRoVG9Qb3N0cyk7XG4gIGNvbnN0IHBvc3RGcm9udG1hdHRlcjogQXJyYXk8e30+ID0gcG9zdERpcnMubWFwKGFzeW5jIChwb3N0VGl0bGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcbiAgICAgIHByb2Nlc3MuY3dkKCksXG4gICAgICBcInBvc3RzXCIsXG4gICAgICBgJHtwb3N0VGl0bGV9YCxcbiAgICAgIFwiaW5kZXgubWR4XCJcbiAgICApO1xuICAgIGNvbnN0IHJvb3REaXIgPSBQYXRoVG9NRFgucmVwbGFjZSgvaW5kZXgubWR4PyQvLCBcIlwiKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBidW5kbGVNRFgoe1xuICAgICAgc291cmNlOiBmcy5yZWFkRmlsZVN5bmMoUGF0aFRvTURYLCBcInV0ZjhcIiksXG4gICAgICBjd2Q6IHJvb3REaXIsXG4gICAgfSk7XG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGNvbnRlbnQ6IHJlbW92ZU1kID0gcmVtb3ZlTWQoZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgXCJ1dGY4XCIpKTtcbiAgICBzYXZlT2JqZWN0SW5BbGdvbGlhKHtcbiAgICAgIG9iamVjdElEOiBwb3N0VGl0bGUsXG4gICAgICBjb250ZW50LFxuICAgICAgLi4ucmVzdWx0LmZyb250bWF0dGVyLFxuICAgIH0pO1xuICAgIHJldHVybiB7IC4uLnJlc3VsdC5mcm9udG1hdHRlciwgc2x1ZzogcG9zdFRpdGxlIH07XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocG9zdEZyb250bWF0dGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dJbmRleCgpIHtcbiAgY29uc3QgcG9zdHMgPSB1c2VMb2FkZXJEYXRhPEZyb250bWF0dGVyW10+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Qb3N0czwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3Q6IEZyb250bWF0dGVyKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtwb3N0LnNsdWd9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaCc7XG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCdHQzYxN1IyWEdDJywgJzNmYWE5NzFhNDE1NTA4MzUwOWQxYmI5OTFkZjdkNTE0Jyk7XG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ0Jsb2cnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVPYmplY3RJbkFsZ29saWEob2JqOiBPYmplY3QpIHtcbiAgaWYgKCEoXCJvYmplY3RJRFwiIGluIG9iaikpIHJldHVybiBudWxsXG4gIGluZGV4LnNhdmVPYmplY3Qob2JqKVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICA8aDE+Tm9haCdzIEJsb2c8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2Y4ZWU1NGJiJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1OWVVYWE1MTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPWk9HU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JWlBYSkdaQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0zUVZYRExPUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2dhcmRlbic6eydpZCc6J3JvdXRlcy9nYXJkZW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZ2FyZGVuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2dhcmRlbi1RNzZNNklUSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2dhcmRlbi8kc2x1Zyc6eydpZCc6J3JvdXRlcy9nYXJkZW4vJHNsdWcnLCdwYXJlbnRJZCc6J3JvdXRlcy9nYXJkZW4nLCdwYXRoJzonOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZ2FyZGVuLyRzbHVnLUpNNERUV080LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VzY0Nko2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2dhcmRlbi9pbmRleCc6eydpZCc6J3JvdXRlcy9nYXJkZW4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9nYXJkZW4nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZ2FyZGVuL2luZGV4LUszQU1EVEs2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VzY0Nko2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1BU0tHS0QySC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1GOEVFNTRCQi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUss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
