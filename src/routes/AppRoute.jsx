import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/common/loader/Loader";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const AboutUs = lazy(() => import("../components/common/about-us/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Community = lazy(() => import("../pages/Community"));
const Test = lazy(() => import("../test/Test"));
const BookSwap = lazy(() => import("../pages/BookSwap"));
const AddBook = lazy(() => import("../admin/pages/AddBook"));
const ManageBook = lazy(() => import("../admin/pages/ManageBook"));
const AddCommunity = lazy(() => import("../admin/pages/AddCommunity"));
const ManageCommunity = lazy(() => import("../admin/pages/ManageCommunity"));
const ManageUsers = lazy(() => import("../admin/pages/ManageUsers"));
const ManagePosts = lazy(() => import("../admin/pages/ManagePosts"));
const Profile = lazy(() => import("../pages/Profile"));
const PostsProfile = lazy(() =>
  import("../components/common/profile/PostsProfile/PostsProfile")
);
const DashboardProfile = lazy(() =>
  import("../components/common/profile/dashboard/DashboardProfile")
);
const Books = lazy(() => import("../pages/books/Books"));
const Book = lazy(() => import("../components/common/book/Book"));
const AboutMe = lazy(() =>
  import("../components/common/profile/aboutuser/AboutMe")
);
const AdminDashboard = lazy(() => import("../admin/pages/AdminDashboard"));
const BookReading = lazy(() => import("../pages/BookReading/BookReading"));
const Chat = lazy(() => import("../pages/Chat"));
const Wishlist = lazy(() => import("../pages/wishlist/Wishlist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "book/:id",
        element: <Book />,
      },
      {
        path: "bookSwap",
        element: <BookSwap />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "community/:id",
        element: <Community />,
      },
      {
        path: "bookReading/:userid/:bookid",
        element: <BookReading />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "profile/:Userid",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <PostsProfile />,
          },
          {
            path: "posts",
            element: <PostsProfile />,
          },
          {
            path: "dashboard",
            element: <DashboardProfile />,
          },
          {
            path: "about",
            element: <AboutMe />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            path: "addbook",
            element: <AddBook />,
          },
          {
            path: "managebook",
            element: <ManageBook />,
          },
          {
            path: "addcommunity",
            element: <AddCommunity />,
          },
          {
            path: "managecommunity",
            element: <ManageCommunity />,
          },
          {
            path: "manageusers",
            element: <ManageUsers />,
          },
          {
            path: "admindashboard",
            element: <AdminDashboard />,
          },
          {
            path: "manageposts",
            element: <ManagePosts />,
          },
        ],
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "chat/:userId",
        element: <Chat />,
      },
    ],
  },
]);

export default function AppRoute() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
