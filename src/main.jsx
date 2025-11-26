import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/Pages/Register.jsx";
import Login from "./components/Pages/Login.jsx";
import ForgotPassword from "./components/Pages/ForgotPassword.jsx";
import About from "./components/Pages/About.jsx";
import Layout from "./components/Layouts/Layout.jsx";
import Home from "./components/Pages/Home.jsx";
import Contact from "./components/Pages/Contact.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import AddTransaction from "./components/Pages/AddTransaction.jsx";
import { TransactionProvider } from "./context/TransactionContext.jsx";
import ViewTransactions from "./components/Pages/ViewTransactions.jsx";
import EditTransaction from "./components/Pages/EditTransaction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/add-transaction",
        element: (
          <ProtectedRoute>
            <AddTransaction />
          </ProtectedRoute>
        ),
      },

      {
        path: "/edit-transaction/:id",
        element: (
          <ProtectedRoute>
            <EditTransaction />
          </ProtectedRoute>
        ),
      },

      {
        path: "/view-transactions",
        element: (
          <ProtectedRoute>
            <ViewTransactions />
          </ProtectedRoute>
        ),
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <TransactionProvider>
        <RouterProvider router={router} />
      </TransactionProvider>
    </UserContextProvider>
  </StrictMode>
);
