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
function Navbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-md dark:bg-gray-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white"
  }, "NHeinDev")), /* @__PURE__ */ React.createElement("div", {
    className: "flex md:order-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden relative mr-3 md:mr-0 md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "email-adress-icon",
    className: "block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement("button", {
    "data-collapse-toggle": "mobile-menu-3",
    type: "button",
    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "mobile-menu-3",
    "aria-expanded": "false"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "hidden w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden justify-between items-center w-full md:flex md:w-auto md:order-1",
    id: "mobile-menu-3"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/blog",
    className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    "aria-current": "page"
  }, "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/about",
    className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }, "About"))))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LHWTYKOG.css";

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
var React2 = __toESM(require("react"));

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
  let index = -1;
  const result = [];
  while (++index < node.children.length) {
    result[index] = one(node.children[index]);
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
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].call(this, ...parameters))
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
  function factory(node, index, parents) {
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
      if (!test || is(node, index, parents[parents.length - 1] || null)) {
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
  function factory(node, index, parents) {
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
      if (!test || is(node, index, parents[parents.length - 1] || null)) {
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
  function visitor(node, index, parent) {
    if (!parent || node.tagName !== "pre") {
      return;
    }
    const pre = node;
    const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;
    const className = code.properties.className || [];
    const updatedClassName = className.reduce((acc, cls) => {
      if (cls.includes(":")) {
        const [langClassName, title] = cls.split(":");
        parent.children.splice(index, 0, {
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
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convertElement(tests[index]);
  }
  return castFactory2(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].call(this, ...parameters)) {
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
    visit3(tree, "element", (node, index, parent) => {
      if (headingRank(node) && hasProperty(node, "id") && is(node, index, parent)) {
        return method(node, index, parent);
      }
    });
  };
  function inject(node) {
    node.children[behavior === "prepend" ? "unshift" : "push"](create2(node, (0, import_extend.default)(true, {}, props), toChildren(content, node)));
    return [SKIP];
  }
  function around(node, index, parent) {
    if (typeof index !== "number" || !parent)
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
    parent.children.splice(index, 1, ...nodes);
    return [SKIP, index + nodes.length];
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
  let index = -1;
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
  while (++index < subset.length) {
    const name = subset[index];
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
var findAfter = function(parent, index, test) {
  var is = convert(test);
  if (!parent || !parent.type || !parent.children) {
    throw new Error("Expected parent node");
  }
  if (typeof index === "number") {
    if (index < 0 || index === Number.POSITIVE_INFINITY) {
      throw new Error("Expected positive finite number as index");
    }
  } else {
    index = parent.children.indexOf(index);
    if (index < 0) {
      throw new Error("Expected child node or index");
    }
  }
  while (++index < parent.children.length) {
    if (is(parent.children[index], index, parent)) {
      return parent.children[index];
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
  let index = -1;
  let results;
  let value;
  let count;
  if (node.type === "text" || node.type === "comment") {
    return collectText(node, { whitespace, breakBefore: true, breakAfter: true });
  }
  results = [];
  while (++index < children.length) {
    results = results.concat(innerTextCollection(children[index], node, {
      whitespace,
      breakBefore: index ? null : block,
      breakAfter: index < children.length - 1 ? br(children[index + 1]) : block
    }));
  }
  index = -1;
  const result = [];
  while (++index < results.length) {
    value = results[index];
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
  let index = -1;
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
  while (++index < children.length) {
    items = items.concat(innerTextCollection(children[index], node, {
      whitespace,
      breakBefore: index ? void 0 : prefix,
      breakAfter: index < children.length - 1 ? br(children[index + 1]) : suffix
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
  let index = -1;
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
  while (++index < lines.length) {
    if (lines[index].charCodeAt(lines[index].length - 1) === 8203 || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 8203) {
      result.push(lines[index]);
      join = "";
    } else if (lines[index]) {
      if (join)
        result.push(join);
      result.push(lines[index]);
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
  let index = -1;
  if (!Array.isArray(className)) {
    return;
  }
  while (++index < className.length) {
    const value = String(className[index]);
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
  const Component = React2.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("header", null, /* @__PURE__ */ React2.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React2.createElement("p", null, frontmatter.description)), /* @__PURE__ */ React2.createElement("main", null, /* @__PURE__ */ React2.createElement(Component, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement("html", null, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("title", null, "Oh no!"), /* @__PURE__ */ React2.createElement(import_remix5.Meta, null), /* @__PURE__ */ React2.createElement(import_remix5.Links, null)), /* @__PURE__ */ React2.createElement("body", null, /* @__PURE__ */ React2.createElement("h1", null, "Whoops! Looks like you found an error. Sorry about that :("), /* @__PURE__ */ React2.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("strong", null, "Error message:"), " ", error.message)), /* @__PURE__ */ React2.createElement(import_remix5.Scripts, null)));
}

// route:C:\Users\Noah\dev\blog\app\routes\blog\index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
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
    return __spreadProps(__spreadValues({}, result.frontmatter), { slug: postTitle });
  });
  return Promise.all(postFrontmatter);
};
function BlogIndex() {
  const posts = (0, import_remix6.useLoaderData)();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: post.slug
  }, post.title)))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "30644d93", "entry": { "module": "/build/entry.client-LOUXGTIO.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-A6EN5P3A.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FJPFLDIC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-XY6F3DYL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "routes/blog", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-2KIRMCCQ.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-Q4R25V5U.js", "imports": ["/build/_shared/chunk-7W646J6Q.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VDFEUDBY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-30644D93.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcTm9haFxcZGV2XFxibG9nXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxOb2FoXFxkZXZcXGJsb2dcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxOb2FoXFxkZXZcXGJsb2dcXGFwcFxccm91dGVzXFxibG9nLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXE5vYWhcXGRldlxcYmxvZ1xcYXBwXFxyb3V0ZXNcXGJsb2dcXCRzbHVnLnRzeCIsICIuLi9hcHAvdXRpbHMvcGF0aC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlci50cyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLXNsdWcvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oYXMtcHJvcGVydHkvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1oZWFkaW5nLXJhbmsvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1zbHVnL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtdG8tc3RyaW5nL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtc2x1Zy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1jb2RlLXRpdGxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWh5cGUtY29kZS10aXRsZXMvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWNvZGUtdGl0bGVzL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWlzLWVsZW1lbnQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVoeXBlLWhpZ2hsaWdodC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2xpZ2h0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29tbW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dsaWdodC9saWIvY29yZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmF1bHQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC10by10ZXh0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWZpbmQtYWZ0ZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlaHlwZS1oaWdobGlnaHQvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCAicm91dGU6QzpcXFVzZXJzXFxOb2FoXFxkZXZcXGJsb2dcXGFwcFxccm91dGVzXFxibG9nXFxpbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxOb2FoXFxcXGRldlxcXFxibG9nXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTm9haFxcXFxkZXZcXFxcYmxvZ1xcXFxhcHBcXFxccm91dGVzXFxcXGJsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE5vYWhcXFxcZGV2XFxcXGJsb2dcXFxcYXBwXFxcXHJvdXRlc1xcXFxibG9nXFxcXCRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxOb2FoXFxcXGRldlxcXFxibG9nXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYmxvZ1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGlua3NGdW5jdGlvbixcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5vYWgncyBibG9nXCIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHB4LTIgc206cHgtNCBweS0yLjUgcm91bmRlZC1iLW1kIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBOSGVpbkRldlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6b3JkZXItMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gcmVsYXRpdmUgbXItMyBtZDptci0wIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGl0ZW1zLWNlbnRlciBwbC0zIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNOCA0YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04ek0yIDhhNiA2IDAgMTExMC44OSAzLjQ3Nmw0LjgxNyA0LjgxN2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC44MTYtNC44MTZBNiA2IDAgMDEyIDh6XCJcclxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZHJlc3MtaWNvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcC0yIHBsLTEwIHctZnVsbCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNtOnRleHQtc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT1cIm1vYmlsZS1tZW51LTNcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCByb3VuZGVkLWxnIG1kOmhpZGRlbiBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51LTNcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gdy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiXHJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIG1kOmZsZXggbWQ6dy1hdXRvIG1kOm9yZGVyLTFcIlxyXG4gICAgICAgICAgaWQ9XCJtb2JpbGUtbWVudS0zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC00IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOnRleHQtc20gbWQ6Zm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9ibG9nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHItNCBwbC0zIHRleHQtZ3JheS03MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNTAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgbWQ6ZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwci00IHBsLTMgdGV4dC1ncmF5LTcwMCBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgaG92ZXI6YmctZ3JheS01MCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBtZDpkYXJrOmhvdmVyOnRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBOYXZiYXIgfTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5Ob2FoJ3MgQmxvZzwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJ2hpZ2hsaWdodC5qcy9zdHlsZXMvYWdhdGUuY3NzJztcclxuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiBbXHJcblx0XHR7XHJcblx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnLFxyXG5cdFx0XHRocmVmOiBzdHlsZXNcclxuXHRcdH1cclxuXHRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMTAgcHJvc2UgbGc6cHJvc2UteGxcIj5cclxuXHRcdFx0XHQ8T3V0bGV0IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGlua3MsIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhLCBTY3JpcHRzLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcclxuaW1wb3J0IHsgZ2V0TURYQ29tcG9uZW50IH0gZnJvbSAnbWR4LWJ1bmRsZXIvY2xpZW50JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwYXRoLCBmcyB9IGZyb20gJ34vdXRpbHMvcGF0aC5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tICd+L3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlcic7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcclxuaW1wb3J0IHJlaHlwZUNvZGVUaXRsZXMgZnJvbSAncmVoeXBlLWNvZGUtdGl0bGVzJztcclxuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJztcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4vLyBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XHJcbi8vIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcclxuLy8gcHJvY2Vzcy5jd2QoKSxcclxuLy8gXCJwb3N0c1wiLFxyXG4vLyBgJHtwYXJhbXMuc2x1Z31gLFxyXG4vLyBcImluZGV4Lm1keFwiXHJcbi8vICk7XHJcbi8vIGNvbnN0IHBvc3QgPSBhd2FpdCBjb21waWxlTWR4KHBhcmFtcy5zbHVnLCBbeyBwYXRoOiBQYXRoVG9NRFggfV0pO1xyXG4vLyBpZiAoIXBvc3QpIHJldHVybiBudWxsO1xyXG5cclxuLy8gcmV0dXJuIHBvc3Q7XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG5cdGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJyk7XHJcblx0Y29uc3QgUGF0aFRvTURYID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycsIGAke3BhcmFtcy5zbHVnfWAsICdpbmRleC5tZHgnKTtcclxuXHRjb25zdCByb290RGlyID0gUGF0aFRvTURYLnJlcGxhY2UoL2luZGV4Lm1keD8kLywgJycpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBidW5kbGVNRFgoe1xyXG5cdFx0XHRzb3VyY2U6IGZzLnJlYWRGaWxlU3luYyhQYXRoVG9NRFgsICd1dGY4JyksXHJcblx0XHRcdGN3ZDogcm9vdERpcixcclxuXHRcdFx0eGRtT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5yZWh5cGVQbHVnaW5zID0gW1xyXG4gICAgICAgICAgLi4uKG9wdGlvbnM/LnJlaHlwZVBsdWdpbnMgPz8gW10pLFxyXG4gICAgICAgICAgcmVoeXBlSGlnaGxpZ2h0LFxyXG4gICAgICAgICAgcmVoeXBlU2x1ZyxcclxuICAgICAgICAgIHJlaHlwZUNvZGVUaXRsZXMsXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFsnYW5jaG9yJ11cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG5cdFx0fX0pO1xyXG5cdFx0aWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xyXG5cdFx0Y29uc3QgeyBjb2RlLCBmcm9udG1hdHRlciB9ID0gcmVzdWx0O1xyXG5cdFx0cmV0dXJuIHsgY29kZSwgZnJvbnRtYXR0ZXIgfTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBEaWRuJ3QgZmluZCBhbnkgYmxvZyBwb3N0IGF0IGJsb2cvJHtwYXJhbXMuc2x1Z31gKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcclxuXHRjb25zdCB7IGNvZGUsIGZyb250bWF0dGVyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcblx0Y29uc3QgQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRNRFhDb21wb25lbnQoY29kZSksIFsgY29kZSBdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHQ8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0PHA+e2Zyb250bWF0dGVyLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdDxtYWluPlxyXG5cdFx0XHRcdDxDb21wb25lbnQgLz5cclxuXHRcdFx0PC9tYWluPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XHJcblx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0cmV0dXJuIChcclxuXHRcdDxodG1sPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+T2ggbm8hPC90aXRsZT5cclxuXHRcdFx0XHQ8TWV0YSAvPlxyXG5cdFx0XHRcdDxMaW5rcyAvPlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxoMT5XaG9vcHMhIExvb2tzIGxpa2UgeW91IGZvdW5kIGFuIGVycm9yLiBTb3JyeSBhYm91dCB0aGF0IDooPC9oMT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPkVycm9yIG1lc3NhZ2U6PC9zdHJvbmc+IHtlcnJvci5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxTY3JpcHRzIC8+XHJcblx0XHRcdDwvYm9keT5cclxuXHRcdDwvaHRtbD5cclxuXHQpO1xyXG59XHJcbiIsICJjb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5leHBvcnQgeyBwYXRoLCBmcyB9O1xyXG4iLCAiaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XHJcbnR5cGUgR2l0SHViRmlsZSA9IHsgcGF0aDogc3RyaW5nIH07XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xyXG5pbXBvcnQgcmVoeXBlQ29kZVRpdGxlcyBmcm9tICdyZWh5cGUtY29kZS10aXRsZXMnO1xyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnO1xyXG5pbXBvcnQgcmVoeXBlSGlnaGxpZ2h0IGZyb20gXCJyZWh5cGUtaGlnaGxpZ2h0XCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb21waWxlTWR4KHNsdWc6IHN0cmluZywgZ2l0aHViRmlsZXM6IEFycmF5PEdpdEh1YkZpbGU+KSB7XHJcbiAgY29uc3QgaW5kZXhSZWdleCA9IG5ldyBSZWdFeHAoYCR7c2x1Z31cXFxcL2luZGV4Lm1keD8kYCk7XHJcbiAgY29uc3QgaW5kZXhGaWxlID0gZ2l0aHViRmlsZXMuZmluZCgoeyBwYXRoIH0pID0+IGluZGV4UmVnZXgudGVzdChwYXRoKSk7XHJcbiAgaWYgKCFpbmRleEZpbGUpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHJvb3REaXIgPSBpbmRleEZpbGUucGF0aC5yZXBsYWNlKC9pbmRleC5tZHg/JC8sIFwiXCIpO1xyXG4gIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhpbmRleEZpbGUucGF0aCwgXCJ1dGY4XCIpO1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XHJcbiAgICAgIHByb2Nlc3MuZW52LkVTQlVJTERfQklOQVJZX1BBVEggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgcHJvY2Vzcy5jd2QoKSxcclxuICAgICAgICBcIm5vZGVfbW9kdWxlc1wiLFxyXG4gICAgICAgIFwiZXNidWlsZFwiLFxyXG4gICAgICAgIFwiZXNidWlsZC5leGVcIlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvY2Vzcy5lbnYuRVNCVUlMRF9CSU5BUllfUEFUSCA9IHBhdGguam9pbihcclxuICAgICAgICBwcm9jZXNzLmN3ZCgpLFxyXG4gICAgICAgIFwibm9kZV9tb2R1bGVzXCIsXHJcbiAgICAgICAgXCJlc2J1aWxkXCIsXHJcbiAgICAgICAgXCJiaW5cIixcclxuICAgICAgICBcImVzYnVpbGRcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBmcm9udG1hdHRlciwgY29kZSB9ID0gYXdhaXQgYnVuZGxlTURYKHtcclxuICAgICAgc291cmNlLFxyXG4gICAgICBjd2Q6IHJvb3REaXIsXHJcbiAgICAgIHhkbU9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMucmVoeXBlUGx1Z2lucyA9IFtcclxuICAgICAgICAgIC4uLihvcHRpb25zPy5yZWh5cGVQbHVnaW5zID8/IFtdKSxcclxuICAgICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcclxuICAgICAgICAgIHJlaHlwZVNsdWcsXHJcbiAgICAgICAgICByZWh5cGVDb2RlVGl0bGVzLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICByZWh5cGVBdXRvbGlua0hlYWRpbmdzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbJ2FuY2hvciddXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgY29kZSwgZnJvbnRtYXR0ZXIgfTtcclxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgY29uc29sZS5lcnJvcihgQ29tcGlsYXRpb24gZXJyb3IgZm9yIHNsdWc6IGAsIHNsdWcpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjb21waWxlTWR4IH07XHJcbmV4cG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJtZHgtYnVuZGxlclwiIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqL1xuXG5pbXBvcnQgU2x1Z2dlciBmcm9tICdnaXRodWItc2x1Z2dlcidcbmltcG9ydCB7aGFzUHJvcGVydHl9IGZyb20gJ2hhc3QtdXRpbC1oYXMtcHJvcGVydHknXG5pbXBvcnQge2hlYWRpbmdSYW5rfSBmcm9tICdoYXN0LXV0aWwtaGVhZGluZy1yYW5rJ1xuaW1wb3J0IHt0b1N0cmluZ30gZnJvbSAnaGFzdC11dGlsLXRvLXN0cmluZydcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5cbmNvbnN0IHNsdWdzID0gbmV3IFNsdWdnZXIoKVxuXG4vKipcbiAqIFBsdWdpbiB0byBhZGQgYGlkYHMgdG8gaGVhZGluZ3MuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxBcnJheTx2b2lkPiwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlaHlwZVNsdWcoKSB7XG4gIHJldHVybiAodHJlZSkgPT4ge1xuICAgIHNsdWdzLnJlc2V0KClcblxuICAgIHZpc2l0KHRyZWUsICdlbGVtZW50JywgKG5vZGUpID0+IHtcbiAgICAgIGlmIChoZWFkaW5nUmFuayhub2RlKSAmJiBub2RlLnByb3BlcnRpZXMgJiYgIWhhc1Byb3BlcnR5KG5vZGUsICdpZCcpKSB7XG4gICAgICAgIG5vZGUucHJvcGVydGllcy5pZCA9IHNsdWdzLnNsdWcodG9TdHJpbmcobm9kZSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwgInZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENoZWNrIGlmIGBub2RlYCBoYXMgYSBzZXQgYG5hbWVgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvKiogQHR5cGUge3Vua25vd259ICovXG4gIHZhciB2YWx1ZSA9XG4gICAgbmFtZSAmJlxuICAgIG5vZGUgJiZcbiAgICB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiZcbiAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYSBub2RlLlxuICAgIG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGFuIGVsZW1lbnQuXG4gICAgbm9kZS5wcm9wZXJ0aWVzICYmXG4gICAgLy8gQHRzLWlnbm9yZSBMb29rcyBsaWtlIGFuIGVsZW1lbnQuXG4gICAgb3duLmNhbGwobm9kZS5wcm9wZXJ0aWVzLCBuYW1lKSAmJlxuICAgIC8vIEB0cy1pZ25vcmUgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgIG5vZGUucHJvcGVydGllc1tuYW1lXVxuXG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBmYWxzZVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge1Jvb3R8UGFyZW50WydjaGlsZHJlbiddW251bWJlcl19IE5vZGVcbiAqL1xuXG4vKipcbiAqIFJhbmsgb2YgYSBoZWFkaW5nOiBIMSAtPiAxLCBIMiAtPiAyLCBldGMuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkaW5nUmFuayhub2RlKSB7XG4gIHZhciBuYW1lID1cbiAgICAobm9kZSAmJiBub2RlLnR5cGUgPT09ICdlbGVtZW50JyAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgfHwgJydcbiAgdmFyIGNvZGUgPVxuICAgIG5hbWUubGVuZ3RoID09PSAyICYmIG5hbWUuY2hhckNvZGVBdCgwKSA9PT0gMTA0IC8qIGBoYCAqL1xuICAgICAgPyBuYW1lLmNoYXJDb2RlQXQoMSlcbiAgICAgIDogMFxuICByZXR1cm4gY29kZSA+IDQ4IC8qIGAwYCAqLyAmJiBjb2RlIDwgNTUgLyogYDdgICovID8gY29kZSAtIDQ4IC8qIGAwYCAqLyA6IG51bGxcbn1cbiIsICIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqICAgR2V0IHRoZSBwbGFpbi10ZXh0IHZhbHVlIG9mIGEgaGFzdCBub2RlLlxuICogQGxvbmdkZXNjcmlwdGlvblxuICogICAjIyBVc2VcbiAqXG4gKiAgIGBgYGpzXG4gKiAgIGltcG9ydCB7aH0gZnJvbSAnaGFzdHNjcmlwdCdcbiAqICAgaW1wb3J0IHt0b1N0cmluZ30gZnJvbSAnaGFzdC11dGlsLXRvLXN0cmluZydcbiAqXG4gKiAgIHRvU3RyaW5nKGgoJ3AnLCAnQWxwaGEnKSlcbiAqICAgLy89PiAnQWxwaGEnXG4gKiAgIHRvU3RyaW5nKGgoJ2RpdicsIFtoKCdiJywgJ0JvbGQnKSwgJyBhbmQgJywgaCgnaScsICdpdGFsaWMnKSwgJy4nXSkpXG4gKiAgIC8vPT4gJ0JvbGQgYW5kIGl0YWxpYy4nXG4gKiAgIGBgYFxuICpcbiAqICAgIyMgQVBJXG4gKlxuICogICAjIyMgYHRvU3RyaW5nKG5vZGUpYFxuICpcbiAqICAgVHJhbnNmb3JtIGEgbm9kZSB0byBhIHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge1Jvb3R8Um9vdFsnY2hpbGRyZW4nXVtudW1iZXJdfSBOb2RlXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBsYWluLXRleHQgdmFsdWUgb2YgYSBoYXN0IG5vZGUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcobm9kZSkge1xuICAvLyBcdTIwMUNUaGUgY29uY2F0ZW5hdGlvbiBvZiBkYXRhIG9mIGFsbCB0aGUgVGV4dCBub2RlIGRlc2NlbmRhbnRzIG9mIHRoZSBjb250ZXh0XG4gIC8vIG9iamVjdCwgaW4gdHJlZSBvcmRlci5cdTIwMURcbiAgaWYgKCdjaGlsZHJlbicgaW4gbm9kZSkge1xuICAgIHJldHVybiBhbGwobm9kZSlcbiAgfVxuXG4gIC8vIFx1MjAxQ0NvbnRleHQgb2JqZWN0XHUyMDE5cyBkYXRhLlx1MjAxRFxuICByZXR1cm4gJ3ZhbHVlJyBpbiBub2RlID8gbm9kZS52YWx1ZSA6ICcnXG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbmUobm9kZSkge1xuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICByZXR1cm4gbm9kZS52YWx1ZVxuICB9XG5cbiAgcmV0dXJuICdjaGlsZHJlbicgaW4gbm9kZSA/IGFsbChub2RlKSA6ICcnXG59XG5cbi8qKlxuICogQHBhcmFtIHtSb290fEVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGFsbChub2RlKSB7XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBvbmUobm9kZS5jaGlsZHJlbltpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSBWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHMsIENPTlRJTlVFLCBTS0lQLCBFWElUfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbmV4cG9ydCB7Q09OVElOVUUsIFNLSVAsIEVYSVR9XG5cbi8qKlxuICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICpcbiAqIEBwYXJhbSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAqIEBwYXJhbSB0ZXN0IFRlc3QsIG9wdGlvbmFsXG4gKiBAcGFyYW0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICogQHBhcmFtIHJldmVyc2UgRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gdmlzaXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHJldHVybiB2aXNpdG9yKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsLFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICApXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuSW5kZXh9IEluZGV4XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5BY3Rpb25UdXBsZX0gQWN0aW9uVHVwbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IFZpc2l0b3JcbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5pbXBvcnQge2NvbG9yfSBmcm9tICcuL2NvbG9yLmpzJ1xuXG4vKipcbiAqIENvbnRpbnVlIHRyYXZlcnNpbmcgYXMgbm9ybWFsXG4gKi9cbmV4cG9ydCBjb25zdCBDT05USU5VRSA9IHRydWVcbi8qKlxuICogRG8gbm90IHRyYXZlcnNlIHRoaXMgbm9kZVx1MjAxOXMgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFNLSVAgPSAnc2tpcCdcbi8qKlxuICogU3RvcCB0cmF2ZXJzaW5nIGltbWVkaWF0ZWx5XG4gKi9cbmV4cG9ydCBjb25zdCBFWElUID0gZmFsc2VcblxuLyoqXG4gKiBWaXNpdCBjaGlsZHJlbiBvZiB0cmVlIHdoaWNoIHBhc3MgYSB0ZXN0XG4gKlxuICogQHBhcmFtIHRyZWUgQWJzdHJhY3Qgc3ludGF4IHRyZWUgdG8gd2Fsa1xuICogQHBhcmFtIHRlc3QgVGVzdCBub2RlLCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIFZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2Ugb3JkZXIsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdFBhcmVudHMgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlLCBDaGVjayBleHRlbmRzIFRlc3Q+KHRyZWU6IFRyZWUsIHRlc3Q6IENoZWNrLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZT4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdHJlZVxuICAgICAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPE5vZGU+fSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJzZV1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3Igbm8gdmlzaXRvciBnaXZlbiwgc28gYHZpc2l0b3JgIGlzIHRlc3QuXG4gICAgICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgICAgIHRlc3QgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzID0gY29udmVydCh0ZXN0KVxuICAgICAgY29uc3Qgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICAgICAgZmFjdG9yeSh0cmVlLCBudWxsLCBbXSkoKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtudW1iZXI/fSBpbmRleFxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBmYWN0b3J5KG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBodXNoXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUgIT09IG51bGwgPyBub2RlIDoge31cbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xuICAgICAgICBsZXQgbmFtZVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuYW1lID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50YWdOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmlzaXQsICduYW1lJywge1xuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICdub2RlICgnICtcbiAgICAgICAgICAgICAgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgK1xuICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpc2l0XG5cbiAgICAgICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHtBY3Rpb25UdXBsZX0gKi9cbiAgICAgICAgICBsZXQgcmVzdWx0ID0gW11cbiAgICAgICAgICAvKiogQHR5cGUge0FjdGlvblR1cGxlfSAqL1xuICAgICAgICAgIGxldCBzdWJyZXN1bHRcbiAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICBsZXQgb2Zmc2V0XG4gICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGFyZW50Pn0gKi9cbiAgICAgICAgICBsZXQgZ3JhbmRwYXJlbnRzXG5cbiAgICAgICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rcyBsaWtlIGEgcGFyZW50LlxuICAgICAgICAgICAgb2Zmc2V0ID0gKHJldmVyc2UgPyBub2RlLmNoaWxkcmVuLmxlbmd0aCA6IC0xKSArIHN0ZXBcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGUpXG5cbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgICAgIGlmIChzdWJyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIEBwYXJhbSB7VmlzaXRvclJlc3VsdH0gdmFsdWVcbiAqIEByZXR1cm5zIHtBY3Rpb25UdXBsZX1cbiAqL1xuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IFR5cGVcbiAqIEB0eXBlZGVmIHtPYmplY3Q8c3RyaW5nLCB1bmtub3duPn0gUHJvcHNcbiAqXG4gKiBAdHlwZWRlZiB7bnVsbHx1bmRlZmluZWR8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheS48VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZz59IFRlc3RcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0XG4gKlxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvbkFueXRoaW5nXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtib29sZWFufHZvaWR9XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IFhcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25QcmVkaWNhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge25vZGUgaXMgWH1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBc3NlcnRBbnl0aGluZ1xuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdXG4gKiBAcGFyYW0ge1BhcmVudHxudWxsfHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBZXG4gKiBAY2FsbGJhY2sgQXNzZXJ0UHJlZGljYXRlXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge25vZGUgaXMgWX1cbiAqL1xuXG5leHBvcnQgY29uc3QgaXMgPVxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIHRlc3QuXG4gICAqIFdoZW4gYSBgcGFyZW50YCBub2RlIGlzIGtub3duIHRoZSBgaW5kZXhgIG9mIG5vZGUgc2hvdWxkIGFsc28gYmUgZ2l2ZW4uXG4gICAqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4obm9kZTogdW5rbm93biwgdGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+fEFycmF5LjxUWyd0eXBlJ118UGFydGlhbDxUPnxUZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD4+LCBpbmRleD86IG51bWJlcnxudWxsfHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50fG51bGx8dW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBUKSAmXG4gICAqICAgKChub2RlPzogdW5rbm93biwgdGVzdD86IFRlc3QsIGluZGV4PzogbnVtYmVyfG51bGx8dW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnR8bnVsbHx1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBib29sZWFuKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0LlxuICAgICAqIFdoZW4gYSBgcGFyZW50YCBub2RlIGlzIGtub3duIHRoZSBgaW5kZXhgIG9mIG5vZGUgc2hvdWxkIGFsc28gYmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtub2RlXSBOb2RlIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF1cbiAgICAgKiBXaGVuIG51bGxpc2gsIGNoZWNrcyBpZiBgbm9kZWAgaXMgYSBgTm9kZWAuXG4gICAgICogV2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGBmdW5jdGlvbiAobm9kZSkge3JldHVybiBub2RlLnR5cGUgPT09IHRlc3R9YC5cbiAgICAgKiBXaGVuIGBmdW5jdGlvbmAgY2hlY2tzIGlmIGZ1bmN0aW9uIHBhc3NlZCB0aGUgbm9kZSBpcyB0cnVlLlxuICAgICAqIFdoZW4gYG9iamVjdGAsIGNoZWNrcyB0aGF0IGFsbCBrZXlzIGluIHRlc3QgYXJlIGluIG5vZGUsIGFuZCB0aGF0IHRoZXkgaGF2ZSAoc3RyaWN0bHkpIGVxdWFsIHZhbHVlcy5cbiAgICAgKiBXaGVuIGBhcnJheWAsIGNoZWNrcyBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx8dW5kZWZpbmVkfSBbaW5kZXhdIFBvc2l0aW9uIG9mIGBub2RlYCBpbiBgcGFyZW50YFxuICAgICAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XSBQYXJlbnQgb2YgYG5vZGVgXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbY29udGV4dF0gQ29udGV4dCBvYmplY3QgdG8gaW52b2tlIGB0ZXN0YCB3aXRoXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGVzdCBwYXNzZWQgYW5kIGBub2RlYCBpcyBhIGBOb2RlYCAob2JqZWN0IHdpdGggYHR5cGVgIHNldCB0byBub24tZW1wdHkgYHN0cmluZ2ApLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gICAgZnVuY3Rpb24gaXMobm9kZSwgdGVzdCwgaW5kZXgsIHBhcmVudCwgY29udGV4dCkge1xuICAgICAgY29uc3QgY2hlY2sgPSBjb252ZXJ0KHRlc3QpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBpbmRleCAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIGluZGV4IDwgMCB8fFxuICAgICAgICAgIGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHBhcmVudCAhPT0gbnVsbCAmJlxuICAgICAgICAoIWlzKHBhcmVudCkgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocGFyZW50ID09PSB1bmRlZmluZWQgfHwgcGFyZW50ID09PSBudWxsKSAhPT1cbiAgICAgICAgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBib3RoIHBhcmVudCBhbmQgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBub2RlLlxuICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlICYmIHR5cGVvZiBub2RlLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQm9vbGVhbihjaGVjay5jYWxsKGNvbnRleHQsIG5vZGUsIGluZGV4LCBwYXJlbnQpKVxuICAgICAgICA6IGZhbHNlXG4gICAgfVxuICApXG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgTm9kZT4odGVzdDogVFsndHlwZSddfFBhcnRpYWw8VD58VGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+KSA9PiBBc3NlcnRQcmVkaWNhdGU8VD4pICZcbiAgICogICAoKHRlc3Q/OiBUZXN0KSA9PiBBc3NlcnRBbnl0aGluZylcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiBhc3NlcnRpb24gZnJvbSBhIGNoZWNrLlxuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogV2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICAgICAqIFdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgZnVuY3Rpb24gKG5vZGUpIHtyZXR1cm4gbm9kZS50eXBlID09PSB0ZXN0fWAuXG4gICAgICogV2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gICAgICogV2hlbiBgYXJyYXlgLCBjaGVja3MgYW55IG9uZSBvZiB0aGUgc3VidGVzdHMgcGFzcy5cbiAgICAgKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgIGlmICh0ZXN0ID09PSB1bmRlZmluZWQgfHwgdGVzdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb2tcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0ZXN0KSA/IGFueUZhY3RvcnkodGVzdCkgOiBwcm9wc0ZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYXN0RmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0JylcbiAgICB9XG4gIClcbi8qKlxuICogQHBhcmFtIHtBcnJheS48VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZz59IHRlc3RzXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48QXNzZXJ0QW55dGhpbmc+fSAqL1xuICBjb25zdCBjaGVja3MgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdGVzdHMubGVuZ3RoKSB7XG4gICAgY2hlY2tzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFueSlcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSB7dW5rbm93bltdfSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYW55KC4uLnBhcmFtZXRlcnMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGVja3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5jYWxsKHRoaXMsIC4uLnBhcmFtZXRlcnMpKSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byBhc3NlcnQgZWFjaCBwcm9wZXJ0eSBpbiBgdGVzdGAgaXMgcmVwcmVzZW50ZWQgaW4gYG5vZGVgLCBhbmQgZWFjaFxuICogdmFsdWVzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge1Byb3BzfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBwcm9wc0ZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGNhc3RGYWN0b3J5KGFsbClcblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYWxsKG5vZGUpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQga2V5XG5cbiAgICBmb3IgKGtleSBpbiBjaGVjaykge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogaHVzaCwgaXQgc3VyZSB3b3JrcyBhcyBhbiBpbmRleC5cbiAgICAgIGlmIChub2RlW2tleV0gIT09IGNoZWNrW2tleV0pIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGVcdTIwMTlzIHR5cGVcbiAqIGZvciBzYWlkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1R5cGV9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeSh0eXBlKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZVx1MjAxOXMgdHlwZVxuICogZm9yIHNhaWQgc3RyaW5nLlxuICogQHBhcmFtIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gY2FzdEZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGFzc2VydGlvblxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHtBcnJheS48dW5rbm93bj59IHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhc3NlcnRpb24oLi4ucGFyYW1ldGVycykge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHNwcmVhZGluZyBpcyBmaW5lLlxuICAgIHJldHVybiBCb29sZWFuKGNoZWNrLmNhbGwodGhpcywgLi4ucGFyYW1ldGVycykpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwgIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvcihkKSB7XG4gIHJldHVybiAnXFx1MDAxQlszM20nICsgZCArICdcXHUwMDFCWzM5bSdcbn1cbiIsICJpbXBvcnQgeyB2aXNpdCB9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnO1xuZnVuY3Rpb24gcmVoeXBlQ29kZVRpdGxlcygpIHtcbiAgICByZXR1cm4gKHRyZWUpID0+IHZpc2l0KHRyZWUsICdlbGVtZW50JywgdmlzaXRvcik7XG4gICAgZnVuY3Rpb24gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgICAgIGlmICghcGFyZW50IHx8IG5vZGUudGFnTmFtZSAhPT0gJ3ByZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmUgPSBub2RlO1xuICAgICAgICBjb25zdCBjb2RlID0gQXJyYXkuaXNBcnJheShwcmUuY2hpbGRyZW4pID8gcHJlLmNoaWxkcmVuWzBdIDogcHJlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lIHx8IFtdO1xuICAgICAgICBjb25zdCB1cGRhdGVkQ2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlZHVjZSgoYWNjLCBjbHMpID0+IHtcbiAgICAgICAgICAgIC8vIElmIGNscyBpcyBzb21ldGhpbmcgbGlrZS4uLlxuICAgICAgICAgICAgLy8gaS5lLiBsYW5ndWFnZS10eXBlc2NyaXB0OmxpYi9tZHgudHNcbiAgICAgICAgICAgIGlmIChjbHMuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgICAgIC8vIFNwbGl0IG9uIHRoZSAnOidcbiAgICAgICAgICAgICAgICBjb25zdCBbbGFuZ0NsYXNzTmFtZSwgdGl0bGVdID0gY2xzLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0aXRsZSBibG9jayB0byB0aGUgdHJlZSBhdCB0aGUgaW5kZXggcHJpb3JcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgPHByZSAvPiB3aXRoIHRoZSB0aXRsZSB3ZSBmb3VuZC5cbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0aXRsZSB9XSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBjbGFzc05hbWU6IFsncmVoeXBlLWNvZGUtdGl0bGUnXSB9LFxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGxhbmdDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xzLnNsaWNlKDAsIDkpID09PSAnbGFuZ3VhZ2UtJykge1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGNscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcHJlLmNoaWxkcmVuID0gW3sgLi4uY29kZSwgcHJvcGVydGllczogeyBjbGFzc05hbWU6IHVwZGF0ZWRDbGFzc05hbWUgfSB9XTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWh5cGVDb2RlVGl0bGVzO1xuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICovXG5cbi8qKlxuICogSW52b2tlZCB3aGVuIGEgbm9kZSAobWF0Y2hpbmcgdGVzdCwgaWYgZ2l2ZW4pIGlzIGZvdW5kLlxuICogVmlzaXRvcnMgYXJlIGZyZWUgdG8gdHJhbnNmb3JtIG5vZGUuXG4gKiBUaGV5IGNhbiBhbHNvIHRyYW5zZm9ybSB0aGUgcGFyZW50IG9mIG5vZGUgKHRoZSBsYXN0IG9mIGFuY2VzdG9ycykuXG4gKiBSZXBsYWNpbmcgbm9kZSBpdHNlbGYsIGlmIGBTS0lQYCBpcyBub3QgcmV0dXJuZWQsIHN0aWxsIGNhdXNlcyBpdHMgZGVzY2VuZGFudHMgdG8gYmUgdmlzaXRlZC5cbiAqIElmIGFkZGluZyBvciByZW1vdmluZyBwcmV2aW91cyBzaWJsaW5ncyAob3IgbmV4dCBzaWJsaW5ncywgaW4gY2FzZSBvZiByZXZlcnNlKSBvZiBub2RlLFxuICogdmlzaXRvciBzaG91bGQgcmV0dXJuIGEgbmV3IGluZGV4IChudW1iZXIpIHRvIHNwZWNpZnkgdGhlIHNpYmxpbmcgdG8gdHJhdmVyc2UgYWZ0ZXIgbm9kZSBpcyB0cmF2ZXJzZWQuXG4gKiBBZGRpbmcgb3IgcmVtb3ZpbmcgbmV4dCBzaWJsaW5ncyBvZiBub2RlIChvciBwcmV2aW91cyBzaWJsaW5ncywgaW4gY2FzZSBvZiByZXZlcnNlKVxuICogaXMgaGFuZGxlZCBhcyBleHBlY3RlZCB3aXRob3V0IG5lZWRpbmcgdG8gcmV0dXJuIGEgbmV3IGluZGV4LlxuICogUmVtb3ZpbmcgdGhlIGNoaWxkcmVuIHByb3BlcnR5IG9mIGFuIGFuY2VzdG9yIHN0aWxsIHJlc3VsdHMgaW4gdGhlbSBiZWluZyB0cmF2ZXJzZWQuXG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBWXG4gKiBAY2FsbGJhY2sgVmlzaXRvclxuICogQHBhcmFtIHtWfSBub2RlIEZvdW5kIG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IGluZGV4IFBvc2l0aW9uIG9mIGBub2RlYCBpbiBgcGFyZW50YFxuICogQHBhcmFtIHtQYXJlbnR8bnVsbH0gcGFyZW50IFBhcmVudCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG5leHBvcnQgY29uc3QgdmlzaXQgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFQgZXh0ZW5kcyBOb2RlPih0cmVlOiBOb2RlLCB0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj4sIHZpc2l0b3I6IFZpc2l0b3I8VD4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKCh0cmVlOiBOb2RlLCB0ZXN0OiBUZXN0LCB2aXNpdG9yOiBWaXNpdG9yPE5vZGU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3QgdGVzdCBUZXN0IG5vZGVcbiAgICAgKiBAcGFyYW0ge1Zpc2l0b3I8Tm9kZT59IHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3R9IFRlc3RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtDT05USU5VRXxTS0lQfEVYSVR9IEFjdGlvbiBVbmlvbiBvZiB0aGUgYWN0aW9uIHR5cGVzXG4gKiBAdHlwZWRlZiB7bnVtYmVyfSBJbmRleCBNb3ZlIHRvIHRoZSBzaWJsaW5nIGF0IGluZGV4IG5leHQgKGFmdGVyIG5vZGUgaXRzZWxmIGlzIGNvbXBsZXRlbHkgdHJhdmVyc2VkKS4gVXNlZnVsIGlmIG11dGF0aW5nIHRoZSB0cmVlLCBzdWNoIGFzIHJlbW92aW5nIHRoZSBub2RlIHRoZSB2aXNpdG9yIGlzIGN1cnJlbnRseSBvbiwgb3IgYW55IG9mIGl0cyBwcmV2aW91cyBzaWJsaW5ncyAob3IgbmV4dCBzaWJsaW5ncywgaW4gY2FzZSBvZiByZXZlcnNlKSBSZXN1bHRzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBjaGlsZHJlbi5sZW5ndGggc3RvcCB0cmF2ZXJzaW5nIHRoZSBwYXJlbnRcbiAqIEB0eXBlZGVmIHtbKEFjdGlvbnxudWxsfHVuZGVmaW5lZHx2b2lkKT8sIChJbmRleHxudWxsfHVuZGVmaW5lZCk/XX0gQWN0aW9uVHVwbGUgTGlzdCB3aXRoIG9uZSBvciB0d28gdmFsdWVzLCB0aGUgZmlyc3QgYW4gYWN0aW9uLCB0aGUgc2Vjb25kIGFuIGluZGV4LlxuICogQHR5cGVkZWYge251bGx8dW5kZWZpbmVkfEFjdGlvbnxJbmRleHxBY3Rpb25UdXBsZXx2b2lkfSBWaXNpdG9yUmVzdWx0IEFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXR1cm5lZCBmcm9tIGEgdmlzaXRvclxuICovXG5cbi8qKlxuICogSW52b2tlZCB3aGVuIGEgbm9kZSAobWF0Y2hpbmcgdGVzdCwgaWYgZ2l2ZW4pIGlzIGZvdW5kLlxuICogVmlzaXRvcnMgYXJlIGZyZWUgdG8gdHJhbnNmb3JtIG5vZGUuXG4gKiBUaGV5IGNhbiBhbHNvIHRyYW5zZm9ybSB0aGUgcGFyZW50IG9mIG5vZGUgKHRoZSBsYXN0IG9mIGFuY2VzdG9ycykuXG4gKiBSZXBsYWNpbmcgbm9kZSBpdHNlbGYsIGlmIGBTS0lQYCBpcyBub3QgcmV0dXJuZWQsIHN0aWxsIGNhdXNlcyBpdHMgZGVzY2VuZGFudHMgdG8gYmUgdmlzaXRlZC5cbiAqIElmIGFkZGluZyBvciByZW1vdmluZyBwcmV2aW91cyBzaWJsaW5ncyAob3IgbmV4dCBzaWJsaW5ncywgaW4gY2FzZSBvZiByZXZlcnNlKSBvZiBub2RlLFxuICogdmlzaXRvciBzaG91bGQgcmV0dXJuIGEgbmV3IGluZGV4IChudW1iZXIpIHRvIHNwZWNpZnkgdGhlIHNpYmxpbmcgdG8gdHJhdmVyc2UgYWZ0ZXIgbm9kZSBpcyB0cmF2ZXJzZWQuXG4gKiBBZGRpbmcgb3IgcmVtb3ZpbmcgbmV4dCBzaWJsaW5ncyBvZiBub2RlIChvciBwcmV2aW91cyBzaWJsaW5ncywgaW4gY2FzZSBvZiByZXZlcnNlKVxuICogaXMgaGFuZGxlZCBhcyBleHBlY3RlZCB3aXRob3V0IG5lZWRpbmcgdG8gcmV0dXJuIGEgbmV3IGluZGV4LlxuICogUmVtb3ZpbmcgdGhlIGNoaWxkcmVuIHByb3BlcnR5IG9mIGFuIGFuY2VzdG9yIHN0aWxsIHJlc3VsdHMgaW4gdGhlbSBiZWluZyB0cmF2ZXJzZWQuXG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBWXG4gKiBAY2FsbGJhY2sgVmlzaXRvclxuICogQHBhcmFtIHtWfSBub2RlIEZvdW5kIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IGFuY2VzdG9ycyBBbmNlc3RvcnMgb2Ygbm9kZVxuICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuaW1wb3J0IHtjb2xvcn0gZnJvbSAnLi9jb2xvci5qcydcblxuLyoqXG4gKiBDb250aW51ZSB0cmF2ZXJzaW5nIGFzIG5vcm1hbFxuICovXG5leHBvcnQgY29uc3QgQ09OVElOVUUgPSB0cnVlXG4vKipcbiAqIERvIG5vdCB0cmF2ZXJzZSB0aGlzIG5vZGVcdTIwMTlzIGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBjb25zdCBTS0lQID0gJ3NraXAnXG4vKipcbiAqIFN0b3AgdHJhdmVyc2luZyBpbW1lZGlhdGVseVxuICovXG5leHBvcnQgY29uc3QgRVhJVCA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCB2aXNpdFBhcmVudHMgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPFQgZXh0ZW5kcyBOb2RlPih0cmVlOiBOb2RlLCB0ZXN0OiBUWyd0eXBlJ118UGFydGlhbDxUPnxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0RnVuY3Rpb25QcmVkaWNhdGU8VD58QXJyYXkuPFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj4sIHZpc2l0b3I6IFZpc2l0b3I8VD4sIHJldmVyc2U/OiBib29sZWFuKSA9PiB2b2lkKSAmXG4gICAqICAgKCh0cmVlOiBOb2RlLCB0ZXN0OiBUZXN0LCB2aXNpdG9yOiBWaXNpdG9yPE5vZGU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICgodHJlZTogTm9kZSwgdmlzaXRvcjogVmlzaXRvcjxOb2RlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3QgdGVzdCBUZXN0IG5vZGVcbiAgICAgKiBAcGFyYW0ge1Zpc2l0b3I8Tm9kZT59IHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXSBGaXNpdCB0aGUgdHJlZSBpbiByZXZlcnNlLCBkZWZhdWx0cyB0byBmYWxzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBubyB2aXNpdG9yIGdpdmVuLCBzbyBgdmlzaXRvcmAgaXMgdGVzdC5cbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmFyIGlzID0gY29udmVydCh0ZXN0KVxuICAgICAgdmFyIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgICAgIGZhY3RvcnkodHJlZSwgbnVsbCwgW10pKClcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyP30gaW5kZXhcbiAgICAgICAqIEBwYXJhbSB7QXJyYXkuPFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUgIT09IG51bGwgPyBub2RlIDoge31cbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHZhciBuYW1lXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG5hbWUgPVxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdmFsdWUudGFnTmFtZVxuICAgICAgICAgICAgICA6IHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2aXNpdCwgJ25hbWUnLCB7XG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgJ25vZGUgKCcgK1xuICAgICAgICAgICAgICBjb2xvcih2YWx1ZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArXG4gICAgICAgICAgICAgICcpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlzaXRcblxuICAgICAgICBmdW5jdGlvbiB2aXNpdCgpIHtcbiAgICAgICAgICAvKiogQHR5cGUge0FjdGlvblR1cGxlfSAqL1xuICAgICAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgICAgIC8qKiBAdHlwZSB7QWN0aW9uVHVwbGV9ICovXG4gICAgICAgICAgdmFyIHN1YnJlc3VsdFxuICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgIHZhciBvZmZzZXRcbiAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQYXJlbnQ+fSAqL1xuICAgICAgICAgIHZhciBncmFuZHBhcmVudHNcblxuICAgICAgICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IG51bGwpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9va3MgbGlrZSBhIHBhcmVudC5cbiAgICAgICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICBncmFuZHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChub2RlKVxuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShub2RlLmNoaWxkcmVuW29mZnNldF0sIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJyZXN1bHRcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHN1YnJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyBzdWJyZXN1bHRbMV0gOiBvZmZzZXQgKyBzdGVwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICApXG5cbi8qKlxuICogQHBhcmFtIHtWaXNpdG9yUmVzdWx0fSB2YWx1ZVxuICogQHJldHVybnMge0FjdGlvblR1cGxlfVxuICovXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwgIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvcihkKSB7XG4gIHJldHVybiAnXFx1MDAxQlszM20nICsgZCArICdcXHUwMDFCWzM5bSdcbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2luZGV4LmpzJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9saWIvaW5kZXguanMnXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge0VsZW1lbnRbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gRWxlbWVudENoaWxkXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUHJvcGVydGllc30gUHJvcGVydGllc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLWlzLWVsZW1lbnQnKS5UZXN0fSBUZXN0XG4gKlxuICogQHR5cGVkZWYgeydwcmVwZW5kJ3wnYXBwZW5kJ3wnd3JhcCd8J2JlZm9yZSd8J2FmdGVyJ30gQmVoYXZpb3JcbiAqXG4gKiBAY2FsbGJhY2sgQnVpbGRcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXX1cbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge0JlaGF2aW9yfSBbYmVoYXZpb3I9J3ByZXBlbmQnXVxuICogICBIb3cgdG8gY3JlYXRlIGxpbmtzLlxuICogQHByb3BlcnR5IHtCZWhhdmlvcn0gW2JlaGF2aW91cl1cbiAqICAgUGxlYXNlIHVzZSBgYmVoYXZpb3JgIGluc3RlYWRcbiAqIEBwcm9wZXJ0eSB7UHJvcGVydGllc30gW3Byb3BlcnRpZXNdXG4gKiAgIEV4dHJhIHByb3BlcnRpZXMgdG8gc2V0IG9uIHRoZSBsaW5rIHdoZW4gaW5qZWN0aW5nLlxuICogICBEZWZhdWx0cyB0byBge2FyaWFIaWRkZW46IHRydWUsIHRhYkluZGV4OiAtMX1gIHdoZW4gYCdwcmVwZW5kJ2Agb3JcbiAqICAgYCdhcHBlbmQnYC5cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfEJ1aWxkfSBbY29udGVudD17dHlwZTogJ2VsZW1lbnQnLCB0YWdOYW1lOiAnc3BhbicsIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnaWNvbicsICdpY29uLWxpbmsnXX0sIGNoaWxkcmVuOiBbXX1dXG4gKiAgIGhhc3Qgbm9kZXMgdG8gaW5zZXJ0IGluIHRoZSBsaW5rLlxuICogQHByb3BlcnR5IHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW118QnVpbGR9IFtncm91cF1cbiAqICAgaGFzdCBub2RlIHRvIHdyYXAgdGhlIGhlYWRpbmcgYW5kIGxpbmsgd2l0aCwgaWYgYGJlaGF2aW9yYCBpcyBgJ2JlZm9yZSdgIG9yXG4gKiAgIGAnYWZ0ZXInYC5cbiAqICAgVGhlcmUgaXMgbm8gZGVmYXVsdC5cbiAqIEBwcm9wZXJ0eSB7VGVzdH0gW3Rlc3RdXG4gKiAgIFRlc3QgdG8gZGVmaW5lIHdoaWNoIGhlYWRpbmcgZWxlbWVudHMgYXJlIGxpbmtlZC5cbiAqICAgQW55IHRlc3QgdGhhdCBjYW4gYmUgZ2l2ZW4gdG8gYGhhc3QtdXRpbC1pcy1lbGVtZW50YCBpcyBzdXBwb3J0ZWQuXG4gKiAgIFRoZSBkZWZhdWx0IChubyB0ZXN0KSBpcyB0byBsaW5rIGFsbCBoZWFkaW5ncy5cbiAqICAgQ2FuIGJlIHVzZWQgdG8gbGluayBvbmx5IGgxLWgzLCBvciBmb3IgZXhhbXBsZSBhbGwgZXhjZXB0IGgxLlxuICovXG5cbmltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJ1xuaW1wb3J0IHtoYXNQcm9wZXJ0eX0gZnJvbSAnaGFzdC11dGlsLWhhcy1wcm9wZXJ0eSdcbmltcG9ydCB7aGVhZGluZ1Jhbmt9IGZyb20gJ2hhc3QtdXRpbC1oZWFkaW5nLXJhbmsnXG5pbXBvcnQge2NvbnZlcnRFbGVtZW50fSBmcm9tICdoYXN0LXV0aWwtaXMtZWxlbWVudCdcbmltcG9ydCB7dmlzaXQsIFNLSVB9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5cbi8qKiBAdHlwZSB7RWxlbWVudH0gKi9cbmNvbnN0IGNvbnRlbnREZWZhdWx0cyA9IHtcbiAgdHlwZTogJ2VsZW1lbnQnLFxuICB0YWdOYW1lOiAnc3BhbicsXG4gIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnaWNvbicsICdpY29uLWxpbmsnXX0sXG4gIGNoaWxkcmVuOiBbXVxufVxuXG4vKipcbiAqIFBsdWdpbiB0byBhdXRvbWF0aWNhbGx5IGFkZCBsaW5rcyB0byBoZWFkaW5ncyAoaDEtaDYpLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XXx2b2lkW10sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVBdXRvbGlua0hlYWRpbmdzKG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BlcnRpZXNcbiAgY29uc3QgYmVoYXZpb3IgPSBvcHRpb25zLmJlaGF2aW91ciB8fCBvcHRpb25zLmJlaGF2aW9yIHx8ICdwcmVwZW5kJ1xuICBjb25zdCBjb250ZW50ID0gb3B0aW9ucy5jb250ZW50IHx8IGNvbnRlbnREZWZhdWx0c1xuICBjb25zdCBncm91cCA9IG9wdGlvbnMuZ3JvdXBcbiAgY29uc3QgaXMgPSBjb252ZXJ0RWxlbWVudChvcHRpb25zLnRlc3QpXG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQvY29tcGxleC10eXBlcycpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGxldCBtZXRob2RcblxuICBpZiAoYmVoYXZpb3IgPT09ICd3cmFwJykge1xuICAgIG1ldGhvZCA9IHdyYXBcbiAgfSBlbHNlIGlmIChiZWhhdmlvciA9PT0gJ2JlZm9yZScgfHwgYmVoYXZpb3IgPT09ICdhZnRlcicpIHtcbiAgICBtZXRob2QgPSBhcm91bmRcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICBwcm9wcyA9IHthcmlhSGlkZGVuOiAndHJ1ZScsIHRhYkluZGV4OiAtMX1cbiAgICB9XG5cbiAgICBtZXRob2QgPSBpbmplY3RcbiAgfVxuXG4gIHJldHVybiAodHJlZSkgPT4ge1xuICAgIHZpc2l0KHRyZWUsICdlbGVtZW50JywgKG5vZGUsIGluZGV4LCBwYXJlbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaGVhZGluZ1Jhbmsobm9kZSkgJiZcbiAgICAgICAgaGFzUHJvcGVydHkobm9kZSwgJ2lkJykgJiZcbiAgICAgICAgaXMobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0L2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBmdW5jdGlvbiBpbmplY3Qobm9kZSkge1xuICAgIG5vZGUuY2hpbGRyZW5bYmVoYXZpb3IgPT09ICdwcmVwZW5kJyA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oXG4gICAgICBjcmVhdGUobm9kZSwgZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyksIHRvQ2hpbGRyZW4oY29udGVudCwgbm9kZSkpXG4gICAgKVxuXG4gICAgcmV0dXJuIFtTS0lQXVxuICB9XG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQvY29tcGxleC10eXBlcycpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIGFyb3VuZChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgLy8gVW5jb21tb24uXG4gICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fCAhcGFyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGUoXG4gICAgICBub2RlLFxuICAgICAgZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyksXG4gICAgICB0b0NoaWxkcmVuKGNvbnRlbnQsIG5vZGUpXG4gICAgKVxuICAgIGxldCBub2RlcyA9IGJlaGF2aW9yID09PSAnYmVmb3JlJyA/IFtsaW5rLCBub2RlXSA6IFtub2RlLCBsaW5rXVxuXG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBjb25zdCBncm91cGluZyA9IHRvTm9kZShncm91cCwgbm9kZSlcblxuICAgICAgaWYgKGdyb3VwaW5nICYmICFBcnJheS5pc0FycmF5KGdyb3VwaW5nKSAmJiBncm91cGluZy50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgICAgZ3JvdXBpbmcuY2hpbGRyZW4gPSBub2Rlc1xuICAgICAgICBub2RlcyA9IFtncm91cGluZ11cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCAuLi5ub2RlcylcblxuICAgIHJldHVybiBbU0tJUCwgaW5kZXggKyBub2Rlcy5sZW5ndGhdXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC9jb21wbGV4LXR5cGVzJykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgZnVuY3Rpb24gd3JhcChub2RlKSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IFtjcmVhdGUobm9kZSwgZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyksIG5vZGUuY2hpbGRyZW4pXVxuICAgIHJldHVybiBbU0tJUF1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRDaGlsZHxFbGVtZW50Q2hpbGRbXXxCdWlsZH0gdmFsdWVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm5zIHtFbGVtZW50Q2hpbGRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHRvQ2hpbGRyZW4odmFsdWUsIG5vZGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0b05vZGUodmFsdWUsIG5vZGUpXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IFtyZXN1bHRdXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50Q2hpbGR8RWxlbWVudENoaWxkW118QnVpbGR9IHZhbHVlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudENoaWxkfEVsZW1lbnRDaGlsZFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9Ob2RlKHZhbHVlLCBub2RlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlKG5vZGUpXG4gICAgcmV0dXJuIGV4dGVuZCh0cnVlLCBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFtdIDoge30sIHZhbHVlKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BzXG4gICAqIEBwYXJhbSB7RWxlbWVudENoaWxkW119IGNoaWxkcmVuXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlKG5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnYScsXG4gICAgICBwcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAvLyBGaXggaGFzdCB0eXBlcyBhbmQgbWFrZSB0aGVtIHJlcXVpcmVkLlxuICAgICAgICAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBocmVmOiAnIycgKyAobm9kZS5wcm9wZXJ0aWVzIHx8IHt9KS5pZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IFRhZ05hbWVcbiAqIEB0eXBlZGVmIHtudWxsfHVuZGVmaW5lZHxUYWdOYW1lfFRlc3RGdW5jdGlvbkFueXRoaW5nfEFycmF5LjxUYWdOYW1lfFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gVGVzdFxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtFbGVtZW50fSBUXG4gKiBAdHlwZWRlZiB7bnVsbHx1bmRlZmluZWR8VFsndGFnTmFtZSddfFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndGFnTmFtZSddfFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPj59IFByZWRpY2F0ZVRlc3RcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgcGFzc2VzIGEgdGVzdFxuICpcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnx2b2lkfVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBwYXNzZXMgYSBjZXJ0YWluIG5vZGUgdGVzdFxuICpcbiAqIEB0ZW1wbGF0ZSB7RWxlbWVudH0gWFxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvblByZWRpY2F0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7ZWxlbWVudCBpcyBYfVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGFuIGVsZW1lbnQgYW5kIHBhc3NlcyBhIGNlcnRhaW4gbm9kZSB0ZXN0XG4gKlxuICogQGNhbGxiYWNrIEFzc2VydEFueXRoaW5nXG4gKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICogQHBhcmFtIHtudW1iZXJ8bnVsbHx1bmRlZmluZWR9IFtpbmRleF1cbiAqIEBwYXJhbSB7UGFyZW50fG51bGx8dW5kZWZpbmVkfSBbcGFyZW50XVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgaXMgYW4gZWxlbWVudCBhbmQgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3RcbiAqXG4gKiBAdGVtcGxhdGUge0VsZW1lbnR9IFlcbiAqIEBjYWxsYmFjayBBc3NlcnRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiBAcGFyYW0ge251bWJlcnxudWxsfHVuZGVmaW5lZH0gW2luZGV4XVxuICogQHBhcmFtIHtQYXJlbnR8bnVsbHx1bmRlZmluZWR9IFtwYXJlbnRdXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBZfVxuICovXG5cbi8vIENoZWNrIGlmIGBub2RlYCBpcyBhbiBgZWxlbWVudGAgYW5kIHdoZXRoZXIgaXQgcGFzc2VzIHRoZSBnaXZlbiB0ZXN0LlxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIG5vZGUgaXMgYW4gZWxlbWVudCBhbmQgcGFzc2VzIGEgdGVzdC5cbiAgICogV2hlbiBhIGBwYXJlbnRgIG5vZGUgaXMga25vd24gdGhlIGBpbmRleGAgb2Ygbm9kZSBzaG91bGQgYWxzbyBiZSBnaXZlbi5cbiAgICpcbiAgICogQHR5cGUgeyhcbiAgICogICAoKCkgPT4gZmFsc2UpICZcbiAgICogICAoPFQgZXh0ZW5kcyBFbGVtZW50ID0gRWxlbWVudD4obm9kZTogdW5rbm93biwgdGVzdD86IFByZWRpY2F0ZVRlc3Q8VD4sIGluZGV4PzogbnVtYmVyLCBwYXJlbnQ/OiBQYXJlbnQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIFQpICZcbiAgICogICAoKG5vZGU6IHVua25vd24sIHRlc3Q6IFRlc3QsIGluZGV4PzogbnVtYmVyLCBwYXJlbnQ/OiBQYXJlbnQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBib29sZWFuKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgbm9kZSBwYXNzZXMgYSB0ZXN0LlxuICAgICAqIFdoZW4gYSBgcGFyZW50YCBub2RlIGlzIGtub3duIHRoZSBgaW5kZXhgIG9mIG5vZGUgc2hvdWxkIGFsc28gYmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtub2RlXSBOb2RlIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIHtUZXN0fSBbdGVzdF0gV2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICAgICAqIFdoZW4gYHN0cmluZ2AsIHdvcmtzIGxpa2UgcGFzc2luZyBgZnVuY3Rpb24gKG5vZGUpIHtyZXR1cm4gbm9kZS50eXBlID09PSB0ZXN0fWAuXG4gICAgICogV2hlbiBgZnVuY3Rpb25gIGNoZWNrcyBpZiBmdW5jdGlvbiBwYXNzZWQgdGhlIG5vZGUgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGBhcnJheWAsIGNoZWNrcyBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIFBvc2l0aW9uIG9mIGBub2RlYCBpbiBgcGFyZW50YFxuICAgICAqIEBwYXJhbSB7UGFyZW50fSBbcGFyZW50XSBQYXJlbnQgb2YgYG5vZGVgXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbY29udGV4dF0gQ29udGV4dCBvYmplY3QgdG8gaW52b2tlIGB0ZXN0YCB3aXRoXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGVzdCBwYXNzZWQgYW5kIGBub2RlYCBpcyBhbiBgRWxlbWVudGAgKG9iamVjdCB3aXRoIGB0eXBlYCBzZXQgdG8gYGVsZW1lbnRgIGFuZCBgdGFnTmFtZWAgc2V0IHRvIGEgbm9uLWVtcHR5IHN0cmluZykuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgICBmdW5jdGlvbiAobm9kZSwgdGVzdCwgaW5kZXgsIHBhcmVudCwgY29udGV4dCkge1xuICAgICAgY29uc3QgY2hlY2sgPSBjb252ZXJ0RWxlbWVudCh0ZXN0KVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgaW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICBpbmRleCA8IDAgfHxcbiAgICAgICAgICBpbmRleCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgZmluaXRlIGluZGV4IGZvciBjaGlsZCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBwYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgKCFwYXJlbnQudHlwZSB8fCAhcGFyZW50LmNoaWxkcmVuKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcGFyZW50IG5vZGUnKVxuICAgICAgfVxuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBub2RlLlxuICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnR5cGUgfHwgdHlwZW9mIG5vZGUudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHBhcmVudCA9PT0gbnVsbCkgIT09XG4gICAgICAgIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYm90aCBwYXJlbnQgYW5kIGluZGV4JylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoZWNrLmNhbGwoY29udGV4dCwgbm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICB9XG4gIClcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRFbGVtZW50ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUIGV4dGVuZHMgRWxlbWVudD4odGVzdDogVFsndGFnTmFtZSddfFRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPikgPT4gQXNzZXJ0UHJlZGljYXRlPFQ+KSAmXG4gICAqICAgKCh0ZXN0PzogVGVzdCkgPT4gQXNzZXJ0QW55dGhpbmcpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gYXNzZXJ0aW9uIGZyb20gYSBjaGVjay5cbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIFdoZW4gbnVsbGlzaCwgY2hlY2tzIGlmIGBub2RlYCBpcyBhIGBOb2RlYC5cbiAgICAgKiBXaGVuIGBzdHJpbmdgLCB3b3JrcyBsaWtlIHBhc3NpbmcgYGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuIG5vZGUudHlwZSA9PT0gdGVzdH1gLlxuICAgICAqIFdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gICAgICogV2hlbiBgb2JqZWN0YCwgY2hlY2tzIHRoYXQgYWxsIGtleXMgaW4gdGVzdCBhcmUgaW4gbm9kZSwgYW5kIHRoYXQgdGhleSBoYXZlIChzdHJpY3RseSkgZXF1YWwgdmFsdWVzLlxuICAgICAqIFdoZW4gYGFycmF5YCwgY2hlY2tzIGFueSBvbmUgb2YgdGhlIHN1YnRlc3RzIHBhc3MuXG4gICAgICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICBpZiAodGVzdCA9PT0gdW5kZWZpbmVkIHx8IHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGFnTmFtZUZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gYW55RmFjdG9yeSh0ZXN0KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNhc3RGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3IgYXJyYXkgYXMgdGVzdCcpXG4gICAgfVxuICApXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48VGFnTmFtZXxUZXN0RnVuY3Rpb25Bbnl0aGluZz59IHRlc3RzXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48QXNzZXJ0QW55dGhpbmc+fSAqL1xuICBjb25zdCBjaGVja3MgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdGVzdHMubGVuZ3RoKSB7XG4gICAgY2hlY2tzW2luZGV4XSA9IGNvbnZlcnRFbGVtZW50KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbnkpXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge3Vua25vd25bXX0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFueSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uY2FsbCh0aGlzLCAuLi5wYXJhbWV0ZXJzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2RlXHUyMDE5cyB0YWdcbiAqIG5hbWUgZm9yIHNhaWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7VGFnTmFtZX0gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gdGFnTmFtZUZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIHRhZ05hbWVcblxuICAvKipcbiAgICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gdGFnTmFtZShub2RlKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQobm9kZSkgJiYgbm9kZS50YWdOYW1lID09PSBjaGVja1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUZXN0RnVuY3Rpb25Bbnl0aGluZ30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gY2FzdEZhY3RvcnkoY2hlY2spIHtcbiAgcmV0dXJuIGFzc2VydGlvblxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gICAqIEBwYXJhbSB7QXJyYXkuPHVua25vd24+fSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYXNzZXJ0aW9uKG5vZGUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBmaW5lLlxuICAgIHJldHVybiBlbGVtZW50KG5vZGUpICYmIEJvb2xlYW4oY2hlY2suY2FsbCh0aGlzLCBub2RlLCAuLi5wYXJhbWV0ZXJzKSlcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUgaWYgdGhpcyBpcyBhbiBlbGVtZW50LlxuICogQHBhcmFtIHt1bmtub3dufSBub2RlXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBFbGVtZW50fVxuICovXG5mdW5jdGlvbiBlbGVtZW50KG5vZGUpIHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgbm9kZSAmJlxuICAgICAgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBub2RlLlxuICAgICAgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiZcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTG9va3MgbGlrZSBhbiBlbGVtZW50LlxuICAgICAgdHlwZW9mIG5vZGUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgKVxufVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdH0gVGVzdFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gVmlzaXRvclxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzLCBDT05USU5VRSwgU0tJUCwgRVhJVH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBTS0lQLCBFWElUfVxuXG4vKipcbiAqIFZpc2l0IGNoaWxkcmVuIG9mIHRyZWUgd2hpY2ggcGFzcyBhIHRlc3RcbiAqXG4gKiBAcGFyYW0gdHJlZSBBYnN0cmFjdCBzeW50YXggdHJlZSB0byB3YWxrXG4gKiBAcGFyYW0gdGVzdCBUZXN0LCBvcHRpb25hbFxuICogQHBhcmFtIHZpc2l0b3IgRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIG5vZGVcbiAqIEBwYXJhbSByZXZlcnNlIEZpc2l0IHRoZSB0cmVlIGluIHJldmVyc2UsIGRlZmF1bHRzIHRvIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCB2aXNpdCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGUsIENoZWNrIGV4dGVuZHMgVGVzdD4odHJlZTogVHJlZSwgdGVzdDogQ2hlY2ssIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpICZcbiAgICogICAoPFRyZWUgZXh0ZW5kcyBOb2RlPih0cmVlOiBUcmVlLCB2aXNpdG9yOiBpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLkJ1aWxkVmlzaXRvcjxUcmVlPiwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vY29tcGxleC10eXBlcycpLlZpc2l0b3J9IHZpc2l0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXZlcnNlXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICAgICAgdmlzaXRvciA9IHRlc3RcbiAgICAgICAgdGVzdCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHtBcnJheS48UGFyZW50Pn0gcGFyZW50c1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgICAgICByZXR1cm4gdmlzaXRvcihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvaW5kZXguanMnKS5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL2xpYi9pbmRleC5qcydcbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2xvd2xpZ2h0JykuUm9vdH0gTG93bGlnaHRSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdsb3dsaWdodC9saWIvY29yZS5qcycpLkhpZ2hsaWdodFN5bnRheH0gSGlnaGxpZ2h0U3ludGF4XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtSb290fFJvb3RbJ2NoaWxkcmVuJ11bbnVtYmVyXX0gTm9kZVxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtwcmVmaXg9J2hsanMtJ11cbiAqICAgUHJlZml4IHRvIHVzZSBiZWZvcmUgY2xhc3Nlcy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbnxBcnJheTxzdHJpbmc+fSBbc3Vic2V0XVxuICogICBTY29wZSBvZiBsYW5ndWFnZXMgdG8gY2hlY2sgd2hlbiBhdXRvLWRldGVjdGluZyAoZGVmYXVsdDogYWxsIGxhbmd1YWdlcykuXG4gKiAgIFBhc3MgYGZhbHNlYCB0byBub3QgaGlnaGxpZ2h0IGNvZGUgd2l0aG91dCBsYW5ndWFnZSBjbGFzc2VzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbaWdub3JlTWlzc2luZz1mYWxzZV1cbiAqICAgU3dhbGxvdyBlcnJvcnMgZm9yIG1pc3NpbmcgbGFuZ3VhZ2VzLlxuICogICBCeSBkZWZhdWx0LCB1bnJlZ2lzdGVyZWQgc3ludGF4ZXMgdGhyb3cgYW4gZXJyb3Igd2hlbiB0aGV5IGFyZSB1c2VkLlxuICogICBQYXNzIGB0cnVlYCB0byBzd2FsbG93IHRob3NlIGVycm9ycyBhbmQgdGh1cyBpZ25vcmUgY29kZSB3aXRoIHVua25vd24gY29kZVxuICogICBsYW5ndWFnZXMuXG4gKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IFtwbGFpblRleHQ9W11dXG4gKiAgIExpc3Qgb2YgcGxhaW4tdGV4dCBsYW5ndWFnZXMuXG4gKiAgIFBhc3MgYW55IGxhbmd1YWdlcyB5b3Ugd291bGQgbGlrZSB0byBiZSBrZXB0IGFzIHBsYWluLXRleHQgaW5zdGVhZCBvZlxuICogICBnZXR0aW5nIGhpZ2hsaWdodGVkLlxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8QXJyYXk8c3RyaW5nPj59IFthbGlhc2VzPXt9XVxuICogICBSZWdpc3RlciBtb3JlIGFsaWFzZXMuXG4gKiAgIFBhc3NlZCB0byBgbG93bGlnaHQucmVnaXN0ZXJBbGlhc2AuXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsIEhpZ2hsaWdodFN5bnRheD59IFtsYW5ndWFnZXM9e31dXG4gKiAgIFJlZ2lzdGVyIG1vcmUgbGFuZ3VhZ2VzLlxuICogICBFYWNoIGtleS92YWx1ZSBwYWlyIHBhc3NlZCBhcyBhcmd1bWVudHMgdG8gYGxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2VgLlxuICovXG5cbmltcG9ydCB7bG93bGlnaHR9IGZyb20gJ2xvd2xpZ2h0J1xuaW1wb3J0IHt0b1RleHR9IGZyb20gJ2hhc3QtdXRpbC10by10ZXh0J1xuaW1wb3J0IHt2aXNpdH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcblxuY29uc3Qgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IHRoZSBzeW50YXggb2YgY29kZSB3aXRoIGxvd2xpZ2h0IChgaGlnaGxpZ2h0LmpzYCkuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dIHwgQXJyYXk8dm9pZD4sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVIaWdobGlnaHQob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHthbGlhc2VzLCBsYW5ndWFnZXMsIHByZWZpeCwgcGxhaW5UZXh0LCBpZ25vcmVNaXNzaW5nLCBzdWJzZXR9ID0gb3B0aW9uc1xuICBsZXQgbmFtZSA9ICdobGpzJ1xuXG4gIGlmIChhbGlhc2VzKSB7XG4gICAgbG93bGlnaHQucmVnaXN0ZXJBbGlhcyhhbGlhc2VzKVxuICB9XG5cbiAgaWYgKGxhbmd1YWdlcykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBrZXlcblxuICAgIGZvciAoa2V5IGluIGxhbmd1YWdlcykge1xuICAgICAgaWYgKG93bi5jYWxsKGxhbmd1YWdlcywga2V5KSkge1xuICAgICAgICBsb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKGtleSwgbGFuZ3VhZ2VzW2tleV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByZWZpeCkge1xuICAgIGNvbnN0IHBvcyA9IHByZWZpeC5pbmRleE9mKCctJylcbiAgICBuYW1lID0gcG9zID4gLTEgPyBwcmVmaXguc2xpY2UoMCwgcG9zKSA6IHByZWZpeFxuICB9XG5cbiAgcmV0dXJuICh0cmVlKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBfLCBnaXZlblBhcmVudCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50ID0gLyoqIEB0eXBlIHtOb2RlP30gKi8gKGdpdmVuUGFyZW50KVxuXG4gICAgICBpZiAoXG4gICAgICAgICFwYXJlbnQgfHxcbiAgICAgICAgISgndGFnTmFtZScgaW4gcGFyZW50KSB8fFxuICAgICAgICBwYXJlbnQudGFnTmFtZSAhPT0gJ3ByZScgfHxcbiAgICAgICAgbm9kZS50YWdOYW1lICE9PSAnY29kZScgfHxcbiAgICAgICAgIW5vZGUucHJvcGVydGllc1xuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBsYW5nID0gbGFuZ3VhZ2Uobm9kZSlcblxuICAgICAgaWYgKFxuICAgICAgICBsYW5nID09PSBmYWxzZSB8fFxuICAgICAgICAoIWxhbmcgJiYgc3Vic2V0ID09PSBmYWxzZSkgfHxcbiAgICAgICAgKGxhbmcgJiYgcGxhaW5UZXh0ICYmIHBsYWluVGV4dC5pbmNsdWRlcyhsYW5nKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGUucHJvcGVydGllcy5jbGFzc05hbWUpKSB7XG4gICAgICAgIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWUgPSBbXVxuICAgICAgfVxuXG4gICAgICBpZiAoIW5vZGUucHJvcGVydGllcy5jbGFzc05hbWUuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS51bnNoaWZ0KG5hbWUpXG4gICAgICB9XG5cbiAgICAgIC8qKiBAdHlwZSB7TG93bGlnaHRSb290fSAqL1xuICAgICAgbGV0IHJlc3VsdFxuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBsYW5nXG4gICAgICAgICAgPyBsb3dsaWdodC5oaWdobGlnaHQobGFuZywgdG9UZXh0KHBhcmVudCksIHtwcmVmaXh9KVxuICAgICAgICAgIDogLy8gQHRzLWV4cGVjdC1lcnJvcjogd2UgY2hlY2tlZCB0aGF0IGBzdWJzZXRgIGlzIG5vdCBhIGJvb2xlYW4uXG4gICAgICAgICAgICBsb3dsaWdodC5oaWdobGlnaHRBdXRvKHRvVGV4dChwYXJlbnQpLCB7cHJlZml4LCBzdWJzZXR9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXhjZXB0aW9uID0gLyoqIEB0eXBlIHtFcnJvcn0gKi8gKGVycm9yKVxuICAgICAgICBpZiAoIWlnbm9yZU1pc3NpbmcgfHwgIS9Vbmtub3duIGxhbmd1YWdlLy50ZXN0KGV4Y2VwdGlvbi5tZXNzYWdlKSkge1xuICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFsYW5nICYmIHJlc3VsdC5kYXRhLmxhbmd1YWdlKSB7XG4gICAgICAgIG5vZGUucHJvcGVydGllcy5jbGFzc05hbWUucHVzaCgnbGFuZ3VhZ2UtJyArIHJlc3VsdC5kYXRhLmxhbmd1YWdlKVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQuY2hpbGRyZW4pICYmIHJlc3VsdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSByZXN1bHQuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZSBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7ZmFsc2V8c3RyaW5nfHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gbGFuZ3VhZ2Uobm9kZSkge1xuICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnByb3BlcnRpZXMgJiYgbm9kZS5wcm9wZXJ0aWVzLmNsYXNzTmFtZVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGNsYXNzTmFtZS5sZW5ndGgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhjbGFzc05hbWVbaW5kZXhdKVxuXG4gICAgaWYgKHZhbHVlID09PSAnbm8taGlnaGxpZ2h0JyB8fCB2YWx1ZSA9PT0gJ25vaGlnaGxpZ2h0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLnNsaWNlKDAsIDUpID09PSAnbGFuZy0nKSB7XG4gICAgICByZXR1cm4gdmFsdWUuc2xpY2UoNSlcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuc2xpY2UoMCwgOSkgPT09ICdsYW5ndWFnZS0nKSB7XG4gICAgICByZXR1cm4gdmFsdWUuc2xpY2UoOSlcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2NvcmUuanMnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9jb3JlLmpzJykuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvY29yZS5qcycpLkF1dG9PcHRpb25zfSBBdXRvT3B0aW9uc1xuICovXG5cbmV4cG9ydCB7bG93bGlnaHR9IGZyb20gJy4vbGliL2NvbW1vbi5qcydcbiIsICJpbXBvcnQgYXJkdWlubyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hcmR1aW5vJ1xuaW1wb3J0IGJhc2ggZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaCdcbmltcG9ydCBjIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MnXG5pbXBvcnQgY3BwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NwcCdcbmltcG9ydCBjc2hhcnAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NoYXJwJ1xuaW1wb3J0IGNzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc3MnXG5pbXBvcnQgZGlmZiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kaWZmJ1xuaW1wb3J0IGdvIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dvJ1xuaW1wb3J0IGluaSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9pbmknXG5pbXBvcnQgamF2YSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhJ1xuaW1wb3J0IGphdmFzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdCdcbmltcG9ydCBqc29uIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pzb24nXG5pbXBvcnQga290bGluIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2tvdGxpbidcbmltcG9ydCBsZXNzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xlc3MnXG5pbXBvcnQgbHVhIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2x1YSdcbmltcG9ydCBtYWtlZmlsZSBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tYWtlZmlsZSdcbmltcG9ydCBtYXJrZG93biBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tYXJrZG93bidcbmltcG9ydCBvYmplY3RpdmVjIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29iamVjdGl2ZWMnXG5pbXBvcnQgcGVybCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wZXJsJ1xuaW1wb3J0IHBocCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAnXG5pbXBvcnQgcGhwVGVtcGxhdGUgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwLXRlbXBsYXRlJ1xuaW1wb3J0IHBsYWludGV4dCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wbGFpbnRleHQnXG5pbXBvcnQgcHl0aG9uIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B5dGhvbidcbmltcG9ydCBweXRob25SZXBsIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B5dGhvbi1yZXBsJ1xuaW1wb3J0IHIgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcidcbmltcG9ydCBydWJ5IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1YnknXG5pbXBvcnQgcnVzdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9ydXN0J1xuaW1wb3J0IHNjc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2NzcydcbmltcG9ydCBzaGVsbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zaGVsbCdcbmltcG9ydCBzcWwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3FsJ1xuaW1wb3J0IHN3aWZ0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N3aWZ0J1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdCdcbmltcG9ydCB2Ym5ldCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy92Ym5ldCdcbmltcG9ydCB4bWwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sJ1xuaW1wb3J0IHlhbWwgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveWFtbCdcbmltcG9ydCB7bG93bGlnaHR9IGZyb20gJy4vY29yZS5qcydcblxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnYXJkdWlubycsIGFyZHVpbm8pXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdiYXNoJywgYmFzaClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2MnLCBjKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnY3BwJywgY3BwKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnY3NoYXJwJywgY3NoYXJwKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgY3NzKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnZGlmZicsIGRpZmYpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdnbycsIGdvKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnaW5pJywgaW5pKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnamF2YScsIGphdmEpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgamF2YXNjcmlwdClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzb24nLCBqc29uKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgna290bGluJywga290bGluKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbGVzcycsIGxlc3MpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdsdWEnLCBsdWEpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdtYWtlZmlsZScsIG1ha2VmaWxlKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnbWFya2Rvd24nLCBtYXJrZG93bilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ29iamVjdGl2ZWMnLCBvYmplY3RpdmVjKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncGVybCcsIHBlcmwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdwaHAnLCBwaHApXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdwaHAtdGVtcGxhdGUnLCBwaHBUZW1wbGF0ZSlcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BsYWludGV4dCcsIHBsYWludGV4dClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3B5dGhvbicsIHB5dGhvbilcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3B5dGhvbi1yZXBsJywgcHl0aG9uUmVwbClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3InLCByKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgncnVieScsIHJ1YnkpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCdydXN0JywgcnVzdClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3Njc3MnLCBzY3NzKVxubG93bGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnc2hlbGwnLCBzaGVsbClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3NxbCcsIHNxbClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3N3aWZ0Jywgc3dpZnQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCd0eXBlc2NyaXB0JywgdHlwZXNjcmlwdClcbmxvd2xpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3ZibmV0JywgdmJuZXQpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCd4bWwnLCB4bWwpXG5sb3dsaWdodC5yZWdpc3Rlckxhbmd1YWdlKCd5YW1sJywgeWFtbClcblxuZXhwb3J0IHtsb3dsaWdodH0gZnJvbSAnLi9jb3JlLmpzJ1xuIiwgIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlRleHR9IFRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hpZ2hsaWdodC5qcycpLkhpZ2hsaWdodFJlc3VsdH0gSGlnaGxpZ2h0UmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoaWdobGlnaHQuanMnKS5ITEpTT3B0aW9uc30gSGlnaGxpZ2h0T3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGlnaGxpZ2h0LmpzJykuTGFuZ3VhZ2VGbn0gSGlnaGxpZ2h0U3ludGF4XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoaWdobGlnaHQuanMnKS5FbWl0dGVyfSBIaWdobGlnaHRFbWl0dGVyXG4gKlxuICogQHR5cGVkZWYge3t0eXBlOiAnZWxlbWVudCcsIHRhZ05hbWU6ICdzcGFuJywgcHJvcGVydGllczoge2NsYXNzTmFtZTogQXJyYXk8c3RyaW5nPn0sIGNoaWxkcmVuOiBBcnJheTxTcGFufFRleHQ+fX0gU3BhblxuICogQHR5cGVkZWYge3t0eXBlOiAncm9vdCcsIGRhdGE6IHtsYW5ndWFnZTogc3RyaW5nfG51bGwsIHJlbGV2YW5jZTogbnVtYmVyfSwgY2hpbGRyZW46IEFycmF5PFNwYW58VGV4dD59fSBSb290XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gRXh0cmFPcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IFtzdWJzZXRdXG4gKiAgIExpc3Qgb2YgYWxsb3dlZCBsYW5ndWFnZXMsIGRlZmF1bHRzIHRvIGFsbCByZWdpc3RlcmVkIGxhbmd1YWdlcy5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3ByZWZpeD0naGxqcy0nXVxuICogICBDbGFzcyBwcmVmaXguXG4gKlxuICogQHR5cGVkZWYge09wdGlvbnMgJiBFeHRyYU9wdGlvbnN9IEF1dG9PcHRpb25zXG4gKi9cblxuaW1wb3J0IGhpZ2ggZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJ1xuaW1wb3J0IHtmYXVsdH0gZnJvbSAnZmF1bHQnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmNvbnN0IGRlZmF1bHRQcmVmaXggPSAnaGxqcy0nXG5cbi8qKlxuICogSGlnaGxpZ2h0IGB2YWx1ZWAgKGNvZGUpIGFzIGBsYW5ndWFnZWAgKG5hbWUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICogICBQcm9ncmFtbWluZyBsYW5ndWFnZSBuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIENvZGUgdG8gaGlnaGxpZ2h0LlxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9ucz17fV1cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtSb290fVxuICogICBBIGhhc3QgYFJvb3RgIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodChsYW5ndWFnZSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXhcblxuICBpZiAodHlwZW9mIGxhbmd1YWdlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IGZhdWx0KCdFeHBlY3RlZCBgc3RyaW5nYCBmb3IgbmFtZSwgZ290IGAlc2AnLCBsYW5ndWFnZSlcbiAgfVxuXG4gIGlmICghaGlnaC5nZXRMYW5ndWFnZShsYW5ndWFnZSkpIHtcbiAgICB0aHJvdyBmYXVsdCgnVW5rbm93biBsYW5ndWFnZTogYCVzYCBpcyBub3QgcmVnaXN0ZXJlZCcsIGxhbmd1YWdlKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBmYXVsdCgnRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIHZhbHVlLCBnb3QgYCVzYCcsIHZhbHVlKVxuICB9XG5cbiAgaWYgKHByZWZpeCA9PT0gbnVsbCB8fCBwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgIHByZWZpeCA9IGRlZmF1bHRQcmVmaXhcbiAgfVxuXG4gIGhpZ2guY29uZmlndXJlKHtfX2VtaXR0ZXI6IEhhc3RFbWl0dGVyLCBjbGFzc1ByZWZpeDogcHJlZml4fSlcblxuICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge0hpZ2hsaWdodFJlc3VsdCAmIHtfZW1pdHRlcjogSGFzdEVtaXR0ZXJ9fSAqLyAoXG4gICAgaGlnaC5oaWdobGlnaHQodmFsdWUsIHtsYW5ndWFnZSwgaWdub3JlSWxsZWdhbHM6IHRydWV9KVxuICApXG5cbiAgaGlnaC5jb25maWd1cmUoe30pXG5cbiAgLy8gYGhpZ2hsaWdodC5qc2Agc2VlbXMgdG8gdXNlIHRoaXMgKGN1cnJlbnRseSkgZm9yIGJyb2tlbiBncmFtbWFycywgc28gbGV0XHUyMDE5c1xuICAvLyBrZWVwIGl0IGluIHRoZXJlIGp1c3QgdG8gYmUgc3VyZS5cbiAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICBpZiAocmVzdWx0LmVycm9yUmFpc2VkKSB7XG4gICAgdGhyb3cgcmVzdWx0LmVycm9yUmFpc2VkXG4gIH1cblxuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbGFuZ3VhZ2VgIGlzIGFsd2F5cyBkZWZpbmVkIGluIGBoaWdobGlnaHRgLlxuICByZXN1bHQuX2VtaXR0ZXIucm9vdC5kYXRhLmxhbmd1YWdlID0gcmVzdWx0Lmxhbmd1YWdlXG4gIHJlc3VsdC5fZW1pdHRlci5yb290LmRhdGEucmVsZXZhbmNlID0gcmVzdWx0LnJlbGV2YW5jZVxuXG4gIHJldHVybiByZXN1bHQuX2VtaXR0ZXIucm9vdFxufVxuXG4vKipcbiAqIEhpZ2hsaWdodCBgdmFsdWVgIChjb2RlKSBhbmQgZ3Vlc3MgaXRzIHByb2dyYW1taW5nIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBDb2RlIHRvIGhpZ2hsaWdodC5cbiAqIEBwYXJhbSB7QXV0b09wdGlvbnN9IFtvcHRpb25zPXt9XVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge1Jvb3R9XG4gKiAgIEEgaGFzdCBgUm9vdGAgbm9kZS5cbiAqL1xuZnVuY3Rpb24gaGlnaGxpZ2h0QXV0byh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHN1YnNldCA9IG9wdGlvbnMuc3Vic2V0IHx8IGhpZ2gubGlzdExhbmd1YWdlcygpXG4gIGxldCBwcmVmaXggPSBvcHRpb25zLnByZWZpeFxuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge1Jvb3R9ICovXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdHlwZTogJ3Jvb3QnLFxuICAgIGRhdGE6IHtsYW5ndWFnZTogbnVsbCwgcmVsZXZhbmNlOiAwfSxcbiAgICBjaGlsZHJlbjogW11cbiAgfVxuXG4gIGlmIChwcmVmaXggPT09IG51bGwgfHwgcHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmVmaXggPSBkZWZhdWx0UHJlZml4XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IGZhdWx0KCdFeHBlY3RlZCBgc3RyaW5nYCBmb3IgdmFsdWUsIGdvdCBgJXNgJywgdmFsdWUpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IHN1YnNldC5sZW5ndGgpIHtcbiAgICBjb25zdCBuYW1lID0gc3Vic2V0W2luZGV4XVxuXG4gICAgaWYgKCFoaWdoLmdldExhbmd1YWdlKG5hbWUpKSBjb250aW51ZVxuXG4gICAgY29uc3QgY3VycmVudCA9IGhpZ2hsaWdodChuYW1lLCB2YWx1ZSwgb3B0aW9ucylcblxuICAgIGlmIChjdXJyZW50LmRhdGEucmVsZXZhbmNlID4gcmVzdWx0LmRhdGEucmVsZXZhbmNlKSByZXN1bHQgPSBjdXJyZW50XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqICAgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgbmFtZS5cbiAqIEBwYXJhbSB7SGlnaGxpZ2h0U3ludGF4fSBzeW50YXhcbiAqICAgYGhpZ2hsaWdodC5qc2AgbGFuZ3VhZ2Ugc3ludGF4LlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2UsIHN5bnRheCkge1xuICBoaWdoLnJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2UsIHN5bnRheClcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhbGlhc2VzIGZvciBhbHJlYWR5IHJlZ2lzdGVyZWQgbGFuZ3VhZ2VzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFJlY29yZDxzdHJpbmcsIHN0cmluZ3xBcnJheTxzdHJpbmc+Pn0gbGFuZ3VhZ2VcbiAqICAgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgbmFtZSBvciBhIG1hcCBvZiBgbGFuZ3VhZ2VgcyB0byBgYWxpYXNgZXMgb3IgYGxpc3Rgc1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gW2FsaWFzXVxuICogICBOZXcgYWxpYXNlcyBmb3IgdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IHJlZ2lzdGVyQWxpYXMgPVxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoKGxhbmd1YWdlOiBzdHJpbmcsIGFsaWFzOiBzdHJpbmd8QXJyYXk8c3RyaW5nPikgPT4gdm9pZCkgJlxuICAgKiAgICgoYWxpYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nfEFycmF5PHN0cmluZz4+KSA9PiB2b2lkKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlY29yZDxzdHJpbmcsIHN0cmluZ3xBcnJheTxzdHJpbmc+Pn0gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBbYWxpYXNdXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGxhbmd1YWdlLCBhbGlhcykge1xuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogc2hvdWxkIGJlIGEgc3RyaW5nIGluIHRoaXMgb3ZlcmxvYWQuXG4gICAgICAgIGhpZ2gucmVnaXN0ZXJBbGlhc2VzKGFsaWFzLCB7bGFuZ3VhZ2VOYW1lOiBsYW5ndWFnZX0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgbGV0IGtleVxuXG4gICAgICAgIGZvciAoa2V5IGluIGxhbmd1YWdlKSB7XG4gICAgICAgICAgaWYgKG93bi5jYWxsKGxhbmd1YWdlLCBrZXkpKSB7XG4gICAgICAgICAgICBoaWdoLnJlZ2lzdGVyQWxpYXNlcyhsYW5ndWFnZVtrZXldLCB7bGFuZ3VhZ2VOYW1lOiBrZXl9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gYGFsaWFzYCBvciBgbGFuZ3VhZ2VgIGlzIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzT3JMYW5ndWFnZVxuICogICBOYW1lIG9mIGEgcmVnaXN0ZXJlZCBsYW5ndWFnZSBvciBhbGlhcy5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBhbGlhc09ybGFuZ3VhZ2VgIGlzIHJlZ2lzdGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyZWQoYWxpYXNPckxhbmd1YWdlKSB7XG4gIHJldHVybiBCb29sZWFuKGhpZ2guZ2V0TGFuZ3VhZ2UoYWxpYXNPckxhbmd1YWdlKSlcbn1cblxuLyoqXG4gKiBMaXN0IHJlZ2lzdGVyZWQgbGFuZ3VhZ2VzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fVxuICogICBOYW1lcyBvZiByZWdpc3RlcmVkIGxhbmd1YWdlLlxuICovXG5mdW5jdGlvbiBsaXN0TGFuZ3VhZ2VzKCkge1xuICByZXR1cm4gaGlnaC5saXN0TGFuZ3VhZ2VzKClcbn1cblxuLyoqIEB0eXBlIHtIaWdobGlnaHRFbWl0dGVyfSAqL1xuY2xhc3MgSGFzdEVtaXR0ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtIaWdobGlnaHRPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLyoqIEB0eXBlIHtIaWdobGlnaHRPcHRpb25zfSAqL1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICAvKiogQHR5cGUge1Jvb3R9ICovXG4gICAgdGhpcy5yb290ID0ge1xuICAgICAgdHlwZTogJ3Jvb3QnLFxuICAgICAgZGF0YToge2xhbmd1YWdlOiBudWxsLCByZWxldmFuY2U6IDB9LFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICAgIC8qKiBAdHlwZSB7W1Jvb3QsIC4uLlNwYW5bXV19ICovXG4gICAgdGhpcy5zdGFjayA9IFt0aGlzLnJvb3RdXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBhZGRUZXh0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnJykgcmV0dXJuXG5cbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgdGFpbCA9IGN1cnJlbnQuY2hpbGRyZW5bY3VycmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXVxuXG4gICAgaWYgKHRhaWwgJiYgdGFpbC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRhaWwudmFsdWUgKz0gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5jaGlsZHJlbi5wdXNoKHt0eXBlOiAndGV4dCcsIHZhbHVlfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBhZGRLZXl3b3JkKHZhbHVlLCBuYW1lKSB7XG4gICAgdGhpcy5vcGVuTm9kZShuYW1lKVxuICAgIHRoaXMuYWRkVGV4dCh2YWx1ZSlcbiAgICB0aGlzLmNsb3NlTm9kZSgpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIYXN0RW1pdHRlcn0gb3RoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGFkZFN1Ymxhbmd1YWdlKG90aGVyLCBuYW1lKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGNvbnN0IHJlc3VsdHMgPSBvdGhlci5yb290LmNoaWxkcmVuXG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgY3VycmVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFtuYW1lXX0sXG4gICAgICAgIGNoaWxkcmVuOiByZXN1bHRzXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50LmNoaWxkcmVuLnB1c2goLi4ucmVzdWx0cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIG9wZW5Ob2RlKG5hbWUpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBuYW1lLnNwbGl0KCcuJykubWFwKChkKSA9PiB0aGlzLm9wdGlvbnMuY2xhc3NQcmVmaXggKyBkKVxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICAvKiogQHR5cGUge1NwYW59ICovXG4gICAgY29uc3QgY2hpbGQgPSB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lfSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cblxuICAgIGN1cnJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB0aGlzLnN0YWNrLnB1c2goY2hpbGQpXG4gIH1cblxuICAvKipcbiAgICovXG4gIGNsb3NlTm9kZSgpIHtcbiAgICB0aGlzLnN0YWNrLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICovXG4gIGNsb3NlQWxsTm9kZXMoKSB7fVxuXG4gIC8qKlxuICAgKi9cbiAgZmluYWxpemUoKSB7fVxuXG4gIC8qKlxuICAgKi9cbiAgdG9IVE1MKCkge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb3dsaWdodCA9IHtcbiAgaGlnaGxpZ2h0LFxuICBoaWdobGlnaHRBdXRvLFxuICByZWdpc3Rlckxhbmd1YWdlLFxuICByZWdpc3RlcmVkLFxuICBsaXN0TGFuZ3VhZ2VzLFxuICByZWdpc3RlckFsaWFzXG59XG4iLCAiLy8gQHRzLWV4cGVjdC1lcnJvclxuaW1wb3J0IGZvcm1hdHRlciBmcm9tICdmb3JtYXQnXG5cbmV4cG9ydCBjb25zdCBmYXVsdCA9IE9iamVjdC5hc3NpZ24oY3JlYXRlKEVycm9yKSwge1xuICBldmFsOiBjcmVhdGUoRXZhbEVycm9yKSxcbiAgcmFuZ2U6IGNyZWF0ZShSYW5nZUVycm9yKSxcbiAgcmVmZXJlbmNlOiBjcmVhdGUoUmVmZXJlbmNlRXJyb3IpLFxuICBzeW50YXg6IGNyZWF0ZShTeW50YXhFcnJvciksXG4gIHR5cGU6IGNyZWF0ZShUeXBlRXJyb3IpLFxuICB1cmk6IGNyZWF0ZShVUklFcnJvcilcbn0pXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGBFQ29uc3RydWN0b3JgLCB3aXRoIHRoZSBmb3JtYXR0ZWQgYGZvcm1hdGAgYXMgYSBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBAdGVtcGxhdGUge0Vycm9yfSBGYXVsdFxuICogQHRlbXBsYXRlIHtuZXcgKHJlYXNvbjogc3RyaW5nKSA9PiBGYXVsdH0gQ2xhc3NcbiAqIEBwYXJhbSB7Q2xhc3N9IENvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoQ29uc3RydWN0b3IpIHtcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgRm9ybWF0dGVkRXJyb3IuZGlzcGxheU5hbWUgPSBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBDb25zdHJ1Y3Rvci5uYW1lXG5cbiAgcmV0dXJuIEZvcm1hdHRlZEVycm9yXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBlcnJvciB3aXRoIGEgcHJpbnRmLWxpa2UgZm9ybWF0dGVkIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IFtmb3JtYXRdXG4gICAqICAgVGVtcGxhdGUgc3RyaW5nLlxuICAgKiBAcGFyYW0gey4uLnVua25vd259IHZhbHVlc1xuICAgKiAgIFZhbHVlcyB0byByZW5kZXIgaW4gYGZvcm1hdGAuXG4gICAqIEByZXR1cm5zIHtGYXVsdH1cbiAgICovXG4gIGZ1bmN0aW9uIEZvcm1hdHRlZEVycm9yKGZvcm1hdCwgLi4udmFsdWVzKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgY29uc3QgcmVhc29uID0gZm9ybWF0ID8gZm9ybWF0dGVyKGZvcm1hdCwgLi4udmFsdWVzKSA6IGZvcm1hdFxuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IocmVhc29uKVxuICB9XG59XG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpLlRlc3RGdW5jdGlvbkFueXRoaW5nfSBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlBhcmVudFsnY2hpbGRyZW4nXVtudW1iZXJdfSBIYXN0Q2hpbGRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5UZXh0fSBIYXN0VGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkNvbW1lbnR9IEhhc3RDb21tZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gSGFzdFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBIYXN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IEhhc3RQcm9wZXJ0aWVzXG4gKiBAdHlwZWRlZiB7SGFzdENoaWxkfEhhc3RSb290fSBIYXN0Tm9kZVxuICogQHR5cGVkZWYge0hhc3RSb290fEhhc3RFbGVtZW50fSBIYXN0UGFyZW50XG4gKlxuICogQHR5cGVkZWYgeydub3JtYWwnfCdwcmUnfCdub3dyYXAnfCdwcmUtd3JhcCd9IFdoaXRlc3BhY2VcbiAqIEB0eXBlZGVmIHtib29sZWFufSBCcmVha1ZhbHVlXG4gKiBAdHlwZWRlZiB7MXwyfSBCcmVha051bWJlclxuICogQHR5cGVkZWYgeydcXG4nfSBCcmVha0ZvcmNlXG4gKiBAdHlwZWRlZiB7QnJlYWtWYWx1ZXxCcmVha051bWJlcnx1bmRlZmluZWR9IEJyZWFrQmVmb3JlXG4gKiBAdHlwZWRlZiB7QnJlYWtWYWx1ZXxCcmVha051bWJlcnxCcmVha0ZvcmNlfHVuZGVmaW5lZH0gQnJlYWtBZnRlclxuICpcbiAqIEB0eXBlZGVmIENvbGxlY3Rpb25PcHRpb25zXG4gKiBAcHJvcGVydHkge1doaXRlc3BhY2V9IHdoaXRlc3BhY2VcbiAqIEBwcm9wZXJ0eSB7QnJlYWtCZWZvcmV9IGJyZWFrQmVmb3JlXG4gKiBAcHJvcGVydHkge0JyZWFrQWZ0ZXJ9IGJyZWFrQWZ0ZXJcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge1doaXRlc3BhY2V9IFt3aGl0ZXNwYWNlPSdub3JtYWwnXVxuICogICBJbml0aWFsIENTUyB3aGl0ZXNwYWNlIHNldHRpbmcgdG8gdXNlLlxuICovXG5cbmltcG9ydCB7Y29udmVydEVsZW1lbnR9IGZyb20gJ2hhc3QtdXRpbC1pcy1lbGVtZW50J1xuaW1wb3J0IHtmaW5kQWZ0ZXJ9IGZyb20gJ3VuaXN0LXV0aWwtZmluZC1hZnRlcidcblxuY29uc3Qgc2VhcmNoTGluZUZlZWRzID0gL1xcbi9nXG5jb25zdCBzZWFyY2hUYWJPclNwYWNlcyA9IC9bXFx0IF0rL2dcblxuY29uc3QgYnIgPSBjb252ZXJ0RWxlbWVudCgnYnInKVxuY29uc3QgcCA9IGNvbnZlcnRFbGVtZW50KCdwJylcbmNvbnN0IGNlbGwgPSBjb252ZXJ0RWxlbWVudChbJ3RoJywgJ3RkJ10pXG5jb25zdCByb3cgPSBjb252ZXJ0RWxlbWVudCgndHInKVxuXG4vLyBOb3RlIHRoYXQgd2UgZG9uXHUyMDE5dCBuZWVkIHRvIGluY2x1ZGUgdm9pZCBlbGVtZW50cyBoZXJlIGFzIHRoZXkgZG9uXHUyMDE5dCBoYXZlIHRleHQuXG4vLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2h0bWwtdm9pZC1lbGVtZW50cz5cbmNvbnN0IG5vdFJlbmRlcmVkID0gY29udmVydEVsZW1lbnQoW1xuICAvLyBMaXN0IGZyb206IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHM+XG4gICdkYXRhbGlzdCcsXG4gICdoZWFkJyxcbiAgJ25vZW1iZWQnLFxuICAnbm9mcmFtZXMnLFxuICAnbm9zY3JpcHQnLCAvLyBBY3QgYXMgaWYgd2Ugc3VwcG9ydCBzY3JpcHRpbmcuXG4gICdycCcsXG4gICdzY3JpcHQnLFxuICAnc3R5bGUnLFxuICAndGVtcGxhdGUnLFxuICAndGl0bGUnLFxuICAvLyBIaWRkZW4gYXR0cmlidXRlLlxuICBoaWRkZW4sXG4gIC8vIEZyb206IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMz5cbiAgY2xvc2VkRGlhbG9nXG5dKVxuXG4vLyBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtY3NzLXVzZXItYWdlbnQtc3R5bGUtc2hlZXQtYW5kLXByZXNlbnRhdGlvbmFsLWhpbnRzPlxuY29uc3QgYmxvY2tPckNhcHRpb24gPSBjb252ZXJ0RWxlbWVudChbXG4gICdhZGRyZXNzJywgLy8gRmxvdyBjb250ZW50XG4gICdhcnRpY2xlJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdhc2lkZScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnYmxvY2txdW90ZScsIC8vIEZsb3cgY29udGVudFxuICAnYm9keScsIC8vIFBhZ2VcbiAgJ2NhcHRpb24nLCAvLyBgdGFibGUtY2FwdGlvbmBcbiAgJ2NlbnRlcicsIC8vIEZsb3cgY29udGVudCAobGVnYWN5KVxuICAnZGQnLCAvLyBMaXN0c1xuICAnZGlhbG9nJywgLy8gRmxvdyBjb250ZW50XG4gICdkaXInLCAvLyBMaXN0cyAobGVnYWN5KVxuICAnZGwnLCAvLyBMaXN0c1xuICAnZHQnLCAvLyBMaXN0c1xuICAnZGl2JywgLy8gRmxvdyBjb250ZW50XG4gICdmaWd1cmUnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2ZpZ2NhcHRpb24nLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2Zvb3RlcicsIC8vIEZsb3cgY29udGVudFxuICAnZm9ybSwnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ2gxJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoMicsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDMnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2g0JywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdoNScsIC8vIFNlY3Rpb25zIGFuZCBoZWFkaW5nc1xuICAnaDYnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ2hlYWRlcicsIC8vIEZsb3cgY29udGVudFxuICAnaGdyb3VwJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICdocicsIC8vIEZsb3cgY29udGVudFxuICAnaHRtbCcsIC8vIFBhZ2VcbiAgJ2xlZ2VuZCcsIC8vIEZsb3cgY29udGVudFxuICAnbGlzdGluZycsIC8vIEZsb3cgY29udGVudCAobGVnYWN5KVxuICAnbWFpbicsIC8vIEZsb3cgY29udGVudFxuICAnbWVudScsIC8vIExpc3RzXG4gICduYXYnLCAvLyBTZWN0aW9ucyBhbmQgaGVhZGluZ3NcbiAgJ29sJywgLy8gTGlzdHNcbiAgJ3AnLCAvLyBGbG93IGNvbnRlbnRcbiAgJ3BsYWludGV4dCcsIC8vIEZsb3cgY29udGVudCAobGVnYWN5KVxuICAncHJlJywgLy8gRmxvdyBjb250ZW50XG4gICdzZWN0aW9uJywgLy8gU2VjdGlvbnMgYW5kIGhlYWRpbmdzXG4gICd1bCcsIC8vIExpc3RzXG4gICd4bXAnIC8vIEZsb3cgY29udGVudCAobGVnYWN5KVxuXSlcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgYGlubmVyVGV4dGAgZ2V0dGVyOlxuICogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1pbm5lcnRleHQtaWRsLWF0dHJpYnV0ZT5cbiAqIE5vdGUgdGhhdCB3ZSBhY3QgYXMgaWYgYG5vZGVgIGlzIGJlaW5nIHJlbmRlcmVkLCBhbmQgYXMgaWYgd2VcdTIwMTlyZSBhXG4gKiBDU1Mtc3VwcG9ydGluZyB1c2VyIGFnZW50LlxuICpcbiAqIEBwYXJhbSB7SGFzdE5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9UZXh0KG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAvKiogQHR5cGUge0FycmF5LjxIYXN0Q2hpbGQ+fSAqL1xuICAvLyBAdHMtaWdub3JlIGxvb2tzIGxpa2UgYSBwYXJlbnQuXG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiB8fCBbXVxuICBjb25zdCBibG9jayA9IGJsb2NrT3JDYXB0aW9uKG5vZGUpXG4gIGNvbnN0IHdoaXRlc3BhY2UgPSBpbmZlcldoaXRlc3BhY2Uobm9kZSwge1xuICAgIHdoaXRlc3BhY2U6IG9wdGlvbnMud2hpdGVzcGFjZSB8fCAnbm9ybWFsJyxcbiAgICBicmVha0JlZm9yZTogZmFsc2UsXG4gICAgYnJlYWtBZnRlcjogZmFsc2VcbiAgfSlcbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nfEJyZWFrTnVtYmVyPn0gKi9cbiAgbGV0IHJlc3VsdHNcbiAgLyoqIEB0eXBlIHtzdHJpbmd8QnJlYWtOdW1iZXJ9ICovXG4gIGxldCB2YWx1ZVxuICAvKiogQHR5cGUge251bWJlcnx1bmRlZmluZWR9ICovXG4gIGxldCBjb3VudFxuXG4gIC8vIFRyZWF0IGB0ZXh0YCBhbmQgYGNvbW1lbnRgIGFzIGhhdmluZyBub3JtYWwgd2hpdGUtc3BhY2UuXG4gIC8vIFRoaXMgZGV2aWF0ZXMgZnJvbSB0aGUgc3BlYyBhcyBpbiB0aGUgRE9NIHRoZSBub2RlXHUyMDE5cyBgLmRhdGFgIGhhcyB0byBiZVxuICAvLyByZXR1cm5lZC5cbiAgLy8gSWYgeW91IHdhbnQgdGhhdCBiZWhhdmlvciB1c2UgYGhhc3QtdXRpbC10by1zdHJpbmdgLlxuICAvLyBBbGwgb3RoZXIgbm9kZXMgYXJlIGxhdGVyIGhhbmRsZWQgYXMgaWYgdGhleSBhcmUgYGVsZW1lbnRgcyAoc28gdGhlXG4gIC8vIGFsZ29yaXRobSBhbHNvIHdvcmtzIG9uIGEgYHJvb3RgKS5cbiAgLy8gTm9kZXMgd2l0aG91dCBjaGlsZHJlbiBhcmUgdHJlYXRlZCBhcyBhIHZvaWQgZWxlbWVudCwgc28gYGRvY3R5cGVgIGlzIHRodXNcbiAgLy8gaWdub3JlZC5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnIHx8IG5vZGUudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3RUZXh0KG5vZGUsIHt3aGl0ZXNwYWNlLCBicmVha0JlZm9yZTogdHJ1ZSwgYnJlYWtBZnRlcjogdHJ1ZX0pXG4gIH1cblxuICAvLyAxLiAgSWYgdGhpcyBlbGVtZW50IGlzIG5vdCBiZWluZyByZW5kZXJlZCwgb3IgaWYgdGhlIHVzZXIgYWdlbnQgaXMgYVxuICAvLyAgICAgbm9uLUNTUyB1c2VyIGFnZW50LCB0aGVuIHJldHVybiB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgdGV4dENvbnRlbnQgSURMXG4gIC8vICAgICBhdHRyaWJ1dGUgb24gdGhpcyBlbGVtZW50LlxuICAvL1xuICAvLyAgICAgTm90ZTogd2VcdTIwMTlyZSBub3Qgc3VwcG9ydGluZyBzdHlsZXNoZWV0cyBzbyB3ZVx1MjAxOXJlIGFjdGluZyBhcyBpZiB0aGUgbm9kZVxuICAvLyAgICAgaXMgcmVuZGVyZWQuXG4gIC8vXG4gIC8vICAgICBJZiB5b3Ugd2FudCB0aGF0IGJlaGF2aW9yIHVzZSBgaGFzdC11dGlsLXRvLXN0cmluZ2AuXG4gIC8vICAgICBJbXBvcnRhbnQ6IHdlXHUyMDE5bGwgaGF2ZSB0byBhY2NvdW50IGZvciB0aGlzIGxhdGVyIHRob3VnaC5cblxuICAvLyAyLiAgTGV0IHJlc3VsdHMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cbiAgcmVzdWx0cyA9IFtdXG5cbiAgLy8gMy4gIEZvciBlYWNoIGNoaWxkIG5vZGUgbm9kZSBvZiB0aGlzIGVsZW1lbnQ6XG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgLy8gMy4xLiBMZXQgY3VycmVudCBiZSB0aGUgbGlzdCByZXN1bHRpbmcgaW4gcnVubmluZyB0aGUgaW5uZXIgdGV4dFxuICAgIC8vICAgICAgY29sbGVjdGlvbiBzdGVwcyB3aXRoIG5vZGUuXG4gICAgLy8gICAgICBFYWNoIGl0ZW0gaW4gcmVzdWx0cyB3aWxsIGVpdGhlciBiZSBhIEphdmFTY3JpcHQgc3RyaW5nIG9yIGFcbiAgICAvLyAgICAgIHBvc2l0aXZlIGludGVnZXIgKGEgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudCkuXG4gICAgLy8gMy4yLiBGb3IgZWFjaCBpdGVtIGl0ZW0gaW4gY3VycmVudCwgYXBwZW5kIGl0ZW0gdG8gcmVzdWx0cy5cbiAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAvLyBAdHMtaWdub3JlIExvb2tzIGxpa2UgYSBwYXJlbnQuXG4gICAgICBpbm5lclRleHRDb2xsZWN0aW9uKGNoaWxkcmVuW2luZGV4XSwgbm9kZSwge1xuICAgICAgICB3aGl0ZXNwYWNlLFxuICAgICAgICBicmVha0JlZm9yZTogaW5kZXggPyBudWxsIDogYmxvY2ssXG4gICAgICAgIGJyZWFrQWZ0ZXI6XG4gICAgICAgICAgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGggLSAxID8gYnIoY2hpbGRyZW5baW5kZXggKyAxXSkgOiBibG9ja1xuICAgICAgfSlcbiAgICApXG4gIH1cblxuICAvLyA0LiAgUmVtb3ZlIGFueSBpdGVtcyBmcm9tIHJlc3VsdHMgdGhhdCBhcmUgdGhlIGVtcHR5IHN0cmluZy5cbiAgLy8gNS4gIFJlbW92ZSBhbnkgcnVucyBvZiBjb25zZWN1dGl2ZSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50IGl0ZW1zIGF0IHRoZVxuICAvLyAgICAgc3RhcnQgb3IgZW5kIG9mIHJlc3VsdHMuXG4gIC8vIDYuICBSZXBsYWNlIGVhY2ggcmVtYWluaW5nIHJ1biBvZiBjb25zZWN1dGl2ZSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50XG4gIC8vICAgICBpdGVtcyB3aXRoIGEgc3RyaW5nIGNvbnNpc3Rpbmcgb2YgYXMgbWFueSBVKzAwMEEgTElORSBGRUVEIChMRilcbiAgLy8gICAgIGNoYXJhY3RlcnMgYXMgdGhlIG1heGltdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgcmVxdWlyZWQgbGluZSBicmVha1xuICAvLyAgICAgY291bnQgaXRlbXMuXG4gIGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgdmFsdWUgPSByZXN1bHRzW2luZGV4XVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlID4gY291bnQpIGNvdW50ID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoY291bnQpIHJlc3VsdC5wdXNoKCdcXG4nLnJlcGVhdChjb3VudCkpXG4gICAgICBjb3VudCA9IDBcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIC8vIDcuICBSZXR1cm4gdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHN0cmluZyBpdGVtcyBpbiByZXN1bHRzLlxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG5cbi8qKlxuICogPGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2lubmVyLXRleHQtY29sbGVjdGlvbi1zdGVwcz5cbiAqXG4gKiBAcGFyYW0ge0hhc3ROb2RlfSBub2RlXG4gKiBAcGFyYW0ge0hhc3RQYXJlbnR9IHBhcmVudFxuICogQHBhcmFtIHtDb2xsZWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FycmF5LjxzdHJpbmd8QnJlYWtOdW1iZXI+fVxuICovXG5mdW5jdGlvbiBpbm5lclRleHRDb2xsZWN0aW9uKG5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICByZXR1cm4gY29sbGVjdEVsZW1lbnQobm9kZSwgcGFyZW50LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wdGlvbnMud2hpdGVzcGFjZSA9PT0gJ25vcm1hbCdcbiAgICAgICAgPyBjb2xsZWN0VGV4dChub2RlLCBvcHRpb25zKVxuICAgICAgICA6IGNvbGxlY3RQcmVUZXh0KG5vZGUpXG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbi8qKlxuICogQ29sbGVjdCBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SGFzdEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7SGFzdFBhcmVudH0gcGFyZW50XG4gKiBAcGFyYW0ge0NvbGxlY3Rpb25PcHRpb25zfSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RFbGVtZW50KG5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAvLyBGaXJzdCB3ZSBpbmZlciB0aGUgYHdoaXRlLXNwYWNlYCBwcm9wZXJ0eS5cbiAgY29uc3Qgd2hpdGVzcGFjZSA9IGluZmVyV2hpdGVzcGFjZShub2RlLCBvcHRpb25zKVxuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW11cbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nfEJyZWFrTnVtYmVyPn0gKi9cbiAgbGV0IGl0ZW1zID0gW11cbiAgLyoqIEB0eXBlIHtCcmVha051bWJlcnx1bmRlZmluZWR9ICovXG4gIGxldCBwcmVmaXhcbiAgLyoqIEB0eXBlIHtCcmVha051bWJlcnxCcmVha0ZvcmNlfHVuZGVmaW5lZH0gKi9cbiAgbGV0IHN1ZmZpeFxuXG4gIC8vIFdlXHUyMDE5cmUgaWdub3JpbmcgcG9pbnQgMywgYW5kIGV4aXRpbmcgd2l0aG91dCBhbnkgY29udGVudCBoZXJlLCBiZWNhdXNlIHdlXG4gIC8vIGRldmlhdGVkIGZyb20gdGhlIHNwZWMgaW4gYHRvVGV4dGAgYXQgc3RlcCAzLlxuICBpZiAobm90UmVuZGVyZWQobm9kZSkpIHtcbiAgICByZXR1cm4gaXRlbXNcbiAgfVxuXG4gIC8vIE5vdGU6IHdlIGZpcnN0IGRldGVjdCBpZiB0aGVyZSBpcyBnb2luZyB0byBiZSBhIGJyZWFrIGJlZm9yZSBvciBhZnRlciB0aGVcbiAgLy8gY29udGVudHMsIGFzIHRoYXQgY2hhbmdlcyB0aGUgd2hpdGUtc3BhY2UgaGFuZGxpbmcuXG5cbiAgLy8gMi4gIElmIG5vZGVcdTIwMTlzIGNvbXB1dGVkIHZhbHVlIG9mIGB2aXNpYmlsaXR5YCBpcyBub3QgYHZpc2libGVgLCB0aGVuIHJldHVyblxuICAvLyAgICAgaXRlbXMuXG4gIC8vXG4gIC8vICAgICBOb3RlOiBJZ25vcmVkLCBhcyBldmVyeXRoaW5nIGlzIHZpc2libGUgYnkgZGVmYXVsdCB1c2VyIGFnZW50IHN0eWxlcy5cblxuICAvLyAzLiAgSWYgbm9kZSBpcyBub3QgYmVpbmcgcmVuZGVyZWQsIHRoZW4gcmV0dXJuIGl0ZW1zLiBbLi4uXVxuICAvL1xuICAvLyAgICAgTm90ZTogV2UgYWxyZWFkeSBkaWQgdGhpcyBhYm92ZS5cblxuICAvLyBTZWUgYGNvbGxlY3RUZXh0YCBmb3Igc3RlcCA0LlxuXG4gIC8vIDUuICBJZiBub2RlIGlzIGEgYDxicj5gIGVsZW1lbnQsIHRoZW4gYXBwZW5kIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBzaW5nbGVcbiAgLy8gICAgIFUrMDAwQSBMSU5FIEZFRUQgKExGKSBjaGFyYWN0ZXIgdG8gaXRlbXMuXG4gIGlmIChicihub2RlKSkge1xuICAgIHN1ZmZpeCA9ICdcXG4nXG4gIH1cblxuICAvLyA3LiAgSWYgbm9kZVx1MjAxOXMgY29tcHV0ZWQgdmFsdWUgb2YgYGRpc3BsYXlgIGlzIGB0YWJsZS1yb3dgLCBhbmQgbm9kZVx1MjAxOXMgQ1NTXG4gIC8vICAgICBib3ggaXMgbm90IHRoZSBsYXN0IGB0YWJsZS1yb3dgIGJveCBvZiB0aGUgbmVhcmVzdCBhbmNlc3RvciBgdGFibGVgXG4gIC8vICAgICBib3gsIHRoZW4gYXBwZW5kIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBzaW5nbGUgVSswMDBBIExJTkUgRkVFRCAoTEYpXG4gIC8vICAgICBjaGFyYWN0ZXIgdG8gaXRlbXMuXG4gIC8vXG4gIC8vICAgICBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0YWJsZXMtMj5cbiAgLy8gICAgIE5vdGU6IG5lZWRzIGZ1cnRoZXIgaW52ZXN0aWdhdGlvbiBhcyB0aGlzIGRvZXMgbm90IGFjY291bnQgZm9yIGltcGxpY2l0XG4gIC8vICAgICByb3dzLlxuICBlbHNlIGlmIChyb3cobm9kZSkgJiYgZmluZEFmdGVyKHBhcmVudCwgbm9kZSwgcm93KSkge1xuICAgIHN1ZmZpeCA9ICdcXG4nXG4gIH1cblxuICAvLyA4LiAgSWYgbm9kZSBpcyBhIGA8cD5gIGVsZW1lbnQsIHRoZW4gYXBwZW5kIDIgKGEgcmVxdWlyZWQgbGluZSBicmVhayBjb3VudClcbiAgLy8gICAgIGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBpdGVtcy5cbiAgZWxzZSBpZiAocChub2RlKSkge1xuICAgIHByZWZpeCA9IDJcbiAgICBzdWZmaXggPSAyXG4gIH1cblxuICAvLyA5LiAgSWYgbm9kZVx1MjAxOXMgdXNlZCB2YWx1ZSBvZiBgZGlzcGxheWAgaXMgYmxvY2stbGV2ZWwgb3IgYHRhYmxlLWNhcHRpb25gLFxuICAvLyAgICAgdGhlbiBhcHBlbmQgMSAoYSByZXF1aXJlZCBsaW5lIGJyZWFrIGNvdW50KSBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2ZcbiAgLy8gICAgIGl0ZW1zLlxuICBlbHNlIGlmIChibG9ja09yQ2FwdGlvbihub2RlKSkge1xuICAgIHByZWZpeCA9IDFcbiAgICBzdWZmaXggPSAxXG4gIH1cblxuICAvLyAxLiAgTGV0IGl0ZW1zIGJlIHRoZSByZXN1bHQgb2YgcnVubmluZyB0aGUgaW5uZXIgdGV4dCBjb2xsZWN0aW9uIHN0ZXBzIHdpdGhcbiAgLy8gICAgIGVhY2ggY2hpbGQgbm9kZSBvZiBub2RlIGluIHRyZWUgb3JkZXIsIGFuZCB0aGVuIGNvbmNhdGVuYXRpbmcgdGhlXG4gIC8vICAgICByZXN1bHRzIHRvIGEgc2luZ2xlIGxpc3QuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgaXRlbXMgPSBpdGVtcy5jb25jYXQoXG4gICAgICBpbm5lclRleHRDb2xsZWN0aW9uKGNoaWxkcmVuW2luZGV4XSwgbm9kZSwge1xuICAgICAgICB3aGl0ZXNwYWNlLFxuICAgICAgICBicmVha0JlZm9yZTogaW5kZXggPyB1bmRlZmluZWQgOiBwcmVmaXgsXG4gICAgICAgIGJyZWFrQWZ0ZXI6XG4gICAgICAgICAgaW5kZXggPCBjaGlsZHJlbi5sZW5ndGggLSAxID8gYnIoY2hpbGRyZW5baW5kZXggKyAxXSkgOiBzdWZmaXhcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLy8gNi4gIElmIG5vZGVcdTIwMTlzIGNvbXB1dGVkIHZhbHVlIG9mIGBkaXNwbGF5YCBpcyBgdGFibGUtY2VsbGAsIGFuZCBub2RlXHUyMDE5cyBDU1NcbiAgLy8gICAgIGJveCBpcyBub3QgdGhlIGxhc3QgYHRhYmxlLWNlbGxgIGJveCBvZiBpdHMgZW5jbG9zaW5nIGB0YWJsZS1yb3dgIGJveCxcbiAgLy8gICAgIHRoZW4gYXBwZW5kIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBzaW5nbGUgVSswMDA5IENIQVJBQ1RFUiBUQUJVTEFUSU9OXG4gIC8vICAgICAodGFiKSBjaGFyYWN0ZXIgdG8gaXRlbXMuXG4gIC8vXG4gIC8vICAgICBTZWU6IDxodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0YWJsZXMtMj5cbiAgaWYgKGNlbGwobm9kZSkgJiYgZmluZEFmdGVyKHBhcmVudCwgbm9kZSwgY2VsbCkpIHtcbiAgICBpdGVtcy5wdXNoKCdcXHQnKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBwcmUtIGFuZCBzdWZmaXguXG4gIGlmIChwcmVmaXgpIGl0ZW1zLnVuc2hpZnQocHJlZml4KVxuICBpZiAoc3VmZml4KSBpdGVtcy5wdXNoKHN1ZmZpeClcblxuICByZXR1cm4gaXRlbXNcbn1cblxuLyoqXG4gKiA0LiAgSWYgbm9kZSBpcyBhIFRleHQgbm9kZSwgdGhlbiBmb3IgZWFjaCBDU1MgdGV4dCBib3ggcHJvZHVjZWQgYnkgbm9kZSxcbiAqICAgICBpbiBjb250ZW50IG9yZGVyLCBjb21wdXRlIHRoZSB0ZXh0IG9mIHRoZSBib3ggYWZ0ZXIgYXBwbGljYXRpb24gb2YgdGhlXG4gKiAgICAgQ1NTIGB3aGl0ZS1zcGFjZWAgcHJvY2Vzc2luZyBydWxlcyBhbmQgYHRleHQtdHJhbnNmb3JtYCBydWxlcywgc2V0XG4gKiAgICAgaXRlbXMgdG8gdGhlIGxpc3Qgb2YgdGhlIHJlc3VsdGluZyBzdHJpbmdzLCBhbmQgcmV0dXJuIGl0ZW1zLlxuICogICAgIFRoZSBDU1MgYHdoaXRlLXNwYWNlYCBwcm9jZXNzaW5nIHJ1bGVzIGFyZSBzbGlnaHRseSBtb2RpZmllZDpcbiAqICAgICBjb2xsYXBzaWJsZSBzcGFjZXMgYXQgdGhlIGVuZCBvZiBsaW5lcyBhcmUgYWx3YXlzIGNvbGxhcHNlZCwgYnV0IHRoZXlcbiAqICAgICBhcmUgb25seSByZW1vdmVkIGlmIHRoZSBsaW5lIGlzIHRoZSBsYXN0IGxpbmUgb2YgdGhlIGJsb2NrLCBvciBpdCBlbmRzXG4gKiAgICAgd2l0aCBhIGJyIGVsZW1lbnQuXG4gKiAgICAgU29mdCBoeXBoZW5zIHNob3VsZCBiZSBwcmVzZXJ2ZWQuXG4gKlxuICogICAgIE5vdGU6IFNlZSBgY29sbGVjdFRleHRgIGFuZCBgY29sbGVjdFByZVRleHRgLlxuICogICAgIE5vdGU6IHdlIGRvblx1MjAxOXQgZGVhbCB3aXRoIGB0ZXh0LXRyYW5zZm9ybWAsIG5vIGVsZW1lbnQgaGFzIHRoYXQgYnlcbiAqICAgICBkZWZhdWx0LlxuICpcbiAqIFNlZTogPGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdGV4dC8jd2hpdGUtc3BhY2UtcGhhc2UtMT5cbiAqXG4gKiBAcGFyYW0ge0hhc3RUZXh0fEhhc3RDb21tZW50fSBub2RlXG4gKiBAcGFyYW0ge0NvbGxlY3Rpb25PcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb2xsZWN0VGV4dChub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKG5vZGUudmFsdWUpXG4gIC8qKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59ICovXG4gIGNvbnN0IGxpbmVzID0gW11cbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge1JlZ0V4cE1hdGNoQXJyYXl8bnVsbH0gKi9cbiAgbGV0IG1hdGNoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICBsZXQgZW5kXG4gIC8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgbGV0IGpvaW5cblxuICB3aGlsZSAoc3RhcnQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICBzZWFyY2hMaW5lRmVlZHMubGFzdEluZGV4ID0gc3RhcnRcbiAgICBtYXRjaCA9IHNlYXJjaExpbmVGZWVkcy5leGVjKHZhbHVlKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBpbmRleGAgaXMgc2V0LlxuICAgIGVuZCA9IG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGhcblxuICAgIGxpbmVzLnB1c2goXG4gICAgICAvLyBBbnkgc2VxdWVuY2Ugb2YgY29sbGFwc2libGUgc3BhY2VzIGFuZCB0YWJzIGltbWVkaWF0ZWx5IHByZWNlZGluZyBvclxuICAgICAgLy8gZm9sbG93aW5nIGEgc2VnbWVudCBicmVhayBpcyByZW1vdmVkLlxuICAgICAgdHJpbUFuZENvbGxhcHNlU3BhY2VzQW5kVGFicyhcbiAgICAgICAgLy8gWy4uLl0gaWdub3JpbmcgYmlkaSBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgKGNoYXJhY3RlcnMgd2l0aCB0aGVcbiAgICAgICAgLy8gQmlkaV9Db250cm9sIHByb3BlcnR5IFtVQVg5XTogQUxNLCBMVFIsIFJUTCwgTFJFLVJMTywgTFJJLVBESSkgYXMgaWZcbiAgICAgICAgLy8gdGhleSB3ZXJlIG5vdCB0aGVyZS5cbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuc2xpY2Uoc3RhcnQsIGVuZClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcdTA2MUNcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRVxcdTIwNjYtXFx1MjA2OV0vZywgJycpLFxuICAgICAgICBvcHRpb25zLmJyZWFrQmVmb3JlLFxuICAgICAgICBvcHRpb25zLmJyZWFrQWZ0ZXJcbiAgICAgIClcbiAgICApXG5cbiAgICBzdGFydCA9IGVuZCArIDFcbiAgfVxuXG4gIC8vIENvbGxhcHNpYmxlIHNlZ21lbnQgYnJlYWtzIGFyZSB0cmFuc2Zvcm1lZCBmb3IgcmVuZGVyaW5nIGFjY29yZGluZyB0byB0aGVcbiAgLy8gc2VnbWVudCBicmVhayB0cmFuc2Zvcm1hdGlvbiBydWxlcy5cbiAgLy8gU28gaGVyZSB3ZSBqdW1wIHRvIDQuMS4yIG9mIFtDU1NURVhUXTpcbiAgLy8gQW55IGNvbGxhcHNpYmxlIHNlZ21lbnQgYnJlYWsgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGFub3RoZXIgY29sbGFwc2libGVcbiAgLy8gc2VnbWVudCBicmVhayBpcyByZW1vdmVkXG4gIHdoaWxlICgrK2luZGV4IDwgbGluZXMubGVuZ3RoKSB7XG4gICAgLy8gKiAgIElmIHRoZSBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIG9yIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzZWdtZW50XG4gICAgLy8gICAgIGJyZWFrIGlzIHRoZSB6ZXJvLXdpZHRoIHNwYWNlIGNoYXJhY3RlciAoVSsyMDBCKSwgdGhlbiB0aGUgYnJlYWsgaXNcbiAgICAvLyAgICAgcmVtb3ZlZCwgbGVhdmluZyBiZWhpbmQgdGhlIHplcm8td2lkdGggc3BhY2UuXG4gICAgaWYgKFxuICAgICAgbGluZXNbaW5kZXhdLmNoYXJDb2RlQXQobGluZXNbaW5kZXhdLmxlbmd0aCAtIDEpID09PSAweDIwMGIgLyogWldTUCAqLyB8fFxuICAgICAgKGluZGV4IDwgbGluZXMubGVuZ3RoIC0gMSAmJlxuICAgICAgICBsaW5lc1tpbmRleCArIDFdLmNoYXJDb2RlQXQoMCkgPT09IDB4MjAwYikgLyogWldTUCAqL1xuICAgICkge1xuICAgICAgcmVzdWx0LnB1c2gobGluZXNbaW5kZXhdKVxuICAgICAgam9pbiA9ICcnXG4gICAgfVxuXG4gICAgLy8gKiAgIE90aGVyd2lzZSwgaWYgdGhlIEVhc3QgQXNpYW4gV2lkdGggcHJvcGVydHkgW1VBWDExXSBvZiBib3RoIHRoZVxuICAgIC8vICAgICBjaGFyYWN0ZXIgYmVmb3JlIGFuZCBhZnRlciB0aGUgc2VnbWVudCBicmVhayBpcyBGdWxsd2lkdGgsIFdpZGUsIG9yXG4gICAgLy8gICAgIEhhbGZ3aWR0aCAobm90IEFtYmlndW91cyksIGFuZCBuZWl0aGVyIHNpZGUgaXMgSGFuZ3VsLCB0aGVuIHRoZVxuICAgIC8vICAgICBzZWdtZW50IGJyZWFrIGlzIHJlbW92ZWQuXG4gICAgLy9cbiAgICAvLyAgICAgTm90ZTogaWdub3JlZC5cbiAgICAvLyAqICAgT3RoZXJ3aXNlLCBpZiB0aGUgd3JpdGluZyBzeXN0ZW0gb2YgdGhlIHNlZ21lbnQgYnJlYWsgaXMgQ2hpbmVzZSxcbiAgICAvLyAgICAgSmFwYW5lc2UsIG9yIFlpLCBhbmQgdGhlIGNoYXJhY3RlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHNlZ21lbnQgYnJlYWtcbiAgICAvLyAgICAgaXMgcHVuY3R1YXRpb24gb3IgYSBzeW1ib2wgKFVuaWNvZGUgZ2VuZXJhbCBjYXRlZ29yeSBQKiBvciBTKikgYW5kXG4gICAgLy8gICAgIGhhcyBhbiBFYXN0IEFzaWFuIFdpZHRoIHByb3BlcnR5IG9mIEFtYmlndW91cywgYW5kIHRoZSBjaGFyYWN0ZXIgb25cbiAgICAvLyAgICAgdGhlIG90aGVyIHNpZGUgb2YgdGhlIHNlZ21lbnQgYnJlYWsgaXMgRnVsbHdpZHRoLCBXaWRlLCBvciBIYWxmd2lkdGgsXG4gICAgLy8gICAgIGFuZCBub3QgSGFuZ3VsLCB0aGVuIHRoZSBzZWdtZW50IGJyZWFrIGlzIHJlbW92ZWQuXG4gICAgLy9cbiAgICAvLyAgICAgTm90ZTogaWdub3JlZC5cblxuICAgIC8vICogICBPdGhlcndpc2UsIHRoZSBzZWdtZW50IGJyZWFrIGlzIGNvbnZlcnRlZCB0byBhIHNwYWNlIChVKzAwMjApLlxuICAgIGVsc2UgaWYgKGxpbmVzW2luZGV4XSkge1xuICAgICAgaWYgKGpvaW4pIHJlc3VsdC5wdXNoKGpvaW4pXG4gICAgICByZXN1bHQucHVzaChsaW5lc1tpbmRleF0pXG4gICAgICBqb2luID0gJyAnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7SGFzdFRleHR8SGFzdENvbW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RQcmVUZXh0KG5vZGUpIHtcbiAgcmV0dXJuIFN0cmluZyhub2RlLnZhbHVlKVxufVxuXG4vKipcbiAqIDMuICBFdmVyeSBjb2xsYXBzaWJsZSB0YWIgaXMgY29udmVydGVkIHRvIGEgY29sbGFwc2libGUgc3BhY2UgKFUrMDAyMCkuXG4gKiA0LiAgQW55IGNvbGxhcHNpYmxlIHNwYWNlIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBhbm90aGVyIGNvbGxhcHNpYmxlXG4gKiAgICAgc3BhY2VcdTIwMTRldmVuIG9uZSBvdXRzaWRlIHRoZSBib3VuZGFyeSBvZiB0aGUgaW5saW5lIGNvbnRhaW5pbmcgdGhhdFxuICogICAgIHNwYWNlLCBwcm92aWRlZCBib3RoIHNwYWNlcyBhcmUgd2l0aGluIHRoZSBzYW1lIGlubGluZSBmb3JtYXR0aW5nXG4gKiAgICAgY29udGV4dFx1MjAxNGlzIGNvbGxhcHNlZCB0byBoYXZlIHplcm8gYWR2YW5jZSB3aWR0aC4gKEl0IGlzIGludmlzaWJsZSxcbiAqICAgICBidXQgcmV0YWlucyBpdHMgc29mdCB3cmFwIG9wcG9ydHVuaXR5LCBpZiBhbnkuKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtCcmVha0JlZm9yZX0gYnJlYWtCZWZvcmVcbiAqIEBwYXJhbSB7QnJlYWtBZnRlcn0gYnJlYWtBZnRlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdHJpbUFuZENvbGxhcHNlU3BhY2VzQW5kVGFicyh2YWx1ZSwgYnJlYWtCZWZvcmUsIGJyZWFrQWZ0ZXIpIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IHN0YXJ0ID0gMFxuICAvKiogQHR5cGUge1JlZ0V4cE1hdGNoQXJyYXl8bnVsbH0gKi9cbiAgbGV0IG1hdGNoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICBsZXQgZW5kXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoVGFiT3JTcGFjZXMubGFzdEluZGV4ID0gc3RhcnRcbiAgICBtYXRjaCA9IHNlYXJjaFRhYk9yU3BhY2VzLmV4ZWModmFsdWUpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGluZGV4YCBpcyBzZXQuXG4gICAgZW5kID0gbWF0Y2ggPyBtYXRjaC5pbmRleCA6IHZhbHVlLmxlbmd0aFxuXG4gICAgLy8gSWYgd2VcdTIwMTlyZSBub3QgZGlyZWN0bHkgYWZ0ZXIgYSBzZWdtZW50IGJyZWFrLCBidXQgdGhlcmUgd2FzIHdoaXRlIHNwYWNlLFxuICAgIC8vIGFkZCBhbiBlbXB0eSB2YWx1ZSB0aGF0IHdpbGwgYmUgdHVybmVkIGludG8gYSBzcGFjZS5cbiAgICBpZiAoIXN0YXJ0ICYmICFlbmQgJiYgbWF0Y2ggJiYgIWJyZWFrQmVmb3JlKSB7XG4gICAgICByZXN1bHQucHVzaCgnJylcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gICAgfVxuXG4gICAgc3RhcnQgPSBtYXRjaCA/IGVuZCArIG1hdGNoWzBdLmxlbmd0aCA6IGVuZFxuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgZW5kLCB0aGVyZSB3YXMgdHJhaWxpbmcgd2hpdGUgc3BhY2UsIGFuZCB0aGVyZVx1MjAxOXMgbm9cbiAgLy8gc2VnbWVudCBicmVhayBhZnRlciB0aGlzIG5vZGUsIGFkZCBhbiBlbXB0eSB2YWx1ZSB0aGF0IHdpbGwgYmUgdHVybmVkXG4gIC8vIGludG8gYSBzcGFjZS5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGVuZGAgaXMgZGVmaW5lZC5cbiAgaWYgKHN0YXJ0ICE9PSBlbmQgJiYgIWJyZWFrQWZ0ZXIpIHtcbiAgICByZXN1bHQucHVzaCgnJylcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignICcpXG59XG5cbi8qKlxuICogV2UgZG9uXHUyMDE5dCBzdXBwb3J0IHZvaWQgZWxlbWVudHMgaGVyZSAoc28gYG5vYnIgd2JyYCAtPiBgbm9ybWFsYCBpcyBpZ25vcmVkKS5cbiAqXG4gKiBAcGFyYW0ge0hhc3ROb2RlfSBub2RlXG4gKiBAcGFyYW0ge0NvbGxlY3Rpb25PcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7V2hpdGVzcGFjZX1cbiAqL1xuZnVuY3Rpb24gaW5mZXJXaGl0ZXNwYWNlKG5vZGUsIG9wdGlvbnMpIHtcbiAgLyoqIEB0eXBlIHtIYXN0UHJvcGVydGllc30gKi9cbiAgbGV0IHByb3BzXG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgcHJvcHMgPSBub2RlLnByb3BlcnRpZXMgfHwge31cbiAgICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xuICAgICAgY2FzZSAnbGlzdGluZyc6XG4gICAgICBjYXNlICdwbGFpbnRleHQnOlxuICAgICAgY2FzZSAneG1wJzpcbiAgICAgICAgcmV0dXJuICdwcmUnXG4gICAgICBjYXNlICdub2JyJzpcbiAgICAgICAgcmV0dXJuICdub3dyYXAnXG4gICAgICBjYXNlICdwcmUnOlxuICAgICAgICByZXR1cm4gcHJvcHMud3JhcCA/ICdwcmUtd3JhcCcgOiAncHJlJ1xuICAgICAgY2FzZSAndGQnOlxuICAgICAgY2FzZSAndGgnOlxuICAgICAgICByZXR1cm4gcHJvcHMubm9XcmFwID8gJ25vd3JhcCcgOiBvcHRpb25zLndoaXRlc3BhY2VcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgcmV0dXJuICdwcmUtd3JhcCdcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMud2hpdGVzcGFjZVxufVxuXG4vKiogQHR5cGUge1Rlc3RGdW5jdGlvbkFueXRoaW5nfSAqL1xuZnVuY3Rpb24gaGlkZGVuKG5vZGUpIHtcbiAgcmV0dXJuIEJvb2xlYW4oKG5vZGUucHJvcGVydGllcyB8fCB7fSkuaGlkZGVuKVxufVxuXG4vKiogQHR5cGUge1Rlc3RGdW5jdGlvbkFueXRoaW5nfSAqL1xuZnVuY3Rpb24gY2xvc2VkRGlhbG9nKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ2RpYWxvZycgJiYgIShub2RlLnByb3BlcnRpZXMgfHwge30pLm9wZW5cbn1cbiIsICIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UeXBlfSBUeXBlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuUHJvcHN9IFByb3BzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uQW55dGhpbmd9IFRlc3RGdW5jdGlvbkFueXRoaW5nXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG5leHBvcnQgdmFyIGZpbmRBZnRlciA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgKDxUIGV4dGVuZHMgTm9kZT4obm9kZTogUGFyZW50LCBpbmRleDogTm9kZXxudW1iZXIsIHRlc3Q6IFRbJ3R5cGUnXXxQYXJ0aWFsPFQ+fGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3RGdW5jdGlvblByZWRpY2F0ZTxUPnxBcnJheS48VFsndHlwZSddfFBhcnRpYWw8VD58aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdEZ1bmN0aW9uUHJlZGljYXRlPFQ+PikgPT4gVHxudWxsKSAmXG4gICAqICAoKG5vZGU6IFBhcmVudCwgaW5kZXg6IE5vZGV8bnVtYmVyLCB0ZXN0PzogbnVsbHx1bmRlZmluZWR8VHlwZXxQcm9wc3xUZXN0RnVuY3Rpb25Bbnl0aGluZ3xBcnJheTxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nPikgPT4gTm9kZXxudWxsKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UGFyZW50fSBwYXJlbnQgUGFyZW50IG5vZGVcbiAgICAgKiBAcGFyYW0ge05vZGV8bnVtYmVyfSBpbmRleCBDaGlsZCBvZiBgcGFyZW50YCwgb3IgaXRcdTIwMTlzIGluZGV4XG4gICAgICogQHBhcmFtIHtudWxsfHVuZGVmaW5lZHxUeXBlfFByb3BzfFRlc3RGdW5jdGlvbkFueXRoaW5nfEFycmF5PFR5cGV8UHJvcHN8VGVzdEZ1bmN0aW9uQW55dGhpbmc+fSBbdGVzdF0gaXMtY29tcGF0aWJsZSB0ZXN0IChzdWNoIGFzIGEgdHlwZSlcbiAgICAgKiBAcmV0dXJucyB7Tm9kZXxudWxsfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChwYXJlbnQsIGluZGV4LCB0ZXN0KSB7XG4gICAgICB2YXIgaXMgPSBjb252ZXJ0KHRlc3QpXG5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudHlwZSB8fCAhcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcGFyZW50IG5vZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIgYXMgaW5kZXgnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGluZGV4KVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNoaWxkIG5vZGUgb3IgaW5kZXgnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBpZiAoaXMocGFyZW50LmNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudCkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50LmNoaWxkcmVuW2luZGV4XVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICApXG4iLCAiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5WaXNpdG9yfSBWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHMsIENPTlRJTlVFLCBTS0lQLCBFWElUfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbmV4cG9ydCB7Q09OVElOVUUsIFNLSVAsIEVYSVR9XG5cbi8qKlxuICogVmlzaXQgY2hpbGRyZW4gb2YgdHJlZSB3aGljaCBwYXNzIGEgdGVzdFxuICpcbiAqIEBwYXJhbSB0cmVlIEFic3RyYWN0IHN5bnRheCB0cmVlIHRvIHdhbGtcbiAqIEBwYXJhbSB0ZXN0IFRlc3QsIG9wdGlvbmFsXG4gKiBAcGFyYW0gdmlzaXRvciBGdW5jdGlvbiB0byBydW4gZm9yIGVhY2ggbm9kZVxuICogQHBhcmFtIHJldmVyc2UgRmlzaXQgdGhlIHRyZWUgaW4gcmV2ZXJzZSwgZGVmYXVsdHMgdG8gZmFsc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogaW1wb3J0KCcuL2NvbXBsZXgtdHlwZXMnKS5CdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZCkgJlxuICAgKiAgICg8VHJlZSBleHRlbmRzIE5vZGU+KHRyZWU6IFRyZWUsIHZpc2l0b3I6IGltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbikgPT4gdm9pZClcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAgICAgKiBAcGFyYW0ge1Rlc3R9IHRlc3RcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wbGV4LXR5cGVzJykuVmlzaXRvcn0gdmlzaXRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVyc2VdXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxQYXJlbnQ+fSBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHJldHVybiB2aXNpdG9yKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsLFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICApXG4iLCAiaW1wb3J0IHtcclxuICBMb2FkZXJGdW5jdGlvbixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIE1ldGEsXHJcbiAgU2NyaXB0cyxcclxuICBMaW5rcyxcclxuICBMaW5rLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBwYXRoLCBmcyB9IGZyb20gXCJ+L3V0aWxzL3BhdGguc2VydmVyXCI7XHJcbmltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJ+L3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlclwiO1xyXG50eXBlIEZyb250bWF0dGVyID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGlzaGVkOiBEYXRlO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGlyZWN0b3JpZXMgPSAoc291cmNlOiBhbnkpID0+XHJcbiAgZnNcclxuICAgIC5yZWFkZGlyU3luYyhzb3VyY2UsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxyXG4gICAgLmZpbHRlcigoZGlyZW50OiBhbnkpID0+IGRpcmVudC5pc0RpcmVjdG9yeSgpKVxyXG4gICAgLm1hcCgoZGlyZW50OiBhbnkpID0+IGRpcmVudC5uYW1lKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IFBhdGhUb1Bvc3RzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicG9zdHNcIik7XHJcbiAgY29uc3QgcG9zdERpcnMgPSBhd2FpdCBnZXREaXJlY3RvcmllcyhQYXRoVG9Qb3N0cyk7XHJcbiAgLy8gcG9zdERpcnMgPT0gWyAnZG91YmxlLXRlc3QnLCAndGVzdC1tZHgnIF1cclxuICBjb25zdCBwb3N0RnJvbnRtYXR0ZXI6IEFycmF5PHt9PiA9IHBvc3REaXJzLm1hcChhc3luYyAocG9zdFRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IFBhdGhUb01EWCA9IHBhdGguam9pbihcclxuICAgICAgcHJvY2Vzcy5jd2QoKSxcclxuICAgICAgXCJwb3N0c1wiLFxyXG4gICAgICBgJHtwb3N0VGl0bGV9YCxcclxuICAgICAgXCJpbmRleC5tZHhcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJvb3REaXIgPSBQYXRoVG9NRFgucmVwbGFjZSgvaW5kZXgubWR4PyQvLCBcIlwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XHJcbiAgICAgIHNvdXJjZTogZnMucmVhZEZpbGVTeW5jKFBhdGhUb01EWCwgXCJ1dGY4XCIpLFxyXG4gICAgICBjd2Q6IHJvb3REaXIsXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiB7IC4uLnJlc3VsdC5mcm9udG1hdHRlciwgc2x1ZzogcG9zdFRpdGxlIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKHBvc3RGcm9udG1hdHRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXgoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSB1c2VMb2FkZXJEYXRhPEZyb250bWF0dGVyW10+KCk7XHJcbiAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+UG9zdHM8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogRnJvbnRtYXR0ZXIpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtwb3N0LnNsdWd9Pntwb3N0LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczMDY0NGQ5MycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTE9VWEdUSU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtST1pPR1NRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQTZFTjVQM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtRkpQRkxESUMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nJzp7J2lkJzoncm91dGVzL2Jsb2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLVhZNkYzRFlMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9ibG9nLyRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOic6c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRzbHVnLTJLSVJNQ0NRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VzY0Nko2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9pbmRleC1RNFIyNVY1VS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1c2NDZKNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVkRGRVVEQlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMzA2NDREOTMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFB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
