import {
    createRootRoute,
    Outlet,
    redirect
} from "@tanstack/react-router";

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
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </div>
      <hr /> */}
      <Outlet />
    </>
  );
};
