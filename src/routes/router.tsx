import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrdersTablePage from "../pages/OrdersTablePage/OrdersTablePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} />
      <Route path="orders" element={<OrdersTablePage />} />
    </>
  )
);
