var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
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

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
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
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
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
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-NVKMPVQH.css";
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
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

// route-module:/Users/noahhein/Dev/blog2/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/navbar.tsx
init_react();
var import_remix2 = __toModule(require_remix());
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
var tailwind_default = "/build/_assets/tailwind-2YWIUW2R.css";

// route-module:/Users/noahhein/Dev/blog2/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
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
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false));
}

// route-module:/Users/noahhein/Dev/blog2/app/routes/index.tsx
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

// route-module:/Users/noahhein/Dev/blog2/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links2
});
init_react();
var import_github_dark_dimmed = __toModule(require_github_dark_dimmed());
var import_remix4 = __toModule(require_remix());
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: import_github_dark_dimmed.default
    }
  ];
};
function Blog() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose lg:prose-xl py-10"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// mdx:/Users/noahhein/Dev/blog2/app/routes/blog/putting-yourself-out-there.mdx
var putting_yourself_out_there_exports = {};
__export(putting_yourself_out_there_exports, {
  attributes: () => attributes,
  default: () => putting_yourself_out_there_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links3,
  meta: () => meta2
});
init_react();
var import_react = __toModule(require("react"));
var attributes = {
  "title": "Putting Yourself Out There",
  "date": new Date(16115328e5),
  "meta": {
    "title": "Putting Yourself Out There",
    "description": "yadda yadda its a description",
    "keywords": "networking, career, public speaking"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    h3: "h3",
    a: "a",
    em: "em"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h1, null, "Putting Yourself Out There"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Today I learned the value of putting yourself out there. I had multiple opportunities that came to me recently that I thought were entirely impossible. I wouldn\u2019t have been able to dream them up, they were so beneficial for my current situation. There are many ways that you can put yourself \u201Cout there\u201D, however the way in which I did so was through networking. Plain old people talking to people."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I naturally am someone who enjoys conversations, but not someone who likes to start them. I won\u2019t go into the whole introvert/extrovert thing, but I do want to speak to those who think that putting yourself out in public or exposing yourself to the community online is scary. It is. No ifs ands or buts about it. It is scary, and at times difficult and draining, but always worth it, and not for the reasons you think it is. I\u2019ll first talk about the benefits, and then a few ways you can wade into the ocean that is the public internet."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "For the remainder of this post I will group all public-facing interaction whether it be posting blogs, creating videos, making twitter posts, cold emailing people, talking to folks on twitter, joining a discord community, etc., into \u201CPut[ting] Yourself out There\u201D. PYT for short."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "If you are someone who finds the idea of PYT daunting or scary, there is usually a doubt of whether or not the reward of doing the thing is actually greater than whatever the perceived risk is. I want to talk to you for a moment because we need to fundamentally shift what you think the reward here is."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Many of the articles you will read, the videos you watch, and the feeds you scroll will tell you:  \u201Cbecause of PYT I got a job offer from my dream FAANG company, they just sent me a job offer straight into my inbox! If you do just like me it\u2019ll happen to you as well!\u201D. I don\u2019t want to say that DOESN\u2019T happen, but it is not what you should be looking for. The process doesn\u2019t yield a reward. The reward is the process."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "##The Reward is the Process"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Now you may wonder how in the hell that is supposed to make any sense what-so-ever, and I\u2019ll tell you. When you PYT it is much like a date. You look in the mirror before you leave for dinner if you aren\u2019t a complete savage. The same goes for the work you plan to show others and the interactions you have with strangers on the internet."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "You put your best foot forward. That doesn\u2019t mean you don\u2019t ever put your foot in your mouth, or make an ass of yourself. It just means you\u2019re trying your best. There is intrinsic value in that. The more you do it the more you are putting your best foot forward and what becomes a good first step, becomes a good walk, becomes a good marathon."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Make no mistake, It is a marathon. You don\u2019t just get off the couch and run a marathon after you\u2019ve been watching coding tutorials without actually coding anything, telling yourself you\u2019re being productive. If you did that you would fall flat on your face and you would expect to do so. Treat PYT the same way you would treat training for a marathon."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "How would you train to run a marathon? You would run. How do you get those results from PYT? You do it. You suck it up and you do it. Even when you don\u2019t want to. ESPECIALLY when you don't want to. you do the damn thing. Marathon runners do not run with different legs when they train compared to when they actually run one. It\u2019s all running. So why do you see the difference between PYT, and being an active community-member/blogger/youtuber/author/networking-guru?\nIt is all PYT."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "The benefits to just putting yourself out there are that you get practice getting your shit together, and putting your best foot forward. When you do that on a regular basis it stops becoming your \u201Cbest foot\u201D and just becomes putting your foot forward. That\u2019s just walking.  Pretty easy!  Well, no one starts out that way so here is a place to start."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Actually Putting Yourself Out There"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Everyone has different comfort levels, so I trust that you know yourself well enough to know what's pushing boundaries compared to breaking them. You can choose whatever you find challenging but doable. However, the more discomfort you can endure, the greater the benefits will be to yourself and the greater the opportunities will be that eventually come your way. Do something to PYT but don\u2019t make it so uncomfortable you can\u2019t do it again. You will build tolerance to PYT and things you once found terrifying won\u2019t seem as daunting after doing it for a bit."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "What I Did"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I will try to speak from a place of familiarity, so I will go over what I did to PYT. However, you can really apply this to anything; whether it's blogging, creating videos, streaming, or teaching. I found myself learning to code and wanting to find more info because reddit, my only social media at the time, was not cutting it for finding software development and data science content. I was hungry and that\u2019s important; hunger drives you."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Step One"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "This led me to Twitter where I followed people that I thought were educational, and posted good content that I found enriched myself. If I were in a neighborhood they were the pillars of the local community. I did not do anything at first, I only consumed. This is fine, if you\u2019re reading this to take away action-items, this is step one. Find an area that interests you, and simply learn about it."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Step Two"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Eventually I started liking the posts. Yes this is actually what my step two was, because I literally wouldn\u2019t even like the posts at first because that was too much for me at the time. This is why I say it\u2019s okay to start slow. You never know where it will lead you. I can\u2019t judge someone for not PYT as I was the quintessential lurker. I\u2019ve been on reddit for over 8 years and have less than 50 karma."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "Step Three"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Here is the big step three. I started commenting. You can comment as little as you\u2019re comfortable with, but the more you start talking to people the less scary it is. A bad interaction with someone becomes trivial instead of traumatizing, but only with experience and the scope that comes with it. I started breaking out of my shell a bit here as I really liked logging into Twitter and seeing that I had notifications. That was a new experience for me. I made it a game. I wanted to always have a notification when I checked Twitter the next time. So I made a rule, even if I thought I didn't\u2019 have something worth saying,  I couldn\u2019t scroll past 10 posts without commenting on one of the posts."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, "????"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I am going to speed up a bit here, as once you\u2019re out of your shell and talking to people, you will start to form natural relationships with the people you interact with more. After this I started making posts, and while I\u2019m still not great about this I try to post something every day. Twitter is a pretty low bar at only 140 characters and knowing that people aren\u2019t going to really see it for a long time if you post something silly or insignificant, makes it a bit easier to PYT for me personally."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Profit"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Here is where opportunities started coming for me. I was following this person on Twitter that has a book called ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://www.learninpublic.org/"
  }, /* @__PURE__ */ import_react.default.createElement(_components.em, null, "The Coding Career Handbook")), " that is right up my alley and I would gain quite a bit of value from. What\u2019s the problem then? As I write this I am a bit strapped for cash. Not something I am proud of, but something I am actively working to overcome by learning to code. I knew the author ", /* @__PURE__ */ import_react.default.createElement(_components.a, {
    href: "https://twitter.com/swyx"
  }, "swyx"), " believed very much in putting yourself out there. I thought he would appreciate someone doing the same, so I did."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I just told another human being that I had no relationship with the honest truth. I wanted his book, but didn\u2019t have money to buy it. He sent me a review copy 5 minutes later. In full transparency of the moment and what it meant to me, I cried when I read the email. Not a huge reward, and certainly not a FAANG job offer, but it was a tangible thing that would have otherwise been out of reach. What pushed this whole PYT thing over the edge for me and led me to write this up is the following story that happened within 24-hours of this one."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I had an acquaintance that I had met on LinkedIn (doing similar things on LinkedIn as twitter since I am currently looking for a Software Development role) reach out to me saying that he knew someone who was looking to have a website done for him. Let me reiterate. Me. someone who is currently looking for a developer job. Have a client quite literally LAND in my lap? I was ecstatic."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Take Aways"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "I really want to emphasize that while these wonderful things happened, they are not the best thing that has come of this. I have had multiple calls with this LinkedIn acquaintance. I gained so much from this person just talking to them, and listening to their insights, and how they think about the world. That was the reward. The process of building up this relationship is the reward. It just happens to have other benefits such as client work."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "If there\u2019s one thing that you take away from this, I hope it is that the reward is the process. PYT creates so much value not only for yourself but for everyone around you. I hope you have the courage to start doing it yourself and prove not only to yourself, but everyone that is too shy or scared to PYT currently that we need their voice to be heard as well."));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var putting_yourself_out_there_default = MDXContent;
