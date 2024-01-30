import { createBrowserRouter,RouterProvider,RouteObject,} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/routes/Home";
import Analysis from "@/routes/Analysis";
import Takedemo from "@/routes/takedemo";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/analysis",
    element: <Analysis />
  },
  {
    path: "/takeDemo",
    element: <Takedemo />
  }
];

export default function App() {
  return (
    <ThemeProvider  defaultTheme="system" storageKey="ui-theme">
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
  );
};