import type { ColumnsType } from "antd/es/table";
import type { OrdersTableData } from "./type";
import { DotMenu, Plus } from "../shared/icons";

export const columns: ColumnsType<OrdersTableData> = [
  {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    render: (_, record) => (
      <div className="titleInfo">
        <div className="plug"></div>
        <div className="orderTitle">
          <span>{record.title}</span>
          <span>{record.category}</span>
        </div>
      </div>
    ),
    width: 450,
  },
  {
    title: "Вендор",
    dataIndex: "brand",
    key: "brand",
    align: "center",
  },
  {
    title: "Артикул",
    dataIndex: "sku",
    key: "sku",
    align: "center",
    width: "250px",
  },
  {
    title: "Оценка",
    dataIndex: "rating",
    key: "rating",
    render: (rating) => (
      <span>
        <span className={rating < 3.3 ? "lowRating" : ""}>{rating}</span>/5
      </span>
    ),
    align: "center",
  },
  {
    title: "Цена, ₽",
    dataIndex: "price",
    key: "price",
    render: (price) => (
      <span>
        {price}
        <span className="rounding">, 00</span>
      </span>
    ),
    align: "center",
  },
  {
    title: "",
    render: () => (
      <div className="">
        <button className={["tableButton", "addedButton"].join(" ")}>
          <Plus />
        </button>
        <button className={["tableButton", "menuButton"].join(" ")}>
          <DotMenu />
        </button>
      </div>
    ),
    align: "center",
  },
];
