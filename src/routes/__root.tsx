import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import appCss from "../app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  );
}
