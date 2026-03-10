import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
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
    defaultViewTransition: true,
    // defaultPendingComponent: () => <div>loading...</div>,
  });

  // setupRouterSsrQueryIntegration({
  //   router,
  //   // queryClient: rqContext.queryClient,
  // });

  return router;
}
