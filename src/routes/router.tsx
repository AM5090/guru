import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Table } from "../components/Table";
import { mockData } from "../components/Table/settings";
import { LoginModal } from "../components/LoginModal";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginModal />} />
      <Route path="orders" element={<Table data={mockData} />} />
    </>
  )
);
