import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import { ParallaxProvider } from "react-scroll-parallax";

export const Route = createRootRoute({
  component: () => <RootLayout />,
  beforeLoad: ({ location }) => {
    if (location.pathname === "/") {
      throw redirect({
        to: "/furniture-website/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

export const RootLayout = () => {
  return (
    <ParallaxProvider>
      <Outlet />
      <Toaster />
    </ParallaxProvider>
  );
};
