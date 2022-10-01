import { Titles } from "./components/Titles/Titles";
import { NotFound } from "./components/NotFound/NotFound";
import { Home } from "./components/Home/Home";

interface RouteAttributes {
  path: string;
  name: string;
  jsx: JSX.Element;
}

// TODO: path and jsx to be moved to a constants file
const routes: RouteAttributes[] = [
  {
    path: "/*",
    name: "Not Found",
    jsx: <NotFound />,
  },
  {
    path: "/",
    name: "Home",
    jsx: <Home />,
  },
  {
    path: "/movie",
    name: "Movie",
    jsx: <Titles title_type="movie" />,
  },
  {
    path: "/series",
    name: "Series",
    jsx: <Titles title_type="series" />,
  },
];

export default routes;
