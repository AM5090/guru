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

export const mockData = [
  {
    brand: "Essence",
    category: "beauty",
    id: 1,
    price: 9.99,
    rating: 2.56,
    sku: "BEA-ESS-ESS-001",
    title: "Essence Mascara Lash Princess",
  },
  {
    brand: "Glamour Beauty",
    category: "beauty",
    id: 2,
    price: 19.99,
    rating: 2.86,
    sku: "BEA-GLA-EYE-002",
    title: "Eyeshadow Palette with Mirror",
  },
  {
    brand: "Velvet Touch",
    category: "beauty",
    id: 3,
    price: 14.99,
    rating: 4.64,
    sku: "BEA-VEL-POW-003",
    title: "Powder Canister",
  },
  {
    brand: "Chic Cosmetics",
    category: "beauty",
    id: 4,
    price: 12.99,
    rating: 4.36,
    sku: "BEA-CHI-LIP-004",
    title: "Red Lipstick",
  },
  {
    brand: "Nail Couture",
    category: "beauty",
    id: 5,
    price: 8.99,
    rating: 4.32,
    sku: "BEA-NAI-NAI-005",
    title: "Red Nail Polish",
  },
  {
    brand: "Calvin Klein",
    category: "fragrances",
    id: 6,
    price: 49.99,
    rating: 4.37,
    sku: "FRA-CAL-CAL-006",
    title: "Calvin Klein CK One",
  },
  {
    brand: "Chanel",
    category: "fragrances",
    id: 7,
    price: 129.99,
    rating: 4.26,
    sku: "FRA-CHA-CHA-007",
    title: "Chanel Coco Noir Eau De",
  },
  {
    brand: "Dior",
    category: "fragrances",
    id: 8,
    price: 89.99,
    rating: 3.8,
    sku: "FRA-DIO-DIO-008",
    title: "Dior J'adore",
  },
  {
    brand: "Dolce & Gabbana",
    category: "fragrances",
    id: 9,
    price: 69.99,
    rating: 3.96,
    sku: "FRA-DOL-DOL-009",
    title: "Dolce Shine Eau de",
  },
  {
    brand: "Gucci",
    category: "fragrances",
    id: 10,
    price: 79.99,
    rating: 2.74,
    sku: "FRA-GUC-GUC-010",
    title: "Gucci Bloom Eau de",
  },
  {
    brand: "Annibale Colombo",
    category: "furniture",
    id: 11,
    price: 1899.99,
    rating: 4.77,
    sku: "FUR-ANN-ANN-011",
    title: "Annibale Colombo Bed",
  },
  {
    brand: "Annibale Colombo",
    category: "furniture",
    id: 12,
    price: 2499.99,
    rating: 3.92,
    sku: "FUR-ANN-ANN-012",
    title: "Annibale Colombo Sofa",
  },
  {
    brand: "Furniture Co.",
    category: "furniture",
    id: 13,
    price: 299.99,
    rating: 2.87,
    sku: "FUR-FUR-BED-013",
    title: "Bedside Table African Cherry",
  },
  {
    brand: "Knoll",
    category: "furniture",
    id: 14,
    price: 499.99,
    rating: 4.88,
    sku: "FUR-KNO-KNO-014",
    title: "Knoll Saarinen Executive Conference Chair",
  },
  {
    brand: "Bath Trends",
    category: "furniture",
    id: 15,
    price: 799.99,
    rating: 3.59,
    sku: "FUR-BAT-WOO-015",
    title: "Wooden Bathroom Sink With Mirror",
  },
  {
    category: "groceries",
    id: 16,
    price: 1.99,
    rating: 4.19,
    sku: "GRO-BRD-APP-016",
    title: "Apple",
  },
  {
    category: "groceries",
    id: 17,
    price: 12.99,
    rating: 4.47,
    sku: "GRO-BRD-BEE-017",
    title: "Beef Steak",
  },
  {
    category: "groceries",
    id: 18,
    price: 8.99,
    rating: 3.13,
    sku: "GRO-BRD-FOO-018",
    title: "Cat Food",
  },
  {
    category: "groceries",
    id: 19,
    price: 9.99,
    rating: 3.19,
    sku: "GRO-BRD-CHI-019",
    title: "Chicken Meat",
  },
  {
    category: "groceries",
    id: 20,
    price: 4.99,
    rating: 4.8,
    sku: "GRO-BRD-COO-020",
    title: "Cooking Oil",
  },
  {
    category: "groceries",
    id: 21,
    price: 1.49,
    rating: 4.07,
    sku: "GRO-BRD-CUC-021",
    title: "Cucumber",
  },
  {
    category: "groceries",
    id: 22,
    price: 10.99,
    rating: 4.55,
    sku: "GRO-BRD-FOO-022",
    title: "Dog Food",
  },
  {
    category: "groceries",
    id: 23,
    price: 2.99,
    rating: 2.53,
    sku: "GRO-BRD-EGG-023",
    title: "Eggs",
  },
  {
    category: "groceries",
    id: 24,
    price: 14.99,
    rating: 3.78,
    sku: "GRO-BRD-FIS-024",
    title: "Fish Steak",
  },
  {
    category: "groceries",
    id: 25,
    price: 1.29,
    rating: 3.25,
    sku: "GRO-BRD-GRE-025",
    title: "Green Bell Pepper",
  },
  {
    category: "groceries",
    id: 26,
    price: 0.99,
    rating: 3.66,
    sku: "GRO-BRD-GRE-026",
    title: "Green Chili Pepper",
  },
  {
    category: "groceries",
    id: 27,
    price: 6.99,
    rating: 3.97,
    sku: "GRO-BRD-HON-027",
    title: "Honey Jar",
  },
  {
    category: "groceries",
    id: 28,
    price: 5.49,
    rating: 3.39,
    sku: "GRO-BRD-CRE-028",
    title: "Ice Cream",
  },
  {
    category: "groceries",
    id: 29,
    price: 3.99,
    rating: 3.94,
    sku: "GRO-BRD-JUI-029",
    title: "Juice",
  },
  {
    category: "groceries",
    id: 30,
    price: 2.49,
    rating: 4.93,
    sku: "GRO-BRD-KIW-030",
    title: "Kiwi",
  },
];

// brand: string;
// id: number;
// price: number;
// rating: number;
// sku: string;
// title: string;