var filename = "putting-yourself-out-there.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links3 = void 0;

// mdx:/Users/noahhein/Dev/blog2/app/routes/blog/first-post.mdx
var first_post_exports = {};
__export(first_post_exports, {
  attributes: () => attributes2,
  default: () => first_post_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links4,
  meta: () => meta3
});
init_react();
var import_react2 = __toModule(require("react"));
var attributes2 = {
  "title": "first title",
  "date": new Date(16428096e5),
  "meta": {
    "title": "first title"
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    pre: "pre",
    code: "code"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(_components.h2, null, attributes2.title), "\n", attributes2.date.toUTCString(), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.pre, null, /* @__PURE__ */ import_react2.default.createElement(_components.code, {
    className: "language-go"
  }, "def hello():\n  print('gm!')\n\n")));
  return MDXLayout ? /* @__PURE__ */ import_react2.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var first_post_default = MDXContent2;
var filename2 = "first-post.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta3 = typeof attributes2 !== "undefined" && attributes2.meta;
var links4 = void 0;

// route-module:/Users/noahhein/Dev/blog2/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader
});
init_react();
var import_remix5 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_client = __toModule(require("mdx-bundler/client"));
var React4 = __toModule(require("react"));
var import_path2 = __toModule(require("path"));

// app/utils/compile-mdx.server.ts
init_react();
var import_mdx_bundler = __toModule(require("mdx-bundler"));
var import_path = __toModule(require("path"));
var import_fs = __toModule(require("fs"));
async function compileMdx(slug, githubFiles) {
  const indexRegex = new RegExp(`${slug}\\/index.mdx?$`);
  const indexFile = githubFiles.find(({ path: path3 }) => indexRegex.test(path3));
  if (!indexFile)
    return null;
  const rootDir = indexFile.path.replace(/index.mdx?$/, "");
  const source = import_fs.default.readFileSync(indexFile.path, "utf8");
  try {
    if (process.platform === "win32") {
      process.env.ESBUILD_BINARY_PATH = import_path.default.join(process.cwd(), "node_modules", "esbuild", "esbuild.exe");
    } else {
      process.env.ESBUILD_BINARY_PATH = import_path.default.join(process.cwd(), "node_modules", "esbuild", "bin", "esbuild");
    }
    const { frontmatter, code } = await (0, import_mdx_bundler.bundleMDX)({
      source,
      cwd: rootDir
    });
    return { code, frontmatter };
  } catch (error) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}

