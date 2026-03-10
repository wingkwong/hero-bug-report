import { createRootRoute, Outlet, createFileRoute, lazyRouteComponent, redirect, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
const appCss = "/assets/app-BNkCCoSG.css";
const Route$2 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("div", { children: 'Hello "__root"!' }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$1 = () => import("./test-TAWnWnT1.js");
const Route$1 = createFileRoute("/test")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Df7MRUHn.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  beforeLoad: ({
    context
  }) => {
    if (!context.session) {
      throw redirect({
        to: "/auth/register"
      });
    }
  }
});
const TestRoute = Route$1.update({
  id: "/test",
  path: "/test",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  TestRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    // context: { ...rqContext },
    // Wrap: (props: { children: React.ReactNode }) => (
    // 	<NuqsAdapter>
    // 		<TSQueryProvider {...rqContext}>
    // 			{props.children}
    // 		</TSQueryProvider>
    // 	</NuqsAdapter>
    // ),
    defaultViewTransition: true
    // defaultPendingComponent: () => <div>loading...</div>,
  });
  return router;
}
export {
  getRouter
};
