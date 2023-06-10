import { Outlet, RouterProvider } from "react-router";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Chapter from "./pages/chapter";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import './styles/app.scss';
import Book from "./pages/book";

const Layout = () => {
  return (
    <div className="app">
      <div className="navBar"><NavBar /></div>
      <div className="bodyContent"><Outlet /></div>
      <Footer />
    </div>
  );
};

const ChapterLyout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/book',
        element:<Book/>
      }
    ]
  },
  {
    path: '/chapter',
    element: <ChapterLyout />,
    children: [
      {
        path: '/chapter',
        element: <Chapter />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