// route-module:/Users/noahhein/Dev/blog2/app/routes/blog/$slug.tsx
var loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  const PathToMDX = import_path2.default.join(process.cwd(), "posts", `${params.slug}`, "index.mdx");
  const post = await compileMdx(params.slug, [{ path: PathToMDX }]);
  if (!post)
    return null;
  return post;
};
function PostSlug() {
  const { code, frontmatter } = (0, import_remix5.useLoaderData)();
  const Component = React4.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("header", null, /* @__PURE__ */ React4.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React4.createElement("p", null, frontmatter.description)), /* @__PURE__ */ React4.createElement("main", null, /* @__PURE__ */ React4.createElement(Component, null)));
}

// route-module:/Users/noahhein/Dev/blog2/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex,
  loader: () => loader2
});
init_react();
var loader2 = () => {
  return 2;
};
function BlogIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts"));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
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
  "routes/blog/putting-yourself-out-there": {
    id: "routes/blog/putting-yourself-out-there",
    parentId: "routes/blog",
    path: "putting-yourself-out-there",
    index: void 0,
    caseSensitive: void 0,
    module: putting_yourself_out_there_exports
  },
  "routes/blog/first-post": {
    id: "routes/blog/first-post",
    parentId: "routes/blog",
    path: "first-post",
    index: void 0,
    caseSensitive: void 0,
    module: first_post_exports
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
