import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Table } from "../components/Table";
import LoginPage from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} />
      <Route path="orders" element={<Table data={[]} />} />
    </>
  )
);
