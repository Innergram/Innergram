import { createBrowserRouter,RouterProvider,RouteObject,} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/routes/Home";
import Analysis from "@/routes/Analysis";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/analysis",
    element: <Analysis />
  }
];

export default function App() {
  return (
    <ThemeProvider  defaultTheme="system" storageKey="ui-theme">
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
  );
};